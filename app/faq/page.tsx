"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search } from "lucide-react"

const faqItems = [
  {
    category: "Program",
    questions: [
      {
        question: "What is the ZKET Core Program?",
        answer:
          "ZKET Core Program is an intensive 6-week program designed to transform talented developers into zero-knowledge proof specialists and open-source contributors. The program focuses on building practical skills in programmable cryptography with an emphasis on real-world applications.",
      },
      {
        question: "Where is the program located?",
        answer:
          "The program takes place in Quito, Ecuador. All participants are expected to attend in person for the full duration of the program.",
      },
      {
        question: "Is the program really free?",
        answer:
          "Yes, the program is completely free for all accepted participants. This includes tuition, learning materials, and workspace access. Travel and accommodation costs are the responsibility of participants, though limited travel grants are available for those who qualify.",
      },
      {
        question: "What is the time commitment?",
        answer:
          "This is a full-time program requiring approximately 40 hours per week. Participants should expect to be engaged Monday through Friday, with some optional weekend activities.",
      },
      {
        question: "What's the real difference between this and a bootcamp that costs thousands of dollars?",
        answer:
          "Unlike bootcamps that offer broad overviews, this is a specialized, deep-dive program focused exclusively on programmable cryptography. It's free because our goal is to cultivate top-tier open-source contributors, not generate revenue. The experience is closer to a research fellowship than a traditional bootcamp.",
      },
      {
        question: "What level of math do I really need to succeed in the program?",
        answer:
          "You don't need to be a mathematician, but you should be comfortable with concepts from linear algebra and discrete math. We're looking for strong logical reasoning and a willingness to learn. Week 2 is dedicated to getting everyone up to speed on the necessary cryptographic math.",
      },
    ],
  },
  {
    category: "Application",
    questions: [
      {
        question: "What are the eligibility requirements?",
        answer:
          "Applicants should have strong programming skills (especially in languages like Rust, C++, or Go), a solid understanding of computer science fundamentals, and a demonstrated commitment to open-source contribution. While prior experience with blockchain or ZKPs is beneficial, it's not required if you have a strong technical background.",
      },
      {
        question: "What does the application process involve?",
        answer:
          "The application process consists of two main stages: an initial application form to assess your background and motivation, and a short interview with program mentors for shortlisted candidates.",
      },
      {
        question: "When will I hear back about my application?",
        answer:
          "We review applications on a rolling basis. You can expect to hear back by August 3rd. You'll receive instructions to schedule an interview.",
      },
      {
        question: "Can I apply if I'm not from Ecuador?",
        answer:
          "Yes, the program is open to international applicants but you must be able to attend in person on Saturdays for the full duration of the program. We aim to create a diverse cohort with participants from various backgrounds and regions.",
      }
    ],
  },
  {
    category: "Results",
    questions: [
      {
        question: "What can I expect to learn during the program?",
        answer:
          "By the end of the program, you'll have a deep understanding of zero-knowledge proof systems, practical experience implementing ZK circuits, and the ability to build applications using this technology. You'll also develop connections with industry leaders and fellow participants.",
      },
      {
        question: "Are there job opportunities after the program?",
        answer:
          "While employment is not guaranteed, our strategic partners and mentor network actively recruit from our graduates. We provide direct introductions and career guidance to help you navigate the ecosystem.",
      },
      {
        question: "Will I receive a certificate upon completion?",
        answer:
          "Yes, all participants who successfully complete the program will receive a certificate of completion. More importantly, you'll have a portfolio of real-world contributions to open-source projects, which is highly valued by employers.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredFAQs = faqItems
    .flatMap((category) =>
      category.questions
        .filter(
          (item) =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .map((item) => ({ ...item, category: category.category })),
    )
    .filter((item) => activeCategory === "All" || item.category === activeCategory)

  return (
    <div className="flex flex-col w-full">
      {/* FAQ Header */}
      <section className="py-16 md:py-24 bg-bg-prim">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1>Frequently Asked Questions</h1>
            <p className="p-large mb-8">
              Find answers to common questions about the Global Foundations program.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-txt-sec h-4 w-4" />
                <Input
                  placeholder="Search questions..."
                  className="pl-10 bg-bg-prim border-txt-sec/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={activeCategory === "All" ? "default" : "filter"}
                size="sm"
                onClick={() => setActiveCategory("All")}
                className={activeCategory === "All" ? "bg-accent-prim" : ""}
              >
                All
              </Button>
              {faqItems.map((category) => (
                <Button
                  key={category.category}
                  variant={activeCategory === category.category ? "default" : "filter"}
                  size="sm"
                  onClick={() => setActiveCategory(category.category)}
                  className={activeCategory === category.category ? "bg-accent-prim" : ""}
                >
                  {category.category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-txt-sec/20">
                    <AccordionTrigger className="text-left">
                      <div>
                        <span className="h3-subsection">{item.question}</span>
                        <div className="text-xs text-accent-yellow mt-1">{item.category}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <p>No questions found matching your search.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("All")
                  }}
                  className="mt-2 text-accent-prim"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
