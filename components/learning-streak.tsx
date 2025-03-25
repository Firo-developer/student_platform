import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

export function LearningStreak() {
  const currentStreak = 12
  const longestStreak = 21
  const daysThisMonth = 18

  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Streak</CardTitle>
        <CardDescription>Your consistent learning progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <CalendarIcon className="h-5 w-5 text-primary" />
          <span className="text-xl font-bold">{currentStreak} days</span>
          <span className="text-sm text-muted-foreground">current streak</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Longest streak</span>
            <span className="font-medium">{longestStreak} days</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Days studied this month</span>
            <span className="font-medium">{daysThisMonth} days</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-sm ${
                i < daysThisMonth ? (i < currentStreak ? "bg-primary" : "bg-primary/60") : "bg-muted"
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

