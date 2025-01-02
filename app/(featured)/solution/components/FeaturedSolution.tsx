'use client';

import { Rocket } from "lucide-react";

import { MovingBorder } from "@/components/ui/moving-border";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export default function FeaturedSolution () {
    const router = useRouter();
    return (

        
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
        >
            <MovingBorder
                onClick={() => router.push('/portfolio')}
                className="bg-white dark:bg-black text-black dark:text-white"
                >
                <span className="flex items-center">
                    <Rocket className="mr-2 h-4 w-4" />
                    Explore Solutions
                </span>
            </MovingBorder>

        </motion.div>
    )
}
