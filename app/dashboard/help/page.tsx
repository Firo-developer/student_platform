import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, BookOpen, MessageSquare, Video, FileText } from "lucide-react"

export default function HelpPage() {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page. We'll send a password reset link to your registered email address.",
    },
    {
      question: "How does the AI tutor work?",
      answer:
        "Our AI tutor uses advanced machine learning algorithms to understand your questions and provide personalized explanations. It learns from your interactions to better adapt to your learning style over time.",
    },
    {
      question: "Can I access the platform on mobile devices?",
      answer: "Yes, our platform is fully responsive and works on smartphones, tablets, and computers.",
    },
    {
      question: "How are assignments graded?",
      answer:
        "Assignments are graded using a combination of AI evaluation and, for certain types of work, human review. Our system provides detailed feedback to help you understand where you excelled and where you can improve.",
    },
    {
      question: "Can I retake quizzes?",
      answer:
        "Yes, most quizzes can be retaken multiple times. This allows you to practice and improve your understanding of the material. Each attempt may present different questions on the same topics.",
    },
  ]

  const tutorials = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of navigating the platform",
      icon: BookOpen,
    },
    {
      title: "Using the AI Tutor",
      description: "How to get the most out of your AI tutor sessions",
      icon: MessageSquare,
    },
    {
      title: "Taking Quizzes",
      description: "Tips for quiz preparation and completion",
      icon: FileText,
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides for all features",
      icon: Video,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Help Center</h2>
        <p className="text-muted-foreground">Find answers to common questions and learn how to use the platform.</p>
      </div>

      <div className="relative w-full max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search for help articles..." className="pl-10 h-12" />
      </div>

      <Tabs defaultValue="faq" className="space-y-4">
        <TabsList>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="contact">Contact Support</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-4">
          <Card className="bg-transparent border-[#3a3a3a]/50">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions about the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-[#3a3a3a]/50">
            <CardHeader>
              <CardTitle>Popular Topics</CardTitle>
              <CardDescription>Browse help articles by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Button variant="outline" className="h-auto p-4 justify-start">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium">Account Settings</span>
                    <span className="text-xs text-muted-foreground">Manage your account and profile</span>
                  </div>
                </Button>

                <Button variant="outline" className="h-auto p-4 justify-start">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium">Assignments & Quizzes</span>
                    <span className="text-xs text-muted-foreground">How to submit and track your work</span>
                  </div>
                </Button>

                <Button variant="outline" className="h-auto p-4 justify-start">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium">AI Tutor</span>
                    <span className="text-xs text-muted-foreground">Getting help from the AI assistant</span>
                  </div>
                </Button>

                <Button variant="outline" className="h-auto p-4 justify-start">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium">Technical Issues</span>
                    <span className="text-xs text-muted-foreground">Troubleshooting common problems</span>
                  </div>
                </Button>

                <Button variant="outline" className="h-auto p-4 justify-start">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium">Study Tools</span>
                    <span className="text-xs text-muted-foreground">Using notes, flashcards, and more</span>
                  </div>
                </Button>

                <Button variant="outline" className="h-auto p-4 justify-start">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium">Privacy & Security</span>
                    <span className="text-xs text-muted-foreground">How we protect your data</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutorials" className="space-y-4">
          <Card className="bg-transparent border-[#3a3a3a]/50">
            <CardHeader>
              <CardTitle>Video Tutorials</CardTitle>
              <CardDescription>Watch step-by-step guides for using the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Video className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Getting Started with StudyAI</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      A complete tour of the platform and its features
                    </p>
                    <Button variant="outline" className="mt-4 w-full">
                      Watch Now
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Video className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Using the AI Tutor Effectively</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Learn how to ask questions and get the best responses
                    </p>
                    <Button variant="outline" className="mt-4 w-full">
                      Watch Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-[#3a3a3a]/50">
            <CardHeader>
              <CardTitle>Written Guides</CardTitle>
              <CardDescription>Detailed tutorials and how-to articles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tutorials.map((tutorial, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="rounded-full p-2 bg-muted">
                      <tutorial.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{tutorial.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{tutorial.description}</p>
                      <Button variant="link" className="p-0 h-auto mt-2">
                        Read Guide
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card className="bg-transparent border-[#3a3a3a]/50">
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="border rounded-lg p-6">
                  <div className="flex flex-col items-center text-center">
                    <MessageSquare className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Live Chat</h3>
                    <p className="text-muted-foreground mb-4">Chat with our support team in real-time</p>
                    <Button>Start Chat</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex flex-col items-center text-center">
                    <FileText className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Submit a Ticket</h3>
                    <p className="text-muted-foreground mb-4">Create a support ticket for complex issues</p>
                    <Button>Create Ticket</Button>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full p-2 bg-muted">
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">support@studyai.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="rounded-full p-2 bg-muted">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="rounded-full p-2 bg-muted">
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
                        className="lucide lucide-clock"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Support Hours</p>
                      <p className="text-sm text-muted-foreground">Monday - Friday, 9am - 5pm EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-[#3a3a3a]/50">
            <CardHeader>
              <CardTitle>Frequently Asked Support Questions</CardTitle>
              <CardDescription>Quick answers to common support inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How quickly will I receive a response to my support ticket?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      We aim to respond to all support tickets within 24 hours during business days. For urgent issues,
                      please use the live chat option for faster assistance.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Can I get a refund if I'm not satisfied with the service?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes, we offer a 30-day money-back guarantee for all new subscriptions. Please contact our support
                      team to process your refund request.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">How do I report a technical issue or bug?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      You can report technical issues by submitting a support ticket. Please include as much detail as
                      possible, including screenshots and steps to reproduce the issue.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

