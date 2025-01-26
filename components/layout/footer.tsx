'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

const quickLinks = [
	{ label: 'Privacy', href: '/privacy' },
	{ label: 'Terms', href: '/terms' },
];

export function Footer() {
	return (
		<footer className="border-t bg-background/80 backdrop-blur-sm">
			<div className="container mx-auto px-4 py-4">
				{/* Social Media Icons */}
				{/* <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Button
              key={href}
              variant="ghost"
              size="lg"
              asChild
              className="hover:scale-110 transition-transform relative after:absolute after:inset-0 after:border-2 after:border-transparent hover:after:border-primary/50 after:rounded-md after:transition-all after:duration-300"
            >
              <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            </Button>
          ))}
        </div> */}

				{/* Quick Links */}
				<div className="flex justify-center flex-wrap gap-8 mb-4">
					{quickLinks.map(({ label, href }) => (
						<Button
							key={href}
							variant="ghost"
							asChild
							className="relative after:absolute after:inset-0 after:border-2 after:border-transparent hover:after:border-primary/50 after:rounded-md after:transition-all after:duration-300"
						>
							<Link href={href}>{label}</Link>
						</Button>
					))}
				</div>

				{/* Copyright */}
				<div className="text-center text-sm text-muted-foreground">
					<p>© {new Date().getFullYear()} JovianCloudWorks. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
