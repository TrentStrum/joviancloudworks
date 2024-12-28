"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cardVariants } from "./transitions/variants";
import { useIntersection } from "./transitions/use-intersection";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  category: "Live" | "Upcoming";
  link?: string;
  price?: string;
  launchDate?: string;
  progress?: number;
  waitlistCount?: number;
  onNotify?: () => void;
}

export function FeatureCardEnhanced({
  title,
  description,
  image,
  category,
  link,
  price,
  launchDate,
  progress,
  waitlistCount,
  onNotify
}: FeatureCardProps) {
  const { ref, isVisible } = useIntersection();

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover="hover"
      exit="exit"
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div 
          className="aspect-video relative overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <motion.img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform-gpu"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <Badge 
            className="absolute top-4 left-4 z-10"
            variant={category === "Live" ? "default" : "secondary"}
          >
            {category}
          </Badge>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

          {category === "Live" && price && (
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">{price}</span>
              {link && (
                <Button asChild>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    Try Now <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          )}

          {category === "Upcoming" && (
            <div className="space-y-4">
              {launchDate && (
                <p className="text-sm text-muted-foreground">
                  Expected Launch: {new Date(launchDate).toLocaleDateString()}
                </p>
              )}
              {waitlistCount !== undefined && (
                <p className="text-sm text-muted-foreground">
                  {waitlistCount} users waitlisted
                </p>
              )}
              {progress !== undefined && (
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              )}
              {onNotify && (
                <Button 
                  onClick={onNotify}
                  className="w-full"
                  variant="outline"
                >
                  Notify Me
                </Button>
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}