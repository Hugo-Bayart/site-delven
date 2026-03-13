import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const approche = [
  {
    title: "Ecoute",
    text: "On part de votre realite, pas d'un template.",
  },
  {
    title: "Simplicite",
    text: "Interface claire, adoption rapide par vos equipes.",
  },
  {
    title: "Flexibilite",
    text: "Le logiciel evolue quand votre entreprise evolue.",
  },
  {
    title: "Relation directe",
    text: "Un interlocuteur unique, reactif, disponible.",
  },
];

export default function APropos() {
  return (
    <Layout>
      <Helmet>
        <title>À propos de Delven | Logiciels sur mesure pour PME</title>
        <meta
          name="description"
          content="Delven conçoit des logiciels internes sur mesure pour les PME qui veulent sortir d'Excel et des outils éparpillés. Basé à Toulouse, actif partout en francophonie."
        />
      </Helmet>

      <section className="bg-[#151769] py-24 px-8 md:px-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 50%, rgba(255,255,255,0.12) 0%, transparent 55%),
              radial-gradient(circle at 85% 80%, rgba(253,230,138,0.1) 0%, transparent 50%),
              repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.02) 35px, rgba(255,255,255,0.02) 70px)
            `,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 bg-white/10 border border-white/20 text-white/70">
            A propos de Delven
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">Delven, c'est quoi ?</h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-3xl mx-auto">
            Une entreprise qui construit des logiciels sur mesure pour les PME qui veulent sortir du bricolage.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 md:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Pourquoi Delven existe</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight text-center">Le constat</h2>

          <div className="space-y-5 text-gray-700 text-[17px] leading-relaxed">
            <p>
              La plupart des PME fonctionnent avec des outils qui n'ont jamais ete penses pour elles. Excel pour tout,
              des logiciels generiques qu'on tord dans tous les sens, des process papier qui trainent.
            </p>
            <p className="font-semibold text-gray-900">Ca tient. Mais ca freine.</p>
            <p>
              Les ERP existent, mais ils sont lourds, chers, et penses pour des grandes structures. Resultat : beaucoup
              de PME restent coincees entre le bricolage et des solutions surdimensionnees.
            </p>
            <p>
              Delven est ne pour proposer une troisieme voie : un logiciel taille exactement pour votre fonctionnement,
              sans superflu.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Ce qu'on fait</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight text-center">Notre metier</h2>

          <div className="space-y-5 text-gray-700 text-[17px] leading-relaxed text-center">
            <p>
              On analyse comment vous travaillez. On identifie ce qui coince et ce qui peut etre simplifie.
              Puis on developpe un logiciel interne unique, pense pour votre equipe.
            </p>
            <p className="font-semibold text-gray-900">Pas un outil generique. Pas une usine a gaz. Juste ce qu'il vous faut, rien de plus.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Comment on travaille</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Notre approche</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {approche.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-start border border-gray-200 rounded-3xl p-7 bg-white hover:border-[#151769] hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-[#151769]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon className="h-6 w-6 text-[#151769]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Qui est derriere</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Qui je suis</h2>

          <div className="space-y-5 text-gray-700 text-[17px] leading-relaxed">
            <p>
              Je suis Hugo, fondateur de Delven, base a Toulouse. J'ai cree cette entreprise parce que je crois que
              les PME meritent des outils a leur taille, pas des solutions pensees pour d'autres qu'on leur impose.
            </p>
            <p className="font-medium text-gray-900">
              Mon objectif : vous faire gagner du temps, de la clarte, et de la serenite au quotidien.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 md:px-16 bg-gray-50">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Envie d'en parler ?</h2>
              <Link
                to="/audit"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#fef3c7] text-[#151769] rounded-xl font-bold text-lg hover:bg-[#fde68a] transition-colors shadow-lg"
              >
                Demander un diagnostic gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
