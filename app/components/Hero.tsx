"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

// Pre-defined particle positions to avoid hydration mismatch
const particles = [
  { left: 5, top: 12, duration: 5.2, delay: 0.5 },
  { left: 15, top: 68, duration: 6.1, delay: 1.2 },
  { left: 25, top: 35, duration: 4.8, delay: 2.1 },
  { left: 35, top: 82, duration: 7.0, delay: 0.8 },
  { left: 45, top: 22, duration: 5.5, delay: 3.2 },
  { left: 55, top: 55, duration: 6.3, delay: 1.8 },
  { left: 65, top: 15, duration: 4.5, delay: 2.5 },
  { left: 75, top: 72, duration: 7.2, delay: 0.3 },
  { left: 85, top: 45, duration: 5.8, delay: 1.5 },
  { left: 92, top: 88, duration: 6.7, delay: 2.8 },
  { left: 8, top: 42, duration: 5.1, delay: 3.5 },
  { left: 22, top: 90, duration: 6.5, delay: 0.9 },
  { left: 38, top: 28, duration: 4.9, delay: 2.3 },
  { left: 52, top: 78, duration: 7.1, delay: 1.1 },
  { left: 68, top: 52, duration: 5.4, delay: 3.8 },
  { left: 78, top: 18, duration: 6.2, delay: 0.6 },
  { left: 88, top: 62, duration: 4.7, delay: 2.9 },
  { left: 12, top: 75, duration: 5.9, delay: 1.7 },
  { left: 42, top: 8, duration: 6.8, delay: 3.1 },
  { left: 95, top: 32, duration: 5.3, delay: 0.4 },
];

export default function Hero() {
  return (
    <section className="section min-h-screen flex items-center justify-center px-4 sm:px-6 pt-28 pb-10 overflow-hidden relative">
      {/* Floating particles - Smoother animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/20 rounded-full blur-[1px]"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: particle.duration * 1.5,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <motion.span 
            className="badge mb-4 sm:mb-6 inline-flex items-center gap-2 text-[10px] sm:text-xs py-2 px-4 border-purple-500/30 bg-purple-500/5 text-purple-200"
            whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.5)" }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            <span className="tracking-wide uppercase font-semibold">Join the Pre-Launch</span>
          </motion.span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-[1.1] tracking-tight"
        >
          <motion.span 
            className="gradient-text inline-block pb-2"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            Your Digital Identity,
          </motion.span>
          <br />
          <motion.span 
            className="text-white inline-block drop-shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Decentralized.
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 leading-relaxed"
        >
          A new way to own your profile, your avatar, your reputation — all on-chain.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-20"
        >
          <WaitlistForm variant="hero" />
          <motion.p 
            className="text-gray-500 text-xs sm:text-sm mt-6 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-purple-400/80">★</span> Be first to access the future of decentralized identity.
          </motion.p>
        </motion.div>

        {/* Glowing orb behind hero */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none -z-10 blur-[80px] sm:blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
