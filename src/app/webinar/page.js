"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { eventData, webinarData, referralOptions } from "@/lib/data";
import { googleCalendarUrl, outlookCalendarUrl } from "@/lib/calendar";

const professionOptions = [
  "Corporate Professional (Banking, Law, Engineering, Admin)",
  "Entrepreneur / Business Owner",
  "Creative (Design, Content, Media, Fashion)",
  "Skilled Tradesperson / Artisan",
  "Student",
  "Other",
];

const takeaways = [
  "What marketplace leadership actually looks like day to day",
  "Leading with integrity when the pressure is on",
  "Practical tools for influencing culture where you work",
  "Live Q&A with the convener and fellow members",
];

export default function WebinarPage() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    profession: "",
    profession_other: "",
    city: "",
    referral_source: "",
    referral_other: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const profession = form.profession === "Other" ? form.profession_other : form.profession;
    const referral_source = form.referral_source === "Other" ? form.referral_other : form.referral_source;

    if (supabase) {
      const { error } = await supabase.from("webinar_registrations").insert([{
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
        profession,
        city: form.city,
        referral_source,
        webinar_title: webinarData.title,
        webinar_date: webinarData.startUtc,
      }]);

      if (error) {
        console.error("Supabase error:", error);
        setStatus("error");
        setErrorMsg(error.message || "Something went wrong. Please try again.");
        return;
      }
    }

    // Send confirmation email with the event link + calendar invite
    try {
      await fetch("/api/webinar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: form.first_name, lastName: form.last_name, email: form.email }),
      });
    } catch (err) {
      console.error("Email error:", err);
    }

    setStatus("success");
  };

  return (
    <main className="mt-20 flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">

      {/* ── Left panel ── */}
      <div className="relative lg:w-[45%] bg-dark text-white flex flex-col justify-between p-10 lg:p-16 py-16 min-h-[60vh] lg:min-h-0 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.png" alt="" className="w-full h-full object-cover opacity-10 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark" />
        </div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold mb-5">
            {webinarData.title}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.88] tracking-tight uppercase mb-6">
            MARKETPLACE<br />
            <span className="text-gold italic">LEADERSHIP</span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-sm">
            Live on Google Meet. A conversation about leading with conviction in the spaces where you already have influence.
          </p>

          {/* Event detail strip */}
          <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden mb-10 max-w-sm">
            <Detail label="Date" value={webinarData.dateLabel} />
            <Detail label="Time" value={`${webinarData.timeLabel} WAT`} />
            <Detail label="Venue" value={webinarData.venue} />
            <Detail label="Cost" value="Free" />
          </div>

          <ul className="space-y-5">
            {takeaways.map((b, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="shrink-0 w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mt-0.5">
                  <svg className="w-2.5 h-2.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold mt-16 lg:mt-0">
          {eventData.theme.scripture}: For with God nothing shall be impossible.
        </p>
      </div>

      {/* ── Right panel ── */}
      <div className="flex-1 bg-gray-50 flex items-start justify-center p-8 lg:p-16 py-16">
        <div className="w-full max-w-lg">

          {status === "success" ? (
            <SuccessState firstName={form.first_name} />
          ) : (
            <>
              <div className="mb-10">
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold mb-3">Free Registration</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-dark mb-3">Save Your Seat</h2>
                <p className="text-gray-400 text-sm">Takes about a minute. The meeting link is shown instantly and sent to your email.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="First Name" name="first_name" value={form.first_name} onChange={handleChange} required />
                  <Field label="Last Name" name="last_name" value={form.last_name} onChange={handleChange} required />
                </div>

                {/* Contact row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                  <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
                </div>

                {/* Profession */}
                <SelectField
                  label="Profession / Industry"
                  name="profession"
                  value={form.profession}
                  onChange={handleChange}
                  options={professionOptions}
                  required
                />
                {form.profession === "Other" && (
                  <Field label="Please specify your profession" name="profession_other" value={form.profession_other} onChange={handleChange} required />
                )}

                {/* City */}
                <Field label="City / Location" name="city" value={form.city} onChange={handleChange} required />

                {/* Referral */}
                <SelectField
                  label="How did you hear about us?"
                  name="referral_source"
                  value={form.referral_source}
                  onChange={handleChange}
                  options={referralOptions}
                  required
                />
                {form.referral_source === "Other" && (
                  <Field label="Please specify" name="referral_other" value={form.referral_other} onChange={handleChange} required />
                )}

                {errorMsg && (
                  <p className="text-red-500 text-sm font-medium">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-dark text-white py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-gold hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-[0.98] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                >
                  {status === "loading" ? "Registering..." : "Register Free →"}
                </button>

                <p className="text-center text-[10px] text-gray-300 uppercase tracking-widest pt-2">
                  A program of TWIN Global
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

function Detail({ label, value }) {
  return (
    <div className="bg-dark px-5 py-4">
      <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-gray-500 mb-1.5">{label}</p>
      <p className="text-sm font-bold text-white leading-snug">{value}</p>
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2.5">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={label}
        className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-dark placeholder-gray-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all text-sm"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, required }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2.5">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-dark focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all text-sm appearance-none cursor-pointer"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", backgroundSize: "16px" }}
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function SuccessState({ firstName }) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-8">
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold mb-4">You're Registered</p>
      <h2 className="text-4xl font-black tracking-tight text-dark mb-4">
        See You There{firstName ? `, ${firstName}` : ""}!
      </h2>
      <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm mx-auto">
        We've emailed you the meeting link and a calendar invite, so you'll have it when the day comes.
      </p>

      {/* Event card */}
      <div className="bg-white border border-gray-200 rounded-3xl p-7 text-left mb-8">
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-4">{webinarData.title}</p>
        <p className="text-lg font-black text-dark leading-snug mb-5">{webinarData.theme}</p>
        <div className="space-y-2.5 mb-6">
          <Row label="Date" value={webinarData.dateLabel} />
          <Row label="Time" value={`${webinarData.timeLabel} (WAT)`} />
          <Row label="Venue" value={webinarData.venue} />
        </div>
        <MeetLink />
      </div>

      {/* Add to calendar */}
      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">Add to Calendar</p>
      <div className="grid grid-cols-3 gap-3">
        <CalButton href={googleCalendarUrl()} label="Google" />
        <CalButton href={outlookCalendarUrl()} label="Outlook" />
        <CalButton href="/api/webinar-invite" label="Apple / .ics" download />
      </div>

      <p className="text-gray-300 text-sm mt-8">Didn't get the email? Check your spam folder.</p>
    </div>
  );
}

// The room only matters on the day. Before then the link is something to save,
// not somewhere to go — so the button says so rather than dropping people into
// an empty call. Computed after mount so server and client markup agree.
function MeetLink() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = Date.now();
      // Open the doors 15 minutes early, keep them open until the end.
      const opens = new Date(webinarData.startUtc).getTime() - 15 * 60 * 1000;
      const closes = new Date(webinarData.endUtc).getTime();
      setIsLive(now >= opens && now <= closes);
    };
    check();
    const id = setInterval(check, 30000);
    return () => clearInterval(id);
  }, []);

  if (!isLive) {
    return (
      <div>
        <div className="flex items-center gap-3 w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 mb-3">
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" />
          </svg>
          <span className="text-xs text-gray-500 font-medium truncate">{webinarData.meetUrl.replace("https://", "")}</span>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed">
          The room opens on <span className="font-bold text-gray-500">{webinarData.dateLabel}</span> at {webinarData.timeLabel} WAT. Add it to your calendar below and we'll see you then.
        </p>
      </div>
    );
  }

  return (
    <a
      href={webinarData.meetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 w-full bg-dark text-white py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-gold hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-[0.98] transition-all duration-300"
    >
      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
      Join the Webinar
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 w-14 shrink-0">{label}</span>
      <span className="text-sm text-gray-700 font-medium">{value}</span>
    </div>
  );
}

function CalButton({ href, label, download }) {
  return (
    <a
      href={href}
      {...(download ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className="flex items-center justify-center bg-white border border-gray-200 rounded-2xl py-3.5 px-2 text-[11px] font-bold text-dark hover:border-gold hover:text-gold transition-all duration-300"
    >
      {label}
    </a>
  );
}
