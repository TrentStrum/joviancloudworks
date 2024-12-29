import { TimelineEntry } from "@/lib/types/timeline";
import { Card } from "@/components/ui/card";

export const timelineData: TimelineEntry[] = [
  {
    title: "2023",
    content: (
      <Card className="p-6">
        <h4 className="font-semibold mb-2">Senior Cloud Architect at TechCorp Inc.</h4>
        <p className="text-muted-foreground">
          Led the development of enterprise-scale cloud infrastructure solutions,
          resulting in 40% cost reduction and 99.99% uptime for critical systems.
        </p>
      </Card>
    ),
  },
  {
    title: "2020",
    content: (
      <Card className="p-6">
        <h4 className="font-semibold mb-2">Cloud Solutions Engineer at CloudTech</h4>
        <p className="text-muted-foreground">
          Architected and implemented cloud-native applications serving millions of users.
          Specialized in Kubernetes and microservices architecture.
        </p>
      </Card>
    ),
  },
  {
    title: "2018",
    content: (
      <Card className="p-6">
        <h4 className="font-semibold mb-2">DevOps Engineer at InnovateCloud</h4>
        <p className="text-muted-foreground">
          Established CI/CD pipelines and automated deployment processes,
          reducing deployment time by 75% and improving reliability.
        </p>
      </Card>
    ),
  },
];