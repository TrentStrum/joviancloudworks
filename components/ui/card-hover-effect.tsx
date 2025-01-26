'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/lib/utils';

interface HoverEffectProps {
	items: {
		title: string;
		description: string;
		link: string;
		image: string;
	}[];
	className?: string;
}

export const HoverEffect = ({ items, className }: HoverEffectProps): JSX.Element => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4', className)}>
			{items.map((item, idx) => (
				<Link
					href={item.link}
					key={item.link}
					className="relative group block p-2 h-full w-full"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							/>
						)}
					</AnimatePresence>
					<div className="relative z-10 p-4 space-y-4">
						<div className="relative w-full h-48 rounded-lg overflow-hidden">
							<Image
								src={item.image || '/Jupiter.png'}
								alt={item.title}
								fill
								className="object-cover"
							/>
						</div>
						<h4 className="font-bold text-lg">{item.title}</h4>
						<p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
					</div>
				</Link>
			))}
		</div>
	);
};
