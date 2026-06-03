import React from 'react';

interface ExerciseCardProps {
  key?: React.Key;
  name: string;
  category: string;
  active?: boolean;
}

export function ExerciseCard({ name, category, active }: ExerciseCardProps) {
  return (
    <div className={`group cursor-pointer rounded-xl p-4 flex flex-col justify-between transition-all border ${
      active 
        ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/30' 
        : 'bg-white/[0.02] border-white/5 hover:bg-white/5'
    }`}>
      <div>
        <h4 className="text-sm font-medium text-white/90 leading-tight group-hover:text-cyan-400 transition-colors">{name}</h4>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[10px] font-mono font-bold tracking-widest text-white/30 uppercase">{category}</span>
        <div className={`w-6 h-6 rounded-full border flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity ${
          active ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-white/5 border-white/10 text-white'
        }`}>
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
