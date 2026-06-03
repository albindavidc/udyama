import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, ArrowUp, Activity, Target, Compass, Zap, X, List, Grid } from 'lucide-react';

const tiersData = [
  {
    id: "beginner",
    label: "BEGINNER",
    sublabel: "LAYERS 1 & 2: FOUNDATION & FUNDAMENTALS",
    description: "Focuses on joint conditioning, basic movement mechanics, and building necessary connective tissue strength to handle bodyweight loads safely.",
    accentColor: "#00e5ff",
    image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop", // Fallback working image
    categories: [
      { name: "PUSH", icon: Dumbbell, moves: ["Wall Push-Ups", "Incline Push-Ups", "Push-Ups (Chaturanga Dandasana)", "Diamond Push-Ups", "Pike Push-Ups"] },
      { name: "PULL", icon: ArrowUp, moves: ["Dead Hangs", "Australian Rows", "Band-Assisted Pull-Ups"] },
      { name: "LEGS", icon: Activity, moves: ["Assisted Squats", "Glute Bridges (Setu Bandha Sarvangasana)", "Bodyweight Squats (Utkatasana / Malasana)", "Reverse Lunges (Anjaneyasana)", "Step-Ups"] },
      { name: "CORE", icon: Target, moves: ["Bird Dogs (Dandayamana Bharmanasana)", "Planks (Phalakasana / Kumbhakasana)", "Hollow Hold (Ardha Navasana)", "Leg Raises (Uttanpadasana)", "Side Planks (Vasisthasana)"] },
      { name: "MOBILITY & SKILLS", icon: Compass, moves: ["Shoulder Mobility", "Hip Mobility", "Ankle Mobility", "Thoracic Spine Mobility", "Proper Breathing (Pranayama)", "Core Bracing (Uddiyana Bandha)", "Scapular Control", "Basic Body Alignment"] },
    ]
  },
  {
    id: "competent",
    label: "COMPETENT",
    sublabel: "LAYERS 3 & 4: STRENGTH & INTERMEDIATE",
    description: "Shifts toward leveraging full body weight against gravity, unilateral training, and learning introductory static holds.",
    accentColor: "#00e5ff",
    image: "https://raw.githubusercontent.com/albindavidc/arogya-resources/main/public/men/inversion-poses/sirsasana/1.png",
    categories: [
      { name: "PUSH", icon: Dumbbell, moves: ["Dips", "Archer Push-Ups", "Headstand (Sirsasana)", "Handstand (Adho Mukha Vrksasana)", "Handstand Push-Up Negatives", "Pseudo Planche Push-Ups"] },
      { name: "PULL", icon: ArrowUp, moves: ["Active Hangs", "Chin-Ups", "Pull-Ups", "Muscle-Up Transitions", "Front Lever Tucks", "Back Lever Tucks"] },
      { name: "LEGS", icon: Activity, moves: ["Shrimp Squats", "Pistol Squat Progressions", "Weighted Pistol Squats", "Nordic Curls"] },
      { name: "CORE", icon: Target, moves: ["L-Sit Progressions (Brahmacharyasana / Tolasana)", "Advanced L-Sits", "Dragon Flag Negatives", "Dragon Flags"] },
    ]
  },
  {
    id: "master",
    label: "MASTER",
    sublabel: "LAYERS 5, 6 & 7: MASTERY",
    description: "Represents peak neuromuscular control, extreme relative strength, and the seamless combination of balance and power.",
    accentColor: "#00e5ff",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800&auto=format&fit=crop",
    categories: [
      { name: "PUSH", icon: Dumbbell, moves: ["Straddle Planche (Mayurasana)", "Full Planche (Bakasana)", "Planche Push-Ups", "Freestanding HSPU", "90 Degree Push-Ups", "Maltese"] },
      { name: "PULL", icon: ArrowUp, moves: ["Front Lever", "One Arm Front Lever", "Bar Muscle-Ups", "One Arm Pull-Up Negatives", "One Arm Pull-Up", "Iron Cross", "Victorian Cross"] },
      { name: "LEGS", icon: Activity, moves: ["Advanced Nordic Curls", "Explosive Bounds", "Plyo Lunges", "One Arm Pistol Squat", "Elite Power Endurance"] },
      { name: "CORE", icon: Target, moves: ["V-Sits (Paripurna Navasana)", "Human Flag Progressions", "Full Human Flag", "Manna", "Manna Mastery"] },
    ]
  }
];

