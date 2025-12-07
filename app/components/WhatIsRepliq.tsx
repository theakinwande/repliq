"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";

export default function WhatIsRepliq() {
  return (
    <section className="section py-24 px-6 relative overflow-hidden">
      {/* Animated line decoration */}
      <motion.div
        className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6"
        >
          <Layers className="w-8 h-8 text-purple-400" />
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What is <span className="gradient-text">Repliq</span>?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Repliq is a Web3 identity layer that lets you create a portable on-chain profile you truly own.
          </p>
          
          <motion.div 
            className="my-8 flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {["No platforms", "No algorithms", "No lock-in"].map((text, i) => (
              <motion.span
                key={text}
                className="px-4 py-2 rounded-full border border-purple-500/30 text-gray-300 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ 
                  borderColor: "rgba(139, 92, 246, 0.6)",
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
                }}
              >
                {text}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            Your identity becomes yours — <span className="gradient-text">everywhere</span>.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
