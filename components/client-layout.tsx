'use client';

export function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
			>
				Skip to main content
			</a>
			<main id="main-content" className="flex-grow">
				{children}
			</main>
		</>
	);
}
