import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CurriculumTimeline from "@/components/curriculum-timeline"
import { Calendar, Users, Coffee, Award, MapPin, Clock, Utensils, TrendingUp, CheckCircle, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProgramPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Program Overview */}
      <section className="relative py-20 md:py-28 bg-bg-prim">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-yellow border text-white text-sm font-medium mb-8">
              6-Week Intensive Program
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-bg-light">
              ZKET Core Program
              <span className="block text-accent-prim">Ecuador 2025</span>
            </h1>
            
            <p className="text-lg md:text-xl text-txt-sec mb-8 max-w-3xl mx-auto leading-relaxed">
              An initiative by the ZK Education Team of the Ethereum Foundation. 
              6 intensive weeks of Programmable Cryptography (ProgCrypto) training, 
              transforming talented developers into zero-knowledge proof specialists.
            </p>

            {/* Key Benefits Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent-prim flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold text-accent-prim mb-1">100% Free</div>
                <div className="text-sm text-txt-sec">No tuition fees</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent-yellow flex items-center justify-center mb-3">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold text-accent-prim mb-1">Elite Mentors</div>
                <div className="text-sm text-txt-sec">World-class experts</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent-prim flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold text-accent-prim mb-1">Grant Access</div>
                <div className="text-sm text-txt-sec">Funding opportunities</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent-yellow flex items-center justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold text-accent-prim mb-1">Career Ready</div>
                <div className="text-sm text-txt-sec">Portfolio & network</div>
              </div>
            </div>

            <Link href="/apply">
              <Button size="lg" className="bg-accent-prim hover:bg-accent-yellow text-white transition-colors duration-300">
                Apply Now - Limited Spots
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 md:py-24 bg-bg-prim">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl text-bg-light">How The Program Works</h2>
            <p className="text-txt-sec text-lg max-w-3xl mx-auto">
              Our hybrid learning model combines the flexibility of online self-study with the power of in-person collaboration, 
              giving you the best of both worlds in Quito's dynamic tech scene.
            </p>
          </div>

          {/* Learning Format */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-bg-light">Hybrid Learning Format</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-bg-prim border border-accent-prim/30 hover:border-accent-prim/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-prim flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-bg-light">Weekday Online Sessions</h4>
                  </div>
                  <p className="text-txt-sec text-sm leading-relaxed mb-4">
                    Self-paced learning modules, interactive tutorials, and hands-on coding exercises you can complete 
                    from anywhere, anytime during the week.
                  </p>
                  <ul className="text-txt-sec text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent-prim rounded-full mr-2"></span>
                      Flexible scheduling around your commitments
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent-prim rounded-full mr-2"></span>
                      Interactive content and coding challenges
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent-prim rounded-full mr-2"></span>
                      Real-time progress tracking and feedback
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-bg-prim border border-accent-yellow/30 hover:border-accent-yellow/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-yellow flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-bg-light">Saturday In-Person Sessions</h4>
                  </div>
                  <p className="text-txt-sec text-sm leading-relaxed mb-4">
                    Intensive collaborative sessions at our fully-equipped coworking space in Quito, 
                    where theory meets practice in a supportive, high-energy environment.
                  </p>
                  <ul className="text-txt-sec text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mr-2"></span>
                      Hands-on workshops with real projects
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mr-2"></span>
                      Peer collaboration and team building
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mr-2"></span>
                      Direct mentorship and expert guidance
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-bg-light">Your Weekly Schedule</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-bg-prim border border-txt-sec/20 hover:border-accent-prim/30 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent-prim mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-bg-light mb-2">Thursday Keynotes</h4>
                  <p className="text-txt-sec text-sm">
                    Industry experts share cutting-edge insights on cryptography, blockchain, and emerging technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-bg-prim border border-txt-sec/20 hover:border-accent-prim/30 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent-prim mx-auto mb-4 flex items-center justify-center">
                    <Coffee className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-bg-light mb-2">Mentor Office Hours</h4>
                  <p className="text-txt-sec text-sm">
                    One-on-one sessions with world-class mentors to discuss projects, resolve challenges, and accelerate your growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-bg-prim border border-txt-sec/20 hover:border-accent-yellow/30 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent-yellow mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-bg-light mb-2">Saturday Deep Dive</h4>
                  <p className="text-txt-sec text-sm">
                    Full-day intensive sessions with hands-on coding, project development, and collaborative problem-solving.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Program Benefits */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-bg-light">Everything You Need to Succeed</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-bg-prim border border-accent-prim/30 hover:border-accent-prim/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent-prim flex items-center justify-center mr-4">
                      <Utensils className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-bold text-bg-light">Food & Beverages Included</h4>
                  </div>
                  <p className="text-txt-sec text-sm">
                    All meals and refreshments during Saturday sessions are provided. Focus entirely on learning while we handle the logistics.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-bg-prim border border-accent-yellow/30 hover:border-accent-yellow/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent-yellow flex items-center justify-center mr-4">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-bold text-bg-light">Direct Grant Access</h4>
                  </div>
                  <p className="text-txt-sec text-sm">
                    Exclusive pathways to funding for continuing your projects and research through our extensive network of partners and foundations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-bg-prim border border-accent-prim/30 hover:border-accent-prim/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent-prim flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-bold text-bg-light">Premium Workspace</h4>
                  </div>
                  <p className="text-txt-sec text-sm">
                    State-of-the-art coworking space in Quito with high-speed internet, modern equipment, and all the amenities you need.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-bg-prim border border-accent-yellow/30 hover:border-accent-yellow/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent-yellow flex items-center justify-center mr-4">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-bold text-bg-light">Career Launch Pad</h4>
                  </div>
                  <p className="text-txt-sec text-sm">
                    Build a portfolio of impactful projects, develop industry connections, and receive personalized job placement assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl">6-Week Learning Journey</h2>
            <p className="text-txt-sec text-lg max-w-3xl mx-auto">
              A carefully crafted curriculum that takes you from ZK fundamentals to building production-ready applications, 
              with each week building upon the previous to ensure deep, practical understanding.
            </p>
          </div>
        </div>
        <CurriculumTimeline />
      </section>

      {/* Capstone & Demo Day */}
      <section className="py-16 md:py-24 bg-bg-prim">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 md:text-4xl text-bg-light">Launch Your ZK Career</h2>
            <p className="text-txt-sec text-lg mb-8 leading-relaxed">
              The program culminates in Demo Day, where you'll present your capstone project to industry leaders, 
              investors, and potential employers. Graduate with a powerful portfolio, industry connections, 
              and direct pathways to grants and career opportunities.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-prim mb-2">Demo Day</div>
                <div className="text-sm text-txt-sec">Present to industry leaders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-yellow mb-2">Portfolio</div>
                <div className="text-sm text-txt-sec">Real projects & contributions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-prim mb-2">Network</div>
                <div className="text-sm text-txt-sec">Lifelong industry connections</div>
              </div>
            </div>

            <Link href="/apply">
              <Button size="lg" className="bg-accent-prim hover:bg-accent-yellow text-white transition-colors duration-300">
                Start Your ZK Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
