import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface SubjectProgressCardProps {
  subject: string
  progress: number
  color: string
  icon: React.ReactNode
}

export function SubjectProgressCard({ subject, progress, color, icon }: SubjectProgressCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{subject}</CardTitle>
        <div className={`rounded-full p-1 ${color}`}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{progress}%</div>
        <Progress value={progress} className="h-2 mt-2" />
        <p className="text-xs text-muted-foreground mt-2">
          {progress < 30
            ? "Just getting started"
            : progress < 60
              ? "Making good progress"
              : progress < 90
                ? "Almost there"
                : "Mastered"}
        </p>
      </CardContent>
    </Card>
  )
}

