'use client';

import { ServicesShowcase } from '@/app/services/components/services-showcase';
import { ParticlesBackground } from '@/components/particles-background';
import { Container } from '@/components/ui/container';
import HeroSection from './components/hero-section';
import CenterLine from './components/center-line';

export default function ServicesPage() {
	return (
		<main className="min-h-screen">
			<ParticlesBackground />

			<section className="relative h-[45vh]">
				<div className="absolute inset-0 jupiter-gradient opacity-10"></div>
				<Container className="h-full">
					<HeroSection />
				</Container>
			</section>

			<div className="relative">
				<CenterLine />
				<ServicesShowcase />
			</div>
		</main>
	);
}
