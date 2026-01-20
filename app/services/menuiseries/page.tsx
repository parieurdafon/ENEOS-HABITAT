import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

const menuiserieTypes = [
  {
    title: "Fenêtres",
    description: "Fenêtres PVC, aluminium ou bois avec double ou triple vitrage pour une isolation optimale.",
    image: "/placeholder.svg?height=400&width=600",
    benefits: ["Double/triple vitrage", "Isolation thermique et phonique", "Large choix de matériaux"],
  },
  {
    title: "Portes d'entrée",
    description: "Portes d'entrée isolantes et sécurisées pour protéger votre habitat et réduire les déperditions.",
    image: "/placeholder.svg?height=400&width=600",
    benefits: ["Haute isolation", "Sécurité renforcée", "Design personnalisable"],
  },
  {
    title: "Volets",
    description: "Volets roulants ou battants, motorisés ou manuels, pour un confort et une isolation supplémentaires.",
    image: "/placeholder.svg?height=400&width=600",
    benefits: ["Isolation renforcée", "Motorisation possible", "Économies d'énergie"],
  },
]

export default function MenuiseriesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-foreground">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=1600"
              alt="Menuiseries"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nos Services</span>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-2 mb-6">Menuiseries</h1>
              <p className="text-background/80 text-lg mb-8">
                Remplacez vos anciennes menuiseries par des équipements performants. Fenêtres, portes et volets de
                qualité pour une meilleure isolation.
              </p>
              <Link href="/devis?projet=menuiseries">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Demander un devis gratuit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Types de menuiseries */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos solutions de menuiseries</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {menuiserieTypes.map((type) => (
                <div
                  key={type.title}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video">
                    <img
                      src={type.image || "/placeholder.svg"}
                      alt={type.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Matériaux */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos matériaux</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { title: "PVC", desc: "Excellent rapport qualité/prix, isolation optimale et entretien facile" },
                { title: "Aluminium", desc: "Design moderne et fin, robuste et durable, large palette de couleurs" },
                { title: "Bois", desc: "Charme naturel, excellente isolation, matériau renouvelable" },
              ].map((material) => (
                <div key={material.title} className="bg-card p-8 rounded-xl text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{material.title}</h3>
                  <p className="text-muted-foreground">{material.desc}</p>
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
