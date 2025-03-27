'use client';

import { ServicesShowcase } from '@/app/services/components/services-showcase';
import { Container } from '@/components/ui/container';
import HeroSection from './components/hero-section';
import CenterLine from './components/center-line';

export default function ServicesPage() {
	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<section className="relative h-[40vh]">
				<div className="absolute inset-0 jupiter-gradient opacity-10" />
				<Container className="h-full flex items-center justify-center">
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
