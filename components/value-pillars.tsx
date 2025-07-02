import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Gem, Globe } from "lucide-react"

const pillars = [
  {
    icon: <Code className="w-8 h-8 text-accent-prim" />,
    title: "Cryptography, Not Speculation",
    description: "Graduate with a Portfolio of Contributions to Open Source Projects that Will Open Doors.",
  },
  {
    icon: <Gem className="w-8 h-8 text-accent-prim" />,
    title: "Elite & Free",
    description:
      "Access a Direct Pathway to Grants and Funding through the Ethereum Foundation's PSE Acceleration Program.",
  },
  {
    icon: <Globe className="w-8 h-8 text-accent-prim" />,
    title: "Global Mentors, Local Impact",
    description: "Learn from world-class experts and apply your skills to build the future of tech in Ecuador.",
  },
]

export default function ValuePillars() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Card key={index} className="bg-transparent border-none shadow-none">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-3 rounded-full bg-accent-prim/10">{pillar.icon}</div>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-txt-sec">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
