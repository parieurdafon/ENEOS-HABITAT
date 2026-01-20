"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/company-info"
import { Award, Shield, Leaf, CheckCircle, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const highlights = [
  "Société à mission engagée",
  "Expertise thermique & énergétique",
  "Diagnostics immobiliers certifiés",
  "Ingénierie structure béton, bois, métal",
  "Formation professionnelle agréée",
  "Conseil et assistance MOA",
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="inline-block bg-[#7cb342]/10 text-[#7cb342] px-5 py-2 rounded-full text-sm font-bold mb-3">
            Qui sommes-nous
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                <Image
                  src="/professional-energy-renovation-team-meeting-with-c.jpg"
                  alt="Équipe ENEOS HABITAT - Bureau d'études"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge - Société à mission */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#7cb342] to-[#689f38] p-6 rounded-2xl shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-lg">Société</p>
                    <p className="text-white/90 text-sm">à mission</p>
                  </div>
                </div>
              </div>

              {/* Certification Badge */}
              <div className="absolute -top-4 -left-4 bg-[#1e3a5f] text-white p-5 rounded-2xl shadow-2xl border-2 border-white">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-[#7cb342]" />
                  <div>
                    <p className="font-bold text-base">Bureau</p>
                    <p className="text-white/80 text-sm">d'Études</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6 leading-tight">
              Bienvenue chez <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7cb342] to-[#689f38]">ENEOS HABITAT</span>
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p className="leading-relaxed text-lg">
                <strong className="text-[#1e3a5f]">ENEOS HABITAT</strong> est une{" "}
                <span className="text-[#7cb342] font-semibold">société à mission</span> créée en août 2025, 
                spécialisée dans l'ingénierie thermique, énergétique et structurelle du bâtiment.
              </p>
              <p className="leading-relaxed text-base">
                Notre expertise couvre l'ensemble des besoins en <strong className="text-[#1e3a5f]">études techniques</strong> et{" "}
                <strong className="text-[#1e3a5f]">diagnostics immobiliers</strong>, de la conception à la réalisation 
                de vos projets de construction et de rénovation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white rounded-3xl p-8 mb-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7cb342] rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                Notre mission
              </h3>
              <p className="text-white/90 leading-relaxed">
                {companyInfo.mission.description}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-[#7cb342]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#7cb342] transition-colors">
                    <CheckCircle className="h-4 w-4 text-[#7cb342] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[#1e3a5f] font-medium text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Premium */}
            <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#7cb342] mb-1">24h</div>
                <p className="text-gray-600 text-xs font-medium">Réponse rapide</p>
              </div>
              <div className="text-center border-l border-r border-gray-200">
                <div className="text-3xl font-bold text-[#7cb342] mb-1">5</div>
                <p className="text-gray-600 text-xs font-medium">Services experts</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#7cb342] mb-1">2025</div>
                <p className="text-gray-600 text-xs font-medium">Création</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/a-propos">
                <Button className="bg-gradient-to-r from-[#7cb342] to-[#689f38] text-white hover:from-[#689f38] hover:to-[#558b2f] px-8 py-6 rounded-full font-bold shadow-xl group">
                  En savoir plus
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href={`mailto:${companyInfo.contact.email}`}>
                <Button
                  variant="outline"
                  className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-6 rounded-full font-bold"
                >
                  Nous contacter
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}