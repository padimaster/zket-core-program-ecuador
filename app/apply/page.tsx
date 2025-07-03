import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CountdownBanner from "@/components/countdown-banner"
import { CheckCircle, ArrowRight, FileText, Users, Code, Heart, Clock, Globe, Target, Lightbulb } from "lucide-react"
import Link from "next/link"

const acceptanceCriteria = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Strong Technical Background",
    description:
      "Demonstrated experience in software development through a portfolio, GitHub profile, or work history.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Interest in Cryptography",
    description: "A genuine curiosity and foundational understanding of cryptography, blockchain, or web3 concepts.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Commitment to Open Source",
    description: "A passion for collaboration and contributing to the open-source ecosystem.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Clear Motivation & Goals",
    description: "A clear vision for how this program will advance your personal and professional goals.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Time Availability",
    description: "Ability to commit to the intensive, 20 hours per week and attend to the in person sessions for the entire 6-week program in Quito.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Collaborative Spirit",
    description: "A desire to learn from and contribute to a diverse, collaborative cohort environment.",
  },
]

export default function ApplyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Application Header */}
      <section className="relative py-20 md:py-28 bg-bg-prim">        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Attention-grabbing badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-yellow border text-white text-sm font-medium mb-8">
              Applications Now Open
            </div>
            
            {/* Main headline with hook */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              Transform Into a
              <span className="block text-accent-prim">ZK Expert</span>
            </h1>
            
            {/* Compelling subheadline */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the world's most exclusive zero-knowledge proof program. 
              6 weeks in Ecuador. 100% free. Elite mentorship.
            </p>
            
            {/* Primary CTA */}
            <div className="mb-16 flex flex-col items-center">
              <Link href="https://forms.gle/MeCuAGk5r8VjamtX8" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-3 bg-accent-prim hover:bg-accent-yellow text-white transition-colors duration-300">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              {/* Social proof and urgency */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400 mx-auto">
                  Only 25 spots available • Application takes 10 minutes
                </p>
              </div>
            </div>
            
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-600">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-prim mb-1">6</div>
                <div className="text-sm text-gray-400">Weeks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-prim mb-1">15</div>
                <div className="text-sm text-gray-400">Spots</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-prim mb-1">3</div>
                <div className="text-sm text-gray-400">Scholarships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-prim mb-1">100%</div>
                <div className="text-sm text-gray-400">Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-step Infographic */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Application Process</h2>
            <p className="text-txt-sec text-lg max-w-2xl mx-auto">
              Follow these simple steps to join our exclusive program. The entire process is designed to be quick and straightforward.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-0.5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent-prim via-accent-yellow to-accent-prim"></div>
              
              {/* Step 1 */}
              <div className="relative flex items-start mb-8 md:mb-12">
                <div className="flex items-start w-full md:w-1/2 md:pr-6">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-accent-prim flex items-center justify-center mr-4 md:mr-0 md:ml-auto">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <Card className="flex-1 md:max-w-sm bg-white border border-gray-200 hover:border-accent-prim/40 transition-all duration-300 ml-4 md:ml-0 md:mr-6">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Submit Application</h3>
                        <span className="text-xs bg-accent-yellow text-white px-2 py-1 rounded-full whitespace-nowrap">
                          ~10 min
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Complete our streamlined application form with your background, experience, and motivation.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                {/* Timeline dot for step 1 */}
                <div className="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 top-1 w-2 h-2 bg-accent-prim rounded-full z-20"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start mb-8 md:mb-12">
                <div className="flex items-start w-full md:w-1/2 md:ml-auto md:pl-6">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow flex items-center justify-center mr-4 md:mr-0 md:order-2">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <Card className="flex-1 md:max-w-sm bg-white border border-gray-200 hover:border-accent-yellow/40 transition-all duration-300 ml-4 md:ml-6 md:order-1">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Technical Interview</h3>
                        <span className="text-xs bg-accent-yellow text-white px-2 py-1 rounded-full whitespace-nowrap">
                          ~30 min
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        A friendly conversation with our mentors to understand your technical background and goals.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                {/* Timeline dot for step 2 */}
                <div className="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 top-1 w-2 h-2 bg-accent-yellow rounded-full z-20"></div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start">
                <div className="flex items-start w-full md:w-1/2 md:pr-6">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-accent-prim flex items-center justify-center mr-4 md:mr-0 md:ml-auto">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <Card className="flex-1 md:max-w-sm bg-white border border-gray-200 hover:border-accent-prim/40 transition-all duration-300 ml-4 md:ml-0 md:mr-6">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Final Decision</h3>
                        <span className="text-xs bg-accent-yellow text-white px-2 py-1 rounded-full whitespace-nowrap">
                          Aug 3rd
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Selected candidates receive their acceptance notification via email with next steps.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                {/* Timeline dot for step 3 */}
                <div className="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 top-1 w-2 h-2 bg-accent-prim rounded-full z-20"></div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Ready to Start Your Journey?</h3>
              <p className="text-gray-600 mb-6">
                The application takes less than 10 minutes. Don't wait – spots are limited!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="https://forms.gle/MeCuAGk5r8VjamtX8" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-accent-prim hover:bg-accent-yellow text-white transition-colors duration-300">
                    Start Application
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acceptance Criteria */}
      <section className="py-16 md:py-20 bg-bg-prim">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl text-white">Are You Our Ideal Candidate?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're looking for passionate developers ready to push the boundaries of cryptography.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {acceptanceCriteria.map((criterion, i) => (
              <Card key={i} className="bg-white border border-gray-200 hover:border-accent-prim/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-prim mr-4">
                      <div className="text-white">
                        {criterion.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900">
                      {criterion.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {criterion.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Self-Assessment CTA */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Ready to Transform Your Career?
                </h3>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                  If you match most of these criteria and you're excited about zero-knowledge proofs, 
                  we want to hear from you.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-prim mb-1">6 weeks</div>
                    <div className="text-sm text-gray-500">Intensive Training</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-prim mb-1">100%</div>
                    <div className="text-sm text-gray-500">Free Program</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-prim mb-1">Elite</div>
                    <div className="text-sm text-gray-500">Mentorship</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="https://forms.gle/MeCuAGk5r8VjamtX8" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-accent-prim hover:bg-accent-yellow text-white transition-colors duration-300">
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 text-xs text-gray-500">
                  Limited spots available
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Countdown Banner */}
      <CountdownBanner />
    </div>
  )
}
