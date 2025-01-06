import { HeroSection } from './hero/page';
import { SectionDivider } from '@/components/layout/section-divider';
import FeaturedSolutionSection from './(featured)/solution/page';
import FeaturedPostSection from './(featured)/post/page';
import ContactSection from './contact/page';


export default function Home() {
	return (
		<main className="min-h-screen">
			<HeroSection />
			<SectionDivider />
			<section className="section-transition">
				<FeaturedSolutionSection />
			</section>
			<SectionDivider />
			<section className="section-transition">
				<FeaturedPostSection />
			</section>
			<SectionDivider />
			<section className="section-transition">
				<ContactSection />
			</section>
		</main>
	);
}
