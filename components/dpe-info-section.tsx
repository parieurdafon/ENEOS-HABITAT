"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function DPEInfoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="inline-block bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-1.5 rounded-full text-sm font-bold mb-3 uppercase tracking-wide">
            ENEOS Habitat
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              DPE <span className="text-[#7cb342]">Île-de-France</span>
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p className="leading-relaxed">
                La région Île-de-France est le cœur économique et culturel de la France. Elle est notamment connue pour
                son patrimoine historique exceptionnel et son dynamisme immobilier.
              </p>
              <p className="leading-relaxed">
                Le <strong className="text-[#1e3a5f]">DPE en Île-de-France</strong> fournit des informations claires et
                précises sur la consommation énergétique d'un logement et ses émissions de gaz polluants. Ces données
                sont importantes pour les acheteurs et les locataires potentiels, car elles leur permettent de comparer
                les <strong className="text-[#1e3a5f]">performances énergétiques</strong> de différents biens et
                d'estimer leurs dépenses énergétiques à venir.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
              Votre Diagnostic immobilier avant vente avec ENEOS Habitat
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Le diagnostic immobilier avant vente contribue à assurer que les bâtiments respectent les normes
              environnementales en vigueur. Cela inclut non seulement les aspects énergétiques, mais aussi les{" "}
              <strong className="text-[#1e3a5f]">réglementations relatives</strong> à la gestion de l'eau, la prévention
              des risques naturels et technologiques et la protection contre les nuisances sonores.
            </p>

            <Link
              href="/services/dpe"
              className="inline-flex items-center gap-2 text-[#7cb342] font-bold hover:gap-4 transition-all"
            >
              En savoir plus sur le DPE
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/paris-aerial-view-haussmann-buildings-real-estate.jpg"
                  alt="Immobilier Paris Île-de-France"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#7cb342] text-white p-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg">DPE Obligatoire</p>
                <p className="text-white/80 text-sm">Vente & Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
