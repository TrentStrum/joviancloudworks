'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Optionally log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
			<div className="max-w-md text-center space-y-6">
				<h2 className="text-3xl font-bold">Something went wrong!</h2>
				<p className="text-muted-foreground">
					We apologize for the inconvenience. Please try again or contact support if the problem
					persists.
				</p>
				<div className="flex gap-4 justify-center">
					<Button onClick={() => reset()} variant="default">
						Try again
					</Button>
					<Button onClick={() => window.location.href = '/'} variant="outline">
						Go to homepage
					</Button>
				</div>
			</div>
		</div>
	);
} 