"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/company-info"
import { MapPin, Building2, Leaf, CheckCircle, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const zones = [
  { name: "Gironde (33)", cities: "Bordeaux, Mérignac, Pessac, Talence" },
  { name: "Nouvelle-Aquitaine", cities: "Toute la région" },
  { name: "France métropolitaine", cities: "Déplacements possibles" },
]

const sectors = [
  "Particuliers",
  "Promoteurs immobiliers",
  "Bailleurs sociaux",
  "Collectivités territoriales",
  "Entreprises & Industries",
  "Bureaux d'études",
]

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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#7cb342]/10 text-[#7cb342] px-5 py-2 rounded-full text-sm font-bold mb-6">
              <MapPin className="h-4 w-4" />
              <span>Notre zone d'intervention</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6 leading-tight">
              ENEOS HABITAT en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7cb342] to-[#689f38]">Nouvelle-Aquitaine</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Basés à <strong className="text-[#1e3a5f]">Cadaujac (33)</strong>, nous intervenons principalement en 
              Gironde et dans toute la région Nouvelle-Aquitaine pour vos projets d'études thermiques, 
              diagnostics immobiliers et ingénierie structure.
            </p>

            {/* Zones d'intervention */}
            <div className="space-y-4 mb-8">
              {zones.map((zone, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#7cb342] transition-colors group">
                  <div className="w-10 h-10 bg-[#7cb342]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#7cb342] transition-colors">
                    <MapPin className="h-5 w-5 text-[#7cb342] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a5f] mb-1">{zone.name}</h3>
                    <p className="text-gray-600 text-sm">{zone.cities}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Secteurs d'activité */}
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-3xl p-8 mb-8">
              <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
                <Building2 className="h-6 w-6 text-[#7cb342]" />
                Nos clients
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {sectors.map((sector, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#7cb342] flex-shrink-0" />
                    <span className="text-white/90 text-sm">{sector}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#7cb342] to-[#689f38] hover:from-[#689f38] hover:to-[#558b2f] text-white px-8 py-6 rounded-full text-lg font-bold shadow-xl group"
              >
                Nous contacter
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Map Side */}
          <div
            className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="relative">
              {/* Image placeholder - Carte de la Nouvelle-Aquitaine */}
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Map illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-3/4 h-3/4">
                      {/* Nouvelle-Aquitaine shape approximation */}
                      <div className="absolute inset-0 bg-[#7cb342]/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-4 border-[#7cb342]" />
                      
                      {/* Cadaujac marker */}
                      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce-slow">
                        <div className="relative">
                          <div className="w-6 h-6 bg-[#f57c00] rounded-full border-4 border-white shadow-xl" />
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1e3a5f] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
                            Cadaujac
                          </div>
                        </div>
                      </div>

                      {/* Radiation circles */}
                      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-[#7cb342]/30 rounded-full animate-pulse-slow" />
                      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-[#7cb342]/20 rounded-full animate-pulse-slower" />
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                    <p className="text-xs text-gray-600 mb-1">Siège social</p>
                    <p className="font-bold text-[#1e3a5f]">33140 Cadaujac</p>
                  </div>

                  <div className="absolute top-6 right-6 bg-[#7cb342] text-white px-4 py-2 rounded-xl shadow-lg">
                    <p className="text-xs mb-1">Zone d'intervention</p>
                    <p className="font-bold">Nouvelle-Aquitaine</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7cb342] to-[#689f38] rounded-xl flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Engagement local</p>
                    <p className="font-bold text-[#1e3a5f]">& responsable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}