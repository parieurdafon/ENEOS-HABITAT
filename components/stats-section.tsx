"use client"

import { useEffect, useState, useRef } from "react"
import { Award, Users, FileCheck, ThumbsUp } from "lucide-react"

const stats = [
  { value: 2000, suffix: "+", label: "Diagnostics réalisés", icon: FileCheck },
  { value: 98, suffix: "%", label: "Clients satisfaits", icon: ThumbsUp },
  { value: 10, suffix: "+", label: "Années d'expérience", icon: Award },
  { value: 500, suffix: "+", label: "Clients fidèles", icon: Users },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1e3a5f] via-[#2c5282] to-[#1e3a5f] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#7cb342] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7cb342] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Nos Chiffres
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            La confiance de nos clients en <span className="text-[#7cb342]">chiffres</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <div key={stat.label} className="text-center group">
                <div className="w-16 h-16 bg-[#7cb342]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#7cb342]/30 transition-colors">
                  <IconComponent className="h-8 w-8 text-[#7cb342]" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-white/70 mt-2 font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
