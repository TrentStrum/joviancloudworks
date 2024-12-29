"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/about/timeline";
import { Skills } from "@/components/about/skills";
import { timelineData } from "@/lib/data/timeline-data";

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <section>
            <h1 className="text-4xl font-bold mb-6 gradient-text">About Me</h1>
            <Card className="p-6">
              <p className="text-lg text-muted-foreground">
                Senior Cloud Solutions Architect with over a decade of experience in designing
                and implementing scalable cloud infrastructure. Passionate about leveraging
                cutting-edge technologies to solve complex business challenges.
              </p>
            </Card>
          </section>

          <Skills />
          <Timeline data={timelineData} />

          <section>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Master of Computer Science</h3>
                  <p className="text-muted-foreground">Stanford University, 2015</p>
                </div>
                <div>
                  <h3 className="font-semibold">Bachelor of Engineering</h3>
                  <p className="text-muted-foreground">MIT, 2012</p>
                </div>
              </div>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>AWS Solutions Architect Professional</Badge>
              <Badge>Google Cloud Professional Architect</Badge>
              <Badge>Azure Solutions Architect Expert</Badge>
              <Badge>Kubernetes Administrator (CKA)</Badge>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}