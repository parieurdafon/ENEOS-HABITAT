import Link from "next/link"
import Image from "next/image"
import { companyInfo } from "@/lib/company-info"
import { Phone, Mail, MapPin, Building2, Facebook, Linkedin, Instagram, Leaf } from "lucide-react"

const services = [
  { name: "Études Thermiques", href: "/services" },
  { name: "Diagnostics Immobiliers", href: "/services" },
  { name: "DPE", href: "/services" },
  { name: "Ingénierie Structure", href: "/services" },
  { name: "Formation", href: "/services" },
  { name: "Conseil & Expertise", href: "/services" },
]

const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Devis en ligne", href: "/devis" },
]

const legalLinks = [
  { name: "Mentions légales", href: "/mentions-legales" },
  { name: "Politique de confidentialité", href: "/mentions-legales#rgpd" },
]

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/logo.png"
                alt="ENEOS HABITAT"
                width={180}
                height={65}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 mb-4 leading-relaxed">
              Bureau d'études et d'ingénierie spécialisé en performance énergétique et diagnostics immobiliers.
            </p>
            
            {/* Société à mission badge */}
            <div className="flex items-center gap-2 text-sm bg-white/10 p-3 rounded-lg mb-4">
              <Leaf className="h-4 w-4 text-[#7cb342]" />
              <span className="text-white/90 font-semibold">Société à mission</span>
            </div>

            {/* Partenaire assurance */}
            <div className="flex items-center gap-2 text-sm bg-white/10 p-3 rounded-lg">
              <span className="text-white/70">Partenaire assurance:</span>
              <span className="font-bold text-[#7cb342]">KLARITY</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#7cb342] rounded"></span>
              Nos Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href + item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#7cb342] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#7cb342] rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#7cb342] rounded"></span>
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#7cb342] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#7cb342] rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Legal Links */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <ul className="space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/60 hover:text-[#7cb342] transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#7cb342] rounded"></span>
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+33661070891"
                  className="flex items-center gap-3 text-white/70 hover:text-[#7cb342] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#7cb342] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold">06 61 07 08 91</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-[#7cb342] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#f57c00] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="break-all text-sm">{companyInfo.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <div className="w-10 h-10 bg-[#0288d1] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white/90 mb-1">Siège social</div>
                  <div>{companyInfo.headquarters.postalCode} {companyInfo.headquarters.city}</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#7cb342]" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white/90 mb-1">Zone d'intervention</div>
                  <div>Nouvelle-Aquitaine & France</div>
                </div>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href={companyInfo.social.facebook || "#"}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#7cb342] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={companyInfo.social.linkedin || "#"}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#7cb342] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={companyInfo.social.instagram || "#"}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#7cb342] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright & Company info */}
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} {companyInfo.legalName}. Tous droits réservés.
              </p>
              <p className="text-white/40 text-xs mt-1">
                SIREN : {companyInfo.siren} | {companyInfo.legalForm}
              </p>
            </div>

            {/* Legal Links - Also in sidebar but repeated for visibility */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/mentions-legales" className="text-white/60 hover:text-[#7cb342] transition-colors">
                Mentions légales
              </Link>
              <span className="text-white/20">•</span>
              <Link href="/mentions-legales#rgpd" className="text-white/60 hover:text-[#7cb342] transition-colors">
                RGPD
              </Link>
              <span className="text-white/20">•</span>
              <span className="text-white/40 text-xs">
                Site créé avec 💚 par ENEOS HABITAT
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}