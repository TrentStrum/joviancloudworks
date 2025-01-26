'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, Cloud } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const metrics = [
	{
		icon: <Rocket className="w-6 h-6" />,
		title: 'Projects Launched',
		value: '150+',
	},
	{
		icon: <Users className="w-6 h-6" />,
		title: 'Happy Clients',
		value: '500+',
	},
	{
		icon: <Cloud className="w-6 h-6" />,
		title: 'Cloud Solutions',
		value: '1000+',
	},
];

export function LandingHeroSection(): JSX.Element {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
			<div className="container px-4 mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
						Transform Your Cloud Journey
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
						Elevate your business with cutting-edge cloud solutions that drive innovation and growth
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link href="/portfolio">
							<Button size="lg" className="bg-space-blue hover:bg-space-blue/90 transition-colors">
								<Rocket className="mr-2 h-4 w-4" />
								Explore Our Portfolio
							</Button>
						</Link>
						<Link href="/contact">
							<Button
								size="lg"
								variant="outline"
								className="hover:bg-secondary transition-colors text-gray-800 dark:text-inherit"
							>
								<Cloud className="mr-2 h-4 w-4" />
								Submit Your Idea
							</Button>
						</Link>
					</div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
					{metrics.map((metric, index) => (
						<motion.div
							key={metric.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
						>
							<Card className="p-6 backdrop-blur-sm bg-white/10 hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20 transition-all duration-300">
								<div className="flex items-center justify-center mb-4 text-space-orange">
									{metric.icon}
								</div>
								<h3 className="text-2xl font-bold mb-2">{metric.value}</h3>
								<p className="text-muted-foreground">{metric.title}</p>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
