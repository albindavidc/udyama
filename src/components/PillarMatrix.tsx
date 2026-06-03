import React from 'react';
import { appData } from '../data';
import { PillarType } from '../types';
import { Activity, Dumbbell, Move, Target, Timer } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

const PILLAR_ICONS: Record<PillarType, React.ReactNode> = {
  Strength: <Dumbbell className="w-4 h-4" />,
  Mobility: <Move className="w-4 h-4" />,
  Balance: <Activity className="w-4 h-4" />,
  Skill: <Target className="w-4 h-4" />,
  Endurance: <Timer className="w-4 h-4" />,
};

export function PillarMatrix() {
  const { currentLayer } = useProgress();
  const indexLevel = Math.min(Math.floor((currentLayer - 1) / 1.5), 4);

  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 mb-6 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-light tracking-tight text-white uppercase italic">Pillar Matrix</h2>
          <p className="text-sm text-white/50 mt-2 max-w-lg">Track your balanced development across the 5 core calisthenics modalities. Maintain uniform progression to avoid structural weaknesses.</p>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
           <div className="text-[120px] font-black leading-none uppercase select-none italic tracking-tighter">P5</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {appData.pillars.map((pillar, idx) => {
          const colors = ['text-cyan-400', 'text-purple-400', 'text-cyan-400', 'text-blue-400', 'text-emerald-400'];
          
          return (
            <div key={pillar.name} className="glass-card p-6 flex flex-col h-full bg-white/[0.03]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
                  {PILLAR_ICONS[pillar.name]}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">{pillar.name}</h3>
              </div>
              
              <div className="flex-1 flex flex-col gap-3 relative">
                {/* Connective line */}
                <div className="absolute left-3 top-2 bottom-6 w-px bg-white/10" />
                
                {pillar.progression.map((stage, sIdx) => {
                  const isCurrent = sIdx === indexLevel;
                  const isPast = sIdx < indexLevel;
                  
                  return (
                    <div key={stage} className={`flex items-start gap-4 relative z-10 p-3 rounded-xl transition-all ${
                      isCurrent 
                        ? 'bg-white/10 border border-white/10 shadow-lg backdrop-blur-md' 
                        : 'border border-transparent'
                    }`}>
                      <div className={`mt-0.5 w-6 h-6 rounded-full border-2 shrink-0 flex items-center justify-center text-[8px] font-bold transition-all ${
                        isPast 
                          ? 'bg-cyan-500 border-cyan-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.4)]' :
                        isCurrent 
                          ? 'bg-transparent border-white text-white' :
                        'bg-[#050506] border-white/20 text-transparent'
                      }`}>
                        {sIdx + 1}
                      </div>
                      <span className={`text-xs uppercase font-medium tracking-tight mt-1 leading-tight ${
                        isPast ? 'text-white/40 line-through decoration-white/20' :
                        isCurrent ? colors[idx % colors.length] :
                        'text-white/30'
                      }`}>
                        {stage}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
