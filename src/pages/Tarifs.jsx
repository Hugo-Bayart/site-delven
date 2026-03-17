import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { ArrowRightIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const pricingPlans = [
  {
    label: "Formule 01",
    name: "Starter",
    description: "Un premier outil ciblé pour automatiser un processus clé, même avec un budget limité.",
    price: "Dès 500 €",
    range: "500 – 3 000 € · Selon périmètre fonctionnel",
    tag: "Idéal pour démarrer",
    included: [
      "1 fonctionnalité sur mesure",
      "Interface simple et intuitive",
      "Livraison rapide (2–4 semaines)",
      "1 mois de support inclus",
    ],
    excluded: ["Intégrations tierces", "Modules additionnels"],
  },
  {
    label: "Formule 02",
    name: "Métier",
    description: "Une solution complète, pensée pour votre secteur et vos flux de travail réels.",
    price: "À partir de 3 000 €",
    range: "3 000 – 15 000 € · Selon complexité et intégrations",
    badge: "Le plus choisi",
    featured: true,
    included: [
      "Jusqu'à 4 modules métier",
      "Interface web + mobile",
      "Intégrations (ERP, compta…)",
      "Tableau de bord et exports",
      "Formation équipe complète",
      "6 mois de support inclus",
    ],
    excluded: [],
  },
  {
    label: "Formule 03",
    name: "Entreprise",
    description: "Un écosystème logiciel sur mesure, évolutif et connecté à vos systèmes existants.",
    price: "À partir de 15 000 €",
    range: "15 000 – 60 000 € · Projet complexe multi-modules",
    included: [
      "Modules illimités",
      "Architecture sur mesure",
      "Intégrations multi-systèmes",
      "Droits et rôles avancés",
      "Chef de projet dédié",
      "12 mois de support inclus",
    ],
    excluded: [],
  },
];

const faqItems = [
  {
    q: "Pourquoi pas de prix fixe affiché ?",
    a: "Parce qu'un logiciel sur mesure dépend de votre contexte. Afficher un prix unique serait soit trop cher pour les petits projets, soit irréaliste pour les gros.",
  },
  {
    q: "Le diagnostic est vraiment gratuit ?",
    a: "Oui. On échange, on analyse, on vous donne une vision claire. Si ça ne va pas plus loin, vous ne payez rien.",
  },
  {
    q: "Je peux payer en plusieurs fois ?",
    a: "Oui, on propose généralement un paiement en 3 étapes : au lancement, à mi-projet, à la livraison.",
  },
  {
    q: "Que se passe-t-il si je veux ajouter des fonctionnalités après ?",
    a: "C'est prévu. On établit un devis pour les évolutions, et on les intègre à votre outil existant.",
  },
];

export default function Tarifs() {
  const [openItems, setOpenItems] = useState({});

  const toggle = (idx) => {
    setOpenItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <Layout>
      <Helmet>
        <title>Tarifs logiciel sur mesure pour PME | Delven</title>
        <meta
          name="description"
          content="Tarifs clairs pour votre projet de logiciel sur mesure : de 3 000 € pour un outil simple à 25 000 €+ pour un projet complexe. Devis détaillé après diagnostic gratuit."
        />
        <link rel="canonical" href="https://www.delven.fr/tarifs" />
        <meta property="og:title" content="Tarifs logiciel sur mesure pour PME | Delven" />
        <meta property="og:description" content="Tarifs indicatifs et transparents pour votre logiciel sur mesure. Devis précis après diagnostic gratuit, sans engagement." />
        <meta property="og:url" content="https://www.delven.fr/tarifs" />
        <meta property="og:type" content="website" />
      </Helmet>

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
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white">Tarifs clairs, sans surprise</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Pas de grille rigide. Un prix adapté à votre projet, défini ensemble après le diagnostic.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Comment ça marche</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Notre approche tarifaire</h2>

          <div className="space-y-5 text-gray-700 text-[16px] leading-relaxed max-w-4xl mx-auto">
            <p>
              Chaque projet est unique : vous investissez uniquement dans ce qui crée de la valeur pour votre entreprise, qu'il s'agisse d'un besoin ciblé ou d'une solution plus complète.
            </p>
            <p>
              C'est pourquoi on ne propose pas de tarif fixe affiché. Le prix dépend de :
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>La complexité de vos processus</li>
              <li>Le nombre de fonctionnalités nécessaires</li>
              <li>Le nombre d'utilisateurs</li>
              <li>Les intégrations éventuelles (outils existants, API)</li>
            </ul>
            <p>
              Après le diagnostic gratuit, vous recevez un devis détaillé, sans engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Tarification</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Chaque projet est unique. Votre devis aussi.</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Des fourchettes transparentes pour chaque niveau de besoin. Devis personnalisé sous 48h.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={[
                  "relative rounded-3xl p-7 border transition-all h-full flex flex-col",
                  plan.featured
                    ? "bg-[#151769] text-white border-[#151769] md:scale-[1.03] md:-translate-y-1 shadow-2xl"
                    : "bg-white border-gray-200 text-gray-900",
                ].join(" ")}
              >
                {plan.badge ? (
                  <span className="absolute -top-3 right-5 px-3 py-1 rounded-full text-xs font-semibold bg-[#fde68a] text-[#151769] shadow-md">
                    {plan.badge}
                  </span>
                ) : null}

                <p className={[
                  "text-xs font-semibold uppercase tracking-widest mb-2",
                  plan.featured ? "text-white/70" : "text-[#151769]",
                ].join(" ")}>
                  {plan.label}
                </p>
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                <p className={[
                  "text-sm leading-relaxed mb-5",
                  plan.featured ? "text-white/80" : "text-gray-600",
                ].join(" ")}>
                  {plan.description}
                </p>

                <p className={[
                  "text-2xl font-extrabold mb-1",
                  plan.featured ? "text-[#fde68a]" : "text-[#151769]",
                ].join(" ")}>
                  {plan.price}
                </p>
                <p className={[
                  "text-xs mb-5",
                  plan.featured ? "text-white/70" : "text-gray-500",
                ].join(" ")}>
                  {plan.range}
                </p>

                {plan.tag ? (
                  <span className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 mb-5">
                    {plan.tag}
                  </span>
                ) : null}

                <ul className="space-y-2 mb-5">
                  {plan.included.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircleIcon className={[
                        "h-5 w-5 mt-0.5 flex-shrink-0",
                        plan.featured ? "text-[#fde68a]" : "text-[#151769]",
                      ].join(" ")} />
                      <span className={plan.featured ? "text-white/90 text-sm" : "text-gray-700 text-sm"}>{item}</span>
                    </li>
                  ))}
                </ul>

                {plan.excluded.length > 0 ? (
                  <ul className="space-y-2 mb-6">
                    {plan.excluded.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <XCircleIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-300" />
                        <span className="text-gray-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8 max-w-3xl mx-auto">
            Ces fourchettes sont indicatives. Chaque devis est établi après un appel de découverte gratuit de 30 min.
            Pas de mauvaise surprise : le prix final est fixé avant le démarrage du projet.
          </p>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-[#151769] rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(253,230,138,0.12) 0%, transparent 50%)
                  `,
                }}
              />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Vous voulez un chiffrage précis ?</h2>
                <Link
                  to="/audit"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#fef3c7] text-[#151769] rounded-xl font-bold text-lg hover:bg-[#fde68a] transition-colors shadow-lg"
                >
                  Demander un diagnostic gratuit
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Ce qui est inclus</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Dans tous nos projets</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Diagnostic initial gratuit",
              "Conception et maquettes validées avec vous",
              "Développement sur mesure",
              "Tests et ajustements avant livraison",
              "Déploiement et formation de vos équipes",
              "Support post-lancement (durée selon contrat)",
            ].map((item) => (
              <div key={item} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-start gap-3">
                <CheckCircleIcon className="h-5 w-5 text-[#151769] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Maintenance</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Et après la livraison ?</h2>
          <p className="text-gray-700 text-[16px] leading-relaxed max-w-3xl mx-auto mb-6">
            On propose des forfaits de maintenance adaptés :
          </p>
          <ul className="max-w-xl mx-auto text-left space-y-2 text-gray-700 mb-6 list-disc pl-6">
            <li>Corrections de bugs</li>
            <li>Mises à jour techniques</li>
            <li>Évolutions fonctionnelles à la demande</li>
          </ul>
          <p className="font-semibold text-[#151769]">Tarif maintenance : à partir de 50 € / mois selon la taille du projet.</p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">
            Questions fréquentes sur les tarifs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">FAQ</h2>

          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = !!openItems[idx];
              return (
                <div key={item.q} className="border border-gray-200 rounded-2xl overflow-hidden bg-[#151769]">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left px-7 py-5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-white">{item.q}</span>
                    <span className={`text-[#fde68a] text-xl flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {isOpen && <div className="px-7 pb-6 pt-4 text-white/75 leading-relaxed border-t border-white/10">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </Layout>
  );
}
