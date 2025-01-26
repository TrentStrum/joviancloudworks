'use client';

import { HeroStars } from './hero-stars';
import { LandingHeroSection } from './hero';

export function HeroSection(): JSX.Element {
	return (
		<>
			<HeroStars />
			<LandingHeroSection />
		</>
	);
}
