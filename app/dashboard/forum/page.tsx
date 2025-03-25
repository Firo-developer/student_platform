import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shell } from "@/components/shell"
import { PlusIcon, SearchIcon } from "@radix-ui/react-icons"

const ForumPage = () => {
  return (
    <Shell>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="font-bold text-lg">Forum</div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Input placeholder="Search topics..." className="max-w-md" />
          <Button>
            <SearchIcon className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button variant="outline">
            <PlusIcon className="mr-2 h-4 w-4" />
            New Topic
          </Button>
        </div>
      </div>
      <div className="grid gap-4 mt-4">
        <Card className="bg-transparent border-[#3a3a3a]/50">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle>Topic 1</CardTitle>
              <div className="flex items-center gap-2">
                <Label htmlFor="filter">Filter:</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>This is a brief description of the topic.</CardDescription>
          </CardContent>
        </Card>
        <Card className="bg-transparent border-[#3a3a3a]/50">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle>Topic 2</CardTitle>
              <div className="flex items-center gap-2">
                <Label htmlFor="filter">Filter:</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>This is another brief description of the topic.</CardDescription>
          </CardContent>
        </Card>
      </div>
    </Shell>
  )
}

export default ForumPage

