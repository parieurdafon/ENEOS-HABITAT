"use client"

import type React from "react"
import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle2,
  Home,
  Building,
  Store,
  ShoppingBag,
  Key,
  FileText,
  User,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

const transactionTypes = [
  { value: "vente", label: "Une vente", icon: ShoppingBag },
  { value: "location", label: "Une location", icon: Key },
  { value: "autre", label: "Autre", icon: FileText },
]

const propertyTypes = [
  { value: "maison", label: "Une maison", icon: Home },
  { value: "appartement", label: "Un appartement", icon: Building },
  { value: "autre", label: "Un autre bien", icon: Store },
]

const diagnosticsList = [
  { value: "dpe", label: "DPE - Performance Énergétique" },
  { value: "amiante", label: "Diagnostic Amiante" },
  { value: "plomb", label: "Diagnostic Plomb (CREP)" },
  { value: "termites", label: "Diagnostic Termites" },
  { value: "electricite", label: "Diagnostic Électricité" },
  { value: "gaz", label: "Diagnostic Gaz" },
  { value: "erp", label: "ERP - État des Risques" },
  { value: "carrez", label: "Loi Carrez" },
  { value: "boutin", label: "Loi Boutin" },
  { value: "pack-vente", label: "Pack Vente Complet" },
  { value: "pack-location", label: "Pack Location Complet" },
]

