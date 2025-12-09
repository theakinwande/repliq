"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <div className="absolute inset-0 bg-[#050508]/70 backdrop-blur-xl border-b border-white/5 shadow-lg" />
      <div className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div 
            className="h-14 sm:h-16 w-14 sm:w-16 relative flex items-center justify-center"
            animate={{ 
              filter: [
                "drop-shadow(0 0 6px rgba(139, 92, 246, 0.3))",
                "drop-shadow(0 0 12px rgba(139, 92, 246, 0.5))",
                "drop-shadow(0 0 6px rgba(139, 92, 246, 0.3))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-br from-purple-400 via-cyan-400 to-emerald-400"
              style={{
                maskImage: "url(/replicq.svg)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: "url(/replicq.svg)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="badge backdrop-blur-md bg-white/5 border-white/10 text-[9px] sm:text-[10px] py-1 px-2.5 sm:py-1 sm:px-2.5"
          animate={{ 
            borderColor: [
              "rgba(255, 255, 255, 0.1)",
              "rgba(139, 92, 246, 0.4)",
              "rgba(255, 255, 255, 0.1)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.span 
            className="w-1.5 h-1.5 rounded-full bg-emerald-400 box-shadow-glow"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Rocket className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          <span className="tracking-wide">Coming Soon</span>
        </motion.div>
      </div>
    </motion.nav>
  );
}
