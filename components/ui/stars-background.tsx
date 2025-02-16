'use client';

import { useTheme } from 'next-themes';
import React, { useState, useEffect, useRef, useCallback } from 'react';

import type { RefObject } from 'react';

import { cn } from '@/lib/utils';

interface StarProps {
	x: number;
	y: number;
	radius: number;
	opacity: number;
	twinkleSpeed: number | null;
}

interface StarBackgroundProps {
	starDensity?: number;
	allStarsTwinkle?: boolean;
	twinkleProbability?: number;
	minTwinkleSpeed?: number;
	maxTwinkleSpeed?: number;
	className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
	starDensity = 0.0005,
	allStarsTwinkle = true,
	twinkleProbability = 0.7,
	minTwinkleSpeed = 0.5,
	maxTwinkleSpeed = 1,
	className,
}) => {
	const { theme } = useTheme();
	const [stars, setStars] = useState<StarProps[]>([]);
	const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

	const generateStars = useCallback(
		(width: number, height: number): StarProps[] => {
			const area = width * height;
			const numStars = Math.floor(area * starDensity);
			return Array.from({ length: numStars }, () => {
				const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
				const baseRadius = theme === 'dark' ? 0.5 : 0.75;
				const radiusVariation = theme === 'dark' ? 0.25 : 0.35;
				return {
					x: Math.random() * width,
					y: Math.random() * height,
					radius: Math.random() * radiusVariation + baseRadius,
					opacity: Math.random() * 0.3 + 0.7,
					twinkleSpeed: shouldTwinkle
						? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
						: null,
				};
			});
		},
		[starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed, theme]
	);

	useEffect(() => {
		const updateStars = () => {
			if (canvasRef.current) {
				const canvas = canvasRef.current;
				const ctx = canvas.getContext('2d');
				if (!ctx) return;

				const { width, height } = canvas.getBoundingClientRect();
				canvas.width = width;
				canvas.height = height;
				setStars(generateStars(width, height));
			}
		};

		updateStars();
		const canvas = canvasRef.current;
		const resizeObserver = new ResizeObserver(updateStars);

		if (canvas) {
			resizeObserver.observe(canvas);
		}

		return () => {
			if (canvas) {
				resizeObserver.unobserve(canvas);
			}
		};
	}, [
		starDensity,
		allStarsTwinkle,
		twinkleProbability,
		minTwinkleSpeed,
		maxTwinkleSpeed,
		generateStars,
	]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationFrameId: number;

		const render = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			stars.forEach((star) => {
				ctx.beginPath();
				ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
				const starColor = '255, 255, 255';
				ctx.fillStyle = `rgba(${starColor}, ${star.opacity})`;
				ctx.fill();

				if (star.twinkleSpeed !== null) {
					star.opacity = 0.5 + Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
				}
			});

			animationFrameId = requestAnimationFrame(render);
		};

		render();

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, [stars]);

	return (
		<canvas 
			ref={canvasRef} 
			className={cn('h-[200vh] w-full absolute -top-[50vh] z-0', className)} 
		/>
	);
};
