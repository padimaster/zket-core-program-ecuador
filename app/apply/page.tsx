import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CountdownBanner from "@/components/countdown-banner"
import { CheckCircle, ArrowRight, FileText, Users } from "lucide-react"
import Link from "next/link"

const acceptanceCriteria = [
  {
    title: "Strong Technical Background",
    description:
      "Demonstrated experience in software development through a portfolio, GitHub profile, or work history.",
  },
  {
    title: "Interest in Cryptography",
    description: "A genuine curiosity and foundational understanding of cryptography, blockchain, or web3 concepts.",
  },
  {
    title: "Commitment to Open Source",
    description: "A passion for collaboration and contributing to the open-source ecosystem.",
  },
  {
    title: "Clear Motivation & Goals",
    description: "A clear vision for how this program will advance your personal and professional goals.",
  },
  {
    title: "Full-Time Availability",
    description: "Ability to commit to the intensive, full-time schedule for the entire 8-week program in Quito.",
  },
  {
    title: "Collaborative Spirit",
    description: "A desire to learn from and contribute to a diverse, collaborative cohort environment.",
  },
]

export default function ApplyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Application Header */}
      <section className="py-16 md:py-24 bg-bg-prim">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Apply to Global Foundations</h1>
            <p className="text-txt-sec text-lg mb-8">
              Join an elite cohort of developers mastering zero-knowledge proofs and building the next generation of web
              infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Two-step Infographic */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Application Process</h2>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-bg-prim border border-txt-sec/20 card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-accent-prim/10 flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-accent-prim" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Submit Application</h3>
                <p className="text-txt-sec mb-4">
                  Fill out the Google Form with your background, experience, and motivation for joining the program.
                </p>
                <div className="mt-auto pt-4">
                  <span className="text-xs text-accent-yellow">Estimated time: 10 minutes</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-bg-prim border border-txt-sec/20 card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-accent-prim/10 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-accent-prim" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Interview</h3>
                <p className="text-txt-sec mb-4">
                  Selected candidates will be invited for a brief virtual interview with our program mentors.
                </p>
                <div className="mt-auto pt-4">
                  <span className="text-xs text-accent-yellow">Estimated time: 15 minutes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Acceptance Criteria */}
      <section className="py-12 md:py-16 bg-bg-prim/90">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Acceptance Criteria</h2>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {acceptanceCriteria.map((criterion, i) => (
              <div key={i} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">{criterion.title}</h3>
                  <p className="text-txt-sec text-sm">{criterion.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Link */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Card className="bg-bg-prim border border-accent-prim/50 max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl md:text-3xl">Ready to Apply?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-txt-sec mb-6">
                Click the button below to open the Google Form and start your application. Make sure to review the
                acceptance criteria before submitting.
              </p>
              <Link href="https://forms.gle/MeCuAGk5r8VjamtX8" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent-prim hover:bg-accent-yellow transition-colors duration-300">
                  Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Countdown Banner */}
      <CountdownBanner />
    </div>
  )
}
