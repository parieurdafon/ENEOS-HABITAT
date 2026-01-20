import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { companyInfo } from "@/lib/company-info"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "ENEOS HABITAT - Bureau d'Études Thermiques & Diagnostics Immobiliers",
    template: "%s | ENEOS HABITAT"
  },
  description:
    "ENEOS HABITAT, société à mission spécialisée en ingénierie thermique, diagnostics immobiliers (DPE, amiante, plomb, gaz, électricité) et études de structure. Expert en performance énergétique et rénovation. Nouvelle-Aquitaine.",
  keywords: [
    // Services principaux
    "bureau d'études thermiques",
    "ingénierie énergétique",
    "diagnostic immobilier",
    "études thermiques",
    "performance énergétique",
    "ingénierie structure",
    
    // Diagnostics spécifiques
    "DPE",
    "diagnostic performance énergétique",
    "diagnostic amiante",
    "diagnostic plomb",
    "diagnostic électricité",
    "diagnostic gaz",
    "diagnostic termites",
    "loi Carrez",
    
    // Expertises techniques
    "audit énergétique",
    "RE2020",
    "RT2012",
    "étude structure béton",
    "étude structure bois",
    "étude structure métal",
    "calcul thermique",
    
    // Localisation
    "Cadaujac",
    "Gironde",
    "Nouvelle-Aquitaine",
    "33140",
    
    // Type d'entreprise
    "société à mission",
    "bureau d'études",
    "AMO",
    "assistance maîtrise d'ouvrage",
    "formation professionnelle",
    
    // Nom de l'entreprise
    "ENEOS HABITAT",
    "ENEOS",
  ],
  authors: [
    { 
      name: companyInfo.legalName,
      url: companyInfo.contact.website 
    }
  ],
  creator: companyInfo.legalName,
  publisher: companyInfo.legalName,
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: companyInfo.contact.website,
    siteName: companyInfo.legalName,
    title: "ENEOS HABITAT - Bureau d'Études Thermiques & Diagnostics Immobiliers",
    description: "Société à mission spécialisée en ingénierie thermique, diagnostics immobiliers et études de structure. Expert en performance énergétique.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "ENEOS HABITAT - Bureau d'études",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "ENEOS HABITAT - Bureau d'Études Thermiques & Diagnostics",
    description: "Société à mission spécialisée en ingénierie thermique et diagnostics immobiliers",
    images: ["/images/logo.png"],
  },
  
  // Informations de contact
  alternates: {
    canonical: companyInfo.contact.website,
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Vérification et autres métadonnées
  verification: {
    // À compléter par le client si nécessaire
    // google: "code_verification_google",
    // bing: "code_verification_bing",
  },
  
  category: "Business Services",
  
  // Informations de l'application
  applicationName: companyInfo.legalName,
  
  // Manifeste (pour PWA si nécessaire)
  manifest: "/manifest.json",
  
  // Autres métadonnées
  other: {
    "company-name": companyInfo.legalName,
    "company-siren": companyInfo.siren,
    "company-location": `${companyInfo.headquarters.city}, ${companyInfo.headquarters.country}`,
    "societe-a-mission": "true",
  },
}

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Favicon et icônes */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* Preconnect pour performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org JSON-LD pour le SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": companyInfo.legalName,
              "image": `${companyInfo.contact.website}/images/logo.png`,
              "description": companyInfo.activities.main,
              "@id": companyInfo.contact.website,
              "url": companyInfo.contact.website,
              "telephone": "+33661070891",
              "email": companyInfo.contact.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": companyInfo.headquarters.street,
                "addressLocality": companyInfo.headquarters.city,
                "postalCode": companyInfo.headquarters.postalCode,
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.7516,
                "longitude": -0.5308
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 44.7516,
                  "longitude": -0.5308
                },
                "geoRadius": "200000"
              },
              "priceRange": "$$",
              "sameAs": [
                companyInfo.social.linkedin,
                companyInfo.social.facebook,
                companyInfo.social.instagram
              ].filter(Boolean),
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "founder": {
                "@type": "Person",
                "name": companyInfo.management.president.name
              },
              "foundingDate": "2025-08",
              "slogan": "Excellence technique et engagement environnemental"
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}