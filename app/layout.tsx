import './globals.css';
import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import { NavigationWrapper } from '@/components/layout/NavigationWrapper';
import { RouteConditionalWrapper } from '@/components/layout/RouteConditionalWrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { QueryProvider } from '@/providers/query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://joviancloudworks.io'),
	title: 'JovianCloudWorks - Saas Solutions for the Future',
	description:
		'Transform your business with our cutting-edge saas solutions. JovianCloudWorks delivers enterprise-grade saas infrastructure and services.',
	openGraph: {
		title: 'JovianCloudWorks',
		description: 'Enterprise-grade saas infrastructure and services',
		url: 'https://joviancloudworks.io',
		siteName: 'JovianCloudWorks',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
};

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<QueryProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<NavigationWrapper />
						<RouteConditionalWrapper />
						<div className="star-field" />
						<main className="flex-grow">{children}</main>
						<Footer />
						<Toaster />
					</ThemeProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
