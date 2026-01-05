"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CheckSquare, ChevronRight } from 'lucide-react';
import ThemeToggle from './theme-toggle';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <CheckSquare className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold font-headline text-lg">Task Master</span>
          </Link>
          {isDashboard && (
            <div className="flex items-center">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="font-semibold text-lg text-foreground">Dashboard</span>
            </div>
          )}
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {!isDashboard && (
            <Link href="/dashboard">
              <Button>
                Get Started
              </Button>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
