// One-off: "we're live now" email to webinar registrants.
// Usage:
//   node send-live-now.mjs --test    -> sends only to TEST_EMAIL
//   node send-live-now.mjs --send    -> sends to every registrant
// With no flag it prints the recipient list and exits without sending.

import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const env = Object.fromEntries(
  readFileSync(".env.local", "utf8")
    .split("\n")
    .filter((l) => l.trim() && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

// Set TEST_EMAIL in .env.local to send the --test run somewhere else.
const TEST_EMAIL = env.TEST_EMAIL || env.GMAIL_USER;

const webinar = {
  title: "September Webinar",
  theme: "Marketplace Leadership II",
  venue: "Google Meet",
  meetUrl: "https://meet.google.com/yje-fzyo-idq",
  timeLabel: "11:00 AM",
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: env.GMAIL_USER, pass: env.GMAIL_APP_PASSWORD },
});

function emailTemplate({ firstName }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>We're live now</title>
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
              <p style="margin:0;color:rgba(255,255,255,0.5);font-size:10px;letter-spacing:4px;text-transform:uppercase;">The Marketplace Ministers&rsquo; Forum</p>
            </td>
          </tr>

          <!-- Gold divider -->
          <tr><td style="height:4px;background:#D4AF37;"></td></tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 40px;">
              <p style="margin:0 0 8px;font-size:11px;color:#D4AF37;font-weight:700;letter-spacing:4px;text-transform:uppercase;">We&rsquo;re Live</p>
              <h1 style="margin:0 0 20px;font-size:32px;font-weight:900;color:#173574;line-height:1.1;">
                We&rsquo;ve started, ${firstName}. Come on in
              </h1>
              <p style="margin:0 0 32px;font-size:16px;color:#555;line-height:1.7;">
                The <strong>TMMF ${webinar.title}</strong> is underway right now and the room is open. Tap below to join us.
              </p>

              <!-- Event details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border-radius:12px;margin-bottom:32px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:11px;color:#aaa;text-transform:uppercase;letter-spacing:2px;width:90px;">Theme</td>
                        <td style="padding:6px 0;font-size:15px;color:#173574;font-weight:700;">${webinar.theme}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:11px;color:#aaa;text-transform:uppercase;letter-spacing:2px;">Started</td>
                        <td style="padding:6px 0;font-size:15px;color:#333;">${webinar.timeLabel} (WAT)</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:11px;color:#aaa;text-transform:uppercase;letter-spacing:2px;">Venue</td>
                        <td style="padding:6px 0;font-size:15px;color:#333;">${webinar.venue}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:0 0 32px;">
                    <a href="${webinar.meetUrl}"
                       style="display:inline-block;background:#173574;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:18px 40px;border-radius:50px;">
                      Join the Webinar Now &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Scripture -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-left:4px solid #D4AF37;padding:12px 20px;background:#fafafa;border-radius:0 8px 8px 0;">
                    <p style="margin:0;font-size:14px;color:#888;font-style:italic;line-height:1.6;">
                      &ldquo;For with God nothing shall be impossible.&rdquo; (Luke 1:37)
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

async function sendOne({ email, firstName }) {
  await transporter.sendMail({
    from: `TMMF Community <${env.GMAIL_USER}>`,
    to: email,
    replyTo: env.GMAIL_USER,
    subject: `We're live now: TMMF ${webinar.theme} webinar`,
    html: emailTemplate({ firstName }),
  });
}

const mode = process.argv[2];

if (mode === "--test") {
  await sendOne({ email: TEST_EMAIL, firstName: "Israel" });
  console.log(`TEST SENT -> ${TEST_EMAIL}`);
  process.exit(0);
}

// Recipients come from recipients.json. The anon key cannot read the table
// through RLS (insert-only policy), so the list was taken from the dashboard.
const raw = JSON.parse(readFileSync("recipients.json", "utf8"));

const seen = new Set();
const recipients = [];
for (const r of raw) {
  const e = (r.email || "").trim().toLowerCase();
  if (!e || !e.includes("@") || seen.has(e)) continue;
  seen.add(e);
  recipients.push({ email: e, firstName: r.firstName?.trim() || "Friend" });
}

console.log(`rows: ${raw.length}   unique recipients: ${recipients.length}`);
recipients.forEach((r, i) => console.log(`${String(i + 1).padStart(3)}. ${r.firstName} <${r.email}>`));

if (mode !== "--send") {
  console.log("\n(dry run, pass --send to actually send)");
  process.exit(0);
}

let ok = 0;
const failed = [];
for (const r of recipients) {
  try {
    await sendOne(r);
    ok++;
    console.log(`  sent ${ok}/${recipients.length} -> ${r.email}`);
  } catch (err) {
    failed.push({ email: r.email, err: err.message });
    console.error(`  FAILED -> ${r.email}: ${err.message}`);
  }
  await new Promise((res) => setTimeout(res, 1200));
}
console.log(`\ndone. sent ${ok}, failed ${failed.length}`);
if (failed.length) console.log(JSON.stringify(failed, null, 2));
