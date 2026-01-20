import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Sun, Battery, Zap, TrendingUp } from "lucide-react"

export default function PanneauxSolairesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-foreground">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=1600"
              alt="Panneaux solaires"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nos Services</span>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-2 mb-6">
                Panneaux solaires photovoltaïques
              </h1>
              <p className="text-background/80 text-lg mb-8">
                Produisez votre propre électricité et devenez indépendant énergétiquement. Une solution rentable et
                écologique pour réduire vos factures durablement.
              </p>
              <Link href="/devis?projet=solaire">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Demander un devis gratuit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pourquoi passer au solaire ?</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Sun,
                  title: "Énergie gratuite",
                  desc: "Le soleil est une source d'énergie inépuisable et gratuite",
                },
                { icon: TrendingUp, title: "Rentabilité", desc: "Retour sur investissement en 7-10 ans" },
                { icon: Zap, title: "Autoconsommation", desc: "Consommez directement l'électricité produite" },
                { icon: Battery, title: "Stockage", desc: "Possibilité de stocker l'énergie avec des batteries" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nos solutions solaires</h2>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">Autoconsommation</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Consommez directement l'électricité que vous produisez. Le surplus est revendu à EDF OA.
                    </p>
                    <ul className="space-y-2">
                      {["Réduction immédiate des factures", "Revente du surplus", "Solution économique"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card p-6 rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">Autoconsommation + Stockage</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Stockez l'énergie produite dans des batteries pour l'utiliser le soir ou les jours nuageux.
                    </p>
                    <ul className="space-y-2">
                      {["Indépendance énergétique", "Utilisation 24h/24", "Protection coupures"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <img src="/placeholder.svg?height=600&width=600" alt="Installation solaire" className="rounded-2xl" />
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
