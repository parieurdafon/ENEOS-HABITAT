"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Amiante",
    description:
      "Recherche d'Amiante pour les biens dont le permis de construire a été délivré avant le 1er Juillet 1997, obligations dans le cadre d'une vente ou d'une location.",
    image: "/asbestos-inspection-building-materials-professiona.jpg",
    href: "/services/amiante",
    color: "#e53935",
  },
  {
    title: "Plomb",
    description:
      "Recherche de Plomb pour les biens dont le permis de construire a été délivré avant 1949, obligations dans le cadre d'une vente ou d'une location.",
    image: "/lead-paint-inspection-old-house-wall.jpg",
    href: "/services/plomb",
    color: "#8e24aa",
  },
  {
    title: "Termites",
    description:
      "Diagnostic d'état relatif à la présence de termites selon une zone infestée identifiée par arrêté préfectorale. Obligation dans le cadre d'une vente.",
    image: "/termite-inspection-wood-damage-house.jpg",
    href: "/services/termites",
    color: "#6d4c41",
  },
  {
    title: "Électricité",
    description:
      "Diagnostic Électricité sur les biens immobiliers dont l'installation a plus de 15 ans. Obligation dans le cadre d'une vente ou location.",
    image: "/electrical-panel-inspection-safety-professional.jpg",
    href: "/services/electricite",
    color: "#fdd835",
  },
  {
    title: "Gaz",
    description:
      "Diagnostic Gaz sur les biens immobiliers dont l'installation a plus de 15 ans. Obligation dans le cadre d'une vente ou location.",
    image: "/gas-installation-inspection-safety-boiler.jpg",
    href: "/services/gaz",
    color: "#fb8c00",
  },
  {
    title: "DPE",
    description:
      "Diagnostic de performance énergétique sur tout biens immobilier disposant d'un moyen de chauffage. Obligation dans le cadre d'une vente ou location.",
    image: "/energy-performance-certificate-house-thermal.jpg",
    href: "/services/dpe",
    color: "#7cb342",
  },
  {
    title: "ERP",
    description:
      "Etat des risques et pollutions selon la localisation de votre bien défini par arrêté préfectorale. Obligation dans le cadre d'une vente ou location.",
    image: "/environmental-risk-assessment-map-document.jpg",
    href: "/services/erp",
    color: "#00acc1",
  },
  {
    title: "Loi Carrez",
    description:
      "Mesure de la surface privative pour les biens situé en copropriété. Obligation dans le cadre d'une vente.",
    image: "/apartment-floor-plan-measurement-professional.jpg",
    href: "/services/carrez",
    color: "#5c6bc0",
  },
  {
    title: "Loi Boutin",
    description:
      "Mesure de la surface habitable pour les maisons individuelles ou les appartements. Obligation dans le cadre d'une location.",
    image: "/house-interior-measurement-tape-living-room.jpg",
    href: "/services/boutin",
    color: "#26a69a",
  },
]

export function ServicesSection() {
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="inline-block bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-1.5 rounded-full text-sm font-bold mb-3 uppercase tracking-wide">
            Les Diagnostics
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] text-center md:text-left">
            Les prestations <span className="text-[#7cb342]">obligatoires</span>
          </h2>
          <Link href="/devis">
            <Button className="bg-[#f57c00] text-white hover:bg-[#e65100] px-6 py-5 rounded-full font-bold shadow-lg">
              Devis en ligne 24/24h
            </Button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover-lift ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div
                  className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: service.color }}
                >
                  {service.title.charAt(0)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#7cb342] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-[#7cb342] font-semibold text-sm group-hover:gap-3 transition-all">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
