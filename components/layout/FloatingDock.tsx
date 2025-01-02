"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Home, Github, Instagram, Linkedin, Mail, ArrowUp, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
];

export function FloatingDock() {
  const [mounted, setMounted] = useState(false);
  const [showDock, setShowDock] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 400);
      setShowDock(currentScrollY <= lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Prevent hydration issues
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showDock && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className={cn(
            "fixed left-4 top-1/2 -translate-y-1/2 z-50",
            "hidden md:flex flex-col items-center gap-3",
            "py-4 px-2 rounded-full",
            "bg-background/80 border shadow-lg backdrop-blur-md",
            "transition-all duration-300 ease-in-out",
            "hover:bg-background/90 hover:shadow-xl",
            "dark:bg-background/70 dark:hover:bg-background/80"
          )}
        >
          {showScrollTop && (
            <>
              <Button
                size="icon"
                variant="ghost"
                onClick={scrollToTop}
                className="hover:bg-primary/10 transition-colors relative group"
              >
                <ArrowUp className="h-4 w-4" />
                <span className="absolute left-full ml-2 px-2 py-1 text-xs rounded-md bg-popover text-popover-foreground invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Scroll to Top
                </span>
              </Button>
              <div className="w-6 h-px bg-border rounded-full" />
            </>
          )}

          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Button
              key={href}
              size="icon"
              variant="ghost"
              asChild
              className="hover:bg-primary/10 transition-colors relative group"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
                <span className="absolute left-full ml-2 px-2 py-1 text-xs rounded-md bg-popover text-popover-foreground invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {label}
                </span>
              </a>
            </Button>
          ))}

          <div className="w-6 h-px bg-border rounded-full" />
          
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            className="hover:bg-primary/10 transition-colors relative group"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="absolute left-full ml-2 px-2 py-1 text-xs rounded-md bg-popover text-popover-foreground invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Toggle Theme
            </span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}