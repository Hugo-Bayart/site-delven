import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "./components/Layout";
import { ArrowRightIcon, XCircleIcon } from "@heroicons/react/24/outline";

const painPoints = [
  "On perd un temps fou à ressaisir les mêmes infos dans plusieurs outils.",
  "Notre Excel de suivi est devenu ingérable, plus personne ne s'y retrouve.",
  "On a testé des logiciels, mais aucun ne colle vraiment à notre façon de bosser.",
  "Un ERP ? Trop lourd, trop cher, trop long à mettre en place.",
];

export default function App() {
  return (
    <Layout>
      <Helmet>
        <title>Logiciel sur mesure pour PME | Delven</title>
        <meta
          name="description"
          content="Delven conçoit des logiciels métier sur mesure pour les PME françaises. Une alternative simple aux ERP complexes, adaptée à votre activité réelle."
        />
        <link rel="canonical" href="https://www.delven.fr/" />
        <meta property="og:title" content="Logiciel sur mesure pour PME | Delven" />
        <meta property="og:description" content="Delven conçoit des logiciels métier sur mesure pour les PME françaises. Une alternative simple aux ERP complexes, adaptée à votre activité réelle." />
        <meta property="og:url" content="https://www.delven.fr/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-[#151769] relative overflow-hidden py-20 px-8 md:px-16" aria-label="Présentation Delven">
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

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 bg-white/10 border border-white/20 text-white/80">
            Logiciels sur mesure pour PME
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Nous transformons les processus manuels de votre entreprise en <span className="text-[#fde68a]">logiciels sur mesure</span>.
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10">
            On vous construit un logiciel unique, adapté à votre fonctionnement. Sans la complexité d'un ERP.
          </p>
          <Link
            to="/audit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#fef3c7] text-[#151769] rounded-xl font-bold text-lg hover:bg-[#fde68a] transition-colors shadow-lg"
          >
            Demander un diagnostic gratuit
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100" aria-labelledby="pour-qui-titre">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="pour-qui-titre" className="text-3xl md:text-4xl font-bold text-gray-900">
              Pour qui ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 h-full">
              <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Pour qui</p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ce logiciel est fait pour vous si…
              </h3>

              <div className="space-y-4">
                {[
                  "Vous avez entre 20 et 100 employés",
                  "Vous gérez encore des process en Excel ou sur papier",
                  "Vous avez testé un ERP - trop lourd, trop cher, ou trop générique",
                  "Votre équipe a créé des \"bricolages\" pour faire fonctionner vos outils ensemble",
                  "Vous avez un processus métier spécifique qu'aucun logiciel du marché ne couvre vraiment",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 border border-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 h-full">
              <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">À éviter</p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ce n'est probablement pas pour vous si…
              </h3>

              <div className="space-y-4">
                {[
                  "Vous cherchez une solution prête à l'emploi en 24h",
                  "Vous avez moins de 10 employés",
                  "Vous n'avez aucun processus répétitif à automatiser",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gray-500 text-xs font-bold">-</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white" aria-labelledby="problemes-titre">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            <div className="bg-gray-100 border border-gray-200 rounded-3xl p-8 md:p-10 h-full" aria-labelledby="problemes-titre">
              <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Le problème</p>
              <h2 id="problemes-titre" className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Ce qu'on entend souvent
              </h2>

              <div className="space-y-4">
                {painPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <XCircleIcon className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 border border-gray-200 rounded-3xl p-8 md:p-10 h-full" aria-labelledby="solution-titre">
              <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">La solution</p>
              <h2 id="solution-titre" className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Ce qu'on fait
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                On analyse vos processus et on développe un logiciel interne sur mesure.
                Un seul outil, pensé pour votre équipe, qui centralise tout et évolue avec vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100" aria-label="Pages clés">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/cas-client/ctic-congo"
              className="group block bg-[#151769] rounded-3xl p-10 text-white relative overflow-hidden hover:shadow-xl transition-all"
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)
                  `,
                }}
              />
              <div className="relative z-10">
                <p className="text-[#fde68a] font-semibold uppercase tracking-widest text-sm mb-3">Exemple concret</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Cas client CTIC Congo</h2>
                <p className="text-white/80 mb-6">
                  70 employés, secteur métallurgie. Résultat : -70% de temps de saisie, zéro perte de données.
                </p>
                <span className="inline-flex items-center gap-2 font-semibold text-[#fde68a] group-hover:translate-x-1 transition-transform">
                  Voir le cas complet
                  <ArrowRightIcon className="h-5 w-5" />
                </span>
              </div>
            </Link>

            <Link
              to="/methode"
              className="group block bg-white border border-gray-200 rounded-3xl p-10 hover:border-[#151769]/40 hover:shadow-xl transition-all"
            >
              <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Méthode</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Comment ça se passe</h2>
              <p className="text-gray-700 mb-6">
                4 étapes : diagnostic, conception, développement, déploiement. On vous accompagne de A à Z.
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-[#151769] group-hover:translate-x-1 transition-transform">
                Découvrir la méthode
                <ArrowRightIcon className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
