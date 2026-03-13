import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const ranges = [
  {
    title: "Projet simple",
    desc: "Logiciel interne avec 2-3 fonctionnalites cles\nPME de 10-20 personnes",
    price: "A partir de 3 000 EUR",
  },
  {
    title: "Projet standard",
    desc: "Logiciel complet, plusieurs modules, 20-50 utilisateurs",
    price: "Entre 8 000 EUR et 20 000 EUR",
  },
  {
    title: "Projet avance",
    desc: "Outil complexe, nombreuses integrations, +50 utilisateurs",
    price: "Sur devis, a partir de 25 000 EUR",
  },
];

const faqItems = [
  {
    q: "Pourquoi pas de prix fixe affiche ?",
    a: "Parce qu'un logiciel sur mesure depend de votre contexte. Afficher un prix unique serait soit trop cher pour les petits projets, soit irrealiste pour les gros.",
  },
  {
    q: "Le diagnostic est vraiment gratuit ?",
    a: "Oui. On echange, on analyse, on vous donne une vision claire. Si ca ne va pas plus loin, vous ne payez rien.",
  },
  {
    q: "Je peux payer en plusieurs fois ?",
    a: "Oui, on propose generalement un paiement en 3 etapes : au lancement, a mi-projet, a la livraison.",
  },
  {
    q: "Que se passe-t-il si je veux ajouter des fonctionnalites apres ?",
    a: "C'est prevu. On etablit un devis pour les evolutions, et on les integre a votre outil existant.",
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
        <title>Tarifs logiciel sur mesure | Delven</title>
        <meta
          name="description"
          content="Tarifs clairs pour votre projet de logiciel sur mesure. À partir de 3 000 €. Devis détaillé après diagnostic gratuit, sans engagement."
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
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white">Tarifs clairs, sans surprise</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Pas de grille rigide. Un prix adapte a votre projet, defini ensemble apres le diagnostic.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Comment ca marche</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Notre approche tarifaire</h2>

          <div className="space-y-5 text-gray-700 text-[16px] leading-relaxed max-w-4xl mx-auto">
            <p>
              Chaque entreprise est differente. Un logiciel pour 15 personnes n'a pas le meme cout qu'un outil pour 80 utilisateurs avec 10 modules.
            </p>
            <p>
              C'est pourquoi on ne propose pas de tarif fixe affiche. Le prix depend de :
            </p>
            <ul className="space-y-2 list-disc pl-6">
              <li>La complexite de vos processus</li>
              <li>Le nombre de fonctionnalites necessaires</li>
              <li>Le nombre d'utilisateurs</li>
              <li>Les integrations eventuelles (outils existants, API)</li>
            </ul>
            <p>
              Apres le diagnostic gratuit, vous recevez un devis detaille, sans engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Fourchettes indicatives</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Ordres de grandeur</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {ranges.map((range) => (
              <article key={range.title} className="bg-white border border-gray-200 rounded-3xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{range.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-6">{range.desc}</p>
                <p className="text-lg font-bold text-[#151769]">{range.price}</p>
              </article>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
            Ces fourchettes sont indicatives. Le diagnostic gratuit permet d'affiner precisement selon votre besoin.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Ce qui est inclus</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Dans tous nos projets</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Diagnostic initial gratuit",
              "Conception et maquettes validees avec vous",
              "Developpement sur mesure",
              "Tests et ajustements avant livraison",
              "Deploiement et formation de vos equipes",
              "Support post-lancement (duree selon contrat)",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Et apres la livraison ?</h2>
          <p className="text-gray-700 text-[16px] leading-relaxed max-w-3xl mx-auto mb-6">
            On propose des forfaits de maintenance adaptes :
          </p>
          <ul className="max-w-xl mx-auto text-left space-y-2 text-gray-700 mb-6 list-disc pl-6">
            <li>Corrections de bugs</li>
            <li>Mises a jour techniques</li>
            <li>Evolutions fonctionnelles a la demande</li>
          </ul>
          <p className="font-semibold text-[#151769]">Tarif maintenance : a partir de 150 EUR/mois selon la taille du projet.</p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">
            Questions frequentes sur les tarifs
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Vous voulez un chiffrage precis ?</h2>
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
