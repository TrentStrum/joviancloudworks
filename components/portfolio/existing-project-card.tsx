"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ImageCarousel } from '@/components/features/image-carousel';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

interface ExistingProjectProps {
  title: string;
  description: string;
  images: { url: string; alt: string; }[];
  features: string[];
  technologies: string[];
  pricing: PricingTier[];
  demoUrl: string;
}

export function ExistingProjectCard({
  title,
  description,
  images,
  features,
  technologies,
  pricing,
  demoUrl
}: ExistingProjectProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video">
        <ImageCarousel images={images} />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="space-y-2 mb-6">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-4">
          {pricing.map((tier) => (
            <div key={tier.name} className="p-4 rounded-lg border">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{tier.name}</h4>
                <span className="text-lg font-bold">{tier.price}</span>
              </div>
              <ul className="space-y-2 mb-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                    <Check className="h-3 w-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  Subscribe Now
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}