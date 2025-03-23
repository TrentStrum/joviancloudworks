import { Container } from '@/components/ui/container';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/testimonials';

export default function LandingTestimonials() {
	return (
		<Container className="max-w-7xl">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center mb-12"
			>
				<h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
				<p className="text-xl text-muted-foreground">What our clients say about us</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<InfiniteMovingCards
					items={testimonials.map((testimonial) => ({
						title: testimonial.title,
						quote: testimonial.quote,
						name: testimonial.author,
					}))}
					direction="right"
					speed="slow"
				/>
			</motion.div>
		</Container>
	);
}
