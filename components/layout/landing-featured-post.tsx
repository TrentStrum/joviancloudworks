'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Moon, Sun, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect, useRef } from 'react';

import { FloatingDots } from '../ui/floating-dots';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface FeaturedBlogPostProps {
	title: string;
	excerpt: string;
	author: string;
	date: string;
	imageUrl?: string;
	tags?: string[];
	slug: string;
}

export default function FeaturedBlogPost({
	title,
	excerpt,
	author,
	date,
	imageUrl,
	tags,
	slug,
}: FeaturedBlogPostProps) {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const elementRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: elementRef,
		offset: ['start end', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const fallbackImageUrl = '/placeholder.svg?height=400&width=800';

	return (
		<motion.div
			ref={elementRef}
			style={{ opacity }}
			className="relative w-full max-w-4xl mx-auto p-8"
		>
			<motion.div
				initial={{ perspective: 1000 }}
				whileHover={{
					rotateX: 5,
					rotateY: 5,
					translateZ: 20,
					transition: { duration: 0.2 },
				}}
				className="relative w-full"
			>
				<Card className="relative overflow-hidden bg-black/40 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300">
					<div className="absolute inset-0 z-0">
						<FloatingDots />
					</div>
					<CardContent className="relative z-10 p-0">
						<motion.div className="relative h-64 sm:h-80 md:h-96 overflow-hidden" style={{ y }}>
							<Image
								src={imageUrl || fallbackImageUrl}
								alt={title}
								layout="fill"
								objectFit="cover"
								className="transition-all duration-300 hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
							<div className="absolute top-4 right-4">
								<Button
									variant="outline"
									size="icon"
									onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
									className="bg-black/50 backdrop-blur-sm border-white/20 hover:bg-white/20"
								>
									{theme === 'dark' ? (
										<Sun className="h-4 w-4 text-white" />
									) : (
										<Moon className="h-4 w-4 text-white" />
									)}
								</Button>
							</div>
						</motion.div>
						<div className="p-6 space-y-4">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="space-y-2"
							>
								<h2 className="text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
									{title}
								</h2>
								<p className="text-sm text-gray-400">
									By {author} • {date}
								</p>
							</motion.div>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className="text-gray-300"
							>
								{excerpt}
							</motion.p>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								className="flex flex-wrap gap-2"
							>
								{tags && tags.length > 0
									? tags.map((tag) => (
											<Badge
												key={tag}
												variant="secondary"
												className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
											>
												{tag}
											</Badge>
									  ))
									: null}
							</motion.div>
						</div>
					</CardContent>
					<CardFooter className="relative z-10 p-6 pt-0">
						<Link href={`/blog/${slug}`} passHref className="w-full">
							<Button className="w-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border-white/20">
								Read More <ChevronRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</CardFooter>
				</Card>
			</motion.div>
		</motion.div>
	);
}
