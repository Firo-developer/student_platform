import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Plus,
  Edit,
  Trash2,
  FolderOpen,
  StickyNote,
  Clock,
  Tag,
  Filter,
  Grid,
  List,
  MoreHorizontal,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NotesPage() {
  const notes = [
    {
      id: 1,
      title: "Math Formulas",
      content: "Key formulas for calculus and algebra that will be on the final exam...",
      subject: "Mathematics",
      tags: ["formulas", "exam prep"],
      lastEdited: "2 days ago",
      color: "blue",
    },
    {
      id: 2,
      title: "Science Lab Notes",
      content: "Observations from the chemistry experiment on acid-base reactions...",
      subject: "Science",
      tags: ["lab", "chemistry"],
      lastEdited: "5 days ago",
      color: "green",
    },
    {
      id: 3,
      title: "English Essay Outline",
      content: "Structure for the comparative essay on modern literature...",
      subject: "English",
      tags: ["essay", "writing"],
      lastEdited: "1 week ago",
      color: "purple",
    },
    {
      id: 4,
      title: "History Timeline",
      content: "Chronological events of World War II for the upcoming test...",
      subject: "History",
      tags: ["timeline", "exam prep"],
      lastEdited: "2 weeks ago",
      color: "amber",
    },
    {
      id: 5,
      title: "Programming Concepts",
      content: "Notes on JavaScript functions, objects, and arrays...",
      subject: "Computer Science",
      tags: ["coding", "javascript"],
      lastEdited: "3 weeks ago",
      color: "red",
    },
    {
      id: 6,
      title: "Study Schedule",
      content: "Weekly plan for exam preparation and assignment completion...",
      subject: "Personal",
      tags: ["planning", "organization"],
      lastEdited: "1 month ago",
      color: "slate",
    },
  ]

  const folders = [
    { id: 1, name: "Mathematics", count: 12, color: "blue" },
    { id: 2, name: "Science", count: 8, color: "green" },
    { id: 3, name: "English", count: 5, color: "purple" },
    { id: 4, name: "History", count: 7, color: "amber" },
    { id: 5, name: "Computer Science", count: 4, color: "red" },
    { id: 6, name: "Personal", count: 3, color: "slate" },
  ]

  const tags = [
    { name: "formulas", count: 3 },
    { name: "exam prep", count: 5 },
    { name: "lab", count: 2 },
    { name: "chemistry", count: 2 },
    { name: "essay", count: 3 },
    { name: "writing", count: 4 },
    { name: "timeline", count: 1 },
    { name: "coding", count: 2 },
    { name: "javascript", count: 1 },
    { name: "planning", count: 2 },
    { name: "organization", count: 3 },
  ]

  const getColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500 dark:bg-blue-600"
      case "green":
        return "bg-green-500 dark:bg-green-600"
      case "purple":
        return "bg-purple-500 dark:bg-purple-600"
      case "amber":
        return "bg-amber-500 dark:bg-amber-600"
      case "red":
        return "bg-red-500 dark:bg-red-600"
      case "slate":
        return "bg-slate-500 dark:bg-slate-600"
      default:
        return "bg-slate-500 dark:bg-slate-600"
    }
  }

  const getFolderColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
      case "green":
        return "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400"
      case "purple":
        return "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400"
      case "amber":
        return "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
      case "red":
        return "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400"
      default:
        return "bg-slate-500/10 text-slate-600 dark:bg-slate-500/20 dark:text-slate-400"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Notes</h2>
          <p className="text-muted-foreground">Organize and manage your study notes</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search notes..." className="pl-8 w-full sm:w-[250px]" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="All Subjects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              {folders.map((folder) => (
                <SelectItem key={folder.id} value={folder.name.toLowerCase()}>
                  {folder.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Note
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all" className="flex items-center">
              <StickyNote className="mr-2 h-4 w-4" />
              All Notes
            </TabsTrigger>
            <TabsTrigger value="folders" className="flex items-center">
              <FolderOpen className="mr-2 h-4 w-4" />
              Folders
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Recent
            </TabsTrigger>
            <TabsTrigger value="tags" className="flex items-center">
              <Tag className="mr-2 h-4 w-4" />
              Tags
            </TabsTrigger>
          </TabsList>

          <div className="hidden md:flex gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-slate-100 dark:bg-slate-800">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {notes.map((note) => (
              <Card key={note.id} className="overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className={`h-2 ${getColorClass(note.color)}`}></div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{note.title}</CardTitle>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-copy mr-2 h-4 w-4"
                          >
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                          </svg>
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardDescription>
                    <Badge variant="outline" className={getFolderColorClass(note.color)}>
                      {note.subject}
                    </Badge>
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">{note.content}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {note.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-slate-100 dark:bg-slate-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between border-t pt-4">
                  <span className="text-xs text-muted-foreground">Edited {note.lastEdited}</span>
                  <Button variant="ghost" size="sm" className="h-8">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="folders" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {folders.map((folder) => (
              <Card key={folder.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${getFolderColorClass(folder.color)}`}>
                      <FolderOpen className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{folder.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {folder.count} {folder.count === 1 ? "note" : "notes"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="cursor-pointer hover:shadow-md transition-shadow border-dashed">
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-full">
                  <Button variant="ghost">
                    <Plus className="h-6 w-6 mr-2" />
                    New Folder
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recently Edited Notes</CardTitle>
              <CardDescription>Your most recently modified notes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notes.slice(0, 5).map((note) => (
                  <div
                    key={note.id}
                    className="flex items-start gap-4 p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className={`rounded-full p-2 ${getFolderColorClass(note.color)}`}>
                      <StickyNote className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="font-medium">{note.title}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={getFolderColorClass(note.color)}>
                            {note.subject}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{note.lastEdited}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{note.content}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Notes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="tags" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
              <CardDescription>Browse your notes by tags</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <Badge
                    key={tag.name}
                    variant="outline"
                    className="text-sm py-2 px-3 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {tag.name} <span className="ml-2 text-xs text-muted-foreground">({tag.count})</span>
                  </Badge>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Notes tagged with "exam prep"</h3>
                <div className="space-y-4">
                  {notes
                    .filter((note) => note.tags.includes("exam prep"))
                    .map((note) => (
                      <div
                        key={note.id}
                        className="flex items-start gap-4 p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        <div className={`rounded-full p-2 ${getFolderColorClass(note.color)}`}>
                          <StickyNote className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="font-medium">{note.title}</h3>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className={getFolderColorClass(note.color)}>
                                {note.subject}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{note.content}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

