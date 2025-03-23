import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { services } from '@/lib/services';

export default function LandingServices() {
	return (
		<Container>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
				{services.map((service, index) => (
					<motion.div
						key={service.title}
						initial={{ scale: 0.98, y: 5 }}
						animate={{ scale: 1, y: 0 }}
						transition={{
							duration: 0.2,
							delay: index * 0.05,
							ease: 'easeOut',
						}}
						whileHover={{
							y: -8,
							scale: 1.02,
							transition: { duration: 0.2 },
						}}
						className="orbital-card space-card p-6 rounded-xl flex flex-col h-[420px] relative group hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300"
					>
						<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						<div
							className={`w-14 h-14 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}
						>
							<service.icon className="w-7 h-7 text-white" />
						</div>
						<h3 className="text-2xl font-bold mb-4 font-space-grotesk break-words">
							{service.title}
						</h3>
						<p className="text-muted-foreground text-lg mb-8 flex-grow">{service.description}</p>
						<Button variant="ghost" className="group w-fit">
							Learn More
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</motion.div>
				))}
			</div>
		</Container>
	);
}
