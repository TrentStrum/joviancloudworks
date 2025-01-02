import LandingContactPage from './contact/page';
import { LandingHeroPage } from './hero/page';
import { SectionDivider } from '@/components/sections/section-divider';
import FeaturedSolutionSection from './(featured)/solution/page';
import FeaturedPostSection from './(featured)/post/page';

export default function Home() {
	return (
		<main className="min-h-screen">
			<LandingHeroPage />
			<SectionDivider />
			<section className="section-transition">
				<FeaturedSolutionSection />
			</section>
			<section className="section-transition">
				<FeaturedPostSection />
			</section>
			<SectionDivider />
			<section className="section-transition">
				<LandingContactPage />
			</section>
		</main>
	);
}
