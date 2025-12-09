"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

interface WaitlistFormProps {
  variant?: "hero" | "cta";
}

export default function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        setEmail("");
      }, 1500);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="glass-card p-4 sm:p-6 max-w-md mx-auto relative overflow-hidden"
        >
          {/* Celebration particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? "#8b5cf6" : "#06b6d4",
                left: "50%",
                top: "50%",
              }}
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: Math.cos(i * 30 * Math.PI / 180) * 80,
                y: Math.sin(i * 30 * Math.PI / 180) * 80,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: "easeOut"
              }}
            />
          ))}
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="relative z-10"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl mb-3"
            >
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-green-400" />
            </motion.div>
            <p className="text-white font-medium text-base sm:text-lg">You&apos;re on the list!</p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">We&apos;ll notify you when we go live.</p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <motion.div 
            className="relative flex-1"
            animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Mail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="input-field with-icon w-full text-sm sm:text-base disabled:opacity-50"
              required
              disabled={isLoading}
            />
            <AnimatePresence>
              {isFocused && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.button
            type="submit"
            className="btn-primary flex items-center justify-center gap-2 group whitespace-nowrap text-sm sm:text-base py-3 sm:py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={!isLoading ? { scale: 1.05 } : {}}
            whileTap={!isLoading ? { scale: 0.95 } : {}}
            disabled={isLoading}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span className="hidden xs:inline">Join</span> Waitlist
                <motion.div
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </>
            )}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
