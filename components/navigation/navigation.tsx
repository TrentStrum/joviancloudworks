"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Home, Rocket, Mail, BookOpen } from 'lucide-react';

const routes = [
  {
    href: '/',
    label: 'Home',
    icon: Home
  },
  {
    href: '/portfolio',
    label: 'Portfolio',
    icon: Rocket
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: BookOpen
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: Mail
  }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl gradient-text">
            Jovian CloudWorks
          </Link>
          
          <div className="flex gap-2">
            {routes.map(({ href, label, icon: Icon }) => (
              <Button
                key={href}
                variant={pathname === href ? "default" : "ghost"}
                asChild
                className={cn(
                  "transition-all hover:scale-105",
                  pathname === href && "bg-space-blue hover:bg-space-blue/90",
                  "relative after:absolute after:inset-0 after:border-2 after:border-transparent hover:after:border-primary/50 after:rounded-md after:transition-all after:duration-300"
                )}
              >
                <Link href={href}>
                  <Icon className="h-4 w-4 mr-2" />
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}