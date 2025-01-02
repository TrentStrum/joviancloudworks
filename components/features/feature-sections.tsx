"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Bell, ArrowRight, Users } from 'lucide-react';
import { ImageCarousel } from './image-carousel';

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    alt: "Technology Abstract 1"
  },
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    alt: "Technology Abstract 2"
  },
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    alt: "Technology Abstract 3"
  }
];

const liveFeatures = [
  {
    title: "Cloud Analytics1",
    description: "Real-time data processing and visualization",
    price: "$99/month",
    link: "/features/analytics"
  },
  {
    title: "Secure Storage",
    description: "Enterprise-grade encrypted storage solution",
    price: "$149/month",
    link: "/features/storage"
  }
];

const upcomingFeatures = [
  {
    title: "AI Optimization",
    description: "Smart resource allocation and cost optimization",
    discount: 30,
    waitlist: 245,
    progress: 75,
    launchDate: "2024-06-01"
  },
  {
    title: "Multi-Cloud Manager",
    description: "Unified dashboard for all cloud providers",
    discount: 25,
    waitlist: 189,
    progress: 60,
    launchDate: "2024-07-15"
  }
];

export function FeatureSections() {
  const [email, setEmail] = useState('');
  const [notifiedFeatures, setNotifiedFeatures] = useState<string[]>([]);

  const handleNotifyMe = (featureTitle: string) => {
    setNotifiedFeatures([...notifiedFeatures, featureTitle]);
    // In a real app, you would send this to your backend
    console.log(`Notification requested for ${featureTitle}: ${email}`);
  };

  return (
    <div className="space-y-20 py-10">
      <ImageCarousel images={carouselImages} />

      {/* Live Features */}
      <section>
        <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
          Live Features
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {liveFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{feature.price}</span>
                  <Button asChild>
                    <a href={feature.link}>
                      Try Now <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Features */}
      <section>
        <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
          Coming Soon
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {feature.discount}% OFF
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{feature.waitlist} users waitlisted</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Development Progress</span>
                      <span>{feature.progress}%</span>
                    </div>
                    <Progress value={feature.progress} />
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Expected Launch: {new Date(feature.launchDate).toLocaleDateString()}
                    </p>
                    {notifiedFeatures.includes(feature.title) ? (
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
                        />
                        <Button 
                          onClick={() => handleNotifyMe(feature.title)}
                          className="whitespace-nowrap"
                        >
                          <Bell className="mr-2 h-4 w-4" />
                          Notify Me
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}