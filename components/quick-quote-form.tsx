"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Building, Store, ArrowRight, ShoppingBag, Key } from "lucide-react"

const transactionTypes = [
  { value: "vente", label: "Une vente", icon: ShoppingBag },
  { value: "location", label: "Une location", icon: Key },
  { value: "autre", label: "Autre", icon: Home },
]

const propertyTypes = [
  { value: "maison", label: "Une maison", icon: Home },
  { value: "appartement", label: "Un appartement", icon: Building },
  { value: "autre", label: "Un autre bien", icon: Store },
]

export function QuickQuoteForm() {
  const router = useRouter()
  const [transactionType, setTransactionType] = useState("")
  const [propertyType, setPropertyType] = useState("")

  const handleSubmit = () => {
    if (transactionType && propertyType) {
      router.push(`/devis?transaction=${transactionType}&bien=${propertyType}`)
    }
  }

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7cb342]/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1e3a5f]/5 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto border border-gray-100">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-[#f57c00] text-white px-5 py-2 rounded-full text-sm font-bold mb-4 animate-pulse-soft">
              Demandez votre devis en ligne 24h/24
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">
              Obtenez votre <span className="text-[#7cb342]">estimation gratuite</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Transaction Type */}
            <div>
              <p className="font-bold mb-4 text-[#1e3a5f] text-lg">Vous réalisez :</p>
              <div className="space-y-3">
                {transactionTypes.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <label
                      key={option.value}
                      className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all border-2 hover-lift ${
                        transactionType === option.value
                          ? "border-[#7cb342] bg-[#7cb342]/10 shadow-lg"
                          : "border-gray-200 hover:border-[#7cb342]/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="transactionType"
                        value={option.value}
                        checked={transactionType === option.value}
                        onChange={(e) => setTransactionType(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          transactionType === option.value ? "border-[#7cb342] bg-[#7cb342]" : "border-gray-300"
                        }`}
                      >
                        {transactionType === option.value && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <IconComponent
                        className={`h-5 w-5 ${transactionType === option.value ? "text-[#7cb342]" : "text-gray-400"}`}
                      />
                      <span
                        className={`font-semibold ${transactionType === option.value ? "text-[#7cb342]" : "text-[#1e3a5f]"}`}
                      >
                        {option.label}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Property Type */}
            <div>
              <p className="font-bold mb-4 text-[#1e3a5f] text-lg">Votre type de bien :</p>
              <div className="space-y-3">
                {propertyTypes.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <label
                      key={option.value}
                      className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all border-2 hover-lift ${
                        propertyType === option.value
                          ? "border-[#7cb342] bg-[#7cb342]/10 shadow-lg"
                          : "border-gray-200 hover:border-[#7cb342]/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="propertyType"
                        value={option.value}
                        checked={propertyType === option.value}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          propertyType === option.value ? "border-[#7cb342] bg-[#7cb342]" : "border-gray-300"
                        }`}
                      >
                        {propertyType === option.value && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <IconComponent
                        className={`h-5 w-5 ${propertyType === option.value ? "text-[#7cb342]" : "text-gray-400"}`}
                      />
                      <span
                        className={`font-semibold ${propertyType === option.value ? "text-[#7cb342]" : "text-[#1e3a5f]"}`}
                      >
                        {option.label}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={handleSubmit}
              disabled={!transactionType || !propertyType}
              size="lg"
              className="bg-[#f57c00] text-white hover:bg-[#e65100] px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group font-bold"
            >
              Découvrez vos tarifs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
