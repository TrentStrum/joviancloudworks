import { useRef } from 'react';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { CheckCircle2, Brain, Zap, LineChart } from 'lucide-react';
import { Service } from '@/types/service.types';

interface ServiceCardProps {
	service: Service;
	index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={cardRef} className="flex items-center relative z-10">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					<motion.div
						className={`space-y-4 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{
							duration: 0.5,
							ease: [0.2, 0.65, 0.3, 0.9],
							delay: index * 0.1,
						}}
					>
						<div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
							<service.icon className="w-7 h-7 text-primary" />
						</div>
						<h2 className="text-3xl font-bold font-space-grotesk">{service.title}</h2>
						<p className="text-lg text-muted-foreground">{service.description}</p>
					</motion.div>

					<motion.div
						className={`space-y-4 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{
							duration: 0.5,
							ease: [0.2, 0.65, 0.3, 0.9],
							delay: index * 0.1,
						}}
					>
						{service.features.map((feature, featureIndex) => (
							<motion.div
								key={feature.name}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-50px' }}
								transition={{
									duration: 0.4,
									ease: [0.2, 0.65, 0.3, 0.9],
									delay: featureIndex * 0.08,
								}}
								className="space-card rounded-xl p-5"
							>
								<h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
									{featureIndex === 0 && <Zap className="w-5 h-5 text-primary" />}
									{featureIndex === 1 && <LineChart className="w-5 h-5 text-primary" />}
									{featureIndex === 2 && <Brain className="w-5 h-5 text-primary" />}
									{feature.name}
								</h3>
								<p className="text-muted-foreground mb-3">{feature.description}</p>
								<ul className="space-y-1.5">
									{feature.capabilities.map((capability, capIndex) => (
										<motion.li
											key={capability}
											className="flex items-center text-sm"
											initial={{ opacity: 0, x: -5 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true, margin: '-20px' }}
											transition={{
												duration: 0.3,
												ease: [0.2, 0.65, 0.3, 0.9],
												delay: featureIndex * 0.05 + capIndex * 0.03,
											}}
										>
											<CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
											{capability}
										</motion.li>
									))}
								</ul>
							</motion.div>
						))}
					</motion.div>
				</div>
			</Container>
		</div>
	);
}
