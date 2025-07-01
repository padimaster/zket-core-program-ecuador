import Image from "next/image"
import { Github, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const mentors = [
  {
    name: "Dr. Elena Rodriguez",
    role: "Program Director",
    bio: "Former ZK researcher at Protocol Labs with 10+ years experience in cryptography and distributed systems.",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com",
    twitter: "https://twitter.com",
    featured: true,
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    bio: "Core contributor to multiple ZK projects and author of 'Practical Zero-Knowledge Proofs'.",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Sophia Nakamoto",
    role: "Cryptography Mentor",
    bio: "Cryptography researcher specializing in SNARKs and privacy-preserving protocols.",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Jamal Washington",
    role: "Engineering Mentor",
    bio: "Lead engineer at Ethereum Foundation focusing on ZK rollups and scaling solutions.",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Aisha Patel",
    role: "Applications Mentor",
    bio: "Founder of ZK-Auth, building privacy-preserving authentication systems.",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Carlos Mendez",
    role: "Regional Lead",
    bio: "Ecuadorian tech entrepreneur connecting LATAM talent to global blockchain projects.",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Wei Zhang",
    role: "Research Mentor",
    bio: "PhD in Applied Cryptography with focus on efficient zero-knowledge proof systems.",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  {
    name: "David Okonkwo",
    role: "Protocol Mentor",
    bio: "Protocol designer specializing in privacy-preserving smart contracts.",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
]

export default function MentorsPage() {
  // Find the featured mentor (program director)
  const featuredMentor = mentors.find((mentor) => mentor.featured)
  // Get all other mentors
  const otherMentors = mentors.filter((mentor) => !mentor.featured)

  return (
    <div className="flex flex-col w-full">
      {/* Director Spotlight */}
      {featuredMentor && (
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-bg-prim to-bg-prim/80">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[url('/placeholder.svg?height=600&width=400')] bg-cover bg-center opacity-20 md:opacity-40"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Meet Our Mentors</h1>
              <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={featuredMentor.image || "/placeholder.svg"}
                    alt={featuredMentor.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">{featuredMentor.name}</h2>
                  <p className="text-accent-yellow font-space-grotesk mb-4">{featuredMentor.role}</p>
                  <p className="text-txt-sec mb-4">{featuredMentor.bio}</p>
                  <div className="flex space-x-3">
                    <a href={featuredMentor.github} className="text-txt-sec hover:text-accent-prim transition-colors">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a href={featuredMentor.twitter} className="text-txt-sec hover:text-accent-prim transition-colors">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-txt-sec">
                Our mentors are industry leaders and experts in zero-knowledge proofs, cryptography, and blockchain
                technology. They provide guidance, code reviews, and career advice throughout the program.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Mentor Grid */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Mentor Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherMentors.map((mentor, i) => (
              <Card key={i} className="overflow-hidden bg-bg-prim border border-txt-sec/20 card-hover">
                <div className="aspect-square relative">
                  <Image src={mentor.image || "/placeholder.svg"} alt={mentor.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-prim to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <div className="flex space-x-4">
                      <a href={mentor.github} className="text-bg-light hover:text-accent-prim transition-colors">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                      </a>
                      <a href={mentor.twitter} className="text-bg-light hover:text-accent-prim transition-colors">
                        <Twitter className="h-6 w-6" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                  <p className="text-accent-yellow font-space-grotesk text-sm mb-3">{mentor.role}</p>
                  <p className="text-txt-sec text-sm">{mentor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours Calendar */}
      <section className="py-12 md:py-16 bg-bg-prim/90">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Office Hours Calendar</h2>
          <p className="text-txt-sec mb-8 max-w-2xl">
            Mentors host regular office hours for one-on-one guidance and technical support. Check the calendar below
            for availability and book a session.
          </p>
          <div className="border border-txt-sec/20 rounded-lg overflow-hidden h-[500px] bg-bg-prim">
            <div className="p-8 flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-txt-sec mb-4">Google Calendar Embed (Read-only)</p>
                <p className="text-sm text-txt-sec/70">
                  The calendar would be embedded here, showing mentor availability and allowing participants to book
                  sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
