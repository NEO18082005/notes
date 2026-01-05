
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, LayoutGrid, Rows3 } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/header';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-foreground mb-6">
              Organize your work and life, finally.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Become focused, organized, and calm with Task Master. The simple and effective task manager and to-do list app.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="h-12 text-lg px-8">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        <section id="features" className="bg-muted/50 py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Everything you need to get organized</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Task Master provides a simple yet powerful way to manage your tasks and stay productive.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    <div className="bg-card p-8 rounded-lg text-center border transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-4">
                            <Zap className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Simple & Fast</h3>
                        <p className="text-muted-foreground">A clean, intuitive interface that lets you add and manage tasks in seconds. No clutter, just focus.</p>
                    </div>
                    <div className="bg-card p-8 rounded-lg text-center border transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-4">
                            <LayoutGrid className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Organize Your Way</h3>
                        <p className="text-muted-foreground">Separate your tasks into "To-do" and "Completed" lists to easily track your progress and stay organized.</p>
                    </div>
                    <div className="bg-card p-8 rounded-lg text-center border transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-4">
                            <CheckCircle className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Track Completion</h3>
                        <p className="text-muted-foreground">Mark tasks as complete with a single click and move them to your completed list, giving you a sense of accomplishment.</p>
                    </div>
                    <div className="bg-card p-8 rounded-lg text-center border transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                        <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-4">
                            <Rows3 className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Toggle Details</h3>
                        <p className="text-muted-foreground">Easily expand or collapse task descriptions to keep your view clean and focused on what matters most.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Task Master. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
