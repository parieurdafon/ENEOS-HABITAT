"use client"

import Link from "next/link"
import { CreditCard, Download, Bell, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PaymentSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7cb342]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7cb342]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <span className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wide">
              Paiement en ligne
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Récupérer votre rapport <span className="text-[#7cb342]">en un éclair</span>
            </h2>
            <p className="text-white/80 leading-relaxed mb-8 text-lg">
              Grâce à notre service de paiement en ligne, récupérer votre rapport n'a jamais été aussi simple et rapide.
              Dès que celui-ci est prêt, vous recevrez une notification vous en informant. Rendez-vous ensuite sur nos
              services, payez et téléchargez votre rapport.
            </p>
            <p className="text-[#7cb342] font-bold text-xl mb-8">C'est terminé !</p>

            <Link href="/paiement">
              <Button className="bg-[#7cb342] text-white hover:bg-[#689f38] px-8 py-6 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
                <CreditCard className="mr-2 h-5 w-5" />
                Accéder au paiement
              </Button>
            </Link>
          </div>

          {/* Steps */}
          <div className="grid gap-6">
            {[
              {
                icon: Bell,
                title: "1. Notification",
                description: "Recevez une notification dès que votre rapport est prêt",
              },
              {
                icon: CreditCard,
                title: "2. Paiement sécurisé",
                description: "Payez en ligne en toute sécurité par carte bancaire",
              },
              {
                icon: Download,
                title: "3. Téléchargement",
                description: "Téléchargez immédiatement votre rapport complet",
              },
              {
                icon: CheckCircle,
                title: "4. C'est fait !",
                description: "Votre dossier de diagnostic technique est entre vos mains",
              },
            ].map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex items-center gap-4 hover:bg-white/15 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#7cb342] rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{step.title}</h3>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
