'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

export const BackgroundGradient = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}): JSX.Element => {
	return (
		<div className={cn('relative p-[1px] group', className)}>
			<motion.div
				className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-primary/40 to-secondary/20"
				style={{ opacity: 0 }}
				animate={{ opacity: [0, 1, 0] }}
				transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
			/>
			{children}
		</div>
	);
};
