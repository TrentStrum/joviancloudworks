'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';

export const Spotlight = ({
	className = '',
	fill = 'white',
}: {
	className?: string;
	fill?: string;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.5,
			}}
			className={cn(
				'pointer-events-none absolute -inset-px opacity-0 transition duration-300',
				className
			)}
		>
			<div
				className="absolute inset-0 rounded-full blur-[100px]"
				style={{
					background: `radial-gradient(circle at center, ${fill} 0%, transparent 70%)`,
				}}
			/>
		</motion.div>
	);
};
