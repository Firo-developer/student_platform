"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Edit, Trash2 } from "lucide-react"
import { useTheme } from "next-themes"

interface Task {
  id: number
  title: string
  description: string
  dueDate: string
  priority: "high" | "medium" | "low"
  completed: boolean
  subject: string
}

export function TaskList() {
  const { theme } = useTheme()
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Complete Math Assignment",
      description: "Finish algebra problems 1-20",
      dueDate: "2023-05-15",
      priority: "high",
      completed: false,
      subject: "Mathematics",
    },
    {
      id: 2,
      title: "Study for Science Quiz",
      description: "Review chapters 5-7 on chemical reactions",
      dueDate: "2023-05-18",
      priority: "medium",
      completed: false,
      subject: "Science",
    },
    {
      id: 3,
      title: "Write English Essay",
      description: "1000 word essay on modern literature",
      dueDate: "2023-05-20",
      priority: "medium",
      completed: false,
      subject: "English",
    },
    {
      id: 4,
      title: "Review History Notes",
      description: "Prepare for upcoming test on World War II",
      dueDate: "2023-05-22",
      priority: "low",
      completed: false,
      subject: "History",
    },
    {
      id: 5,
      title: "Complete Programming Exercise",
      description: "Finish the JavaScript coding challenge",
      dueDate: "2023-05-12",
      priority: "high",
      completed: true,
      subject: "Computer Science",
    },
  ])

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return theme === "dark"
          ? "text-red-400 bg-red-900/20 border-red-800/30"
          : "text-red-600 bg-red-100 border-red-200"
      case "medium":
        return theme === "dark"
          ? "text-amber-400 bg-amber-900/20 border-amber-800/30"
          : "text-amber-600 bg-amber-100 border-amber-200"
      case "low":
        return theme === "dark"
          ? "text-green-400 bg-green-900/20 border-green-800/30"
          : "text-green-600 bg-green-100 border-green-200"
      default:
        return ""
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
          >
            All
          </Button>
          <Button variant="outline" size="sm">
            Active
          </Button>
          <Button variant="outline" size="sm">
            Completed
          </Button>
        </div>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
          Add Task
        </Button>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-start gap-4 p-4 border rounded-lg ${
              task.completed
                ? theme === "dark"
                  ? "bg-slate-800/50"
                  : "bg-slate-50"
                : theme === "dark"
                  ? "bg-transparent"
                  : "bg-white"
            }`}
          >
            <Checkbox checked={task.completed} onCheckedChange={() => toggleTaskCompletion(task.id)} className="mt-1" />
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                  {task.title}
                </h3>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getPriorityColor(task.priority)}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={
                      theme === "dark"
                        ? "bg-slate-800 text-slate-300 border-slate-700"
                        : "bg-slate-100 text-slate-700 border-slate-200"
                    }
                  >
                    {task.subject}
                  </Badge>
                </div>
              </div>
              <p
                className={`text-sm mt-1 ${task.completed ? "line-through text-muted-foreground" : "text-muted-foreground"}`}
              >
                {task.description}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDate(task.dueDate)}
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {new Date(task.dueDate) < new Date() ? "Overdue" : "Upcoming"}
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Edit className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

