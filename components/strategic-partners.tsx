import Image from "next/image"

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  
]

export default function StrategicPartners() {
  return (
    <section className="py-12 md:py-16 bg-bg-prim/90">
      <div className="container px-4 mx-auto text-center md:px-6">
        <h2 className="h2-section">Backed by Ecuador's Leading Institutions</h2>
        <p className="p-large mx-auto mb-10">
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
