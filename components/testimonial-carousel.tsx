"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Computer Science Student",
    content:
      "The AI tutor helped me understand complex algorithms that I was struggling with. It's like having a personal tutor available 24/7!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Biology Major",
    content:
      "I love how the platform adapts to my learning style. The interactive quizzes make studying for exams so much more engaging.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Engineering Student",
    content:
      "The discussion forums connected me with peers who helped me solve problems I was stuck on. The community aspect of this platform is invaluable.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (!mounted) {
    return (
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="relative max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <Quote className="h-10 w-10 text-primary mb-6" />
                  <p className="text-lg mb-6">{testimonials[0].content}</p>
                  <div className="flex items-center mt-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonials[0].avatar} alt={testimonials[0].name} />
                      <AvatarFallback>{testimonials[0].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="font-semibold">{testimonials[0].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[0].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="h-10 w-10 text-primary mb-6" />
                    <p className="text-lg mb-6">{testimonials[current].content}</p>
                    <div className="flex items-center mt-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].name} />
                        <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="font-semibold">{testimonials[current].name}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 gap-2">
            <Button variant="outline" size="icon" className="rounded-full" onClick={prev}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-4" : "bg-primary/30"
                  }`}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrent(index)
                  }}
                >
                  <span className="sr-only">Testimonial {index + 1}</span>
                </button>
              ))}
            </div>
            <Button variant="outline" size="icon" className="rounded-full" onClick={next}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

