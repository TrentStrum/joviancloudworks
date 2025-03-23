import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LandingHero() {
	return (
		<Container className="relative z-10">
			<div className="text-center max-w-3xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="text-5xl md:text-7xl font-bold mb-8 cosmic-text font-space-grotesk">
						Modern Tech Solutions for
						<span className="block text-primary mt-2">Solo Entrepreneurs & Small Businesses</span>
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Strategy. Automation. Analytics. Done-for-You.
					</p>
					<p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
						Get a dedicated tech partner who can plan, build, and manage your digital transformation
						— all without the cost of a full-time team.
					</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center">
						<Link href="/services">
							<Button size="lg" className="bg-primary hover:bg-primary/90">
								Explore Solutions
								<Rocket className="ml-2 h-4 w-4" />
							</Button>
						</Link>
						<Link href="/calculator">
							<Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
								Calculate Costs
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</motion.div>
			</div>
		</Container>
	);
}
