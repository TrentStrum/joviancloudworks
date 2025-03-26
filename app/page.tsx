'use client';

import LandingHero from '../components/landing/landing-hero';
import LandingServices from '../components/landing/landing-services';
import LandingProcess from '../components/landing/landing-process';
import LandingStats from '../components/landing/landing-stats';
import LandingTestimonials from '../components/landing/landing-testimonials';
import LandingCta from '../components/landing/landing-cta';

export default function Home() {
	return (
		<main className="flex flex-col gap-32 pb-32">
			<section className="relative min-h-[90vh] flex items-center">
				<div className="absolute inset-0 jupiter-gradient opacity-10" />
				<div className="relative w-full pt-24 sm:pt-32 md:pt-40">
					<LandingHero />
				</div>
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
