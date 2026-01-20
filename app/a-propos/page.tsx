import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { companyInfo } from "@/lib/company-info"
import { Building2, Lightbulb, GraduationCap, Users, Award, Target, Heart, Leaf } from "lucide-react"

export const metadata = {
  title: "À Propos | ENEOS HABITAT - Bureau d'Études & Diagnostics Immobiliers",
  description: "Découvrez ENEOS HABITAT, société à mission spécialisée en études thermiques, diagnostics immobiliers et ingénierie structure. Excellence technique et engagement environnemental.",
}

export default function AProposPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Leaf className="h-4 w-4" />
                <span className="text-sm font-semibold">Société à mission</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                À Propos d'ENEOS HABITAT
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Bureau d'études et d'ingénierie spécialisé en performance énergétique et diagnostics immobiliers
              </p>
            </div>
          </div>
        </section>

        {/* Présentation entreprise */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Qui sommes-nous ?
                  </h2>
                  <div className="space-y-4 text-muted-foreground text-lg">
                    <p>
                      <strong className="text-foreground">ENEOS HABITAT</strong> est une société à mission créée en août 2025, 
                      spécialisée dans l'ingénierie thermique, énergétique et structurelle du bâtiment.
                    </p>
                    <p>
                      Notre expertise couvre l'ensemble des besoins en études techniques et diagnostics immobiliers, 
                      de la conception à la réalisation de vos projets de construction et de rénovation.
                    </p>
                    <p>
                      En tant que <strong className="text-foreground">société à mission</strong>, nous plaçons l'impact 
                      environnemental et sociétal au cœur de notre activité, en accompagnant la transition énergétique 
                      du secteur du bâtiment.
                    </p>
                  </div>

                  {/* Informations clés */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-muted p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">Création</p>
                      <p className="text-lg font-bold text-foreground">Août 2025</p>
                    </div>
                    <div className="bg-muted p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">Siège social</p>
                      <p className="text-lg font-bold text-foreground">Cadaujac (33)</p>
                    </div>
                    <div className="bg-muted p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">Forme juridique</p>
                      <p className="text-lg font-bold text-foreground">SAS</p>
                    </div>
                    <div className="bg-muted p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">Statut</p>
                      <p className="text-lg font-bold text-foreground">Société à mission</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Building2 className="h-32 w-32 text-primary mx-auto mb-4" />
                      <p className="text-2xl font-bold text-foreground">Bureau d'Études</p>
                      <p className="text-muted-foreground">& Diagnostics Immobiliers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre mission (Société à mission) */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <Target className="h-4 w-4" />
                  <span className="text-sm font-semibold">Société à mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {companyInfo.mission.title}
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  {companyInfo.mission.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {companyInfo.mission.values.map((value, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {index === 0 && <Award className="h-6 w-6 text-primary" />}
                        {index === 1 && <Leaf className="h-6 w-6 text-primary" />}
                        {index === 2 && <Lightbulb className="h-6 w-6 text-primary" />}
                        {index === 3 && <Heart className="h-6 w-6 text-primary" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nos domaines d'expertise */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Nos domaines d'expertise
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  {companyInfo.activities.main}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {companyInfo.services.map((service, index) => (
                  <div 
                    key={service.id} 
                    className="group bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      {index === 0 && <Lightbulb className="h-7 w-7 text-primary" />}
                      {index === 1 && <Building2 className="h-7 w-7 text-primary" />}
                      {index === 2 && <Building2 className="h-7 w-7 text-primary" />}
                      {index === 3 && <GraduationCap className="h-7 w-7 text-primary" />}
                      {index === 4 && <Users className="h-7 w-7 text-primary" />}
                    </div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{service.name}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                ))}
              </div>

              {/* Activités complémentaires */}
              <div className="mt-12 bg-muted p-8 rounded-2xl">
                <h3 className="font-semibold text-foreground text-xl mb-4">Nos activités complémentaires</h3>
                <ul className="space-y-3">
                  {companyInfo.activities.secondary.map((activity, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-xs font-bold">✓</span>
                      </div>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Direction */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Direction</h2>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {companyInfo.management.president.name}
                </h3>
                <p className="text-primary font-semibold mb-4">{companyInfo.management.president.position}</p>
                <p className="text-muted-foreground">
                  Sous la direction de Guillaume ARMAGNACQ, ENEOS HABITAT s'engage à fournir des prestations 
                  d'ingénierie et de conseil de haute qualité, alliant expertise technique et engagement environnemental.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Informations légales */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-muted/50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Informations légales</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Dénomination</p>
                  <p className="font-semibold text-foreground">{companyInfo.legalName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">SIREN</p>
                  <p className="font-semibold text-foreground">{companyInfo.siren}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Code APE</p>
                  <p className="font-semibold text-foreground">{companyInfo.apeCode}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Forme juridique</p>
                  <p className="font-semibold text-foreground">{companyInfo.legalForm}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Capital social</p>
                  <p className="font-semibold text-foreground">{companyInfo.capital}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">RCS</p>
                  <p className="font-semibold text-foreground">{companyInfo.legal.rcs}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partenaire assurance */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <p className="text-foreground font-medium">Notre partenaire assurance :</p>
              <div className="flex items-center gap-4 bg-card px-8 py-4 rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">K</span>
                </div>
                <span className="text-2xl font-bold text-primary">KLARITY</span>
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