'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
	return (
		<main className="flex flex-col gap-32 pb-32">
			{/* Hero Section */}
			<section className="relative pt-32">
				<Container className="relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto text-center"
					>
						<h1 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">
							Helping Small Businesses Leverage Big Technology
						</h1>
						<div className="space-y-6 text-xl">
							<p className="font-semibold">
								Hi, I&apos;m <span className="text-primary">Trent</span> — founder of{' '}
								<span className="text-primary underline decoration-primary/30 underline-offset-4">
									JovianCloudWorks
								</span>
								.
							</p>
							<p className="text-muted-foreground">
								After 10 years working as a{' '}
								<span className="text-primary font-medium">business analyst</span>,{' '}
								<span className="text-primary font-medium">project manager</span>, and{' '}
								<span className="text-primary font-medium">data specialist</span>, I realized that
								small businesses are often stuck between two extremes:
							</p>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className="flex flex-col md:flex-row items-center gap-4 text-lg"
							>
								<motion.div className="flex-1 text-center">
									<p className="text-muted-foreground/80 italic">
										{'DIY solutions that don\'t scale'.split(' ').map((word, i) => (
											<motion.span
												key={i}
												initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
												animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
												transition={{
													duration: 0.5,
													delay: 0.4 + i * 0.1,
													ease: 'easeOut',
												}}
												className="inline-block mr-1"
											>
												{word}
											</motion.span>
										))}
									</p>
								</motion.div>
								<motion.div
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.5, delay: 1.2 }}
									className="h-px md:h-8 md:w-px bg-border w-1/2 md:mx-4"
								></motion.div>
								<motion.div className="flex-1 text-center">
									<p className="text-muted-foreground/80 italic">
										{'Enterprise solutions that break the bank'.split(' ').map((word, i) => (
											<motion.span
												key={i}
												initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
												animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
												transition={{
													duration: 0.5,
													delay: 1.4 + i * 0.1,
													ease: 'easeOut',
												}}
												className="inline-block mr-1"
											>
												{word}
											</motion.span>
										))}
									</p>
								</motion.div>
							</motion.div>
							<p className="text-muted-foreground">
								That&apos;s where I come in.{' '}
								<span className="text-primary font-semibold">JovianCloudWorks</span> was built to
								give solo entrepreneurs and local businesses access to real tech support — without
								the overhead.
							</p>
							<div className="flex items-center justify-center gap-2 text-muted-foreground/80">
								<MapPin className="w-5 h-5 text-primary" />
								<p className="text-base">
									Serving SMBs in Alhambra, Monterey Park, Pasadena, Altadena, San Gabriel, and San
									Marino
								</p>
							</div>
						</div>
					</motion.div>
				</Container>
			</section>

			{/* Why Choose Us Section */}
			<section className="relative">
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto"
					>
						<h2 className="text-3xl font-bold mb-8 font-space-grotesk">I combine:</h2>
						<div className="space-y-6">
							<div className="flex gap-4">
								<CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Strategic Planning & Execution Leadership
									</h3>
									<div className="space-y-3">
										<p className="text-muted-foreground">
											Acting as your{' '}
											<span className="text-primary/90 font-medium">fractional vCIO</span>, I work
											with you to define the right technology goals for your business and turn them
											into actionable, prioritized roadmaps.
										</p>
										<p className="text-muted-foreground">
											I oversee the entire lifecycle — from selecting the right tools to
											coordinating timelines and managing collaborators — so your digital projects{' '}
											<span className="italic">
												stay aligned with your business vision and actually get delivered
											</span>
											.
										</p>
									</div>
								</div>
							</div>
							<div className="flex gap-4">
								<CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
								<div>
									<h3 className="text-xl font-semibold mb-2">Hands-on Development</h3>
									<div className="space-y-3">
										<p className="text-muted-foreground">
											Because I&apos;m not just managing the project —{' '}
											<span className="text-primary/90 font-medium">I&apos;m building it</span> — we
											skip the costly handoffs and delays that come with hiring separate developers.
										</p>
										<p className="text-muted-foreground">
											I handle the technical work myself, whether it&apos;s:
										</p>
										<ul className="list-none space-y-1 pl-4 text-muted-foreground">
											<li>• Automating workflows</li>
											<li>• Creating dashboards</li>
											<li>• Building internal tools</li>
										</ul>
										<p className="text-muted-foreground italic">
											This means you get high-impact results faster and more affordably.
										</p>
									</div>
								</div>
							</div>
							<div className="flex gap-4">
								<CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
								<div>
									<h3 className="text-xl font-semibold mb-2">End-to-End IT Solutions</h3>
									<div className="space-y-3">
										<p className="text-muted-foreground">
											With a background in IT and firsthand experience working with small
											businesses, I understand what it takes to deliver{' '}
											<span className="text-primary/90 font-medium">
												practical, cost-conscious solutions
											</span>
											.
										</p>
										<p className="text-muted-foreground">
											By serving as both your tech strategist and developer, I provide a single
											point of contact for everything from planning and execution to ongoing
											support.
										</p>
										<p className="text-muted-foreground italic">
											The result? Seamless, vendor-free delivery that actually fits your business.
										</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</Container>
			</section>
		</main>
	);
}
