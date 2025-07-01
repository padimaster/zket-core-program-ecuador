import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* About Header */}
      <section className="py-16 md:py-24 bg-bg-prim">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">About Global Foundations</h1>
            <p className="text-txt-sec text-lg">
              Global Foundations is an initiative to build the next wave of zero-knowledge proof contributors across the
              world. We believe that talent is evenly distributed, but opportunity is not. Our mission is to bridge this
              gap by providing world-class education and mentorship to developers globally.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Our Journey</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-txt-sec/20"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 2023 - Asia */}
              <div className="md:col-start-1 md:text-right">
                <div className="relative">
                  <div className="md:absolute md:right-0 md:translate-x-1/2 top-0 w-8 h-8 rounded-full bg-accent-prim z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-bg-light"></div>
                  </div>
                  <div className="pl-12 md:pl-0 md:pr-12 pt-2">
                    <h3 className="text-2xl font-bold mb-2">2023 - Asia</h3>
                    <p className="text-txt-sec mb-4">
                      Launched our first cohort in Singapore, focusing on privacy-preserving computation and
                      zero-knowledge proofs.
                    </p>
                    <ul className="text-txt-sec text-sm space-y-1">
                      <li>25 graduates from 8 countries</li>
                      <li>12 open-source projects launched</li>
                      <li>85% of graduates working in ZK field</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="md:col-start-1 md:col-span-1"></div>

              {/* 2024 - Latin America */}
              <div className="md:col-start-2">
                <div className="relative">
                  <div className="md:absolute md:left-0 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-accent-prim z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-bg-light"></div>
                  </div>
                  <div className="pl-12 md:pl-12 pt-2">
                    <h3 className="text-2xl font-bold mb-2">2024 - Latin America</h3>
                    <p className="text-txt-sec mb-4">
                      Expanded to Costa Rica and Argentina with a focus on building local ZK communities and regional
                      applications.
                    </p>
                    <ul className="text-txt-sec text-sm space-y-1">
                      <li>40 graduates across two cohorts</li>
                      <li>18 open-source contributions to major projects</li>
                      <li>3 startups founded by program alumni</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="md:col-start-2 md:col-span-1"></div>

              {/* 2025 - Ecuador */}
              <div className="md:col-start-1 md:text-right">
                <div className="relative">
                  <div className="md:absolute md:right-0 md:translate-x-1/2 top-0 w-8 h-8 rounded-full bg-accent-yellow z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-bg-prim"></div>
                  </div>
                  <div className="pl-12 md:pl-0 md:pr-12 pt-2">
                    <h3 className="text-2xl font-bold mb-2">2025 - Ecuador</h3>
                    <p className="text-txt-sec mb-4">
                      Our current program in Quito, focusing on advanced ZK applications and sustainable open-source
                      development.
                    </p>
                    <ul className="text-txt-sec text-sm space-y-1">
                      <li>Applications open now</li>
                      <li>Expanded curriculum with industry partnerships</li>
                      <li>Focus on regional tech ecosystem development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Counter */}
      <section className="py-12 md:py-16 bg-bg-prim/90">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Our Impact</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-mono font-bold text-accent-prim mb-2">65+</div>
              <p className="text-txt-sec">Program Graduates</p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-mono font-bold text-accent-prim mb-2">42</div>
              <p className="text-txt-sec">OSS PRs Merged</p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-mono font-bold text-accent-prim mb-2">15</div>
              <p className="text-txt-sec">Devcon Scholarships</p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-mono font-bold text-accent-prim mb-2">12</div>
              <p className="text-txt-sec">Partner Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Photo Gallery</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "group of developers collaborating in Costa Rica tech hub",
              "coding workshop in Buenos Aires",
              "tech meetup in Quito Ecuador",
              "developers presenting project on stage",
              "hackathon participants working together",
              "mentorship session with industry expert",
            ].map((caption, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(caption)}`}
                  alt={caption}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-prim to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="p-4 text-sm text-bg-light">{caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-accent-prim hover:bg-accent-yellow transition-colors duration-300">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
