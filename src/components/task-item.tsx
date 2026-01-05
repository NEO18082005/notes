"use client";

import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

import type { Task } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { TaskDialog } from './task-form';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string, description: string) => void;
}

export default function TaskItem({ task, onToggleComplete, onDelete, onUpdate }: TaskItemProps) {
  return (
    <div
      className={cn(
        "flex items-center p-4 transition-all duration-200 ease-in-out transform hover:scale-[1.02] hover:shadow-lg group",
        task.completed ? "bg-muted/50 hover:bg-muted" : "bg-card hover:bg-card/90"
      )}
    >
      <Checkbox
        id={`task-${task.id}`}
        checked={task.completed}
        onCheckedChange={() => onToggleComplete(task.id)}
        aria-label={`Mark ${task.title} as ${task.completed ? 'incomplete' : 'complete'}`}
        className="mr-4 h-5 w-5"
      />
      <div className="flex-grow">
        <label
          htmlFor={`task-${task.id}`}
          className={cn(
            "font-medium cursor-pointer transition-colors",
            task.completed && "line-through text-muted-foreground"
          )}
        >
          {task.title}
        </label>
        {task.description && (
          <p className={cn(
            "text-sm text-muted-foreground transition-colors",
            task.completed && "line-through"
          )}>
            {task.description}
          </p>
        )}
      </div>
      <div className="flex items-center space-x-1 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <TaskDialog task={task} onSave={(title, description) => onUpdate(task.id, title, description)}>
                  <Button variant="ghost" size="icon" aria-label={`Edit task ${task.title}`}>
                    <Pencil className="h-4 w-4" />
                  </Button>
              </TaskDialog>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit Task</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" aria-label={`Delete task ${task.title}`}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your task
                        "{task.title}".
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => onDelete(task.id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete Task</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
