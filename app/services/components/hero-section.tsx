import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../../components/ui/text-generate-effect';

export default function HeroSection() {
	return (
		<div className="flex items-center justify-center">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4, ease: 'easeOut' }}
				className="text-center w-full"
			>
				<div className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 cosmic-text font-space-grotesk">
					<TextGenerateEffect
						words="Empower Your Vision With"
						secondLineWords="Tailored IT Solutions"
						className="text-center"
						secondLineClassName="text-primary"
						duration={0.6}
					/>
				</div>
				<p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
					We specialize in helping small businesses and entrepreneurs thrive in the digital age.
					From personalized consulting to custom development, we create solutions that fit your
					unique needs and budget.
				</p>
			</motion.div>
		</div>
	);
}
