import { stats } from '@/lib/stats';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

export default function LandingStats() {
	return (
		<Container className="max-w-5xl">
			<div className="absolute inset-0 jupiter-gradient opacity-5"></div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
				{stats.map((stat, index) => (
					<motion.div
						key={stat.label}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="text-center"
					>
						<p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
						<p className="text-lg text-muted-foreground">{stat.label}</p>
					</motion.div>
				))}
			</div>
		</Container>
	);
}
