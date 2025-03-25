"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Bell, Search, Menu, HelpCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [pageTitle, setPageTitle] = useState("Dashboard")
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)

    // Set page title based on current path
    const path = pathname.split("/").pop()
    if (path) {
      const formattedTitle = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ")
      setPageTitle(formattedTitle === "Dashboard" ? "Dashboard" : formattedTitle)
    } else {
      setPageTitle("Dashboard")
    }

    // Handle sidebar on mobile
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [pathname])

  if (!mounted) {
    return null
  }

  // Don't render the dashboard sidebar on the AI chat page
  const isAIChatPage = pathname === "/dashboard/ai-chat"

  return (
    <div className={cn("min-h-screen", theme === "dark" ? "bg-slate-950" : "bg-slate-50")}>
      <div className="flex h-full">
        {!isAIChatPage && (
          <div className="hidden lg:block">
            <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          </div>
        )}

        <div className="flex-1 flex flex-col min-h-screen">
          <header
            className={cn(
              "sticky top-0 z-40 flex h-16 items-center gap-4 border-b px-4 sm:px-6",
              theme === "dark"
                ? "bg-slate-900/95 border-slate-800 backdrop-blur-sm"
                : "bg-white/95 border-slate-200 backdrop-blur-sm",
            )}
          >
            <div className="flex lg:hidden">
              {!isAIChatPage && (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="p-0 w-72">
                    <div className="flex justify-end p-2">
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetClose>
                    </div>
                    <DashboardSidebar open={true} setOpen={() => {}} isMobile />
                  </SheetContent>
                </Sheet>
              )}
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold">{pageTitle}</h1>
              </div>

              <div className="hidden md:flex items-center max-w-sm">
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className={cn(
                      "pl-8 w-full",
                      theme === "dark" ? "bg-slate-800/50 border-slate-700" : "bg-slate-100/50 border-slate-200",
                    )}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <Button variant="ghost" size="icon" className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                  <HelpCircle className="h-5 w-5" />
                  <span className="sr-only">Help</span>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn("relative", theme === "dark" ? "text-slate-400" : "text-slate-600")}
                    >
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                        3
                      </span>
                      <span className="sr-only">Notifications</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="max-h-[300px] overflow-y-auto">
                      <DropdownMenuItem className="flex flex-col items-start py-2">
                        <div className="font-medium">New Assignment Added</div>
                        <div className="text-sm text-muted-foreground">Math: Linear Equations</div>
                        <div className="text-xs text-muted-foreground mt-1">2 hours ago</div>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex flex-col items-start py-2">
                        <div className="font-medium">Quiz Graded</div>
                        <div className="text-sm text-muted-foreground">Science: Periodic Table</div>
                        <div className="text-xs text-muted-foreground mt-1">Yesterday</div>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex flex-col items-start py-2">
                        <div className="font-medium">Forum Reply</div>
                        <div className="text-sm text-muted-foreground">Someone replied to your question</div>
                        <div className="text-xs text-muted-foreground mt-1">2 days ago</div>
                      </DropdownMenuItem>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="justify-center text-primary">View all notifications</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar
                        className={cn("h-8 w-8 border", theme === "dark" ? "border-slate-700" : "border-slate-200")}
                      >
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>TC</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Help & Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <ModeToggle />
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto">
            <div className={cn("container mx-auto px-4 py-6", isAIChatPage && "p-0 max-w-none")}>{children}</div>
          </main>

          <footer
            className={cn(
              "py-4 px-6 text-center text-sm text-muted-foreground border-t",
              theme === "dark" ? "border-slate-800" : "border-slate-200",
            )}
          >
            <p>&copy; {new Date().getFullYear()} StudyAI. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

