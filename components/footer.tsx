'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, Cloud, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
	return (
		<footer className="relative bg-background border-t z-10">
			<Container>
				<div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-16">
					<div className="space-y-4">
						<Link href="/" className="flex items-center space-x-2">
							<Cloud className="w-8 h-8 text-primary" />
							<span className="text-xl font-bold">JovianCloudWorks</span>
						</Link>
						<p className="text-sm text-muted-foreground">
							Local expert in small-business automation and analytics.
						</p>
						<div className="flex space-x-4">
							<a href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
								<Linkedin className="w-5 h-5" />
								<span className="sr-only">LinkedIn</span>
							</a>
							<a href="https://instagram.com" className="text-muted-foreground hover:text-primary">
								<Instagram className="w-5 h-5" />
								<span className="sr-only">Instagram</span>
							</a>
						</div>
					</div>
					<div>
						<h3 className="text-base font-semibold mb-4">Contact Information</h3>
						<ul className="space-y-3 text-sm">
							<li className="flex items-center space-x-2 text-muted-foreground">
								<Mail className="w-4 h-4" />
								<span>contact@joviancloudworks.com</span>
							</li>
							<li className="flex items-center space-x-2 text-muted-foreground">
								<Phone className="w-4 h-4" />
								<span>+1 (626) 235-9057</span>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-base font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="/services" className="text-muted-foreground hover:text-primary">
									Services
								</Link>
							</li>
							<li>
								<Link href="/calculator" className="text-muted-foreground hover:text-primary">
									Project Calculator
								</Link>
							</li>
							<li>
								<Link href="/contact" className="text-muted-foreground hover:text-primary">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-base font-semibold mb-4">Legal</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="/privacy" className="text-muted-foreground hover:text-primary">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="/terms" className="text-muted-foreground hover:text-primary">
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href="/cookies" className="text-muted-foreground hover:text-primary">
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<Separator />

				<div className="py-6 text-center text-sm text-muted-foreground">
					<p>© {new Date().getFullYear()} JovianCloudWorks. All rights reserved.</p>
				</div>
			</Container>
		</footer>
	);
}
