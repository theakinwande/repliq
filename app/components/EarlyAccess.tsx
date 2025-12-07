"use client";

import { motion } from "framer-motion";
import { Award, Zap, AtSign, Wand2, Check } from "lucide-react";

const benefits = [
  { icon: Award, text: "OG Repliq profile badge" },
  { icon: Zap, text: "First access to beta features" },
  { icon: AtSign, text: "Reserved usernames" },
  { icon: Wand2, text: "Exclusive creator tools" },
];

export default function EarlyAccess() {
  return (
    <section className="section py-24 px-6 relative">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="glass-card p-8 md:p-12 relative overflow-hidden"
          whileHover={{ boxShadow: "0 0 60px rgba(139, 92, 246, 0.15)" }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated border gradient */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Why Join <span className="gradient-text">Early</span>?
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 relative"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0.5 rounded-full bg-[#0a0a0f] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-purple-400" />
                      </div>
                    </motion.div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {benefit.text}
                    </span>
                    <motion.div
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    >
                      <Check className="w-4 h-4 text-green-400" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
