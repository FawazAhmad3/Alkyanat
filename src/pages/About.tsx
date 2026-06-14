import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield, Activity, Leaf, Target, Award } from 'lucide-react';
import translationData from '../data/translationData.json';

interface AboutProps {
  currentLang: 'EN' | 'AR';
  onLangChange: (lang: 'EN' | 'AR') => void;
  onPageChange: (page: 'home' | 'about' | 'services' | 'blog' | 'contact') => void;
}

export const About: React.FC<AboutProps> = ({ currentLang, onLangChange, onPageChange }) => {
  const langKey = currentLang.toLowerCase() as 'en' | 'ar';
  const data = translationData[langKey].aboutPage;
  const homeData = translationData[langKey].home;
  const isRtl = currentLang === 'AR';

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="h-6 w-6 text-[#38bdf8]" />;
      case 'Activity':
        return <Activity className="h-6 w-6 text-[#38bdf8]" />;
      case 'Leaf':
        return <Leaf className="h-6 w-6 text-[#38bdf8]" />;
      default:
        return <Award className="h-6 w-6 text-[#38bdf8]" />;
    }
  };

  return (
    <div className={`min-h-screen bg-[#0b132b] text-zinc-300 flex flex-col justify-between font-sans overflow-x-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Header */}
      <Header currentLang={currentLang} onLangChange={onLangChange} activePage="about" onPageChange={onPageChange} />

      {/* Main Content */}
      <main className="flex-grow pt-36 pb-20 relative">
        {/* Background ambient light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Page Title Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#38bdf8]">
              {isRtl ? 'عن المجموعة' : 'Company Overview'}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mt-2 leading-tight">
              {data.title}
            </h1>
            <p className="text-sm md:text-base text-zinc-400 mt-4 leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          {/* Story Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 border-b border-slate-900">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">
                {data.storyTitle}
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium">
                {data.storyText}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 bg-slate-900/40 border border-slate-850 rounded-2xl">
                  <div className="p-2.5 bg-slate-950 text-[#38bdf8] border border-slate-800 rounded-xl w-fit mb-3">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
                    {data.visionTitle}
                  </h3>
                  <p className="text-[11px] text-zinc-550 mt-2 leading-relaxed">
                    {data.visionText}
                  </p>
                </div>

                <div className="p-5 bg-slate-900/40 border border-slate-850 rounded-2xl">
                  <div className="p-2.5 bg-slate-950 text-[#38bdf8] border border-slate-800 rounded-xl w-fit mb-3">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
                    {data.missionTitle}
                  </h3>
                  <p className="text-[11px] text-zinc-555 mt-2 leading-relaxed">
                    {data.missionText}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-slate-950 to-slate-900 border border-slate-800 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.1),transparent_70%)]" />
                
                <div className="flex justify-between items-start">
                  <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-75">
                    <path d="M 50,12 L 66,28 L 50,44 L 34,28 Z" fill="#38bdf8" />
                    <path d="M 32,30 L 48,46 L 32,62 L 16,46 Z" fill="#ffffff" />
                    <path d="M 68,30 L 84,46 L 68,62 L 52,46 Z" fill="#ffffff" />
                    <path d="M 50,48 L 66,64 L 50,80 L 34,64 Z" fill="#38bdf8" />
                  </svg>
                  <span className="text-[9px] font-black tracking-widest text-[#38bdf8] bg-slate-950/80 px-3 py-1 border border-slate-800 rounded-full uppercase">
                    {isRtl ? 'الرياض، السعودية' : 'Riyadh, KSA'}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-lg font-black text-white">
                    {isRtl ? 'مجموعة الكيانات القابضة' : 'Al Kayanat Holding'}
                  </h3>
                  <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider font-semibold">
                    {isRtl ? 'التميز والريادة في قطاعات البنية التحتية واللوجستيات' : 'Core industrial excellence & national infrastructure support'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Operational Statistics */}
          <section className="py-16 border-b border-slate-900">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-[#38bdf8]">
                {isRtl ? 'أرقام وحقائق' : 'Operational Scale'}
              </span>
              <h2 className="text-2xl font-black text-white mt-1">
                {homeData.statsSection.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {homeData.stats.map((stat: any, index: number) => (
                <div key={index} className="bg-slate-900/30 border border-slate-850 rounded-2xl p-6 text-center hover:border-[#38bdf8]/35 transition-all">
                  <span className="text-3xl md:text-4xl font-black text-white block bg-gradient-to-r from-[#38bdf8] to-cyan-500 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-zinc-300 block mt-2">
                    {stat.label}
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-1 block leading-normal font-semibold">
                    {stat.description}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Corporate Pillars */}
          <section className="py-16">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-[#38bdf8]">
                {isRtl ? 'ركائزنا التشغيلية' : 'Core Values'}
              </span>
              <h2 className="text-2xl font-black text-white mt-1">
                {homeData.pillarsSection.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {homeData.pillars.map((pillar: any, index: number) => (
                <div key={index} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-[#38bdf8]/20 transition-all">
                  <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl w-fit mb-5">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <h3 className="text-lg font-extrabold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-450 mt-2.5 leading-relaxed font-semibold">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onPageChange={onPageChange} />

    </div>
  );
};

export default About;
