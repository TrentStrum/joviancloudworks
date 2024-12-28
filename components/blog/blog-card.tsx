"use client";

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

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
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="aspect-video relative">
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
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <button className="ml-auto hover:text-foreground transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}