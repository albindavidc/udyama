import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { appData } from '../data';
import { Activity, Dumbbell, Move, Target, Timer } from 'lucide-react';
import { PillarType } from '../types';

const PILLAR_ICONS: Record<PillarType, React.ReactNode> = {
  Strength: <Dumbbell className="w-4 h-4" />,
  Mobility: <Move className="w-4 h-4" />,
  Balance: <Activity className="w-4 h-4" />,
  Skill: <Target className="w-4 h-4" />,
  Endurance: <Timer className="w-4 h-4" />,
};

export function DashboardBento() {
  const { currentLayer, completedBenchmarks } = useProgress();

  const layer = appData.layers[currentLayer - 1];
  const progressionIndex = Math.min(Math.floor((currentLayer - 1) / 1.5), 4);
  const layerCompleted = layer?.benchmarks.every(b => completedBenchmarks[b.id]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Active Layer Details */}
      <section className="col-span-1 lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden min-h-[300px]">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <div className="text-[140px] font-black leading-none uppercase select-none italic tracking-tighter">
            L{currentLayer.toString().padStart(2, '0')}
          </div>
        </div>
        <div className="relative z-10">
          <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-cyan-500/30">
            {layerCompleted ? 'Layer Mastered' : 'Active Layer'}
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 tracking-tight">{layer?.title}</h2>
          <p className="text-white/60 mt-4 max-w-md text-sm leading-relaxed">
            {layer?.goal}
          </p>
        </div>
        
        <div className="mt-auto pt-10 flex gap-6 items-end relative z-10">
          <div className="flex-1 h-32 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-[10px] font-mono text-cyan-300 uppercase">
              Current Focus Path
            </div>
            <div className="flex gap-2 items-end justify-center w-full px-4 mb-4">
              {[1, 2, 3, 4, 5, 6, 7].map(l => (
                <div 
                  key={l}
                  className={`w-3 rounded-full transition-all duration-500 ${
                    l < currentLayer ? 'bg-white h-12 opacity-40' : 
                    l === currentLayer ? 'bg-cyan-400 h-16 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 
                    'bg-white/10 h-6'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
        {/* Pillar Stats */}
        <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex-1">
          <h3 className="text-[10px] font-bold uppercase text-white/40 tracking-[0.2em] mb-5">The 5 Pillars Matrix</h3>
          <div className="space-y-4">
            {appData.pillars.map((pillar, idx) => {
               const colors = ['bg-cyan-400', 'bg-purple-400', 'bg-cyan-400', 'bg-blue-400', 'bg-cyan-400'];
               const textColors = ['text-cyan-400', 'text-purple-400', 'text-cyan-400', 'text-blue-400', 'text-cyan-400'];
               return (
                <div key={pillar.name} className="flex items-center gap-4">
                  <span className="w-24 text-[10px] font-mono text-white/60 tracking-wider uppercase flex items-center gap-2">
                    <span className="opacity-50">{PILLAR_ICONS[pillar.name]}</span>
                    {pillar.name}
                  </span>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-700 ease-out ${colors[idx % colors.length]}`} 
                      style={{ width: `${Math.max(10, ((progressionIndex + 1) / 5) * 100)}%` }}
                    ></div>
                  </div>
                  <span className={`text-[10px] font-mono ${textColors[idx % textColors.length]}`}>Lvl {progressionIndex + 1}</span>
                </div>
               );
            })}
          </div>
        </section>
        
        {/* Progress Summary Gate */}
        <section className="glass-cyan p-6 flex flex-col">
          <div className="flex justify-between items-start">
            <h3 className="text-[10px] font-bold uppercase text-cyan-400 tracking-[0.2em]">Validation Gate</h3>
            <span className={`text-[10px] font-mono px-2 rounded uppercase font-bold ${layerCompleted ? 'bg-cyan-500 text-black' : 'bg-cyan-500/50 text-white/80'}`}>
              {layerCompleted ? 'Cleared' : 'Locked'}
            </span>
          </div>
          <div className="mt-4">
            <div className="text-xl font-bold tracking-tight uppercase italic break-words line-clamp-1 text-white/90">
              {layer?.benchmarks[layer.benchmarks.length - 1]?.metric}
            </div>
            <p className="text-xs text-cyan-400/60 mt-1">Final requirement to unlock Layer {(currentLayer + 1).toString().padStart(2, '0')}</p>
          </div>
        </section>
      </div>
      
    </div>
  );
}
