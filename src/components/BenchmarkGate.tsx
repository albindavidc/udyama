import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { Benchmark } from '../types';
import { Check, Lock } from 'lucide-react';

interface BenchmarkGateProps {
  benchmarks: Benchmark[];
  layerLevel: number;
  isUnlocked: boolean;
  isActive?: boolean;
}

export function BenchmarkGate({ benchmarks, layerLevel, isUnlocked, isActive }: BenchmarkGateProps) {
  const { completedBenchmarks, toggleBenchmark } = useProgress();

  if (!isUnlocked) {
    return (
      <div className="mt-8 border border-white/5 bg-black/20 rounded-2xl p-6 text-center backdrop-blur-sm">
        <div className="flex justify-center mb-3">
          <div className="p-3 bg-white/5 border border-white/10 rounded-full text-white/30">
            <Lock className="w-5 h-5" />
          </div>
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-white/40">Layer Locked</p>
        <p className="text-[10px] uppercase font-mono text-white/30 mt-2">Complete previous layer benchmarks to unlock</p>
      </div>
    );
  }

  const allCompleted = benchmarks.every(b => completedBenchmarks[b.id]);

  return (
    <div className={`mt-8 rounded-2xl p-6 transition-all border ${
      allCompleted 
        ? 'border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-transparent' 
        : isActive 
          ? 'glass-cyan' 
          : 'bg-white/5 border-white/10'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isActive && !allCompleted ? 'text-cyan-400' : 'text-white/40'}`}>
          Benchmark Gate
        </h4>
        {allCompleted && (
           <span className="text-[10px] font-mono bg-cyan-500 text-black px-2 py-1 rounded uppercase font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)]">
             Cleared ✓
           </span>
        )}
      </div>
      
      <div className="space-y-3">
        {benchmarks.map((b) => {
          const isDone = completedBenchmarks[b.id] || false;
          return (
            <div 
              key={b.id} 
              onClick={() => toggleBenchmark(b.id, layerLevel)}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer select-none group
                ${isDone 
                  ? 'border-cyan-500/30 bg-cyan-500/10 text-white' 
                  : (isActive ? 'border-white/10 hover:border-white/20 bg-black/30 hover:bg-black/50 text-white/70' : 'border-white/5 hover:border-white/10 bg-black/20 hover:bg-black/40 text-white/60')}`}
            >
              <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all shrink-0 ${
                isDone 
                  ? 'bg-cyan-500 border-cyan-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.5)]' 
                  : 'border-white/30 group-hover:border-white/50 text-transparent'
              }`}>
                {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <span className="text-xs md:text-sm font-medium tracking-tight uppercase italic">{b.metric}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
