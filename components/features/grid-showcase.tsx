'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { cn } from '@/lib/utils';

interface GridShowcaseProps {
	title: string;
	subtitle: string;
	screens: {
		src: string;
		alt: string;
		title: string;
	}[];
}

export default function GridShowcase({ title, subtitle, screens }: GridShowcaseProps) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<section className="relative min-h-[800px] w-full overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-radial from-gray-900 via-gray-900 to-emerald-900/30" />

			{/* Content container */}
			<div className="relative z-10 mx-auto max-w-7xl px-4 py-32">
				{/* Heading */}
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
						<span className="text-white">{title}</span>{' '}
						<span className="text-emerald-400">components</span>{' '}
						<span className="text-white">{subtitle}</span>
					</h2>
				</div>

				{/* Grid layout */}
				<div className="relative grid grid-cols-3 gap-6 max-w-5xl mx-auto">
					{screens.map((screen, index) => (
						<motion.div
							key={index}
							className={cn(
								'relative aspect-[4/3]',
								'group cursor-pointer',
								hoveredIndex !== null && hoveredIndex !== index && 'opacity-50'
							)}
							onHoverStart={() => setHoveredIndex(index)}
							onHoverEnd={() => setHoveredIndex(null)}
							layout
						>
							<motion.div
								className="relative w-full h-full rounded-lg overflow-hidden"
								animate={{
									scale: hoveredIndex === index ? 1.1 : 1,
									zIndex: hoveredIndex === index ? 10 : 0,
									transition: {
										type: 'spring',
										stiffness: 260,
										damping: 20,
									},
								}}
							>
								{/* Screen container */}
								<div className="relative h-full rounded-lg overflow-hidden bg-gray-900/80 backdrop-blur shadow-2xl shadow-black/20">
									<img src={screen.src} alt={screen.alt} className="w-full h-full object-cover" />

									{/* Overlay and title */}
									<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="absolute bottom-0 left-0 right-0 p-4">
											<motion.h3
												className="text-white text-lg font-semibold"
												initial={{ y: 20, opacity: 0 }}
												animate={{
													y: hoveredIndex === index ? 0 : 20,
													opacity: hoveredIndex === index ? 1 : 0,
												}}
												transition={{ duration: 0.2 }}
											>
												{screen.title}
											</motion.h3>
										</div>
									</div>

									{/* Reflection effect */}
									<div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent" />
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Ambient light effects */}
			<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 blur-[100px] rounded-full" />
		</section>
	);
}
