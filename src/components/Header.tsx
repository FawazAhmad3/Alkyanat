import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, ChevronRight, ArrowUpRight } from 'lucide-react';
import navigationData from '../data/navigationData.json';

interface HeaderProps {
  currentLang: 'EN' | 'AR';
  onLangChange: (lang: 'EN' | 'AR') => void;
  activePage?: 'home' | 'about' | 'services' | 'blog' | 'contact';
  onPageChange?: (page: 'home' | 'about' | 'services' | 'blog' | 'contact') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLangChange, activePage = 'home', onPageChange }) => {
  const langKey = currentLang.toLowerCase() as 'en' | 'ar';
  const data = navigationData[langKey];
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll state to transition transparent to solid dark glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    setIsOpen(false);
    setIsServicesOpen(false);
    const pageName = href.replace('#/', '').split('?')[0] as 'home' | 'about' | 'services' | 'blog' | 'contact';
    
    if (onPageChange && ['home', 'about', 'services', 'blog', 'contact'].includes(pageName)) {
      e.preventDefault();
      onPageChange(pageName);
    }
  };

  const isRtl = currentLang === 'AR';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-brand-navy-dark/80 backdrop-blur-xl py-2 border-b border-white/[0.06] shadow-[0_10px_40px_-15px_rgba(7,10,19,0.8)]' 
        : 'bg-transparent py-4 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between h-16 ${isRtl ? 'flex-row-reverse' : ''}`}>
          
          {/* Logo Group */}
          <a
            href="#/home"
            onClick={(e) => handleLinkClick(e, '#/home')}
            className={`flex items-center gap-2.5 group relative z-50 ${isRtl ? 'flex-row-reverse' : ''}`}
          >
            {/* Custom SVG Logo */}
            <div className="p-1.5 bg-white/[0.02] border border-white/[0.08] group-hover:border-brand-blue rounded-2xl transition-all duration-300 shadow-lg">
              <svg viewBox="0 0 100 100" className="w-9 h-9">
                {/* Top Diamond (Neon Cyan) */}
                <path d="M 50,12 L 66,28 L 50,44 L 34,28 Z" fill="#00E5FF" />
                {/* Left Diamond (Neon Indigo) */}
                <path d="M 32,30 L 48,46 L 32,62 L 16,46 Z" fill="#6366F1" />
                {/* Right Diamond (Neon Indigo) */}
                <path d="M 68,30 L 84,46 L 68,62 L 52,46 Z" fill="#6366F1" />
                {/* Bottom Diamond (Neon Cyan) */}
                <path d="M 50,48 L 66,64 L 50,80 L 34,64 Z" fill="#00E5FF" />
              </svg>
            </div>
            
            <div className={`flex flex-col leading-none ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}>
              <span className="text-xl font-extrabold tracking-wider text-white uppercase font-display pb-0.5 group-hover:text-brand-blue transition-colors duration-300">
                {data.logo.brandName}
              </span>
              <span className="text-[8px] tracking-[0.25em] text-brand-blue font-black uppercase">
                {data.logo.subtitle}
              </span>
            </div>
          </a>
 
          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-7 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {data.headerLinks.map((link) => {
              const pageName = link.href.replace('#/', '') as 'home' | 'about' | 'services' | 'blog' | 'contact';
              const isActive = activePage === pageName;

              if (pageName === 'services') {
                return (
                  <div 
                    key={link.label}
                    className="relative group py-2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      onClick={(e) => handleLinkClick(e, '#/services')}
                      className={`text-[14px] font-semibold tracking-wide uppercase transition-all flex items-center gap-1 cursor-pointer font-display ${
                        isActive ? 'text-brand-blue font-extrabold' : 'text-slate-300 hover:text-brand-blue'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Services Dropdown */}
                    <div className={`absolute left-1/2 -translate-x-1/2 top-full w-80 bg-brand-navy-dark/95 border border-white/[0.08] backdrop-blur-xl rounded-2xl p-5 shadow-2xl transition-all duration-300 origin-top ${
                      isServicesOpen 
                        ? 'opacity-100 visible scale-100 translate-y-2' 
                        : 'opacity-0 invisible scale-95 translate-y-0 pointer-events-none'
                    }`}>
                      <h4 className={`text-[9px] font-black text-brand-blue uppercase tracking-widest border-b border-white/[0.08] pb-2.5 mb-2.5 ${
                        isRtl ? 'text-right' : 'text-left'
                      }`}>
                        {data.servicesDropdown.title}
                      </h4>
                      <div className="flex flex-col gap-1.5">
                        {data.servicesDropdown.items.map((item: { label: string; href: string }) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            className={`text-[11px] font-bold text-slate-300 hover:text-brand-blue py-2 px-3 rounded-xl hover:bg-white/[0.03] transition-all flex items-center justify-between ${
                              isRtl ? 'flex-row-reverse text-right' : 'text-left'
                            }`}
                          >
                            <span>{item.label}</span>
                            <ChevronRight className={`h-3 w-3 text-slate-500 group-hover:text-brand-blue ${isRtl ? 'rotate-180' : ''}`} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
 
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-[14px] font-semibold tracking-wide uppercase transition-all relative py-2 font-display ${
                    isActive ? 'text-brand-blue font-extrabold' : 'text-slate-300 hover:text-brand-blue'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
  
          {/* Action Button & Language Switcher */}
          <div className={`hidden md:flex items-center gap-4.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {/* Language Switcher */}
            <button
              onClick={() => onLangChange(currentLang === 'EN' ? 'AR' : 'EN')}
              className="flex items-center gap-1.5 px-4 py-2 bg-white/[0.02] border border-white/[0.08] hover:border-brand-blue hover:bg-white/[0.05] rounded-full text-slate-300 transition-all text-xs font-bold cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5 text-brand-blue" />
              <span>{data.langSwitcher}</span>
            </button>
 
            <button
              onClick={(e) => handleLinkClick(e, '#/contact')}
              className="inline-flex items-center justify-center px-7 py-3 text-xs font-black uppercase tracking-wider rounded-full text-brand-navy bg-brand-blue hover:bg-brand-blue-hover shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer gap-1.5"
            >
              <span>{data.ctaBtn}</span>
              <ArrowUpRight className="h-4 w-4 stroke-[3]" />
            </button>
          </div>
 
          {/* Mobile menu toggle */}
          <div className={`md:hidden flex items-center gap-2.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={() => onLangChange(currentLang === 'EN' ? 'AR' : 'EN')}
              className="p-2.5 bg-white/[0.02] border border-white/[0.08] rounded-full text-slate-300 hover:bg-white/[0.05] transition-all flex items-center cursor-pointer"
            >
              <Globe className="h-4 w-4 text-brand-blue" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 bg-white/[0.02] border border-white/[0.08] rounded-full text-slate-300 hover:bg-white/[0.05] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
 
        </div>
      </div>
 
      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-brand-navy-dark transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col h-[calc(100vh-64px)] justify-between pb-16 pt-8 px-6 bg-brand-navy-dark border-t border-white/[0.06] overflow-y-auto">
          <nav className="flex flex-col space-y-6">
            {data.headerLinks.map((link) => {
              const pageName = link.href.replace('#/', '') as 'home' | 'about' | 'services' | 'blog' | 'contact';
              const isActive = activePage === pageName;
              
              if (pageName === 'services') {
                return (
                  <div key={link.label} className="flex flex-col">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`text-lg font-extrabold uppercase tracking-wide transition-all duration-200 border-b border-white/[0.06] pb-3.5 flex items-center justify-between cursor-pointer font-display ${
                        isActive ? 'text-brand-blue' : 'text-slate-300 hover:text-brand-blue'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-brand-blue' : 'text-slate-500'}`} />
                    </button>
                    
                    <div className={`flex flex-col pl-4 gap-3.5 overflow-hidden transition-all duration-300 ${
                      isServicesOpen ? 'max-h-80 mt-4 pb-3' : 'max-h-0'
                    }`}>
                      <a
                        href="#/services"
                        onClick={(e) => handleLinkClick(e, '#/services')}
                        className={`text-xs font-black uppercase tracking-wider text-brand-blue hover:text-brand-blue py-1.5 ${
                          isRtl ? 'text-right' : 'text-left'
                        }`}
                      >
                        {currentLang === 'AR' ? 'عرض جميع الخدمات' : 'View All Services'}
                      </a>
                      {data.servicesDropdown.items.map((item: { label: string; href: string }) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          className={`text-xs font-semibold text-slate-400 hover:text-brand-blue transition-all flex items-center justify-between py-1 ${
                            isRtl ? 'text-right' : 'text-left'
                          }`}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-lg font-extrabold uppercase tracking-wide transition-all duration-200 border-b border-white/[0.06] pb-3.5 font-display ${
                    isActive ? 'text-brand-blue' : 'text-slate-300 hover:text-brand-blue'
                  } ${isRtl ? 'text-right' : 'text-left'}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
 
          <button
            onClick={(e) => handleLinkClick(e, '#/contact')}
            className="block w-full text-center py-4 px-6 text-xs font-black uppercase tracking-widest rounded-full text-brand-navy bg-brand-blue hover:bg-brand-blue-hover shadow-lg transition-all duration-300 cursor-pointer"
          >
            {data.ctaBtn}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
