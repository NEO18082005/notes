"use client";

import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

import type { Task } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/header';
import TaskList from '@/components/task-list';
import { TaskDialog } from '@/components/task-form';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Failed to parse tasks from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isMounted]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
    };
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const updateTask = (id: string, title: string, description:string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, title, description } : task
      )
    );
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };
  
  if (!isMounted) {
    // Render a skeleton or null to avoid hydration mismatch and layout shift
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <div className="sticky top-0 z-50 w-full border-b bg-background/95 h-14"></div>
          <main className="flex-grow container mx-auto p-4 md:p-8">
            <div className="flex justify-between items-center mb-6">
                <div className="h-9 w-36 bg-muted-foreground/20 rounded-md animate-pulse"></div>
                <div className="h-10 w-28 bg-muted-foreground/20 rounded-md animate-pulse"></div>
            </div>
            <div className="border rounded-lg">
                <div className="p-0">
                    <div className="h-48 bg-muted/10 rounded-lg animate-pulse"></div>
                </div>
            </div>
          </main>
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold font-headline">My Tasks</h1>
          <TaskDialog onSave={addTask}>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Task
            </Button>
          </TaskDialog>
        </div>
        <Card className="shadow-md">
          <CardContent className="p-0">
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onToggleComplete={toggleTaskCompletion}
                onDelete={deleteTask}
                onUpdate={updateTask}
              />
            ) : (
              <div className="text-center p-16 text-muted-foreground">
                <p className="text-lg font-medium">You have no tasks!</p>
                <p className="mt-2">Click "Add Task" to get started.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-sm">
        <p>Welcome to Task Master. Your focus, simplified.</p>
      </footer>
    </div>
  );
}
