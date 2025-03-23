'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function CookieConsent() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem('cookie-consent');
		if (!consent) {
			setIsVisible(true);
		}
	}, []);

	const acceptCookies = () => {
		localStorage.setItem('cookie-consent', 'accepted');
		setIsVisible(false);
	};

	const declineCookies = () => {
		localStorage.setItem('cookie-consent', 'declined');
		setIsVisible(false);
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 100, opacity: 0 }}
					className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-lg z-50"
				>
					<div className="container mx-auto px-4 py-4">
						<div className="flex flex-col md:flex-row items-center justify-between gap-4">
							<div className="text-sm text-muted-foreground">
								We use cookies to enhance your browsing experience and analyze our traffic. By
								clicking &quot;Accept All&quot;, you consent to our use of cookies.
								<Link href="/cookies" className="text-primary hover:underline ml-1">
									Learn more
								</Link>
							</div>
							<div className="flex gap-2">
								<Button variant="outline" onClick={declineCookies}>
									Decline
								</Button>
								<Button onClick={acceptCookies}>Accept All</Button>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
