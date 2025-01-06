'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/types/blog.types';

interface BlogPostCardProps {
	post: BlogPost;
	featured?: boolean;
	compact?: boolean;
}

// active card for blog page

export function BlogPostCard({ post, featured, compact }: BlogPostCardProps) {
	return (
		<Link href={`/blog/${post.slug}`}>
			<motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="h-full">
				<Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
					<div
						className={`relative ${featured ? 'aspect-[2/1]' : compact ? 'aspect-[3/2]' : 'aspect-video'}`}
					>
						<img src={post.coverImage} alt={post.title} className="object-cover w-full h-full" />
						<Badge className="absolute top-4 left-4">{post.category}</Badge>
					</div>

					<h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold mb-2 line-clamp-2`}>
						{post.title}
					</h3>

					{!compact && <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>}

					<div className="flex items-center gap-4 text-sm text-muted-foreground">
						<div className="flex items-center gap-1">
							<Calendar className="h-4 w-4" />
							<span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
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
				</Card>
			</motion.div>
		</Link>
	);
}
