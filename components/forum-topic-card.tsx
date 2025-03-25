"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Eye, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface ForumTopic {
  id: number
  title: string
  author: string
  subject: string
  replies: number
  views: number
  lastActivity: string
  answered: boolean
}

interface ForumTopicCardProps {
  topic: ForumTopic
}

export function ForumTopicCard({ topic }: ForumTopicCardProps) {
  return (
    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
      <Link href={`/forum/${topic.id}`}>
        <Card className="cursor-pointer hover:bg-[#3a3a3a]/20 transition-colors bg-transparent border-[#3a3a3a]/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt={topic.author} />
                <AvatarFallback>{topic.author[0]}</AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">{topic.title}</h3>
                  {topic.answered && (
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Answered
                    </Badge>
                  )}
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <span>Posted by {topic.author}</span>
                  <span className="mx-2">•</span>
                  <Badge variant="secondary">{topic.subject}</Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center">
                    <MessageSquare className="mr-1 h-4 w-4" />
                    {topic.replies} replies
                  </div>
                  <div className="flex items-center">
                    <Eye className="mr-1 h-4 w-4" />
                    {topic.views} views
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {topic.lastActivity}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

