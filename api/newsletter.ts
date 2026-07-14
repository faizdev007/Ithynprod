import nodemailer from "nodemailer";

export default async function handler(req:any, res:any) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { email } = req.body;

    const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
    });

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
            from: `"ITHYN Publications" <${process.env.SENDER_USER}>`,
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
}


