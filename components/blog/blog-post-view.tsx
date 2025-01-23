'use client';

import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { BlogPost } from '@/types/blog.types';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { BackgroundGradient } from '../ui/background-gradient';
import { Badge } from '../ui/badge';
import { Hash } from 'lucide-react';
import { BlogContent } from '@/components/ui/blog-content';

interface BlogPostViewProps {
	post: BlogPost;
	isPreview?: boolean;
	handleEditClick?: () => void;
}

export function BlogPostView({ post, isPreview, handleEditClick }: BlogPostViewProps): JSX.Element {
	const tags = post.tags || [];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="max-w-4xl mx-auto px-4"
		>
			<Card className="border-0 rounded-xl overflow-hidden bg-background/60 backdrop-blur-sm">
				{post.image_url && (
					<motion.div
						initial={{ opacity: 0, scale: 1.1 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7 }}
						className="relative w-full h-[300px] md:h-[400px]"
					>
						<Image 
							src={post.image_url} 
							alt={post.title} 
							fill 
							className="object-cover" 
							priority 
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
					</motion.div>
				)}
				<CardHeader className="space-y-4 relative z-10 -mt-20 pt-20">
					<BackgroundGradient className="rounded-xl p-[1px]">
						<div className="bg-background/95 backdrop-blur-sm rounded-xl p-6">
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
							>
								<CardTitle className="text-4xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
									{post.title}
								</CardTitle>
								{!isPreview && (
									<div className="flex flex-col gap-4 mt-4">
										<time className="text-sm text-muted-foreground">
											{post.published_at &&
												formatDistanceToNow(new Date(post.published_at), { addSuffix: true })}
										</time>
										{tags.length > 0 && (
											<motion.div 
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ delay: 0.4 }}
												className="flex flex-wrap gap-2"
											>
												{tags.map((tag, index) => (
													<motion.div
														key={tag}
														initial={{ opacity: 0, scale: 0.8 }}
														animate={{ opacity: 1, scale: 1 }}
														transition={{ delay: 0.4 + index * 0.1 }}
													>
														<Badge 
															variant="secondary" 
															className="bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
														>
															<Hash className="w-3 h-3 mr-1" />
															{tag}
														</Badge>
													</motion.div>
												))}
											</motion.div>
										)}
									</div>
								)}
							</motion.div>
						</div>
					</BackgroundGradient>
				</CardHeader>
				<CardContent className="px-6 py-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="prose prose-neutral dark:prose-invert max-w-none"
					>
						<div className="leading-relaxed space-y-6 [&>p]:text-lg">
							<BlogContent content={post.content} />
						</div>
					</motion.div>
					{handleEditClick && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7 }}
							className="mt-12 flex justify-end"
						>
							<Button 
								onClick={handleEditClick} 
								variant="outline"
								className="bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300"
							>
								Edit Post
							</Button>
						</motion.div>
					)}
				</CardContent>
			</Card>
		</motion.div>
	);
}
