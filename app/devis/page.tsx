"use client"

import type React from "react"
import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { companyInfo } from "@/lib/company-info"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle2,
  Home,
  Building,
  Store,
  Lightbulb,
  Building2,
  GraduationCap,
  Users,
  FileText,
  User,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

const projectTypes = [
  { value: "etude-thermique", label: "Étude thermique", icon: Lightbulb },
  { value: "diagnostic", label: "Diagnostic immobilier", icon: Building2 },
  { value: "ingenierie", label: "Ingénierie structure", icon: Building },
  { value: "formation", label: "Formation", icon: GraduationCap },
  { value: "conseil", label: "Conseil & Expertise", icon: Users },
]

const propertyTypes = [
  { value: "maison", label: "Maison individuelle", icon: Home },
  { value: "appartement", label: "Appartement", icon: Building },
  { value: "tertiaire", label: "Bâtiment tertiaire", icon: Building2 },
  { value: "autre", label: "Autre", icon: Store },
]

function DevisFormContent() {
  const searchParams = useSearchParams()
  const initialProjet = searchParams.get("projet") || ""
  const initialBien = searchParams.get("bien") || ""

  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    projectType: initialProjet,
    propertyType: initialBien,
    surface: "",
    year: "",
    address: "",
    city: "",
    postalCode: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const updateForm = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-12">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-gradient-to-br from-[#7cb342] to-[#689f38] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <CheckCircle2 className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[#1e3a5f]">Demande envoyée avec succès !</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Merci pour votre demande de devis. Notre équipe vous contactera dans les plus brefs délais (généralement sous 24 heures).
          </p>
          <Button
            onClick={() => {
              setSubmitted(false)
              setStep(1)
              setFormData({
                projectType: "",
                propertyType: "",
                surface: "",
                year: "",
                address: "",
                city: "",
                postalCode: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
              })
            }}
            className="bg-gradient-to-r from-[#7cb342] to-[#689f38] text-white hover:from-[#689f38] hover:to-[#558b2f] rounded-full px-8 py-6 font-bold shadow-xl"
          >
            Nouvelle demande
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-4">
          {["Votre projet", "Votre bien", "Vos coordonnées"].map((label, index) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-all ${
                  step > index + 1
                    ? "bg-[#7cb342] text-white"
                    : step === index + 1
                      ? "bg-gradient-to-br from-[#7cb342] to-[#689f38] text-white shadow-lg scale-110"
                      : "bg-gray-200 text-gray-400"
                }`}
              >
                {step > index + 1 ? <CheckCircle2 className="h-6 w-6" /> : index + 1}
              </div>
              <span
                className={`text-sm font-semibold ${step >= index + 1 ? "text-[#7cb342]" : "text-gray-400"}`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#7cb342] to-[#689f38] rounded-full transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1 : Type de projet */}
        {step === 1 && (
          <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-[#1e3a5f]">Quel est votre projet ?</h2>

            <div className="mb-8">
              <p className="font-semibold mb-6 text-[#1e3a5f] text-lg">Type de projet :</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectTypes.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <label
                      key={option.value}
                      className={`relative flex flex-col items-center gap-4 p-6 rounded-2xl cursor-pointer transition-all border-2 group hover:scale-105 ${
                        formData.projectType === option.value
                          ? "border-[#7cb342] bg-[#7cb342]/5 shadow-xl"
                          : "border-gray-200 hover:border-[#7cb342]/50 bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={option.value}
                        checked={formData.projectType === option.value}
                        onChange={(e) => updateForm("projectType", e.target.value)}
                        className="sr-only"
                        required
                      />
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
                        formData.projectType === option.value
                          ? "bg-gradient-to-br from-[#7cb342] to-[#689f38] shadow-lg"
                          : "bg-gray-100 group-hover:bg-gray-200"
                      }`}>
                        <IconComponent className={`h-8 w-8 ${formData.projectType === option.value ? "text-white" : "text-gray-600"}`} />
                      </div>
                      <span className={`font-semibold text-center text-sm ${formData.projectType === option.value ? "text-[#7cb342]" : "text-[#1e3a5f]"}`}>
                        {option.label}
                      </span>
                      {formData.projectType === option.value && (
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#7cb342] rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                      )}
                    </label>
                  )
                })}
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                type="button"
                onClick={() => setStep(2)}
                disabled={!formData.projectType}
                className="bg-gradient-to-r from-[#7cb342] to-[#689f38] text-white hover:from-[#689f38] hover:to-[#558b2f] rounded-full px-10 py-6 font-bold shadow-xl disabled:opacity-50"
              >
                Continuer
              </Button>
            </div>
          </div>
        )}

        {/* Step 2 : Informations bien */}
        {step === 2 && (
          <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-[#1e3a5f]">Informations sur votre bien</h2>

            <div className="mb-8">
              <p className="font-semibold mb-6 text-[#1e3a5f] text-lg">Type de bien :</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {propertyTypes.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <label
                      key={option.value}
                      className={`relative flex flex-col items-center gap-4 p-6 rounded-2xl cursor-pointer transition-all border-2 group hover:scale-105 ${
                        formData.propertyType === option.value
                          ? "border-[#7cb342] bg-[#7cb342]/5 shadow-xl"
                          : "border-gray-200 hover:border-[#7cb342]/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="propertyType"
                        value={option.value}
                        checked={formData.propertyType === option.value}
                        onChange={(e) => updateForm("propertyType", e.target.value)}
                        className="sr-only"
                        required
                      />
                      <IconComponent
                        className={`h-10 w-10 ${formData.propertyType === option.value ? "text-[#7cb342]" : "text-gray-400"}`}
                      />
                      <span
                        className={`font-semibold text-center text-sm ${formData.propertyType === option.value ? "text-[#7cb342]" : "text-[#1e3a5f]"}`}
                      >
                        {option.label}
                      </span>
                      {formData.propertyType === option.value && (
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#7cb342] rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        </div>
                      )}
                    </label>
                  )
                })}
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="surface" className="text-[#1e3a5f] font-semibold text-base mb-2 block">
                    Surface (m²)
                  </Label>
                  <Input
                    id="surface"
                    type="number"
                    placeholder="Ex: 120"
                    value={formData.surface}
                    onChange={(e) => updateForm("surface", e.target.value)}
                    className="rounded-xl py-6 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="year" className="text-[#1e3a5f] font-semibold text-base mb-2 block">
                    Année de construction
                  </Label>
                  <Input
                    id="year"
                    type="number"
                    placeholder="Ex: 2020"
                    value={formData.year}
                    onChange={(e) => updateForm("year", e.target.value)}
                    className="rounded-xl py-6 text-base"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address" className="text-[#1e3a5f] font-semibold text-base mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#7cb342]" />
                  Adresse du bien
                </Label>
                <Input
                  id="address"
                  placeholder="Numéro et rue"
                  value={formData.address}
                  onChange={(e) => updateForm("address", e.target.value)}
                  className="rounded-xl py-6 text-base"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="postalCode" className="text-[#1e3a5f] font-semibold text-base mb-2 block">
                    Code postal
                  </Label>
                  <Input
                    id="postalCode"
                    placeholder="33140"
                    value={formData.postalCode}
                    onChange={(e) => updateForm("postalCode", e.target.value)}
                    className="rounded-xl py-6 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-[#1e3a5f] font-semibold text-base mb-2 block">
                    Ville
                  </Label>
                  <Input
                    id="city"
                    placeholder="Cadaujac"
                    value={formData.city}
                    onChange={(e) => updateForm("city", e.target.value)}
                    className="rounded-xl py-6 text-base"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="rounded-full px-8 py-6 border-2 border-[#1e3a5f] text-[#1e3a5f] font-bold"
              >
                Retour
              </Button>
              <Button
                type="button"
                onClick={() => setStep(3)}
                className="bg-gradient-to-r from-[#7cb342] to-[#689f38] text-white hover:from-[#689f38] hover:to-[#558b2f] rounded-full px-10 py-6 font-bold shadow-xl"
              >
                Continuer
              </Button>
            </div>
          </div>
        )}

        {/* Step 3 : Coordonnées */}
        {step === 3 && (
          <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-[#1e3a5f]">Vos coordonnées</h2>

            <div className="space-y-6 mb-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-[#1e3a5f] font-semibold text-base mb-2 flex items-center gap-2">
                    <User className="h-5 w-5 text-[#7cb342]" />
                    Prénom *
                  </Label>
                  <Input
                    id="firstName"
                    required
                    placeholder="Votre prénom"
                    value={formData.firstName}
                    onChange={(e) => updateForm("firstName", e.target.value)}
                    className="rounded-xl py-6 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-[#1e3a5f] font-semibold text-base mb-2 block">
                    Nom *
                  </Label>
                  <Input
                    id="lastName"
                    required
                    placeholder="Votre nom"
                    value={formData.lastName}
                    onChange={(e) => updateForm("lastName", e.target.value)}
                    className="rounded-xl py-6 text-base"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-[#1e3a5f] font-semibold text-base mb-2 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#7cb342]" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="votre@email.fr"
                    value={formData.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                    className="rounded-xl py-6 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#1e3a5f] font-semibold text-base mb-2 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#7cb342]" />
                    Téléphone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="06 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    className="rounded-xl py-6 text-base"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-[#1e3a5f] font-semibold text-base mb-2 block">
                  Message (optionnel)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Précisez vos besoins ou posez vos questions..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateForm("message", e.target.value)}
                  className="rounded-xl text-base"
                />
              </div>

              <div className="bg-[#7cb342]/5 border border-[#7cb342]/20 rounded-2xl p-6">
                <p className="text-sm text-gray-700 leading-relaxed">
                  ✓ En soumettant ce formulaire, vous acceptez d'être contacté par <strong>ENEOS HABITAT</strong> concernant votre demande de devis.
                  <br />
                  ✓ Vos données sont traitées conformément au <a href="/mentions-legales" className="text-[#7cb342] underline">RGPD</a>.
                  <br />
                  ✓ Réponse sous 24h garantie.
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(2)}
                className="rounded-full px-8 py-6 border-2 border-[#1e3a5f] text-[#1e3a5f] font-bold"
              >
                Retour
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#f57c00] to-[#e65100] text-white hover:from-[#e65100] hover:to-[#d84315] rounded-full px-10 py-7 font-bold shadow-2xl text-lg"
              >
                Envoyer ma demande
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default function DevisPage() {
  return (
    <>
      <Header />
      <main className="py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#f57c00] text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              Devis en ligne 24/24h
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1e3a5f]">
              Demande de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7cb342] to-[#689f38]">devis gratuit</span>
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Remplissez le formulaire ci-dessous pour recevoir votre devis personnalisé. Notre équipe vous répondra sous 24 heures.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-12 text-gray-500">Chargement...</div>}>
            <DevisFormContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  )
}