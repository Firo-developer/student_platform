import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, MessageSquare, Plus, MessageCircle, CheckCircle } from "lucide-react"
import { ForumTopicCard } from "@/components/forum-topic-card"

export default function ForumPage() {
  const topics = [
    {
      id: 1,
      title: "How do I solve quadratic equations?",
      author: "Alex Johnson",
      subject: "Mathematics",
      replies: 12,
      views: 45,
      lastActivity: "2 hours ago",
      answered: true,
    },
    {
      id: 2,
      title: "Help with chemical balancing equations",
      author: "Sarah Williams",
      subject: "Chemistry",
      replies: 8,
      views: 32,
      lastActivity: "5 hours ago",
      answered: true,
    },
    {
      id: 3,
      title: "Essay structure for literary analysis",
      author: "Michael Chen",
      subject: "English",
      replies: 15,
      views: 67,
      lastActivity: "1 day ago",
      answered: true,
    },
    {
      id: 4,
      title: "Understanding Newton's laws of motion",
      author: "Emma Davis",
      subject: "Physics",
      replies: 6,
      views: 28,
      lastActivity: "2 days ago",
      answered: false,
    },
    {
      id: 5,
      title: "Help with World War II timeline",
      author: "James Wilson",
      subject: "History",
      replies: 9,
      views: 41,
      lastActivity: "3 days ago",
      answered: false,
    },
  ]

  const myTopics = [
    {
      id: 6,
      title: "Trouble understanding calculus derivatives",
      author: "You",
      subject: "Mathematics",
      replies: 3,
      views: 15,
      lastActivity: "1 day ago",
      answered: true,
    },
    {
      id: 7,
      title: "How to analyze poetry effectively?",
      author: "You",
      subject: "English",
      replies: 2,
      views: 12,
      lastActivity: "4 days ago",
      answered: false,
    },
  ]

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Discussion Forum</h1>
            <p className="text-muted-foreground">Ask questions and connect with other students</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search topics..." className="pl-8 w-full sm:w-[250px]" />
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Topic
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="all" className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                All Topics
              </TabsTrigger>
              <TabsTrigger value="my-topics" className="flex items-center">
                <MessageCircle className="mr-2 h-4 w-4" />
                My Topics
              </TabsTrigger>
              <TabsTrigger value="answered" className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4" />
                Answered
              </TabsTrigger>
            </TabsList>

            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter by Subject
            </Button>
          </div>

          <TabsContent value="all" className="space-y-4">
            {topics.map((topic) => (
              <ForumTopicCard key={topic.id} topic={topic} />
            ))}
          </TabsContent>

          <TabsContent value="my-topics" className="space-y-4">
            {myTopics.map((topic) => (
              <ForumTopicCard key={topic.id} topic={topic} />
            ))}
          </TabsContent>

          <TabsContent value="answered" className="space-y-4">
            {topics
              .filter((topic) => topic.answered)
              .map((topic) => (
                <ForumTopicCard key={topic.id} topic={topic} />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

