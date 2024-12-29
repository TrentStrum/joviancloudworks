"use client";

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UpcomingProjectCard } from '@/components/portfolio/upcoming-project-card';
import { ExistingProjectCard } from '@/components/portfolio/existing-project-card';
import { DotPattern } from '@/components/ui/dot-pattern';
import { projectsData } from '@/lib/data/projects';

export function ProjectsSection() {
  const handleNotify = (email: string) => {
    console.log("Notification requested:", email);
    // In a real app, this would send to your backend
  };

  return (
    <DotPattern className="py-20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Our Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our cutting-edge cloud solutions and upcoming innovations
          </p>
        </motion.div>

        <Tabs defaultValue="existing" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="existing">Live Solutions</TabsTrigger>
            <TabsTrigger value="upcoming">Coming Soon</TabsTrigger>
          </TabsList>

          <TabsContent value="existing">
            <div className="grid gap-8 md:grid-cols-2">
              {projectsData.existingProjects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <ExistingProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="grid gap-8 md:grid-cols-2">
              {projectsData.upcomingProjects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <UpcomingProjectCard {...project} onNotify={handleNotify} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DotPattern>
  );
}