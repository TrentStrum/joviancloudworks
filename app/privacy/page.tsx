'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { ParticlesBackground } from '@/components/particles-background';

export default function PrivacyPolicy() {
	return (
		<main className="min-h-screen pt-24 pb-16">
			<ParticlesBackground />
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

					<div className="space-y-8 text-muted-foreground">
						<section>
							<h2 className="text-2xl font-semibold mb-4 text-foreground">
								1. Information Collection
							</h2>
							<p className="mb-4">
								We collect information that you provide directly to us, including:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Contact information (name, email, phone number)</li>
								<li>Account credentials</li>
								<li>Payment information</li>
								<li>Usage data and preferences</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4 text-foreground">2. Use of Information</h2>
							<p className="mb-4">We use the collected information to:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Provide and maintain our services</li>
								<li>Process your transactions</li>
								<li>Send you technical notices and support messages</li>
								<li>Communicate with you about products, services, and events</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4 text-foreground">3. Data Protection</h2>
							<p className="mb-4">
								We implement appropriate technical and organizational security measures to protect
								your personal data against accidental or unlawful destruction, loss, alteration, and
								unauthorized disclosure or access.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Sharing</h2>
							<p className="mb-4">
								We do not sell your personal information. We may share your information with:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Service providers who assist in our operations</li>
								<li>Professional advisers</li>
								<li>Law enforcement when required by law</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4 text-foreground">5. Your Rights</h2>
							<p className="mb-4">You have the right to:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Access your personal data</li>
								<li>Correct inaccurate data</li>
								<li>Request deletion of your data</li>
								<li>Object to data processing</li>
								<li>Data portability</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4 text-foreground">6. Contact Us</h2>
							<p>
								If you have any questions about this Privacy Policy, please contact us at:
								<br />
								Email: privacy@joviancloudworks.com
							</p>
						</section>
					</div>
				</motion.div>
			</Container>
		</main>
	);
}
