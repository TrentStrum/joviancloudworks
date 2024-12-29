"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FeatureCardEnhanced } from "./feature-card-enhanced";

const features = [
  {
    title: "Cloud Analytics",
    description: "Real-time data processing and visualization",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    category: "Live" as const,
    price: "$99/month",
    link: "/features/analytics"
  },
  {
    title: "AI Integration",
    description: "Smart automation powered by artificial intelligence",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    category: "Upcoming" as const,
    launchDate: "2024-06-01",
    progress: 75,
    waitlistCount: 245
  }
];

export function FeatureGrid() {
  const [notifiedFeatures, setNotifiedFeatures] = useState<string[]>([]);

  const handleNotify = (title: string) => {
    setNotifiedFeatures(prev => [...prev, title]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {features.map((feature) => (
          <FeatureCardEnhanced
            key={feature.title}
            {...feature}
            onNotify={
              feature.category === "Upcoming" && !notifiedFeatures.includes(feature.title)
                ? () => handleNotify(feature.title)
                : undefined
            }
          />
        ))}
      </AnimatePresence>
    </div>
  );
}