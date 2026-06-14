import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield, Settings, Leaf, CheckSquare, Plus, Minus } from 'lucide-react';
import aboutData from '../data/aboutData.json';

interface AboutProps {
  currentLang: 'EN' | 'AR';
  onLangChange: (lang: 'EN' | 'AR') => void;
  onPageChange: (page: 'home' | 'about' | 'services' | 'blog' | 'contact') => void;
}

export const About: React.FC<AboutProps> = ({ currentLang, onLangChange, onPageChange }) => {
  const langKey = currentLang.toLowerCase() as 'en' | 'ar';
  const data = aboutData[langKey];
  const isRtl = currentLang === 'AR';

  // FAQ accordion active state index
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const renderPolicyIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield className="h-6 w-6 text-brand-yellow" />;
      case 1:
        return <Settings className="h-6 w-6 text-brand-yellow" />;
      case 2:
        return <Leaf className="h-6 w-6 text-brand-yellow" />;
      case 3:
        return <CheckSquare className="h-6 w-6 text-brand-yellow" />;
      default:
        return <Shield className="h-6 w-6 text-brand-yellow" />;
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'about' | 'services' | 'blog' | 'contact') => {
    e.preventDefault();
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className={`min-h-screen bg-white text-zinc-800 flex flex-col justify-between font-sans overflow-x-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
      {/* Header */}
      <Header currentLang={currentLang} onLangChange={onLangChange} activePage="about" onPageChange={onPageChange} />

      {/* Main Content */}
      <main className="flex-grow pt-[104px]">
        
        {/* Breadcrumb Header Banner (Dark theme) */}
        <section className="bg-brand-dark text-white py-16 relative overflow-hidden border-b border-zinc-900">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-3">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              {data.hero.title}
            </h1>
            <p className="text-xs md:text-sm text-zinc-450 max-w-2xl mx-auto leading-relaxed">
              {data.hero.subtitle}
            </p>
            {/* Breadcrumb nav */}
            <div className={`flex items-center justify-center gap-2.5 text-[10px] font-black uppercase tracking-widest text-zinc-500 pt-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <a href="#/home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-brand-yellow transition-colors">
                {data.hero.breadcrumbHome}
              </a>
              <span className="text-zinc-700">/</span>
              <span className="text-brand-yellow">
                {data.hero.breadcrumbCurrent}
              </span>
            </div>
          </div>
        </section>

        {/* History Section (Split Content) */}
        <section className="py-24 bg-white border-b border-zinc-150">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* History Details */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-black uppercase tracking-widest text-brand-yellow bg-zinc-950 px-3.5 py-1.5 rounded-lg w-fit">
                  {data.history.subtitle}
                </span>
                <h2 className="text-2xl md:text-4xl font-black text-brand-dark tracking-tight leading-tight">
                  {data.history.title}
                </h2>
                <div className="space-y-4 text-xs md:text-sm text-zinc-500 font-semibold leading-relaxed">
                  <p>{data.history.paragraph1}</p>
                  <p>{data.history.paragraph2}</p>
                </div>
              </div>

              {/* History Graphics card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-200 bg-zinc-50 p-2.5 shadow-md">
                  <img 
                    src="/images/realestate_banner.png" 
                    alt="Al Kyanat KSA Operations" 
                    className="w-full h-full object-cover rounded-2xl opacity-95 hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* HSE & Quality Section (4-card Grid) */}
        <section className="py-24 bg-[#F9F9F9] border-b border-zinc-150">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow bg-zinc-950 px-3.5 py-1.5 rounded-lg">
                {data.policiesSection.subtitle}
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-brand-dark tracking-tight">
                {data.policiesSection.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.policiesSection.items.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white border border-zinc-200/65 rounded-2xl p-6 transition-all duration-300 hover:border-brand-yellow hover:shadow-md relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-yellow transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl w-fit mb-5 shadow-sm">
                    {renderPolicyIcon(index)}
                  </div>
                  <h3 className="text-base font-black text-brand-dark tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-semibold mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow bg-zinc-950 px-3 py-1.5 rounded-lg">
                {data.faqsSection.subtitle}
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-brand-dark tracking-tight">
                {data.faqsSection.title}
              </h2>
            </div>

            <div className="space-y-4">
              {data.faqsSection.items.map((item, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div 
                    key={index}
                    className="border border-zinc-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-zinc-350"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className={`w-full py-5 px-6 font-black text-xs md:text-sm tracking-tight text-brand-dark hover:text-brand-yellow flex items-center justify-between cursor-pointer ${
                        isOpen ? 'bg-zinc-50 text-brand-yellow' : 'bg-white'
                      } ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}
                    >
                      <span>{item.question}</span>
                      <div className="p-1 bg-zinc-900 rounded-lg text-white">
                        {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                      </div>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-60 border-t border-zinc-150 bg-zinc-50/40' : 'max-h-0'
                    }`}>
                      <p className="p-6 text-xs text-zinc-500 font-semibold leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onPageChange={onPageChange} />
    </div>
  );
};

export default About;
