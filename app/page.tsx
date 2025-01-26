import FeaturedPostSection from './(featured)/post/page';
import FeaturedSolutionSection from './(featured)/solution/page';
import ContactSection from './contact/page';
import { HeroSection } from './hero/page';

import { SectionDivider } from '@/components/layout/section-divider';

export default function Home(): JSX.Element {
	return (
		<main className="bg-gradient-to-b from-background via-background to-background h-[calc(100vh-16rem)] mt-16">
			<section className="h-full">
				<HeroSection />
			</section>
		</main>
	);
}
