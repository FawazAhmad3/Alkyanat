import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface HomeProps {
  currentLang: 'EN' | 'AR';
  onLangChange: (lang: 'EN' | 'AR') => void;
  onPageChange: (page: 'home' | 'about' | 'services' | 'blog' | 'contact') => void;
}

export const Home: React.FC<HomeProps> = ({ currentLang, onLangChange, onPageChange }) => {
  const isRtl = currentLang === 'AR';

  return (
    <div className={`min-h-screen bg-[#0b132b] text-zinc-300 flex flex-col justify-between font-sans overflow-x-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
      {/* Header */}
      <Header currentLang={currentLang} onLangChange={onLangChange} activePage="home" onPageChange={onPageChange} />

      {/* Main Content Area (Clean Slate) */}
      <main className="flex-grow flex items-center justify-center pt-36 pb-20 relative">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.02),transparent_50%)] pointer-events-none" />
        
        <div className="text-center space-y-4 max-w-md px-4 relative z-10">
          <h2 className="text-2xl font-black uppercase tracking-wider bg-gradient-to-r from-[#38bdf8] to-cyan-500 bg-clip-text text-transparent font-sans">
            {currentLang === 'AR' ? 'مجموعة الكيانات القابضة' : 'Al Kayanat Holding Group'}
          </h2>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans font-medium">
            {currentLang === 'AR'
              ? 'أهلاً بك في البوابة الإلكترونية لمجموعة الكيانات. الرجاء استخدام شريط التنقل في الأعلى لاستكشاف صفحاتنا وكياناتنا المختلفة.'
              : 'Welcome to the corporate portal of Al Kayanat. Please use the navigation bar above to explore our diverse entities and services.'}
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onPageChange={onPageChange} />
    </div>
  );
};

export default Home;
