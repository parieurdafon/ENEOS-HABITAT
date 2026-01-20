"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, ChevronDown, Building2, FileText, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/company-info"

const services = [
  { name: "Études Thermiques & Énergétiques", href: "/services", description: "RT2020, RE2020, audits énergétiques" },
  { name: "Diagnostics Immobiliers", href: "/services", description: "DPE, amiante, plomb, gaz, électricité..." },
  { name: "Ingénierie de Structure", href: "/services", description: "Béton, bois, métal" },
  { name: "Formation Professionnelle", href: "/services", description: "Thermique, énergie, diagnostic" },
  { name: "Conseil & Expertise", href: "/services", description: "Bureau d'études et AMO" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-3">
            <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
              <a href="tel:+33661070891" className="flex items-center gap-2 hover:text-[#7cb342] transition-colors group">
                <div className="w-8 h-8 bg-[#7cb342] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold">06 61 07 08 91</span>
              </a>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-center gap-2 hover:text-[#7cb342] transition-colors group"
              >
                <div className="w-8 h-8 bg-[#f57c00] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="hidden sm:inline">{companyInfo.contact.email}</span>
                <span className="sm:hidden">Email</span>
              </a>
              <div className="hidden lg:flex items-center gap-2">
                <div className="w-8 h-8 bg-[#0288d1] rounded-full flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
                <span>{companyInfo.headquarters.postalCode} {companyInfo.headquarters.city}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Leaf className="h-3.5 w-3.5 text-[#7cb342]" />
                <span className="text-xs font-semibold">Société à mission</span>
              </div>
              <Link
                href="/devis"
                className="flex items-center gap-2 bg-[#7cb342] hover:bg-[#689f38] px-4 py-1.5 rounded-full transition-colors font-medium text-sm"
              >
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Devis gratuit</span>
                <span className="sm:hidden">Devis</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white transition-all duration-300 ${scrolled ? "shadow-xl py-2" : "shadow-md py-3"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="ENEOS HABITAT - Bureau d'études thermiques et diagnostics immobiliers"
                width={220}
                height={80}
                className="h-20 w-auto transition-transform group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className="text-[#1e3a5f] hover:text-[#7cb342] transition-colors font-semibold text-[15px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#7cb342] after:transition-all hover:after:w-full"
              >
                Accueil
              </Link>

              {/* Dropdown Services */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-[#1e3a5f] hover:text-[#7cb342] transition-colors font-semibold text-[15px]">
                  Nos Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-slide-in z-50">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex flex-col px-5 py-3 text-[#1e3a5f] hover:bg-[#7cb342]/10 hover:text-[#7cb342] transition-colors border-l-3 border-transparent hover:border-[#7cb342] group"
                      >
                        <span className="font-semibold mb-0.5">{service.name}</span>
                        <span className="text-xs text-gray-500 group-hover:text-[#7cb342]">{service.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/a-propos"
                className="text-[#1e3a5f] hover:text-[#7cb342] transition-colors font-semibold text-[15px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#7cb342] after:transition-all hover:after:w-full"
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="text-[#1e3a5f] hover:text-[#7cb342] transition-colors font-semibold text-[15px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#7cb342] after:transition-all hover:after:w-full"
              >
                Contact
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact">
                <Button className="bg-[#7cb342] text-white hover:bg-[#689f38] shadow-lg hover:shadow-xl transition-all px-6 py-5 text-sm font-bold rounded-full">
                  Contactez-nous
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-7 w-7 text-[#1e3a5f]" /> : <Menu className="h-7 w-7 text-[#1e3a5f]" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-slide-in">
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-[#1e3a5f] hover:text-[#7cb342] transition-colors font-semibold py-2.5 px-3 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Accueil
                </Link>
                <div className="py-2">
                  <span className="text-[#1e3a5f] font-bold px-3 block mb-2">Nos Services</span>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block pl-6 text-gray-600 hover:text-[#7cb342] transition-colors py-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400">{service.description}</div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/a-propos"
                  className="text-[#1e3a5f] hover:text-[#7cb342] transition-colors font-semibold py-2.5 px-3 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  À propos
                </Link>
                <Link
                  href="/contact"
                  className="text-[#1e3a5f] hover:text-[#7cb342] transition-colors font-semibold py-2.5 px-3 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex flex-col gap-2 mt-4 px-3">
                  <Link href="/devis" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-[#7cb342] text-white hover:bg-[#689f38] py-5 rounded-full font-semibold">
                      <FileText className="mr-2 h-4 w-4" /> Demander un devis
                    </Button>
                  </Link>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-[#1e3a5f] text-white hover:bg-[#2c5282] py-5 rounded-full font-semibold">
                      Contactez-nous
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}