import React from 'react';
import type { Task } from '@/lib/types';
import TaskItem from './task-item';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string, description: string) => void;
}

export default function TaskList({ tasks, onToggleComplete, onDelete, onUpdate }: TaskListProps) {
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <div className="divide-y divide-border">
      {sortedTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
