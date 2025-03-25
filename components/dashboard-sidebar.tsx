"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home,
  Users,
  FolderClosed,
  Calendar,
  FileText,
  BarChart3,
  Settings,
  MessageSquare,
  Bell,
  HelpCircle,
  BookOpen,
  ClipboardList,
  StickyNote,
  LogOut,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Award,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Separator } from "@/components/ui/separator"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
  badge?: number | string
}

interface DashboardSidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
  isMobile?: boolean
}

export function DashboardSidebar({ open, setOpen, isMobile = false }: DashboardSidebarProps) {
  const pathname = usePathname()
  const { theme } = useTheme()

  const isActive = (href: string) => {
    if (href === "/dashboard" && pathname === "/dashboard") {
      return true
    }
    return pathname.startsWith(href) && href !== "/dashboard"
  }

  const navItems: NavItem[] = [
    { title: "Dashboard", href: "/dashboard", icon: Home },
    { title: "Quizzes", href: "/dashboard/quizzes", icon: BookOpen, badge: "2" },
    { title: "Assignments", href: "/dashboard/assignments", icon: ClipboardList, badge: "4" },
    { title: "Courses", href: "/dashboard/courses", icon: GraduationCap },
    { title: "Progress", href: "/dashboard/progress", icon: Award },
    { title: "Calendar", href: "/dashboard/calendar", icon: Calendar },
    { title: "Notes", href: "/dashboard/notes", icon: StickyNote },
    { title: "AI Chat", href: "/dashboard/ai-chat", icon: MessageSquare },
    { title: "Documents", href: "/dashboard/documents", icon: FileText },
  ]

  const secondaryNavItems: NavItem[] = [
    { title: "Team", href: "/dashboard/team", icon: Users },
    { title: "Projects", href: "/dashboard/projects", icon: FolderClosed },
    { title: "Reports", href: "/dashboard/reports", icon: BarChart3 },
    { title: "Notifications", href: "/dashboard/notifications", icon: Bell, badge: "3" },
    { title: "Help", href: "/dashboard/help", icon: HelpCircle },
    { title: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <div
      className={cn(
        "h-full flex flex-col border-r transition-all duration-300",
        theme === "dark" ? "bg-slate-900 border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-900",
        isMobile ? "w-full" : open ? "w-64" : "w-20",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between p-4 border-b",
          theme === "dark" ? "border-slate-800" : "border-slate-200",
        )}
      >
        <Link href="/dashboard" className="flex items-center">
          {open || isMobile ? (
            <>
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 12C4 9.79086 5.79086 8 8 8H16C18.2091 8 20 9.79086 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12Z"
                    fill="#3b82f6"
                  />
                  <path d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8H8V6Z" fill="#2563eb" />
                </svg>
              </div>
              <span className="ml-2 text-xl font-semibold">StudyAI</span>
            </>
          ) : (
            <div className="w-8 h-8 mx-auto">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 12C4 9.79086 5.79086 8 8 8H16C18.2091 8 20 9.79086 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12Z"
                  fill="#3b82f6"
                />
                <path d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8H8V6Z" fill="#2563eb" />
              </svg>
            </div>
          )}
        </Link>
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            className={theme === "dark" ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"}
          >
            {open ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          </Button>
        )}
      </div>

      <div className="flex-1 overflow-auto py-2 scrollbar-thin">
        <nav className="px-3 py-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive(item.href)
                  ? theme === "dark"
                    ? "bg-blue-900/30 text-blue-400"
                    : "bg-blue-50 text-blue-700"
                  : theme === "dark"
                    ? "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                !open && !isMobile && "justify-center",
              )}
            >
              <item.icon className={cn("h-5 w-5", open || isMobile ? "mr-3" : "")} />
              {(open || isMobile) && <span>{item.title}</span>}
              {item.badge && (open || isMobile) && (
                <span
                  className={cn(
                    "ml-auto px-2 py-0.5 rounded-full text-xs font-medium",
                    theme === "dark" ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-700",
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {(open || isMobile) && <Separator className="my-4 mx-3" />}

        <div className="px-3 mt-2">
          {(open || isMobile) && (
            <div
              className={cn(
                "text-xs font-semibold uppercase tracking-wider px-3 mb-2",
                theme === "dark" ? "text-slate-400" : "text-slate-500",
              )}
            >
              More
            </div>
          )}
          <nav className="space-y-1">
            {secondaryNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? theme === "dark"
                      ? "bg-blue-900/30 text-blue-400"
                      : "bg-blue-50 text-blue-700"
                    : theme === "dark"
                      ? "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                  !open && !isMobile && "justify-center",
                )}
              >
                <item.icon className={cn("h-5 w-5", open || isMobile ? "mr-3" : "")} />
                {(open || isMobile) && <span>{item.title}</span>}
                {item.badge && (open || isMobile) && (
                  <span
                    className={cn(
                      "ml-auto px-2 py-0.5 rounded-full text-xs font-medium",
                      theme === "dark" ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-700",
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className={cn("p-4 border-t", theme === "dark" ? "border-slate-800" : "border-slate-200")}>
        <div className={cn("flex items-center", !open && !isMobile && "justify-center")}>
          <Avatar className={cn("h-8 w-8 border", theme === "dark" ? "border-slate-700" : "border-slate-200")}>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>TC</AvatarFallback>
          </Avatar>
          {(open || isMobile) && (
            <div className="ml-3">
              <p className="text-sm font-medium">Tom Cook</p>
              <p className={cn("text-xs", theme === "dark" ? "text-slate-400" : "text-slate-500")}>Student</p>
            </div>
          )}
          {(open || isMobile) && (
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "ml-auto",
                theme === "dark" ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900",
              )}
            >
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Log out</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

