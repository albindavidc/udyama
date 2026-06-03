import React from 'react';
import { useProgress } from '../context/ProgressContext';

const TIERS = [
  {
    name: 'Beginner',
    layers: 'Layers 1 & 2: Foundation & Fundamentals',
    description: 'Focuses on joint conditioning, basic movement mechanics, and building necessary connective tissue strength to handle bodyweight loads safely.',
    image: 'https://raw.githubusercontent.com/albindavidc/arogya-resources/main/public/men/warm-up/m-core1.png',
    accent: 'bg-cyan-400',
    accentGlow: 'shadow-[0_0_15px_rgba(34,211,238,0.4)]',
    categories: [
      { name: 'Push', items: ['Wall Push-Ups', 'Incline Push-Ups', 'Standard Push-Ups', 'Diamond Push-Ups'] },
      { name: 'Pull', items: ['Dead Hangs', 'Australian Rows', 'Band-Assisted Pull-Ups'] },
      { name: 'Legs', items: ['Assisted Squats', 'Glute Bridges', 'Bodyweight Squats', 'Reverse Lunges', 'Step-Ups'] },
      { name: 'Core', items: ['Bird Dogs', 'Planks', 'Hollow Hold', 'Side Planks', 'Leg Raises (Floor)'] },
      { name: 'Mobility & Skills', items: ['Proper Breathing & Bracing', 'Scapular Control', 'Basic Body Alignment', 'Mobility Routine'] },
    ]
  },
  {
    name: 'Competent',
    layers: 'Layers 3 & 4: Strength & Intermediate',
    description: 'Shifts toward leveraging full body weight against gravity, unilateral training, and learning introductory static holds.',
    image: 'https://raw.githubusercontent.com/albindavidc/arogya-resources/main/public/men/inversion-poses/pincha-mayurasana/m-pincha-steps.png',
    accent: 'bg-purple-400',
    accentGlow: 'shadow-[0_0_15px_rgba(192,132,252,0.4)]',
    categories: [
      { name: 'Push', items: ['Decline Push-Ups', 'Archer Push-Ups', 'Dips', 'Handstand', 'Wall HSPU'] },
      { name: 'Pull', items: ['Chin-Ups', 'Standard Pull-Ups', 'Archer Rows', 'Front Lever Progressions'] },
      { name: 'Legs', items: ['Bulgarian Split Squats', 'Shrimp Squats', 'Pistol Squats'] },
      { name: 'Core', items: ['Hanging Knee Raises', 'Hanging Leg Raises', 'L-Sit', 'V-Sit Progressions', 'Dragon Flag Progressions'] }
    ]
  },
  {
    name: 'Master',
    layers: 'Layers 5, 6 & 7: Mastery',
    description: 'Represents peak neuromuscular control, extreme relative strength, and the seamless combination of balance and power.',
    image: 'https://raw.githubusercontent.com/albindavidc/arogya-resources/main/public/men/inversion-poses/halasana/m-halasana-steps.png',
    accent: 'bg-blue-400',
    accentGlow: 'shadow-[0_0_15px_rgba(96,165,250,0.4)]',
    categories: [
      { name: 'Push', items: ['Freestanding HSPU', '90° Push-Ups', 'Static Planche', 'Planche Push-Ups', 'Press Handstands'] },
      { name: 'Pull', items: ['Full Front Lever', 'Front Lever Pulls', 'One-Arm Pull-Up Progressions', 'Full OAP'] },
      { name: 'Legs', items: ['Jump Pistol Squats'] },
      { name: 'Core', items: ['Full V-Sit', 'Full Dragon Flags'] },
      { name: 'Full Body', items: ['Human Flag', 'Iron Cross', 'Planche to Handstand', 'Dynamic Bar Flow', 'Ring Mastery'] }
    ]
  }
];

function TierSection({ tier, reverse }: { tier: typeof TIERS[0], reverse: boolean }) {
  return (
    <div className={`flex flex-col lg:flex-row gap-6 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Tier Hero Container */}
      <div className="lg:w-1/3 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden flex flex-col justify-end p-8 min-h-[400px] group transition-all hover:bg-white/[0.07] cursor-pointer">
        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700 mix-blend-screen pointer-events-none">
          <img 
            src={tier.image} 
            alt={tier.name}
            className="w-full h-full object-cover object-center grayscale opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050506]/90 via-[#050506]/30 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10">
          <span className={`inline-block w-8 h-1 mb-4 rounded-full ${tier.accent} ${tier.accentGlow}`}></span>
          <h2 className="text-4xl font-light tracking-tighter italic uppercase text-white mb-2">{tier.name}</h2>
          <p className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 mb-4">{tier.layers}</p>
          <p className="text-sm font-medium text-white/50 leading-relaxed max-w-[90%] mb-0 lg:mb-6 opacity-0 lg:opacity-100 hidden lg:block">{tier.description}</p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {tier.categories.map((cat, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors flex flex-col h-full cursor-pointer group hover:border-white/20">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4 group-hover:text-white/80 transition-colors">
              {cat.name}
            </h3>
            <ul className="space-y-2.5 flex-1 relative z-10">
              {cat.items.map((item, i) => (
                <li key={i} className="text-xs text-white/70 flex items-start gap-2 group-hover:text-white/90">
                  <span className="text-white/20 mt-[1px] select-none leading-none">›</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomeView() {
  const { currentLayer } = useProgress();

  return (
    <div className="flex flex-col gap-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-900/40 to-[#050506] border border-cyan-500/20 md:h-[400px] flex items-center p-8 md:p-12">
        <div className="absolute top-0 right-0 bottom-0 w-full sm:w-2/3 lg:w-1/2 opacity-20 md:opacity-40 pointer-events-none">
          <img 
            src="https://raw.githubusercontent.com/albindavidc/arogya-resources/main/public/men/inversion-poses/sirsasana/1.png" 
            alt="Sirsasana / Headstand" 
            className="w-full h-full object-contain md:object-cover lg:object-contain object-right"
          />
        </div>
        
        <div className="relative z-10 max-w-xl">
          <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-[10px] font-bold uppercase tracking-wider border border-cyan-500/30 mb-6 backdrop-blur-sm">
            Featured Movement
          </span>
          <h2 className="text-6xl md:text-7xl font-light tracking-tighter text-white mb-4 italic uppercase leading-none">
            Sirsasana
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-md backdrop-blur-[2px]">
            Master the alignment of the headstand. Progress through your current layer to unlock advanced inversions and build absolute spatial awareness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-tighter transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              View Breakdown
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 py-3 px-6 rounded-xl text-sm font-medium transition-colors backdrop-blur-md">
              Continue Layer {currentLayer.toString().padStart(2, '0')}
            </button>
          </div>
        </div>
      </section>

      {/* Library/Categories Structured Tiers */}
      <section className="flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-white/10 pb-4 gap-2">
          <div>
            <h3 className="text-3xl font-light tracking-tighter italic uppercase text-white mb-1">Movement Library</h3>
            <p className="text-xs text-white/50 max-w-lg">Complete classification of fundamental to elite calisthenics protocols.</p>
          </div>
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest hidden sm:inline-block border border-white/10 px-3 py-1.5 rounded-full">
            Progression Synthesis
          </span>
        </div>

        {TIERS.map((tier, idx) => (
          <TierSection key={tier.name} tier={tier} reverse={idx % 2 !== 0} />
        ))}
      </section>

    </div>
  );
}
