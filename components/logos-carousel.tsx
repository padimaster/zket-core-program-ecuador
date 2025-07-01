"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const partnerLogos = Array(10)
  .fill(null)
  .map((_, i) => ({
    name: `Partner ${i + 1}`,
    src: `/placeholder.svg?height=60&width=120&query=tech company logo ${i + 1}`,
  }))

export default function LogosCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let isPaused = false

    const scroll = () => {
      if (!scrollContainer || isPaused) return

      scrollContainer.scrollLeft += 1

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      }

      animationId = requestAnimationFrame(scroll)
    }

    // Clone logos for infinite scroll
    if (containerRef.current) {
      containerRef.current.innerHTML += containerRef.current.innerHTML
    }

    animationId = requestAnimationFrame(scroll)

    const handleMouseEnter = () => {
      isPaused = true
    }

    const handleMouseLeave = () => {
      isPaused = false
      animationId = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <section className="py-16 bg-bg-prim">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 md:text-4xl">Our Partners</h2>

        <div ref={scrollRef} className="overflow-hidden whitespace-nowrap" style={{ scrollbarWidth: "none" }}>
          <div ref={containerRef} className="inline-flex space-x-12 py-4">
            {partnerLogos.map((logo, i) => (
              <div key={i} className="inline-block grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
