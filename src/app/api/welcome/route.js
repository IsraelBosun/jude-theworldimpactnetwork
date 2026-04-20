import nodemailer from "nodemailer";

const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://chat.whatsapp.com/placeholder";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request) {
  const { firstName, full_name, email } = await request.json();
  const name = firstName || full_name?.split(" ")[0] || "Friend";

  try {
    await transporter.sendMail({
      from: `TMMF Community <${process.env.GMAIL_USER}>`,
      to: email,
      replyTo: process.env.GMAIL_USER,
      subject: `Welcome to TMMF, ${name}!`,
      html: emailTemplate({ firstName: name }),
    });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }

  return Response.json({ success: true });
}

function emailTemplate({ firstName }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to TMMF</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#173574;padding:48px 40px;text-align:center;">
              <p style="margin:0 0 8px;color:#D4AF37;font-size:36px;font-weight:900;letter-spacing:-1px;line-height:1;">TMMF.</p>
              <p style="margin:0;color:rgba(255,255,255,0.5);font-size:10px;letter-spacing:4px;text-transform:uppercase;">The Marketplace Ministers' Forum</p>
            </td>
          </tr>

          <!-- Gold divider -->
          <tr><td style="height:4px;background:#D4AF37;"></td></tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 40px;">
              <p style="margin:0 0 8px;font-size:11px;color:#D4AF37;font-weight:700;letter-spacing:4px;text-transform:uppercase;">Welcome to the Community</p>
              <h1 style="margin:0 0 20px;font-size:32px;font-weight:900;color:#173574;line-height:1.1;">
                Welcome, ${firstName}!
              </h1>
              <p style="margin:0 0 16px;font-size:16px;color:#555;line-height:1.7;">
                You're officially part of the <strong>TMMF community</strong> — a growing network of marketplace ministers committed to integrating faith with professional excellence.
              </p>
              <p style="margin:0 0 32px;font-size:16px;color:#555;line-height:1.7;">
                Tap the button below to join the WhatsApp group and connect with fellow members across Nigeria and beyond.
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:8px 0 40px;">
                    <a href="${WHATSAPP_URL}"
                       style="display:inline-block;background:#173574;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:18px 40px;border-radius:50px;">
                      Join WhatsApp Group &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Scripture -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-left:4px solid #D4AF37;padding:12px 20px;background:#fafafa;border-radius:0 8px 8px 0;">
                    <p style="margin:0;font-size:14px;color:#888;font-style:italic;line-height:1.6;">
                      "For with God nothing shall be impossible." &mdash; Luke 1:37
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9;padding:28px 40px;text-align:center;border-top:1px solid #eee;">
              <p style="margin:0 0 6px;font-size:12px;color:#aaa;">An initiative of The Word Impact Network Global (TWIN Global)</p>
              <a href="mailto:thewordimpactnetwork@gmail.com" style="font-size:12px;color:#D4AF37;text-decoration:none;">thewordimpactnetwork@gmail.com</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
