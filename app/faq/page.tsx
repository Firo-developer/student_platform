"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is StudyAI?",
          answer:
            "StudyAI is an AI-powered learning platform designed to help students excel in their studies through interactive quizzes, personalized assignments, and AI tutoring that adapts to each student's learning style and pace.",
        },
        {
          question: "Who can use StudyAI?",
          answer:
            "StudyAI is designed for students of all ages, from middle school through college. Our platform adapts to different learning levels and subjects.",
        },
        {
          question: "Is StudyAI free to use?",
          answer:
            "We offer a free basic plan with limited features. Premium plans with full access to all features are available through affordable subscription options.",
        },
      ],
    },
    {
      category: "AI Tutor",
      questions: [
        {
          question: "How does the AI tutor work?",
          answer:
            "Our AI tutor uses advanced machine learning algorithms to understand your questions and provide personalized explanations. It learns from your interactions to better adapt to your learning style over time.",
        },
        {
          question: "Can the AI tutor help with any subject?",
          answer:
            "Yes, our AI tutor is trained across a wide range of subjects including mathematics, science, language arts, history, and more. It can provide assistance with concepts, problem-solving, and exam preparation.",
        },
        {
          question: "Is the AI tutor available 24/7?",
          answer:
            "Yes, the AI tutor is available anytime, day or night. You can get help whenever you need it, without having to wait for office hours or tutoring sessions.",
        },
      ],
    },
    {
      category: "Assignments & Quizzes",
      questions: [
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
        {
          question: "How do adaptive quizzes work?",
          answer:
            "Adaptive quizzes adjust their difficulty based on your performance. If you're answering questions correctly, the system will present more challenging questions. If you're struggling, it will provide easier questions and additional support.",
        },
      ],
    },
    {
      category: "Technical & Account",
      questions: [
        {
          question: "How do I reset my password?",
          answer:
            "You can reset your password by clicking on the 'Forgot Password' link on the login page. We'll send a password reset link to your registered email address.",
        },
        {
          question: "Is my data secure?",
          answer:
            "Yes, we take data security very seriously. All personal information and learning data is encrypted and stored securely. We never share your information with third parties without your explicit consent.",
        },
        {
          question: "Which devices can I use StudyAI on?",
          answer:
            "StudyAI works on any device with a web browser, including computers, tablets, and smartphones. We also offer mobile apps for iOS and Android for a more optimized experience on mobile devices.",
        },
      ],
    },
  ]

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqCategories

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col space-y-8">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground mb-8">Find answers to common questions about our platform</p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for answers..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8">
          {filteredFAQs.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
                <CardDescription>Common questions about {category.category.toLowerCase()}</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground">
                We couldn't find any FAQs matching your search. Try different keywords or{" "}
                <a href="/contact" className="text-primary hover:underline">
                  contact us
                </a>{" "}
                for more help.
              </p>
            </div>
          )}
        </section>

        <section className="text-center max-w-3xl mx-auto pt-8">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            If you couldn't find the answer you were looking for, please reach out to our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Contact Support
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

