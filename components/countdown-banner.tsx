"use client"

import { useEffect, useState } from "react"
// 1. Import centralized configuration
import { ARE_APPLICATIONS_OPEN, APPLICATIONS_CLOSE_DATE } from "@/lib/appConfig"
// 2. Import our dynamic button

import ApplicationButton from "./applicationButton/ApplicationButton"
// Use the date from the config file
const targetDate = new Date(APPLICATIONS_CLOSE_DATE).getTime()

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // This state helps avoid hydration errors in Next.js
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

  // Only activate the countdown if applications are open
    if (ARE_APPLICATIONS_OPEN) {
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
    }
  }, []) // The empty array ensures this effect runs only once on mount

  if (!isClient) {
  return null // Prevents server-side rendering to avoid mismatches
  }

  // 3. Conditional rendering: decide what to show
  return ARE_APPLICATIONS_OPEN ? (
  // OPEN STATE: Show the countdown
    <section className="py-8 bg-gradient-to-r from-accent-prim/90 to-accent-prim">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="h3-subsection text-bg-light font-space-grotesk">Applications Close In:</h3>
            <p className="p-small text-bg-light/80">Secure your spot before the deadline</p>
          </div>
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {/* ... All the JSX for the counters (days, hours, etc.) goes here ... */}
            {/* Omitted for brevity, but it's the same as you already had */}
            <div className="flex flex-col items-center">
              <div className="bg-white text-accent-prim font-mono text-3xl font-bold w-16 h-16 rounded-lg flex items-center justify-center shadow-lg">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <span className="text-bg-light text-xs mt-1 font-medium">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white text-accent-prim font-mono text-3xl font-bold w-16 h-16 rounded-lg flex items-center justify-center shadow-lg">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <span className="text-bg-light text-xs mt-1 font-medium">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white text-accent-prim font-mono text-3xl font-bold w-16 h-16 rounded-lg flex items-center justify-center shadow-lg">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <span className="text-bg-light text-xs mt-1 font-medium">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white text-accent-prim font-mono text-3xl font-bold w-16 h-16 rounded-lg flex items-center justify-center shadow-lg">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <span className="text-bg-light text-xs mt-1 font-medium">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
  // CLOSED STATE: Show the alternative message
    <section className="py-8 bg-gray-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div>
            <h3 className="h3-subsection font-space-grotesk">The Course is on Flight!</h3>
            <p className="p-small text-gray-300 max-w-2xl mt-2">
              Don't get upset, check our social media for updates or let us know that you're interested for the next cohort.
            </p>
          </div>
          {/* 4. Reuse our dynamic button */}
          <ApplicationButton />
        </div>
      </div>
    </section>
  )
}