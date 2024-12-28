"use client"

import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
];

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Admin', href: '/admin/login', icon: Lock }
];

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-12">
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
        </div>

        {/* Quick Links */}
        <div className="flex justify-center flex-wrap gap-8 mb-12">
          {quickLinks.map(({ label, href, icon: Icon }) => (
            <Button
              key={href}
              variant="ghost"
              asChild
              className="relative after:absolute after:inset-0 after:border-2 after:border-transparent hover:after:border-primary/50 after:rounded-md after:transition-all after:duration-300"
            >
              <Link href={href}>
                {Icon && <Icon className="h-4 w-4 mr-2" />}
                {label}
              </Link>
            </Button>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Jovian CloudWorks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}