import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  console.log(req);

  const {
    requestfor,
    firstname,
    lastname,
    jobtitle,
    linkedin,
    email,
    phone,
    message,
  } = req.body;

  // Validate required fields
  if (
    !firstname ||
    !lastname ||
    !jobtitle ||
    !email ||
    !message
  ) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.verify();

    await transporter.sendMail({
      from: `"${firstname} ${lastname}" <${process.env.SENDER_USER}>`,
      to: process.env.SENDER_USER,
      replyTo: email,
      subject: `[FLUMIX Consultation Request] ${firstname} ${lastname}`,
      html: `
      <div style="font-family:Arial,sans-serif;color:#1e293b;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
        <div style="background:#0f172a;padding:24px;text-align:center;">
          <h1 style="margin:0;color:#fff;">FLUMIX</h1>
          <p style="margin:6px 0 0;color:#60a5fa;">New Consultation Request</p>
        </div>

        <div style="padding:24px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;font-weight:bold;width:160px;">Full Name</td>
              <td>${firstname} ${lastname}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">Job Title</td>
              <td>${jobtitle}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">Email</td>
              <td>
                <a href="mailto:${email}">
                  ${email}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">Phone</td>
              <td>${phone || "Not provided"}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">LinkedIn ID</td>
              <td>${
                linkedin
                  ? `<a href="${linkedin}" target="_blank">${linkedin}</a>`
                  : "Not provided"
              }</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:bold;">Request From</td>
              <td>${requestfor || "--"}</td>
            </tr>
          </table>

          <div style="margin-top:24px;padding:16px;background:#f8fafc;border-radius:8px;">
            <h3 style="margin-top:0;">Project Details</h3>
            <p style="white-space:pre-wrap;margin:0;">${message}</p>
          </div>
        </div>

        <div style="padding:16px;text-align:center;background:#f1f5f9;">
          <small>This email was sent from the FLUMIX contact form.</small>
        </div>
      </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (err: any) {
    console.error("Email Error:", err);

    return res.status(500).json({
      success: false,
      error: err.message || "Failed to send email.",
    });
  }
}