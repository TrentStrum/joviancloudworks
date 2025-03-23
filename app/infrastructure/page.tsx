'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { ParticlesBackground } from '@/components/particles-background';
import { Rocket, Server, Cpu, Network } from 'lucide-react';

const features = [
	{
		title: 'Scalable Infrastructure',
		description: 'Dynamically scale your computing resources based on demand',
		icon: Server,
	},
	{
		title: 'High-Performance Computing',
		description: 'Access powerful computing clusters for demanding workloads',
		icon: Cpu,
	},
	{
		title: 'Global Network',
		description: 'Connect to our worldwide network of data centers',
		icon: Network,
	},
];

export default function InfrastructurePage() {
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
						<Rocket className="w-8 h-8 text-primary" />
					</div>
					<h1 className="text-5xl md:text-6xl font-bold mb-6 cosmic-text font-space-grotesk">
						Launch Platforms
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Enterprise-grade infrastructure solutions that propel your business into the cloud
						frontier
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
