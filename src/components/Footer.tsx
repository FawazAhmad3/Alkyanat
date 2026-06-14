import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import translationData from '../data/translationData.json';

interface FooterProps {
  currentLang: 'EN' | 'AR';
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const langKey = currentLang.toLowerCase() as 'en' | 'ar';
  const { footerSections, contactInfo, socialLinks, copyright, backToTop } = translationData[langKey].navigation;

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        );
      case 'Twitter':
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'Instagram':
        return (
          <svg fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isRtl = currentLang === 'AR';

  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 pt-16 pb-10 text-zinc-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Tier 1: Directory Columns */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 ${isRtl ? 'text-right' : 'text-left'}`}>
          
          {/* Section 1: Logo & Info */}
          <div className="space-y-6">
            <div className={`flex items-center gap-3.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className="p-1.5 bg-slate-900 border border-slate-800 rounded-xl shadow-sm">
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
              <div className="flex flex-col leading-none">
                <span className="text-lg font-black tracking-wider text-white uppercase font-sans pb-0.5">
                  {currentLang === 'AR' ? 'الكيانات' : 'Al Kayanat'}
                </span>
                <span className="text-[8px] tracking-[0.25em] text-[#38bdf8] font-black uppercase">
                  {currentLang === 'AR' ? 'مجموعة قابضة' : 'Holding Group'}
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500 font-medium">
              {currentLang === 'AR'
                ? 'الكيانات هي تكتل وطني رائد يوفر آليات ومعدات ثقيلة لمشاريع التشييد والبناء والبنية التحتية، بالإضافة إلى مركبات الخدمات العامة وصيانة الطرق.'
                : 'Al Kayanat is a major industrial holding group supplying heavy machinery, construction vehicles, public sector garden maintenance fleets, and sweepers across KSA.'}
            </p>
            <div className={`flex gap-3 pt-2 ${isRtl ? 'justify-end' : ''}`}>
              {socialLinks.map((social: { platform: string; url: string; iconName: string }) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-zinc-400 hover:text-white hover:bg-[#38bdf8] hover:border-[#38bdf8] hover:scale-105 transition-all duration-300"
                  aria-label={social.platform}
                >
                  {renderSocialIcon(social.iconName)}
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Links */}
          {footerSections.map((section) => (
            <div key={section.title} className={`${isRtl ? 'lg:pr-20' : 'lg:pl-20'}`}>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#38bdf8] mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-250 flex items-center group"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full bg-slate-800 group-hover:bg-[#38bdf8] transition-all duration-250 ${isRtl ? 'ml-2.5' : 'mr-2.5'}`} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Section 3: Contacts */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#38bdf8] mb-2">
              {currentLang === 'AR' ? 'مركز العمليات والمقر' : 'Headquarters & Fleet Hub'}
            </h3>
            
            {/* Address */}
            <div className="flex gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all duration-300">
              <div className="p-2.5 bg-slate-900 text-[#38bdf8] border border-slate-800 rounded-xl h-10 w-10 shrink-0 flex items-center justify-center">
                <MapPin className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-zinc-550">
                  {currentLang === 'AR' ? 'الموقع' : 'Location'}
                </span>
                <span className="text-xs text-zinc-300 font-bold mt-1 leading-normal">
                  {contactInfo.address}
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all duration-300">
              <div className="p-2.5 bg-slate-900 text-[#38bdf8] border border-slate-800 rounded-xl h-10 w-10 shrink-0 flex items-center justify-center">
                <Phone className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-zinc-550">
                  {currentLang === 'AR' ? 'رقم الاتصال' : 'Operations Desk'}
                </span>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-xs text-zinc-300 font-extrabold hover:text-[#38bdf8] mt-1 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all duration-300">
              <div className="p-2.5 bg-slate-900 text-[#38bdf8] border border-slate-800 rounded-xl h-10 w-10 shrink-0 flex items-center justify-center">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-zinc-550">
                  {currentLang === 'AR' ? 'البريد الإلكتروني' : 'Official Inquiry'}
                </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-xs text-zinc-300 font-extrabold hover:text-[#38bdf8] mt-1 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Tier 2: Bottom Compliance bar */}
        <div className={`pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
            &copy; {new Date().getFullYear()} {copyright}
          </span>

          {/* Vision 2030 Badge */}
          <div className="flex items-center gap-2.5 py-1.5 px-4 bg-slate-900 border border-slate-800 rounded-full">
            <span className="h-2 w-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span className="text-[9px] font-black tracking-widest text-zinc-400 uppercase">
              {currentLang === 'AR' ? 'متوافق مع رؤية المملكة ٢٠٣٠' : 'Vision 2030 Aligned'}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2.5 text-xs font-black uppercase tracking-widest text-zinc-555 hover:text-white transition-colors group ${isRtl ? 'flex-row-reverse' : ''}`}
          >
            <span>{backToTop}</span>
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl group-hover:bg-[#38bdf8] group-hover:text-[#0f172a] transition-all duration-300 shadow-sm">
              <ArrowUp className="h-4.5 w-4.5 stroke-[2.5]" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
