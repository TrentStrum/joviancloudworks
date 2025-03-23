'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';

export function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem={true}
			disableTransitionOnChange
		>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
			>
				Skip to main content
			</a>
			<Navigation />
			<main id="main-content" className="flex-grow">
				{children}
			</main>
		</ThemeProvider>
	);
}
