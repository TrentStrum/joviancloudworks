'use client';

// import { ParticlesBackground } from '@/components/particles-background';
import LandingHero from '../components/landing/landing-hero';
import LandingServices from '../components/landing/landing-services';
import LandingProcess from '../components/landing/landing-process';
import LandingStats from '../components/landing/landing-stats';
import LandingTestimonials from '../components/landing/landing-testimonials';
import LandingCta from '../components/landing/landing-cta';

export default function Home() {
	return (
		<main className="flex flex-col gap-32 pb-32">
			{/* <ParticlesBackground /> */}

			<section className="relative min-h-[75vh] flex items-center pt-16 md:pt-0">
				<div className="absolute inset-0 jupiter-gradient opacity-10"></div>
				<LandingHero />
			</section>

			<section className="relative z-20">
				<LandingServices />
			</section>

			<section className="relative bg-muted/5 py-32">
				<LandingProcess />
			</section>

			<section className="relative py-32">
				<LandingStats />
			</section>

			<section className="relative bg-muted/5 py-32">
				<LandingTestimonials />
			</section>

			<section className="relative py-32">
				<LandingCta />
			</section>
		</main>
	);
}
