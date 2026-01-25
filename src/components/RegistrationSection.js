import { eventData } from '@/lib/data';

export default function RegistrationSection() {
  return (
    <section id="register" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 italic underline decoration-gold">Secure Your Seat</h2>
          <p className="text-gray-600 text-lg">
            Be part of a high-impact gathering designed to equip and position believers for influence without borders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Physical Attendance */}
          <div className="bg-white border-2 border-gold p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-gold text-black px-6 py-2 font-bold text-xs uppercase rounded-bl-2xl">
              Limited to {eventData.physicalLimit} Seats
            </div>
            <h3 className="text-2xl font-black mb-2">Physical Attendance</h3>
            <p className="text-gray-500 mb-8 italic">Immersive & In-person experience</p>
            <ul className="space-y-4 mb-10 text-sm font-medium">
              <li className="flex gap-3">✅ Priority Networking & Mentorship</li>
              <li className="flex gap-3">✅ Full Access to All Sessions</li>
              <li className="flex gap-3">✅ Event Materials & Catering</li>
              <li className="flex gap-3">✅ Strategic Prophetic Impartation</li>
            </ul>
            <button className="w-full btn-primary">Register for Physical</button>
          </div>

          {/* Online Attendance */}
          <div className="bg-dark text-white p-10 rounded-[2.5rem] shadow-xl">
            <h3 className="text-2xl font-black mb-2">Online Attendance</h3>
            <p className="text-gray-400 mb-8 italic">Global access from anywhere</p>
            <ul className="space-y-4 mb-10 text-sm font-medium text-gray-300">
              <li className="flex gap-3">✅ HD Live Stream Access</li>
              <li className="flex gap-3">✅ Digital Resources & Notes</li>
              <li className="flex gap-3">✅ Virtual Q&A Sessions</li>
              <li className="flex gap-3">✅ Join from any time zone</li>
            </ul>
            <button className="w-full border-2 border-white/20 hover:border-white py-4 rounded-full font-bold transition-all">
              Attend Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}