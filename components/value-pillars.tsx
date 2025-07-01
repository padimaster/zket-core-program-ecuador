"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Award, Globe } from "lucide-react"

const pillars = [
  {
    title: "Cryptography, not speculation",
    description:
      "Focus on the technical foundations of zero-knowledge proofs and programmable cryptography, not market trends or token economics.",
    icon: Code,
  },
  {
    title: "Elite & free",
    description:
      "A highly selective program with zero cost to participants. We invest in talent that will shape the future of web infrastructure.",
    icon: Award,
  },
  {
    title: "Global mentors, local impact",
    description:
      "Learn from world-class engineers while building solutions for regional challenges and connecting to the global ecosystem.",
    icon: Globe,
  },
]

export default function ValuePillars() {
  const [visiblePillars, setVisiblePillars] = useState<number[]>([])
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = pillarRefs.current.findIndex((ref) => ref === entry.target)
          if (entry.isIntersecting && index !== -1 && !visiblePillars.includes(index)) {
            setVisiblePillars((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    pillarRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      pillarRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [visiblePillars])

  return (
    <section className="py-16 md:py-24 bg-bg-prim">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 md:text-4xl">Our Core Values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              ref={(el) => (pillarRefs.current[i] = el)}
              className={`transition-all duration-700 transform ${
                visiblePillars.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <Card className="h-full card-hover bg-bg-prim border border-txt-sec/20">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-accent-prim/10 flex items-center justify-center mb-4">
                    <pillar.icon className="h-6 w-6 text-accent-prim" />
                  </div>
                  <CardTitle className="text-bg-light">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-txt-sec">{pillar.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
