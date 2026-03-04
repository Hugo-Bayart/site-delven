import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const faqSections = [
  {
    categorie: "Notre offre",
    questions: [
      {
        q: "Qu'est-ce qu'un logiciel interne sur mesure ?",
        a: "Un logiciel interne sur mesure est un outil développé spécifiquement pour les processus d'une entreprise, en opposition aux ERP généralistes. Il automatise vos tâches répétitives, centralise vos données et s'adapte exactement à vos besoins métier. Contrairement à un ERP, vous ne payez que ce dont vous avez besoin, et l'outil est conçu autour de vos équipes — pas l'inverse.",
      },
      {
        q: "Pourquoi choisir un logiciel sur mesure plutôt qu'un ERP ?",
        a: "Les ERP comme SAP ou Sage sont puissants mais souvent trop rigides, trop chers et trop complexes pour des PME en croissance. Un logiciel sur mesure Delven est conçu pour votre métier précis, adopté naturellement par vos équipes car pensé avec elles, et peut évoluer à votre rythme. Vous êtes propriétaire de l'outil, sans licence récurrente.",
      },
      {
        q: "Quels types de logiciels développez-vous ?",
        a: "Nous développons des outils de gestion interne (CRM simplifié, suivi de commandes, gestion de stock, tableaux de bord), des outils métier spécifiques (workflow de validation, outils de reporting, bases de données internes), et des automatisations qui connectent vos outils existants. Chaque projet est défini avec vous lors de l'audit.",
      },
      {
        q: "Vous développez aussi des applications mobiles ou des sites web ?",
        a: "Notre cœur de métier est le logiciel interne (application web accessible depuis n'importe quel appareil). Nous développons des interfaces adaptées mobile quand c'est nécessaire. Pour les sites vitrines ou e-commerce, nous pouvons vous orienter selon vos besoins.",
      },
    ],
  },
  {
    categorie: "L'audit gratuit",
    questions: [
      {
        q: "En quoi consiste l'audit logiciel Delven ?",
        a: "L'audit Delven est une analyse structurée de vos processus internes sur 2 à 3 séances de travail. Nous cartographions vos flux actuels, identifions les tâches manuelles chronophages, estimons les gains potentiels en temps et en coût, puis vous proposons un projet logiciel chiffré et priorisé. Tout ça sans engagement et sans jargon technique.",
      },
      {
        q: "L'audit est-il vraiment gratuit ? Pourquoi ?",
        a: "Oui, l'audit initial est entièrement gratuit. C'est notre façon de travailler : nous voulons d'abord comprendre votre situation et vous apporter de la valeur avant de parler budget. Si notre proposition vous convient, on va plus loin ensemble. Sinon, vous repartez avec un diagnostic utile.",
      },
      {
        q: "Combien de temps dure l'audit ?",
        a: "L'audit se déroule en 2 à 3 séances d'environ 1h30 chacune, sur une période de 2 à 3 semaines. Il peut se faire en visioconférence ou en présentiel selon votre localisation. À l'issue, vous recevez une proposition de projet écrite et détaillée.",
      },
      {
        q: "Qui participe à l'audit côté client ?",
        a: "Idéalement, un décideur (dirigeant ou responsable) et un ou deux utilisateurs clés des processus concernés. Ce sont eux qui connaissent le mieux les friction quotidiennes. Pas besoin de profil technique.",
      },
    ],
  },
  {
    categorie: "Développement & projet",
    questions: [
      {
        q: "Combien coûte un logiciel sur mesure ?",
        a: "Le prix dépend du périmètre fonctionnel défini pendant l'audit. Un premier module fonctionnel peut démarrer à quelques milliers d'euros. Le rapport qualité / ROI est notre priorité : on dimensionne le projet à votre budget réel et on priorise les fonctions à plus fort impact.",
      },
      {
        q: "Combien de temps pour avoir un logiciel opérationnel ?",
        a: "Un premier module fonctionnel peut être livré en 6 à 12 semaines selon la complexité. Nous travaillons de façon itérative : vous voyez le logiciel évoluer à chaque sprint et pouvez valider au fur et à mesure.",
      },
      {
        q: "Qui possède le logiciel développé ?",
        a: "Vous. Le code source et tous les droits vous appartiennent. Pas de dépendance à une licence Delven. Vous pouvez faire évoluer le logiciel avec nous ou avec une autre équipe technique.",
      },
      {
        q: "Assurez-vous la maintenance après la livraison ?",
        a: "Oui. Nous proposons des contrats de maintenance et d'évolution pour accompagner votre logiciel dans la durée : corrections de bugs, mises à jour de sécurité, nouvelles fonctionnalités. Le logiciel grandit avec votre entreprise.",
      },
    ],
  },
  {
    categorie: "Cibles & secteurs",
    questions: [
      {
        q: "Quelles entreprises peuvent bénéficier de vos services ?",
        a: "Toutes les PME et entreprises en croissance (10 à 500 salariés) avec des processus manuels à automatiser. Nos clients sont dans des secteurs variés : négoce, services, BTP, santé, logistique, immobilier, formation, etc. Si vous avez des Excel partout, vous avez un besoin.",
      },
      {
        q: "Travaillez-vous avec des entreprises hors de France ?",
        a: "Oui. Nous accompagnons des entreprises en France et à l'international — notamment en Afrique francophone (Congo, Côte d'Ivoire, Sénégal, etc.) et dans les DOM-TOM. Nos audits et suivis de projet se font en distanciel sans difficulté.",
      },
      {
        q: "J'ai déjà un outil en place (ERP, Excel...) — est-ce compatible ?",
        a: "Absolument. Nous pouvons connecter votre nouveau logiciel à vos outils existants via des API ou des exports/imports de données. L'objectif est de réduire la friction, pas d'imposer une refonte complète d'un coup.",
      },
    ],
  },
];

export default function QuestionsFrequentes() {
  const [openItems, setOpenItems] = useState({});

  const toggle = (secIdx, qIdx) => {
    const key = `${secIdx}-${qIdx}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#151769] relative overflow-hidden py-20 px-8 md:px-16">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
              repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)
            `,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 bg-white/10 border border-white/20 text-white/80">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Questions fréquentes
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur nos logiciels sur mesure, notre processus d'audit et notre façon de travailler.
          </p>
        </div>
      </section>

      {/* FAQ par catégorie */}
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto space-y-14">
          {faqSections.map((section, secIdx) => (
            <div key={secIdx}>
              <h2 className="text-xl font-bold text-[#151769] uppercase tracking-widest mb-6 pb-3 border-b border-gray-200">
                {section.categorie}
              </h2>
              <div className="space-y-3">
                {section.questions.map((item, qIdx) => {
                  const key = `${secIdx}-${qIdx}`;
                  const isOpen = !!openItems[key];
                  return (
                    <div key={qIdx} className="border border-gray-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggle(secIdx, qIdx)}
                        className="w-full text-left px-7 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-gray-900">{item.q}</span>
                        <span
                          className={`text-[#151769] text-xl flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-7 pb-6 pt-4 text-gray-600 leading-relaxed border-t border-gray-100">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vous n'avez pas trouvé votre réponse ?
          </h2>
          <p className="text-gray-600 mb-8">
            Contactez-nous directement — nous vous répondons sous 24h.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#151769] text-white rounded-xl font-bold text-lg hover:bg-[#0f1150] transition-colors shadow-lg"
          >
            Nous contacter
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
