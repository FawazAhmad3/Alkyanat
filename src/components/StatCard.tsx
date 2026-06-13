import React from 'react';

export interface GroupStat {
  value: string;
  label: string;
  description: string;
}

interface StatCardProps {
  stat: GroupStat;
  isRtl?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, isRtl = false }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 p-6 sm:p-8 hover:border-zinc-800 transition-colors duration-300 ${isRtl ? 'text-right' : 'text-left'}`}>
      {/* Decorative vertical gradient line */}
      <div className={`absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-500 to-green-600 opacity-60 ${isRtl ? 'right-0' : 'left-0'}`} />

      <div className="flex flex-col">
        {/* Value */}
        <span className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-600 tracking-tight mb-2">
          {stat.value}
        </span>
        {/* Label */}
        <span className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
          {stat.label}
        </span>
        {/* Description */}
        <span className="text-xs text-zinc-500 leading-relaxed font-light">
          {stat.description}
        </span>
      </div>
    </div>
  );
};
