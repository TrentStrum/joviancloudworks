'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Cloud, Menu, X, Calculator, Layers, User } from 'lucide-react';

const navItems = [
	{
		name: 'Services',
		href: '/services',
		icon: Layers,
		ariaLabel: 'View all services',
	},
	{
		name: 'About Us',
		href: '/about',
		icon: User,
		ariaLabel: 'Learn about us',
	},
	{
		name: 'Project Calculator',
		href: '/calculator',
		icon: Calculator,
		ariaLabel: 'Calculate service costs',
	},
];

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	const handleMenuClick = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	if (!isMounted) return null;

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
			}`}
			role="navigation"
			aria-label="Main navigation"
		>
			<Container>
				<div className="flex items-center justify-between h-16 md:h-20">
					<Link
						href="/"
						className="flex items-center space-x-2 group"
						aria-label="JovianCloudWorks Home"
					>
						<Cloud className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
						<span className="text-xl font-bold font-space-grotesk cosmic-text">
							JovianCloudWorks
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
								aria-label={item.ariaLabel}
							>
								<item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
								<span>{item.name}</span>
								<span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors active:scale-95"
						onClick={handleMenuClick}
						aria-expanded={isOpen}
						aria-label={isOpen ? 'Close menu' : 'Open menu'}
					>
						<span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-6 md:hidden"
							role="dialog"
							aria-modal="true"
							aria-label="Mobile navigation menu"
						>
							{/* Close Button */}
							<button
								className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded-lg transition-colors active:scale-95"
								onClick={handleMenuClick}
								aria-label="Close menu"
							>
								<X className="w-6 h-6" />
							</button>

							{navItems.map((item, index) => (
								<motion.div
									key={item.name}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									className="w-full max-w-xs"
								>
									<Link
										href={item.href}
										className="flex items-center space-x-3 px-6 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-colors active:scale-95"
										onClick={handleLinkClick}
										aria-label={item.ariaLabel}
									>
										<item.icon className="w-5 h-5" />
										<span>{item.name}</span>
									</Link>
								</motion.div>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</Container>
		</nav>
	);
}
