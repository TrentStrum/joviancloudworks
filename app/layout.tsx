import './globals.css';

import { Footer } from '@/components/layout/footer';
import { NavigationWrapper } from '@/components/layout/NavigationWrapper';
import { RouteConditionalWrapper } from '@/components/layout/RouteConditionalWrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
	title: 'JovianCloudWorks - Saas Solutions for the Future',
	description: 'Transform your business with our cutting-edge saas solutions.',
	metadataBase: new URL('https://joviancloudworks.io'),
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<>

			<html lang="en" suppressHydrationWarning>
				<body className="flex flex-col min-h-screen">
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
				</body>
			</html>
		</>
	);
}
