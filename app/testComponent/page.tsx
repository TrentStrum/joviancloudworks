import { FeaturesSectionDemo } from "../portfolio/components/bento-showcase";

export default function Home() {
	// Original floating showcase screens (unchanged)
	const floatingScreens = [
		{
			src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
			alt: 'Dashboard Interface',
			className: 'w-[300px] left-[20%] top-[10%] transform -rotate-12',
		},
		{
			src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
			alt: 'Analytics Screen',
			className: 'w-[350px] left-[35%] top-[5%] z-20',
		},
		{
			src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
			alt: 'Documentation Page',
			className: 'w-[300px] right-[20%] top-[10%] transform rotate-12',
		},
		{
			src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
			alt: 'Settings Interface',
			className: 'w-[280px] left-[10%] top-[30%] transform -rotate-6',
		},
		{
			src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
			alt: 'User Profile',
			className: 'w-[280px] right-[10%] top-[30%] transform rotate-6',
		},
	];

	// New grid showcase screens
	const gridScreens = [
		{
			src: '/placeholder.svg?height=300&width=400',
			alt: 'Dashboard Interface',
			title: 'Interactive Dashboard',
		},
		{
			src: '/placeholder.svg?height=300&width=400',
			alt: 'Analytics Screen',
			title: 'Real-time Analytics',
		},
		{
			src: '/placeholder.svg?height=300&width=400',
			alt: 'Documentation Page',
			title: 'Smart Documentation',
		},
		{
			src: '/placeholder.svg?height=300&width=400',
			alt: 'Settings Interface',
			title: 'User Settings',
		},
		{
			src: '/placeholder.svg?height=300&width=400',
			alt: 'User Profile',
			title: 'Profile Management',
		},
		{
			src: '/placeholder.svg?height=300&width=400',
			alt: 'Reports Dashboard',
			title: 'Advanced Reports',
		},
	];

	return (
		<main className="min-h-screen bg-gray-900">
			<FeaturesSectionDemo />
		</main>
	);
}
