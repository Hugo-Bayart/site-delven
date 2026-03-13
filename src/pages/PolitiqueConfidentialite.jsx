import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

const sections = [
  {
    title: "1. Responsable du traitement",
    content: [
      "Delven, auto-entrepreneur, représentée par Hugo Bayart.",
      "SIRET : 947 941 779",
      "Adresse : 4a chemin de la rivière",
      "Email : contact@delven.fr",
    ],
  },
  {
    title: "2. Données collectées",
    content: [
      "Nous collectons uniquement les données que vous nous communiquez volontairement via le formulaire de contact ou d'audit : nom, prénom, adresse email, numéro de téléphone (optionnel), nom de votre entreprise et votre message.",
      "Ces données sont strictement nécessaires au traitement de votre demande. Aucune donnée sensible n'est collectée.",
    ],
  },
  {
    title: "3. Finalités du traitement",
    content: [
      "Les données collectées sont utilisées exclusivement pour :",
      "— Répondre à vos demandes de contact ou d'audit",
      "— Vous envoyer une proposition commerciale si vous en faites la demande",
      "— Améliorer nos services sur la base de vos retours",
      "Vos données ne sont jamais vendues, louées ou cédées à des tiers à des fins commerciales.",
    ],
  },
  {
    title: "4. Durée de conservation",
    content: [
      "Vos données sont conservées pendant une durée maximale de 3 ans à compter de notre dernier contact, conformément aux recommandations de la CNIL.",
      "À l'issue de cette période, elles sont supprimées de nos systèmes.",
    ],
  },
  {
    title: "5. Cookies",
    content: [
      "Ce site n'utilise pas de cookies de traçage ou de profilage publicitaire.",
      "Des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés. Ils ne nécessitent pas votre consentement.",
    ],
  },
  {
    title: "6. Vos droits",
    content: [
      "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :",
      "— Droit d'accès à vos données personnelles",
      "— Droit de rectification en cas d'inexactitude",
      "— Droit à l'effacement (droit à l'oubli)",
      "— Droit à la limitation du traitement",
      "— Droit à la portabilité de vos données",
      "— Droit d'opposition au traitement",
      "Pour exercer ces droits, contactez-nous à : contact@delven.fr. Nous nous engageons à répondre dans un délai de 30 jours.",
    ],
  },
  {
    title: "7. Sécurité des données",
    content: [
      "Nous mettons en oeuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation.",
      "Le site est hébergé chez OVH SAS (2 rue Kellermann, 59100 Roubaix, France), certifié ISO 27001.",
    ],
  },
  {
    title: "8. Réclamation auprès de la CNIL",
    content: [
      "Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL).",
      "CNIL — 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07",
      "Site : www.cnil.fr",
    ],
  },
  {
    title: "9. Modification de la politique",
    content: [
      "Delven se réserve le droit de modifier la présente politique de confidentialité à tout moment. La date de dernière mise à jour est indiquée en haut de la page.",
      "Nous vous encourageons à la consulter régulièrement.",
    ],
  },
];

export default function PolitiqueConfidentialite() {
  return (
    <Layout>
      <Helmet>
        <title>Politique de confidentialité | Delven</title>
        <meta name="description" content="Protection des données personnelles et conformité RGPD du site Delven." />
      </Helmet>

      {/* Hero */}
      <section className="bg-[#151769] py-16 px-8 md:px-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)
            `,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Politique de confidentialité</h1>
          <p className="text-white/60 text-sm">Dernière mise à jour : mars 2026</p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-500 text-[15px] leading-relaxed mb-10 p-5 bg-gray-50 rounded-2xl border border-gray-200">
            Delven accorde une importance primordiale à la protection de vos données personnelles.
            Cette politique explique quelles données nous collectons, pourquoi, et comment vous pouvez
            exercer vos droits conformément au RGPD (Règlement UE 2016/679).
          </p>
          <div className="space-y-10">
            {sections.map(({ title, content }) => (
              <div key={title}>
                <h2 className="text-lg font-bold text-[#151769] mb-4 pb-2 border-b border-gray-200">
                  {title}
                </h2>
                <ul className="space-y-2">
                  {content.map((line, i) => (
                    <li key={i} className="text-gray-600 text-[15px] leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-[#151769]/5 border border-[#151769]/10 rounded-2xl text-center">
            <p className="text-gray-700 text-[15px] mb-2 font-medium">Une question sur vos données ?</p>
            <a href="mailto:contact@delven.fr" className="text-[#151769] font-semibold hover:underline">
              contact@delven.fr
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}