"use client"

import Link from "next/link"
import { companyInfo } from "@/lib/company-info"
import { ArrowRight, Phone, Leaf, Building2, Lightbulb, GraduationCap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image avec overlay premium */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/modern-french-house-exterior-sunny-day-real-estate.jpg)`,
          }}
        />
        {/* Overlay gradient premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/95 via-[#1e3a5f]/85 to-[#0d1f3a]/90" />
        
        {/* Effet de grille subtile */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `linear-gradient(rgba(124, 179, 66, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(124, 179, 66, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge Société à mission - Premium style */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full mb-8 animate-fade-in-up shadow-xl">
            <Leaf className="h-4 w-4 text-[#7cb342]" />
            <span className="text-white font-semibold text-sm tracking-wide">Société à mission</span>
          </div>

          {/* Titre principal avec animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight animate-fade-in-up animation-delay-100">
            Bureau d'Études Thermiques
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7cb342] to-[#9ccc65]">
              & Diagnostics Immobiliers
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed animate-fade-in-up animation-delay-200 max-w-3xl">
            {companyInfo.activities.main}
          </p>

          {/* Services badges */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up animation-delay-300">
            {[
              { icon: Lightbulb, text: "Études Thermiques" },
              { icon: Building2, text: "Diagnostics DPE" },
              { icon: Building2, text: "Ingénierie Structure" },
              { icon: GraduationCap, text: "Formation" },
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full"
              >
                <service.icon className="h-4 w-4 text-[#7cb342]" />
                <span className="text-white text-sm font-medium">{service.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons Premium */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Link 
              href="/devis"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7cb342] to-[#689f38] hover:from-[#689f38] hover:to-[#558b2f] text-white px-8 py-7 text-lg rounded-full shadow-2xl hover:shadow-[#7cb342]/50 transition-all group font-bold border-2 border-[#7cb342]/20"
            >
              Demander un devis gratuit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:+33661070891"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-7 text-lg rounded-full backdrop-blur-md bg-white/5 transition-all font-bold shadow-xl"
            >
              <Phone className="h-5 w-5" />
              06 61 07 08 91
            </a>
          </div>

          {/* Info bar - Texte plus visible */}
          <div className="mt-12 flex flex-wrap gap-6 items-center animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-[#7cb342] rounded-full animate-pulse shadow-lg shadow-[#7cb342]/50"></div>
              <span className="text-white font-medium text-sm">Nouvelle-Aquitaine & France</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-[#7cb342] rounded-full animate-pulse shadow-lg shadow-[#7cb342]/50"></div>
              <span className="text-white font-medium text-sm">Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-[#7cb342] rounded-full animate-pulse shadow-lg shadow-[#7cb342]/50"></div>
              <span className="text-white font-medium text-sm">Créée en {companyInfo.creationDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      
      {/* Floating shapes - Premium effect */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#7cb342]/10 rounded-full blur-3xl animate-pulse-slow hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1e3a5f]/20 rounded-full blur-3xl animate-pulse-slower hidden lg:block" />

      {/* Scroll indicator premium */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 animate-bounce-slow">
        <span className="text-white/60 text-xs uppercase tracking-widest font-semibold">Découvrir</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}