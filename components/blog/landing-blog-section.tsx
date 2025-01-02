'use client';

import { motion } from 'framer-motion';
import { BlogPostCard } from '@/components/blog/blog-card';
import { useBlogPosts } from '@/hooks/react-query/use-blog';


export function LandingBlogSection(): JSX.Element {
	const { data: posts, isLoading, isError, error } = useBlogPosts();

	if (isLoading) {
		return (
			<main className="min-h-screen py-20">
				<div className="container mx-auto px-4">
					<div className="text-center">Loading blog posts...</div>
				</div>
			</main>
		);
	}

	if (isError) {
		return (
			<main className="min-h-screen py-20">
				<div className="container mx-auto px-4">
					<div className="text-center text-red-500">
						Error loading blog posts: {error instanceof Error ? error.message : 'Unknown error'}
					</div>
				</div>
			</main>
		);
	}

	if (!posts?.pages[0]?.length) {
		return (
			<main className="min-h-screen py-20">
				<div className="container mx-auto px-4">
					<div className="text-center">No blog posts available.</div>
				</div>
			</main>
		);
	}

	const allPosts = posts.pages.flat();
	const featuredPost = allPosts.find((post) => post.featured);
	const highlightedPosts = allPosts.filter((post) => post.highlighted && !post.featured).slice(0, 2);
	const regularPosts = allPosts.filter((post) => !post.featured && !post.highlighted);

	return (
		<main className="min-h-screen py-20">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl font-bold mb-4 gradient-text">Latest Insights</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Explore our thoughts on Saas development, innovation, and industry best practices
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
					{/* Featured Post */}
					{featuredPost && (
						<motion.div
							className="md:col-span-8"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
						>
							<BlogPostCard post={featuredPost} featured />
						</motion.div>
					)}

					{/* Highlighted Posts */}
					<div className="md:col-span-4 grid gap-6">
						{highlightedPosts.map((post, index) => (
							<motion.div
								key={post.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								<BlogPostCard post={post} compact />
							</motion.div>
						))}
					</div>

					{/* Regular Posts */}
					{regularPosts.map((post, index) => (
						<motion.div
							key={post.id}
							className="md:col-span-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
						>
							<BlogPostCard post={post} />
						</motion.div>
					))}
				</div>
			</div>
		</main>
	);
}
