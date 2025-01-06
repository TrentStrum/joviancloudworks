'use client';

import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { MovingBorder } from '@/components/ui/moving-border';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import type { BlogPost } from '@/types/blog.types';

interface BlogCtaProps {
	post: BlogPost;
}

export function BlogCta({ post }: BlogCtaProps): JSX.Element {
	const router = useRouter();
	const words = [
		{
			text: post.title.split(' ')[0],
		},
		{
			text: 'hottakes',
		},
		{
			text: 'for',
		},
		{
			text: '2025.',
			className: 'text-blue-500 dark:text-blue-500',
		},
	];

	return (
		<div className="flex flex-col items-center justify-center h-[40rem]">
			<p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
				Read our latest blog posts
			</p>
			<TypewriterEffectSmooth words={words} />
			<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="flex flex-wrap justify-center gap-4"
				>
					<MovingBorder
						onClick={() => router.push(`/blog/${post.slug}`)}
						className="bg-white dark:bg-black text-black dark:text-white"
					>
						<span className="flex items-center">
							Read here
							<ArrowRight className="ml-2 h-4 w-4" />
						</span>
					</MovingBorder>
					<MovingBorder
						onClick={() => router.push('/blog')}
						className="bg-transparent text-gray-800 dark:text-white border-gray-800 dark:border-white"
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
