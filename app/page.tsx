import { HeroSection } from './hero/components/hero-section';

export default function Home(): JSX.Element {
	return (
		<main className="bg-gradient-to-b from-background via-background to-background">
			<HeroSection />
		</main>
	);
}
