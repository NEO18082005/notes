import React from 'react';
import Link from 'next/link';
import { CheckSquare } from 'lucide-react';
import ThemeToggle from './theme-toggle';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <CheckSquare className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold font-headline text-lg">Task Master</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button variant="ghost" asChild>
                <Link href="/dashboard">Dashboard</Link>
            </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
