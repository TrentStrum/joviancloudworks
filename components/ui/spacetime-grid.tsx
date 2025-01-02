"use client";

import { motion } from "framer-motion";

interface SpacetimeGridProps {
  children: React.ReactNode;
  className?: string;
}

export function SpacetimeGrid({ children, className = "" }: SpacetimeGridProps) {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          '--grid-color': 'rgba(var(--primary), 0.2)',
        } as React.CSSProperties}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}