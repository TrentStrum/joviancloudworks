export const projectsData = {
  upcomingProjects: [
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
  ],
  existingProjects: [
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
    },
    {
      title: "SecureVault Cloud",
      description: "Enterprise-grade secure storage solution with military-grade encryption",
      images: [
        { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31", alt: "SecureVault 1" },
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", alt: "SecureVault 2" }
      ],
      features: [
        "256-bit encryption",
        "Access control",
        "Audit logging",
        "Compliance reporting"
      ],
      technologies: ["Go", "Rust", "AWS KMS", "HashiCorp Vault"],
      pricing: [
        {
          name: "Business",
          price: "$199/month",
          features: ["10TB storage", "Unlimited users", "24/7 support"]
        },
        {
          name: "Enterprise",
          price: "$499/month",
          features: ["Unlimited storage", "Custom features", "Dedicated support"]
        }
      ],
      demoUrl: "/demo/securevault"
    }
  ]
};