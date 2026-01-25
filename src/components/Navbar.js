"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const getHref = (href) => {
    // If it's a section link (#) and we aren't on the home page, go home first
    if (href.startsWith('#') && pathname !== '/') {
      return `/${href}`;
    }
    return href;
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-dark/95 border-b border-white/10 shadow-2xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="text-white font-black text-2xl tracking-tighter z-[110]"
        >
          TMMF<span className="text-gold">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={getHref(link.href)} 
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${
                pathname === link.href ? 'text-gold' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button & Toggle */}
        <div className="flex items-center gap-4 z-[110]">
          <Link 
            href={getHref("#register")} 
            className="hidden sm:block bg-gold text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Register
          </Link>

          {/* Hamburger Menu */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border cursor-pointer border-white/10 rounded-xl bg-white/5"
            aria-label="Toggle Menu"
          >
            <span className={`block w-5 h-0.5 bg-gold transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0' : 'translate-y-1'}`} />
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-dark transition-all duration-500 ease-in-out lg:hidden flex flex-col justify-center px-10 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Subtle background branding */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none uppercase">
          Limitless
        </div>

        <div className="flex flex-col gap-6 relative z-10">
          <p className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 opacity-50">Menu</p>
          
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={getHref(link.href)} 
              onClick={() => setIsOpen(false)}
              className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter hover:text-gold active:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-px w-full bg-white/10 my-6" />
          
          <Link 
            href={getHref("#register")} 
            onClick={() => setIsOpen(false)}
            className="bg-gold text-black text-center py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-gold/10"
          >
            Register
          </Link>
          
          <div className="mt-8 text-gray-500 text-xs tracking-widest uppercase">
            {new Date().getFullYear()} TWIN GLOBAL PROUDLY PRESENTS
          </div>
        </div>
      </div>
    </nav>
  );
}