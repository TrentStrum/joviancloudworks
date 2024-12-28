"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { MovingBorder } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeroStars() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold mb-6 gradient-text"
        >
          Transform Your Cloud Journey
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Elevate your business with cutting-edge cloud solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <MovingBorder
            onClick={() => router.push("/portfolio")}
            className="bg-white dark:bg-black text-black dark:text-white"
          >
            <span className="flex items-center">
              <Rocket className="mr-2 h-4 w-4" />
              Explore Solutions
            </span>
          </MovingBorder>
          
          <MovingBorder
            onClick={() => router.push("/contact")}
            className="bg-transparent text-white border-white"
          >
            <span className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </MovingBorder>
        </motion.div>
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}