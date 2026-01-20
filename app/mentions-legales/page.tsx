import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { companyInfo } from "@/lib/company-info"

export const metadata = {
  title: "Mentions Légales | ENEOS HABITAT",
  description: "Mentions légales et informations juridiques d'ENEOS HABITAT - Bureau d'études thermiques et diagnostics immobiliers",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Mentions Légales</h1>

            <div className="space-y-8 text-muted-foreground">
              {/* 1. IDENTIFICATION DE L'ENTREPRISE */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Identification de l'entreprise</h2>
                <div className="space-y-2">
                  <p>
                    <strong className="text-foreground">Dénomination sociale :</strong> {companyInfo.legalName}
                  </p>
                  <p>
                    <strong className="text-foreground">Forme juridique :</strong> {companyInfo.legalForm}
                  </p>
                  <p>
                    <strong className="text-foreground">Société à mission :</strong> Oui
                  </p>
                  <p>
                    <strong className="text-foreground">Capital social :</strong> {companyInfo.capital}
                  </p>
                  <p>
                    <strong className="text-foreground">SIREN :</strong> {companyInfo.siren}
                  </p>
                  <p>
                    <strong className="text-foreground">SIRET :</strong> {companyInfo.siret}
                  </p>
                  <p>
                    <strong className="text-foreground">N° TVA Intracommunautaire :</strong> {companyInfo.tvaNumber}
                  </p>
                  <p>
                    <strong className="text-foreground">Code APE :</strong> {companyInfo.apeCode} - {companyInfo.apeLabel}
                  </p>
                  <p>
                    <strong className="text-foreground">RCS :</strong> {companyInfo.legal.rcs}
                  </p>
                </div>
              </section>

              {/* 2. SIÈGE SOCIAL */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Siège social</h2>
                <p>
                  <strong className="text-foreground">Adresse :</strong>
                  <br />
                  {companyInfo.headquarters.street}
                  <br />
                  {companyInfo.headquarters.postalCode} {companyInfo.headquarters.city}
                  <br />
                  {companyInfo.headquarters.country}
                </p>
                <p className="mt-3 text-sm italic">
                  Domiciliation assurée par {companyInfo.domiciliation.provider} (SIREN : {companyInfo.domiciliation.providerSiren})
                </p>
              </section>

              {/* 3. CONTACT */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Coordonnées</h2>
                <p>
                  <strong className="text-foreground">Téléphone :</strong> +33 6 61 07 08 91
                </p>
                <p>
                  <strong className="text-foreground">Email :</strong>{" "}
                  <a href={`mailto:${companyInfo.contact.email}`} className="text-primary hover:underline">
                    {companyInfo.contact.email}
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">Site web :</strong>{" "}
                  <a href={companyInfo.contact.website} className="text-primary hover:underline">
                    {companyInfo.contact.website}
                  </a>
                </p>
              </section>

              {/* 4. DIRECTION DE LA PUBLICATION */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Directeur de la publication</h2>
                <p>
                  <strong className="text-foreground">Nom :</strong> {companyInfo.management.president.name}
                </p>
                <p>
                  <strong className="text-foreground">Qualité :</strong> {companyInfo.management.president.position}
                </p>
              </section>

              {/* 5. HÉBERGEMENT */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Hébergement du site</h2>
                <p>
                  Ce site est hébergé par :
                  <br />
                  <strong className="text-foreground">Vercel Inc.</strong>
                  <br />
                  440 N Barranca Ave #4133
                  <br />
                  Covina, CA 91723, États-Unis
                  <br />
                  Site web :{" "}
                  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    vercel.com
                  </a>
                </p>
              </section>

              {/* 6. PROPRIÉTÉ INTELLECTUELLE */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Propriété intellectuelle</h2>
                <p className="mb-3">
                  L'ensemble de ce site web (structure, textes, logos, images, vidéos, graphismes, icônes, sons, logiciels, etc.) est la propriété exclusive d'<strong className="text-foreground">ENEOS HABITAT</strong>, à l'exception des éléments appartenant à des tiers.
                </p>
                <p className="mb-3">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable d'ENEOS HABITAT.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </section>

              {/* 7. PROTECTION DES DONNÉES PERSONNELLES (RGPD) */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Protection des données personnelles</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.1 Responsable du traitement</h3>
                <p className="mb-3">
                  Le responsable du traitement des données personnelles collectées sur ce site est <strong className="text-foreground">ENEOS HABITAT</strong>, représentée par {companyInfo.management.president.name}, {companyInfo.management.president.position}.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.2 Données collectées</h3>
                <p className="mb-3">
                  Dans le cadre de l'utilisation du site et des formulaires de contact ou de devis, nous sommes susceptibles de collecter les données personnelles suivantes :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale</li>
                  <li>Informations relatives à votre projet (diagnostic, étude thermique, etc.)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.3 Finalités du traitement</h3>
                <p className="mb-3">Les données collectées sont utilisées pour :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Répondre à vos demandes de contact et de devis</li>
                  <li>Assurer le suivi de nos prestations</li>
                  <li>Vous informer de nos actualités et services (avec votre consentement)</li>
                  <li>Améliorer nos services et l'expérience utilisateur du site</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.4 Vos droits</h3>
                <p className="mb-3">
                  Conformément à la loi « Informatique et Libertés » n°78-17 du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD) n°2016/679 du 27 avril 2016, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Droit d'accès :</strong> vous pouvez obtenir la confirmation que vos données sont traitées et y accéder</li>
                  <li><strong>Droit de rectification :</strong> vous pouvez demander la correction de vos données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> vous pouvez demander la limitation du traitement de vos données</li>
                  <li><strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> vous pouvez demander à recevoir vos données dans un format structuré</li>
                </ul>
                <p className="mt-3">
                  Pour exercer ces droits, vous pouvez nous contacter :
                  <br />
                  - Par email : <a href={`mailto:${companyInfo.contact.email}`} className="text-primary hover:underline">{companyInfo.contact.email}</a>
                  <br />
                  - Par courrier : {companyInfo.headquarters.fullAddress}
                </p>
                <p className="mt-3">
                  Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :{" "}
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.cnil.fr
                  </a>
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.5 Durée de conservation</h3>
                <p>
                  Vos données personnelles sont conservées pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées, dans le respect des obligations légales et réglementaires applicables.
                </p>
              </section>

              {/* 8. COOKIES */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies</h2>
                <p className="mb-3">
                  Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite du site.
                </p>
                <p className="mb-3">
                  <strong className="text-foreground">Types de cookies utilisés :</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Cookies techniques :</strong> nécessaires au bon fonctionnement du site</li>
                  <li><strong>Cookies analytiques :</strong> pour mesurer l'audience et améliorer le site</li>
                </ul>
                <p className="mt-3">
                  Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. Cependant, certaines fonctionnalités du site pourraient être limitées.
                </p>
              </section>

              {/* 9. RESPONSABILITÉ */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation de responsabilité</h2>
                <p className="mb-3">
                  ENEOS HABITAT s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, ENEOS HABITAT ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p>
                  ENEOS HABITAT ne pourra être tenue responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, les dommages, virus, etc.
                </p>
              </section>

              {/* 10. LIENS HYPERTEXTES */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Liens hypertextes</h2>
                <p>
                  Ce site peut contenir des liens vers d'autres sites web. ENEOS HABITAT n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. La présence de liens vers d'autres sites n'implique pas une association ou un partenariat avec ces sites.
                </p>
              </section>

              {/* 11. LOI APPLICABLE */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Droit applicable et juridiction</h2>
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Bordeaux, France.
                </p>
              </section>

              {/* 12. ASSURANCE PROFESSIONNELLE */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Assurance professionnelle</h2>
                <p>
                  ENEOS HABITAT est titulaire d'une assurance Responsabilité Civile Professionnelle.
                  <br />
                  <strong className="text-foreground">Partenaire assurance :</strong> KLARITY
                </p>
                <p className="mt-2 text-sm italic">
                  Les références complètes de l'assurance peuvent être communiquées sur demande.
                </p>
              </section>

              {/* DERNIÈRE MISE À JOUR */}
              <section className="pt-8 border-t border-border">
                <p className="text-sm italic">
                  Dernière mise à jour des mentions légales : Janvier 2026
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}