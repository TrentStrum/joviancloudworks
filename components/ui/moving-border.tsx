"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MovingBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: string;
  children: React.ReactNode;
  className?: string;
}

export function MovingBorder({
  borderRadius = "1.75rem",
  children,
  className,
  ...props
}: MovingBorderButtonProps) {
  return (
    <button
      className={cn(
        "relative p-[1px] overflow-hidden rounded-full",
        className
      )}
      style={{ borderRadius }}
      {...props}
    >
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2 bg-gradient-to-r from-primary via-white to-primary rounded-full opacity-80"
          style={{
            backgroundSize: "50% 50%",
          }}
        />
      </div>
      <div
        className={cn(
          "relative rounded-[calc(1.75rem-1px)] px-6 py-2",
          "bg-white dark:bg-black",
          "border border-transparent",
          "transition-colors duration-200"
        )}
        style={{ borderRadius: `calc(${borderRadius} - 1px)` }}
      >
        {children}
      </div>
    </button>
  );
}