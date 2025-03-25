"use client"

import { useTheme } from "next-themes"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useState, useEffect } from "react"

const data = [
  {
    name: "Mon",
    quizzes: 4,
    assignments: 2,
    aiTutor: 3,
  },
  {
    name: "Tue",
    quizzes: 3,
    assignments: 1,
    aiTutor: 5,
  },
  {
    name: "Wed",
    quizzes: 5,
    assignments: 3,
    aiTutor: 2,
  },
  {
    name: "Thu",
    quizzes: 2,
    assignments: 4,
    aiTutor: 4,
  },
  {
    name: "Fri",
    quizzes: 6,
    assignments: 2,
    aiTutor: 3,
  },
  {
    name: "Sat",
    quizzes: 3,
    assignments: 0,
    aiTutor: 1,
  },
  {
    name: "Sun",
    quizzes: 1,
    assignments: 1,
    aiTutor: 2,
  },
]

export function DashboardChart() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[300px] w-full bg-slate-100 dark:bg-slate-800 animate-pulse rounded-md"></div>
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#334155" : "#e2e8f0"} />
        <XAxis dataKey="name" stroke={theme === "dark" ? "#94a3b8" : "#64748b"} tickLine={false} axisLine={false} />
        <YAxis stroke={theme === "dark" ? "#94a3b8" : "#64748b"} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
            borderColor: theme === "dark" ? "#334155" : "#e2e8f0",
            color: theme === "dark" ? "#ffffff" : "#0f172a",
          }}
        />
        <Legend />
        <Bar dataKey="quizzes" name="Quizzes" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="assignments" name="Assignments" fill="#10b981" radius={[4, 4, 0, 0]} />
        <Bar dataKey="aiTutor" name="AI Tutor" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

