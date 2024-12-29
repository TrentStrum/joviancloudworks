"use client"

import { motion } from 'framer-motion';
import { BlogFeatureCard } from './blog-feature-card';
import { blogFeatures } from '@/lib/data/blog-features';

export function BlogFeatureGrid() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-6 xl:border rounded-md dark:border-neutral-800">
        {blogFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={feature.className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <BlogFeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}