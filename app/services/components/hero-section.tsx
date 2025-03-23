import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../../components/ui/text-generate-effect';

export default function HeroSection() {
	return (
		<div className="h-[calc(100%+4rem)] pt-16 pb-16 flex items-center justify-center">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4, ease: 'easeOut' }}
				className="text-center w-full"
			>
				<div className="text-5xl md:text-7xl font-bold mb-6 cosmic-text font-space-grotesk">
					<TextGenerateEffect
						words="Empower Your Vision With"
						secondLineWords="Tailored IT Solutions"
						className="text-center"
						secondLineClassName="text-primary"
						duration={0.6}
					/>
				</div>
				<p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
					We specialize in helping small businesses and entrepreneurs thrive in the digital age.
					From personalized consulting to custom development, we create solutions that fit your
					unique needs and budget.
				</p>
			</motion.div>
		</div>
	);
}
