"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Paperclip, Image, Mic, Eraser } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type Message = {
  id: number
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export function AITutorChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content:
        "Hi there! I'm your AI tutor. I can help with math, science, language arts, history, and more. What would you like to learn today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("math") || input.toLowerCase().includes("equation")) {
        response =
          "For math problems, I can help break down equations step by step. Let's start with the basics:\n\n1. Identify the type of equation (linear, quadratic, etc.)\n2. Apply the appropriate formula or method\n3. Solve systematically\n\nCould you share a specific math problem you're working on?"
      } else if (input.toLowerCase().includes("science") || input.toLowerCase().includes("chemistry")) {
        response =
          "Science concepts can be fascinating! Whether it's physics, chemistry, or biology, I can help explain complex ideas in simple terms. What specific topic are you studying?"
      } else if (input.toLowerCase().includes("essay") || input.toLowerCase().includes("writing")) {
        response =
          "Writing essays requires good structure and clear arguments. Here's a basic outline:\n\n1. Introduction with thesis statement\n2. Body paragraphs with supporting evidence\n3. Conclusion that restates your main points\n\nWhat type of essay are you working on?"
      } else {
        response =
          "I'd be happy to help you with that! To provide the best assistance, could you give me more specific details about what you're trying to learn or understand?"
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        content: response,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const autoResizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  useEffect(() => {
    autoResizeTextarea()
  }, [input])

  return (
    <div className="flex flex-col h-[600px] border rounded-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className="flex gap-3 max-w-[80%]">
                {message.sender === "ai" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg p-3 ${
                    message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <div>
                    <p className="whitespace-pre-line">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1 text-right">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                {message.sender === "user" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>ME</AvatarFallback>
                  </Avatar>
                )}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex space-x-1">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                      ●
                    </span>
                    <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                      ●
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4">
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="mb-2">
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="draw">Draw</TabsTrigger>
            <TabsTrigger value="math">Math</TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="mt-0">
            <div className="flex flex-col space-y-2">
              <Textarea
                ref={textareaRef}
                placeholder="Ask me anything about your studies..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="min-h-[80px] resize-none"
              />
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Paperclip className="h-4 w-4" />
                          <span className="sr-only">Attach file</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Attach file</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Image className="h-4 w-4" />
                          <span className="sr-only">Attach image</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Attach image</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Mic className="h-4 w-4" />
                          <span className="sr-only">Voice input</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Voice input</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <Button onClick={handleSend} disabled={!input.trim() || isTyping}>
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="draw" className="mt-0">
            <div className="border rounded-md h-[200px] flex items-center justify-center bg-muted/30">
              <div className="text-center">
                <Eraser className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-muted-foreground">Drawing canvas will appear here</p>
                <p className="text-xs text-muted-foreground mt-1">Draw diagrams or equations to get help</p>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <Button disabled>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="math" className="mt-0">
            <div className="border rounded-md h-[200px] flex items-center justify-center bg-muted/30">
              <div className="text-center">
                <p className="text-muted-foreground">Math equation editor will appear here</p>
                <p className="text-xs text-muted-foreground mt-1">Type or draw mathematical equations</p>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <Button disabled>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

