"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}

export function ContainerScroll({ titleComponent, children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={containerRef}
      className="relative h-[200vh] py-40"
      style={{ perspective: "1000px" }}
    >
      <div className="sticky top-0 min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            style={{ opacity, scale }}
            className="grid gap-16 md:grid-cols-2 items-center"
          >
            <div className="space-y-8">{titleComponent}</div>
            <div className="relative z-10">{children}</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}