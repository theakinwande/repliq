"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section className="section py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/30 text-purple-400 text-xs sm:text-sm mb-6 sm:mb-8"
        >
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.div>
          Limited spots available
        </motion.div>
        
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Be Among the First to
          <br />
          <motion.span 
            className="gradient-text"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Own Your Digital Identity.
          </motion.span>
        </motion.h2>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Sign up now and get notified when we go live.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <WaitlistForm variant="cta" />
        </motion.div>
      </motion.div>

      {/* Large glowing orb */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
