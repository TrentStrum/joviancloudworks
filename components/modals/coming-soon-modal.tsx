"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Calendar, Users } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ComingSoonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    description: string;
    features: string[];
    images: { url: string; alt: string }[];
    launchDate: string;
    progress: number;
    waitlistCount: number;
    discount: number;
  };
  onNotify?: (email: string) => void;
}

const sections = [
  {
    title: "Project Overview",
    content: (project: ComingSoonModalProps["project"]) => (
      <div className="space-y-4">
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>Expected Launch: {new Date(project.launchDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>{project.waitlistCount} users waitlisted</span>
        </div>
        <Badge className="mt-2">{project.discount}% Early Bird Discount</Badge>
      </div>
    )
  },
  {
    title: "Development Progress",
    content: (project: ComingSoonModalProps["project"]) => (
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Overall Progress</span>
            <span>{project.progress}%</span>
          </div>
          <Progress value={project.progress} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["Planning", "Development", "Testing", "Launch"].map((phase, index) => (
            <div
              key={phase}
              className={`p-4 rounded-xl ${
                (index + 1) * 25 <= project.progress
                  ? "bg-primary/10 dark:bg-primary/20"
                  : "bg-muted"
              }`}
            >
              <h4 className="font-medium">{phase}</h4>
              <div className="mt-2">
                <Progress
                  value={Math.min(100, Math.max(0, project.progress - index * 25) * 4)}
                  className="h-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Feature Preview",
    content: (project: ComingSoonModalProps["project"]) => (
      <div className="space-y-6">
        {project.images.map((image, index) => (
          <motion.div
            key={image.url}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="rounded-3xl overflow-hidden"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    )
  }
];

export function ComingSoonModal({ open, onOpenChange, project, onNotify }: ComingSoonModalProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotify = () => {
    if (onNotify) {
      onNotify(email);
      setIsSubscribed(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 space-y-4"
            >
              <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200">
                {section.title}
              </h3>
              {section.content(project)}
            </div>
          ))}

          <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm p-4 -mx-6 -mb-6 border-t">
            {isSubscribed ? (
              <Button variant="outline" disabled className="w-full">
                <Bell className="mr-2 h-4 w-4" />
                You're on the waitlist!
              </Button>
            ) : (
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email for updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button onClick={handleNotify}>
                  <Bell className="mr-2 h-4 w-4" />
                  Join Waitlist
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}