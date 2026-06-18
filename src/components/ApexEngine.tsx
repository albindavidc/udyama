import React, { useState } from 'react';
import { Activity, Dumbbell, Timer, Flame, Zap, StretchHorizontal, Waves, Trophy, Target, Shield, ArrowUpRight, BarChart } from 'lucide-react';
import { motion } from 'motion/react';

type DayConfig = {
  day: number;
  title: string;
  focus: string;
  icon: React.ElementType;
  color: string;
  reps: number;
  details: {
    goal: string;
    description?: string;
    structure?: string;
    rules?: string;
    exercises: { name: string; sets?: number | string; reps: number | string; total?: string }[];
  };
};

const apexSchedule: DayConfig[] = [
  {
    day: 1,
    title: "Centurion Engine",
    focus: "Conditioning",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    reps: 300,
    details: {
      goal: "Speed, pacing, work capacity",
      structure: "5 rounds • 45s rest between exercises • 2 min rest between rounds",
      exercises: [
        { name: "Pushups", reps: 20 },
        { name: "Inverted Rows / Chin-Ups", reps: 10 },
        { name: "Jump Squats", reps: 20 },
        { name: "Hanging Knee Raises", reps: 10 },
      ]
    }
  },
  {
    day: 2,
    title: "Mechanical Load",
    focus: "Strength",
    icon: Dumbbell,
    color: "from-red-500 to-rose-600",
    reps: 270,
    details: {
      goal: "Muscle growth and brute strength",
      structure: "Straight sets • 60-90s rest • Tempo: 3s down, 1s pause, explode up",
      exercises: [
        { name: "Decline Pushups", sets: 4, reps: 25 },
        { name: "Strict Bodyweight Rows", sets: 5, reps: 10 },
        { name: "Walking Lunges", sets: 4, reps: "15/leg" },
        { name: "Hollow Body Hold", sets: 4, reps: "45 sec" },
      ]
    }
  },
  {
    day: 3,
    title: "EMOM Inferno",
    focus: "Endurance",
    icon: Flame,
    color: "from-orange-500 to-red-500",
    reps: 475,
    details: {
      goal: "Stamina and heart-rate control",
      rules: "Every Minute On the Minute: Complete reps, use remaining time to rest. 5 cycles.",
      exercises: [
        { name: "Diamond Pushups (Min 1)", reps: 20 },
        { name: "Chin-Ups / Rows (Min 2)", reps: 10 },
        { name: "Air Squats (Min 3)", reps: 25 },
        { name: "Mountain Climbers (Min 4)", reps: 40 },
        { name: "Complete Rest (Min 5)", reps: "-" },
      ]
    }
  },
  {
    day: 4,
    title: "Active Recovery",
    focus: "Recovery",
    icon: StretchHorizontal,
    color: "from-emerald-400 to-teal-500",
    reps: 0,
    details: {
      goal: "Mobility and muscle healing",
      structure: "Walking • Stretching • Light mobility • Hydration • Sleep",
      exercises: []
    }
  },
  {
    day: 5,
    title: "Pyramid of Death",
    focus: "Volume",
    icon: Target,
    color: "from-purple-500 to-pink-500",
    reps: 500,
    details: {
      goal: "Mental toughness and endurance",
      rules: "Ascending 1 to 10 reps, then descending 9 to 1 rep for all exercises.",
      structure: "Steps 1-5: 15s rest | Steps 6-10: 45s rest | Descending: 30s rest",
      exercises: [
        { name: "Pushups", reps: "Pyramid" },
        { name: "Rows", reps: "Pyramid" },
        { name: "Lunges", reps: "Pyramid (per leg)" },
        { name: "Crunches", reps: "Pyramid" },
      ]
    }
  },
  {
    day: 6,
    title: "Volume Exhaustion",
    focus: "Balance",
    icon: Activity,
    color: "from-cyan-400 to-blue-500",
    reps: 316,
    details: {
      goal: "Fix strength imbalances",
      structure: "Straight sets • 60s rest • Rest 10s when switching sides",
      exercises: [
        { name: "Archer Pushups", sets: 4, reps: "25 total" },
        { name: "Single-Arm Rows", sets: 4, reps: "12/arm" },
        { name: "Bulgarian Split Squats", sets: 4, reps: "15/leg" },
        { name: "Hardstyle Plank", sets: 4, reps: "60 sec" },
      ]
    }
  },
  {
    day: 7,
    title: "Complete Rest",
    focus: "Recovery",
    icon: Waves,
    color: "from-blue-400 to-indigo-500",
    reps: 0,
    details: {
      goal: "Full recovery and adaptation",
      structure: "No training • Prioritize sleep • Eat well",
      exercises: []
    }
  }
];

