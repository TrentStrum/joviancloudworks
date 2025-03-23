'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { ParticlesBackground } from '@/components/particles-background';
import { Database, HardDrive, Shield, Gauge } from 'lucide-react';

const features = [
	{
		title: 'High-Speed Storage',
		description: 'Lightning-fast access to your data with advanced SSD technology',
		icon: HardDrive,
	},
	{
		title: 'Data Protection',
		description: 'Enterprise-grade security and redundancy for your critical data',
		icon: Shield,
	},
	{
		title: 'Performance Metrics',
		description: 'Real-time monitoring and analytics for storage optimization',
		icon: Gauge,
	},
];

export default function StoragePage() {
	return (
		<main className="min-h-screen pt-24">
			<ParticlesBackground />

			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
						<Database className="w-8 h-8 text-primary" />
					</div>
					<h1 className="text-5xl md:text-6xl font-bold mb-6 cosmic-text font-space-grotesk">
						Data Nebulas
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Secure, scalable storage solutions that expand with your cosmic data needs
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className="space-card p-6 rounded-lg"
						>
							<feature.icon className="w-8 h-8 text-primary mb-4" />
							<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
							<p className="text-muted-foreground">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</Container>
		</main>
	);
}
