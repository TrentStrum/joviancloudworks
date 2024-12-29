"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "./image-carousel";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  images: { url: string; alt: string }[];
  metrics?: { label: string; value: string }[];
  ctaLabel?: string;
  ctaUrl?: string;
}

export function FeatureCard({
  title,
  description,
  images,
  metrics,
  ctaLabel,
  ctaUrl
}: FeatureCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video">
        <ImageCarousel images={images} />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-lg bg-muted"
              >
                <div className="text-lg font-semibold">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        )}

        {ctaLabel && ctaUrl && (
          <div className="mt-auto pt-4">
            <Button asChild className="w-full">
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                {ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}