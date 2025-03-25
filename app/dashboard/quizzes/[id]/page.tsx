import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, BookOpen, HelpCircle, AlertTriangle, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function QuizDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the quiz data based on the ID
  const quiz = {
    id: Number.parseInt(params.id),
    title: "Algebra Fundamentals",
    subject: "Mathematics",
    description: "Test your knowledge of basic algebraic concepts including equations, inequalities, and functions.",
    questions: 15,
    timeLimit: "30 minutes",
    difficulty: "Medium",
    topics: ["Linear Equations", "Inequalities", "Functions", "Graphing"],
    instructions: [
      "Read each question carefully before answering.",
      "You have 30 minutes to complete the quiz.",
      "Each question is worth 1 point.",
      "There is no penalty for incorrect answers.",
      "You can review your answers before submitting.",
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/dashboard/quizzes">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Quizzes
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <Card className="bg-white dark:bg-slate-900 shadow-sm">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">{quiz.title}</CardTitle>
                  <CardDescription>{quiz.subject}</CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    {quiz.subject}
                  </Badge>
                  <Badge
                    variant={
                      quiz.difficulty === "Easy"
                        ? "outline"
                        : quiz.difficulty === "Medium"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {quiz.difficulty}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{quiz.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  <span>{quiz.questions} Questions</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  <span>{quiz.timeLimit}</span>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Topics Covered:</h3>
                <div className="flex flex-wrap gap-2">
                  {quiz.topics.map((topic, index) => (
                    <Badge key={index} variant="outline">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between">
              <Button variant="outline" asChild>
                <Link href={`/dashboard/quizzes/${quiz.id}/practice`}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Practice Mode
                </Link>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href={`/dashboard/quizzes/${quiz.id}/start`}>Start Quiz</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:w-1/3">
          <Card className="bg-white dark:bg-slate-900 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Instructions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {quiz.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500" />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 mt-4 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center text-amber-800 dark:text-amber-300">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Important Note
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-amber-800 dark:text-amber-300">
                Once you start the quiz, the timer will begin and cannot be paused. Make sure you have enough time to
                complete the quiz before starting.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

