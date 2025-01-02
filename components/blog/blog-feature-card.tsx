'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types/blog.types';

interface BlogFeatureCardProps {
	post: BlogPost;
}

export function BlogFeatureCard({ post }: BlogFeatureCardProps) {
	return (
		<Card className={`p-4 sm:p-8 relative overflow-hidden`}>
			<div className="space-y-4">
				<h3 className="text-xl md:text-2xl font-medium tracking-tight">{post.title}</h3>
				<p className="text-sm md:text-base text-muted-foreground">{post.excerpt}</p>
				{post.coverImage && (
					<div className="relative flex py-8 px-2 gap-10 h-full">
						<div className="w-full p-5 mx-auto bg-background shadow-2xl group h-full">
							<div className="flex flex-1 w-full h-full flex-col space-y-2">
								<Link href={`/blog/${post.slug}`}>
									<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
										<Image
											src={post.coverImage}
											alt={post.title}
											width={800}
											height={800}
											className="h-full w-full aspect-square object-cover object-center rounded-sm"
										/>
									</motion.div>
								</Link>
							</div>
						</div>
					</div>
				)}

				{post.category && (
					<Badge variant="secondary" className="mt-4">
						{post.category}
					</Badge>
				)}
			</div>
		</Card>
	);
}
