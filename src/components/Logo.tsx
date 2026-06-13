import React from 'react';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
  textClassName?: string;
  subtitleClassName?: string;
  lang?: 'EN' | 'AR';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  iconClassName = 'h-8 w-8',
  showText = true,
  textClassName = 'text-xl font-bold tracking-wider text-white uppercase font-sans',
  subtitleClassName = 'text-[9px] tracking-[0.25em] text-emerald-500 uppercase font-semibold',
  lang = 'EN'
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Emblem */}
      <div className={`p-2 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.15)] border border-emerald-300/10 flex items-center justify-center shrink-0 ${iconClassName}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-zinc-950 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Trunk - Structured Blocks/Entities */}
          <path d="M45 85 h10 v-18 h-10 z" />
          <path d="M42 62 h16 v-14 h-16 z" opacity="0.95" />
          <path d="M38 43 h24 v-10 h-24 z" opacity="0.9" />
          
          {/* Palm Fronds - Curved Symmetrical Growth */}
          <path d="M50 30 C50 18, 32 16, 20 28 C32 24, 46 26, 48 30 Z" />
          <path d="M50 30 C50 18, 68 16, 80 28 C68 24, 54 26, 52 30 Z" />
          <path d="M49 28 C45 15, 25 22, 12 40 C25 32, 42 32, 47 30 Z" />
          <path d="M51 28 C55 15, 75 22, 88 40 C75 32, 58 32, 53 30 Z" />
          <path d="M50 26 C50 10, 50 10, 50 8 C50 10, 50 10, 50 26 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={textClassName}>
            {lang === 'AR' ? 'الكيانات' : 'Al Kayanat'}
          </span>
          <span className={subtitleClassName}>
            {lang === 'AR' ? 'مجموعة قابضة' : 'Holding Group'}
          </span>
        </div>
      )}
    </div>
  );
};
export default Logo;