interface MoveInfo {
  name: string;
  tier: string;
  category: string;
}

function MovementDrawer({ selectedMove, onClose }: { selectedMove: MoveInfo | null, onClose: () => void }) {
  return (
    <AnimatePresence>
      {selectedMove && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          
          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[480px] bg-[#0a0a0f] border-l border-[#1a1a2e] z-[101] flex flex-col shadow-2xl"
          >
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-black/50 border border-white/10 backdrop-blur flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {/* Image Header */}
              <div className="relative w-full h-[40vh] bg-black">
                <img 
                  src={`https://source.unsplash.com/600x400/?calisthenics,${encodeURIComponent(selectedMove.name.replace(/\s+/g, ''))}`}
                  onError={(e) => { 
                    e.currentTarget.src = "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop"; 
                  }}
                  alt={selectedMove.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/40 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="px-8 pb-8 -mt-16 relative z-10">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {selectedMove.tier}
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {selectedMove.category}
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-light italic tracking-tighter text-white mb-6 uppercase">
                  {selectedMove.name}
                </h2>
                
                <p className="text-white/60 leading-relaxed mb-10 text-sm">
                  Progressive bodyweight movement. Click to learn proper form. This exercise is critical for building the foundational tension required for advanced static holds and dynamic sequences. Focus on pure mechanical efficiency.
                </p>
                
                <button className="w-full py-4 bg-[#00e5ff] hover:bg-[#00e5ff]/80 text-black font-bold uppercase tracking-tighter text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                  View Breakdown &rarr;
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function MovementLibrary() {
  const [viewMode, setViewMode] = useState<'grid' | 'linear'>('grid');
  const [selectedMove, setSelectedMove] = useState<MoveInfo | null>(null);

  const scrollToTier = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky header
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col relative w-full pb-16">
      
      {/* Header & Sticky Tabs */}
      <div className="sticky top-0 z-40 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#1a1a2e] pt-6 pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl font-bold italic uppercase tracking-tighter text-white mb-1">Movement Library</h1>
            <p className="text-xs text-white/50 tracking-widest uppercase">Structured Calisthenics Progression</p>
          </div>
          
          <div className="flex items-center gap-6 w-full md:w-auto overflow-x-auto no-scrollbar justify-between md:justify-end">
            <div className="flex gap-4">
              {tiersData.map(t => (
                <button 
                  key={t.id}
                  onClick={() => scrollToTier(t.id)} 
                  className="text-[10px] font-bold tracking-[0.2em] text-white/40 hover:text-[#00e5ff] uppercase whitespace-nowrap transition-colors"
                >
                  {t.label}
                </button>
              ))}
            </div>
            
            <div className="w-px h-6 bg-[#1a1a2e] hidden md:block"></div>
            
            <button 
              onClick={() => setViewMode(prev => prev === 'grid' ? 'linear' : 'grid')}
              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold tracking-wider text-white/70 hover:text-[#00e5ff] hover:border-[#00e5ff]/50 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              {viewMode === 'grid' ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
              <span className="hidden sm:inline">PROGRESSION SYNTHESIS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Naming Convention Guide */}
      <div className="mb-10 p-5 bg-gradient-to-r from-purple-900/10 to-transparent border border-purple-500/20 rounded-2xl flex flex-col sm:flex-row gap-4 items-start sm:items-center text-purple-200">
        <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl shrink-0">
          <Compass className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-widest uppercase mb-1 flex items-center gap-2">
            Integrated Naming Convention
          </h4>
          <p className="text-xs sm:text-sm text-purple-300/70 leading-relaxed">
            Movements highlighted in <span className="text-purple-400 font-medium">purple</span> pair the foundational Calisthenics term with its traditional <strong className="text-purple-300 font-medium">Yoga Asana</strong> counterpart (e.g., <em className="text-white/60 not-italic border border-white/10 bg-white/5 px-1.5 py-0.5 rounded text-[10px] uppercase ml-1">Push-Ups / Chaturanga Dandasana</em>). This synthesizes modern strength leverage with ancient yogic alignment.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-16">
        {tiersData.map((tier, idx) => (
          <motion.section 
            key={tier.id}
            id={tier.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
                
                {/* Left Featured Card */}
                <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-[#1a1a2e] border border-white/5 min-h-[400px] flex flex-col justify-start p-8 group">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-700" />
                  <img 
                    src={tier.image} 
                    alt={tier.label}
                    className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent z-10" />
                  
                  <div className="relative z-20">
                    <span className="inline-block w-8 h-1 mb-5 rounded-full shadow-[0_0_15px_rgba(0,229,255,0.4)]" style={{ backgroundColor: tier.accentColor }} />
                    <h2 className="text-4xl lg:text-5xl font-light tracking-tighter italic uppercase text-white mb-2 leading-none">
                      {tier.label}
                    </h2>
                    <h3 className="text-[10px] font-bold font-mono text-[#00e5ff] tracking-[0.2em] uppercase mb-4">
                      {tier.sublabel}
                    </h3>
                    <p className="text-sm font-medium text-white/60 leading-relaxed max-w-[90%]">
                      {tier.description}
                    </p>
                  </div>
                </div>

                {/* Right Category Grid */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tier.categories.map(cat => {
                    const Icon = cat.icon;
                    return (
                      <div 
                        key={cat.name} 
                        className="bg-white/[0.03] backdrop-blur-md border border-[#1a1a2e] hover:border-[#00e5ff]/50 hover:bg-white/[0.05] rounded-3xl p-6 transition-all duration-300 transform lg:hover:scale-[1.02] flex flex-col h-full group/card"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <h4 className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-white/50 group-hover/card:text-[#00e5ff] transition-colors">
                            <Icon className="w-5 h-5" />
                            {cat.name}
                          </h4>
                          <span className="text-[9px] px-2 py-1 bg-white/5 rounded text-white/30 font-mono tracking-wider items-center justify-center">
                            {cat.moves.length} MOVES
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {cat.moves.map(move => {
                            const isYoga = move.toLowerCase().match(/(asana|bandha|pranayama)/) !== null;
                            return (
                              <button
                                key={move}
                                onClick={() => setSelectedMove({ name: move, tier: tier.label, category: cat.name })}
                                className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all text-left border ${
                                  isYoga
                                    ? 'bg-purple-900/30 border-purple-500/40 text-purple-300 hover:border-purple-400 hover:text-purple-200 hover:bg-purple-800/50 shadow-[0_0_10px_rgba(168,85,247,0.1)]'
                                    : 'bg-[#1a1a2e]/80 border-white/5 text-white/70 hover:border-[#00e5ff] hover:text-[#00e5ff] hover:bg-[#00e5ff]/10'
                                }`}
                              >
                                {move}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Linear View */}
            {viewMode === 'linear' && (
              <div className="bg-white/[0.02] border border-[#1a1a2e] rounded-3xl p-6 md:p-10">
                <div className="border-b border-[#1a1a2e] pb-6 mb-8 flex flex-col md:flex-row justify-between md:items-end gap-4">
                  <div>
                    <h2 className="text-3xl font-light tracking-tighter italic uppercase text-white mb-2">
                      {tier.label}
                    </h2>
                    <h3 className="text-[10px] font-bold font-mono text-[#00e5ff] tracking-[0.2em] uppercase">
                      {tier.sublabel}
                    </h3>
                  </div>
                  <p className="text-xs text-white/50 max-w-sm text-left md:text-right">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-8">
                  {tier.categories.map(cat => {
                    const Icon = cat.icon;
                    return (
                      <div key={cat.name} className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <div className="md:w-32 shrink-0">
                          <h4 className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white/50">
                            <Icon className="w-4 h-4 text-[#00e5ff]" />
                            {cat.name}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-3 flex-1">
                          {cat.moves.map(move => {
                            const isYoga = move.toLowerCase().match(/(asana|bandha|pranayama)/) !== null;
                            return (
                              <button
                                key={move}
                                onClick={() => setSelectedMove({ name: move, tier: tier.label, category: cat.name })}
                                className={`px-4 py-2 bg-transparent border-b text-sm transition-all text-left group ${
                                  isYoga
                                    ? 'border-purple-500/30 text-purple-300 hover:border-purple-400 hover:text-purple-200'
                                    : 'border-[#1a1a2e] text-white/80 hover:border-[#00e5ff] hover:text-[#00e5ff]'
                                }`}
                              >
                                <span className={`${isYoga ? 'text-purple-500/0 group-hover:text-purple-400' : 'text-[#00e5ff]/0 group-hover:text-[#00e5ff]'} mr-2 text-xs transition-colors`}>›</span>
                                {move}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
          </motion.section>
        ))}
      </div>

      <MovementDrawer 
        selectedMove={selectedMove} 
        onClose={() => setSelectedMove(null)} 
      />
    </div>
  );
}
