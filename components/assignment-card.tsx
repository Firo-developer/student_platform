"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface Assignment {
  id: number
  title: string
  subject: string
  dueDate: string
  difficulty: string
  progress: number
  description: string
  image: string
}

interface AssignmentCardProps {
  assignment: Assignment
}

export function AssignmentCard({ assignment }: AssignmentCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden h-full flex flex-col bg-transparent border-[#3a3a3a]/50">
        <div className="relative h-40 overflow-hidden">
          <img
            src={assignment.image || "/placeholder.svg"}
            alt={assignment.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2">
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
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{assignment.title}</CardTitle>
          </div>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{assignment.subject}</span>
            <span className={assignment.dueDate.includes("left") ? "text-amber-500 font-medium" : ""}>
              {assignment.dueDate}
            </span>
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground mb-4">{assignment.description}</p>
          {assignment.progress > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Progress</span>
                <span>{assignment.progress}%</span>
              </div>
              <Progress value={assignment.progress} className="h-2" />
            </div>
          )}
        </CardContent>

        <CardFooter>
          <Button asChild className="w-full">
            <Link href={`/assignments/${assignment.id}`}>
              {assignment.progress === 0 ? "Start" : assignment.progress === 100 ? "Review" : "Continue"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

