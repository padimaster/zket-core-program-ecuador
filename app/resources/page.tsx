import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Video, Code, ExternalLink } from "lucide-react"
import Link from "next/link"

// Official 6-week curriculum from ZKET Core Program Ecuador
const weeklyContent = [
  {
    title: "Fundamentals and Open Source Culture",
    description: "Prerequisites and introduction to open-source development practices",
    technologies: ["Git", "GitHub", "Open Source"]
  },
  {
    title: "Classical & Modern Cryptography + ZKP Intro",
    description: "From symmetric to asymmetric ciphers, introduction to Zero-Knowledge Proofs",
    technologies: ["Circom", "RSA", "Diffie-Hellman"]
  },
  {
    title: "More Crypto, SNARKs, and STARKs",
    description: "KZG Polynomial Commitments, Trusted Setup, and practical ZKP implementations",
    technologies: ["Advanced Circom", "Cairo"]
  },
  {
    title: "PLONK",
    description: "PLONK Introduction, Plonkish circuit arithmetization, and mathematical tools",
    technologies: ["Noir", "Plonkathon"]
  },
  {
    title: "Open Source Contributions & Starknet",
    description: "First week of contributions and Starknet development workshops",
    technologies: ["Starknet", "Cairo", "Open Source"]
  },
  {
    title: "Final Contributions & Demo Day",
    description: "Second week of contributions, Demo Day presentations, and ZK future discussion",
    technologies: ["Demo Day", "Future ZK"]
  }
]

export default function ResourcesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Learning Resources Header */}
      <section className="py-16 md:py-24 bg-bg-prim">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1>Learning Resources</h1>
            <p className="p-large mb-8">
              Curated materials for the official ZKET Core Program Ecuador curriculum. 
              6 weeks of intensive Programmable Cryptography (ProgCrypto) training.
            </p>

            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-txt-sec h-4 w-4" />
              <Input 
                placeholder="Search resources..." 
                className="pl-10 bg-transparent border-txt-sec/30 text-bg-light placeholder:text-txt-sec focus:border-accent-prim" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Official 6-Week Curriculum */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="h2-dark">Official 6-Week Curriculum</h2>
            <p className="p-large mx-auto">
              Based on the ZKET Core Program Ecuador by the ZK Education Team of the Ethereum Foundation
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {weeklyContent.map((week, weekIndex) => (
              <div key={weekIndex} className="border border-txt-sec/20 rounded-lg bg-bg-prim p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-accent-prim font-semibold">Week {weekIndex + 1}</span>
                  </div>
                  <h3 className="h3-subsection mb-3">{week.title}</h3>
                  <p className="mb-4">{week.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {week.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-accent-prim/20 text-accent-prim px-3 py-1 rounded-full border border-accent-prim/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-txt-sec/20 rounded-lg p-4 hover:border-accent-prim/50 transition-colors bg-bg-prim/50">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-accent-prim" />
                      <span className="font-medium text-bg-light">Readings</span>
                    </div>
                    <p className="p-small mb-3">Essential materials and documentation</p>
                    <Button variant="link" className="p-0 h-auto text-accent-prim hover:text-accent-yellow">
                      View Materials
                    </Button>
                  </div>

                  <div className="border border-txt-sec/20 rounded-lg p-4 hover:border-accent-prim/50 transition-colors bg-bg-prim/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Video className="h-4 w-4 text-accent-prim" />
                      <span className="font-medium text-bg-light">Videos</span>
                    </div>
                    <p className="p-small mb-3">Lectures and workshop recordings</p>
                    <Button variant="link" className="p-0 h-auto text-accent-prim hover:text-accent-yellow">
                      Watch Now
                    </Button>
                  </div>

                  <div className="border border-txt-sec/20 rounded-lg p-4 hover:border-accent-prim/50 transition-colors bg-bg-prim/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 w-4 text-accent-prim" />
                      <span className="font-medium text-bg-light">Code</span>
                    </div>
                    <p className="p-small mb-3">Starter repo and exercises</p>
                    <Button variant="link" className="p-0 h-auto text-accent-prim hover:text-accent-yellow">
                      View Repo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-bg-prim border border-txt-sec/20 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="h3-subsection mb-4">Program Information</h3>
              <p className="mb-6">
                This curriculum is based on the official ZKET Core Program Ecuador by the 
                <strong className="text-accent-prim"> ZK Education Team of the Ethereum Foundation</strong>. 
                All materials are designed for intensive 6-week training in Programmable Cryptography.
              </p>
              <Link href="https://github.com/eth-ecuador/ZKET-Core-Program-Ecuador" target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent-prim hover:bg-accent-yellow text-bg-light transition-colors duration-300">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Official Repository
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
