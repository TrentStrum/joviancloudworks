'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/canvas-effect';
import { BlogCta } from './BlogCta';
import { useFeaturedPost } from '@/hooks/react-query/use-blog';

export function FeaturedPost(): JSX.Element | null {
	const [hovered, setHovered] = React.useState(false);
	const { data: featuredPost, isLoading } = useFeaturedPost();

	if (isLoading) return <div>Loading...</div>;
	if (!featuredPost) return null;

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
		>
			<div className="relative z-10">
				<BlogCta post={featuredPost} />
			</div>
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
								[59, 130, 246],
								[139, 92, 246],
							]}
							opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
							dotSize={2}
						/>
					</motion.div>
				)}
			</AnimatePresence>
			{/* Radial gradient for the cute fade */}
			<div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
		</div>
	);
}
