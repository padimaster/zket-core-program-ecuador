"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Mountain } from "lucide-react"
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
        <div className="flex items-center w-32">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Global Foundations" width={40} height={40} />
            <span className="sr-only">Global Foundations</span>
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

        <div className="flex items-center w-32 justify-end">
          <Link href="/apply">
            <Button className="hidden lg:inline-flex bg-accent-prim hover:bg-accent-yellow text-white transition-colors duration-300">
              Apply Now
            </Button>
          </Link>

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
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <Image src="/logo.png" alt="ZKET Core Program" width={40} height={40} />
                  <span className="sr-only">ZKET Core Program</span>
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
                  <Link href="/apply">
                    <Button className="mt-4 bg-accent-prim hover:bg-accent-yellow text-white transition-colors duration-300">
                      Apply Now
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
