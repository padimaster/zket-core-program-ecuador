"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import ApplicationButton from "./applicationButton/ApplicationButton"
import AcademyButton from "./AcademyButton"
import Image from "next/image"

const navItems = [
  { name: "About", href: "/about" },
  { name: "Program", href: "/program" },
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
        <div className="flex items-center">
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

        {/* Desktop & Mobile Buttons Container */}
        <div className="flex items-center justify-end">
          {/* only desktop buttons*/}
          <div className="hidden lg:flex items-center gap-2">
            <AcademyButton />
            <ApplicationButton />
          </div>

          {/* Container only mobile */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-transparent border-txt-sec/30 hover:bg-accent-prim/10 text-bg-light">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-bg-prim text-bg-light border-txt-sec/20">
                {/* HEADER */}
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                </SheetHeader>
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
                    <AcademyButton />
                    <ApplicationButton variant="mobile" />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}