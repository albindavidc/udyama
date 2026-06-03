export type PillarType = 'Strength' | 'Mobility' | 'Balance' | 'Skill' | 'Endurance';

export interface Exercise {
  id: string;
  name: string;
  description?: string;
  imageFallback?: string;
}

export interface Benchmark {
  id: string;
  metric: string;
  completed: boolean;
}

export interface LayerCategory {
  strength?: string[];
  mobility?: string[];
  skills?: string[];
  push?: string[];
  pull?: string[];
  legs?: string[];
  core?: string[];
  [key: string]: string[] | undefined;
}

export interface Layer {
  level: number;
  title: string;
  goal: string;
  categories: LayerCategory;
  benchmarks: Benchmark[];
}

export interface Pillar {
  name: PillarType;
  progression: string[];
}

export interface AppData {
  layers: Layer[];
  pillars: Pillar[];
}

export interface UserProgress {
  currentLayer: number;
  completedBenchmarks: Record<string, boolean>; // map of benchmark id -> boolean
}
