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
      className="section fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div 
            className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center"
            animate={{ 
              filter: [
                "drop-shadow(0 0 8px rgba(6, 67, 215, 0.3))",
                "drop-shadow(0 0 16px rgba(6, 67, 215, 0.6))",
                "drop-shadow(0 0 8px rgba(6, 67, 215, 0.3))"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Image 
              src="/replicq.svg" 
              alt="Repliq logo" 
              width={120} 
              height={120}
              className="w-auto h-20 sm:h-24 brightness-0 invert"
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="badge text-[9px] sm:text-[10px] py-1 px-2.5 sm:py-1.5 sm:px-3"
          animate={{ 
            borderColor: [
              "rgba(139, 92, 246, 0.3)",
              "rgba(6, 182, 212, 0.5)",
              "rgba(139, 92, 246, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.span 
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-400"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <Rocket className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          Coming Soon
        </motion.div>
      </div>
    </motion.nav>
  );
}
