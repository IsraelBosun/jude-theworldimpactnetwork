"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { eventData } from "@/lib/data";

export default function JoinSection() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    profession: "",
    reason: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (supabase) {
      const { error } = await supabase.from("members").insert([
        {
          full_name: form.full_name,
          email: form.email,
          phone: form.phone,
          profession: form.profession,
          reason: form.reason || null,
        },
      ]);

      if (error) {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
        return;
      }
    }

    setStatus("success");
  };

  if (status === "success") {
    return (
      <section id="join" className="section-padding bg-dark text-white">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-16">
            <div className="w-20 h-20 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center mx-auto mb-8 text-4xl">
              ✓
            </div>
            <p className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4">Welcome</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">You're In!</h2>
            <p className="text-gray-400 mb-12 text-lg max-w-md mx-auto leading-relaxed">
              Welcome to the TMMF community. Tap the button below to join the WhatsApp group and connect with other marketplace ministers.
            </p>
            <a
              href={eventData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block px-12 py-5 text-lg shadow-xl shadow-gold/30 hover:scale-105 transition-transform"
            >
              Join WhatsApp Group →
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="section-padding bg-dark text-white">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-16">
          <p className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4">TMMF Community</p>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Become a <span className="text-gold italic">Member</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
            Fill in your details below. You'll receive access to the WhatsApp community immediately after.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              label="Full Name"
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              required
            />
            <FormField
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <FormField
              label="Profession / Industry"
              name="profession"
              value={form.profession}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-3">
              Why do you want to join?{" "}
              <span className="text-gray-600 normal-case tracking-normal font-normal">(optional)</span>
            </label>
            <textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors resize-none"
              placeholder="Share a little about yourself and your marketplace journey..."
            />
          </div>

          {errorMsg && (
            <p className="text-red-400 text-sm text-center font-medium">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full btn-primary py-5 text-lg shadow-xl shadow-gold/20 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {status === "loading" ? "Submitting..." : "Join the Community"}
          </button>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
        placeholder={label}
      />
    </div>
  );
}
