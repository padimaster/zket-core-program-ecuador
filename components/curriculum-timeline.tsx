import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const curriculum = [
  {
    week: "Week 1",
    title: "Open Source Culture & Prerequisites",
    description:
      "Dive into the fundamentals of open-source collaboration, version control, and the essential software stack for a career in Web3.",
    topics: [
      "Git & GitHub Mastery",
      "Effective Remote Collaboration",
      "Intro to Rust",
      "Web3 Development Environment Setup",
    ],
    technologies: [],
  },
  {
    week: "Week 2",
    title: "Math for Cryptography",
    description:
      "Build the mathematical foundation required for modern cryptography, focusing on the concepts that power zero-knowledge proofs.",
    topics: ["Finite Fields", "Elliptic Curves", "Polynomials & Commitments", "Introduction to ZK Circuits"],
    technologies: ["Noir", "Circom"],
  },
  {
    week: "Week 3",
    title: "SNARKs, STARKs, & PLONK",
    description:
      "A deep dive into the most important zero-knowledge proof systems. Understand their trade-offs and learn when to apply each one.",
    topics: [
      "ZK-SNARKs vs ZK-STARKs",
      "PLONKish Arithmetization",
      "Constraint Systems",
      "Proof Generation & Verification",
    ],
    technologies: [],
  },
  {
    week: "Week 4",
    title: "ZK-ET Workshop",
    description:
      "Hands-on, intensive workshops where you'll build practical applications using cutting-edge ZK frameworks.",
    topics: [
      "Building with Cairo & Starknet",
      "Advanced Rust for ZK",
      "Halo2 for Privacy-Preserving Applications",
      "Performance Optimization",
    ],
    technologies: ["Cairo", "Rust", "Halo2"],
  },
  {
    week: "Weeks 5-6",
    title: "Open Source Contributions & Demo Day",
    description:
      "Apply your new skills by contributing to leading open-source ZK projects under the guidance of your mentors. Prepare and present your capstone project on Demo Day.",
    topics: [
      "Finding & Scoping Contributions",
      "Code Review & PR Etiquette",
      "Building a Capstone Project",
      "Pitching & Presentation Skills",
    ],
    technologies: [],
  },
]

export default function CurriculumTimeline() {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-4xl px-4 mx-auto md:px-6">
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {curriculum.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-txt-sec/20">
              <AccordionTrigger className="py-6 text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-md bg-accent-prim/10">
                    <div className="font-bold text-accent-prim">{item.week}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-4 border-l-2 border-accent-prim/20 ml-7">
                <div className="pl-8">
                  <p className="mb-4 text-txt-sec">{item.description}</p>
                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold">Key Topics:</h4>
                    <ul className="space-y-1 list-disc list-inside text-txt-sec">
                      {item.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  {item.technologies.length > 0 && (
                    <div>
                      <h4 className="mb-2 font-semibold">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-accent-yellow/20 text-accent-yellow">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
