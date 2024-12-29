"use client";

import { motion } from 'framer-motion';
import { BlogCard } from '@/components/blog/blog-card';
import { blogPosts } from '@/lib/data/blog-posts';

export default function BlogPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Latest Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our thoughts on cloud technology, innovation, and industry best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Featured Post - Spans 8 columns */}
          <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <BlogCard post={blogPosts[0]} featured />
          </motion.div>

          {/* Secondary Posts - Stack in 4 columns */}
          <div className="md:col-span-4 grid gap-6">
            {blogPosts.slice(1, 3).map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogCard post={post} compact />
              </motion.div>
            ))}
          </div>

          {/* Regular Posts - 3 columns grid */}
          {blogPosts.slice(3).map((post, index) => (
            <motion.div
              key={post.title}
              className="md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 3) * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}