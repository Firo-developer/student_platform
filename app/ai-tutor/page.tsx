import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AITutorChat } from "@/components/ai-tutor-chat"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubjectSelector } from "@/components/subject-selector"

export default function AITutorPage() {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Tutor</h1>
          <p className="text-muted-foreground">Get personalized help with your studies from our AI tutor</p>
        </div>

        <Tabs defaultValue="chat" className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="subjects">Subjects</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <SubjectSelector />
          </div>

          <TabsContent value="chat" className="space-y-6">
            <Card className="border-none shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle>AI Tutor Chat</CardTitle>
                <CardDescription>Ask questions about any subject and get instant help</CardDescription>
              </CardHeader>
              <CardContent>
                <AITutorChat />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subjects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Subjects</CardTitle>
                <CardDescription>The AI tutor can help with the following subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Mathematics",
                    "Science",
                    "English",
                    "History",
                    "Geography",
                    "Computer Science",
                    "Physics",
                    "Chemistry",
                    "Biology",
                  ].map((subject) => (
                    <Card key={subject} className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">{subject}</CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Chat History</CardTitle>
                <CardDescription>Your recent conversations with the AI tutor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Help with Quadratic Equations",
                      date: "Today, 2:30 PM",
                      preview: "I need help understanding how to solve quadratic equations...",
                    },
                    {
                      title: "English Essay Structure",
                      date: "Yesterday, 4:15 PM",
                      preview: "Can you explain how to structure a persuasive essay?...",
                    },
                    {
                      title: "Chemistry: Periodic Table",
                      date: "3 days ago",
                      preview: "I'm struggling to memorize the periodic table elements...",
                    },
                  ].map((chat, index) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{chat.title}</h3>
                        <span className="text-sm text-muted-foreground">{chat.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 truncate">{chat.preview}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

