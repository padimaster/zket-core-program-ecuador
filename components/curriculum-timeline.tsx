import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const curriculum = [
  // ------------------------- WEEK 1 -------------------------
  {
    week: "Week 1",
    title: "Course Primer – Open-Source Culture & ZKP Foundations",
    description:
      "Pre-work to be completed before the cohort begins: master Git/GitHub, understand the public-goods mindset, finish Rustlings, and grasp the basic grammar of zero-knowledge proofs and modular arithmetic.",
    topics: [
      "How to Ask for Help & Community Channels",
      "Open-Source Culture, Public Goods, Feature-Branch Workflow",
      "Git & GitHub Pull-Request Lifecycle",
      "Rustlings: 100 Hands-On Mini-Exercises",
      "High-Level Zero-Knowledge Proofs (soundness, completeness, zero-knowledge)",
      "Number-Theory Basics: Primes, GCD, Modular Arithmetic, Cyclic Groups",
    ],
    technologies: ["Git", "GitHub", "Rustlings", "Rust", "JavaScript"],
  },

  // ------------------------- WEEK 2 -------------------------
  {
    week: "Week 2",
    title: "Classical & Modern Cryptography + Intro to ZKPs",
    description:
      "Review the evolution from symmetric to asymmetric ciphers and why ZKPs are crucial for scalability and privacy on the blockchain.",
    topics: [
      "Historical Ciphers → RSA & Diffie–Hellman",
      "Hash Functions, Commitments & Merkle Trees",
      "Finite Fields & Elliptic-Curve Math Refresher",
      "ZK-SNARKs vs ZK-STARKs (Conceptual)",
      "Circom Syntax & Setup",
    ],
    technologies: ["Circom", "snarkjs"],
  },

  // ------------------------- WEEK 3 -------------------------
  {
    week: "Week 3",
    title: "Polynomial Commitments, SNARKs & STARKs in Depth",
    description:
      "Dive into KZG commitments, trusted setups, and circuit design; start using Cairo to explore programmatic execution proofs.",
    topics: [
      "KZG Polynomial Commitments & Trusted Setup",
      "Constraint Systems & R1CS",
      "Circuit Optimisation Patterns",
      "Advanced Circom Techniques",
      "Intro to Cairo & Starknet Architecture",
    ],
    technologies: ["Circom", "Cairo", "Starknet"],
  },

  // ------------------------- WEEK 4 -------------------------
  {
    week: "Week 4",
    title: "PLONK & Plonkish Arithmetisation",
    description:
      "Study PLONK (see Vitalik’s blog), explore Plonkish arithmetisation, and build proofs with Noir; introduce Halo2 for privacy-preserving applications.",
    topics: [
      "PLONK Protocol Walk-Through",
      "Arithmetisation Strategies (Turbo-, Ultra- & Plonkish)",
      "Polynomial Commitments Revisited",
      "Building Circuits in Noir",
      "Halo2 API Basics",
    ],
    technologies: ["Noir", "Halo2", "Rust"],
  },

  // ------------------------- WEEK 5 -------------------------
  {
    week: "Week 5",
    title: "ZK-ET Workshop & Contribution Sprint I",
    description:
      "A hybrid week of intensive workshops; the focus is choosing issues in OSS projects and opening your first PRs with close mentorship.",
    topics: [
      "Hands-On Labs (Circom, Cairo, Noir, Halo2)",
      "Finding & Scoping Good First Issues",
      "Writing High-Quality PRs & Review Etiquette",
      "Performance Profiling & Benchmarking",
    ],
    technologies: ["Circom", "Cairo", "Noir", "Halo2", "Rust"],
  },

  // ------------------------- WEEK 6 -------------------------
  {
    week: "Week 6",
    title: "Contribution Sprint II, Demo Day & ZK Frontiers",
    description:
      "Wrap up your contributions, prepare a demonstrable artifact, and present it. We’ll also discuss MPC, FHE, and post-quantum trends.",
    topics: [
      "Finalising PRs & Upstream Coordination",
      "Capstone Packaging & Documentation",
      "Pitch-Deck & Live-Demo Coaching",
      "Future Directions: FHE, MPC, Post-Quantum ZK",
    ],
    technologies: ["Circom", "Cairo", "Noir", "Halo2", "Rust", "Starknet"],
  },
];

export default function CurriculumTimeline() {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-4xl px-4 mx-auto md:px-6">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full"
        >
          {curriculum.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-txt-sec/20"
            >
              <AccordionTrigger className="py-6 text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-md bg-accent-prim/10">
                    <div className="font-bold text-accent-prim">
                      {item.week}
                    </div>
                  </div>
                  <div>
                    <h3 className="h3-subsection">{item.title}</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-4 border-l-2 border-accent-prim/20 ml-7">
                <div className="pl-8">
                  <p className="mb-4">{item.description}</p>
                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold">Key Topics:</h4>
                    <ul className="p-small space-y-1 list-disc list-inside">
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
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-accent-yellow/20 text-accent-yellow"
                          >
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
  );
}
