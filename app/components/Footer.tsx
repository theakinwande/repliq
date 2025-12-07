"use client";

import { motion } from "framer-motion";
import { Twitter, MessageCircle } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];

const socialLinks = [
  { icon: Twitter, label: "X (Twitter)", href: "#" },
  { icon: MessageCircle, label: "Discord", href: "#" },
];

export default function Footer() {
  return (
    <motion.footer 
      className="section py-12 px-6 border-t border-white/10 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              className="w-10 h-10 flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src="/replicq.svg" 
                alt="Repliq logo" 
                width={40} 
                height={40}
                className="w-auto h-8"
              />
            </motion.div>
          </motion.div>
          
          {/* Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link, index) => (
              <motion.a 
                key={link.label}
                href={link.href} 
                className="footer-link text-sm relative group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a 
                  key={social.label}
                  href={social.href} 
                  className="social-icon group"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + 0.1 * index, type: "spring" }}
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-8 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 text-sm">© 2025 Repliq. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
