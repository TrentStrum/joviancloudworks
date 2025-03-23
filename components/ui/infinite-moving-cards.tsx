'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

export const InfiniteMovingCards = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
}: {
	items: {
		quote: string;
		name: string;
		title: string;
	}[];
	direction?: 'left' | 'right';
	speed?: 'fast' | 'normal' | 'slow';
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);
	const [start, setStart] = useState(false);

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty('--animation-direction', 'forwards');
			} else {
				containerRef.current.style.setProperty('--animation-direction', 'reverse');
			}
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty('--animation-duration', '20s');
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '40s');
			} else {
				containerRef.current.style.setProperty('--animation-duration', '80s');
			}
		}
	};

	const addAnimation = async () => {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	};

	// Use React Query mutation for animation setup
	useMutation({
		mutationFn: addAnimation,
	});

	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
					start && 'animate-scroll',
					pauseOnHover && 'hover:[animation-play-state:paused]',
				)}
			>
				{items.map((item, _idx) => (
					<li
						className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-border bg-gradient-to-br from-orange-500/5 via-orange-500/10 to-orange-500/5 px-8 py-8 md:w-[450px] min-h-[300px] flex items-center backdrop-blur-sm"
						key={item.name}
					>
						<blockquote className="w-full">
							<div
								aria-hidden="true"
								className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
							></div>
							<div className="relative z-20 mb-6">
								<h3 className="text-sm font-medium text-orange-500/80 uppercase tracking-wider">
									{item.title}
								</h3>
							</div>
							<span className="relative z-20 text-base leading-[1.8] font-normal text-foreground">
								{item.quote}
							</span>
							<div className="relative z-20 mt-8 flex flex-row items-center">
								<span className="flex flex-col gap-1">
									<span className="text-base leading-[1.6] font-semibold text-foreground">
										{item.name}
									</span>
								</span>
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};
