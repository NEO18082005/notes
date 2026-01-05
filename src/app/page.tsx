
import { Button } from "@/components/ui/button";
import { CheckSquare, ListTodo, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
            Organize Your Life with Task Master
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A simple, yet powerful tool to manage your daily tasks, boost your
            productivity, and bring clarity to your day.
          </p>
          <Link href="/dashboard" passHref>
            <Button size="lg">
              Get Started
            </Button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="bg-muted/50 py-20 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
                <ListTodo className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Create Tasks</h3>
                <p className="text-muted-foreground">
                  Quickly add new tasks with titles and descriptions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
                <CheckSquare className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mark as Complete</h3>
                <p className="text-muted-foreground">
                  Track your progress by marking tasks as complete.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
                <Edit className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Edit Tasks</h3>
                <p className="text-muted-foreground">
                  Easily update task details whenever you need to.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
                <Trash2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Delete Tasks</h3>
                <p className="text-muted-foreground">
                  Remove tasks that are no longer needed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center p-4 text-muted-foreground text-sm">
        <p>Focus on what matters. Achieve more with Task Master.</p>
      </footer>
    </div>
  );
}
