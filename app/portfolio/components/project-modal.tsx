"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    description: string;
    launchDate: string;
    progress: number;
    waitlistCount: number;
    discount: number;
  };
}

// existing modal for upcoming solutions

export function ProjectModal({ open, onOpenChange, project }: ProjectModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <p className="text-muted-foreground">{project.description}</p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Expected Launch: {new Date(project.launchDate).toLocaleDateString()}</span>
              </div>
              <Badge variant="secondary">{project.discount}% OFF</Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{project.waitlistCount} users waitlisted</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Development Progress</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} />
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Planned Features</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Advanced AI-powered optimization</li>
                <li>Real-time performance monitoring</li>
                <li>Custom reporting and analytics</li>
                <li>Enterprise-grade security</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Development Timeline</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Planning & Design - Completed</p>
                <p>✓ Core Development - In Progress</p>
                <p>• Testing & QA - Upcoming</p>
                <p>• Beta Release - Planned</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}