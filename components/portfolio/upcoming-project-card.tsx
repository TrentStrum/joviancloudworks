"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Bell, Users } from 'lucide-react';
import { ImageCarousel } from '@/components/features/image-carousel';
import { ProjectModal } from './project-modal';

interface UpcomingProjectProps {
  title: string;
  description: string;
  images: { url: string; alt: string; }[];
  launchDate: string;
  progress: number;
  waitlistCount: number;
  discount: number;
  onNotify: (email: string) => void;
}

export function UpcomingProjectCard({
  title,
  description,
  images,
  launchDate,
  progress,
  waitlistCount,
  discount,
  onNotify
}: UpcomingProjectProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleNotify = () => {
    onNotify(email);
    setIsSubscribed(true);
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
        className="cursor-pointer"
      >
        <Card className="overflow-hidden relative">
          <div className={`transition-all duration-300 ${isHovered ? 'blur-[3px]' : ''}`}>
            <ImageCarousel images={images} />
            
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
                <Badge variant="secondary" className="text-sm">
                  {discount}% OFF
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{waitlistCount} users waitlisted</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Development Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>

              <p className="text-sm text-muted-foreground">
                Expected Launch: {new Date(launchDate).toLocaleDateString()}
              </p>

              {isSubscribed ? (
                <Button variant="outline" disabled className="w-full">
                  <Bell className="mr-2 h-4 w-4" />
                  You're on the list!
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <Button onClick={(e) => {
                    e.stopPropagation();
                    handleNotify();
                  }}>
                    <Bell className="mr-2 h-4 w-4" />
                    Notify Me
                  </Button>
                </div>
              )}
            </div>
          </div>

          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300">
              <span className="text-white text-xl font-semibold">
                Click to Learn More
              </span>
            </div>
          )}
        </Card>
      </motion.div>

      <ProjectModal
        open={showModal}
        onOpenChange={setShowModal}
        project={{
          title,
          description,
          launchDate,
          progress,
          waitlistCount,
          discount
        }}
      />
    </>
  );
}