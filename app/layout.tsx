import './globals.css';
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Providers } from '@/components/providers';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Toaster } from 'sonner';

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
	title: {
		default: 'Jovian Cloud Works | Enterprise Cloud Solutions',
		template: '%s | Jovian Cloud Works'
	},
	description: 'Enterprise-grade cloud infrastructure, security, and storage solutions. Scalable, secure, and reliable cloud services for modern businesses.',
	keywords: ['cloud computing', 'enterprise cloud', 'cloud security', 'cloud storage', 'cloud infrastructure', 'managed cloud services'],
	authors: [{ name: 'Jovian Cloud Works' }],
	creator: 'Jovian Cloud Works',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://joviancloudworks.com',
		siteName: 'Jovian Cloud Works',
		title: 'Jovian Cloud Works | Enterprise Cloud Solutions',
		description: 'Enterprise-grade cloud infrastructure, security, and storage solutions.',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Jovian Cloud Works'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Jovian Cloud Works | Enterprise Cloud Solutions',
		description: 'Enterprise-grade cloud infrastructure, security, and storage solutions.',
		images: ['/og-image.jpg']
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code', // Add your Google verification code
	}
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
					<Toaster position="top-right" richColors />
					<div
						aria-hidden="true"
						className="fixed inset-0 pointer-events-none bg-gradient-to-b from-background/0 via-background/80 to-background/40 -z-10"
					/>
				</Providers>
			</body>
		</html>
	);
}
