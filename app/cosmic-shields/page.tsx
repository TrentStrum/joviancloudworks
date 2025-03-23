'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { ParticlesBackground } from '@/components/particles-background';
import { CheckCircle2 } from 'lucide-react';
import { services } from '@/lib/services';

const service = services.find((s) => s.id === 'cosmic-shields');

export default function CosmicShieldsPage() {
	if (!service) return null;

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
						<service.icon className="w-8 h-8 text-primary" />
					</div>
					<h1 className="text-5xl md:text-6xl font-bold mb-6 cosmic-text font-space-grotesk">
						{service.title}
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">{service.description}</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					{service.features.map((feature, index) => (
						<motion.div
							key={feature.name}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className="space-card p-6 rounded-lg"
						>
							<h3 className="text-xl font-bold mb-2">{feature.name}</h3>
							<p className="text-muted-foreground mb-4">{feature.description}</p>
							<ul className="space-y-2">
								{feature.capabilities.map((capability) => (
									<li key={capability} className="flex items-center text-sm">
										<CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
										{capability}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</Container>
		</main>
	);
}
