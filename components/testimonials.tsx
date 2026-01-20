"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    location: "Paris 15ème",
    rating: 5,
    text: "Service impeccable ! Le diagnostiqueur était ponctuel et très professionnel. J'ai reçu mon rapport DPE en moins de 24h. Je recommande vivement ENEOS Habitat pour tous vos diagnostics.",
    project: "DPE Vente",
    avatar: "M",
  },
  {
    id: 2,
    name: "Pierre Martin",
    location: "Boulogne-Billancourt",
    rating: 5,
    text: "Excellent travail pour l'ensemble des diagnostics de mon appartement avant la vente. Tarifs compétitifs et rapports très détaillés. L'équipe est réactive et à l'écoute.",
    project: "Pack Vente Complet",
    avatar: "P",
  },
  {
    id: 3,
    name: "Sophie Bernard",
    location: "Neuilly-sur-Seine",
    rating: 5,
    text: "J'ai fait appel à ENEOS pour un audit énergétique complet de ma maison. Les recommandations étaient très pertinentes et m'ont permis de prioriser mes travaux de rénovation.",
    project: "Audit Énergétique",
    avatar: "S",
  },
  {
    id: 4,
    name: "Jean-Luc Moreau",
    location: "Versailles",
    rating: 5,
    text: "Intervention rapide pour les diagnostics amiante et plomb avant travaux. Le rapport était clair et complet. Très satisfait du professionnalisme de l'équipe.",
    project: "Diagnostics Avant Travaux",
    avatar: "J",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7cb342]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1e3a5f]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#7cb342]/10 text-[#7cb342] px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Ce que disent <span className="text-[#7cb342]">nos clients</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-6 left-8 w-16 h-16 bg-[#7cb342] rounded-2xl flex items-center justify-center shadow-lg z-10">
            <Quote className="h-8 w-8 text-white" />
          </div>

          <div className="bg-[#f8fafc] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#f57c00] text-[#f57c00]" />
              ))}
            </div>

            <p className="text-lg md:text-xl text-[#1e3a5f] mb-8 text-center leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7cb342] to-[#558b2f] rounded-full flex items-center justify-center text-white text-xl font-bold mb-3">
                {testimonials[currentIndex].avatar}
              </div>
              <p className="font-bold text-[#1e3a5f] text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gray-500 text-sm">
                {testimonials[currentIndex].location} • {testimonials[currentIndex].project}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white border-2 border-gray-200 hover:border-[#7cb342] hover:text-[#7cb342] transition-all shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-[#7cb342]" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white border-2 border-gray-200 hover:border-[#7cb342] hover:text-[#7cb342] transition-all shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
