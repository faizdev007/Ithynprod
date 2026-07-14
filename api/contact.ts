import express from "express";
import nodemailer from "nodemailer";

const app = express();

export default app;

function getEmailTransporter() {
  const user = process.env.VITE_API_GMAIL_USER;
  const pass = process.env.VITE_API_GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.warn("⚠️ VITE_API_GMAIL_USER or VITE_API_GMAIL_APP_PASSWORD not set. Emails will be logged but not sent.");
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });
}

// 2. Engagement Questionnaire (Contact Page) Form Submission
app.post("/api/contact", async (req, res) => {
  const { name, email, company, phone, serviceInterest, budget, message } = req.body;

  if (!name || !email || !company) {
    return res.status(400).json({ error: "Missing required fields (name, email, company)" });
  }

  console.log(`📨 Received contact form from ${name} (${company})`);

  const transporter = getEmailTransporter();
  
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);">
      <div style="background-color: #0f172a; padding: 24px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;">ITHYN &bull; Advisory Desk</h1>
        <p style="color: #60a5fa; font-size: 12px; margin: 4px 0 0 0; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase;">New Engagement Inquiry</p>
      </div>
      <div style="padding: 24px; background-color: #ffffff;">
        <p style="font-size: 14px; line-height: 1.5; color: #475569;">
          A strategic consultation request has been received from the ITHYN corporate contact gateway.
        </p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; font-size: 12px; color: #64748b; text-transform: uppercase; width: 150px;">Full Name</td>
            <td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; font-size: 12px; color: #64748b; text-transform: uppercase;">Corporate Email</td>
            <td style="padding: 10px 0; font-size: 14px; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; font-size: 12px; color: #64748b; text-transform: uppercase;">Company</td>
            <td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${company}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; font-size: 12px; color: #64748b; text-transform: uppercase;">Telephone</td>
            <td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${phone || "Not provided"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; font-size: 12px; color: #64748b; text-transform: uppercase;">Solution Interest</td>
            <td style="padding: 10px 0; font-size: 14px; color: #2563eb; font-weight: bold;">${serviceInterest}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; font-size: 12px; color: #64748b; text-transform: uppercase;">Budget Estimate</td>
            <td style="padding: 10px 0; font-size: 14px; color: #0f172a; font-weight: bold;">${budget}</td>
          </tr>
        </table>
        
        <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px dashed #e2e8f0;">
          <h4 style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; color: #64748b; font-family: monospace;">Inquiry Scope Details</h4>
          <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message || "No project outline message provided."}</p>
        </div>
      </div>
      <div style="background-color: #f1f5f9; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="font-size: 11px; color: #64748b; margin: 0;">This email was sent from the ITHYN platform contact desk.</p>
      </div>
    </div>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"${name} (ITHYN Inquiry)" <${process.env.VITE_API_SENDER_USER}>`,
        to: process.env.VITE_API_SENDER_USER,
        replyTo: email,
        subject: `[ITHYN Consultation Request] ${name} - ${company}`,
        html: emailHtml,
      });
      return res.status(200).json({ success: true, message: "Email transmitted successfully via SMTP." });
    } catch (err: any) {
      console.error("❌ Failed to send SMTP mail:", err);
      return res.status(200).json({ 
        success: true, 
        message: "Logged but failed to transmit over SMTP. Check credentials.", 
        warning: err.message 
      });
    }
  } else {
    return res.status(200).json({ 
      success: true, 
      message: "Form logged successfully. Configure VITE_API_GMAIL_USER and VITE_API_GMAIL_APP_PASSWORD for real emails." 
    });
  }
});