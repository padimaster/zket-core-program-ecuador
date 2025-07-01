import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, BookOpen, Video, Code, CheckSquare } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Reading Hub Header */}
      <section className="py-16 md:py-24 bg-bg-prim">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Learning Resources</h1>
            <p className="text-txt-sec text-lg mb-8">
              Curated materials to support your journey through zero-knowledge proofs and cryptography.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-txt-sec h-4 w-4" />
                <Input placeholder="Search resources..." className="pl-10 bg-bg-prim border-txt-sec/20" />
              </div>
              <Button className="bg-accent-prim hover:bg-accent-yellow transition-colors duration-300">Search</Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-txt-sec/20 hover:bg-accent-prim/10 hover:text-accent-prim bg-transparent"
              >
                ZKP
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-txt-sec/20 hover:bg-accent-prim/10 hover:text-accent-prim bg-transparent"
              >
                Halo2
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-txt-sec/20 hover:bg-accent-prim/10 hover:text-accent-prim bg-transparent"
              >
                FHE
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-txt-sec/20 hover:bg-accent-prim/10 hover:text-accent-prim bg-transparent"
              >
                MPC
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-txt-sec/20 hover:bg-accent-prim/10 hover:text-accent-prim bg-transparent"
              >
                Cryptography
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Week Tiles */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Weekly Resources</h2>

          <div className="grid gap-8">
            {Array.from({ length: 2 }).map((_, weekIndex) => (
              <div key={weekIndex} className="border border-txt-sec/20 rounded-lg overflow-hidden">
                <div className="bg-accent-yellow/10 p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">Week {weekIndex + 1}</h3>
                      <p className="text-txt-sec">
                        {weekIndex === 0 ? "Foundations of Zero-Knowledge Proofs" : "Circuit Design & Optimization"}
                      </p>
                    </div>
                    <div className="w-full sm:w-auto bg-bg-prim rounded-full h-2 sm:w-48">
                      <div
                        className="bg-accent-prim h-2 rounded-full"
                        style={{ width: `${weekIndex === 0 ? "75" : "40"}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="readings" className="p-6">
                  <TabsList className="mb-6">
                    <TabsTrigger value="readings" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Readings</span>
                    </TabsTrigger>
                    <TabsTrigger value="videos" className="flex items-center gap-2">
                      <Video className="h-4 w-4" />
                      <span>Videos</span>
                    </TabsTrigger>
                    <TabsTrigger value="code" className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      <span>Starter Repo</span>
                    </TabsTrigger>
                    <TabsTrigger value="checklist" className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4" />
                      <span>Checklist</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="readings" className="space-y-4">
                    <div className="border border-txt-sec/20 rounded-lg p-4 hover:border-accent-prim transition-colors">
                      <h4 className="font-bold mb-1">Introduction to Zero-Knowledge Proofs</h4>
                      <p className="text-txt-sec text-sm mb-2">
                        A comprehensive overview of ZKP concepts and applications.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-txt-sec">15 min read</span>
                        <Button variant="link" className="p-0 h-auto text-accent-prim">
                          Read Now
                        </Button>
                      </div>
                    </div>

                    <div className="border border-txt-sec/20 rounded-lg p-4 hover:border-accent-prim transition-colors">
                      <h4 className="font-bold mb-1">Mathematical Foundations of ZKPs</h4>
                      <p className="text-txt-sec text-sm mb-2">
                        Understanding the cryptographic primitives behind zero-knowledge proofs.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-txt-sec">25 min read</span>
                        <Button variant="link" className="p-0 h-auto text-accent-prim">
                          Read Now
                        </Button>
                      </div>
                    </div>

                    <div className="border border-txt-sec/20 rounded-lg p-4 hover:border-accent-prim transition-colors">
                      <h4 className="font-bold mb-1">ZKPs in Practice: Use Cases</h4>
                      <p className="text-txt-sec text-sm mb-2">
                        Real-world applications and implementations of zero-knowledge technology.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-txt-sec">20 min read</span>
                        <Button variant="link" className="p-0 h-auto text-accent-prim">
                          Read Now
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="videos" className="space-y-4">
                    <div className="border border-txt-sec/20 rounded-lg p-4 hover:border-accent-prim transition-colors">
                      <h4 className="font-bold mb-1">ZKP Fundamentals Lecture</h4>
                      <p className="text-txt-sec text-sm mb-2">
                        A visual explanation of zero-knowledge proof concepts.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-txt-sec">45 min video</span>
                        <Button variant="link" className="p-0 h-auto text-accent-prim">
                          Watch Now
                        </Button>
                      </div>
                    </div>

                    <div className="border border-txt-sec/20 rounded-lg p-4 hover:border-accent-prim transition-colors">
                      <h4 className="font-bold mb-1">Implementing Your First ZK Circuit</h4>
                      <p className="text-txt-sec text-sm mb-2">
                        Step-by-step tutorial for building a basic zero-knowledge circuit.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-txt-sec">30 min video</span>
                        <Button variant="link" className="p-0 h-auto text-accent-prim">
                          Watch Now
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="code" className="space-y-4">
                    <div className="border border-txt-sec/20 rounded-lg p-6 bg-bg-prim/50">
                      <h4 className="font-bold mb-4">Week {weekIndex + 1} Starter Repository</h4>
                      <p className="text-txt-sec mb-6">
                        Clone this repository to get started with this week's exercises and projects.
                      </p>
                      <div className="bg-bg-prim p-3 rounded-md font-mono text-sm mb-6 border border-txt-sec/20">
                        <code>git clone https://github.com/global-foundations/week-{weekIndex + 1}-starter.git</code>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-txt-sec">Updated 3 days ago</span>
                        <Button className="bg-accent-prim hover:bg-accent-yellow transition-colors duration-300">
                          View on GitHub
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="checklist" className="space-y-4">
                    <div className="border border-txt-sec/20 rounded-lg p-6">
                      <h4 className="font-bold mb-4">Week {weekIndex + 1} Learning Objectives</h4>
                      <p className="text-txt-sec mb-6">Track your progress through this week's material.</p>

                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`check-${weekIndex}-1`}
                            className="h-4 w-4 rounded border-txt-sec/20 text-accent-prim focus:ring-accent-prim"
                          />
                          <label htmlFor={`check-${weekIndex}-1`} className="ml-2 text-sm">
                            Complete the introductory readings
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`check-${weekIndex}-2`}
                            className="h-4 w-4 rounded border-txt-sec/20 text-accent-prim focus:ring-accent-prim"
                          />
                          <label htmlFor={`check-${weekIndex}-2`} className="ml-2 text-sm">
                            Watch the lecture videos
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`check-${weekIndex}-3`}
                            className="h-4 w-4 rounded border-txt-sec/20 text-accent-prim focus:ring-accent-prim"
                          />
                          <label htmlFor={`check-${weekIndex}-3`} className="ml-2 text-sm">
                            Set up the development environment
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`check-${weekIndex}-4`}
                            className="h-4 w-4 rounded border-txt-sec/20 text-accent-prim focus:ring-accent-prim"
                          />
                          <label htmlFor={`check-${weekIndex}-4`} className="ml-2 text-sm">
                            Complete the coding exercises
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`check-${weekIndex}-5`}
                            className="h-4 w-4 rounded border-txt-sec/20 text-accent-prim focus:ring-accent-prim"
                          />
                          <label htmlFor={`check-${weekIndex}-5`} className="ml-2 text-sm">
                            Submit the weekly assignment
                          </label>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="border-txt-sec/20 bg-transparent">
              Load More Weeks
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
