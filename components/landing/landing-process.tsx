import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { process } from '@/lib/process';
import { ProcessModal } from '@/components/process-modal';

export default function LandingProcess() {
	return (
		<Container className="max-w-5xl">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center mb-16"
			>
				<h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
				<p className="text-xl text-muted-foreground">Your journey to cloud excellence</p>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{process.map((step, index) => (
					<ProcessModal
						key={step.title}
						title={step.title}
						description={step.description}
						icon={step.icon}
						index={index}
						totalSteps={process.length}
						details={step.modalDetails}
					/>
				))}
			</div>
		</Container>
	);
}
