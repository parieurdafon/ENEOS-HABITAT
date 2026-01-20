"use client"

import Image from "next/image"
import { Shield, Eye, Phone } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Shield,
    title: "Qualité",
    description:
      "Bénéficiez de diagnostics précis et fiables grâce à notre expertise certifiée et nos technologies de pointe. Transparence, rapidité et qualité sont nos maîtres mots pour un service irréprochable.",
    image: "/quality-certification-badge-professional-service.jpg",
  },
  {
    icon: Eye,
    title: "Transparence",
    description:
      "Notre engagement envers la transparence garantit des diagnostics clairs et détaillés. Faites confiance à ENEOS Habitat pour des rapports compréhensibles et des conseils limpides.",
    image: "/transparent-report-document-clear-professional.jpg",
  },
  {
    icon: Phone,
    title: "Prise de contact directe",
    description:
      "Chez ENEOS Habitat, la prise de contact directe est notre priorité. Profitez d'un service rapide et personnalisé avec un expert dédié à vos besoins, pour une expérience client exceptionnelle.",
    image: "/customer-service-phone-call-professional.jpg",
  },
]

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="inline-block bg-[#7cb342]/10 text-[#7cb342] px-4 py-1.5 rounded-full text-sm font-bold mb-3 uppercase tracking-wide">
            Nos engagements
          </span>
        </div>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">
            Pourquoi choisir <span className="text-[#7cb342]">ENEOS Habitat</span> ?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.title}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#7cb342]/20">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Icon Badge */}
                <div className="w-14 h-14 mx-auto -mt-10 mb-4 bg-[#1e3a5f] rounded-xl flex items-center justify-center shadow-lg relative z-10">
                  <IconComponent className="h-7 w-7 text-[#7cb342]" />
                </div>

                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
