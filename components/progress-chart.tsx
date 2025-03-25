"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    month: "Jan",
    quizzes: 65,
    assignments: 70,
    overall: 68,
  },
  {
    month: "Feb",
    quizzes: 68,
    assignments: 72,
    overall: 70,
  },
  {
    month: "Mar",
    quizzes: 75,
    assignments: 78,
    overall: 76,
  },
  {
    month: "Apr",
    quizzes: 72,
    assignments: 80,
    overall: 75,
  },
  {
    month: "May",
    quizzes: 78,
    assignments: 82,
    overall: 80,
  },
  {
    month: "Jun",
    quizzes: 82,
    assignments: 85,
    overall: 83,
  },
]

export function ProgressChart() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[300px] w-full bg-slate-100 dark:bg-slate-800 animate-pulse rounded-md"></div>
  }

  const isDark = theme === "dark"

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#334155" : "#e2e8f0"} />
        <XAxis dataKey="month" stroke={isDark ? "#94a3b8" : "#64748b"} tickLine={false} axisLine={false} />
        <YAxis
          stroke={isDark ? "#94a3b8" : "#64748b"}
          tickLine={false}
          axisLine={false}
          domain={[0, 100]}
          ticks={[0, 20, 40, 60, 80, 100]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? "#1e293b" : "#ffffff",
            borderColor: isDark ? "#334155" : "#e2e8f0",
            color: isDark ? "#ffffff" : "#0f172a",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="overall"
          name="Overall Progress"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line type="monotone" dataKey="quizzes" name="Quiz Scores" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
        <Line
          type="monotone"
          dataKey="assignments"
          name="Assignment Scores"
          stroke="#8b5cf6"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

