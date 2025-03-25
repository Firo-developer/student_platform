import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  FileText,
  FolderOpen,
  Image,
  MoreVertical,
  Music,
  PlusCircle,
  Search,
  Upload,
  Video,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface DocumentCardProps {
  title: string
  type: "pdf" | "doc" | "image" | "video" | "audio" | "folder"
  size?: string
  date: string
  subject?: string
}

function DocumentCard({ title, type, size, date, subject }: DocumentCardProps) {
  const getIcon = () => {
    switch (type) {
      case "pdf":
      case "doc":
        return <FileText className="h-10 w-10 text-blue-500" />
      case "image":
        return <Image className="h-10 w-10 text-green-500" />
      case "video":
        return <Video className="h-10 w-10 text-red-500" />
      case "audio":
        return <Music className="h-10 w-10 text-purple-500" />
      case "folder":
        return <FolderOpen className="h-10 w-10 text-yellow-500" />
      default:
        return <FileText className="h-10 w-10 text-gray-500" />
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 pb-0 flex flex-row items-start justify-between">
        <div className="flex items-center space-x-4">
          {getIcon()}
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            {subject && <CardDescription>{subject}</CardDescription>}
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Download</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Rename</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        {type !== "folder" && size && <div className="text-sm text-muted-foreground">{size}</div>}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="text-xs text-muted-foreground">{date}</div>
        {type !== "folder" && <Badge variant="outline">{type.toUpperCase()}</Badge>}
      </CardFooter>
    </Card>
  )
}

export default function DocumentsPage() {
  const recentDocuments = [
    { title: "Calculus Notes", type: "pdf", size: "2.4 MB", date: "Today", subject: "Mathematics" },
    { title: "Physics Lab Report", type: "doc", size: "1.8 MB", date: "Yesterday", subject: "Science" },
    { title: "Programming Project", type: "folder", date: "3 days ago" },
    { title: "Literature Essay", type: "doc", size: "756 KB", date: "Last week", subject: "Literature" },
  ]

  const allDocuments = [
    ...recentDocuments,
    { title: "Chemistry Diagrams", type: "image", size: "4.2 MB", date: "2 weeks ago", subject: "Science" },
    { title: "History Presentation", type: "pdf", size: "5.7 MB", date: "3 weeks ago", subject: "History" },
    { title: "Lecture Recording", type: "audio", size: "12.3 MB", date: "1 month ago", subject: "Computer Science" },
    { title: "Tutorial Video", type: "video", size: "45.8 MB", date: "1 month ago", subject: "Mathematics" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
        <div className="flex items-center gap-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Folder
          </Button>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search documents..." className="flex-1" />
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Files</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
          <TabsTrigger value="subjects">By Subject</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allDocuments.map((doc, index) => (
              <DocumentCard key={index} {...doc} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recentDocuments.map((doc, index) => (
              <DocumentCard key={index} {...doc} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="shared" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <DocumentCard title="Group Project Materials" type="folder" date="1 week ago" />
            <DocumentCard title="Study Guide" type="pdf" size="3.2 MB" date="2 weeks ago" subject="Multiple Subjects" />
          </div>
        </TabsContent>

        <TabsContent value="subjects" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-lg">Mathematics</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription>4 documents</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="ghost" size="sm" className="w-full">
                  View All
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-lg">Science</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription>6 documents</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="ghost" size="sm" className="w-full">
                  View All
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-purple-500" />
                  <CardTitle className="text-lg">Computer Science</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription>8 documents</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="ghost" size="sm" className="w-full">
                  View All
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

