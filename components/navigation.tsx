'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Cloud, Menu, X, Calculator, Layers, User } from 'lucide-react';
import debounce from 'lodash/debounce';
import { usePathname } from 'next/navigation';

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
	const [isTransitioning, setIsTransitioning] = useState(false);
	const pathname = usePathname();

	// Memoize navItems to prevent unnecessary re-renders
	const memoizedNavItems = useMemo(() => navItems, []);

	// Debounced scroll handler
	const handleScroll = useCallback(
		debounce(() => {
			setScrolled(window.scrollY > 20);
		}, 100),
		[]
	);

	useEffect(() => {
		setIsMounted(true);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			handleScroll.cancel(); // Cancel any pending debounced calls
		};
	}, [handleScroll]);

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

	// Handle page transitions
	useEffect(() => {
		if (isTransitioning) {
			const timer = setTimeout(() => {
				setIsTransitioning(false);
				document.body.classList.remove('page-transition');
			}, 300);
			return () => clearTimeout(timer);
		}
	}, [isTransitioning]);

	const handleMenuClick = () => {
		setIsOpen(!isOpen);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Escape') {
			setIsOpen(false);
		}
	};

	const handleLinkClick = () => {
		setIsTransitioning(true);
		setIsOpen(false);
		document.body.classList.add('page-transition');
	};

	if (!isMounted) return null;

	return (
		<>
			{isTransitioning && <div className="loading-indicator" />}
			<nav
				className={`fixed w-full z-50 transition-all duration-300 ${
					scrolled
						? 'bg-background/95 dark:bg-background/95 backdrop-blur-md shadow-lg'
						: 'bg-transparent'
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
							onClick={handleLinkClick}
						>
							<Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-primary dark:text-primary transition-transform group-hover:scale-110" />
							<span className="text-lg sm:text-xl font-bold font-space-grotesk text-foreground dark:text-foreground cosmic-text truncate">
								JovianCloudWorks
							</span>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-4 lg:space-x-8">
							{memoizedNavItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={`flex items-center space-x-1.5 sm:space-x-2 text-sm font-medium transition-colors relative group
										${
											pathname === item.href
												? 'text-primary dark:text-primary'
												: 'text-muted-foreground dark:text-muted-foreground hover:text-primary dark:hover:text-primary'
										}`}
									onClick={handleLinkClick}
									aria-label={item.ariaLabel}
									aria-current={pathname === item.href ? 'page' : undefined}
								>
									<item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
									<span>{item.name}</span>
									<span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-primary dark:bg-primary transition-transform ${
										pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
									}`} />
								</Link>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden p-1.5 sm:p-2 hover:bg-primary/10 dark:hover:bg-primary/10 rounded-lg transition-colors active:scale-95"
							onClick={handleMenuClick}
							onKeyDown={handleKeyDown}
							aria-expanded={isOpen}
							aria-label={isOpen ? 'Close menu' : 'Open menu'}
						>
							<span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
							{isOpen ? (
								<X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground dark:text-foreground" />
							) : (
								<Menu className="w-5 h-5 sm:w-6 sm:h-6 text-foreground dark:text-foreground" />
							)}
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
								className="fixed top-0 left-0 right-0 bottom-0 min-h-screen bg-background/95 dark:bg-background/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-4 sm:gap-6 md:hidden overflow-y-auto"
								role="dialog"
								aria-modal="true"
								aria-label="Mobile navigation menu"
							>
								{/* Close Button */}
								<button
									className="absolute top-4 right-4 p-2 hover:bg-primary/10 dark:hover:bg-primary/10 rounded-lg transition-colors active:scale-95"
									onClick={handleMenuClick}
									onKeyDown={handleKeyDown}
									aria-label="Close menu"
								>
									<X className="w-6 h-6 text-foreground dark:text-foreground" />
								</button>

								<div className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full max-w-[280px] sm:max-w-xs px-4">
									{memoizedNavItems.map((item, index) => (
										<motion.div
											key={item.name}
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: index * 0.1 }}
											className="w-full"
										>
											<Link
												href={item.href}
												className={`flex items-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-xl transition-colors active:scale-95
													${
														pathname === item.href
															? 'text-primary dark:text-primary bg-primary/10'
														: 'text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary hover:bg-primary/10'
													}`}
												onClick={handleLinkClick}
												aria-label={item.ariaLabel}
												aria-current={pathname === item.href ? 'page' : undefined}
											>
												<item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
												<span>{item.name}</span>
											</Link>
										</motion.div>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</Container>
			</nav>
		</>
	);
}
