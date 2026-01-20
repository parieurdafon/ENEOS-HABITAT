/**
 * ENEOS HABITAT - Informations officielles de l'entreprise
 * Source: Extrait INPI du 20 janvier 2026
 * SIREN: 989 825 484
 */

export const companyInfo = {
  // Identité juridique
  legalName: "ENEOS HABITAT",
  tradeName: "ENEOS HABITAT",
  legalForm: "SAS (Société par Actions Simplifiée)",
  
  // Numéros d'identification
  siren: "989 825 484",
  siret: "989 825 484 00011",
  tvaNumber: "FR41 989 825 484",
  
  // Capital et dates
  capital: "2 000 EUR",
  creationDate: "30/07/2025",
  rneRegistrationDate: "05/08/2025",
  activityStartDate: "06/08/2025",
  fiscalYearEnd: "31/12",
  
  // Code APE et activité
  apeCode: "7112B",
  apeLabel: "Ingénierie, études techniques",
  activityNature: "Libérale non réglementée, Commerciale",
  
  // Statut spécial
  isSocieteMission: true, // Société à mission
  
  // Siège social
  headquarters: {
    street: "3466 Avenue de Toulouse",
    postalCode: "33140",
    city: "Cadaujac",
    country: "France",
    fullAddress: "3466 Avenue de Toulouse, 33140 Cadaujac, France"
  },
  
  // Domiciliation
  domiciliation: {
    provider: "DomiciliPro",
    providerSiren: "931 750 483"
  },
  
  // Direction
  management: {
    president: {
      name: "Guillaume ARMAGNACQ",
      position: "Président",
      birthDate: "08/1992"
    }
  },
  
  // Contact
  contact: {
    phone: "+33 X XX XX XX XX", // À compléter par le client
    email: "contact@eneoshabitat.fr",
    website: "https://eneoshabitat.fr"
  },
  
  // Domaines d'activité détaillés
  activities: {
    main: "La réalisation d'études techniques, d'ingénierie et de conseil dans les domaines de la thermique, de l'énergie, de la structure du bâtiment (béton, bois, métal) et de la mécanique industrielle",
    
    secondary: [
      "La réalisation de diagnostics immobiliers réglementaires (DPE, amiante, plomb, électricité, gaz, termites, loi Carrez, etc.)",
      "Tous autres contrôles techniques liés aux biens immobiliers",
      "L'activité de formation professionnelle, initiale ou continue, dans les domaines de la thermique du bâtiment, de l'énergie, de l'ingénierie, de la construction, de l'industrie ou du diagnostic immobilier"
    ],
    
    general: "Toutes prestations de bureau d'études, de conseil, d'ingénierie, d'expertise, de formation, ou d'assistance à maîtrise d'ouvrage dans les domaines précités"
  },
  
  // Services proposés (pour affichage sur le site)
  services: [
    {
      id: "etudes-thermiques",
      name: "Études Thermiques & Énergétiques",
      description: "Études thermiques réglementaires et conseils en performance énergétique",
      icon: "thermometer"
    },
    {
      id: "diagnostics-immobiliers",
      name: "Diagnostics Immobiliers",
      description: "DPE, amiante, plomb, électricité, gaz, termites, loi Carrez et tous diagnostics réglementaires",
      icon: "clipboard-check"
    },
    {
      id: "ingenierie-structure",
      name: "Ingénierie de Structure",
      description: "Études de structure béton, bois et métal pour vos projets de construction et rénovation",
      icon: "building"
    },
    {
      id: "formation",
      name: "Formation Professionnelle",
      description: "Formations dans les domaines de la thermique, l'énergie et le diagnostic immobilier",
      icon: "graduation-cap"
    },
    {
      id: "conseil",
      name: "Conseil & Expertise",
      description: "Bureau d'études et assistance à maîtrise d'ouvrage pour vos projets",
      icon: "users"
    }
  ],
  
  // Valeurs et engagements (Société à mission)
  mission: {
    title: "Notre Mission",
    description: "En tant que société à mission, ENEOS HABITAT s'engage à concilier performance économique et impact positif sur l'environnement et la société.",
    values: [
      {
        title: "Excellence Technique",
        description: "Des études et diagnostics réalisés avec rigueur et précision"
      },
      {
        title: "Transition Énergétique",
        description: "Accompagnement des projets de rénovation énergétique et de construction durable"
      },
      {
        title: "Innovation",
        description: "Expertise en structures innovantes et solutions énergétiques performantes"
      },
      {
        title: "Engagement Sociétal",
        description: "Une société à mission au service d'un habitat plus durable"
      }
    ]
  },
  
  // Informations légales
  legal: {
    rcs: "RCS Bordeaux",
    tvaNumber: "FR41 989 825 484",
    insurance: "Assurance RC Professionnelle - À compléter par le client",
    certifications: [] // À compléter par le client (Certibat, Qualibat, etc.)
  },
  
  // Publication légale
  legalPublication: {
    journal: "echos-judiciaires.com",
    date: "04/08/2025"
  },
  
  // Réseaux sociaux (à compléter par le client)
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: ""
  }
} as const;

// Export des informations pour un accès facile
export const {
  legalName,
  tradeName,
  siren,
  siret,
  headquarters,
  contact,
  services,
  activities,
  mission
} = companyInfo;