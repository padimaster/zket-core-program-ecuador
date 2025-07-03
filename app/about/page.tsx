import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* About Header */}
      <section className="py-16 md:py-24 bg-bg-prim">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6 text-bg-light">
              About ZKET Core Program Ecuador
            </h1>
            <p className="text-txt-sec text-lg">
              Welcome to the ZKET Core Program Ecuador 2025, an initiative by the 
              <strong> ZK Education Team of the Ethereum Foundation</strong>. 
              This is your opportunity to dive deep into Programmable Cryptography (ProgCrypto) 
              with a special emphasis on Zero-Knowledge Proofs (ZKPs), privacy, and secure computation.
              <br /><br />
              Our mission is to train and empower the next generation of ZK experts in Ecuador 
              through 6 intensive weeks of hands-on learning, open-source contributions, and mentorship. 
              You'll work with cutting-edge technologies like Circom, Cairo, Noir, and Plonkathon while 
              contributing to real-world projects.
              <br /><br />
              This immersive program requires genuine commitment and passion for cryptography and mathematics. 
              With only 25 spots available, we're looking for students and professionals with a strong 
              foundation in programming or mathematics who are ready to push the boundaries of what's possible 
              with zero-knowledge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-bg-prim">
            Our Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-txt-sec/20 via-accent-prim/30 to-accent-yellow/60"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 2023 - Asia */}
              <div className="md:col-start-1 md:text-right">
                <div className="relative">
                  <div className="md:absolute md:right-0 md:translate-x-1/2 top-0 w-8 h-8 rounded-full bg-txt-sec/40 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-bg-light"></div>
                  </div>
                  <div className="pl-12 md:pl-0 md:pr-12 pt-2">
                    <h3 className="text-2xl font-bold mb-2 text-white">2023 - Asia</h3>
                    <p className="text-txt-sec mb-4">
                      Launched our first cohort in Singapore, focusing on
                      privacy-preserving computation and zero-knowledge proofs.
                    </p>
                    <ul className="text-txt-sec text-sm space-y-1">
                      <li>Graduates from 3 countries</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="md:col-start-1 md:col-span-1"></div>

              {/* 2024 - Latin America */}
              <div className="md:col-start-2">
                <div className="relative">
                  <div className="md:absolute md:left-0 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-accent-prim/70 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-bg-light"></div>
                  </div>
                  <div className="pl-12 md:pl-12 pt-2">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      2024 - Expanded to Latam
                    </h3>
                    <p className="text-txt-sec mb-4">
                      Expanded to Costa Rica, Argentina, and Ecuador with a
                      focus on building the next generation of ZK Contributors.
                    </p>
                    <ul className="text-txt-sec text-sm space-y-1">
                      <li>Graduates from 6 countries</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="md:col-start-2 md:col-span-1"></div>

              {/* 2025 - Ecuador */}
              <div className="md:col-start-1 md:text-right">
                <div className="relative">
                  <div className="md:absolute md:right-0 md:translate-x-1/2 top-0 w-8 h-8 rounded-full bg-accent-yellow z-10 flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 rounded-full bg-bg-light"></div>
                  </div>
                  <div className="pl-12 md:pl-0 md:pr-12 pt-2">
                    <h3 className="text-2xl font-bold mb-2 text-white">2025 - Ecuador</h3>
                    <p className="text-txt-sec mb-4">
                      The official ZKET Core Program Ecuador by the ZK Education Team 
                      of the Ethereum Foundation, focusing on Programmable Cryptography 
                      and building the next generation of ZK specialists in Quito.
                    </p>
                    <ul className="text-txt-sec text-sm space-y-1">
                      <li>6-week intensive ProgCrypto curriculum</li>
                      <li>25 spots available • 100% free program</li>
                      <li>Technologies: Circom, Cairo, Noir, Plonkathon</li>
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
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-bg-light">
            ZKET Program Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-mono font-bold text-accent-prim mb-2">
                6
              </div>
              <p className="text-txt-sec">Intensive Weeks</p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-mono font-bold text-accent-prim mb-2">
                25
              </div>
              <p className="text-txt-sec">Available Spots</p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-mono font-bold text-accent-prim mb-2">
                100%
              </div>
              <p className="text-txt-sec">Free Program</p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-mono font-bold text-accent-prim mb-2">
                4
              </div>
              <p className="text-txt-sec">Core Technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center text-white">
            Photo Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                src: "/gallery/gal-1.jpg",
                alt: "ZKET Program participants collaborating during workshop session"
              },
              {
                src: "/gallery/gal-2.jpg", 
                alt: "Students working on zero-knowledge proof implementations"
              },
              {
                src: "/gallery/gal-3.jpg",
                alt: "Interactive coding session with mentors and participants"
              },
              {
                src: "/gallery/gal-4.jpg",
                alt: "Group presentation during ZKET Core Program demo day"
              },
              {
                src: "/gallery/gal-5.jpg",
                alt: "Participants engaged in hands-on cryptography exercises"
              },
              {
                src: "/gallery/gal-6.jpg",
                alt: "Collaborative learning environment during program sessions"
              },
            ].map((image, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-prim to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="p-4 text-sm text-bg-light">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
