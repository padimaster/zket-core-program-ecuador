import { Button } from "@/components/ui/button"
import CurriculumTimeline from "@/components/curriculum-timeline"
import Link from "next/link"

export default function ProgramPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Section Intro */}
      <section className="relative py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="relative">
            <span className="absolute -top-10 left-0 text-[120px] font-space-grotesk font-bold text-txt-sec/10">
              01
            </span>
            <h1 className="relative z-10 text-4xl font-bold tracking-tight md:text-5xl mb-6">Program Curriculum</h1>
            <p className="max-w-2xl text-txt-sec text-lg">
              An intensive 6-week journey designed to transform talented developers into zero-knowledge proof
              specialists and open-source architects.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <CurriculumTimeline />

      {/* Capstone & Demo Day */}
      <section className="relative py-16 md:py-24 bg-bg-prim/90">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-prim to-bg-prim/50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-30 z-[-1]"></div>
        <div className="container relative z-10 px-4 text-center md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl">Demo Day & The Road Ahead</h2>
            <p className="text-txt-sec mb-6">
              The program culminates in a Demo Day where you'll present your capstone project to industry leaders,
              investors, and potential employers. Graduate with a powerful portfolio and a direct pathway to grants and
              funding.
            </p>
            <Link href="/apply">
              <Button size="lg" className="bg-accent-prim hover:bg-accent-yellow transition-colors duration-300">
                Apply and Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
