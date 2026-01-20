import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Prêt à réduire vos factures d'énergie ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour un devis gratuit et personnalisé. Notre équipe d'experts est à votre
            disposition pour répondre à toutes vos questions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/devis">
              <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90 px-8">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 bg-transparent"
              >
                Nous contacter
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 text-primary-foreground">
            <a href="tel:+33661070891" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-5 w-5" />
              <span>+33 6 61 07 08 91</span>
            </a>
            <a
              href="mailto:Contact@eneoshabitat.fr"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-5 w-5" />
              <span>Contact@eneoshabitat.fr</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
