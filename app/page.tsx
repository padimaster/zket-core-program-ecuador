import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import HeroParticles from "@/components/hero-particles"
import ValuePillars from "@/components/value-pillars"
import ProgramSnapshot from "@/components/program-snapshot"
import CountdownBanner from "@/components/countdown-banner"
import LogosCarousel from "@/components/logos-carousel"
import TestimonialStrip from "@/components/testimonial-strip"
import Link from "next/link"
import StrategicPartners from "@/components/strategic-partners"
import TargetAudience from "@/components/target-audience"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <HeroParticles />
        <div className="container relative z-10 px-4 py-24 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto split-reveal">
            ZKET Core Program Ecuador 2025 - Master Programmable Cryptography
          </h1>
          <p className="max-w-xl mx-auto mb-8 text-txt-sec md:text-lg">
            An initiative by the ZK Education Team of the Ethereum Foundation. 
            Join the next generation of ZK experts in 6 intensive weeks of training in Quito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button
                size="lg"
                className="text-bg-light bg-accent-prim hover:bg-accent-yellow transition-colors duration-300"
              >
                Apply Now!
              </Button>
            </Link>
            <Link href="/program">
              <Button variant="ghost" size="lg" className="text-bg-light border border-txt-sec hover:bg-bg-prim/50">
                See Curriculum
              </Button>
            </Link>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-txt-sec" />
          </div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <StrategicPartners />

      {/* Value Proposition - 3 Pillars */}
      <ValuePillars />

      {/* Target Audience Section */}
      <TargetAudience />

      {/* Program Snapshot */}
      <ProgramSnapshot />

      {/* Countdown Banner */}
      <CountdownBanner />

      {/* Logos Carousel */}
      <LogosCarousel />

      {/* Testimonial Strip */}
      <TestimonialStrip />
    </div>
  )
}
