'use client';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';

export default function CookiePolicy() {
	return (
		<Container className="py-16 md:py-24">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="max-w-3xl mx-auto"
			>
				<h1 className="text-4xl md:text-5xl font-bold mb-8 font-space-grotesk">Cookie Policy</h1>

				<div className="prose prose-lg dark:prose-invert max-w-none">
					<p className="text-muted-foreground mb-8">
						Last updated: {new Date().toLocaleDateString()}
					</p>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4">What are cookies?</h2>
						<p>
							Cookies are small text files that are placed on your computer or mobile device when
							you visit our website. They help us provide you with a better experience by
							remembering your preferences and understanding how you use our site.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4">How we use cookies</h2>
						<p>We use cookies for the following purposes:</p>
						<ul className="list-disc pl-6 space-y-2">
							<li>Essential cookies: Required for the website to function properly</li>
							<li>Analytics cookies: Help us understand how visitors interact with our website</li>
							<li>Preference cookies: Remember your settings and preferences</li>
							<li>Marketing cookies: Used to deliver relevant advertisements</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4">Types of cookies we use</h2>
						<div className="space-y-4">
							<div>
								<h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
								<p>
									These cookies are necessary for the website to function and cannot be switched
									off.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
								<p>
									We use analytics cookies to understand how visitors interact with our website.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">Preference Cookies</h3>
								<p>These cookies allow the website to remember choices you make.</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">Marketing Cookies</h3>
								<p>
									These cookies track your online activity to help advertisers deliver more relevant
									advertising.
								</p>
							</div>
						</div>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4">Managing cookies</h2>
						<p>
							You can control and/or delete cookies as you wish. You can delete all cookies that are
							already on your computer and you can set most browsers to prevent them from being
							placed. However, if you do this, you may have to manually adjust some preferences
							every time you visit a site and some services and functionalities may not work.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="text-2xl font-bold mb-4">Contact us</h2>
						<p>
							If you have any questions about our use of cookies, please contact us at{' '}
							<a href="mailto:contact@example.com" className="text-primary hover:underline">
								contact@example.com
							</a>
						</p>
					</section>
				</div>
			</motion.div>
		</Container>
	);
}
