"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { devotionData, referralOptions } from "@/lib/data";

const genderOptions = ["Male", "Female"];

const bornAgainOptions = ["Yes", "No", "Not sure yet"];

// Staggers entrance animations.
const delay = (ms) => ({ animationDelay: `${ms}ms` });

const benefits = [
  "Daily devotionals to start your day in the Word",
  "Prayer and accountability with fellow believers",
  "Teachings on living out your faith in the marketplace",
  "A safe community to grow, ask questions, and be encouraged",
];

export default function DevotionPage() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "",
    born_again: "",
    reason: "",
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

    const referral_source = form.referral_source === "Other" ? form.referral_other : form.referral_source;

    if (supabase) {
      const { error } = await supabase.from(devotionData.table).insert([{
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
        gender: form.gender,
        born_again: form.born_again,
        reason: form.reason,
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

    // Send welcome email with the group link
    try {
      await fetch("/api/devotion-welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: form.first_name, email: form.email }),
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
          <img src="/hero.png" alt="" className="w-full h-full object-cover opacity-10 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark" />
        </div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none animate-float-slow" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none animate-float-slow" style={delay(-6000)} />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.88] tracking-tight uppercase mb-6 animate-fade-up">
            DAILY<br />
            <span className="text-gold italic">DEVOTION</span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-12 max-w-sm animate-fade-up" style={delay(150)}>
            Join our devotion community on WhatsApp. Grow daily in the Word, in prayer, and in fellowship with believers who are serious about God.
          </p>
          <ul className="space-y-5">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-4 animate-fade-up" style={delay(300 + i * 120)}>
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

        <p className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold mt-16 lg:mt-0 animate-fade-up" style={delay(900)}>
          Psalm 119:105: Thy word is a lamp unto my feet, and a light unto my path.
        </p>
      </div>

      {/* ── Right panel ── */}
      <div className="flex-1 bg-gray-50 flex items-start justify-center p-8 lg:p-16 py-16">
        <div className="w-full max-w-lg">

          {status === "success" ? (
            <SuccessState firstName={form.first_name} />
          ) : (
            <>
              <div className="mb-10 animate-fade-up" style={delay(100)}>
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold mb-3">TWIN Global Devotion</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-dark mb-3">Register to Join</h2>
                <p className="text-gray-400 text-sm">Takes less than 2 minutes. You get the WhatsApp link right after, and by email.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 animate-fade-up" style={delay(250)}>

                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="First Name" name="first_name" value={form.first_name} onChange={handleChange} required />
                  <Field label="Last Name" name="last_name" value={form.last_name} onChange={handleChange} required />
                </div>

                {/* Contact row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                  <Field label="WhatsApp Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
                </div>

                {/* Gender + born again row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <SelectField label="Gender" name="gender" value={form.gender} onChange={handleChange} options={genderOptions} required />
                  <SelectField label="Are you born again?" name="born_again" value={form.born_again} onChange={handleChange} options={bornAgainOptions} required />
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2.5">Why do you want to join the group?</label>
                  <textarea
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us a little about what you hope to gain"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-dark placeholder-gray-300 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all text-sm resize-none"
                  />
                </div>

                {/* City */}
                <Field label="City / Country" name="city" value={form.city} onChange={handleChange} required />

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
                  className="w-full bg-dark text-white py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-gold hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-[0.98] transition-all duration-300 shimmer disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                >
                  {status === "loading" ? "Submitting..." : "Register →"}
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
      <div className="relative w-20 h-20 mx-auto mb-8">
        <div className="absolute inset-0 rounded-full border-2 border-gold/40 animate-ring-pulse" />
        <div className="relative w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center animate-pop-in">
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        </div>
      </div>
      <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold mb-4 animate-fade-up" style={delay(200)}>Welcome</p>
      <h2 className="text-4xl font-black tracking-tight text-dark mb-4 animate-fade-up" style={delay(300)}>
        You're Registered{firstName ? `, ${firstName}` : ""}!
      </h2>
      <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-sm mx-auto animate-fade-up" style={delay(400)}>
        Tap the button below to join the devotion group on WhatsApp. We've also emailed you the link (check spam if you don't see it).
      </p>
      <a
        href={devotionData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-dark text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-gold hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-95 transition-all duration-300 shimmer animate-fade-up"
        style={delay(500)}
      >
        Join WhatsApp Group
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
