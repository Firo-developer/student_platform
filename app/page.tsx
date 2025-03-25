import { Button } from "@/components/ui/button"
import { BookOpen, Brain, CheckCircle, MessageSquare, ArrowRight, Star, Users, Shield } from "lucide-react"
import Link from "next/link"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { AIDemo } from "@/components/ai-demo"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"
import { MainNav } from "@/components/main-nav"

export default function Home() {
  const features = [
    {
      title: "Interactive Quizzes",
      description: "Engage with dynamic quizzes that adapt to your learning style and provide instant feedback",
      icon: CheckCircle,
    },
    {
      title: "AI-Powered Tutoring",
      description: "Get personalized help from our advanced AI assistant that understands your unique learning needs",
      icon: Brain,
    },
    {
      title: "Comprehensive Assignments",
      description: "Complete assignments with instant feedback and step-by-step guidance to improve your understanding",
      icon: BookOpen,
    },
    {
      title: "Discussion Forums",
      description: "Connect with peers and instructors in subject-specific forums to enhance collaborative learning",
      icon: MessageSquare,
    },
  ]

  const benefits = [
    {
      title: "Personalized Learning Path",
      description: "Our AI analyzes your strengths and weaknesses to create a customized learning journey",
      icon: Star,
    },
    {
      title: "24/7 Learning Support",
      description: "Access help whenever you need it with our always-available AI tutoring system",
      icon: Shield,
    },
    {
      title: "Collaborative Environment",
      description: "Learn together with peers through team projects and discussion forums",
      icon: Users,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#111827] to-[#1e1e1e]">
      <MainNav />

      <HeroSection />

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Key Features</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with proven educational methods to deliver an exceptional
              learning experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/10 backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Transform Your Learning Experience</h2>
              <p className="text-lg text-gray-300 mb-8">
                StudyAI helps you master complex subjects through personalized learning paths, interactive exercises,
                and AI-powered assistance that adapts to your unique needs.
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-4 mt-1 bg-indigo-600/20 p-2 rounded-full">
                      <benefit.icon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="/signup" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-[#1e1e1e]/80 backdrop-blur-sm p-6 rounded-lg border border-indigo-500/20">
                <img src="/placeholder.svg?height=400&width=500" alt="Platform Preview" className="rounded-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">AI Integration Demo</h2>
          <p className="text-lg md:text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience the power of our AI tutor firsthand with this interactive demo.
          </p>
          <AIDemo />
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Learning?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of students who are already benefiting from our AI-powered learning platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-8 text-lg">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 text-lg"
            >
              <Link href="/login">Log In</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-black/40 backdrop-blur-sm text-white py-16 px-4 md:px-8 border-t border-[#2a2a2a]/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 mr-2">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 12C4 9.79086 5.79086 8 8 8H16C18.2091 8 20 9.79086 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12Z"
                      fill="#818cf8"
                    />
                    <path d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8H8V6Z" fill="#6366f1" />
                  </svg>
                </div>
                StudyAI
              </h3>
              <p className="text-gray-300 mb-4">Empowering students with AI-enhanced learning tools</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#2a2a2a]/50 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} StudyAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

