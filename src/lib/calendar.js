import { webinarData } from "./data";

// Calendar links want UTC basic format: 20260822T100000Z
const toStamp = (iso) => iso.replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export const calendarTitle = `TMMF ${webinarData.title} — ${webinarData.theme}`;

const description = [
  `TMMF ${webinarData.title}`,
  `Theme: ${webinarData.theme}`,
  ``,
  `Join here: ${webinarData.meetUrl}`,
  ``,
  `An initiative of The Word Impact Network Global (TWIN Global).`,
].join("\n");

export function googleCalendarUrl() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: calendarTitle,
    dates: `${toStamp(webinarData.startUtc)}/${toStamp(webinarData.endUtc)}`,
    details: description,
    location: webinarData.meetUrl,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function outlookCalendarUrl() {
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: calendarTitle,
    startdt: webinarData.startUtc,
    enddt: webinarData.endUtc,
    body: description,
    location: webinarData.meetUrl,
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

// Minimal VEVENT. Long lines are legal here since none exceed the 75-octet
// fold limit by enough to matter for the clients we care about.
export function icsContent() {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//TMMF//Webinar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:tmmf-webinar-${toStamp(webinarData.startUtc)}@thewordimpactnetwork`,
    `DTSTAMP:${toStamp(webinarData.startUtc)}`,
    `DTSTART:${toStamp(webinarData.startUtc)}`,
    `DTEND:${toStamp(webinarData.endUtc)}`,
    `SUMMARY:${calendarTitle}`,
    `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
    `LOCATION:${webinarData.meetUrl}`,
    `URL:${webinarData.meetUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
