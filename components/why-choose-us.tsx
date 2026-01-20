"use client"

import { companyInfo } from "@/lib/company-info"
import { Award, Leaf, Lightbulb, Heart, CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const engagementIcons = [Award, Leaf, Lightbulb, Heart]

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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#7cb342]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#7cb342]/10 text-[#7cb342] px-5 py-2 rounded-full text-sm font-bold mb-4">
            Nos Engagements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
            Pourquoi choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7cb342] to-[#689f38]">ENEOS HABITAT</span> ?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {companyInfo.mission.description}
          </p>
        </div>

        {/* Engagements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {companyInfo.mission.values.map((value, index) => {
            const Icon = engagementIcons[index]
            const delay = index * 100

            return (
              <div
                key={index}
                className={`group bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-[#7cb342] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7cb342] to-[#689f38] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#7cb342] transition-colors">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Check icon */}
                    <div className="mt-4 flex items-center gap-2 text-sm text-[#7cb342] font-semibold">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Notre engagement</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner - Société à mission */}
        <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-3xl p-10 md:p-12 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
              <Leaf className="h-6 w-6 text-[#7cb342]" />
              <span className="text-white font-bold text-lg">Société à mission</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Un engagement au-delà du business
            </h3>
            
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              En tant que société à mission, nous plaçons l'impact environnemental et sociétal au cœur de notre activité. 
              Chaque projet est une opportunité de contribuer à un habitat plus durable et performant.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="text-3xl font-bold text-[#7cb342] mb-2">100%</div>
                <p className="text-white/90 text-sm">Engagés pour la planète</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="text-3xl font-bold text-[#7cb342] mb-2">24/7</div>
                <p className="text-white/90 text-sm">À votre écoute</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="text-3xl font-bold text-[#7cb342] mb-2">+5</div>
                <p className="text-white/90 text-sm">Domaines d'expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}