"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string[];
  demoUrl: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  image,
  tags,
  metrics,
  demoUrl,
  className
}: FeatureCardProps) {
  return (
    <Card className={cn("overflow-hidden group relative", className)}>
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <Button
          size="icon"
          className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={() => window.open(demoUrl, '_blank')}
          aria-label="Open demo"
        >
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="space-y-2">
          {metrics.map((metric) => (
            <div key={metric} className="text-sm text-muted-foreground">
              • {metric}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}