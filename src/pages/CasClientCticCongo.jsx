import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import {
  ArrowRightIcon,
  ChartBarIcon,
  CheckIcon,
  CodeBracketIcon,
  CurrencyEuroIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export default function CasClientCticCongo() {
  return (
    <Layout>
      <Helmet>
        <title>Cas client CTIC Congo — Métallurgie, 70 employés | Delven</title>
        <meta
          name="description"
          content="Comment CTIC Congo a centralisé sa gestion et réduit de 70% son temps de saisie grâce à un logiciel sur mesure développé par Delven."
        />
      </Helmet>

      <section className="py-20 bg-[#151769] relative overflow-hidden" aria-labelledby="cas-titre">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%),
              repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)
            `,
          }}
        />

        <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10 text-white">
          <div className="text-center mb-12">
            <p className="text-[#fde68a] font-semibold uppercase tracking-widest text-sm mb-6">Cas client</p>
            <img
              src="/logoctic.jpg"
              alt="Logo CTIC Congo"
              className="h-16 object-contain bg-white rounded-2xl px-4 py-2 shadow-xl mx-auto mb-6"
            />
            <h1 id="cas-titre" className="text-4xl md:text-5xl font-bold mb-5 text-white">
              CTIC Congo — Métallurgie, 70 employés
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Comment une entreprise industrielle a centralisé sa gestion et divisé par 3 son temps de saisie.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Le contexte</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">La situation avant</h2>

          <p className="text-gray-700 text-[16px] leading-relaxed mb-6">
            CTIC Congo est une entreprise de métallurgie basée au Congo, avec environ 70 employés. Avant de nous
            contacter, leur gestion interne reposait sur :
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              "Des fichiers Excel multiples, pas toujours à jour",
              "Des saisies en double entre services",
              "Aucune vision globale sur l'activité en cours",
              "Des pertes d'informations régulières",
            ].map((item) => (
              <div key={item} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-start gap-3">
                <XCircleIcon className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-[16px] leading-relaxed">
            Le dirigeant cherchait une solution simple, adaptée à leur fonctionnement, sans la lourdeur d'un ERP classique.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Ce qu'on a fait</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">La solution</h2>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10">
            <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#151769] flex items-center justify-center mb-5">
                  <CodeBracketIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Un outil unique pour centraliser l'essentiel
                </h3>
                <p className="text-gray-700 text-[16px] leading-relaxed">
                  On a développé un logiciel de gestion interne sur mesure pour regrouper les informations utiles au même endroit,
                  fluidifier le travail entre les équipes et donner une vision claire de l'activité en temps réel.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Le suivi des projets et chantiers",
                  "La gestion des équipes et des affectations",
                  "Le pipeline commercial (prospects, devis, contrats)",
                  "Les données clés accessibles en temps réel",
                ].map((item) => (
                  <div key={item} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-[#151769] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 text-[16px] leading-relaxed text-center max-w-3xl mx-auto">
                Interface simple, pensée pour être utilisée par tous, pas seulement les profils techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Les résultats</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Ce que ça a changé</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
            {[
              { value: "−70%", label: "de temps passé sur la saisie manuelle" },
              { value: "0", label: "perte de données depuis le déploiement" },
              { value: "Visibilité complète", label: "sur le pipeline clients" },
              { value: "Adoption immédiate", label: "par les équipes" },
              {
                value: "Retour sur investissement",
                label: "Un investissement rentabilisé dès la première année selon le client",
                detail: "Coût du projet inférieur à 6 mois de temps perdu en ressaisie manuelle",
                featured: true,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={[
                  "rounded-3xl p-7 text-center text-white h-full flex flex-col",
                  item.featured
                    ? "bg-[#1c1f7a] border-l-4 border-[#fde68a] shadow-[0_18px_45px_rgba(21,23,105,0.18)]"
                    : "bg-[#151769]",
                ].join(" ")}
              >
                {item.featured ? (
                  <CurrencyEuroIcon className="h-7 w-7 text-[#fde68a] mx-auto mb-3" />
                ) : (
                  <ChartBarIcon className="h-7 w-7 text-[#fde68a] mx-auto mb-3" />
                )}
                <p
                  className={[
                    "font-black text-[#fde68a] mb-2 leading-tight",
                    item.featured ? "text-xl" : "text-2xl",
                  ].join(" ")}
                >
                  {item.value}
                </p>
                <p className="text-sm text-white/85 leading-relaxed">{item.label}</p>
                {item.detail ? <p className="text-xs text-white/60 leading-relaxed mt-3">{item.detail}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Vous voulez le même résultat ?</h2>
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
      </section>
    </Layout>
  );
}
