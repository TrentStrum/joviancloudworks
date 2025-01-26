'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { MovingBorder } from '@/components/ui/moving-border';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { SpacetimeGrid } from '@/components/ui/spacetime-grid';
import { StarsBackground } from '@/components/ui/stars-background';

export function HeroStars(): JSX.Element {
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	// Don't render anything until mounted
	if (!mounted) return <div className="min-h-[80vh]" />;

	const isDark = theme === 'dark';

	return (
		<div className="min-h-[80vh] relative flex flex-col items-center justify-center overflow-hidden bg-background dark:bg-gradient-to-b dark:from-background dark:to-background/80">
			<div className="relative z-10 text-center px-4">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: [20, -5, 0] }}
					transition={{ duration: 0.8 }}
					className="text-4xl md:text-7xl font-bold mb-6 text-primary dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-orange-400"
				>
					Join us as we push the limits of
					<br />
					<span className="text-primary dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-orange-400">
						Saas Development
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
				>
					Explore our portfolio and see how we can help you transform your business
				</motion.p>

				{/* <motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="flex flex-wrap justify-center gap-4"
				>
					<MovingBorder
						onClick={() => router.push("/portfolio")}
						className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
					>
						<span className="flex items-center">
							<Rocket className="mr-2 h-4 w-4" />
							Explore Solutions
						</span>
					</MovingBorder>
				</motion.div> */}
			</div>

			{mounted && isDark && (
				<>
					<div suppressHydrationWarning>
						<ShootingStars className="h-[200vh] -top-[50vh] opacity-75" />
					</div>
					<StarsBackground className="opacity-75" />
				</>
			)}
		</div>
	);
}
