import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Plus, Search, UserPlus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TeamMemberProps {
  name: string
  role: string
  email: string
  avatar: string
  status: "online" | "offline" | "away" | "busy"
  subjects?: string[]
}

function TeamMember({ name, role, email, avatar, status, subjects }: TeamMemberProps) {
  const getStatusColor = () => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "offline":
        return "bg-gray-400"
      case "away":
        return "bg-yellow-500"
      case "busy":
        return "bg-red-500"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <Card>
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div
                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${getStatusColor()}`}
              />
            </div>
            <div>
              <CardTitle className="text-base">{name}</CardTitle>
              <CardDescription>{role}</CardDescription>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Profile</DropdownMenuItem>
              <DropdownMenuItem>Send Message</DropdownMenuItem>
              <DropdownMenuItem>Schedule Meeting</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="text-sm">{email}</div>
        {subjects && subjects.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {subjects.map((subject, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {subject}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm">
          Message
        </Button>
        <Button size="sm">Collaborate</Button>
      </CardFooter>
    </Card>
  )
}

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Study Group Leader",
      email: "alex.j@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
      subjects: ["Mathematics", "Physics"]
    },
    {
      name: "Sarah Williams",
      role: "Peer Tutor",
      email: "sarah.w@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "away",
      subjects: ["Literature", "History"]
    },
    {
      name: "Michael Chen",
      role: "Project Partner",
      email: "michael.c@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline",
      subjects: ["Computer Science", "Data Science"]
    },
    {
      name: "Emily Rodriguez",
      role: "Study Buddy",
      email: "emily.r@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "busy",
      subjects: ["Biology", "Chemistry"]
    },
    {
      name: "David Kim",
      role: "Group Project Member",
      email: "david.k@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
      subjects: ["Economics", "Statistics"]
    },
    {
      name: "Olivia Taylor",
      role: "Note Sharer",
      email: "olivia.t@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline",
      subjects: ["Psychology", "Sociology"]
    }
  ] as const

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Team</h1>
        <div className="flex items-center gap-2">
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Member
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            New Group
          </Button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search team members..." className="flex-1" />
      </div>
      
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Members</TabsTrigger>
          <TabsTrigger value="online">Online</TabsTrigger>
          <TabsTrigger value="groups">Study Groups</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="online" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers
              .filter(member => member.status === "online")
              .map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="groups" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Math Study Group</CardTitle>
                <CardDescription>5 members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex -space-x-2">
                  {teamMembers.slice(0, 4).map((member, index) => (
                    <Avatar key={index} className="border-2 border-background">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                  ))}\

