"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Tous vos travaux\nde rénovation énergétique",
    subtitle: "en France métropolitaine",
    image: "/modern-house-with-solar-panels-and-green-energy-re.jpg",
    cta: "Contactez notre équipe",
    href: "/contact",
  },
  {
    id: 2,
    title: "Réalisez l'isolation\nde votre habitat",
    subtitle: "pour un confort optimal",
    image: "/home-insulation-workers-installing-thermal-insulat.jpg",
    cta: "Découvrir l'isolation",
    href: "/services/isolation",
  },
  {
    id: 3,
    title: "Installez une pompe\nà chaleur performante",
    subtitle: "économisez sur vos factures",
    image: "/modern-heat-pump-installation-outside-house.jpg",
    cta: "En savoir plus",
    href: "/services/pompes-a-chaleur",
  },
  {
    id: 4,
    title: "Passez à l'énergie\nsolaire",
    subtitle: "pour votre indépendance énergétique",
    image: "/solar-panels-on-modern-roof-with-blue-sky.jpg",
    cta: "Découvrir le solaire",
    href: "/services/panneaux-solaires",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="absolute inset-0 bg-foreground/50" />

          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-background">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 whitespace-pre-line leading-tight">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-background/90">{slide.subtitle}</p>
              <Link href={slide.href}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                  {slide.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 text-background hover:bg-background/40 transition-colors"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 text-background hover:bg-background/40 transition-colors"
        aria-label="Slide suivant"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-background/50"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
