"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2a2a2a]/50 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 12C4 9.79086 5.79086 8 8 8H16C18.2091 8 20 9.79086 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12Z"
                  fill="#818cf8"
                />
                <path d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8H8V6Z" fill="#6366f1" />
              </svg>
            </div>
            <span className="ml-2 text-xl font-semibold text-white">StudyAI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="ghost" className="text-gray-300 hover:text-white hover:bg-[#2a2a2a]/50">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Link href="/signup">Sign up</Link>
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/features"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col space-y-3 pt-3 border-t border-[#2a2a2a]/50">
              <Button
                asChild
                variant="ghost"
                className="justify-center text-gray-300 hover:text-white hover:bg-[#2a2a2a]/50"
              >
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
              <Button asChild className="justify-center bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

