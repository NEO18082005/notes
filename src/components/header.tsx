"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CheckSquare, ChevronRight, LogOut } from 'lucide-react';
import ThemeToggle from './theme-toggle';
import { Button } from './ui/button';
import { useAuth, useUser } from '@/firebase';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isDashboard = pathname === '/dashboard';
  const { user } = useUser();
  const auth = useAuth();

  const handleSignOut = async () => {
    if (auth) {
      await auth.signOut();
      router.push('/auth/sign-in');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <CheckSquare className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold font-headline text-lg">Task Master</span>
          </Link>
          {isDashboard && (
            <div className="flex items-center ml-2">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="font-semibold text-lg text-foreground ml-1">Dashboard</span>
            </div>
          )}
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {!user && (
            <Link href="/auth/sign-up">
              <Button>
                Get Started
              </Button>
            </Link>
          )}
          {user && (
             <Button variant="ghost" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
