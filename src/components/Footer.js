"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { eventData, navLinks } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Helper to handle cross-page hash navigation
  const getHref = (href) => {
    if (href.startsWith('#') && pathname !== '/') {
      return `/${href}`;
    }
    return href;
  };

  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle branding watermark in background */}
      <div className="absolute -bottom-10 -right-10 text-[15vw] font-black text-white/[0.02] select-none pointer-events-none uppercase">
        TMMF
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-black tracking-tighter mb-6 block">
              TMMF<span className="text-gold">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
              An initiative of The Word Impact Network Global (TWIN Global). 
              Raising influential leaders to integrate spiritual depth with 
              professional excellence.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'X', 'YT'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-gold hover:text-black transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={getHref(link.href)} 
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Inquiries</h4>
            <div className="space-y-6">
              {/* Email Section */}
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Email Us</p>
                <a href={`mailto:${eventData.contact.email}`} className="text-gray-300 hover:text-gold transition-colors block text-sm">
                  {eventData.contact.email}
                </a>
              </div>

              {/* Phone Section */}
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Call Us</p>
                <div className="space-y-2"> {/* Added a small gap between the two numbers */}
                  <a href={`tel:${eventData.contact.phone}`} className="text-gray-300 hover:text-gold transition-colors block text-sm">
                    {eventData.contact.phone}
                  </a>
                  <a href={`tel:${eventData.contact.phone2}`} className="text-gray-300 hover:text-gold transition-colors block text-sm">
                    {eventData.contact.phone2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs tracking-widest uppercase font-medium">
            © {currentYear} {eventData.name}. All rights reserved.
          </p>
          
          {/* Bluehydra Credit */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            <span>Built by</span>
            <a 
              href="https://bluehydradev.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gold transition-all flex items-center gap-1 group"
            >
              Bluehydra 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}