import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const assignments = [
  {
    id: "1",
    title: "Research Paper on Quantum Computing",
    description: "Explore the principles and applications of quantum computing.",
    dueDate: "2024-03-15",
    status: "In Progress",
  },
  {
    id: "2",
    title: "Presentation on Renewable Energy Sources",
    description: "Present the benefits and challenges of different renewable energy sources.",
    dueDate: "2024-03-22",
    status: "Completed",
  },
  {
    id: "3",
    title: "Lab Report on Circuit Analysis",
    description: "Analyze and document the behavior of electrical circuits.",
    dueDate: "2024-03-29",
    status: "Not Started",
  },
  {
    id: "4",
    title: "Essay on Artificial Intelligence Ethics",
    description: "Discuss the ethical implications of artificial intelligence development.",
    dueDate: "2024-04-05",
    status: "In Progress",
  },
  {
    id: "5",
    title: "Project Proposal on Sustainable Agriculture",
    description: "Develop a proposal for implementing sustainable agricultural practices.",
    dueDate: "2024-04-12",
    status: "Not Started",
  },
  {
    id: "6",
    title: "Case Study on Business Strategy",
    description: "Analyze and evaluate the business strategy of a selected company.",
    dueDate: "2024-04-19",
    status: "Completed",
  },
]

export default function AssignmentsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Assignments</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex items-center">
          <Input type="text" placeholder="Search assignments..." className="pr-10" />
          <Search className="absolute right-3 text-gray-500" />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="inProgress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="notStarted">Not Started</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Filter</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
        {assignments.map((assignment) => (
          <Card key={assignment.id} className="overflow-hidden flex flex-col bg-transparent border-[#3a3a3a]/50">
            <CardHeader>
              <CardTitle>{assignment.title}</CardTitle>
              <CardDescription>{assignment.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Label htmlFor={`due-date-${assignment.id}`}>Due Date:</Label>
                <p id={`due-date-${assignment.id}`}>{assignment.dueDate}</p>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor={`status-${assignment.id}`}>Status:</Label>
                <p id={`status-${assignment.id}`}>{assignment.status}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

