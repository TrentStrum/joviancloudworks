'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate, AnimationScope } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.5,
	secondLineWords,
	secondLineClassName,
}: {
	words: string;
	className?: string;
	filter?: boolean;
	duration?: number;
	secondLineWords?: string;
	secondLineClassName?: string;
}) => {
	const [scope1, animate1] = useAnimate();
	const [scope2, animate2] = useAnimate();
	let wordsArray = words.split(' ');
	let secondLineArray = secondLineWords ? secondLineWords.split(' ') : [];

	// Calculate timing for smoother transitions
	const staggerDelay = 0.12; // Reduced for smoother flow
	const firstRowTotalDuration = staggerDelay * (wordsArray.length - 1);

	useEffect(() => {
		const animate = async () => {
			// First line animation
			await animate1(
				'span',
				{
					opacity: 1,
					filter: filter ? 'blur(0px)' : 'none',
					transform: 'translateY(0)',
				},
				{
					duration: duration,
					delay: stagger(staggerDelay),
					ease: [0.2, 0.65, 0.3, 0.9], // Custom easing for smoother motion
				},
			);

			// Second line animation after first line completes
			if (secondLineArray.length > 0) {
				setTimeout(() => {
					animate2(
						'span',
						{
							opacity: 1,
							filter: filter ? 'blur(0px)' : 'none',
							transform: 'translateY(0)',
						},
						{
							duration: duration,
							delay: stagger(staggerDelay),
							ease: [0.2, 0.65, 0.3, 0.9], // Custom easing for smoother motion
						},
					);
				}, firstRowTotalDuration * 1000);
			}
		};

		animate();
	}, [animate1, animate2, duration, filter, firstRowTotalDuration, secondLineArray.length, staggerDelay]);

	const renderWords = (words: string[], scope: AnimationScope, className?: string) => {
		return (
			<motion.div ref={scope} className={className}>
				{words.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className="inline-block"
							initial={{
								opacity: 0,
								filter: filter ? 'blur(4px)' : 'none',
								transform: 'translateY(4px)',
							}}
							style={{
								willChange: 'transform, opacity, filter',
								backfaceVisibility: 'hidden',
								WebkitFontSmoothing: 'antialiased',
							}}
						>
							{word}{' '}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn('font-bold', className)}>
			{renderWords(wordsArray, scope1)}
			{secondLineArray.length > 0 && (
				<div className={cn('block', secondLineClassName)}>
					{renderWords(secondLineArray, scope2)}
				</div>
			)}
		</div>
	);
};