function DayDetailsBlock({ activeDayObj, daysOfWeek }: { activeDayObj: DayConfig, daysOfWeek: string[] }) {
  return (
    <motion.div 
      key={activeDayObj.day}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900/80 border border-white/10 rounded-3xl p-6 md:p-10 sticky top-6 backdrop-blur-md"
    >
      <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${activeDayObj.color} text-white text-[10px] uppercase font-black tracking-widest mb-6`}>
        Day {activeDayObj.day} ({daysOfWeek[activeDayObj.day - 1]}) • {activeDayObj.focus}
      </div>
      
      <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase mb-2">{activeDayObj.title}</h3>
      <p className="text-cyan-400 font-medium mb-8 flex items-center gap-2">
        <Target className="w-4 h-4" /> Goal: {activeDayObj.details.goal}
      </p>

      <div className="space-y-8">
        {activeDayObj.details.rules && (
          <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-200">
            <div className="text-[10px] uppercase tracking-widest font-bold mb-1 flex items-center gap-1.5 text-red-400">
              <Flame className="w-3 h-3" /> Protocol
            </div>
            <p className="text-sm">{activeDayObj.details.rules}</p>
          </div>
        )}

        {activeDayObj.details.structure && (
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
            <div className="text-[10px] uppercase tracking-widest font-bold mb-1 text-white/50">Structure & Pace</div>
            <p className="text-sm text-white/80">{activeDayObj.details.structure}</p>
          </div>
        )}

        {activeDayObj.details.exercises.length > 0 && (
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4 border-b border-white/10 pb-2">Workout Protocol</h4>
            <div className="space-y-2">
              <div className="grid grid-cols-12 gap-4 text-[10px] uppercase font-bold tracking-wider text-white/30 px-4 mb-2">
                <div className="col-span-6">Exercise</div>
                <div className="col-span-3 text-center">Sets</div>
                <div className="col-span-3 text-right">Reps</div>
              </div>
              {activeDayObj.details.exercises.map((ex, idx) => (
                <div key={idx} className="bg-black/30 border border-white/5 rounded-xl p-4 grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-6 font-medium text-white/90 text-sm">{ex.name}</div>
                  <div className="col-span-3 text-center text-white/60 font-mono text-sm">{ex.sets || '-'}</div>
                  <div className="col-span-3 text-right text-cyan-400 font-mono text-sm font-bold">{ex.reps}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ApexEngineView() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const activeDayObj = selectedDay !== null ? apexSchedule.find(d => d.day === selectedDay) : null;
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="flex flex-col gap-8 pb-16">
      
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 md:p-12 mb-4">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent opacity-50"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00e5ff] rounded-full blur-[150px] opacity-10"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              THE APEX ENGINE
            </h2>
            <p className="text-xl text-white/50 font-medium">7-Day Bodyweight Strength Program</p>
            <p className="text-white/70 leading-relaxed text-sm md:text-base mt-4 max-w-xl">
              A comprehensive system integrating strength, hypertrophy, endurance, and recovery. 
              Designed to build work capacity, neuromuscular control, and elite physical conditioning.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <BarChart className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider">1,861 Reps / Week</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider">420s Static Holds</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col items-center justify-center p-6 bg-black/40 rounded-2xl border border-white/10 shrink-0 min-w-[200px]">
            <Trophy className="w-12 h-12 text-[#00e5ff] mb-3" />
            <div className="text-3xl font-black tracking-tight text-white">7</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mt-1">Days of Mastery</div>
          </div>
        </div>
      </div>

      {/* Grid Layout for Days and Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Col: Day Selector */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 pl-2 mb-4">Training Structure</h3>
          
          {apexSchedule.map((day) => (
            <React.Fragment key={day.day}>
              <button
                onClick={() => setSelectedDay(selectedDay === day.day ? null : day.day)}
                className={`w-full text-left transition-all duration-300 relative overflow-hidden group
                  ${selectedDay === day.day ? 'bg-white/10 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.05)] scale-[1.02]' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:-translate-y-1'}
                  border rounded-2xl p-4 md:p-5 flex items-center justify-between
                `}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${day.color} bg-opacity-20 shadow-inner`}>
                    <day.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-white/40 mb-1">Day {day.day} ({daysOfWeek[day.day - 1]}) • {day.focus}</div>
                    <div className={`font-bold tracking-tight text-lg ${selectedDay === day.day ? 'text-white' : 'text-white/80'}`}>{day.title}</div>
                  </div>
                </div>
                <div className="text-right hidden sm:block relative z-10">
                  <div className="text-xs font-mono text-cyan-400">{day.reps > 0 ? `${day.reps} REPS` : 'REST'}</div>
                </div>

                {selectedDay === day.day && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${day.color} opacity-10 pointer-events-none`}></div>
                )}
              </button>
              
              {/* Mobile details block (visible only when clicked and on smaller screens) */}
              {selectedDay === day.day && (
                <div className="lg:hidden mt-2 mb-6">
                  <DayDetailsBlock activeDayObj={day} daysOfWeek={daysOfWeek} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Right Col: Details View (Desktop only) */}
        <div className="hidden lg:block lg:col-span-2">
          {activeDayObj ? (
            <DayDetailsBlock activeDayObj={activeDayObj} daysOfWeek={daysOfWeek} />
          ) : (
            <div className="h-full min-h-[400px] border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center p-8 text-center bg-white/5">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <ArrowUpRight className="w-8 h-8 text-white/20" />
              </div>
              <h3 className="text-xl font-bold mb-2">Select a Training Day</h3>
              <p className="text-white/40 text-sm max-w-sm">
                Explore the daily structures of the Apex Engine to view specific protocols, rep counts, and pacing strategies.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Weekly Stats summary */}
      <div className="mt-8 border border-white/10 rounded-3xl bg-black/40 p-6 md:p-10">
        <h3 className="text-lg font-bold tracking-tight uppercase mb-8 flex items-center gap-3">
          <Activity className="text-cyan-400 w-5 h-5" /> Weekly Output Metrics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div>
            <div className="text-[10px] uppercase text-white/40 font-bold tracking-widest mb-2">Push Variations</div>
            <div className="text-3xl font-black text-white">400<span className="text-base font-medium text-white/30 ml-1">reps</span></div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-white/40 font-bold tracking-widest mb-2">Pull Variations</div>
            <div className="text-3xl font-black text-white">396<span className="text-base font-medium text-white/30 ml-1">reps</span></div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-white/40 font-bold tracking-widest mb-2">Lower Body</div>
            <div className="text-3xl font-black text-white">665<span className="text-base font-medium text-white/30 ml-1">reps</span></div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-white/40 font-bold tracking-widest mb-2">Core & Integrity</div>
            <div className="text-3xl font-black text-white">150<span className="text-base font-medium text-white/30 ml-1">reps</span></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
