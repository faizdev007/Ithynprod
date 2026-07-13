import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = 3000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Creates a Nodemailer transporter lazily when needed.
 * This prevents the app from crashing on start if GMAIL credentials are not present.
 */
function getEmailTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.warn("⚠️ GMAIL_USER or GMAIL_APP_PASSWORD not set. Emails will be logged but not sent.");
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

// -------------------------------------------------------------
// API ENDPOINTS
// -------------------------------------------------------------

// 1. Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    smtpConfigured: !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD),
  });
});

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
        from: `"${name} (ITHYN Inquiry)" <${process.env.GMAIL_USER}>`,
        to: process.env.SENDER_USER,
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
      message: "Form logged successfully. Configure GMAIL_USER and GMAIL_APP_PASSWORD for real emails." 
    });
  }
});

// 3. Squad Builder / Certified Expert Reservation (Hire Experts Page) Submission
app.post("/api/hire-experts", async (req, res) => {
  const { 
    clientName, 
    companyName, 
    clientEmail, 
    specialRequirements,
    squadDetails 
  } = req.body;

  if (!clientName || !clientEmail || !companyName) {
    return res.status(400).json({ error: "Missing required client details (name, email, company)" });
  }

  console.log(`📨 Received expert squad reservation request from ${clientName} (${companyName})`);

  const { dataEngineers = 0, aiArchitects = 0, analyticsEngineers = 0, qaEngineers = 0, totalSquadSize = 0, squadDuration = 1 } = squadDetails || {};

  const transporter = getEmailTransporter();

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);">
      <div style="background-color: #1e3a8a; padding: 24px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;">ITHYN &bull; Squad Reservation</h1>
        <p style="color: #93c5fd; font-size: 12px; margin: 4px 0 0 0; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase;">Certified Expert Squad Configured</p>
      </div>
      <div style="padding: 24px; background-color: #ffffff;">
        <p style="font-size: 14px; line-height: 1.5; color: #475569;">
          A B2B Squad Reservation inquiry has been calculated and submitted from the Hire Certified Data & AI Experts page.
        </p>

        <h3 style="font-size: 14px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-top: 24px; color: #0f172a; text-transform: uppercase; font-weight: bold; letter-spacing: 0.025em;">Client Specifications</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-weight: bold; font-size: 12px; color: #64748b; width: 150px;">Contact Name</td>
            <td style="padding: 8px 0; font-size: 13px; color: #0f172a;">${clientName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-weight: bold; font-size: 12px; color: #64748b;">Corporate Email</td>
            <td style="padding: 8px 0; font-size: 13px; color: #0f172a;"><a href="mailto:${clientEmail}" style="color: #1d4ed8; text-decoration: none;">${clientEmail}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-weight: bold; font-size: 12px; color: #64748b;">Company Name</td>
            <td style="padding: 8px 0; font-size: 13px; color: #0f172a;">${companyName}</td>
          </tr>
        </table>

        <h3 style="font-size: 14px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-top: 24px; color: #0f172a; text-transform: uppercase; font-weight: bold; letter-spacing: 0.025em;">Configured Squad Architecture</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-size: 13px; color: #475569;">Data Platform Engineers</td>
            <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #0f172a; text-align: right;">${dataEngineers} FTEs</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-size: 13px; color: #475569;">AI Architects & LLM Specialists</td>
            <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #0f172a; text-align: right;">${aiArchitects} FTEs</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-size: 13px; color: #475569;">Analytics Engineers & BI Specialists</td>
            <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #0f172a; text-align: right;">${analyticsEngineers} FTEs</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-size: 13px; color: #475569;">QA Validation Specialists</td>
            <td style="padding: 8px 0; font-size: 13px; font-weight: bold; color: #0f172a; text-align: right;">${qaEngineers} FTEs</td>
          </tr>
          <tr style="background-color: #eff6ff; font-weight: bold;">
            <td style="padding: 10px 8px; font-size: 13px; color: #1e3a8a;">Total Resource Strength</td>
            <td style="padding: 10px 8px; font-size: 14px; color: #1e3a8a; text-align: right;">${totalSquadSize} FTEs</td>
          </tr>
          <tr style="border-top: 1px solid #e2e8f0; font-weight: bold;">
            <td style="padding: 8px 0; font-size: 13px; color: #475569;">Committed Tenure</td>
            <td style="padding: 8px 0; font-size: 13px; color: #0f172a; text-align: right;">${squadDuration} Months</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 13px; color: #475569;">Projected Output Rate</td>
            <td style="padding: 8px 0; font-size: 13px; color: #1d4ed8; text-align: right; font-weight: bold;">${totalSquadSize * 40} Core Hours / week</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px dashed #e2e8f0;">
          <h4 style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; color: #64748b; font-family: monospace;">Special / Compliance Requirements</h4>
          <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${specialRequirements || "None specified."}</p>
        </div>
      </div>
      <div style="background-color: #f1f5f9; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="font-size: 11px; color: #64748b; margin: 0;">This email was sent from the ITHYN expert planner configuration engine.</p>
      </div>
    </div>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"${clientName} (ITHYN Squad Reservation)" <${process.env.GMAIL_USER}>`,
        to: process.env.SENDER_USER,
        replyTo: clientEmail,
        subject: `[ITHYN Squad Plan Reservation] ${clientName} - ${companyName}`,
        html: emailHtml,
      });
      return res.status(200).json({ success: true, message: "Squad reservation transmitted successfully via SMTP." });
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
      message: "Squad configuration logged successfully. Configure GMAIL_USER and GMAIL_APP_PASSWORD for real SMTP emails." 
    });
  }
});

// 4. Quick Consultation Request (Home Page Block) Form Submission
app.post("/api/quick-contact", async (req, res) => {
  const { name, email, service, projectOutline } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Missing required fields (name, email)" });
  }

  console.log(`📨 Received quick contact request from ${name} (${email})`);

  const transporter = getEmailTransporter();

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);">
      <div style="background-color: #0f172a; padding: 24px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;">ITHYN &bull; Advisory Quick Request</h1>
        <p style="color: #38bdf8; font-size: 12px; margin: 4px 0 0 0; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase;">Advisory Desk Quick Form</p>
      </div>
      <div style="padding: 24px; background-color: #ffffff;">
        <p style="font-size: 14px; line-height: 1.5; color: #475569;">
          A quick consultation intake request has been received from the ITHYN home page interactive block.
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
            <td style="padding: 10px 0; font-weight: bold; font-size: 12px; color: #64748b; text-transform: uppercase;">Service Target</td>
            <td style="padding: 10px 0; font-size: 14px; color: #0f172a; font-weight: bold;">${service || "Not chosen"}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px dashed #e2e8f0;">
          <h4 style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; color: #64748b; font-family: monospace;">Inquiry Project Outline</h4>
          <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${projectOutline || "No outlines provided."}</p>
        </div>
      </div>
      <div style="background-color: #f1f5f9; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="font-size: 11px; color: #64748b; margin: 0;">This email was sent from the ITHYN quick contact desk.</p>
      </div>
    </div>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"${name} (ITHYN Quick Inquiry)" <${process.env.GMAIL_USER}>`,
        to: process.env.SENDER_USER,
        replyTo: email,
        subject: `[ITHYN Quick Consultation] ${name}`,
        html: emailHtml,
      });
      return res.status(200).json({ success: true, message: "Quick request transmitted successfully via SMTP." });
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
      message: "Quick request logged successfully. Configure GMAIL_USER and GMAIL_APP_PASSWORD for real SMTP emails." 
    });
  }
});

