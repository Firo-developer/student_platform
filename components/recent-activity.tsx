import { BookOpen, CheckCircle, MessageSquare, Trophy } from "lucide-react"

interface RecentActivityProps {
  extended?: boolean
}

export function RecentActivity({ extended = false }: RecentActivityProps) {
  const activities = [
    {
      id: 1,
      type: "quiz",
      title: "Completed Math Quiz",
      description: "Scored 85% on Algebra Quiz",
      icon: CheckCircle,
      iconColor: "text-green-500",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "assignment",
      title: "Submitted Assignment",
      description: "History: World War II Essay",
      icon: BookOpen,
      iconColor: "text-blue-500",
      time: "Yesterday",
    },
    {
      id: 3,
      type: "forum",
      title: "Posted in Forum",
      description: "Asked question in Science Forum",
      icon: MessageSquare,
      iconColor: "text-purple-500",
      time: "2 days ago",
    },
    {
      id: 4,
      type: "achievement",
      title: "Earned Badge",
      description: "Quiz Master: Complete 10 quizzes",
      icon: Trophy,
      iconColor: "text-amber-500",
      time: "3 days ago",
    },
  ]

  const extendedActivities = [
    ...activities,
    {
      id: 5,
      type: "quiz",
      title: "Completed Science Quiz",
      description: "Scored 92% on Chemistry Quiz",
      icon: CheckCircle,
      iconColor: "text-green-500",
      time: "4 days ago",
    },
    {
      id: 6,
      type: "assignment",
      title: "Started Assignment",
      description: "Math: Calculus Problem Set",
      icon: BookOpen,
      iconColor: "text-blue-500",
      time: "5 days ago",
    },
  ]

  const displayActivities = extended ? extendedActivities : activities

  return (
    <div className="space-y-4">
      {displayActivities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <div className={`rounded-full p-2 ${activity.iconColor} bg-muted`}>
            <activity.icon className="h-4 w-4" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

