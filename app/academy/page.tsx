import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, BookOpen, Clock, Award, CheckCircle, Play } from "lucide-react"

export default function AcademyLanding() {
  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-[#FFFFFF]">
            Master ZK Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance text-[#9ca3af]">
            Learn blockchain development, smart contracts, and DeFi through hands-on projects. Get certified and land
            your dream Web3 job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl bg-[#00C896] text-white hover:bg-[#009970]">
              Explore Courses
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-xl border-2 bg-transparent border-[#00C896] text-[#00C896] hover:bg-[#00C896] hover:text-white"
            >
              Get Certified
            </Button>
          </div>

      {/* Everything You Need Section */}
      <div className="mt-4 flex flex-col items-center">
        <div className="w-full max-w-2xl mb-8">
          <img
            src="/academy/turtle.png"
            alt="Cute turtle learning blockchain development with Ethereum logo"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="px-4 pt-8 pb-8 w-full">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFFFFF]">Everything you need</h2>
            <h3 className="text-xl md:text-2xl mb-6 text-[#FFFFFF]">Our blockchain developer courses</h3>
            <p className="text-lg mb-6 max-w-4xl mx-auto text-[#9ca3af]">
              Whether you're new to web3, a seasoned blockchain engineer, or an aspiring smart contract auditor, we have
              the right courses for you.
            </p>
            <p className="text-lg mb-8 max-w-4xl mx-auto text-[#9ca3af]">
              Check out the online courses with the <span className="text-[#00C896] font-semibold">Open Courses</span>{" "}
              tag. No signup needed!
            </p>
          </div>
        </div>
      </div>
        </div>
      </section>
      {/* Featured Courses Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#FFFFFF]">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Be a Open sourcer",
                difficulty: "Beginner",
                lessons: 24,
                projects: 3,
                hours: 12,
                image: "/academy/PRs.png",
              },
              {
                title: "ZK Basic Math",
                difficulty: "Advanced",
                lessons: 36,
                projects: 5,
                hours: 28,
                image: "/academy/mathematic.png",
              },
              {
                title: "ZK Advanced",
                difficulty: "Intermediate",
                lessons: 18,
                projects: 2,
                hours: 15,
                image: "/academy/zk-.png",
              },
            ].map((course, index) => (
              <Card key={index} className="rounded-xl overflow-hidden border-0 bg-gray-900">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={
                        course.difficulty === "Beginner"
                          ? "secondary"
                          : course.difficulty === "Intermediate"
                            ? "default"
                            : "destructive"
                      }
                      className="rounded-full"
                    >
                      {course.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-[#FFFFFF]">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-[#9ca3af]">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.lessons} lessons
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="w-4 h-4" />
                      {course.projects} projects
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.hours}h
                    </div>
                  </div>
                  <Button className="w-full rounded-xl bg-[#00C896] text-white hover:bg-[#009970]">Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-xl bg-[#00C896] text-white hover:bg-[#009970]"
              disabled
            >
              View All Courses
            </Button>
          </div>
        </div>
      </section>



      {/* Certification & Career Impact */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFFFFF]">
                Get Certified & Land Your Dream Job
              </h2>
              <p className="text-lg mb-6 text-[#9ca3af]">
                Our industry-recognized certifications have helped thousands of students transition into high-paying
                Web3 careers.
              </p>
              <div className="space-y-4">
                {[
                  "Industry-recognized certificates",
                  "Portfolio-ready projects",
                  "Career placement assistance",
                  "1-on-1 mentorship sessions",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00C896]" />
                    <span className="text-[#FFFFFF]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img src="/academy/certification.png" alt="Certificate" className="w-64 h-64 rounded-xl" />
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center bg-[#00C896]">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-semibold mb-8 text-[#9ca3af]">Trusted by leading Web3 companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {["Coinbase", "Uniswap", "OpenSea", "Polygon"].map((company, index) => (
              <div key={index} className="text-xl font-bold text-[#FFFFFF]">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "1,000+", label: "Students" },
              { number: "10,000+", label: "Lessons Watched" },
              { number: "5,000+", label: "Monthly Active Students" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-[#00C896]">{stat.number}</div>
                <div className="text-lg text-[#9ca3af]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFFFFF]">Interactive Learning Experience</h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto text-[#9ca3af]">
            Learn by doing with our hands-on approach featuring interactive quizzes, real-world projects, and live
            coding sessions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12 mb-4" />,
                title: "Interactive Quizzes",
                description: "Test your knowledge with engaging quizzes after each lesson",
              },
              {
                icon: <Play className="w-12 h-12 mb-4" />,
                title: "Real-World Projects",
                description: "Build actual DApps and smart contracts for your portfolio",
              },
              {
                icon: <Users className="w-12 h-12 mb-4" />,
                title: "Live Sessions",
                description: "Join live coding sessions with industry experts",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-[#00C896]">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#FFFFFF]">{feature.title}</h3>
                <p className="text-[#9ca3af]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#FFFFFF]">Student Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Chen",
                role: "Smart Contract Developer at Uniswap",
                content:
                  "The Academy's hands-on approach helped me transition from traditional web development to Web3. I landed my dream job within 3 months!",
                rating: 5,
              },
              {
                name: "Marcus Rodriguez",
                role: "DeFi Engineer at Compound",
                content:
                  "The real-world projects and mentorship were invaluable. I built a complete DeFi protocol during the course that impressed my current employer.",
                rating: 5,
              },
              {
                name: "Emily Johnson",
                role: "Blockchain Developer at Polygon",
                content:
                  "From zero blockchain knowledge to landing a role at Polygon. The structured curriculum and community support made all the difference.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="rounded-xl border-0 bg-gray-900">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-[#00C896]" />
                    ))}
                  </div>
                  <p className="mb-4 text-[#FFFFFF]">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-[#FFFFFF]">{testimonial.name}</div>
                    <div className="text-sm text-[#9ca3af]">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



    </div>
  )
}
