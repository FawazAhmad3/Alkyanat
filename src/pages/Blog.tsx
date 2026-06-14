import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Calendar, Clock, ChevronRight, Share2 } from 'lucide-react';
import translationData from '../data/translationData.json';

interface BlogProps {
  currentLang: 'EN' | 'AR';
  onLangChange: (lang: 'EN' | 'AR') => void;
  onPageChange: (page: 'home' | 'about' | 'services' | 'blog' | 'contact') => void;
}

export const Blog: React.FC<BlogProps> = ({ currentLang, onLangChange, onPageChange }) => {
  const langKey = currentLang.toLowerCase() as 'en' | 'ar';
  const data = translationData[langKey].blogPage;
  const isRtl = currentLang === 'AR';

  return (
    <div className={`min-h-screen bg-[#0b132b] text-zinc-300 flex flex-col justify-between font-sans overflow-x-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Header */}
      <Header currentLang={currentLang} onLangChange={onLangChange} activePage="blog" onPageChange={onPageChange} />

      {/* Main Content */}
      <main className="flex-grow pt-36 pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Page Title Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#38bdf8]">
              {isRtl ? 'آخر الأخبار والمقالات' : 'Al Kayanat Insights'}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mt-2 leading-tight">
              {data.title}
            </h1>
            <p className="text-sm md:text-base text-zinc-400 mt-4 leading-relaxed font-medium">
              {data.subtitle}
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.posts.map((post: any) => (
              <article 
                key={post.id} 
                className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 hover:border-[#38bdf8]/30 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-sky-500/[0.01] group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#38bdf8] bg-slate-950 px-3 py-1 border border-slate-850 rounded-full">
                      {post.category}
                    </span>
                    
                    <button 
                      className="p-1.5 bg-slate-950 text-zinc-550 hover:text-[#38bdf8] rounded-lg border border-slate-850 hover:border-[#38bdf8]/20 transition-all cursor-pointer"
                      aria-label="Share article"
                    >
                      <Share2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <h2 className="text-base font-extrabold text-white group-hover:text-[#38bdf8] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  
                  <p className="text-xs leading-relaxed text-zinc-450 font-medium line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-855/80 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-[10px] text-zinc-550 font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-[#38bdf8]/70" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-[#38bdf8]/70" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <a 
                    href={`#/blog/${post.id}`}
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#38bdf8] hover:text-white transition-colors"
                  >
                    <span>{data.readMore}</span>
                    <ChevronRight className={`h-3 w-3 ${isRtl ? 'rotate-180' : ''}`} />
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} onPageChange={onPageChange} />

    </div>
  );
};

export default Blog;
