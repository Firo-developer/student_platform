import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, XCircle, ArrowLeft, BarChart3, Download, Share2, Award, BookOpen } from "lucide-react"
import Link from "next/link"

export default function QuizResultsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the quiz results based on the ID
  const quizResult = {
    id: Number.parseInt(params.id),
    title: "Algebra Fundamentals",
    subject: "Mathematics",
    score: 80,
    totalQuestions: 5,
    correctAnswers: 4,
    timeTaken: "12:45",
    completedDate: "May 10, 2023",
    questions: [
      {
        id: 1,
        text: "What is the solution to the equation 2x + 5 = 13?",
        userAnswer: "b",
        correctAnswer: "b",
        isCorrect: true,
        explanation: "To solve 2x + 5 = 13, subtract 5 from both sides to get 2x = 8, then divide by 2 to get x = 4.",
      },
      {
        id: 2,
        text: "Which of the following is a linear function?",
        userAnswer: "b",
        correctAnswer: "b",
        isCorrect: true,
        explanation:
          "A linear function has the form y = mx + b, where m is the slope and b is the y-intercept. Option b (y = 3x + 2) is in this form.",
      },
      {
        id: 3,
        text: "Solve for x: 3x - 7 > 5",
        userAnswer: "b",
        correctAnswer: "a",
        isCorrect: false,
        explanation: "To solve 3x - 7 > 5, add 7 to both sides to get 3x > 12, then divide by 3 to get x > 4.",
      },
      {
        id: 4,
        text: "What is the slope of the line passing through points (2, 3) and (4, 7)?",
        userAnswer: "b",
        correctAnswer: "b",
        isCorrect: true,
        explanation: "The slope is calculated using the formula (y₂ - y₁)/(x₂ - x₁) = (7 - 3)/(4 - 2) = 4/2 = 2.",
      },
      {
        id: 5,
        text: "Which equation represents a line with y-intercept 3 and slope -2?",
        userAnswer: "a",
        correctAnswer: "a",
        isCorrect: true,
        explanation:
          "The equation of a line with slope m and y-intercept b is y = mx + b. With slope -2 and y-intercept 3, the equation is y = -2x + 3.",
      },
    ],
    feedback:
      "Great job! You've demonstrated a good understanding of algebraic concepts. Review the question you missed to strengthen your knowledge of inequalities.",
  }

  // Map option IDs to letters for display
  const optionMap: Record<string, string> = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
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
                  <CardTitle className="text-2xl">{quizResult.title} - Results</CardTitle>
                  <CardDescription>
                    {quizResult.subject} • Completed on {quizResult.completedDate}
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    {quizResult.subject}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="bg-slate-50 dark:bg-slate-800 border-0">
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Score</p>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{quizResult.score}%</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50 dark:bg-slate-800 border-0">
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Correct Answers</p>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {quizResult.correctAnswers}/{quizResult.totalQuestions}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50 dark:bg-slate-800 border-0">
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Time Taken</p>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{quizResult.timeTaken}</div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Performance</h3>
                <Progress value={quizResult.score} className="h-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-800 dark:text-blue-300">Feedback</h3>
                    <p className="text-blue-700 dark:text-blue-400 mt-1">{quizResult.feedback}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-6">
                <h3 className="font-medium text-lg">Question Review</h3>

                {quizResult.questions.map((question, index) => (
                  <Card
                    key={index}
                    className={`border ${
                      question.isCorrect
                        ? "border-green-100 dark:border-green-800"
                        : "border-red-100 dark:border-red-800"
                    }`}
                  >
                    <CardHeader
                      className={`pb-2 ${
                        question.isCorrect ? "bg-green-50 dark:bg-green-900/20" : "bg-red-50 dark:bg-red-900/20"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base">
                          {index + 1}. {question.text}
                        </CardTitle>
                        {question.isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">Your Answer:</span>
                          <Badge variant={question.isCorrect ? "outline" : "destructive"}>
                            {optionMap[question.userAnswer]}
                          </Badge>
                        </div>

                        {!question.isCorrect && (
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium">Correct Answer:</span>
                            <Badge
                              variant="outline"
                              className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                            >
                              {optionMap[question.correctAnswer]}
                            </Badge>
                          </div>
                        )}

                        <div>
                          <span className="text-sm font-medium">Explanation:</span>
                          <p className="text-sm text-muted-foreground mt-1">{question.explanation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between">
              <Button variant="outline" asChild>
                <Link href={`/dashboard/quizzes/${params.id}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Quiz
                </Link>
              </Button>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Results
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Results
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="md:w-1/3">
          <Card className="bg-white dark:bg-slate-900 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                Performance Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Strengths</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                    <span className="text-sm">Linear equations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                    <span className="text-sm">Linear functions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                    <span className="text-sm">Slope calculations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Areas for Improvement</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <XCircle className="h-4 w-4 mr-2 mt-0.5 text-red-500" />
                    <span className="text-sm">Inequalities</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium mb-2">Recommended Practice</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <BookOpen className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                    <span className="text-sm">Solving Inequalities Practice Quiz</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                    <span className="text-sm">Advanced Algebra Concepts</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/progress">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Detailed Analytics
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

