import nodemailer from "nodemailer";

export default async function handler(req:any, res:any) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const {
        clientName,
        companyName,
        clientEmail,
        specialRequirements,
        squadDetails,
    } = req.body;

    if (!clientName || !clientEmail || !companyName) {
    return res.status(400).json({ error: "Missing required client details (name, email, company)" });
  }

  console.log(`📨 Received expert squad reservation request from ${clientName} (${companyName})`);

  const { dataEngineers = 0, aiArchitects = 0, analyticsEngineers = 0, qaEngineers = 0, totalSquadSize = 0, squadDuration = 1 } = squadDetails || {};

  const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
});

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);">
      <div style="background-color: #1e3a8a; padding: 24px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;">Flumix &bull; Squad Reservation</h1>
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
        <p style="font-size: 11px; color: #64748b; margin: 0;">This email was sent from the Flumix expert planner configuration engine.</p>
      </div>
    </div>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"${clientName} (Flumix Squad Reservation)" <${process.env.SENDER_USER}>`,
        to: process.env.SENDER_USER,
        replyTo: clientEmail,
        subject: `[Flumix Squad Plan Reservation] ${clientName} - ${companyName}`,
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
    }else{
        return res.status(200).json({
            success: true
        });

    }

}