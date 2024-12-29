"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UpcomingProjectCard } from '@/components/portfolio/upcoming-project-card';
import { ExistingProjectCard } from '@/components/portfolio/existing-project-card';

const upcomingProjects = [
  {
    title: "AI Optimization Suite",
    description: "Smart resource allocation and cost optimization powered by AI",
    images: [
      { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31", alt: "AI Suite 1" },
      { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", alt: "AI Suite 2" }
    ],
    launchDate: "2024-06-01",
    progress: 75,
    waitlistCount: 245,
    discount: 30
  },
  {
    title: "Multi-Cloud Manager",
    description: "Unified dashboard for seamless multi-cloud infrastructure management",
    images: [
      { url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa", alt: "Cloud Manager 1" },
      { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31", alt: "Cloud Manager 2" }
    ],
    launchDate: "2024-07-15",
    progress: 60,
    waitlistCount: 189,
    discount: 25
  }
];

const existingProjects = [
  {
    title: "CloudScale Analytics",
    description: "Enterprise-grade analytics platform with real-time insights",
    images: [
      { url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa", alt: "Analytics 1" },
      { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31", alt: "Analytics 2" }
    ],
    features: [
      "Real-time data processing",
      "Custom dashboards",
      "Advanced reporting",
      "API integration"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    pricing: [
      {
        name: "Starter",
        price: "$99/month",
        features: ["Up to 100k events/day", "5 team members", "Basic support"]
      },
      {
        name: "Professional",
        price: "$299/month",
        features: ["Up to 1M events/day", "15 team members", "Priority support"]
      }
    ],
    demoUrl: "/demo/analytics"
  }
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("existing");

  const handleNotify = (email: string) => {
    console.log("Notification requested:", email);
    // In a real app, this would send to your backend
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 gradient-text text-center"
        >
          Our Portfolio
        </motion.h1>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="existing">Live Projects</TabsTrigger>
            <TabsTrigger value="upcoming">Coming Soon</TabsTrigger>
          </TabsList>

          <TabsContent value="existing">
            <div className="grid gap-8 md:grid-cols-2">
              {existingProjects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <ExistingProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="grid gap-8 md:grid-cols-2">
              {upcomingProjects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <UpcomingProjectCard {...project} onNotify={handleNotify} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}