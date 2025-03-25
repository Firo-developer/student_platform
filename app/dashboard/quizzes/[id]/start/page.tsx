"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Clock, Flag, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function QuizStartPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock quiz data - in a real app, you would fetch this based on the ID
  const quiz = {
    id: Number.parseInt(params.id),
    title: "Algebra Fundamentals",
    subject: "Mathematics",
    timeLimit: "30 minutes",
    questions: [
      {
        id: 1,
        text: "What is the solution to the equation 2x + 5 = 13?",
        options: [
          { id: "a", text: "x = 3" },
          { id: "b", text: "x = 4" },
          { id: "c", text: "x = 5" },
          { id: "d", text: "x = 6" },
        ],
        correctAnswer: "b",
      },
      {
        id: 2,
        text: "Which of the following is a linear function?",
        options: [
          { id: "a", text: "y = x²" },
          { id: "b", text: "y = 3x + 2" },
          { id: "c", text: "y = 1/x" },
          { id: "d", text: "y = √x" },
        ],
        correctAnswer: "b",
      },
      {
        id: 3,
        text: "Solve for x: 3x - 7 > 5",
        options: [
          { id: "a", text: "x > 4" },
          { id: "b", text: "x > 3" },
          { id: "c", text: "x > 2" },
          { id: "d", text: "x > 1" },
        ],
        correctAnswer: "a",
      },
      {
        id: 4,
        text: "What is the slope of the line passing through points (2, 3) and (4, 7)?",
        options: [
          { id: "a", text: "1" },
          { id: "b", text: "2" },
          { id: "c", text: "3" },
          { id: "d", text: "4" },
        ],
        correctAnswer: "b",
      },
      {
        id: 5,
        text: "Which equation represents a line with y-intercept 3 and slope -2?",
        options: [
          { id: "a", text: "y = -2x + 3" },
          { id: "b", text: "y = 2x + 3" },
          { id: "c", text: "y = -2x - 3" },
          { id: "d", text: "y = 2x - 3" },
        ],
        correctAnswer: "a",
      },
    ],
  }

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  // Handle timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Handle answer selection
  const handleAnswerSelect = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion]: value,
    })
  }

  // Navigate to next question
  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  // Navigate to previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  // Handle quiz submission
  const handleSubmit = () => {
    setIsSubmitting(true)

    // Calculate score
    const score = quiz.questions.reduce((total, question, index) => {
      return answers[index] === question.correctAnswer ? total + 1 : total
    }, 0)

    // In a real app, you would send this to your backend
    console.log("Quiz submitted with score:", score)

    // Navigate to results page
    setTimeout(() => {
      router.push(`/dashboard/quizzes/${params.id}/results`)
    }, 1500)
  }

  // Current question data
  const question = quiz.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold">{quiz.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className={`font-mono ${timeLeft < 300 ? "text-red-500 font-bold" : ""}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              Question {currentQuestion + 1} of {quiz.questions.length}
            </span>
          </div>
          <Button variant="outline" size="sm" onClick={() => router.push(`/dashboard/quizzes/${params.id}`)}>
            <Flag className="mr-2 h-4 w-4" />
            Flag for Review
          </Button>
        </div>

        <Progress value={progress} className="h-2" />
      </div>

      <Card className="bg-white dark:bg-slate-900 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">
            {currentQuestion + 1}. {question.text}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={answers[currentQuestion] || ""} onValueChange={handleAnswerSelect} className="space-y-4">
            {question.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                <Label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer py-2">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <Separator />
        <CardFooter className="flex justify-between pt-4">
          <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          {currentQuestion < quiz.questions.length - 1 ? (
            <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Submitting...</>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Submit Quiz
                </>
              )}
            </Button>
          )}
        </CardFooter>
      </Card>

      <div className="mt-6 grid grid-cols-5 sm:grid-cols-10 gap-2">
        {quiz.questions.map((_, index) => (
          <Button
            key={index}
            variant={index === currentQuestion ? "default" : answers[index] ? "outline" : "secondary"}
            className={`h-10 w-10 p-0 ${
              index === currentQuestion
                ? "bg-blue-600 text-white"
                : answers[index]
                  ? "border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-400"
                  : ""
            }`}
            onClick={() => setCurrentQuestion(index)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}

