import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface BlogProps {
  currentLang: 'EN' | 'AR';
  onLangChange: (lang: 'EN' | 'AR') => void;
  onPageChange: (page: 'home' | 'about' | 'services' | 'blog' | 'contact') => void;
}

export const Blog: React.FC<BlogProps> = ({ currentLang, onLangChange, onPageChange }) => {
  const isRtl = currentLang === 'AR';

  return (
    <div className={`min-h-screen bg-white text-slate-700 flex flex-col justify-between font-sans overflow-x-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
      {/* Header */}
      <Header currentLang={currentLang} onLangChange={onLangChange} activePage="blog" onPageChange={onPageChange} />

      {/* Main Content (Blank Placeholder) */}
      <main className="flex-grow flex items-center justify-center pt-[88px] pb-20 relative">
        <h1 className="text-3xl font-black text-brand-navy uppercase tracking-wider">
          {currentLang === 'AR' ? 'المدونة' : 'Blog'}
        </h1>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onPageChange={onPageChange} />
    </div>
  );
};

export default Blog;
