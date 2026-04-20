import Link from "next/link";
import { eventData } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="relative py-40 px-6 bg-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-8 bg-gold" />
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gold">Join Today</p>
          <div className="h-px w-8 bg-gold" />
        </div>

        <h2
          className="font-black tracking-tighter leading-[0.85] uppercase text-dark mb-8"
          style={{ fontSize: "clamp(3.5rem, 10vw, 11rem)" }}
        >
          READY TO<br />
          <span className="italic text-gold">JOIN?</span>
        </h2>

        <p className="text-gray-500 text-lg max-w-lg mx-auto mb-14 leading-relaxed">
          Become a member of the TMMF community and connect with marketplace ministers across Nigeria and beyond.
        </p>

        <Link
          href="/join"
          className="inline-flex items-center gap-3 bg-dark text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-gold hover:text-black hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] active:scale-95 transition-all duration-300"
        >
          Become a Member
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        <p className="mt-10 text-[11px] uppercase tracking-[0.4em] text-gray-300 font-bold">
          "{eventData.theme.scripture}: For with God nothing shall be impossible."
        </p>
      </div>
    </section>
  );
}
