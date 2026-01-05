
import { Button } from "@/components/ui/button";
import { CheckSquare, ListTodo, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10"></div>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-24 pb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
            Organize Your Life with Task Master
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A simple, yet powerful tool to manage your daily tasks, boost your
            productivity, and bring clarity to your day.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard" passHref>
              <Button size="lg">
                Start your free trial
              </Button>
            </Link>
            <Link href="/dashboard" passHref>
              <Button size="lg" variant="outline">
                Get Demo
              </Button>
            </Link>
          </div>
          <div className="mt-16 px-8">
            <div className="relative mx-auto w-full max-w-5xl rounded-xl shadow-2xl bg-card/50 p-2 ring-1 ring-inset ring-border/50">
                <Image 
                    src="https://picsum.photos/seed/1/1200/800"
                    alt="Task Master application screenshot"
                    width={1200}
                    height={800}
                    className="rounded-lg"
                    data-ai-hint="app screenshot"
                />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-transparent py-20 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
              All-in-One Task Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md transition-transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-12 w-12 bg-primary/10 text-primary rounded-lg mb-4">
                    <ListTodo className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Tasks</h3>
                <p className="text-muted-foreground">
                  Quickly add new tasks with titles and descriptions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md transition-transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-12 w-12 bg-primary/10 text-primary rounded-lg mb-4">
                    <CheckSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mark as Complete</h3>
                <p className="text-muted-foreground">
                  Track your progress by marking tasks as complete.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md transition-transform hover:-translate-y-2">
                 <div className="flex items-center justify-center h-12 w-12 bg-primary/10 text-primary rounded-lg mb-4">
                    <Edit className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Edit Tasks</h3>
                <p className="text-muted-foreground">
                  Easily update task details whenever you need to.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md transition-transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-12 w-12 bg-primary/10 text-primary rounded-lg mb-4">
                    <Trash2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Delete Tasks</h3>
                <p className="text-muted-foreground">
                  Remove tasks that are no longer needed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center p-6 text-muted-foreground text-sm bg-transparent">
        <p>Focus on what matters. Achieve more with Task Master.</p>
      </footer>
    </div>
  );
}
