import { HeroSection } from './hero/page';
import { SectionDivider } from '@/components/layout/section-divider';
import FeaturedSolutionSection from './(featured)/solution/page';
import FeaturedPostSection from './(featured)/post/page';
import ContactSection from './contact/page';

export default function Home(): JSX.Element {
	return (
		<main className="bg-gradient-to-b from-background via-background to-background h-[calc(100vh-16rem)] mt-16">
			<section className="h-full">
				<HeroSection />
			</section>
		</main>
	);
}
