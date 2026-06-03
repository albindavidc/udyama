import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { appData } from '../data';

interface ProgressContextType {
  currentLayer: number;
  completedBenchmarks: Record<string, boolean>;
  toggleBenchmark: (id: string, layerLevel: number) => void;
  isLayerUnlocked: (level: number) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completedBenchmarks, setCompletedBenchmarks] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('udyama_progress');
    return saved ? JSON.parse(saved) : {};
  });

  const [currentLayer, setCurrentLayer] = useState<number>(1);

  // Re-evaluate current max layer when benchmarks change
  useEffect(() => {
    localStorage.setItem('udyama_progress', JSON.stringify(completedBenchmarks));
    
    let maxUnlocked = 1;
    for (const layer of appData.layers) {
      const allDone = layer.benchmarks.every(b => completedBenchmarks[b.id]);
      if (allDone) {
        maxUnlocked = Math.max(maxUnlocked, Math.min(layer.level + 1, 7)); // max 7 layers
      } else {
        break; // stop evaluating higher layers if a lower one isn't fully completed
      }
    }
    setCurrentLayer(maxUnlocked);
  }, [completedBenchmarks]);

  const toggleBenchmark = (id: string) => {
    setCompletedBenchmarks(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isLayerUnlocked = (level: number) => {
    if (level === 1) return true;
    
    // Check if the previous layer benchmarks are all completed
    const prevLayer = appData.layers.find(l => l.level === level - 1);
    if (!prevLayer) return false;

    return prevLayer.benchmarks.every(b => completedBenchmarks[b.id]);
  };

  return (
    <ProgressContext.Provider value={{
      currentLayer,
      completedBenchmarks,
      toggleBenchmark,
      isLayerUnlocked
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
