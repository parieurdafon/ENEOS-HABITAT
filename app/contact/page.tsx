"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { companyInfo } from "@/lib/company-info"
import { Phone, Mail, MapPin, Clock, CheckCircle2, Building2 } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const updateForm = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">Contactez-nous</h1>
              <p className="text-muted-foreground text-lg">
                Une question sur nos services d'études thermiques, diagnostics immobiliers ou ingénierie ? 
                Notre équipe est à votre disposition pour répondre à toutes vos demandes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-foreground mb-6">Nos coordonnées</h2>

                <div className="space-y-6">
                  {/* Téléphone */}
                  <a
                    href="tel:+33661070891"
                    className="flex items-start gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Téléphone</h3>
                      <p className="text-muted-foreground">+33 6 61 07 08 91</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="flex items-start gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground break-all">{companyInfo.contact.email}</p>
                    </div>
                  </a>

                  {/* Siège social */}
                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Siège social</h3>
                      <p className="text-muted-foreground">
                        {companyInfo.headquarters.street}
                        <br />
                        {companyInfo.headquarters.postalCode} {companyInfo.headquarters.city}
                      </p>
                    </div>
                  </div>

                  {/* Zone d'intervention */}
                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Zone d'intervention</h3>
                      <p className="text-muted-foreground">
                        Nouvelle-Aquitaine et France métropolitaine
                      </p>
                    </div>
                  </div>

                  {/* Horaires */}
                  <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Horaires</h3>
                      <p className="text-muted-foreground">
                        Lundi - Vendredi : 09h - 18h
                        <br />
                        <span className="text-sm">Contactez-nous pour un RDV</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Informations légales */}
                <div className="mt-8 p-6 bg-muted rounded-xl">
                  <h3 className="font-semibold text-foreground mb-3 text-sm">Informations légales</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">SIREN :</strong> {companyInfo.siren}</p>
                    <p><strong className="text-foreground">SIRET :</strong> {companyInfo.siret}</p>
                    <p><strong className="text-foreground">TVA :</strong> {companyInfo.tvaNumber}</p>
                  </div>
                </div>

                {/* Partenaire */}
                <div className="mt-6 p-6 bg-card border border-border rounded-xl">
                  <p className="text-sm text-muted-foreground mb-3">Partenaire assurance</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">K</span>
                    </div>
                    <span className="text-xl font-bold text-primary">KLARITY</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="bg-card border border-border rounded-2xl p-12 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Message envoyé !</h2>
                    <p className="text-muted-foreground mb-6">
                      Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Envoyer un nouveau message
                    </Button>
                  </div>
                ) : (
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Envoyez-nous un message</h2>
                    <p className="text-muted-foreground mb-6">
                      Remplissez ce formulaire et nous vous répondrons dans les meilleurs délais
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName" className="text-foreground">
                            Prénom *
                          </Label>
                          <Input
                            id="firstName"
                            required
                            placeholder="Votre prénom"
                            value={formData.firstName}
                            onChange={(e) => updateForm("firstName", e.target.value)}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-foreground">
                            Nom *
                          </Label>
                          <Input
                            id="lastName"
                            required
                            placeholder="Votre nom"
                            value={formData.lastName}
                            onChange={(e) => updateForm("lastName", e.target.value)}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email" className="text-foreground">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="votre@email.fr"
                            value={formData.email}
                            onChange={(e) => updateForm("email", e.target.value)}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-foreground">
                            Téléphone
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="06 00 00 00 00"
                            value={formData.phone}
                            onChange={(e) => updateForm("phone", e.target.value)}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-foreground">
                          Sujet *
                        </Label>
                        <Input
                          id="subject"
                          required
                          placeholder="Objet de votre message"
                          value={formData.subject}
                          onChange={(e) => updateForm("subject", e.target.value)}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-foreground">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          required
                          placeholder="Décrivez votre projet ou votre demande..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => updateForm("message", e.target.value)}
                          className="mt-2"
                        />
                      </div>

                      <p className="text-sm text-muted-foreground">
                        En soumettant ce formulaire, vous acceptez d'être contacté par ENEOS HABITAT. 
                        Vos données sont traitées conformément à notre{" "}
                        <a href="/mentions-legales" className="text-primary hover:underline">
                          politique de confidentialité
                        </a>.
                      </p>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Envoyer le message
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section services rapide */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nos principaux services
              </h2>
              <p className="text-muted-foreground mb-8">
                ENEOS HABITAT vous accompagne dans tous vos projets d'études et de diagnostics
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {companyInfo.services.slice(0, 3).map((service) => (
                  <div key={service.id} className="bg-card p-4 rounded-xl border border-border text-left">
                    <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}