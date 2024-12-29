"use client"

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogFeatureCardProps {
  title: string;
  description: string;
  image?: string;
  category?: string;
  link?: string;
  className?: string;
}

export function BlogFeatureCard({
  title,
  description,
  image,
  category,
  link,
  className
}: BlogFeatureCardProps) {
  return (
    <Card className={`p-4 sm:p-8 relative overflow-hidden ${className}`}>
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-medium tracking-tight">
          {title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground">
          {description}
        </p>
        
        {image && (
          <div className="relative flex py-8 px-2 gap-10 h-full">
            <div className="w-full p-5 mx-auto bg-background shadow-2xl group h-full">
              <div className="flex flex-1 w-full h-full flex-col space-y-2">
                <Link href={link || "/blog"}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={image}
                      alt={title}
                      width={800}
                      height={800}
                      className="h-full w-full aspect-square object-cover object-center rounded-sm"
                    />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {category && (
          <Badge variant="secondary" className="mt-4">
            {category}
          </Badge>
        )}
      </div>
    </Card>
  );
}