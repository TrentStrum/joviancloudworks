"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Cloud Architecture", level: 95 },
  { name: "DevOps", level: 90 },
  { name: "Kubernetes", level: 85 },
  { name: "Infrastructure as Code", level: 88 },
  { name: "Security & Compliance", level: 92 }
];

export function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
      <Card className="p-6">
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </div>
      </Card>
    </section>
  );
}