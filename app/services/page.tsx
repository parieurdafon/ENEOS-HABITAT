import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { companyInfo } from "@/lib/company-info"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lightbulb, Building2, GraduationCap, Users, ArrowRight, CheckCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Nos Services - Bureau d'Études Thermiques & Diagnostics | ENEOS HABITAT",
  description: "Découvrez nos 5 domaines d'expertise : études thermiques, diagnostics immobiliers, ingénierie structure, formation professionnelle et conseil. Nouvelle-Aquitaine.",
}

const serviceIcons = {
  "etudes-thermiques": Lightbulb,
  "diagnostics-immobiliers": Building2,
  "ingenierie-structure": Building2,
  "formation": GraduationCap,
  "conseil": Users,
}

const serviceColors = {
  "etudes-thermiques": "from-[#f57c00] to-[#e65100]",
  "diagnostics-immobiliers": "from-[#0288d1] to-[#0277bd]",
  "ingenierie-structure": "from-[#7cb342] to-[#689f38]",
  "formation": "from-[#1e3a5f] to-[#2c5282]",
  "conseil": "from-[#546e7a] to-[#37474f]",
}

const serviceDetails = [
  {
    id: "etudes-thermiques",
    slug: "etudes-thermiques",
    features: [
      "Études RT2020 et RE2020",
      "Audits énergétiques réglementaires",
      "Calculs thermiques et simulations",
      "Optimisation de la performance",
    ],
  },
  {
    id: "diagnostics-immobiliers",
    slug: "diagnostics-immobiliers",
    features: [
      "DPE (Diagnostic Performance Énergétique)",
      "Diagnostics amiante, plomb, termites",
      "Diagnostics gaz et électricité",
      "Loi Carrez et mesurage",
    ],
  },
  {
    id: "ingenierie-structure",
    slug: "ingenierie-structure",
    features: [
      "Calculs de structures béton",
      "Structures bois et charpentes",
      "Structures métalliques",
      "Notes de calcul et plans d'exécution",
    ],
  },
  {
    id: "formation",
    slug: "formation",
    features: [
      "Formation thermique et énergie",
      "Formation diagnostic immobilier",
      "Formation calcul structure",
      "Sessions intra et inter-entreprises",
    ],
  },
  {
    id: "conseil",
    slug: "conseil-expertise",
    features: [
      "Assistance Maîtrise d'Ouvrage",
      "Expertise technique bâtiment",
      "Conseil en performance énergétique",
      "Accompagnement de projets",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#7cb342] rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#f57c00] rounded-full blur-3xl animate-pulse-slower" />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" 
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-white/10 backdrop-blur-md text-[#7cb342] px-5 py-2 rounded-full text-sm font-bold mb-6">
                Nos Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                5 domaines d'expertise pour vos <span className="text-[#7cb342]">projets de bâtiment</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {companyInfo.activities.main}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis">
                  <Button size="lg" className="bg-gradient-to-r from-[#7cb342] to-[#689f38] hover:from-[#689f38] hover:to-[#558b2f] text-white px-8 py-6 rounded-full font-bold shadow-xl group">
                    Demander un devis
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:+33661070891">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-6 rounded-full font-bold backdrop-blur-md bg-white/5">
                    <Phone className="mr-2 h-5 w-5" />
                    06 61 07 08 91
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {companyInfo.services.map((service, index) => {
                const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
                const colorGradient = serviceColors[service.id as keyof typeof serviceColors]
                const details = serviceDetails.find(d => d.id === service.id)
                const isEven = index % 2 === 0

                return (
                  <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                      <div className={`w-16 h-16 bg-gradient-to-br ${colorGradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                        {service.name}
                      </h2>
                      
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {details?.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#7cb342] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link href={`/services/${details?.slug}`}>
                        <Button className={`bg-gradient-to-r ${colorGradient} text-white hover:opacity-90 px-6 py-5 rounded-full font-bold shadow-lg group`}>
                          En savoir plus
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    {/* Image placeholder */}
                    <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                      <div className={`aspect-[4/3] bg-gradient-to-br ${colorGradient} rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                        <Icon className="h-32 w-32 text-white/30 relative z-10" />
                        <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl">
                          <p className="text-white font-bold text-sm">{service.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin d'un accompagnement personnalisé ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Notre équipe est à votre disposition pour étudier votre projet et vous proposer une solution sur-mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devis">
                  <Button size="lg" className="bg-gradient-to-r from-[#7cb342] to-[#689f38] hover:from-[#689f38] hover:to-[#558b2f] text-white px-10 py-7 rounded-full text-lg font-bold shadow-xl">
                    Demander un devis gratuit
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-10 py-7 rounded-full text-lg font-bold backdrop-blur-md bg-white/5">
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