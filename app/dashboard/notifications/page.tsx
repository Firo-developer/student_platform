import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle, MessageSquare, Bell, Calendar, FileText } from "lucide-react"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "New Assignment Added",
      description: "Math: Linear Equations",
      time: "2 hours ago",
      type: "assignment",
      read: false,
    },
    {
      id: 2,
      title: "Quiz Graded",
      description: "Science: Periodic Table - You scored 85%",
      time: "Yesterday",
      type: "quiz",
      read: false,
    },
    {
      id: 3,
      title: "Forum Reply",
      description: "Someone replied to your question in Science Forum",
      time: "2 days ago",
      type: "forum",
      read: true,
    },
    {
      id: 4,
      title: "Upcoming Quiz",
      description: "History: World War II - Scheduled for tomorrow",
      time: "2 days ago",
      type: "reminder",
      read: true,
    },
    {
      id: 5,
      title: "AI Tutor Session Reminder",
      description: "Your scheduled session starts in 1 hour",
      time: "3 days ago",
      type: "reminder",
      read: true,
    },
    {
      id: 6,
      title: "New Study Material",
      description: "English: Essay Writing Guide has been added",
      time: "4 days ago",
      type: "material",
      read: true,
    },
    {
      id: 7,
      title: "Assignment Due Soon",
      description: "Science Lab Report due in 2 days",
      time: "5 days ago",
      type: "reminder",
      read: true,
    },
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return <FileText className="h-5 w-5 text-blue-500" />
      case "quiz":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "forum":
        return <MessageSquare className="h-5 w-5 text-purple-500" />
      case "reminder":
        return <Calendar className="h-5 w-5 text-amber-500" />
      case "material":
        return <BookOpen className="h-5 w-5 text-indigo-500" />
      default:
        return <Bell className="h-5 w-5 text-slate-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Notifications</h2>
          <p className="text-muted-foreground">Stay updated with your latest activities and announcements.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button variant="outline">Mark All as Read</Button>
          <Button>Settings</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">
            Unread
            <Badge variant="secondary" className="ml-2">
              {notifications.filter((n) => !n.read).length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          <TabsTrigger value="reminders">Reminders</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="bg-transparent border-[#3a3a3a]/50">
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>View all your recent notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-4 p-4 border rounded-lg ${
                      !notification.read ? "bg-muted/40" : ""
                    }`}
                  >
                    <div className="rounded-full p-2 bg-muted">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 w-full">
                        <h3 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {!notification.read && (
                            <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                              New
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unread">
          <Card className="bg-transparent border-[#3a3a3a]/50">
            <CardHeader>
              <CardTitle>Unread Notifications</CardTitle>
              <CardDescription>Notifications you haven't read yet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications
                  .filter((n) => !n.read)
                  .map((notification) => (
                    <div key={notification.id} className="flex items-start gap-4 p-4 border rounded-lg bg-muted/40">
                      <div className="rounded-full p-2 bg-muted">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 w-full">
                          <h3 className="font-semibold">{notification.title}</h3>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                              New
                            </Badge>
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments">
          <Card className="bg-transparent border-[#3a3a3a]/50">
            <CardHeader>
              <CardTitle>Assignment Notifications</CardTitle>
              <CardDescription>Updates about your assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications
                  .filter((n) => n.type === "assignment")
                  .map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 p-4 border rounded-lg ${
                        !notification.read ? "bg-muted/40" : ""
                      }`}
                    >
                      <div className="rounded-full p-2 bg-muted">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 w-full">
                          <h3 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                            {notification.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            {!notification.read && (
                              <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                                New
                              </Badge>
                            )}
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                      </div>
                    </div>
                  ))}

                {notifications.filter((n) => n.type === "assignment").length === 0 && (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium">No Assignment Notifications</h3>
                    <p className="text-muted-foreground">You don't have any assignment notifications at the moment.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quizzes">
          <Card className="bg-transparent border-[#3a3a3a]/50">
            <CardHeader>
              <CardTitle>Quiz Notifications</CardTitle>
              <CardDescription>Updates about your quizzes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications
                  .filter((n) => n.type === "quiz")
                  .map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 p-4 border rounded-lg ${
                        !notification.read ? "bg-muted/40" : ""
                      }`}
                    >
                      <div className="rounded-full p-2 bg-muted">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 w-full">
                          <h3 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                            {notification.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            {!notification.read && (
                              <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                                New
                              </Badge>
                            )}
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                      </div>
                    </div>
                  ))}

                {notifications.filter((n) => n.type === "quiz").length === 0 && (
                  <div className="text-center py-8">
                    <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium">No Quiz Notifications</h3>
                    <p className="text-muted-foreground">You don't have any quiz notifications at the moment.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reminders">
          <Card className="bg-transparent border-[#3a3a3a]/50">
            <CardHeader>
              <CardTitle>Reminder Notifications</CardTitle>
              <CardDescription>Important reminders and upcoming events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications
                  .filter((n) => n.type === "reminder")
                  .map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 p-4 border rounded-lg ${
                        !notification.read ? "bg-muted/40" : ""
                      }`}
                    >
                      <div className="rounded-full p-2 bg-muted">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 w-full">
                          <h3 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                            {notification.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            {!notification.read && (
                              <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                                New
                              </Badge>
                            )}
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

