"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Users, Award, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Projets réalisés",
    color: "from-[#7cb342] to-[#689f38]",
  },
  {
    icon: Users,
    value: 100,
    suffix: "%",
    label: "Clients satisfaits",
    color: "from-[#0288d1] to-[#0277bd]",
  },
  {
    icon: Award,
    value: 5,
    suffix: "",
    label: "Services experts",
    color: "from-[#f57c00] to-[#e65100]",
  },
  {
    icon: TrendingUp,
    value: 2025,
    suffix: "",
    label: "Année de création",
    color: "from-[#1e3a5f] to-[#2c5282]",
  },
]

function useCountUp(end: number, duration: number = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  return count
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#7cb342] rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#f57c00] rounded-full blur-3xl animate-pulse-slower" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 backdrop-blur-md text-[#7cb342] px-5 py-2 rounded-full text-sm font-bold mb-4">
            Nos Chiffres Clés
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ENEOS HABITAT en quelques <span className="text-[#7cb342]">chiffres</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Une jeune entreprise dynamique avec une vision claire et des ambitions élevées
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, 2000, isVisible)
            const Icon = stat.icon
            const delay = index * 100

            return (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Number */}
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {count}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-[#7cb342]">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-white/80 font-medium text-base">
                  {stat.label}
                </p>

                {/* Progress bar animation */}
                <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                    style={{ width: isVisible ? '100%' : '0%', transitionDelay: `${delay}ms` }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            * Statistiques mises à jour en janvier 2026. ENEOS HABITAT est une jeune société à mission créée en août 2025, 
            avec pour objectif de devenir un acteur majeur de l'ingénierie thermique et des diagnostics immobiliers en Nouvelle-Aquitaine.
          </p>
        </div>
      </div>
    </section>
  )
}