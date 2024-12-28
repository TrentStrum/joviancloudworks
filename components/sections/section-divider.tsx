"use client";

import { motion } from 'framer-motion';

export function SectionDivider() {
  return (
    <motion.div 
      className="relative h-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_100%,var(--tw-gradient-stops))] from-space-blue via-space-purple to-transparent opacity-20" />
      </div>
    </motion.div>
  );
}