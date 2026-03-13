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
              {/* YouTube */}
              <a href="https://www.youtube.com/@TheWordImpactNetwork" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/thewordimpactnetworkglobal" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://web.facebook.com/thewordimpactnetwork" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@the_word_impact_network" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>
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
              href="https://bluehydralabs.com" 
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