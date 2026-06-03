import React from 'react';
import { appData } from '../data';
import { useProgress } from '../context/ProgressContext';
import { ExerciseCard } from './ExerciseCard';
import { BenchmarkGate } from './BenchmarkGate';

export function LayerProgressionTree() {
  const { currentLayer, isLayerUnlocked } = useProgress();

  return (
    <div className="space-y-16 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-white/10 before:to-transparent">
      {appData.layers.map((layer, index) => {
        const unlocked = isLayerUnlocked(layer.level);
        const isActive = layer.level === currentLayer;
        const isMastered = layer.level < currentLayer;
        
        return (
          <div key={layer.level} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all duration-500 ${unlocked ? 'opacity-100' : 'opacity-40'}`}>
            
            {/* Center Node dot */}
            <div className={`flex items-center justify-center rounded-full shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all ${
              isActive 
                ? 'w-14 h-14 bg-cyan-500 border-4 border-cyan-900 shadow-[0_0_20px_rgba(6,182,212,0.4)] text-black text-lg font-black font-mono' 
                : isMastered
                  ? 'w-10 h-10 bg-white/20 border border-white/30 text-white shadow-[0_0_10px_rgba(255,255,255,0.2)] text-xs font-mono font-bold'
                  : 'w-10 h-10 bg-[#050506] border border-white/20 text-white/50 text-xs font-mono'
            }`}>
              {layer.level.toString().padStart(2, '0')}
            </div>

            {/* Content card */}
            <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 md:p-8 transition-colors border ${
              isActive ? 'border-cyan-500/30 bg-white/10 shadow-[0_4px_30px_rgba(6,182,212,0.1)]' : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
            }`}>
              <div className="mb-6">
                <span className={`text-[10px] uppercase font-bold tracking-[0.2em] ${isActive ? 'text-cyan-400' : 'text-white/40'}`}>
                  Layer {layer.level.toString().padStart(2, '0')}
                </span>
                <h3 className="text-xl md:text-3xl font-light tracking-tight text-white mb-2 mt-2">{layer.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-sm">{layer.goal}</p>
              </div>

              {unlocked && (
                <div className="space-y-6">
                  {Object.entries(layer.categories).map(([category, exercises]) => {
                    if (!exercises || exercises.length === 0) return null;
                    return (
                      <div key={category} className="space-y-3">
                        <h4 className="text-[10px] font-bold uppercase text-white/40 tracking-[0.2em]">{category}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {exercises.map((ex) => (
                            <ExerciseCard key={ex} name={ex} category={category} active={isActive} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <BenchmarkGate 
                benchmarks={layer.benchmarks} 
                layerLevel={layer.level} 
                isUnlocked={unlocked}
                isActive={isActive}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
