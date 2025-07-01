import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ProgramPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Section Intro */}
      <section className="relative py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="relative">
            <span className="absolute -top-10 left-0 text-[120px] font-space-grotesk font-bold text-txt-sec/10">
              01
            </span>
            <h1 className="relative z-10 text-4xl font-bold tracking-tight md:text-5xl mb-6">Program Structure</h1>
            <p className="max-w-2xl text-txt-sec text-lg">
              An intensive 8-week program designed to transform talented developers into zero-knowledge proof
              specialists and open-source contributors.
            </p>
          </div>
        </div>
      </section>

      {/* Hybrid Model Overview */}
      <section className="py-12 md:py-16 bg-bg-prim/90">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 border border-txt-sec/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-2 bg-txt-sec/10 relative">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="absolute top-1/2 -translate-y-1/2" style={{ left: `${i * 12.5}%` }}>
                      <div className="w-4 h-4 rounded-full bg-accent-prim"></div>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
                        <span className="text-xs font-mono text-txt-sec">Week {i}</span>
                      </div>
                      {i < 8 && (
                        <div className="absolute top-0 left-4 w-[calc(12.5%_-_1rem)] h-0.5 bg-accent-prim"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Hybrid Learning Model</h2>
              <p className="text-txt-sec mb-6">
                Our program combines intensive in-person collaboration with structured learning paths and real-world
                project development.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 h-6 w-6 rounded-full bg-accent-prim/20 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent-prim"></div>
                  </div>
                  <span>Daily lectures from industry experts</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-6 w-6 rounded-full bg-accent-prim/20 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent-prim"></div>
                  </div>
                  <span>Hands-on workshops and coding sessions</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-6 w-6 rounded-full bg-accent-prim/20 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent-prim"></div>
                  </div>
                  <span>Weekly project milestones and code reviews</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 h-6 w-6 rounded-full bg-accent-prim/20 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent-prim"></div>
                  </div>
                  <span>1:1 mentorship from industry leaders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule Table */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Weekly Schedule</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Time</TableHead>
                  <TableHead>Monday</TableHead>
                  <TableHead>Tuesday</TableHead>
                  <TableHead>Wednesday</TableHead>
                  <TableHead>Thursday</TableHead>
                  <TableHead>Friday</TableHead>
                  <TableHead className="bg-accent-prim/10">Saturday</TableHead>
                  <TableHead>Sunday</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono">09:00</TableCell>
                  <TableCell>Morning Standup</TableCell>
                  <TableCell>Morning Standup</TableCell>
                  <TableCell>Morning Standup</TableCell>
                  <TableCell>Morning Standup</TableCell>
                  <TableCell>Morning Standup</TableCell>
                  <TableCell className="bg-accent-prim/5">Workshop</TableCell>
                  <TableCell>Rest</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">10:00</TableCell>
                  <TableCell>Lecture</TableCell>
                  <TableCell>Lecture</TableCell>
                  <TableCell>Lecture</TableCell>
                  <TableCell>Lecture</TableCell>
                  <TableCell>Lecture</TableCell>
                  <TableCell className="bg-accent-prim/5">Workshop</TableCell>
                  <TableCell>Rest</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">12:00</TableCell>
                  <TableCell>Lunch</TableCell>
                  <TableCell>Lunch</TableCell>
                  <TableCell>Lunch</TableCell>
                  <TableCell>Lunch</TableCell>
                  <TableCell>Lunch</TableCell>
                  <TableCell className="bg-accent-prim/5">Lunch</TableCell>
                  <TableCell>Optional Brunch</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">14:00</TableCell>
                  <TableCell>Project Work</TableCell>
                  <TableCell>Project Work</TableCell>
                  <TableCell>Project Work</TableCell>
                  <TableCell>Project Work</TableCell>
                  <TableCell>Project Work</TableCell>
                  <TableCell className="bg-accent-prim/5">Guest Speaker</TableCell>
                  <TableCell>Rest</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">17:00</TableCell>
                  <TableCell>Office Hours</TableCell>
                  <TableCell>Office Hours</TableCell>
                  <TableCell>Office Hours</TableCell>
                  <TableCell>Office Hours</TableCell>
                  <TableCell>Weekly Demo</TableCell>
                  <TableCell className="bg-accent-prim/5">Social Event</TableCell>
                  <TableCell>Prep for Week</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Daily Routine Accordion */}
      <section className="py-12 md:py-16 bg-bg-prim/90">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Daily Routine</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="monday">
              <AccordionTrigger className="text-lg font-space-grotesk">Monday - Foundations Day</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-txt-sec">
                  <li>09:00 - 09:30: Morning standup and weekly goals</li>
                  <li>10:00 - 12:00: Core concepts lecture</li>
                  <li>12:00 - 13:30: Lunch break</li>
                  <li>14:00 - 17:00: Guided project work</li>
                  <li>17:00 - 18:30: Office hours with lead mentors</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tuesday">
              <AccordionTrigger className="text-lg font-space-grotesk">Tuesday - Deep Dive</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-txt-sec">
                  <li>09:00 - 09:30: Morning standup</li>
                  <li>10:00 - 12:00: Advanced topics lecture</li>
                  <li>12:00 - 13:30: Lunch break</li>
                  <li>14:00 - 17:00: Independent project work</li>
                  <li>17:00 - 18:30: Technical office hours</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="wednesday">
              <AccordionTrigger className="text-lg font-space-grotesk">Wednesday - Workshop Day</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-txt-sec">
                  <li>09:00 - 09:30: Morning standup</li>
                  <li>10:00 - 12:00: Hands-on workshop</li>
                  <li>12:00 - 13:30: Lunch break</li>
                  <li>14:00 - 17:00: Pair programming sessions</li>
                  <li>17:00 - 18:30: Code review sessions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="thursday">
              <AccordionTrigger className="text-lg font-space-grotesk">Thursday - Build Day</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-txt-sec">
                  <li>09:00 - 09:30: Morning standup</li>
                  <li>10:00 - 12:00: Implementation strategies lecture</li>
                  <li>12:00 - 13:30: Lunch break</li>
                  <li>14:00 - 17:00: Focused project development</li>
                  <li>17:00 - 18:30: Debugging sessions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="friday">
              <AccordionTrigger className="text-lg font-space-grotesk">Friday - Demo Day</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-txt-sec">
                  <li>09:00 - 09:30: Morning standup</li>
                  <li>10:00 - 12:00: Guest speaker session</li>
                  <li>12:00 - 13:30: Lunch break</li>
                  <li>14:00 - 16:30: Project finalization</li>
                  <li>16:30 - 18:00: Weekly demos and feedback</li>
                  <li>18:00 - 19:30: Social gathering (optional)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Curriculum Week Cards */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Curriculum Overview</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg border border-txt-sec/20 bg-bg-prim">
                <div className="p-6">
                  <div className="mb-2 text-accent-yellow font-mono">Week {i + 1}</div>
                  <h3 className="text-xl font-bold mb-2">
                    {i === 0 && "Foundations of ZKPs"}
                    {i === 1 && "Circuit Design"}
                    {i === 2 && "Halo2 Framework"}
                    {i === 3 && "Optimization Techniques"}
                    {i === 4 && "Advanced Cryptography"}
                    {i === 5 && "Integration Patterns"}
                    {i === 6 && "Scaling Solutions"}
                    {i === 7 && "Capstone Project"}
                  </h3>
                  <p className="text-txt-sec text-sm mb-4">
                    {i === 0 && "Introduction to zero-knowledge proofs and their applications."}
                    {i === 1 && "Learn to design efficient arithmetic circuits."}
                    {i === 2 && "Deep dive into the Halo2 proving system."}
                    {i === 3 && "Techniques to minimize constraints and gas costs."}
                    {i === 4 && "Explore advanced cryptographic primitives."}
                    {i === 5 && "Patterns for integrating ZKPs with applications."}
                    {i === 6 && "Scaling ZK applications for production use."}
                    {i === 7 && "Complete your capstone project with mentor guidance."}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-accent-prim">
                    View Details
                  </Button>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-bg-prim/90 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="text-center p-6">
                    <h4 className="text-lg font-bold mb-2">Key Deliverable:</h4>
                    <p className="text-accent-yellow">
                      {i === 0 && "Basic ZK Circuit Implementation"}
                      {i === 1 && "Optimized Arithmetic Circuit"}
                      {i === 2 && "Halo2 Custom Gadget"}
                      {i === 3 && "Gas-Optimized ZK Application"}
                      {i === 4 && "Multi-Party Computation Protocol"}
                      {i === 5 && "Full-Stack ZK dApp"}
                      {i === 6 && "Production-Ready ZK Service"}
                      {i === 7 && "Ship Poseidon Hash < 10k constraints"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capstone & Demo Day */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-prim to-bg-prim/50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-30 z-[-1]"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl">Capstone & Demo Day</h2>
            <p className="text-txt-sec mb-6">
              The program culminates in a Demo Day where participants present their capstone projects to industry
              leaders, potential employers, and the broader community.
            </p>
            <Button className="bg-accent-prim hover:bg-accent-yellow transition-colors duration-300">
              View Capstone Rubric (PDF)
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
