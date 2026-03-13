import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const faqSections = [
  {
    categorie: "Le diagnostic gratuit",
    questions: [
      {
        q: "C'est vraiment gratuit ?",
        a: "Oui. On échange, on analyse, on vous donne une vision claire. Si vous ne voulez pas aller plus loin, vous ne payez rien.",
      },
      {
        q: "Combien de temps ça prend ?",
        a: "Comptez 2 à 3 échanges sur environ une semaine. Le premier appel dure 30-45 minutes.",
      },
      {
        q: "Qu'est-ce que je reçois à la fin ?",
        a: "Un document clair avec : ce qu'on a compris de vos processus, les points de friction, les gains estimés, et une proposition chiffrée si un logiciel fait sens.",
      },
      {
        q: "Je suis engagé après le diagnostic ?",
        a: "Non. Vous décidez librement de continuer ou non.",
      },
    ],
  },
  {
    categorie: "Le développement",
    questions: [
      {
        q: "Combien de temps pour développer un logiciel ?",
        a: "Ça dépend de la complexité. En général, entre 1 et 4 mois. On vous donne une estimation précise après le diagnostic.",
      },
      {
        q: "Je peux suivre l'avancement ?",
        a: "Oui. Vous avez accès à des versions intermédiaires et on fait des points réguliers. Pas d'effet tunnel.",
      },
      {
        q: "Et si je veux modifier des choses en cours de route ?",
        a: "C'est prévu. On ajuste ensemble tant que ça reste dans le périmètre défini. Les changements majeurs font l'objet d'un avenant.",
      },
      {
        q: "Qui s'occupe du projet côté Delven ?",
        a: "Un interlocuteur unique du début à la fin. Vous savez toujours à qui parler.",
      },
    ],
  },
  {
    categorie: "Le produit final",
    questions: [
      {
        q: "Le logiciel m'appartient ?",
        a: "Oui. À la livraison, le code et le logiciel sont à vous.",
      },
      {
        q: "Ça marche sur quoi ?",
        a: "On développe des applications web accessibles depuis n'importe quel navigateur. Pas d'installation sur chaque poste.",
      },
      {
        q: "Mes données sont sécurisées ?",
        a: "Oui. Hébergement sécurisé, sauvegardes régulières, accès protégés. On suit les bonnes pratiques et le RGPD.",
      },
      {
        q: "Et si j'ai un bug après la livraison ?",
        a: "On assure un support post-lancement. Les bugs sont corrigés. Pour les évolutions, on propose des forfaits maintenance.",
      },
    ],
  },
  {
    categorie: "Prix et paiement",
    questions: [
      {
        q: "Combien ça coûte ?",
        a: "Ça dépend du projet. Fourchette indicative : de 3 000 € pour un outil simple à 25 000 €+ pour un projet complexe. Le diagnostic permet de chiffrer précisément.",
      },
      {
        q: "Je peux payer en plusieurs fois ?",
        a: "Oui. On propose un paiement en 3 étapes : au lancement, à mi-projet, à la livraison.",
      },
      {
        q: "Il y a des coûts cachés ?",
        a: "Non. Le devis détaille tout. Hébergement et maintenance sont en option, clairement indiqués.",
      },
    ],
  },
  {
    categorie: "Cible et secteurs",
    questions: [
      {
        q: "C'est pour quelle taille d'entreprise ?",
        a: "Principalement les PME de 10 à 200 salariés. Assez grandes pour avoir des vrais besoins, assez petites pour qu'un ERP classique soit surdimensionné.",
      },
      {
        q: "Vous travaillez dans quels secteurs ?",
        a: "Tous. Industrie, services, commerce, BTP, santé… Ce qui compte, c'est le besoin, pas le secteur.",
      },
      {
        q: "Je suis en Afrique francophone, c'est possible ?",
        a: "Oui. On travaille à distance sans problème. Notre premier client est au Congo.",
      },
      {
        q: "Et si je suis à Toulouse ?",
        a: "Encore mieux. On peut se rencontrer en personne si vous préférez.",
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
      <Helmet>
        <title>Questions fréquentes | Delven</title>
        <meta
          name="description"
          content="Tout savoir sur le diagnostic gratuit, le développement, les tarifs et le fonctionnement de Delven. Réponses claires, sans jargon."
        />
      </Helmet>

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
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white">
            Questions fréquentes
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Tout ce que vous voulez savoir avant de nous contacter.
          </p>
        </div>
      </section>

      {/* FAQ par catégorie */}
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto space-y-14">
          {faqSections.map((section, secIdx) => (
            <div key={secIdx} className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-[#151769] uppercase tracking-widest mb-6 pb-3 border-b border-gray-200">
                {section.categorie}
              </h2>
              <div className="space-y-3">
                {section.questions.map((item, qIdx) => {
                  const key = `${secIdx}-${qIdx}`;
                  const isOpen = !!openItems[key];
                  return (
                    <div key={qIdx} className="border border-gray-200 rounded-2xl overflow-hidden bg-[#151769]">
                      <button
                        onClick={() => toggle(secIdx, qIdx)}
                        className="w-full text-left px-7 py-5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-white">{item.q}</span>
                        <span
                          className={`text-[#fde68a] text-xl flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-7 pb-6 pt-4 text-white/70 leading-relaxed border-t border-white/10">
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
            Vous avez une autre question ?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#151769] text-white rounded-xl font-bold text-lg hover:bg-[#0f1150] transition-colors shadow-lg"
            >
              Contactez-nous
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              to="/audit"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#151769] text-[#151769] rounded-xl font-bold text-lg hover:bg-[#151769]/5 transition-colors"
            >
              Lancez le diagnostic gratuit
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
