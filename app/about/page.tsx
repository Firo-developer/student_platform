import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Brain, CheckCircle, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Education Director",
      bio: "Former professor with 15 years of experience in educational technology",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Chen",
      role: "AI Development Lead",
      bio: "AI researcher specializing in educational applications of machine learning",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Emma Davis",
      role: "Curriculum Designer",
      bio: "Educational psychologist focused on personalized learning experiences",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "James Wilson",
      role: "Student Experience Manager",
      bio: "Former teacher dedicated to creating engaging learning environments",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col space-y-12">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Our Platform</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're revolutionizing education with AI-powered learning tools that adapt to each student's unique needs and
            learning style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that every student deserves personalized education that adapts to their unique learning style
                and pace. Our mission is to leverage artificial intelligence to create a learning experience that's
                engaging, effective, and accessible to all.
              </p>
              <p className="text-lg text-muted-foreground">
                By combining advanced AI technology with proven educational methodologies, we're creating a platform
                that not only helps students master academic subjects but also develops critical thinking and
                problem-solving skills essential for success in the modern world.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg mb-6">
                A world where education is personalized, engaging, and accessible to everyone, regardless of their
                background or circumstances.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Personalized learning paths for every student</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                  <span>AI-powered tutoring available 24/7</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Collaborative learning communities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Data-driven insights for continuous improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Interactive Quizzes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Engage with dynamic quizzes that adapt to your learning style and provide instant feedback.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Tutoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Get personalized help from our advanced AI assistant that understands your specific needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Comprehensive Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Complete assignments with step-by-step guidance and receive detailed feedback.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Discussion Forums</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connect with peers and instructors in subject-specific forums to enhance your learning.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who are already benefiting from our AI-powered platform.
          </p>
          <Button asChild size="lg">
            <Link href="/signup">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}

