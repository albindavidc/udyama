import React, { useState } from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { DashboardBento } from './components/DashboardBento';
import { LayerProgressionTree } from './components/LayerProgressionTree';
import { PillarMatrix } from './components/PillarMatrix';
import { HomeView } from './components/HomeView';

function HeaderStats() {
  const { currentLayer } = useProgress();
  return (
    <>
      <div className="text-right">
        <div className="text-[10px] uppercase text-white/40 font-bold">Current Rank</div>
        <div className="text-sm font-mono text-cyan-400">LAYER {currentLayer.toString().padStart(2, '0')}</div>
      </div>
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-white/20"></div>
    </>
  );
}

export default function App() {
  const [view, setView] = useState<'home' | 'level' | 'matrix'>('home');

  return (
    <ProgressProvider>
      <div className="min-h-screen pb-24 px-4 sm:px-6 w-full max-w-[1240px] mx-auto pt-6 flex flex-col gap-6">
        
        <header className="flex flex-col md:flex-row justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 md:px-8 py-4 shadow-2xl gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <span className="text-black font-black text-xl">U</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tighter uppercase italic">udyama</h1>
          </div>
          
          <nav className="flex gap-4 md:gap-8 text-xs font-semibold tracking-widest uppercase text-white/50">
            <button 
              onClick={() => setView('home')}
              className={`transition-colors cursor-pointer pb-1 ${view === 'home' ? 'text-cyan-400 border-b border-cyan-400' : 'hover:text-white'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setView('level')}
              className={`transition-colors cursor-pointer pb-1 ${view === 'level' ? 'text-cyan-400 border-b border-cyan-400' : 'hover:text-white'}`}
            >
              Level
            </button>
            <button 
              onClick={() => setView('matrix')}
              className={`transition-colors cursor-pointer pb-1 ${view === 'matrix' ? 'text-cyan-400 border-b border-cyan-400' : 'hover:text-white'}`}
            >
              Matrix
            </button>
          </nav>
          
          <div className="flex items-center gap-4 hidden md:flex">
             <HeaderStats />
          </div>
        </header>

        <main className="flex-1 flex flex-col gap-6">
          {view === 'home' && (
            <div className="animate-in fade-in duration-700 ease-out">
              <HomeView />
            </div>
          )}
          {view === 'level' && (
            <div className="animate-in fade-in duration-700 ease-out flex flex-col gap-6">
              <DashboardBento />
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10">
                <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                  <h3 className="text-xs md:text-[10px] font-bold uppercase text-white/40 tracking-[0.2em]">The 7 Layers of Mastery</h3>
                </div>
                <LayerProgressionTree />
              </div>
            </div>
          )}
          {view === 'matrix' && (
            <div className="animate-in fade-in duration-700 ease-out">
              <PillarMatrix />
            </div>
          )}
        </main>
        
      </div>
    </ProgressProvider>
  );
}

