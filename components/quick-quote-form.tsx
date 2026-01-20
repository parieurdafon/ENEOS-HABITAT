"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Building2, Home, FileText, ArrowRight, Lightbulb, GraduationCap } from "lucide-react"

const projectTypes = [
  { value: "etude-thermique", label: "Étude thermique", icon: Lightbulb, color: "from-[#f57c00] to-[#e65100]" },
  { value: "diagnostic", label: "Diagnostic immobilier", icon: Building2, color: "from-[#0288d1] to-[#0277bd]" },
  { value: "ingenierie", label: "Ingénierie structure", icon: Building2, color: "from-[#7cb342] to-[#689f38]" },
  { value: "formation", label: "Formation", icon: GraduationCap, color: "from-[#1e3a5f] to-[#2c5282]" },
]

const propertyTypes = [
  { value: "maison", label: "Maison individuelle", icon: Home },
  { value: "appartement", label: "Appartement", icon: Building2 },
  { value: "tertiaire", label: "Bâtiment tertiaire", icon: Building2 },
  { value: "autre", label: "Autre", icon: FileText },
]

export function QuickQuoteForm() {
  const router = useRouter()
  const [projectType, setProjectType] = useState("")
  const [propertyType, setPropertyType] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (projectType && propertyType) {
      router.push(`/devis?projet=${projectType}&bien=${propertyType}`)
    }
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7cb342]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-[#f57c00] text-white px-5 py-2 rounded-full text-sm font-bold mb-4">
              Devis en ligne 24/24h
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Demandez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7cb342] to-[#689f38]">devis gratuit</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Réponse personnalisée sous 24h • Sans engagement
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl border-2 border-gray-100 shadow-xl">
            {/* Step 1: Type de projet */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#7cb342] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Votre projet
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {projectTypes.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <label
                      key={option.value}
                      className={`relative flex flex-col items-center gap-3 p-6 rounded-2xl cursor-pointer transition-all border-2 group hover:scale-105 ${
                        projectType === option.value
                          ? "border-[#7cb342] bg-[#7cb342]/5 shadow-lg"
                          : "border-gray-200 hover:border-[#7cb342]/50 bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={option.value}
                        checked={projectType === option.value}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="sr-only"
                        required
                      />
                      <div className={`w-14 h-14 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <span className={`font-semibold text-center text-sm ${projectType === option.value ? "text-[#7cb342]" : "text-[#1e3a5f]"}`}>
                        {option.label}
                      </span>
                      {projectType === option.value && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#7cb342] rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      )}
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Type de bien */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#7cb342] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Votre type de bien
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {propertyTypes.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <label
                      key={option.value}
                      className={`relative flex flex-col items-center gap-3 p-6 rounded-2xl cursor-pointer transition-all border-2 group hover:scale-105 ${
                        propertyType === option.value
                          ? "border-[#7cb342] bg-[#7cb342]/5 shadow-lg"
                          : "border-gray-200 hover:border-[#7cb342]/50 bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="propertyType"
                        value={option.value}
                        checked={propertyType === option.value}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="sr-only"
                        required
                      />
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                        propertyType === option.value 
                          ? "bg-gradient-to-br from-[#7cb342] to-[#689f38]" 
                          : "bg-gray-100 group-hover:bg-gray-200"
                      }`}>
                        <IconComponent className={`h-7 w-7 ${propertyType === option.value ? "text-white" : "text-gray-600"}`} />
                      </div>
                      <span className={`font-semibold text-center text-sm ${propertyType === option.value ? "text-[#7cb342]" : "text-[#1e3a5f]"}`}>
                        {option.label}
                      </span>
                      {propertyType === option.value && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#7cb342] rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      )}
                    </label>
                  )
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={!projectType || !propertyType}
                className="bg-gradient-to-r from-[#7cb342] to-[#689f38] hover:from-[#689f38] hover:to-[#558b2f] text-white px-12 py-7 rounded-full text-lg font-bold shadow-2xl hover:shadow-[#7cb342]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                Obtenir mon devis gratuit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-gray-500 text-sm mt-4">
                ✓ Réponse sous 24h • ✓ Sans engagement • ✓ Gratuit
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}