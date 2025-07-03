import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase, Lock } from "lucide-react"
import Link from "next/link"

const profiles = [
  {
    icon: <GraduationCap className="w-8 h-8 text-accent-yellow" />,
    title: "The Polytechnic Promise",
    description: "For brilliant university students and recent graduates seeking a global competitive edge in tech.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-accent-yellow" />,
    title: "The Dev in Transition",
    description: "For experienced software professionals who want to specialize in the fastest-growing field in tech.",
  },
  {
    icon: <Lock className="w-8 h-8 text-accent-yellow" />,
    title: "The Crypto Enthusiast",
    description: "For passionate individuals with basic knowledge of mathematics and computer science, ready to dive into programmable cryptography.",
  },
]

export default function TargetAudience() {
  return (
    <section className="py-16 md:py-24 bg-bg-prim/90">
      <div className="container px-4 mx-auto text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Is This Program For You?</h2>
        <p className="max-w-2xl mx-auto mb-10 text-txt-sec">
          We've designed this program for three key profiles ready to become architects of the decentralized web.
        </p>
        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
          {profiles.map((profile, index) => (
            <Card key={index} className="text-left bg-bg-prim border-txt-sec/20">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-3 rounded-full bg-accent-yellow/10">{profile.icon}</div>
                <CardTitle>{profile.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-txt-sec">{profile.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/apply">
            <Button size="lg" className="bg-accent-prim hover:bg-accent-yellow">
              Check Your Eligibility & Apply
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
