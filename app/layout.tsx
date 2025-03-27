import './globals.css';
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Providers } from '@/components/providers';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Toaster } from 'sonner';
import { ErrorBoundary } from '@/components/error-boundary';
import { ParticlesBackground } from '@/components/particles-background';

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

const structuredData = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Jovian Cloud Works",
	"url": "https://joviancloudworks.com",
	"logo": "https://joviancloudworks.com/og-image.jpg",
	"description": "Strategic technology solutions for small businesses, combining fractional vCIO services with hands-on development expertise.",
	"sameAs": [
		"https://linkedin.com/company/joviancloudworks"
	]
};

export const metadata: Metadata = {
	metadataBase: new URL('https://joviancloudworks.com'),
	title: {
		default: 'JovianCloudWorks', // Browser tab title
		template: '%s | JovianCloudWorks' // Page title
	},
	description: 'Strategic technology solutions for small businesses. We combine fractional vCIO services with hands-on development expertise to help SMBs leverage big technology without breaking the bank.',
	keywords: ['small business IT', 'fractional vCIO', 'business technology', 'IT solutions', 'workflow automation', 'business dashboards', 'internal tools', 'SMB technology', 'local IT support', 'business technology consulting'],
	authors: [{ name: 'Jovian Cloud Works' }],
	creator: 'Jovian Cloud Works',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://joviancloudworks.com',
		siteName: 'Jovian Cloud Works',
		title: 'Jovian Cloud Works - Strategic Technology Solutions for Small Businesses',
		description: 'Strategic technology solutions for small businesses. We combine fractional vCIO services with hands-on development expertise to help SMBs leverage big technology without breaking the bank.',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Jovian Cloud Works'
			}
		]
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
	},
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover',
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
				<meta name="color-scheme" content="dark" />
				<link rel="icon" href="/favicon.ico" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</head>
			<body className={inter.className}>
				<ErrorBoundary>
					<Providers>
						<div className="relative min-h-screen">
							<ParticlesBackground />
							<div className="relative z-10">
								<Navigation />
								<main id="main-content" className="flex-grow">
									{children}
								</main>
								<Footer />
								<Toaster position="top-right" richColors />
							</div>
						</div>
					</Providers>
				</ErrorBoundary>
			</body>
		</html>
	);
}
