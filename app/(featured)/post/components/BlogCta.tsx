'use client';

import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { MovingBorder } from '@/components/ui/moving-border';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import type { BlogPost } from '@/types/blog.types';
import { useTheme } from 'next-themes';

interface BlogCtaProps {
	post: BlogPost;
}

export function BlogCta({ post }: BlogCtaProps): JSX.Element {
	const router = useRouter();
	const { theme } = useTheme();
	const isDark = theme === "dark";

	return (
		<div className="flex flex-col items-center justify-center h-[40rem]">
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-muted-foreground text-base sm:text-lg mb-4"
			>
				Read our latest blog posts:
			</motion.p>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="mb-8"
			>
				<TypewriterEffectSmooth 
					words={[{ text: post.title }]} 
					className="text-4xl font-bold text-primary dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-orange-400"
				/>
			</motion.div>
			<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="flex flex-wrap justify-center gap-4"
				>
					<MovingBorder
						onClick={() => router.push(`/blog/${post.id}`)}
						className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
					>
						<span className="flex items-center">
							Read here
							<ArrowRight className="ml-2 h-4 w-4" />
						</span>
					</MovingBorder>
					<MovingBorder
						onClick={() => router.push('/blog')}
						className="bg-card text-card-foreground hover:bg-card/90 transition-colors border border-border"
					>
						<span className="flex items-center">
							<BookOpen className="mr-2 h-4 w-4" />
							Checkout our other posts
						</span>
					</MovingBorder>
				</motion.div>
			</div>
		</div>
	);
}
