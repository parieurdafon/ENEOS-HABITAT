"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#7cb342]/10 text-[#7cb342] px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wide">
            La newsletter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            Tenez-vous <span className="text-[#7cb342]">informé</span>
          </h2>

          {submitted ? (
            <div className="bg-[#7cb342]/10 rounded-2xl p-8 flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-[#7cb342] rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <p className="text-[#1e3a5f] font-semibold text-lg">Merci pour votre inscription !</p>
              <p className="text-gray-500">Vous recevrez bientôt nos dernières actualités.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-12 py-6 rounded-full border-gray-200 focus:border-[#7cb342] focus:ring-[#7cb342]"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-[#7cb342] text-white hover:bg-[#689f38] px-8 py-6 rounded-full font-bold shadow-lg"
                >
                  S'inscrire à la newsletter
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                En cliquant sur «Je m'inscris», j'accepte de recevoir la lettre d'information de la part de la société
                ENEOS Habitat.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
