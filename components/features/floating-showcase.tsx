'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface FloatingShowcaseProps {
	title: string;
	subtitle: string;
	screens: {
		src: string;
		alt: string;
		className?: string;
	}[];
}

export default function FloatingShowcase({ title, subtitle, screens }: FloatingShowcaseProps) {
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

				{/* Floating screens */}
				<div className="relative h-[400px] md:h-[500px]">
					{screens.map((screen, index) => (
						<motion.div
							key={index}
							className={cn(
								'absolute rounded-lg shadow-2xl shadow-black/20 backdrop-blur-sm',
								screen.className
							)}
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: 1,
								y: 0,
								rotate: index % 2 === 0 ? -6 : 6,
							}}
							transition={{
								duration: 1,
								delay: index * 0.2,
								ease: 'easeOut',
							}}
							whileHover={{
								y: -10,
								rotate: 0,
								transition: { duration: 0.2 },
							}}
						>
							{/* Screen content */}
							<div className="relative rounded-lg overflow-hidden bg-gray-900/80 backdrop-blur">
								<img src={screen.src} alt={screen.alt} className="w-full h-full object-cover" />
								{/* Reflection effect */}
								<div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent" />
							</div>
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
