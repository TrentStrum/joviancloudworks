"use client"

import { motion } from 'framer-motion';
import { SearchBar } from '@/components/features/search-bar';
import { FeatureCard } from '@/components/features/feature-card';
import { useFeatureSearch } from '@/hooks/use-feature-search';

const projects = [
  {
    title: "CloudScale Analytics",
    description: "Real-time data analytics platform processing over 1M events per second",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    metrics: ["1M+ events/sec", "99.99% uptime", "50+ enterprise clients"],
    tags: ["Analytics", "Real-time", "Enterprise"],
    demoUrl: "https://analytics.example.com",
  },
  {
    title: "SecureVault",
    description: "Enterprise-grade secure storage solution with military-grade encryption",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    metrics: ["256-bit encryption", "10PB+ stored", "Zero breaches"],
    tags: ["Security", "Storage", "Enterprise"],
    demoUrl: "https://vault.example.com",
  },
  {
    title: "AutoScale Pro",
    description: "Intelligent auto-scaling solution for cloud infrastructure",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    metrics: ["60% cost reduction", "3ms response time", "100+ deployments"],
    tags: ["Infrastructure", "Automation", "DevOps"],
    demoUrl: "https://autoscale.example.com",
  },
];

export function PortfolioSection() {
  const {
    selectedTags,
    allTags,
    filteredFeatures,
    toggleTag,
    setSearchQuery,
    clearFilters,
  } = useFeatureSearch(projects);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover how we've helped businesses transform their cloud infrastructure
          </p>

          <SearchBar
            tags={allTags}
            selectedTags={selectedTags}
            onTagSelect={toggleTag}
            onTagsClear={clearFilters}
            onSearch={setSearchQuery}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <FeatureCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}