import './globals.css';
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Providers } from '@/components/providers';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
	title: 'JovianCloudWorks - Enterprise Cloud Solutions',
	description:
		'Launch your business into the future with enterprise cloud solutions engineered for the digital age.',
	keywords: 'cloud computing, enterprise solutions, data storage, security, infrastructure',
	openGraph: {
		title: 'JovianCloudWorks - Enterprise Cloud Solutions',
		description:
			'Launch your business into the future with enterprise cloud solutions engineered for the digital age.',
		type: 'website',
		locale: 'en_US',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'JovianCloudWorks - Enterprise Cloud Solutions',
		description:
			'Launch your business into the future with enterprise cloud solutions engineered for the digital age.',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}
		>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
				<meta name="theme-color" content="#000000" />
				<meta name="color-scheme" content="dark light" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className={inter.className}>
				<Providers>
					<Navigation />
					<main id="main-content" className="flex-grow">
						{children}
					</main>
					<Footer />
					<div
						aria-hidden="true"
						className="fixed inset-0 pointer-events-none bg-gradient-to-b from-background/0 via-background/80 to-background/40 -z-10"
					/>
				</Providers>
			</body>
		</html>
	);
}
