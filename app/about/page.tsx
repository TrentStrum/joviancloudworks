import { generateProjectMetadata } from '@/lib/metadata';

export const generateMetadata = () => generateProjectMetadata({ id: 'About' });

export default function AboutPage() {
	return <div>About</div>;
}
