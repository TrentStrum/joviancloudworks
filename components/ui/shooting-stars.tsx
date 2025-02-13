'use client';

import React, { useEffect, useState, useRef } from 'react';

import { cn } from '@/lib/utils';

interface ShootingStar {
	id: number;
	x: number;
	y: number;
	angle: number;
	scale: number;
	speed: number;
	distance: number;
}

interface ShootingStarsProps {
	minSpeed?: number;
	maxSpeed?: number;
	minDelay?: number;
	maxDelay?: number;
	starColor?: string;
	trailColor?: string;
	starWidth?: number;
	starHeight?: number;
	className?: string;
}

const getRandomStartPoint = () => {
	return { x: 0, y: 0, angle: 45 }; // Default values
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
	minSpeed = 10,
	maxSpeed = 30,
	minDelay = 600,
	maxDelay = 2100,
	starColor = '#9E00FF',
	trailColor = '#2EB9DF',
	starWidth = 10,
	starHeight = 1,
	className,
}) => {
	const [star, setStar] = useState<ShootingStar | null>(null);
	const svgRef = useRef<SVGSVGElement>(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		setDimensions({
			width: window.innerWidth,
			height: window.innerHeight * 2,
		});
	}, []);

	useEffect(() => {
		const createStar = () => {
			const { x, y, angle } = getRandomStartPoint();
			const newStar: ShootingStar = {
				id: Date.now(),
				x,
				y,
				angle,
				scale: 1,
				speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
				distance: 0,
			};
			setStar(newStar);

			const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
			setTimeout(createStar, randomDelay);
		};

		createStar();

		return () => {};
	}, [minSpeed, maxSpeed, minDelay, maxDelay]);

	useEffect(() => {
		const moveStar = () => {
			if (star) {
				setStar((prevStar) => {
					if (!prevStar) return null;
					const newX = prevStar.x + prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
					const newY = prevStar.y + prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
					const newDistance = prevStar.distance + prevStar.speed;
					const newScale = 1 + newDistance / 100;
					if (
						newX < -20 ||
						newX > dimensions.width + 20 ||
						newY < -20 ||
						newY > dimensions.height + 20
					) {
						return null;
					}
					return {
						...prevStar,
						x: newX,
						y: newY,
						distance: newDistance,
						scale: newScale,
					};
				});
			}
		};

		const animationFrame = requestAnimationFrame(moveStar);
		return () => cancelAnimationFrame(animationFrame);
	}, [star, dimensions.width, dimensions.height]);

	return (
		<svg ref={svgRef} className={cn('w-full h-full absolute inset-0', className)}>
			{star && (
				<rect
					key={star.id}
					x={star.x}
					y={star.y}
					width={starWidth * star.scale}
					height={starHeight}
					fill="url(#gradient)"
					transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${
						star.y + starHeight / 2
					})`}
				/>
			)}
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
					<stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
				</linearGradient>
			</defs>
		</svg>
	);
};
