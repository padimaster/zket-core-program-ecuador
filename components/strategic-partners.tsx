import Image from "next/image"

const partners = [
  { name: "USFQ", logo: "/usfq-logo.png" },
  { name: "UTPL", logo: "/utpl-logo.png" },
  { name: "ESPE", logo: "/espe-logo.png" },
  { name: "GDG Quito", logo: "/gdg-quito-logo.png" },
  { name: "EcuadorInTech", logo: "/ecuadorintech-logo.png" },
  { name: "CEDIA", logo: "/placeholder.svg?height=40&width=120" },
]

export default function StrategicPartners() {
  return (
    <section className="py-12 md:py-16 bg-bg-prim/90">
      <div className="container px-4 mx-auto text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Backed by Ecuador's Leading Institutions</h2>
        <p className="max-w-2xl mx-auto mb-10 text-txt-sec">
          Our program is anchored in the local ecosystem, supported by top universities and tech communities that share
          our vision.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={140}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
