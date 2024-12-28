"use client";

import { BlogFeatureGrid } from '@/components/blog/blog-grid';

export default function BlogPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center">
          Latest Insights
        </h1>
        <BlogFeatureGrid />
      </div>
    </main>
  );
}