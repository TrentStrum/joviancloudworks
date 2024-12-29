"use client";

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Author {
  name: string;
  avatar: string;
}

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: Author;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  compact?: boolean;
}

export function BlogCard({ post, featured, compact }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div 
        whileHover={{ y: -5 }} 
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
          <div className={`relative ${featured ? 'aspect-[2/1]' : compact ? 'aspect-[3/2]' : 'aspect-video'}`}>
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-full"
            />
            <Badge className="absolute top-4 left-4">{post.category}</Badge>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="text-sm text-muted-foreground">
                <p>{post.author.name}</p>
              </div>
            </div>

            <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold mb-2 line-clamp-2`}>
              {post.title}
            </h3>
            
            {!compact && (
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <button 
                className="ml-auto hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  // Share functionality
                }}
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}