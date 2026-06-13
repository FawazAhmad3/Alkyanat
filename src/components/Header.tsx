import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import translationData from '../data/translationData.json';

interface HeaderProps {
  currentLang: 'EN' | 'AR';
  onLangChange: (lang: 'EN' | 'AR') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLangChange }) => {
  const langKey = currentLang.toLowerCase() as 'en' | 'ar';
  const { headerLinks, ctaBtn } = translationData[langKey].navigation;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const toggleLang = () => {
    onLangChange(currentLang === 'EN' ? 'AR' : 'EN');
  };

  const isRtl = currentLang === 'AR';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0c0f24]/90 backdrop-blur-md border-b border-amber-500/15 shadow-[0_10px_30px_rgba(12,15,36,0.35)] py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${isRtl ? 'flex-row-reverse' : ''}`}>
          
          {/* Logo Group */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className={`flex items-center space-x-3 group relative z-50 ${isRtl ? 'space-x-reverse' : ''}`}
          >
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="Al Kayanat Logo"
                className="h-10 w-10 object-contain rounded-xl border border-zinc-800/80 group-hover:border-amber-500/40 group-hover:scale-105 transition-all duration-300"
              />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-wider text-white uppercase font-sans leading-none pb-1 group-hover:text-amber-400 transition-colors duration-300">
                  {currentLang === 'AR' ? 'الكيانات' : 'Al Kayanat'}
                </span>
                <span className="text-[9px] tracking-[0.25em] text-amber-500 uppercase font-semibold leading-none">
                  {currentLang === 'AR' ? 'مجموعة قابضة' : 'Holding Group'}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center ${isRtl ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {headerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors duration-300 relative py-2 group font-sans"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions Desk (Desktop) */}
          <div className={`hidden md:flex items-center ${isRtl ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1.5 px-3 py-1.5 border border-zinc-800 hover:border-amber-500/30 hover:bg-zinc-900 rounded-lg text-zinc-300 hover:text-amber-400 transition-all text-xs font-semibold cursor-pointer"
              title="Switch Language"
            >
              <Globe className="h-3.5 w-3.5 text-amber-500" />
              <span>{currentLang === 'EN' ? 'العربية' : 'English'}</span>
            </button>

            {/* CTA button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg text-zinc-950 bg-gradient-to-r from-amber-400 to-yellow-600 hover:from-amber-300 hover:to-yellow-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-sans"
            >
              <span>{ctaBtn}</span>
              <ArrowRight className={`ml-1.5 h-4 w-4 stroke-[2.2] text-zinc-950 ${isRtl ? 'rotate-180 mr-1.5 ml-0' : ''}`} />
            </a>
          </div>

          {/* Mobile Menu Action Icon */}
          <div className={`md:hidden flex items-center z-50 ${isRtl ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
            {/* Mobile Lang Button */}
            <button
              onClick={toggleLang}
              className="p-2 border border-zinc-800 rounded-lg text-zinc-300 hover:text-amber-400 hover:bg-zinc-900 transition-all text-xs font-semibold flex items-center cursor-pointer"
            >
              <Globe className="h-4 w-4 text-amber-500" />
              <span className="ml-1">{currentLang === 'EN' ? 'العربية' : 'EN'}</span>
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-amber-400 hover:bg-zinc-900 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#0c0f24]/98 backdrop-blur-xl transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0 visible' : 'opacity-0 translate-x-full invisible'
        }`}
      >
        {/* Ambient background glow inside mobile menu */}
        <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-amber-500/3 blur-[120px] rounded-full pointer-events-none" />

        <div className="flex flex-col h-full justify-between pt-28 pb-12 px-6 relative z-10">
          <nav className="flex flex-col space-y-6">
            {headerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-2xl font-bold tracking-wide text-zinc-300 hover:text-amber-400 transition-all duration-200 border-b border-zinc-900 pb-3 ${
                  isRtl ? 'text-right' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="block w-full text-center px-6 py-4 text-base font-semibold rounded-xl text-zinc-950 bg-gradient-to-r from-amber-400 to-yellow-600 hover:from-amber-300 hover:to-yellow-500 transition-all duration-300 font-sans"
            >
              {ctaBtn}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
