"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Home, Key, Building2 } from "lucide-react"

const slides = [
  {
    title: "Tous vos diagnostics",
    subtitle: "immobiliers",
    highlight: "en région parisienne",
    cta: "Contactez notre équipe",
    ctaLink: "/contact",
    image: "/modern-french-house-exterior-sunny-day-real-estate.jpg",
  },
  {
    title: "Réaliser le diagnostic",
    subtitle: "avant vente",
    highlight: "de votre bien",
    cta: "Vos obligations vente",
    ctaLink: "/obligations-vente",
    image: "/real-estate-agent-showing-house-to-couple-professi.jpg",
  },
  {
    title: "Obtenez le diagnostic",
    subtitle: "avant location",
    highlight: "de votre bien",
    cta: "Vos obligations location",
    ctaLink: "/obligations-location",
    image: "/modern-apartment-interior-living-room-bright.jpg",
  },
  {
    title: "Réaliser le DPE",
    subtitle: "de vos locaux",
    highlight: "pour votre projet professionnel",
    cta: "DPE Tertiaire",
    ctaLink: "/services/dpe-tertiaire",
    image: "/modern-office-building-exterior-glass-facade.jpg",
  },
]

const slideIcons = [Home, Key, Key, Building2]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const CurrentIcon = slideIcons[currentSlide]

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1)" : "scale(1.05)",
              transition: "transform 6s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/95 via-[#1e3a5f]/75 to-[#1e3a5f]/40" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Animated Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7cb342] rounded-2xl mb-6 animate-bounce-soft shadow-lg">
            <CurrentIcon className="h-8 w-8 text-white" />
          </div>

          {/* Title with animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 animate-fade-in-up">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7cb342] mb-2 animate-fade-in-up animation-delay-100">
            {slides[currentSlide].subtitle}
          </h2>
          <h3 className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
            {slides[currentSlide].highlight}
          </h3>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <Link href={slides[currentSlide].ctaLink}>
              <Button
                size="lg"
                className="bg-[#7cb342] hover:bg-[#689f38] text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all group font-semibold"
              >
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+33661070891">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-6 text-lg rounded-full bg-transparent transition-all font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                06 61 07 08 91
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? "w-12 h-3 bg-[#7cb342]" : "w-3 h-3 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/70 z-10">
        <div className="w-px h-20 bg-gradient-to-b from-white/60 to-transparent" />
        <span className="text-xs uppercase tracking-widest rotate-90 origin-center translate-y-6">Scroll</span>
      </div>
    </section>
  )
}
