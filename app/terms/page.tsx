'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { ParticlesBackground } from '@/components/particles-background';

export default function TermsOfService() {
	return (
		<main className="min-h-screen pt-24 pb-16">
			<ParticlesBackground />
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

					<div className="space-y-8 text-muted-foreground">
						<section>
							<h2 className="text-2xl font-semibold mb-4 text-foreground">
								1. Acceptance of Terms
							</h2>
							<p>
								By accessing and using JovianCloudWorks services, you agree to be bound by these
								Terms of Service and all applicable laws and regulations. If you do not agree with
								any of these terms, you are prohibited from using our services.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4 text-foreground">2. Use License</h2>
							<p className="mb-4">
								Permission is granted to temporarily access our services for personal,
								non-commercial transitory viewing only. This is the grant of a license, not a
								transfer of title, and under this license you may not:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Modify or copy the materials</li>
								<li>Use the materials for any commercial purpose</li>
								<li>Transfer the materials to another person</li>
								<li>Attempt to decompile or reverse engineer any software</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4 text-foreground">
								3. Service Level Agreement
							</h2>
							<p className="mb-4">
								We strive to maintain a 99.9% uptime for our services. In the event of service
								interruption:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>We will notify users of scheduled maintenance</li>
								<li>Provide status updates during outages</li>
								<li>Compensate according to our SLA terms</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4 text-foreground">
								4. User Responsibilities
							</h2>
							<p className="mb-4">Users are responsible for:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Maintaining account security</li>
								<li>Complying with data protection laws</li>
								<li>Using services in accordance with acceptable use policies</li>
								<li>Reporting security incidents promptly</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4 text-foreground">
								5. Limitation of Liability
							</h2>
							<p>
								JovianCloudWorks shall not be liable for any indirect, incidental, special,
								consequential or punitive damages, including without limitation, loss of profits,
								data, use, goodwill, or other intangible losses.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4 text-foreground">6. Governing Law</h2>
							<p>
								These terms shall be governed by and construed in accordance with the laws of the
								State of California, without regard to its conflict of law provisions.
							</p>
						</section>
					</div>
				</motion.div>
			</Container>
		</main>
	);
}
