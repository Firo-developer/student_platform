import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Download, FileText, PieChart, TrendingUp } from "lucide-react"
import { ProgressChart } from "@/components/progress-chart"

export default function ReportsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col sm:flex-row h-auto sm:h-16 items-start sm:items-center justify-between gap-4 py-4">
          <h1 className="text-2xl font-bold">Reports</h1>
          <div className="flex items-center gap-4">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Reports
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 px-4 md:px-8">
        <div className="container mx-auto">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview" className="flex items-center">
                <BarChart3 className="mr-2 h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="progress" className="flex items-center">
                <TrendingUp className="mr-2 h-4 w-4" />
                Progress
              </TabsTrigger>
              <TabsTrigger value="detailed" className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Detailed Reports
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-transparent border-[#3a3a3a]/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Quizzes</CardTitle>
                    <CardDescription>Completed vs. Total</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold">15/20</div>
                      <div className="text-sm text-muted-foreground">75% completion</div>
                    </div>
                    <div className="mt-4 h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-transparent border-[#3a3a3a]/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                    <CardDescription>Across all subjects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold">82%</div>
                      <div className="text-sm text-green-500">+5% from last month</div>
                    </div>
                    <div className="mt-4 h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "82%" }}></div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-transparent border-[#3a3a3a]/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Study Time</CardTitle>
                    <CardDescription>Hours this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold">42h</div>
                      <div className="text-sm text-amber-500">-2h from last month</div>
                    </div>
                    <div className="mt-4 h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-transparent border-[#3a3a3a]/50">
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                  <CardDescription>Your performance across all subjects</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProgressChart />
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-transparent border-[#3a3a3a]/50">
                  <CardHeader>
                    <CardTitle>Subject Distribution</CardTitle>
                    <CardDescription>Time spent on each subject</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <div className="w-64 h-64 relative">
                      <PieChart className="w-full h-full text-muted-foreground" />
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-2xl font-bold">42h</span>
                        <span className="text-sm text-muted-foreground">Total</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-transparent border-[#3a3a3a]/50">
                  <CardHeader>
                    <CardTitle>Strengths & Weaknesses</CardTitle>
                    <CardDescription>Based on your performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Strengths</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>Algebra (95% accuracy)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>Grammar (92% accuracy)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>World History (90% accuracy)</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Areas for Improvement</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span>Chemistry (65% accuracy)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span>Calculus (68% accuracy)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span>Physics (70% accuracy)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="progress" className="space-y-6">
              <Card className="bg-transparent border-[#3a3a3a]/50">
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                  <CardDescription>Detailed view of your progress across subjects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Mathematics</h4>
                        <span className="text-sm">85%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Algebra: 95%</span>
                        <span>Geometry: 80%</span>
                        <span>Calculus: 68%</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Science</h4>
                        <span className="text-sm">70%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Biology: 85%</span>
                        <span>Chemistry: 65%</span>
                        <span>Physics: 70%</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">English</h4>
                        <span className="text-sm">88%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: "88%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Grammar: 92%</span>
                        <span>Literature: 85%</span>
                        <span>Writing: 87%</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">History</h4>
                        <span className="text-sm">82%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: "82%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>World History: 90%</span>
                        <span>US History: 75%</span>
                        <span>Ancient History: 80%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-transparent border-[#3a3a3a]/50">
                <CardHeader>
                  <CardTitle>Monthly Progress</CardTitle>
                  <CardDescription>Your progress over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    <BarChart3 className="h-full w-full text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="detailed" className="space-y-6">
              <Card className="bg-transparent border-[#3a3a3a]/50">
                <CardHeader>
                  <CardTitle>Detailed Reports</CardTitle>
                  <CardDescription>Download detailed reports for your records</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <FileText className="h-8 w-8 text-blue-500" />
                        <div>
                          <h3 className="font-medium">Monthly Progress Report</h3>
                          <p className="text-sm text-muted-foreground">May 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <FileText className="h-8 w-8 text-green-500" />
                        <div>
                          <h3 className="font-medium">Subject Performance Analysis</h3>
                          <p className="text-sm text-muted-foreground">Q2 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <FileText className="h-8 w-8 text-purple-500" />
                        <div>
                          <h3 className="font-medium">Quiz and Assignment Summary</h3>
                          <p className="text-sm text-muted-foreground">Last 30 days</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <FileText className="h-8 w-8 text-amber-500" />
                        <div>
                          <h3 className="font-medium">Study Time Analysis</h3>
                          <p className="text-sm text-muted-foreground">Last 6 months</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <FileText className="h-8 w-8 text-red-500" />
                        <div>
                          <h3 className="font-medium">Areas for Improvement Report</h3>
                          <p className="text-sm text-muted-foreground">Custom analysis</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

