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
            <h1 className="h1-hero mb-6">
              Transform Into a
              <span className="block text-accent-prim">ZK Expert</span>
            </h1>
            
            {/* Compelling subheadline */}
            <p className="p-large mx-auto mb-12">
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
                <p className="p-small mx-auto">
                  Only 15 spots available • Application takes 10 minutes
                </p>
              </div>
            </div>
            
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-600">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-prim mb-1">6</div>
                <div className="p-small">Weeks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-prim mb-1">15</div>
                <div className="p-small">Spots</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-prim mb-1">3</div>
                <div className="p-small">Scholarships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-prim mb-1">100%</div>
                <div className="p-small">Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-step Infographic */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="h2-dark">Application Process</h2>
            <p className="p-large mx-auto">
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
                        <h3 className="h3-dark text-gray-900">Submit Application</h3>
                        <span className="text-xs bg-accent-yellow text-white px-2 py-1 rounded-full whitespace-nowrap">
                          ~10 min
                        </span>
                      </div>
                      <p className="p-small text-gray-600">
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
                        <h3 className="h3-dark text-gray-900">Interview</h3>
                        <span className="text-xs bg-accent-yellow text-white px-2 py-1 rounded-full whitespace-nowrap">
                          ~30 min
                        </span>
                      </div>
                      <p className="p-small text-gray-600">
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
                        <h3 className="h3-dark text-gray-900">Final Decision</h3>
                        <span className="text-xs bg-accent-yellow text-white px-2 py-1 rounded-full whitespace-nowrap">
                          Aug 3rd
                        </span>
                      </div>
                      <p className="p-small text-gray-600">
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
              <h3 className="h3-dark text-gray-900 mb-2">Ready to Start Your Journey?</h3>
              <p className="p-small text-gray-600 mb-6">
                The application takes less than 10 minutes. Don't wait – spots are limited!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="https://forms.gle/MeCuAGk5r8VjamtX8" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-accent-prim hover:bg-accent-yellow text-white transition-colors duration-300">
                    Start Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-700">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acceptance Criteria */}
      <section className="py-12 md:py-16 bg-bg-prim/90">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="h2-section">What We're Looking For</h2>
            <p className="p-large mx-auto">
              We seek motivated individuals ready to commit to an intensive learning experience and make meaningful contributions to the ZK ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {acceptanceCriteria.map((criteria, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-prim/10 text-accent-prim mb-6">
                  {criteria.icon}
                </div>
                <h3 className="h3-subsection mb-4">{criteria.title}</h3>
                <p className="p-small">{criteria.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="h3-subsection mb-4">Ready to Transform Your Career?</h3>
            <p className="p-large mx-auto mb-8">
              If this sounds like you, we'd love to hear your story and learn about your goals.
            </p>
            <Link href="https://forms.gle/MeCuAGk5r8VjamtX8" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent-prim hover:bg-accent-yellow text-white transition-colors duration-300">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Banner */}
      <CountdownBanner />
    </div>
  )
}
