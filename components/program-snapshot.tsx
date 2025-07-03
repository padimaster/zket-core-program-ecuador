"use client"

import { useEffect, useRef } from "react"

const programDetails = [
  { label: "Duration", value: "6 weeks", unit: "weeks" },
  { label: "Format", value: "Hybrid", unit: "" },
  { label: "Cost", value: "Free", unit: "" },
  { label: "Weekly Load", value: "20", unit: "hours" },
  { label: "Language", value: "Spanish", unit: "" },
  { label: "Applications", value: "15", unit: "spots" },
]

export default function ProgramSnapshot() {
  const countersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const counters = countersRef.current?.querySelectorAll(".counter-value")
    if (!counters || !countersRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((counter) => {
              const target = counter as HTMLElement
              const targetValue = Number.parseInt(target.dataset.target || "0", 10)

              if (isNaN(targetValue) || targetValue === 0) {
                target.textContent = target.dataset.target || "0"
                return
              }

              let count = 0
              const increment = Math.ceil(targetValue / 30)
              const timer = setInterval(() => {
                count += increment
                if (count >= targetValue) {
                  target.textContent = targetValue.toString()
                  clearInterval(timer)
                } else {
                  target.textContent = count.toString()
                }
              }, 50)
            })

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(countersRef.current)

    return () => {
      if (countersRef.current) observer.unobserve(countersRef.current)
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-bg-prim/90">
      <div className="container px-4 md:px-6">
        <h2 className="h2-section text-center">At a Glance</h2>
        <p className="p-large text-center mx-auto mb-12">
          Everything you need to know about the Global Foundations program in one quick view.
        </p>

        <div ref={countersRef} className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {programDetails.map((detail, i) => (
            <div key={i} className="bg-bg-prim border border-txt-sec/20 rounded-lg p-6 text-center">
              <h3 className="h3-subsection text-txt-sec font-space-grotesk mb-2">{detail.label}</h3>
              <div className="flex items-center justify-center">
                <span
                  className="counter-value font-mono text-3xl md:text-4xl font-bold text-accent-prim"
                  data-target={detail.value}
                >
                  0
                </span>
                {detail.unit && <span className="text-txt-sec ml-1 text-lg">{detail.unit}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
