"use client"

import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PlusCircle, Copy, ThumbsUp, ThumbsDown, Search, MessageSquare, ArrowLeft, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { useChat } from "ai/react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type ChatHistory = {
  id: number
  title: string
  date: string
  subject?: string
}

export default function AIChatPage() {
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([
    { id: 1, title: "Greeting and Offering Assistance", date: "Today", subject: "General" },
    { id: 2, title: "Math Problem Solving", date: "Yesterday", subject: "Mathematics" },
    { id: 3, title: "Essay Structure Help", date: "3 days ago", subject: "English" },
    { id: 4, title: "Identifying Subject, Verb, and Object", date: "30 Days", subject: "English" },
    { id: 5, title: "Define shock in detail", date: "2025-02", subject: "Science" },
    { id: 6, title: "Hello Who are you?", date: "2025-02", subject: "General" },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedChat, setSelectedChat] = useState<number | null>(1)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("chat")

  // Use the AI SDK's useChat hook for real chat functionality
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content: "Hi, I'm your AI tutor. How can I help you today?",
      },
    ],
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const autoResizeTextarea = () => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto"
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`
    }
  }

  useEffect(() => {
    autoResizeTextarea()
  }, [input])

  // Handle sidebar visibility on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const filteredHistory = chatHistory.filter((chat) => 
    chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (chat.subject && chat.subject.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const createNewChat = () => {
    const newChat = {
      id: chatHistory.length + 1,
      title: "New Chat",
      date: "Today",
      subject: "General"
    }
    setChatHistory([newChat, ...chatHistory])
    setSelectedChat(newChat.id)
  }

  const getSubjectColor = (subject?: string) => {
    switch (subject) {
      case "Mathematics":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      case "Science":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "English":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
      case "History":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400"
    }
  }

  const suggestedPrompts = [
    "Explain the concept of derivatives in calculus",
    "Help me understand photosynthesis",
    "How do I structure a persuasive essay?",
    "What are the key events of World War II?",
    "Explain Newton's laws of motion",
    "Help me solve this equation: 2x + 5 = 13"
  ]

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white dark:bg-slate-950 -m-6">
      {/* Top navigation bar for mobile */}
      <div className="md:hidden flex items-center justify-between p-4 border-b dark:border-slate-800">
        <Link href="/dashboard" className="flex items-center text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span>Back to Dashboard</span>
        </Link>
        <Button variant="ghost" size="icon" className="text-slate-900 dark:text-white" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <MessageSquare className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div
          className={cn(
            "w-full md:w-80 border-r dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col h-full overflow-hidden transition-all duration-300",
            sidebarOpen ? "block" : "hidden md:block",
          )}
        >
          <div className="flex items-center justify-between p-4 border-b dark:border-slate-800">
            <div className="flex items-center">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 12C4 9.79086 5.79086 8 8 8H16C18.2091 8 20 9.79086 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12Z"
                    fill="#3b82f6"
                  />
                  <path d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8H8V6Z" fill="#2563eb" />
                </svg>
              </div>
              <span className="ml-2 text-xl font-semibold text-slate-900 dark:text-white">AI Tutor</span>
            </div>
            <div className="hidden md:block">
              <Link href="/dashboard" className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
            </div>
          </div>

          <div className="p-4">
            <Button
              variant="default"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
              onClick={createNewChat}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              New chat
            </Button>
          </div>

          <div className="px-4 pb-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search chats..."
                className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border-0 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-600 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="px-2">
              {filteredHistory.length > 0 ? (
                <>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-3 py-2">Recent Chats</div>
                  {filteredHistory.map((chat) => (
                    <button
                      key={chat.id}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-md text-sm transition-colors mb-1",
                        selectedChat === chat.id
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white",
                      )}
                      onClick={() => setSelectedChat(chat.id)}
                    >
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="truncate">{chat.title}</div>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-slate-500 dark:text-slate-400">{chat.date}</span>
                            {chat.subject && (
                              <Badge variant="outline" className={cn("ml-2 text-xs", getSubjectColor(chat.subject))}>
                                {chat.subject}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </>
              ) : (
                <div className="text-center py-8 text-slate-500 dark:text-slate-400">No chats found</div>
              )}
            </div>
          </div>

          <div className="p-4 border-t dark:border-slate-800">
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>TC</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium text-slate-900 dark:text-white">Tom Cook</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Student</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <div className="border-b dark:border-slate-800 px-4">
              <TabsList className="h-12">
                <TabsTrigger value="chat" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-500 rounded-none">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat
                </TabsTrigger>
                <TabsTrigger value="explore" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-500 rounded-none">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Explore
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="chat" className="flex-1 flex flex-col p-0 m-0 data-[state=inactive]:hidden">
              <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {messages.map((message) => (
                  <div key={message.id} className="flex items-start gap-4 max-w-3xl mx-auto">
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8 mt-1">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                        <AvatarFallback className="bg-blue-600 text-white">AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "flex-1 prose prose-slate dark:prose-invert max-w-none",
                        message.role === "user" ? "text-right" : "",
                        message.role === "assistant" ? "bg-slate-50 dark:bg-slate-900/80 p-4 rounded-lg" : "",
                      )}
                    >
                      <p className="text-slate-900 dark:text-slate-100">{message.content}</p>
                      {message.role === "assistant" && (
                        <div className="flex items-center gap-2 mt-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>Copy to clipboard</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">
                                  <ThumbsUp className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>Helpful</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">
                                  <ThumbsDown className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>Not helpful</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      )}
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8 mt-1">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>TC</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-4 max-w-3xl mx-auto">
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                      <AvatarFallback className="bg-blue-600 text-white">AI</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900/80 p-4 rounded-lg">
                      <div className="flex space-x-2 text-slate-900 dark:text-slate-100">
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
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-2 sm:p-4 border-t dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="max-w-3xl mx-auto">
                  <form onSubmit={handleSubmit} className="relative">
                    <textarea
                      ref={inputRef}
                      placeholder="Ask me anything about your studies..."
                      value={input}
                      onChange={handleInputChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSubmit(e)
                        }
                      }}
                      className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg p-4 pr-12 resize-none min-h-[56px] max-h-[200px] focus:outline-none focus:ring-1 focus:ring-blue-600"
                      rows={1}
                    />
                    <div className="absolute right-2 bottom-2 flex items-center gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-8"
\

