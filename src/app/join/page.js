"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { eventData } from "@/lib/data";

const professionOptions = [
  "Corporate Professional (Banking, Law, Engineering, Admin)",
  "Entrepreneur / Business Owner",
  "Creative (Design, Content, Media, Fashion)",
  "Skilled Tradesperson / Artisan",
  "Student",
  "Other",
];

const referralOptions = [
  "From a Friend",
  "The TMMF Inaugural Event (March 2026)",
  "Instagram",
  "YouTube",
  "Facebook",
  "TikTok",
  "Other",
];

const benefits = [
  "Access to a curated WhatsApp community of marketplace ministers",
  "Invites to exclusive TMMF gatherings and conversations",
  "Mentorship and networking with industry leaders",
  "Resources, teachings, and tools for faith-driven professionals",
];

export default function JoinPage() {
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
  const [status, setStatus] = useState(() =>
    typeof window !== "undefined" && localStorage.getItem("tmmf_joined") === "true"
      ? "success"
      : "idle"
  );
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
      const { error } = await supabase.from("members").insert([{
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
        profession,
        city: form.city,
        referral_source,
      }]);

      if (error) {
        console.error("Supabase error:", error);
        setStatus("error");
        setErrorMsg(error.message || "Something went wrong. Please try again.");
        return;
      }
    }

    // Send welcome email
    try {
      await fetch("/api/welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: form.first_name, lastName: form.last_name, email: form.email }),
      });
    } catch (err) {
      console.error("Email error:", err);
    }

    localStorage.setItem("tmmf_joined", "true");
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.88] tracking-tight uppercase mb-6">
            JOIN THE<br />
            <span className="text-gold italic">MOVEMENT</span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-12 max-w-sm">
            A community where faith meets professional excellence. Built for believers who refuse to separate their calling from their career.
          </p>
          <ul className="space-y-5">
            {benefits.map((b, i) => (
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
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold mb-3">TMMF Community</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-dark mb-3">Become a Member</h2>
                <p className="text-gray-400 text-sm">Takes less than 2 minutes. WhatsApp link sent to your email.</p>
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
                  {status === "loading" ? "Submitting..." : "Join the Community →"}
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
      <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold mb-4">Welcome</p>
      <h2 className="text-4xl font-black tracking-tight text-dark mb-4">
        You're In{firstName ? `, ${firstName}` : ""}!
      </h2>
      <p className="text-gray-400 text-base leading-relaxed mb-4 max-w-sm mx-auto">
        Welcome to the TMMF community. Check your email — we've sent you the WhatsApp group link.
      </p>
      <p className="text-gray-300 text-sm mb-10">Didn't get it? Check your spam folder.</p>
      <a
        href={eventData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-dark text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-gold hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-95 transition-all duration-300"
      >
        Join WhatsApp Directly
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
