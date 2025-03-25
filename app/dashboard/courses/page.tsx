"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, BookOpen, Clock, CheckCircle, ArrowRight, GraduationCap, Star } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Algebra Mastery",
      subject: "Mathematics",
      instructor: "Dr. Sarah Johnson",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      progress: 65,
      totalModules: 12,
      completedModules: 8,
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=200&width=300",
      description: "Master algebraic concepts from basic equations to advanced functions and applications.",
    },
    {
      id: 2,
      title: "Chemistry Fundamentals",
      subject: "Science",
      instructor: "Prof. Michael Chen",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      progress: 40,
      totalModules: 10,
      completedModules: 4,
      duration: "10 weeks",
      level: "Beginner",
      rating: 4.6,
      reviews: 98,
      image: "/placeholder.svg?height=200&width=300",
      description: "Explore the building blocks of matter and chemical reactions through interactive lessons.",
    },
    {
      id: 3,
      title: "World Literature",
      subject: "English",
      instructor: "Dr. Emma Davis",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      progress: 90,
      totalModules: 8,
      completedModules: 7,
      duration: "6 weeks",
      level: "Advanced",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=300",
      description: "Analyze classic and contemporary works from around the world and their cultural contexts.",
    },
    {
      id: 4,
      title: "Modern World History",
      subject: "History",
      instructor: "Prof. James Wilson",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      progress: 20,
      totalModules: 14,
      completedModules: 3,
      duration: "12 weeks",
      level: "Intermediate",
      rating: 4.7,
      reviews: 112,
      image: "/placeholder.svg?height=200&width=300",
      description: "Examine key events and developments that shaped our modern world from 1900 to present.",
    },
  ]

  const recommendedCourses = [
    {
      id: 5,
      title: "Calculus I",
      subject: "Mathematics",
      instructor: "Dr. Robert Taylor",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      duration: "10 weeks",
      level: "Advanced",
      rating: 4.9,
      reviews: 178,
      image: "/placeholder.svg?height=200&width=300",
      description: "Comprehensive introduction to differential and integral calculus with real-world applications.",
    },
    {
      id: 6,
      title: "Physics Mechanics",
      subject: "Science",
      instructor: "Dr. Lisa Wong",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.7,
      reviews: 132,
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn the fundamental principles of classical mechanics, forces, and motion.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
          <p className="text-muted-foreground">Explore your enrolled and recommended courses</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search courses..." className="pl-8 w-full sm:w-[250px]" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="enrolled" className="space-y-6">
        <TabsList className="bg-white dark:bg-slate-900 border dark:border-slate-800">
          <TabsTrigger
            value="enrolled"
            className="flex items-center data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Enrolled
          </TabsTrigger>
          <TabsTrigger
            value="recommended"
            className="flex items-center data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <Star className="mr-2 h-4 w-4" />
            Recommended
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="flex items-center data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Completed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="enrolled" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="flex flex-col bg-white dark:bg-slate-900 shadow-sm">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <div className="h-full">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full object-cover md:rounded-l-lg"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 flex flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{course.title}</CardTitle>
                          <CardDescription>{course.subject}</CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                        >
                          {course.level}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={course.instructorAvatar} alt={course.instructor} />
                          <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{course.instructor}</p>
                          <div className="flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(course.rating)
                                      ? "text-amber-500 fill-amber-500"
                                      : "text-gray-300 dark:text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground ml-1">({course.reviews})</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>
                            {course.completedModules}/{course.totalModules} modules
                          </span>
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                        <Link href={`/dashboard/courses/${course.id}`}>
                          Continue Learning
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recommended" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedCourses.map((course) => (
              <Card key={course.id} className="flex flex-col bg-white dark:bg-slate-900 shadow-sm">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <div className="h-full">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full object-cover md:rounded-l-lg"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 flex flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{course.title}</CardTitle>
                          <CardDescription>{course.subject}</CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                        >
                          {course.level}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={course.instructorAvatar} alt={course.instructor} />
                          <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{course.instructor}</p>
                          <div className="flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(course.rating)
                                      ? "text-amber-500 fill-amber-500"
                                      : "text-gray-300 dark:text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground ml-1">({course.reviews})</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-1" />
                          <span>{course.subject}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                        <Link href={`/dashboard/courses/${course.id}`}>
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <Card className="bg-white dark:bg-slate-900 shadow-sm">
            <CardHeader>
              <CardTitle>Completed Courses</CardTitle>
              <CardDescription>Courses you have successfully completed</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-12">
              <GraduationCap className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Completed Courses Yet</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Continue learning your enrolled courses to see them appear here once completed.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="#enrolled" onClick={() => document.querySelector('[data-state="enrolled"]')?.click()}>
                  View Enrolled Courses
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