// 5. Insights Publication Newsletter Signup Form Submission
app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email address is required." });
  }

  console.log(`📨 Received newsletter subscription request from ${email}`);

  const transporter = getEmailTransporter();

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);">
      <div style="background-color: #047857; padding: 24px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;">ITHYN &bull; Insights Publication</h1>
        <p style="color: #a7f3d0; font-size: 12px; margin: 4px 0 0 0; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase;">New Publication Subscription</p>
      </div>
      <div style="padding: 24px; background-color: #ffffff;">
        <p style="font-size: 14px; line-height: 1.5; color: #475569;">
          A corporate representative has registered their interest to subscribe to ITHYN Insights & Analytical publications.
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; font-size: 12px; color: #64748b; text-transform: uppercase; width: 150px;">Corporate Email</td>
            <td style="padding: 10px 0; font-size: 14px; color: #047857; font-weight: bold;"><a href="mailto:${email}" style="color: #047857; text-decoration: none;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: bold; font-size: 12px; color: #64748b; text-transform: uppercase;">Subscription Date</td>
            <td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
      </div>
      <div style="background-color: #f1f5f9; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="font-size: 11px; color: #64748b; margin: 0;">This email was sent from the ITHYN insights publication list gateway.</p>
      </div>
    </div>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"ITHYN Publications" <${process.env.GMAIL_USER}>`,
        to: process.env.SENDER_USER,
        replyTo: email,
        subject: `[ITHYN Newsletter Signup] ${email}`,
        html: emailHtml,
      });
      return res.status(200).json({ success: true, message: "Newsletter signup recorded and transmitted successfully." });
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
      message: "Subscription logged successfully. Configure GMAIL_USER and GMAIL_APP_PASSWORD for real SMTP emails." 
    });
  }
});


// -------------------------------------------------------------
// VITE DEV SERVER OR STATIC FILE SERVING MIDDLEWARE
// -------------------------------------------------------------

async function initializeViteMiddleware() {
  if (process.env.NODE_ENV !== "production") {
    console.log("🛠️ Starting Vite in Development Middleware Mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    
    // Serve development assets
    app.use(vite.middlewares);
  } else {
    console.log("🚀 Starting Production Server Serving Static Assets...");
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static files
    app.use(express.static(distPath));
    
    // Handle SPA routing wildcard
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Start listening to traffic
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🌐 Server operating seamlessly on http://0.0.0.0:${PORT}`);
  });
}

// Boot the server
initializeViteMiddleware().catch((err) => {
  console.error("🔴 Server initialization failure:", err);
});
