import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Clock, CheckCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Math Final Project",
      description: "Comprehensive review of algebra and calculus concepts",
      status: "In Progress",
      progress: 65,
      dueDate: "May 15, 2023",
      members: [
        { name: "Alex J", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Sarah W", avatar: "/placeholder.svg?height=32&width=32" },
      ],
    },
    {
      id: 2,
      name: "Science Research Paper",
      description: "Research on renewable energy sources",
      status: "Not Started",
      progress: 0,
      dueDate: "June 1, 2023",
      members: [{ name: "Michael C", avatar: "/placeholder.svg?height=32&width=32" }],
    },
    {
      id: 3,
      name: "History Presentation",
      description: "Presentation on World War II events",
      status: "Completed",
      progress: 100,
      dueDate: "April 30, 2023",
      members: [
        { name: "Emma D", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "James W", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Alex J", avatar: "/placeholder.svg?height=32&width=32" },
      ],
    },
    {
      id: 4,
      name: "English Essay",
      description: "Analysis of modern literature themes",
      status: "At Risk",
      progress: 30,
      dueDate: "May 5, 2023",
      members: [{ name: "Sarah W", avatar: "/placeholder.svg?height=32&width=32" }],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col sm:flex-row h-auto sm:h-16 items-start sm:items-center justify-between gap-4 py-4">
          <h1 className="text-2xl font-bold">Projects</h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search projects..." className="pl-8 w-[250px]" />
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 px-4 md:px-8">
        <div className="container mx-auto">
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden bg-transparent border-[#3a3a3a]/50">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle>{project.name}</CardTitle>
                        <Badge
                          variant={
                            project.status === "Completed"
                              ? "success"
                              : project.status === "In Progress"
                                ? "default"
                                : project.status === "At Risk"
                                  ? "destructive"
                                  : "secondary"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Due: {project.dueDate}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Team:</span>
                          <div className="flex -space-x-2">
                            {project.members.map((member, index) => (
                              <Avatar key={index} className="h-6 w-6 border-2 border-background">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="active" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projects
                  .filter((p) => p.status !== "Completed")
                  .map((project) => (
                    <Card key={project.id} className="overflow-hidden bg-transparent border-[#3a3a3a]/50">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle>{project.name}</CardTitle>
                          <Badge
                            variant={
                              project.status === "In Progress"
                                ? "default"
                                : project.status === "At Risk"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>

                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>Due: {project.dueDate}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Team:</span>
                            <div className="flex -space-x-2">
                              {project.members.map((member, index) => (
                                <Avatar key={index} className="h-6 w-6 border-2 border-background">
                                  <AvatarImage src={member.avatar} alt={member.name} />
                                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projects
                  .filter((p) => p.status === "Completed")
                  .map((project) => (
                    <Card key={project.id} className="overflow-hidden bg-transparent border-[#3a3a3a]/50">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle>{project.name}</CardTitle>
                          <Badge variant="success">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Completed
                          </Badge>
                        </div>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>

                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>Completed: {project.dueDate}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Team:</span>
                            <div className="flex -space-x-2">
                              {project.members.map((member, index) => (
                                <Avatar key={index} className="h-6 w-6 border-2 border-background">
                                  <AvatarImage src={member.avatar} alt={member.name} />
                                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

