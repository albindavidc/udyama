import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function SplashScreen({ isVisible, onComplete }: { isVisible: boolean, onComplete: () => void }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onComplete();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  const text = "udyama";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(20px)",
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-[#0a0a0f] z-[9999] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Deep celestial glow */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.15 }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="absolute w-96 h-96 rounded-full blur-[120px] bg-[#00e5ff] pointer-events-none"
          />

          <div className="relative z-10 flex py-8 px-4">
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 pr-2 md:pr-4"
              >
                {char}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            initial={{ width: 0, opacity: 0, filter: "blur(4px)" }}
            animate={{ width: "200px", opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent mt-6 mb-8 shadow-[0_0_15px_rgba(0,229,255,0.8)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 2.2, ease: "easeOut" }}
            className="text-[10px] md:text-xs font-mono tracking-[0.5em] text-[#00e5ff]/70 uppercase"
          >
            Ascension Through Discipline
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
