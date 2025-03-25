import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function CalendarPage() {
  // Mock data for calendar events
  const events = [
    {
      id: 1,
      title: "Math Quiz",
      date: "2023-05-10",
      time: "10:00 AM",
      type: "quiz",
    },
    {
      id: 2,
      title: "Science Project Due",
      date: "2023-05-15",
      time: "11:59 PM",
      type: "assignment",
    },
    {
      id: 3,
      title: "Study Group - History",
      date: "2023-05-12",
      time: "3:00 PM",
      type: "meeting",
    },
    {
      id: 4,
      title: "English Essay Review",
      date: "2023-05-18",
      time: "2:30 PM",
      type: "meeting",
    },
    {
      id: 5,
      title: "Final Exam - Math",
      date: "2023-05-25",
      time: "9:00 AM",
      type: "exam",
    },
  ]

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = []
    const daysInMonth = 31 // Assuming May 2023

    // Day names
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    // Add day names row
    const dayNamesRow = (
      <tr key="day-names" className="text-center">
        {dayNames.map((day) => (
          <th key={day} className="py-2 font-medium text-sm">
            {day}
          </th>
        ))}
      </tr>
    )
    days.push(dayNamesRow)

    // Starting day of the month (0 = Sunday, 1 = Monday, etc.)
    // Assuming May 1, 2023 is a Monday (1)
    const startDay = 1

    let dayCount = 1
    const weekRows = []

    // Create weeks
    for (let week = 0; week < 6; week++) {
      const weekCells = []

      for (let day = 0; day < 7; day++) {
        if ((week === 0 && day < startDay) || dayCount > daysInMonth) {
          // Empty cell
          weekCells.push(<td key={`empty-${week}-${day}`} className="p-2 border"></td>)
        } else {
          // Get events for this day
          const dayEvents = events.filter((event) => {
            const eventDate = new Date(event.date)
            return eventDate.getDate() === dayCount
          })

          weekCells.push(
            <td key={dayCount} className="p-2 border h-32 align-top">
              <div className="flex flex-col h-full">
                <div className={`text-sm font-medium mb-1 ${dayCount === 10 ? "text-primary" : ""}`}>
                  {dayCount}
                  {dayCount === 10 && <span className="ml-1 text-xs">(Today)</span>}
                </div>
                <div className="space-y-1 overflow-y-auto flex-1">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`text-xs p-1 rounded truncate ${
                        event.type === "quiz"
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                          : event.type === "assignment"
                            ? "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300"
                            : event.type === "meeting"
                              ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                              : "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
                      }`}
                    >
                      <div className="font-medium">{event.title}</div>
                      <div>{event.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </td>,
          )

          dayCount++
        }
      }

      weekRows.push(<tr key={`week-${week}`}>{weekCells}</tr>)

      if (dayCount > daysInMonth) break
    }

    days.push(...weekRows)
    return days
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col sm:flex-row h-auto sm:h-16 items-start sm:items-center justify-between gap-4 py-4">
          <h1 className="text-2xl font-bold">Calendar</h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Select defaultValue="may">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jan">January 2023</SelectItem>
                  <SelectItem value="feb">February 2023</SelectItem>
                  <SelectItem value="mar">March 2023</SelectItem>
                  <SelectItem value="apr">April 2023</SelectItem>
                  <SelectItem value="may">May 2023</SelectItem>
                  <SelectItem value="jun">June 2023</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="md:w-3/4">
              <Card className="bg-transparent border-[#3a3a3a]/50">
                <CardHeader>
                  <CardTitle>May 2023</CardTitle>
                  <CardDescription>View and manage your schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <tbody>{generateCalendarDays()}</tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:w-1/4">
              <Card className="bg-transparent border-[#3a3a3a]/50">
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Events in the next 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.slice(0, 3).map((event) => (
                      <div key={event.id} className="border-b pb-3 last:border-0">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">{event.title}</h3>
                          <Badge
                            variant={
                              event.type === "quiz"
                                ? "default"
                                : event.type === "assignment"
                                  ? "warning"
                                  : event.type === "meeting"
                                    ? "success"
                                    : "secondary"
                            }
                          >
                            {event.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}{" "}
                          at {event.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-transparent border-[#3a3a3a]/50">
                <CardHeader>
                  <CardTitle>Event Legend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>Quiz</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span>Assignment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Meeting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span>Exam</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

