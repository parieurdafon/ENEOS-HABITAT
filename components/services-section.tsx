"use client"

import Link from "next/link"
import { companyInfo } from "@/lib/company-info"
import { Button } from "@/components/ui/button"
import { Lightbulb, Building2, GraduationCap, Users, ArrowRight, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const serviceIcons = {
  "etudes-thermiques": Lightbulb,
  "diagnostics-immobiliers": Building2,
  "ingenierie-structure": Building2,
  "formation": GraduationCap,
  "conseil": Users,
}

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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#7cb342]/10 text-[#7cb342] px-5 py-2 rounded-full text-sm font-bold mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Nos domaines d'<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7cb342] to-[#689f38]">expertise</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Bureau d'études et d'ingénierie spécialisé en performance énergétique, diagnostics immobiliers et formation professionnelle
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {companyInfo.services.map((service, index) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
            const delay = index * 100

            return (
              <div
                key={service.id}
                className={`group bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border-2 border-gray-100 hover:border-[#7cb342] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb342] to-[#689f38] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#7cb342] transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Link */}
                <Link href="/services" className="inline-flex items-center gap-2 text-[#7cb342] font-semibold group-hover:gap-3 transition-all">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* Decorative element */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-[#7cb342]" />
                    <span>Expertise certifiée</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/services">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#7cb342] to-[#689f38] hover:from-[#689f38] hover:to-[#558b2f] text-white px-10 py-7 rounded-full text-lg font-bold shadow-2xl hover:shadow-[#7cb342]/50 transition-all group"
            >
              Découvrir tous nos services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}