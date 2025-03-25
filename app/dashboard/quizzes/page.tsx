import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  Clock,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Calendar,
  Star,
  Grid,
  List,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function QuizzesPage() {
  const quizzes = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      subject: "Mathematics",
      questions: 15,
      timeLimit: "30 minutes",
      status: "available",
      dueDate: "May 15, 2023",
      image: "/placeholder.svg?height=100&width=200",
      difficulty: "Medium",
      description: "Test your knowledge of basic algebraic concepts including equations, inequalities, and functions.",
    },
    {
      id: 2,
      title: "Chemical Reactions",
      subject: "Science",
      questions: 20,
      timeLimit: "45 minutes",
      status: "available",
      dueDate: "May 18, 2023",
      image: "/placeholder.svg?height=100&width=200",
      difficulty: "Hard",
      description: "Explore different types of chemical reactions and their properties.",
    },
    {
      id: 3,
      title: "Literary Analysis",
      subject: "English",
      questions: 10,
      timeLimit: "25 minutes",
      status: "available",
      dueDate: "May 20, 2023",
      image: "/placeholder.svg?height=100&width=200",
      difficulty: "Medium",
      description: "Analyze literary devices and themes in classic literature.",
    },
    {
      id: 4,
      title: "World War II",
      subject: "History",
      questions: 25,
      timeLimit: "50 minutes",
      status: "upcoming",
      dueDate: "May 25, 2023",
      image: "/placeholder.svg?height=100&width=200",
      difficulty: "Medium",
      description: "Comprehensive quiz on the causes, events, and aftermath of World War II.",
    },
    {
      id: 5,
      title: "Programming Basics",
      subject: "Computer Science",
      questions: 15,
      timeLimit: "35 minutes",
      status: "available",
      dueDate: "May 22, 2023",
      image: "/placeholder.svg?height=100&width=200",
      difficulty: "Easy",
      description: "Introduction to programming concepts and basic syntax.",
    },
    {
      id: 6,
      title: "Cellular Biology",
      subject: "Science",
      questions: 18,
      timeLimit: "40 minutes",
      status: "upcoming",
      dueDate: "May 28, 2023",
      image: "/placeholder.svg?height=100&width=200",
      difficulty: "Hard",
      description: "Explore the structure and function of cells and cellular processes.",
    },
  ]

  const completedQuizzes = [
    {
      id: 7,
      title: "Geometry Basics",
      subject: "Mathematics",
      questions: 15,
      score: 85,
      completedDate: "May 5, 2023",
      image: "/placeholder.svg?height=100&width=200",
      difficulty: "Medium",
      description: "Fundamental concepts of geometry including shapes, angles, and theorems.",
    },
    {
      id: 8,
      title: "Cell Biology",
      subject: "Science",
      questions: 20,
      score: 92,
      completedDate: "May 2, 2023",
      image: "/placeholder.svg?height=100&width=200",
      difficulty: "Hard",
      description: "Comprehensive quiz on cell structure, function, and processes.",
    },
    {
      id: 9,
      title: "Grammar Rules",
      subject: "English",
      questions: 30,
      score: 78,
      completedDate: "April 28, 2023",
      image: "/placeholder.svg?height=100&width=200",
      difficulty: "Easy",
      description: "Test your knowledge of English grammar rules and usage.",
    },
  ]

  const recommendedQuizzes = [
    {
      id: 10,
      title: "Advanced Calculus",
      subject: "Mathematics",
      questions: 20,
      timeLimit: "45 minutes",
      status: "recommended",
      image: "/placeholder.svg?height=100&width=200",
      difficulty: "Hard",
      description: "Challenge yourself with advanced calculus concepts and problems.",
      matchScore: 95,
    },
    {
      id: 11,
      title: "Physics Fundamentals",
      subject: "Science",
      questions: 18,
      timeLimit: "40 minutes",
      status: "recommended",
      image: "/placeholder.svg?height=100&width=200",
      difficulty: "Medium",
      description: "Core concepts of physics including motion, forces, and energy.",
      matchScore: 88,
    },
    {
      id: 12,
      title: "Creative Writing",
      subject: "English",
      questions: 12,
      timeLimit: "30 minutes",
      status: "recommended",
      image: "/placeholder.svg?height=100&width=200",
      difficulty: "Easy",
      description: "Explore creative writing techniques and narrative structures.",
      matchScore: 82,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "Medium":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      case "Hard":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400"
    }
  }

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case "Mathematics":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      case "Science":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "English":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
      case "History":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
      case "Computer Science":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Quizzes</h2>
          <p className="text-muted-foreground">Test your knowledge with interactive quizzes</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search quizzes..." className="pl-8 w-full sm:w-[250px]" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="All Subjects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              <SelectItem value="math">Mathematics</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="history">History</SelectItem>
              <SelectItem value="cs">Computer Science</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="All Difficulties" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="available" className="space-y-6">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="available" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              Available
            </TabsTrigger>
            <TabsTrigger value="recommended" className="flex items-center">
              <Sparkles className="mr-2 h-4 w-4" />
              Recommended
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4" />
              Completed
            </TabsTrigger>
          </TabsList>
          
          <div className="hidden md:flex gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-100 dark:bg-slate-800">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="available" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {quizzes
              .filter((q) => q.status === "available")
              .map((quiz) => (
                <Card key={quiz.id} className="overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={quiz.image || "/placeholder.svg"}
                      alt={quiz.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className={getSubjectColor(quiz.subject)}>
                        {quiz.subject}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="outline" className={getDifficultyColor(quiz.difficulty)}>
                        {quiz.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle>{quiz.title}</CardTitle>
                    <CardDescription>
                      {quiz.questions} questions • {quiz.timeLimit}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-2">{quiz.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-3">
                      <Calendar className="mr-2 h-4 w-4" />
                      Due: {quiz.dueDate}
                    </div>
                  </CardContent>

                  <CardFooter className="border-t pt-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <Link href={`/dashboard/quizzes/${quiz.id}`}>
                        Start Quiz
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="recommended" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {recommendedQuizzes.map((quiz) => (
              <Card key={quiz.id} className="overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow border-blue-200 dark:border-blue-800">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={quiz.image || "/placeholder.svg"}
                    alt={quiz.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className={getSubjectColor(quiz.subject)}>
                      {quiz.subject}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Badge variant="outline" className={getDifficultyColor(quiz.difficulty)}>
                      {quiz.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-blue-600 text-white">
                      <Sparkles className="h-3 w-3 mr-1" />
                      {quiz.matchScore}% Match
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle>{quiz.title}</CardTitle>
                  <CardDescription>
                    {quiz.questions} questions • {quiz.timeLimit}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-2">{quiz.description}</p>
                  <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 mt-3 font-medium">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Recommended based on your performance
                  </div>
                </CardContent>

                <CardFooter className="border-t pt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href={`/dashboard/quizzes/${quiz.id}`}>
                      Start Quiz
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {quizzes
              .filter((q) => q.status === "upcoming")
              .map((quiz) => (
                <Card key={quiz.id} className="overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={quiz.image || "/placeholder.svg"}
                      alt={quiz.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 filter grayscale opacity-80"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className={getSubjectColor(quiz.subject)}>
                        {quiz.subject}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="outline" className={getDifficultyColor(quiz.difficulty)}>
                        {quiz.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle>{quiz.title}</CardTitle>
                    <CardDescription>
                      {quiz.questions} questions • {quiz.timeLimit}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-2">{quiz.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-3">
                      <Calendar className="mr-2 h-4 w-4" />
                      Available: {quiz.dueDate}
                    </div>
                  </CardContent>

                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full" disabled>
                      Not Yet Available
                    </Button>
                  </CardFooter>
                </Card>
              ))}

          {quizzes.filter((q) => q.status === "upcoming").length === 0 && (
            <div className="col-span-full text-center py-12">
              <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium">No Upcoming Quizzes</h3>
              <p className="text-muted-foreground">There are no upcoming quizzes scheduled at the moment.</p>
            </div>
          )}
        </div>
      </TabsContent>

      <TabsContent value="completed" className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {completedQuizzes.map((quiz) => (
            <Card key={quiz.id} className="overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={quiz.image || "/placeholder.svg"}
                  alt={quiz.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className={getSubjectColor(quiz.subject)}>
                    {quiz.subject}
                  </Badge>
                </div>
                <div className="absolute bottom-2 left-2">
                  <Badge variant="outline" className={getDifficultyColor(quiz.difficulty)}>
                    {quiz.difficulty}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle>{quiz.title}</CardTitle>
                <CardDescription>{quiz.questions} questions</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Score</span>
                    <div className="flex items-center">
                      <span className="text-sm font-bold">{quiz.score}%</span>
                      {quiz.score >= 90 && (
                        <Star className="h-4 w-4 ml-1 text-amber-500 fill-amber-500" />
                      )}
                    </div>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        quiz.score >= 90 ? "bg-green-500" : quiz.score >= 70 ? "bg-blue-500" : "bg-amber-500"
                      }`}
                      style={{ width: `${quiz.score}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    Completed: {quiz.completedDate}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-t pt-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/dashboard/quizzes/${quiz.id}/results`}>View Results</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  </div>
}
\

