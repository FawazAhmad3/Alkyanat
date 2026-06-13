import React from 'react';
import { MapPin, Phone, Mail, ArrowUp, ArrowRight } from 'lucide-react';
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
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        );
      case 'Twitter':
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'Instagram':
        return (
          <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
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
    <footer className="bg-[#080b1c] border-t border-amber-500/15 pt-16 pb-10 text-zinc-300 relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[250px] h-[250px] bg-amber-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tier 1: Top Corporate Banner */}
        <div className={`flex flex-col md:flex-row items-center justify-between pb-10 mb-12 border-b border-zinc-800/60 gap-6 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide font-sans">
              {currentLang === 'AR'
                ? 'تمكين قطاعات البناء والبنية التحتية والآليات بالمملكة'
                : 'Empowering KSA\'s Construction, Infrastructure & Fleet Sectors'}
            </h2>
            <p className="text-xs text-zinc-400 mt-1 font-sans">
              {currentLang === 'AR'
                ? 'شريك تشغيلي متكامل متوافق بالكامل مع رؤية ٢٠٣٠.'
                : 'Integrated operational partner fully aligned with Saudi Vision 2030.'}
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0c0f24] border border-zinc-800 hover:border-amber-500/50 rounded-xl text-xs font-bold text-amber-500 hover:text-amber-400 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-sans"
          >
            <span>{currentLang === 'AR' ? 'تواصل مع الإدارة' : 'Contact Our Desk'}</span>
            <ArrowRight className={`h-3.5 w-3.5 ${isRtl ? 'rotate-180' : ''}`} />
          </a>
        </div>

        {/* Tier 2: Main Content Columns */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 pb-12 border-b border-zinc-800/60 ${isRtl ? 'text-right' : ''}`}>
          
          {/* Column 1: Brand Info & Socials */}
          <div className="space-y-6">
            <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <img
                src="/assets/logo.png"
                alt="Al Kayanat Logo"
                className="h-10 w-10 object-contain rounded-xl border border-zinc-800/80"
              />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-wider text-white uppercase font-sans leading-none pb-1">
                  {currentLang === 'AR' ? 'الكيانات' : 'Al Kayanat'}
                </span>
                <span className="text-[9px] tracking-[0.25em] text-amber-500 uppercase font-semibold leading-none">
                  {currentLang === 'AR' ? 'مجموعة قابضة' : 'Holding Group'}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400 font-sans">
              {currentLang === 'AR' 
                ? 'مجموعة الكيانات هي تكتل صناعي سعودي رائد متخصص في توفير المركبات والمعدات الثقيلة، وآليات مشاريع البناء والتشييد الحكومية والخاصة، وتجهيز أساطيل النظافة وصيانة الطرق والحدائق.'
                : 'Al Kayanat Group is a premier Saudi conglomerate specializing in heavy-duty vehicles, construction equipment, heavy machinery for governmental and private sectors, and urban road/garden maintenance fleets.'}
            </p>
            {/* Social Hub */}
            <div className={`flex space-x-3 pt-2 ${isRtl ? 'justify-end space-x-reverse' : ''}`}>
              {socialLinks.map((social: { platform: string; url: string; iconName: string }) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0c0f24] border border-zinc-800 text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 hover:border-amber-400 hover:scale-110 shadow-sm transition-all duration-300 cursor-pointer"
                  aria-label={social.platform}
                >
                  {renderSocialIcon(social.iconName)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links Directory */}
          {footerSections.map((section) => (
            <div key={section.title} className={`${isRtl ? 'lg:pr-12' : 'lg:pl-12'}`}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6 font-sans">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-250 flex items-center group font-sans"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-amber-500 transition-colors duration-250 ${isRtl ? 'ml-2.5 mr-0' : 'mr-2.5'}`} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 3: Headquarters & Operations Desk */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white font-sans">
              {currentLang === 'AR' ? 'المقر الرئيسي والعمليات' : 'Operations & Headquarters'}
            </h3>
            <div className="space-y-4 font-sans">
              {/* Address card */}
              <div className="flex gap-4 p-3 bg-[#0c0f24]/50 border border-zinc-800/60 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-sm transition-all duration-300">
                <div className="p-2 bg-[#0c0f24] text-amber-500 border border-amber-500/10 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                    {currentLang === 'AR' ? 'الموقع' : 'Location'}
                  </span>
                  <span className="text-xs text-zinc-300 mt-0.5 leading-normal">
                    {contactInfo.address}
                  </span>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex gap-4 p-3 bg-[#0c0f24]/50 border border-zinc-800/60 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-sm transition-all duration-300">
                <div className="p-2 bg-[#0c0f24] text-amber-500 border border-amber-500/10 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                    {currentLang === 'AR' ? 'الهاتف' : 'Telephone'}
                  </span>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-xs text-zinc-350 hover:text-amber-400 mt-0.5 font-bold transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email card */}
              <div className="flex gap-4 p-3 bg-[#0c0f24]/50 border border-zinc-800/60 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-sm transition-all duration-300">
                <div className="p-2 bg-[#0c0f24] text-amber-500 border border-amber-500/10 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                    {currentLang === 'AR' ? 'البريد الإلكتروني' : 'Email Inquiry'}
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-xs text-zinc-300 hover:text-amber-400 mt-0.5 font-bold transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Tier 3: Bottom Bar Compliance & Navigation */}
        <div className={`pt-8 flex flex-col md:flex-row items-center justify-between mt-8 gap-4 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-xs text-zinc-500 text-center sm:text-left font-sans">
              &copy; {new Date().getFullYear()} {copyright}
            </p>
          </div>

          {/* Vision 2030 Badge */}
          <div className="flex items-center gap-2 py-1 px-3 bg-[#0c0f24]/60 rounded-full border border-zinc-800">
            <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase font-sans">
              {currentLang === 'AR' ? 'رؤية المملكة ٢٠٣٠ متوافقة' : 'Vision 2030 Aligned'}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className={`flex items-center space-x-2 text-xs font-semibold text-zinc-400 hover:text-amber-400 transition-colors uppercase tracking-wider group focus:outline-none cursor-pointer ${isRtl ? 'space-x-reverse' : ''}`}
          >
            <span>{backToTop}</span>
            <div className="p-2 bg-[#0c0f24] border border-zinc-800 rounded-xl group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors duration-300 shadow-sm">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
