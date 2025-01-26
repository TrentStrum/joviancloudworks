'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';

import { BlogCta } from './BlogCta';

import { CanvasRevealEffect } from '@/components/ui/canvas-effect';
import { useFeaturedPost } from '@/hooks/react-query/use-blog';

export function FeaturedPost(): JSX.Element | null {
	const [hovered, setHovered] = useState(false);
	const { data: featuredPost, isLoading } = useFeaturedPost();
	const { theme } = useTheme();
	const isDark = theme === 'dark';

	if (isLoading)
		return (
			<div className="h-[40rem] flex items-center justify-center">
				<div className="animate-pulse text-lg text-muted-foreground">Loading featured post...</div>
			</div>
		);

	if (!featuredPost) return null;

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center w-full gap-4 mx-auto px-8 relative bg-background dark:bg-gradient-to-b dark:from-background dark:to-background/80"
		>
			<div className="relative z-10">
				<BlogCta post={featuredPost} />
			</div>
			{isDark && (
				<AnimatePresence>
					{hovered && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="h-full w-full absolute inset-0"
						>
							<CanvasRevealEffect
								animationSpeed={5}
								containerClassName="bg-transparent"
								colors={[
									[59, 130, 246], // primary blue
									[139, 92, 246], // primary purple
								]}
								opacities={[0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.5]}
								dotSize={2}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			)}
			{isDark && (
				<div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-background/50" />
			)}
		</div>
	);
}
