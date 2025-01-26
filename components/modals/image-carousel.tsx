'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

import { Button } from '@/components/ui/button';

interface ImageCarouselProps {
	images: { url: string; alt: string }[];
	interval?: number;
}

export function ImageCarousel({ images, interval = 5000 }: ImageCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const nextSlide = useCallback(() => {
		setCurrentIndex((current) => (current + 1) % images.length);
	}, [images.length]);

	const previousSlide = () => {
		setCurrentIndex((current) => (current - 1 + images.length) % images.length);
	};

	useEffect(() => {
		if (!isAutoPlaying) return;

		const timer = setInterval(nextSlide, interval);
		return () => clearInterval(timer);
	}, [isAutoPlaying, interval, nextSlide]);

	return (
		<div
			className="relative w-full h-full overflow-hidden rounded-t-lg"
			onMouseEnter={() => setIsAutoPlaying(false)}
			onMouseLeave={() => setIsAutoPlaying(true)}
		>
			<AnimatePresence mode="wait">
				<motion.img
					key={currentIndex}
					src={images[currentIndex].url}
					alt={images[currentIndex].alt}
					className="absolute w-full h-full object-cover"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				/>
			</AnimatePresence>

			<div className="absolute inset-0 flex items-center justify-between p-4">
				<Button
					variant="ghost"
					size="icon"
					onClick={previousSlide}
					className="bg-background/20 backdrop-blur-sm hover:bg-background/40"
				>
					<ChevronLeft className="h-6 w-6" />
				</Button>
				<Button
					variant="ghost"
					size="icon"
					onClick={nextSlide}
					className="bg-background/20 backdrop-blur-sm hover:bg-background/40"
				>
					<ChevronRight className="h-6 w-6" />
				</Button>
			</div>

			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-2 h-2 rounded-full transition-all ${
							index === currentIndex ? 'bg-primary w-4' : 'bg-primary/50 hover:bg-primary/75'
						}`}
					/>
				))}
			</div>
		</div>
	);
}
