import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  TrendingUp,
  AlertTriangle,
  Zap,
  FileText,
  MessageSquare,
  StickyNote,
} from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardChart } from "@/components/dashboard-chart"
import { TaskList } from "@/components/task-list"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, Tom</h2>
          <p className="text-muted-foreground">Here's an overview of your learning progress and upcoming tasks.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            Last updated: Just now
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Zap className="mr-2 h-4 w-4" />
            Quick Actions
          </Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Quizzes</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12/15</div>
            <div className="text-xs text-muted-foreground">80% completion rate</div>
            <Progress value={80} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
            <Clock className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-muted-foreground">2 due this week</div>
            <div className="mt-2 text-xs">
              <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">
                Due soon
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <div className="text-xs text-muted-foreground">+5% from last week</div>
            <Progress value={75} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <BookOpen className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42h</div>
            <div className="text-xs text-muted-foreground">This month</div>
            <Progress value={70} className="h-1 mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-white border">
          <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Overview
          </TabsTrigger>
          <TabsTrigger value="tasks" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Tasks
          </TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Recent Activity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4 bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
                <CardDescription>Your learning activity over the past week</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <DashboardChart />
              </CardContent>
            </Card>

            <Card className="lg:col-span-3 bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Tasks due in the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-amber-50">
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Math Assignment</p>
                      <p className="text-sm text-muted-foreground">Due in 2 days</p>
                    </div>
                    <Badge className="ml-auto" variant="outline">
                      High
                    </Badge>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-blue-50">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Science Quiz</p>
                      <p className="text-sm text-muted-foreground">Due in 3 days</p>
                    </div>
                    <Badge className="ml-auto" variant="outline">
                      Medium
                    </Badge>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-green-50">
                      <FileText className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">English Essay</p>
                      <p className="text-sm text-muted-foreground">Due in 5 days</p>
                    </div>
                    <Badge className="ml-auto" variant="outline">
                      Medium
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/assignments">
                    View All Assignments
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Subject Progress</CardTitle>
                <CardDescription>Your progress across different subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                        <span className="text-sm font-medium">Mathematics</span>
                      </div>
                      <span className="text-sm">85%</span>
                    </div>
                    <Progress value={85} className="h-1" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-sm font-medium">Science</span>
                      </div>
                      <span className="text-sm">70%</span>
                    </div>
                    <Progress value={70} className="h-1" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                        <span className="text-sm font-medium">History</span>
                      </div>
                      <span className="text-sm">60%</span>
                    </div>
                    <Progress value={60} className="h-1" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                        <span className="text-sm font-medium">English</span>
                      </div>
                      <span className="text-sm">90%</span>
                    </div>
                    <Progress value={90} className="h-1" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/progress">View Detailed Reports</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Recent Notes</CardTitle>
                <CardDescription>Your recently created notes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-3">
                    <h3 className="font-medium">Math Formulas</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      Key formulas for calculus and algebra that will be on the final exam...
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
                        Math
                      </Badge>
                      <span className="text-xs text-muted-foreground">2 days ago</span>
                    </div>
                  </div>

                  <div className="border rounded-lg p-3">
                    <h3 className="font-medium">Science Lab Notes</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      Observations from the chemistry experiment on acid-base reactions...
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                        Science
                      </Badge>
                      <span className="text-xs text-muted-foreground">5 days ago</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/notes">View All Notes</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Study Group</CardTitle>
                <CardDescription>Your study group members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Williams" />
                      <AvatarFallback>SW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Sarah Williams</p>
                      <p className="text-xs text-muted-foreground">Science Partner</p>
                    </div>
                    <div className="ml-auto h-2 w-2 rounded-full bg-green-500" title="Online"></div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael Chen" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Michael Chen</p>
                      <p className="text-xs text-muted-foreground">Math Study Group</p>
                    </div>
                    <div className="ml-auto h-2 w-2 rounded-full bg-amber-500" title="Away"></div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emma Davis" />
                      <AvatarFallback>ED</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Emma Davis</p>
                      <p className="text-xs text-muted-foreground">History Project</p>
                    </div>
                    <div className="ml-auto h-2 w-2 rounded-full bg-slate-300" title="Offline"></div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/team">View Team</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tasks">
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Task List</CardTitle>
              <CardDescription>Manage your upcoming tasks and assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <TaskList />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="relative mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-white">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Completed Math Quiz</p>
                    <p className="text-sm text-muted-foreground">You scored 85% on Algebra Quiz</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="relative mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-white">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-blue-500"></div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Submitted Assignment</p>
                    <p className="text-sm text-muted-foreground">History: World War II Essay</p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="relative mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-white">
                      <MessageSquare className="h-4 w-4 text-purple-500" />
                    </div>
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-purple-500"></div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Posted in Forum</p>
                    <p className="text-sm text-muted-foreground">Asked question in Science Forum</p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="relative mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border bg-white">
                      <StickyNote className="h-4 w-4 text-amber-500" />
                    </div>
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-amber-500"></div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Created Note</p>
                    <p className="text-sm text-muted-foreground">Added new note: Math Formulas</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

