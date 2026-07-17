import nodemailer from "nodemailer";

export default async function handler(req: any, res: any ) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const {
    firstname,
    lastname,
    jobtitle,
    company,
    linkedin,
    email,
    phone,
    message,
  } = req.body;

  if (!firstname || !lastname || !email || !company || !jobtitle || !message) {
    return res.status(400).json({
      error: "Missing required fields"
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  async function thirdPartyFunction() {
      throw new Error("Request failed");
  }

  try {
    await transporter.verify();
    
    await transporter.sendMail({
      from: `"${firstname} ${lastname}" <${process.env.SENDER_USER}>`,
      to: process.env.SENDER_USER,
      replyTo: email,
      subject: `[FLUMIX Consultation Request] ${firstname} ${lastname} - ${company}`,
      html: `
    <div style="font-family: Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);">
      <div style="background-color: #0f172a; padding: 24px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;">FLUMIX &bull; Advisory Desk</h1>
        <p style="color: #60a5fa; font-size: 12px; margin: 4px 0 0 0; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase;">New Engagement Inquiry</p>
      </div>
      <div style="padding: 24px; background-color: #ffffff;">
        <p style="font-size: 14px; line-height: 1.5; color: #475569;">
          A strategic consultation request has been received from the FLUMIX corporate contact gateway.
        </p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; font-size: 12px; color: #64748b; text-transform: uppercase; width: 150px;">Full Name</td>
            <td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${firstname} ${lastname}</td>
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
        <p style="font-size: 11px; color: #64748b; margin: 0;">This email was sent from the FLUMIX platform contact desk.</p>
      </div>
    </div>
  `,
    });

    return res.status(200).json({
      success: true
    });
  } catch (err:any) {
    console.error(err);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}
