import { Shield, ExternalLink } from "lucide-react"
import Link from "next/link"

export function PartnerSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#4caf50]/10 text-[#4caf50] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Partenariat
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2c3e50]">
              Nos <span className="text-[#4caf50]">partenaires de confiance</span>
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#3498db] to-[#2980b9] rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-3xl">K</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold text-[#2c3e50]">KLARITY</span>
                    <Shield className="h-5 w-5 text-[#4caf50]" />
                  </div>
                  <p className="text-gray-500">Partenaire Assurance</p>
                </div>
              </div>

              <div className="text-center md:text-left max-w-sm">
                <p className="text-gray-600 mb-4">
                  ENEOS Habitat est assuré par KLARITY pour vous garantir une protection optimale sur l'ensemble de nos
                  prestations.
                </p>
                <Link
                  href="https://share.google/M4Fw0WMDHHtbZPkRs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4caf50] font-semibold hover:underline"
                >
                  En savoir plus
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {["Certifié COFRAC", "Assuré RC Pro", "Diagnostiqueur agréé", "Conformité garantie"].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100"
              >
                <div className="w-2 h-2 bg-[#4caf50] rounded-full" />
                <span className="text-sm font-medium text-[#2c3e50]">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