function DevisFormContent() {
  const searchParams = useSearchParams()
  const initialTransaction = searchParams.get("transaction") || ""
  const initialProperty = searchParams.get("bien") || ""

  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    transactionType: initialTransaction,
    propertyType: initialProperty,
    diagnostics: [] as string[],
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

  const updateForm = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleDiagnostic = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      diagnostics: prev.diagnostics.includes(value)
        ? prev.diagnostics.filter((d) => d !== value)
        : [...prev.diagnostics, value],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-[#7cb342]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-[#7cb342]" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-[#1e3a5f]">Demande envoyée avec succès !</h2>
          <p className="text-gray-500 mb-6">
            Merci pour votre demande de devis. Notre équipe vous contactera dans les plus brefs délais (généralement
            sous 2 heures).
          </p>
          <Button
            onClick={() => {
              setSubmitted(false)
              setStep(1)
              setFormData({
                transactionType: "",
                propertyType: "",
                diagnostics: [],
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
            className="bg-[#7cb342] text-white hover:bg-[#689f38] rounded-full px-8"
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
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {["Votre projet", "Votre bien", "Vos coordonnées"].map((label, index) => (
            <span
              key={label}
              className={`text-sm font-semibold ${step > index ? "text-[#7cb342]" : step === index + 1 ? "text-[#1e3a5f]" : "text-gray-400"}`}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#7cb342] rounded-full transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1 */}
        {step === 1 && (
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-[#1e3a5f]">Quel est votre projet ?</h2>

            <div className="mb-8">
              <p className="font-semibold mb-4 text-[#1e3a5f]">Vous réalisez :</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {transactionTypes.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <label
                      key={option.value}
                      className={`flex flex-col items-center gap-3 p-6 rounded-xl cursor-pointer transition-all border-2 ${
                        formData.transactionType === option.value
                          ? "border-[#7cb342] bg-[#7cb342]/10"
                          : "border-gray-200 hover:border-[#7cb342]/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="transactionType"
                        value={option.value}
                        checked={formData.transactionType === option.value}
                        onChange={(e) => updateForm("transactionType", e.target.value)}
                        className="sr-only"
                      />
                      <IconComponent
                        className={`h-8 w-8 ${formData.transactionType === option.value ? "text-[#7cb342]" : "text-gray-400"}`}
                      />
                      <span
                        className={`font-semibold ${formData.transactionType === option.value ? "text-[#7cb342]" : "text-[#1e3a5f]"}`}
                      >
                        {option.label}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>

            <div className="mb-8">
              <p className="font-semibold mb-4 text-[#1e3a5f]">Votre type de bien :</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {propertyTypes.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <label
                      key={option.value}
                      className={`flex flex-col items-center gap-3 p-6 rounded-xl cursor-pointer transition-all border-2 ${
                        formData.propertyType === option.value
                          ? "border-[#7cb342] bg-[#7cb342]/10"
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
                      />
                      <IconComponent
                        className={`h-8 w-8 ${formData.propertyType === option.value ? "text-[#7cb342]" : "text-gray-400"}`}
                      />
                      <span
                        className={`font-semibold ${formData.propertyType === option.value ? "text-[#7cb342]" : "text-[#1e3a5f]"}`}
                      >
                        {option.label}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>

            <div className="mb-8">
              <p className="font-semibold mb-4 text-[#1e3a5f]">Diagnostics souhaités :</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {diagnosticsList.map((diag) => (
                  <label
                    key={diag.value}
                    className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all border-2 ${
                      formData.diagnostics.includes(diag.value)
                        ? "border-[#7cb342] bg-[#7cb342]/10"
                        : "border-gray-200 hover:border-[#7cb342]/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.diagnostics.includes(diag.value)}
                      onChange={() => toggleDiagnostic(diag.value)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        formData.diagnostics.includes(diag.value) ? "border-[#7cb342] bg-[#7cb342]" : "border-gray-300"
                      }`}
                    >
                      {formData.diagnostics.includes(diag.value) && <CheckCircle2 className="h-3 w-3 text-white" />}
                    </div>
                    <span
                      className={`text-sm font-medium ${formData.diagnostics.includes(diag.value) ? "text-[#7cb342]" : "text-[#1e3a5f]"}`}
                    >
                      {diag.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                type="button"
                onClick={() => setStep(2)}
                disabled={!formData.transactionType || !formData.propertyType}
                className="bg-[#7cb342] text-white hover:bg-[#689f38] rounded-full px-8 py-5"
              >
                Continuer
              </Button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-[#1e3a5f]">Informations sur votre bien</h2>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="surface" className="text-[#1e3a5f] font-semibold">
                    Surface approximative (m²)
                  </Label>
                  <Input
                    id="surface"
                    type="number"
                    placeholder="Ex: 85"
                    value={formData.surface}
                    onChange={(e) => updateForm("surface", e.target.value)}
                    className="mt-2 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="year" className="text-[#1e3a5f] font-semibold">
                    Année de construction
                  </Label>
                  <Input
                    id="year"
                    type="number"
                    placeholder="Ex: 1985"
                    value={formData.year}
                    onChange={(e) => updateForm("year", e.target.value)}
                    className="mt-2 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address" className="text-[#1e3a5f] font-semibold flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#7cb342]" />
                  Adresse du bien
                </Label>
                <Input
                  id="address"
                  placeholder="Numéro et rue"
                  value={formData.address}
                  onChange={(e) => updateForm("address", e.target.value)}
                  className="mt-2 rounded-xl"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="postalCode" className="text-[#1e3a5f] font-semibold">
                    Code postal
                  </Label>
                  <Input
                    id="postalCode"
                    placeholder="75000"
                    value={formData.postalCode}
                    onChange={(e) => updateForm("postalCode", e.target.value)}
                    className="mt-2 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-[#1e3a5f] font-semibold">
                    Ville
                  </Label>
                  <Input
                    id="city"
                    placeholder="Paris"
                    value={formData.city}
                    onChange={(e) => updateForm("city", e.target.value)}
                    className="mt-2 rounded-xl"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="rounded-full px-6 border-[#1e3a5f] text-[#1e3a5f]"
              >
                Retour
              </Button>
              <Button
                type="button"
                onClick={() => setStep(3)}
                className="bg-[#7cb342] text-white hover:bg-[#689f38] rounded-full px-8 py-5"
              >
                Continuer
              </Button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-[#1e3a5f]">Vos coordonnées</h2>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-[#1e3a5f] font-semibold flex items-center gap-2">
                    <User className="h-4 w-4 text-[#7cb342]" />
                    Prénom *
                  </Label>
                  <Input
                    id="firstName"
                    required
                    placeholder="Votre prénom"
                    value={formData.firstName}
                    onChange={(e) => updateForm("firstName", e.target.value)}
                    className="mt-2 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-[#1e3a5f] font-semibold">
                    Nom *
                  </Label>
                  <Input
                    id="lastName"
                    required
                    placeholder="Votre nom"
                    value={formData.lastName}
                    onChange={(e) => updateForm("lastName", e.target.value)}
                    className="mt-2 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-[#1e3a5f] font-semibold flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#7cb342]" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="votre@email.fr"
                    value={formData.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                    className="mt-2 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#1e3a5f] font-semibold flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#7cb342]" />
                    Téléphone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="06 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    className="mt-2 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-[#1e3a5f] font-semibold">
                  Message (optionnel)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Précisez vos besoins ou posez vos questions..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => updateForm("message", e.target.value)}
                  className="mt-2 rounded-xl"
                />
              </div>

              <p className="text-sm text-gray-500">
                En soumettant ce formulaire, vous acceptez d'être contacté par ENEOS Habitat concernant votre demande de
                devis.
              </p>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(2)}
                className="rounded-full px-6 border-[#1e3a5f] text-[#1e3a5f]"
              >
                Retour
              </Button>
              <Button
                type="submit"
                className="bg-[#f57c00] text-white hover:bg-[#e65100] rounded-full px-8 py-5 font-bold"
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
      <main className="py-12 bg-[#f8fafc] min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#f57c00] text-white px-5 py-2 rounded-full text-sm font-bold mb-4">
              Devis en ligne 24/24h
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e3a5f]">
              Demande de <span className="text-[#7cb342]">devis gratuit</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous pour recevoir votre devis personnalisé. Notre équipe vous répondra
              sous 2 heures.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-12">Chargement...</div>}>
            <DevisFormContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  )
}
