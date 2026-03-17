import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  DocumentMagnifyingGlassIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    num: "01",
    icon: DocumentMagnifyingGlassIcon,
    title: "Diagnostic",
    desc: "On échange sur votre fonctionnement actuel. On identifie les points de friction, les tâches répétitives, les données mal centralisées. Vous repartez avec une vision claire de ce qui peut être amélioré.",
    tag: "Durée : 2 à 3 échanges, environ 1 semaine. Coût : gratuit, sans engagement.",
  },
  {
    num: "02",
    icon: LightBulbIcon,
    title: "Conception",
    desc: "On définit ensemble le logiciel idéal. Quelles fonctionnalités, quels écrans, quels accès pour qui. On vous présente une maquette pour valider avant de coder quoi que ce soit.",
    tag: "Durée : 1 à 2 semaines selon la complexité.",
  },
  {
    num: "03",
    icon: CodeBracketIcon,
    title: "Développement",
    desc: "On construit le logiciel. Vous avez accès à des versions intermédiaires pour tester et ajuster en cours de route. Pas d'effet tunnel.",
    tag: "Durée : variable selon le projet, généralement 4 à 12 semaines.",
  },
  {
    num: "04",
    icon: RocketLaunchIcon,
    title: "Déploiement",
    desc: "On installe, on forme vos équipes, on s'assure que tout roule. Et on reste disponibles pour les ajustements post-lancement.",
    tag: "Durée : 1 à 2 semaines.",
  },
];

export default function Methode() {
  return (
    <Layout>
      <Helmet>
        <title>Notre méthode en 4 étapes | Delven</title>
        <meta
          name="description"
          content="Diagnostic, conception, développement, déploiement. Découvrez comment on construit votre logiciel sur mesure, de A à Z, sans mauvaise surprise."
        />
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
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white">Comment on travaille ensemble</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Un processus en 4 étapes. Vous savez où vous en êtes à chaque moment.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Les 4 étapes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comment ça se passe</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.num} className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-[#151769] rounded-2xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl font-black text-[#151769]/20">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-4">{step.desc}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#151769]/10 text-[#151769]">
                    {step.tag}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">À la fin, vous avez :</h2>
          <div className="max-w-2xl mx-auto text-left">
            <ul className="space-y-3 text-gray-700 text-[16px]">
              <li>Un logiciel unique, adapté à votre entreprise</li>
              <li>Une équipe formée et autonome</li>
              <li>Un interlocuteur disponible pour la suite</li>
              <li>Un outil qui peut évoluer avec vous</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintenance et évolutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Votre entreprise change, votre logiciel aussi. On propose un accompagnement continu pour corriger,
            améliorer, ajouter des fonctionnalités quand vous en avez besoin.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ça vous parle ?</h2>
          <Link
            to="/audit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#151769] text-white rounded-xl font-bold text-lg hover:bg-[#0f1150] transition-colors shadow-lg"
          >
            Demander un diagnostic gratuit
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
