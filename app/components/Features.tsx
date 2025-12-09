"use client";

import { motion } from "framer-motion";
import { Link, ImageIcon, FileText, Globe } from "lucide-react";

const features = [
  {
    icon: Link,
    title: "Decentralized Profiles",
    description: "Your identity is minted on-chain — verifiable, portable, permanent.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: ImageIcon,
    title: "NFT Avatars",
    description: "Use any NFT you own as your authenticated avatar.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: FileText,
    title: "On-Chain Posts",
    description: "Publish content tied directly to your identity, not a platform.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "Portable Social Graph",
    description: "Your followers belong to you, not an app. Take them anywhere.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Features() {
  return (
    <section className="section py-16 sm:py-24 px-4 sm:px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Why You&apos;ll <span className="gradient-text">Want It</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base px-2">
            Everything you need to own your digital identity
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="glass-card p-6 sm:p-8 group cursor-pointer relative overflow-hidden flex flex-col items-start h-full"
              >
                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Icon container */}
                <motion.div 
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-4 sm:mb-6`}
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-full h-full rounded-2xl bg-[#0a0a0f] flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </motion.div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Bottom line animation */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${feature.gradient}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
