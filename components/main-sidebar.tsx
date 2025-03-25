"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import {
  Home,
  BookOpen,
  BarChart,
  MessageSquare,
  User,
  Bell,
  Brain,
  LogIn,
  UserPlus,
  HelpCircle,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function MainSidebar() {
  const pathname = usePathname()

  // Mock authentication state - in a real app, this would come from your auth context
  const isAuthenticated = false

  const studentMenuItems = [
    { title: "Dashboard", icon: Home, href: "/dashboard" },
    { title: "Quizzes & Assignments", icon: BookOpen, href: "/assignments" },
    { title: "My Progress", icon: BarChart, href: "/progress" },
    { title: "Discussion Forum", icon: MessageSquare, href: "/forum" },
    { title: "AI Tutor", icon: Brain, href: "/ai-tutor" },
    { title: "Notifications", icon: Bell, href: "/notifications" },
    { title: "Profile", icon: User, href: "/profile" },
  ]

  const publicMenuItems = [
    { title: "Home", icon: Home, href: "/" },
    { title: "About", icon: HelpCircle, href: "/about" },
    { title: "Contact", icon: MessageSquare, href: "/contact" },
    { title: "FAQ", icon: HelpCircle, href: "/faq" },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="text-xl font-bold">StudyAI</span>
        </Link>
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        {isAuthenticated ? (
          <SidebarGroup>
            <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {studentMenuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ) : (
          <>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {publicMenuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                        <Link href={item.href}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Log In">
                      <Link href="/login">
                        <LogIn />
                        <span>Log In</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Sign Up">
                      <Link href="/signup">
                        <UserPlus />
                        <span>Sign Up</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center justify-between">
          <ModeToggle />
          {isAuthenticated && (
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Log out</span>
            </Button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

