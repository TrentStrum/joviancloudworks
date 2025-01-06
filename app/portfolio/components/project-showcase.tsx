'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectShowcaseProps {
	title: string;
	subtitle: string;
	screens: {
		src: string;
		alt: string;
		title: string;
	}[];
}

export function ProjectShowcase({ title, subtitle, screens }: ProjectShowcaseProps): JSX.Element {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const centerIndex = Math.floor(screens.length / 2);

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

				{/* Cards container with proper centering */}
				<div className="relative mx-auto max-w-[1400px] h-[500px]">
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="relative" style={{ width: `${screens.length * 200}px` }}>
							{screens.map((screen, index) => {
								const isProminent = hoveredIndex === index;
								const offset = index - centerIndex;
								const defaultX = offset * -100; // More spread in default state
								const focusedX = offset * 160; // More spread in focused state
								
								return (
									<motion.div
										key={index}
										className={cn(
											'absolute top-1/2 -translate-y-1/2',
											'group cursor-pointer'
										)}
										style={{
											left: '50%',
											width: 'min(400px, 80vw)',
											zIndex: isProminent ? 50 : 10 - Math.abs(offset),
										}}
										onHoverStart={() => setHoveredIndex(index)}
										onHoverEnd={() => setHoveredIndex(null)}
									>
										<motion.div
											className="relative aspect-[4/3] rounded-xl overflow-hidden"
											animate={{
												scale: isProminent ? 1 : 0.85,
												translateX: `calc(-50% + ${hoveredIndex === null ? defaultX : focusedX}px)`,
												translateY: isProminent ? -20 : 0,
												rotateY: hoveredIndex === null ? offset * -5 : offset * -8,
												transition: {
													type: 'spring',
													stiffness: 300,
													damping: 30,
												},
											}}
											initial={{
												scale: 0.85,
												translateX: `calc(-50% + ${defaultX}px)`,
												translateY: 0,
												rotateY: offset * -5,
											}}
										>
											{/* Screen container */}
											<div className="relative h-full rounded-xl overflow-hidden bg-gray-900/80 backdrop-blur shadow-2xl shadow-black/20">
												<img
													src={screen.src}
													alt={screen.alt}
													className="w-full h-full object-cover"
												/>

												{/* Overlay and title */}
												<div 
													className={cn(
														"absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent",
														"opacity-0 group-hover:opacity-100 transition-opacity duration-300"
													)}
												>
													<div className="absolute bottom-0 left-0 right-0 p-4">
														<motion.h3
															className="text-white text-lg font-semibold"
															initial={{ y: 20, opacity: 0 }}
															animate={{
																y: isProminent ? 0 : 20,
																opacity: isProminent ? 1 : 0,
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
								);
							})}
						</div>
					</div>
				</div>
			</div>

			{/* Ambient light effects */}
			<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 blur-[100px] rounded-full" />
		</section>
	);
}
