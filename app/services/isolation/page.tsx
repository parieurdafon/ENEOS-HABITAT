import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

const isolationTypes = [
  {
    title: "Isolation des combles",
    description:
      "L'isolation des combles est la priorité n°1 pour réduire vos factures. Jusqu'à 30% des pertes de chaleur se font par la toiture.",
    image: "/attic-insulation-installation-workers-blowing-insu.jpg",
    benefits: ["Économies jusqu'à 30%", "Confort été/hiver", "Éligible aux aides"],
  },
  {
    title: "Isolation des murs",
    description:
      "L'isolation thermique par l'extérieur (ITE) ou par l'intérieur (ITI) pour éliminer les ponts thermiques et améliorer votre confort.",
    image: "/wall-insulation-installation-thermal-exterior.jpg",
    benefits: ["Supprime les ponts thermiques", "Préserve la surface habitable", "Ravalement inclus (ITE)"],
  },
  {
    title: "Isolation des sols",
    description:
      "Isolez vos planchers bas pour un confort optimal et des économies d'énergie. Fini les sensations de froid aux pieds !",
    image: "/floor-insulation-installation-underfloor-heating.jpg",
    benefits: ["Plus de sol froid", "Compatible plancher chauffant", "Installation rapide"],
  },
]

export default function IsolationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-foreground">
          <div className="absolute inset-0">
            <img
              src="/modern-home-thermal-insulation-energy-efficient-ho.jpg"
              alt="Isolation thermique"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nos Services</span>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-2 mb-6">Isolation thermique</h1>
              <p className="text-background/80 text-lg mb-8">
                L'isolation est la première étape pour réduire vos factures d'énergie. ENEOS Habitat vous accompagne
                dans tous vos projets d'isolation : combles, murs et sols.
              </p>
              <Link href="/devis?projet=isolation">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Demander un devis gratuit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Types d'isolation */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos solutions d'isolation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez nos différentes solutions d'isolation adaptées à tous les types de bâtiments
              </p>
            </div>

            <div className="space-y-16">
              {isolationTypes.map((type, index) => (
                <div
                  key={type.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="aspect-video rounded-2xl overflow-hidden">
                      <img
                        src={type.image || "/placeholder.svg"}
                        alt={type.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{type.title}</h3>
                    <p className="text-muted-foreground mb-6">{type.description}</p>
                    <ul className="space-y-3 mb-8">
                      {type.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/devis?projet=isolation">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Obtenir un devis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Les avantages de l'isolation</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Économies d'énergie", desc: "Réduisez vos factures jusqu'à 30%" },
                { title: "Confort thermique", desc: "Une température agréable toute l'année" },
                { title: "Valorisation du bien", desc: "Améliorez votre DPE et la valeur de votre bien" },
                { title: "Aides financières", desc: "Bénéficiez des aides de l'État" },
              ].map((item) => (
                <div key={item.title} className="bg-card p-6 rounded-xl text-center">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
