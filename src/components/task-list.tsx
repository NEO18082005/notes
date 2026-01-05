import React from 'react';
import type { Task } from '@/lib/types';
import TaskItem from './task-item';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string, description: string) => void;
}

export default function TaskList({
  tasks,
  onToggleComplete,
  onDelete,
  onUpdate,
}: TaskListProps) {
  // Firestore's real-time updates should provide sorted data if needed,
  // but client-side sorting can still be useful for presentation logic.
  const sortedTasks = [...tasks].sort((a, b) => {
    // This sorting logic is now more for presentation if you fetch completed/incompleted separately
    // or if you want to sort by another field like a timestamp.
    if (a.isCompleted === b.isCompleted) return 0;
    return a.isCompleted ? 1 : -1;
  });

  return (
    <div className="divide-y divide-border">
      {tasks.map(task => (
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
