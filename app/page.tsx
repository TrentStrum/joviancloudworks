import { HeroSection } from './hero/page';
import { SectionDivider } from '@/components/layout/section-divider';
import FeaturedSolutionSection from './(featured)/solution/page';
import FeaturedPostSection from './(featured)/post/page';
import ContactSection from './contact/page';

export default function Home(): JSX.Element {
	return (
		<main className="bg-gradient-to-b from-background via-background to-background min-h-screen">
			<section className="section-fade">
				<HeroSection />
			</section>
			<SectionDivider />
			<section className="section-fade bg-secondary/5">
				<FeaturedSolutionSection />
			</section>
			<SectionDivider />
			<section className="section-fade">
				<FeaturedPostSection />
			</section>
			<SectionDivider />
			<section className="section-fade bg-secondary/5">
				<ContactSection />
			</section>
		</main>
	);
}
