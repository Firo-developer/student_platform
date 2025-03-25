"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full transition-all hover:shadow-lg border-0 card-glass card-accent">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-indigo-400" />
          </div>
          <CardTitle className="text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-gray-300">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

