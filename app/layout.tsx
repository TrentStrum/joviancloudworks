import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/layout/Footer';
import { NavigationWrapper } from '@/components/layout/NavigationWrapper';
import { QueryProvider } from '@/providers/query-provider';
import { RouteConditionalWrapper } from '@/components/layout/RouteConditionalWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'JovianCloudWorks - Cloud Solutions for the Future',
	description:
		'Transform your business with our cutting-edge cloud solutions. JovianCloudWorks delivers enterprise-grade cloud infrastructure and services.',
};

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
						<main className="flex-grow pt-16">{children}</main>
						<Footer />
						<Toaster />
					</ThemeProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
