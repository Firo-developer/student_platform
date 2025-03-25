import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Clock, BookOpen, CheckCircle } from "lucide-react"
import { AssignmentCard } from "@/components/assignment-card"

export default function AssignmentsPage() {
  const assignments = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      subject: "Mathematics",
      dueDate: "2 days left",
      difficulty: "Medium",
      progress: 0,
      description: "Practice solving linear equations and inequalities",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 2,
      title: "Chemical Reactions Lab",
      subject: "Science",
      dueDate: "3 days left",
      difficulty: "Hard",
      progress: 0,
      description: "Document and analyze different types of chemical reactions",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 3,
      title: "Essay: Modern Literature",
      subject: "English",
      dueDate: "5 days left",
      difficulty: "Medium",
      progress: 0,
      description: "Write a comparative essay on two modern literary works",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 4,
      title: "World War II Analysis",
      subject: "History",
      dueDate: "1 week left",
      difficulty: "Medium",
      progress: 0,
      description: "Research and analyze key events of World War II",
      image: "/placeholder.svg?height=100&width=200",
    },
  ]

  const inProgressAssignments = [
    {
      id: 5,
      title: "Geometry Proofs",
      subject: "Mathematics",
      dueDate: "4 days left",
      difficulty: "Hard",
      progress: 65,
      description: "Complete proofs for geometric theorems",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 6,
      title: "Physics Problem Set",
      subject: "Science",
      dueDate: "Tomorrow",
      difficulty: "Hard",
      progress: 80,
      description: "Solve problems related to motion and forces",
      image: "/placeholder.svg?height=100&width=200",
    },
  ]

  const completedAssignments = [
    {
      id: 7,
      title: "Poetry Analysis",
      subject: "English",
      dueDate: "Completed",
      difficulty: "Easy",
      progress: 100,
      description: "Analyze the themes and structure of selected poems",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 8,
      title: "Ancient Civilizations",
      subject: "History",
      dueDate: "Completed",
      difficulty: "Medium",
      progress: 100,
      description: "Research and present on an ancient civilization",
      image: "/placeholder.svg?height=100&width=200",
    },
  ]

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Quizzes & Assignments</h1>
            <p className="text-muted-foreground">View and complete your assigned work</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search assignments..." className="pl-8 w-full sm:w-[250px]" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              All
            </TabsTrigger>
            <TabsTrigger value="in-progress" className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              In Progress
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4" />
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...assignments, ...inProgressAssignments, ...completedAssignments].map((assignment) => (
                <AssignmentCard key={assignment.id} assignment={assignment} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="in-progress" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inProgressAssignments.map((assignment) => (
                <AssignmentCard key={assignment.id} assignment={assignment} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedAssignments.map((assignment) => (
                <AssignmentCard key={assignment.id} assignment={assignment} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

