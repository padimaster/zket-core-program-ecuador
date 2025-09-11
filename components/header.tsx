"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Mountain } from "lucide-react"
import ApplicationButton from "./applicationButton/ApplicationButton"
import AcademyButton from "./AcademyButton"
import Image from "next/image"

const navItems = [
  { name: "About", href: "/about" },
  { name: "Program", href: "/program" },
  //{ name: "Mentors", href: "/mentors" },
  { name: "Resources", href: "/resources" },
  { name: "FAQ", href: "/faq" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActiveRoute = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-bg-prim/90 border-b border-txt-sec/20">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center w-40">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.png" alt="ZK Latitud Ecuador" width={40} height={40} />
            <span className="text-bg-light font-space-grotesk font-bold text-xl">ZK L0</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 ${
                isActiveRoute(item.href)
                  ? "text-accent-prim underline underline-offset-4 font-medium"
                  : "text-bg-light hover:text-accent-prim"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center w-40 justify-end gap-2">
          <AcademyButton />
          <ApplicationButton />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden bg-transparent border-txt-sec/30 hover:bg-accent-prim/10 text-bg-light">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-bg-prim text-bg-light border-txt-sec/20">
              <div className="flex flex-col space-y-6 pt-6">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <Image src="/logo.png" alt="ZKET Core Program" width={40} height={40} />
                  <span className="text-bg-light font-space-grotesk font-bold text-xl">ZK L0</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-xl font-space-grotesk font-semibold transition-colors duration-300 ${
                        isActiveRoute(item.href)
                          ? "text-accent-prim underline underline-offset-4"
                          : "text-bg-light hover:text-accent-prim"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/academy">
                    <Button className="mt-4 bg-gradient-to-r from-[#627EEA] to-[#8A92B2] hover:from-[#4A67D6] hover:to-[#627EEA] text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-[#627EEA]/30 hover:border-[#627EEA]/60">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" /></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="absolute -top-1 -right-1 h-3 w-3 text-yellow-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                        </div>
                        <span className="text-lg font-space-grotesk tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse">
                          ACADEMY
                        </span>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#627EEA] to-[#8A92B2] rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
                    </Button>
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
