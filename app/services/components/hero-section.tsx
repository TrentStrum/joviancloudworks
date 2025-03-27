import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../../../components/text-generate-effect';

export default function HeroSection() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4, ease: 'easeOut' }}
			className="text-center space-y-6"
		>
			<div className="font-bold cosmic-text font-space-grotesk">
				<TextGenerateEffect
					words="Empower Your Vision With"
					secondLineWords="Tailored IT Solutions"
					className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
					secondLineClassName="text-primary"
					duration={0.6}
				/>
			</div>
			<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
				We specialize in helping small businesses and entrepreneurs thrive in the digital age.
				From personalized consulting to custom development, we create solutions that fit your
				unique needs and budget.
			</p>
		</motion.div>
	);
}
