"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DotPatternProps {
  className?: string;
  children: React.ReactNode;
  color?: string;
}

export function DotPattern({ className, children, color = "hsl(var(--primary))" }: DotPatternProps) {
  return (
    <motion.div 
      className={cn("relative w-full overflow-hidden", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ "--dot-color": color } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-dot-pattern" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}