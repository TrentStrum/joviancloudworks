import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Cloud } from 'lucide-react';
import Link from 'next/link';

export default function LandingCta() {
	return (
		<Container className="max-w-3xl relative">
			<div className="text-center max-w-3xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk">
					Ready to Begin Your Cloud Journey?
				</h2>
				<p className="text-lg text-muted-foreground mb-8">
					Transform your business with our cutting-edge cloud solutions. Start your cosmic voyage
					today.
				</p>
				<Link href="/contact">
					<Button size="lg" className="bg-primary hover:bg-primary/90">
						Launch Your Project
						<Cloud className="ml-2 h-4 w-4" />
					</Button>
				</Link>
			</div>
		</Container>
	);
}
