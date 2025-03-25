"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Paperclip, Image, Mic, Bot, User } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  id: number
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export function AIChat() {
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
    <div className="flex flex-col h-full border-t">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className="flex gap-3 max-w-[80%]">
                {message.sender === "ai" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
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
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                  <AvatarFallback>
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
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
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="border-t p-4">
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
              <Button variant="ghost" size="icon">
                <Paperclip className="h-4 w-4" />
                <span className="sr-only">Attach file</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Image className="h-4 w-4" />
                <span className="sr-only">Attach image</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Mic className="h-4 w-4" />
                <span className="sr-only">Voice input</span>
              </Button>
            </div>

            <Button onClick={handleSend} disabled={!input.trim() || isTyping}>
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

