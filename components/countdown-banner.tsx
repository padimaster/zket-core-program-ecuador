"use client"

import { useEffect, useState } from "react"

const targetDate = new Date("2025-08-03T23:59:00-05:00").getTime()

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <section className="py-8 bg-gradient-to-r from-accent-prim/90 to-accent-prim">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-bg-light font-space-grotesk font-bold text-xl md:text-2xl">Applications Close In:</h3>
            <p className="text-bg-light/80">Secure your spot before the deadline</p>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-bg-prim/90 text-accent-yellow font-mono text-2xl md:text-3xl font-bold w-16 h-16 rounded flex items-center justify-center animate-flip">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <span className="text-bg-light text-xs mt-1">Days</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-bg-prim/90 text-accent-yellow font-mono text-2xl md:text-3xl font-bold w-16 h-16 rounded flex items-center justify-center animate-flip">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <span className="text-bg-light text-xs mt-1">Hours</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-bg-prim/90 text-accent-yellow font-mono text-2xl md:text-3xl font-bold w-16 h-16 rounded flex items-center justify-center animate-flip">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <span className="text-bg-light text-xs mt-1">Minutes</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-bg-prim/90 text-accent-yellow font-mono text-2xl md:text-3xl font-bold w-16 h-16 rounded flex items-center justify-center animate-flip">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <span className="text-bg-light text-xs mt-1">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
