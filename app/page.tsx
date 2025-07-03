import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import HeroParticles from "@/components/hero-particles";
import ValuePillars from "@/components/value-pillars";
import ProgramSnapshot from "@/components/program-snapshot";
import CountdownBanner from "@/components/countdown-banner";
import LogosCarousel from "@/components/logos-carousel";
import TestimonialStrip from "@/components/testimonial-strip";
import Link from "next/link";
import StrategicPartners from "@/components/strategic-partners";
import TargetAudience from "@/components/target-audience";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <HeroParticles />
        <div className="container relative z-10 px-4 py-24 mx-auto text-center">
          <h1 className="h1-hero max-w-4xl mx-auto split-reveal mb-6">
            ZKET Core Program Ecuador 2025 - Master Programmable Cryptography
          </h1>
          <p className="p-large mx-auto mb-8">
            An initiative by the ZK Education Team of the Ethereum Foundation.
            Join the next generation of ZK experts in 6 intensive weeks of
            training in Quito.
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
              <Button
                variant="ghost"
                size="lg"
                className="text-bg-light border border-txt-sec hover:bg-bg-prim/50"
              >
                See Curriculum
              </Button>
            </Link>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-txt-sec" />
          </div>
        </div>
      </section>

      {/* Powered by Section */}
      <section className="py-12 md:py-16 bg-bg-prim/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="h2-section mb-4">Powered by</h2>
            <p className="mx-auto">
              This program is made possible through the generous support and
              sponsorship of leading organizations in the blockchain and
              zero-knowledge space.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/ef-white.png"
                alt="Ethereum Foundation"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/zket-white.png"
                alt="ZK Education Team"
                width={160}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="p-small mx-auto">
              Together, we're building the future of zero-knowledge technology
              education and fostering innovation from Latin America.
            </p>
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
  );
}
