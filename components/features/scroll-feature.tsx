"use client";

import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Cloud Analytics",
    description: "Real-time data processing and visualization",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    category: "Live"
  },
  {
    title: "AI Integration",
    description: "Coming soon - Smart automation powered by AI",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    category: "Upcoming"
  }
];

export function ScrollFeature() {
  return (
    <ContainerScroll
      titleComponent={
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">
            Discover Our <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none gradient-text">
              Cloud Features
            </span>
          </h1>
          <p className="text-muted-foreground max-w-lg">
            Transform your business with our cutting-edge cloud solutions
          </p>
        </div>
      }
    >
      <div className="grid gap-6">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover w-full h-full"
                />
                <Badge 
                  className="absolute top-4 left-4"
                  variant={feature.category === "Live" ? "default" : "secondary"}
                >
                  {feature.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </ContainerScroll>
  );
}