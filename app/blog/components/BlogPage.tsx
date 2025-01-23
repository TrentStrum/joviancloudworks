'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useBlogPostsList } from '@/hooks/react-query/use-blog';
import type { BlogPost } from '@/types/blog.types';
import { BlogFeatureCard } from '@/app/blog/components/blog-feature-card';
import { BlogPostSkeleton } from '@/components/skeletons/BlogPostSkeleton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Sparkles } from 'lucide-react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Badge } from '@/components/ui/badge';

export default function BlogPage(): JSX.Element {
	const [searchTerm, setSearchTerm] = useState('');
	const [sortBy, setSortBy] = useState('newest');
	
	const {
		data: blogPosts,
		isLoading,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
	} = useBlogPostsList({ searchTerm, sortBy });

	const allPosts = blogPosts?.pages?.flat() || [];
	const featuredPost = allPosts.find((post: BlogPost) => post.featured);
	const regularPosts = allPosts.filter((post: BlogPost) => !post.featured);

	return (
		<div className="relative min-h-screen mx-4 sm:mx-8">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
			<div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background to-background/80 -z-10" />

			<div className="container max-w-7xl py-12 space-y-16 mx-auto">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="space-y-4"
				>
					<div className="flex items-center gap-2">
						<TextGenerateEffect words="Explore Our Universe of Ideas" />
						<Sparkles className="h-6 w-6 text-yellow-500" />
					</div>
					<p className="text-muted-foreground max-w-2xl">
						Discover insights about cloud technology, development practices, and industry trends.
					</p>
				</motion.div>

				{/* Search Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="relative max-w-xl"
				>
					<BackgroundGradient className="rounded-lg p-[1px]">
						<div className="relative bg-background rounded-lg">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
							<Input
								placeholder="Search the cosmos..."
								className="pl-9 border-none focus-visible:ring-0"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
					</BackgroundGradient>
				</motion.div>

				{isLoading ? (
					<div className="space-y-8">
						<BlogPostSkeleton />
						<BlogPostSkeleton />
					</div>
				) : !allPosts.length ? (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="text-center py-12"
					>
						<h3 className="text-xl font-semibold mb-2">No posts found in this galaxy</h3>
						<p className="text-muted-foreground">Try adjusting your search coordinates</p>
					</motion.div>
				) : (
					<div className="space-y-16">
						{/* Featured Post */}
						{featuredPost && !searchTerm && (
							<motion.section
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
							>
								<div className="flex items-center gap-2 mb-6">
									<Sparkles className="h-5 w-5 text-yellow-500" />
									<h2 className="text-2xl font-semibold">Featured Discovery</h2>
								</div>
								<BlogFeatureCard post={featuredPost} />
							</motion.section>
						)}

						{/* Regular Posts Grid */}
						<motion.section
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
							className="space-y-8"
						>
							<h2 className="text-2xl font-semibold">
								{searchTerm ? 'Search Results' : 'Latest Explorations'}
							</h2>
							<HoverEffect items={regularPosts.map(post => ({
								title: post.title,
								description: post.shortDescription || post.excerpt || '',
								link: `/blog/${post.id}`,
								image: post.image_url || post.coverImage || '/Jupiter.png',
							}))} />
						</motion.section>

						{/* Load More */}
						{hasNextPage && (
							<div className="flex justify-center">
								<Button
									variant="outline"
									onClick={() => fetchNextPage()}
									disabled={isFetchingNextPage}
									className="min-w-[200px] bg-gradient-to-r from-background to-background/80 hover:from-primary/20 hover:to-primary/20 transition-all duration-300"
								>
									{isFetchingNextPage ? 'Searching...' : 'Explore More'}
								</Button>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
