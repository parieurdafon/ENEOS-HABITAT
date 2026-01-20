import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { companyInfo } from "@/lib/company-info"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lightbulb, CheckCircle, ArrowRight, Phone, FileText, TrendingUp, Shield, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Études Thermiques RT2020 & RE2020 | ENEOS HABITAT",
  description: "Bureau d'études thermiques certifié. Études RT2020, RE2020, audits énergétiques, calculs thermiques et optimisation énergétique. Nouvelle-Aquitaine.",
}

const prestations = [
  {
    title: "Études RT2020 & RE2020",
    description: "Respect des réglementations thermiques pour vos projets neufs",
    features: ["Attestation RT2020", "Étude RE2020 complète", "BBIO, CEP, DH", "Rapport détaillé"],
  },
  {
    title: "Audits Énergétiques",
    description: "Diagnostic complet de la performance énergétique de votre bâtiment",
    features: ["Audit réglementaire", "Scénarios d'amélioration", "Calcul des gains", "Plan d'action"],
  },
  {
    title: "Calculs Thermiques",
    description: "Simulations thermiques dynamiques et dimensionnement",
    features: ["STD (Simulation Thermique Dynamique)", "Déperditions thermiques", "Dimensionnement chauffage", "Confort d'été"],
  },
  {
    title: "Optimisation Énergétique",
    description: "Conseils pour améliorer la performance de votre projet",
    features: ["Choix des systèmes", "Isolation optimale", "Ponts thermiques", "Énergies renouvelables"],
  },
]

const processSteps = [
  {
    step: "1",
    title: "Prise de contact",
    description: "Échange sur votre projet et vos besoins spécifiques",
    icon: Phone,
  },
  {
    step: "2",
    title: "Collecte des données",
    description: "Plans, descriptifs techniques, caractéristiques du bâtiment",
    icon: FileText,
  },
  {
    step: "3",
    title: "Étude & Calculs",
    description: "Modélisation 3D, simulations thermiques et calculs réglementaires",
    icon: TrendingUp,
  },
  {
    step: "4",
    title: "Livraison",
    description: "Rapport complet, attestations et recommandations",
    icon: CheckCircle,
  },
]

const advantages = [
  { icon: Shield, title: "Bureau d'études certifié", text: "Expertise reconnue et assurée" },
  { icon: Clock, title: "Délais rapides", text: "Étude livrée sous 5-7 jours" },
  { icon: CheckCircle, title: "Conformité garantie", text: "Respect des normes RT2020/RE2020" },
  { icon: Lightbulb, title: "Conseils personnalisés", text: "Accompagnement technique complet" },
]

export default function EtudesThermiquesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#f57c00] rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#7cb342] rounded-full blur-3xl animate-pulse-slower" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
                <Lightbulb className="h-5 w-5 text-[#f57c00]" />
                <span className="text-white font-bold">Études Thermiques & Énergétiques</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Bureau d'Études Thermiques <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f57c00] to-[#ff9800]">RT2020 & RE2020</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Optimisez la performance énergétique de vos projets neufs et rénovations avec notre expertise en thermique du bâtiment
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis">
                  <Button size="lg" className="bg-gradient-to-r from-[#f57c00] to-[#e65100] hover:from-[#e65100] hover:to-[#d84315] text-white px-8 py-6 rounded-full font-bold shadow-2xl group">
                    Demander un devis
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-6 rounded-full font-bold backdrop-blur-md bg-white/5">
                    <Phone className="mr-2 h-5 w-5" />
                    {companyInfo.contact.phone}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Prestations Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#f57c00]/10 text-[#f57c00] px-5 py-2 rounded-full text-sm font-bold mb-4">
                Nos Prestations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Des études thermiques <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f57c00] to-[#e65100]">sur-mesure</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Que vous soyez particulier, promoteur, architecte ou bureau d'études, nous vous accompagnons dans vos projets
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {prestations.map((prestation, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-100 hover:border-[#f57c00] transition-all hover:shadow-2xl group">
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#f57c00] transition-colors">
                    {prestation.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {prestation.description}
                  </p>
                  <div className="space-y-3">
                    {prestation.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-[#f57c00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-3 w-3 text-[#f57c00]" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#f57c00]/10 text-[#f57c00] px-5 py-2 rounded-full text-sm font-bold mb-4">
                Notre Processus
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                Comment ça marche ?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative">
                    <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-[#f57c00] transition-all hover:shadow-xl group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#f57c00] to-[#e65100] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-xl">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#f57c00] to-transparent" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-24 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi choisir <span className="text-[#f57c00]">ENEOS HABITAT</span> ?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#f57c00] to-[#e65100] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                    <p className="text-white/80">{advantage.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#f57c00] to-[#e65100] rounded-3xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin d'une étude thermique pour votre projet ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contactez-nous pour un devis gratuit et personnalisé sous 24h
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis">
                  <Button size="lg" className="bg-white text-[#f57c00] hover:bg-gray-100 px-10 py-7 rounded-full text-lg font-bold shadow-xl">
                    Demander un devis gratuit
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#f57c00] px-10 py-7 rounded-full text-lg font-bold backdrop-blur-md bg-white/10">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}