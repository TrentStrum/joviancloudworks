'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
	url: string;
	alt: string;
}

interface ImageCarouselProps {
	images?: CarouselImage[];
	interval?: number;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa';
const FALLBACK_IMAGES = [{ url: FALLBACK_IMAGE, alt: 'Fallback image' }];

export function ImageCarousel({ images = FALLBACK_IMAGES, interval = 5000 }: ImageCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const safeImages = images.length > 0 ? images : FALLBACK_IMAGES;

	const nextSlide = useCallback(() => {
		setCurrentIndex((current) => (current + 1) % safeImages.length);
	}, [safeImages.length]);

	const previousSlide = () => {
		setCurrentIndex((current) => (current - 1 + safeImages.length) % safeImages.length);
	};

	useEffect(() => {
		if (!isAutoPlaying) return;

		const timer = setInterval(nextSlide, interval);
		return () => clearInterval(timer);
	}, [isAutoPlaying, interval, nextSlide]);

	return (
		<div
			className="relative w-full aspect-[16/9] overflow-hidden rounded-lg"
			onMouseEnter={() => setIsAutoPlaying(false)}
			onMouseLeave={() => setIsAutoPlaying(true)}
		>
			<AnimatePresence mode="wait">
				<motion.img
					key={currentIndex}
					src={safeImages[currentIndex].url}
					alt={safeImages[currentIndex].alt}
					className="absolute w-full h-full object-cover"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					onError={(e) => {
						const imgElement = e.currentTarget as HTMLImageElement;
						if (imgElement.src !== FALLBACK_IMAGE) {
							imgElement.src = FALLBACK_IMAGE;
						}
					}}
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
				{safeImages.map((_, index) => (
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
