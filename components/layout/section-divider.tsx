"use client";

import { motion } from 'framer-motion';

export function SectionDivider() {
  return (
    <motion.div 
      className="relative h-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0">
        {/* Gradient overlay - reduced opacity from /5 to /3 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
        
        {/* Subtle line */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent transform -translate-y-1/2" />

        {/* Decorative dots - reduced opacity */}
        <div 
          className="absolute inset-0 opacity-[0.01] dark:opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at center, var(--primary) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>
    </motion.div>
  );
}