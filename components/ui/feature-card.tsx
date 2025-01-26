'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface FeatureCardProps {
	children: ReactNode;
	className?: string;
}

export function FeatureCard({ children, className }: FeatureCardProps) {
	return <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>{children}</div>;
}

export function FeatureTitle({ children }: { children: ReactNode }) {
	return (
		<p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
			{children}
		</p>
	);
}

export function FeatureDescription({ children }: { children: ReactNode }) {
	return (
		<p
			className={cn(
				'text-sm md:text-base max-w-4xl text-left mx-auto',
				'text-neutral-500 text-center font-normal dark:text-neutral-300',
				'text-left max-w-sm mx-0 md:text-sm my-2'
			)}
		>
			{children}
		</p>
	);
}
