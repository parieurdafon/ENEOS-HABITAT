import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Thermometer, Droplets, Wind } from "lucide-react"

const pacTypes = [
  {
    icon: Droplets,
    title: "PAC Air-Eau",
    description:
      "La pompe à chaleur air-eau capte les calories de l'air extérieur pour chauffer l'eau de votre circuit de chauffage. Idéale pour remplacer une chaudière.",
    benefits: ["Compatible radiateurs existants", "Eau chaude sanitaire intégrée", "COP jusqu'à 4.5"],
  },
  {
    icon: Wind,
    title: "PAC Air-Air",
    description:
      "La pompe à chaleur air-air utilise l'air extérieur pour chauffer ou rafraîchir votre intérieur. Solution réversible pour un confort toute l'année.",
    benefits: ["Chauffage et climatisation", "Installation rapide", "Pilotage par zone"],
  },
  {
    icon: Thermometer,
    title: "PAC Géothermique",
    description:
      "La pompe à chaleur géothermique puise l'énergie dans le sol pour un rendement optimal et constant. La solution la plus performante.",
    benefits: ["Rendement optimal", "Indépendant de la météo", "Durée de vie 25+ ans"],
  },
]

export default function PompesAChaleurPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-foreground">
          <div className="absolute inset-0">
            <img
              src="/modern-heat-pump-outdoor-unit-installation-profess.jpg"
              alt="Pompe à chaleur"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nos Services</span>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-2 mb-6">Pompes à chaleur</h1>
              <p className="text-background/80 text-lg mb-8">
                Passez au chauffage économique et écologique avec une pompe à chaleur. Divisez vos factures par 3 tout
                en bénéficiant d'un confort optimal.
              </p>
              <Link href="/devis?projet=pompe-chaleur">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Demander un devis gratuit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Types de PAC */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos solutions de pompes à chaleur</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nous installons tous types de pompes à chaleur adaptées à votre logement et vos besoins
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pacTypes.map((pac) => (
                <div
                  key={pac.title}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <pac.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{pac.title}</h3>
                  <p className="text-muted-foreground mb-6">{pac.description}</p>
                  <ul className="space-y-2">
                    {pac.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comment fonctionne une pompe à chaleur ?
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img src="/heat-pump-system-diagram-how-it-works-illustration.jpg" alt="Fonctionnement pompe à chaleur" className="rounded-2xl" />
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Une pompe à chaleur fonctionne sur le principe de la thermodynamique : elle capte les calories
                  présentes dans l'air extérieur (même par temps froid) et les transfère dans votre logement pour le
                  chauffer.
                </p>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Captage", desc: "L'unité extérieure capte les calories de l'air" },
                    {
                      step: "2",
                      title: "Compression",
                      desc: "Le fluide frigorigène est compressé pour augmenter sa température",
                    },
                    {
                      step: "3",
                      title: "Diffusion",
                      desc: "La chaleur est transférée dans votre circuit de chauffage",
                    },
                    { step: "4", title: "Détente", desc: "Le fluide refroidit et le cycle recommence" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
