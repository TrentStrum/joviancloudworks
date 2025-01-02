"use client"

import { motion } from 'framer-motion';
import { BlogFeatureGrid } from '@/components/blog/blog-feature-grid';
import { SpacetimeGrid } from '@/components/ui/spacetime-grid';

export function BlogSection() {
  return (
    <SpacetimeGrid className="py-20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight font-medium gradient-text">
            Latest Cloud Insights
          </h2>
          <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-muted-foreground">
            Stay updated with our latest thoughts on cloud technology, innovation, and industry best practices
          </p>
        </motion.div>

        <BlogFeatureGrid />
      </div>
    </SpacetimeGrid>
  );
}