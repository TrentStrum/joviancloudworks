'use client';

import { ServicesShowcase } from '@/app/services/components/services-showcase';
import { Container } from '@/components/ui/container';
import HeroSection from './components/hero-section';
import CenterLine from './components/center-line';

export default function ServicesPage() {
	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<section className="relative py-16 md:py-24">
				<div className="absolute inset-0 jupiter-gradient opacity-10" />
				<Container>
					<HeroSection />
				</Container>
			</section>

			{/* Services Section */}
			<section className="relative">
				<CenterLine />
				<Container>
					<ServicesShowcase />
				</Container>
			</section>
		</main>
	);
}
