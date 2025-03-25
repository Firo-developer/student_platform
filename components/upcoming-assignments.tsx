import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function UpcomingAssignments() {
  const assignments = [
    {
      id: 1,
      title: "Math Assignment",
      subject: "Mathematics",
      dueDate: "In 2 days",
      difficulty: "Medium",
    },
    {
      id: 2,
      title: "Science Lab Report",
      subject: "Science",
      dueDate: "In 3 days",
      difficulty: "Hard",
    },
    {
      id: 3,
      title: "English Essay",
      subject: "English",
      dueDate: "In 5 days",
      difficulty: "Medium",
    },
  ]

  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <div key={assignment.id} className="flex flex-col space-y-2 pb-4 border-b last:border-0">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">{assignment.title}</h4>
            <Badge
              variant={
                assignment.difficulty === "Easy"
                  ? "outline"
                  : assignment.difficulty === "Medium"
                    ? "secondary"
                    : "destructive"
              }
            >
              {assignment.difficulty}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{assignment.subject}</p>
            <p className="text-sm font-medium">{assignment.dueDate}</p>
          </div>
          <div className="flex justify-end">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/assignments/${assignment.id}`}>
                Start <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full" asChild>
        <Link href="/assignments">View All Assignments</Link>
      </Button>
    </div>
  )
}

