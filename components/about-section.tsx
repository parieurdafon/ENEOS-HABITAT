"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Shield, Clock, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const highlights = [
  "Diagnostiqueurs certifiés et assurés",
  "Rapports conformes aux normes en vigueur",
  "Intervention rapide sous 48h",
  "Tarifs transparents et compétitifs",
  "Conseils personnalisés gratuits",
  "Service client disponible 6j/7",
]

export function AboutSection() {
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
    <section ref={sectionRef} className="py-20 bg-[#f8fafc] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="inline-block bg-[#7cb342]/10 text-[#7cb342] px-4 py-1.5 rounded-full text-sm font-bold mb-3">
            Bienvenus
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/professional-diagnostician-inspecting-house-therma.jpg"
                  alt="Diagnostiqueur ENEOS Habitat en intervention"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#7cb342] rounded-xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">+10</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ans d'expérience</p>
                    <p className="font-bold text-[#1e3a5f]">dans le contrôle qualité</p>
                  </div>
                </div>
              </div>

              {/* Certification Badge */}
              <div className="absolute -top-4 -left-4 bg-[#1e3a5f] text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-[#7cb342]" />
                  <div>
                    <p className="font-bold">Certifié</p>
                    <p className="text-white/80 text-xs">& Assuré</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6 leading-tight">
              Bienvenue chez <span className="text-[#7cb342]">ENEOS Habitat</span>
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p className="leading-relaxed text-lg">
                <strong className="text-[#1e3a5f]">ENEOS Habitat</strong> est votre partenaire de confiance pour
                réaliser vos <strong className="text-[#1e3a5f]">diagnostics immobiliers</strong> en Île-de-France et ses
                environs.
              </p>
              <p className="leading-relaxed">
                Notre cabinet est composé de diagnostiqueurs certifiés et expérimentés qui vous accompagnent dans tous
                vos projets immobiliers : vente, location, travaux ou mise en conformité.
              </p>
            </div>

            <div className="bg-[#1e3a5f] text-white rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-[#7cb342]" />
                Pourquoi faire appel à ENEOS Habitat ?
              </h3>
              <p className="text-white/80 leading-relaxed">
                En tant que diagnostiqueur, notre objectif est de vous fournir un Dossier de Diagnostic Technique
                complet et rigoureux. Nous prenons le temps d'examiner minutieusement votre bien pour ne rien laisser au
                hasard.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#7cb342]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-[#7cb342]" />
                  </div>
                  <span className="text-[#1e3a5f] font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-8 pb-8 border-b border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Clock className="h-5 w-5 text-[#7cb342]" />
                  <span className="text-2xl font-bold text-[#1e3a5f]">48h</span>
                </div>
                <p className="text-gray-500 text-xs">Délai intervention</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-[#1e3a5f]">98%</span>
                <p className="text-gray-500 text-xs">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-[#1e3a5f]">2000+</span>
                <p className="text-gray-500 text-xs">Diagnostics réalisés</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:Contact@eneoshabitat.fr">
                <Button className="bg-[#7cb342] text-white hover:bg-[#689f38] px-6 py-5 rounded-full font-semibold shadow-lg">
                  contact@eneoshabitat.fr
                </Button>
              </a>
              <a href="tel:+33661070891">
                <Button
                  variant="outline"
                  className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white bg-transparent px-6 py-5 rounded-full font-semibold"
                >
                  06 61 07 08 91
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
