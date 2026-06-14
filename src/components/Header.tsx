import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import translationData from '../data/translationData.json';

interface HeaderProps {
  currentLang: 'EN' | 'AR';
  onLangChange: (lang: 'EN' | 'AR') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLangChange }) => {
  const langKey = currentLang.toLowerCase() as 'en' | 'ar';
  const { headerLinks, ctaBtn } = translationData[langKey].navigation;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isRtl = currentLang === 'AR';

  return (
    <header className="sticky top-0 w-full z-50 bg-[#0f172a] border-b border-slate-800 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className={`flex items-center justify-between h-16 ${isRtl ? 'flex-row-reverse' : ''}`}>
          
          {/* Logo Group */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className={`flex items-center gap-3.5 group relative z-50 ${isRtl ? 'space-x-reverse' : ''}`}
          >
            {/* Inline Interlocking Diamonds SVG Logo */}
            <div className="p-1.5 bg-slate-950 border border-slate-800 group-hover:border-slate-700 rounded-xl transition-all duration-300">
              <svg viewBox="0 0 100 100" className="w-10 h-10">
                {/* Top Diamond (Ice Blue) */}
                <path d="M 50,12 L 66,28 L 50,44 L 34,28 Z" fill="#38bdf8" />
                {/* Left Diamond (White) */}
                <path d="M 32,30 L 48,46 L 32,62 L 16,46 Z" fill="#ffffff" />
                {/* Right Diamond (White) */}
                <path d="M 68,30 L 84,46 L 68,62 L 52,46 Z" fill="#ffffff" />
                {/* Bottom Diamond (Ice Blue) */}
                <path d="M 50,48 L 66,64 L 50,80 L 34,64 Z" fill="#38bdf8" />
              </svg>
            </div>
            
            <div className={`flex flex-col leading-none ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}>
              <span className="text-xl font-extrabold tracking-wider text-white uppercase font-sans pb-0.5 group-hover:text-[#38bdf8] transition-colors duration-300">
                {currentLang === 'AR' ? 'الكيانات' : 'Al Kayanat'}
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#38bdf8] font-black uppercase">
                {currentLang === 'AR' ? 'مجموعة قابضة' : 'Holding Group'}
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className={`hidden md:flex items-center gap-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {headerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-black uppercase tracking-widest text-white/95 hover:text-[#38bdf8] transition-colors relative py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#38bdf8] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action button */}
          <div className={`hidden md:flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {/* Language Switcher */}
            <button
              onClick={() => onLangChange(currentLang === 'EN' ? 'AR' : 'EN')}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-lg text-white transition-all text-xs font-bold cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5 text-[#38bdf8]" />
              <span>{currentLang === 'EN' ? 'العربية' : 'English'}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center justify-center px-6 py-3 text-xs font-black uppercase tracking-widest rounded-lg text-slate-950 bg-[#38bdf8] hover:bg-[#0ea5e9] shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{ctaBtn}</span>
              <ChevronRight className={`ml-1.5 h-4 w-4 stroke-[3] text-slate-950 ${isRtl ? 'rotate-180 mr-1.5 ml-0' : ''}`} />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className={`md:hidden flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={() => onLangChange(currentLang === 'EN' ? 'AR' : 'EN')}
              className="p-2 border border-white/20 rounded-lg text-white hover:bg-white/5 transition-all flex items-center cursor-pointer"
            >
              <Globe className="h-4 w-4 text-[#38bdf8]" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-white hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-slate-900 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-32 pb-16 px-8 relative z-50">
          <nav className="flex flex-col space-y-6">
            {headerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xl font-black uppercase tracking-wider text-white hover:text-[#38bdf8] transition-all duration-200 border-b border-white/10 pb-3.5 ${
                  isRtl ? 'text-right' : 'text-left'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="block w-full text-center px-6 py-4 text-xs font-black uppercase tracking-widest rounded-lg text-slate-950 bg-[#38bdf8] hover:bg-[#0ea5e9] transition-all duration-300"
          >
            {ctaBtn}
          </a>
        </div>
      </div>
    </header>
  );
};
