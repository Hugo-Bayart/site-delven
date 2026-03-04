import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  ArrowPathIcon,
  ClockIcon,
  CurrencyEuroIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const problemes = [
  "Des processus sous Excel qui accumulent les erreurs",
  "Des ERP rigides que vos équipes contournent",
  "Des tâches répétitives qui absorbent des heures chaque semaine",
  "Aucune visibilité en temps réel sur votre activité",
];

const resultats = [
  { val: "200+", label: "Heures économisées par mois", sub: "en moyenne après 3 mois d'utilisation" },
  { val: "-68%", label: "Erreurs opérationnelles", sub: "sur les tâches automatisées" },
  { val: "J+1",  label: "Adoption par les équipes", sub: "sans formation lourde" },
  { val: "100%", label: "Clients satisfaits", sub: "avec un suivi post-livraison inclus" },
];

const benefices = [
  {
    Icon: ClockIcon,
    title: "Vous récupérez du temps",
    text: "Les tâches répétitives sont automatisées. Vos équipes se concentrent sur ce qui crée vraiment de la valeur.",
  },
  {
    Icon: ShieldCheckIcon,
    title: "Vous éliminez les erreurs",
    text: "Plus d'Excel partagés, plus de copier-coller hasardeux. Un seul outil, une seule source de vérité.",
  },
  {
    Icon: ChartBarIcon,
    title: "Vous pilotez en temps réel",
    text: "Des tableaux de bord clairs sur votre activité. Vous prenez de meilleures décisions, plus vite.",
  },
  {
    Icon: CurrencyEuroIcon,
    title: "Vous réduisez vos coûts",
    text: "Un logiciel sur mesure coûte moins qu'un ERP généraliste inutilisé. Et le ROI est mesurable dès le premier mois.",
  },
];

const methode = [
  {
    num: "01",
    Icon: MagnifyingGlassIcon,
    title: "Audit de vos processus",
    text: "On analyse vos flux de travail, on identifie où vous perdez du temps et de l'argent. Gratuit, sans engagement, en 48h.",
  },
  {
    num: "02",
    Icon: PencilSquareIcon,
    title: "Conception avec vous",
    text: "On co-construit la solution — interfaces, logique métier, parcours utilisateurs. Vous validez avant le moindre développement.",
  },
  {
    num: "03",
    Icon: CodeBracketIcon,
    title: "Développement itératif",
    text: "Démos régulières, livraisons progressives. Vous voyez votre outil prendre forme et pouvez ajuster à chaque étape.",
  },
  {
    num: "04",
    Icon: ArrowPathIcon,
    title: "Mise en service et suivi",
    text: "Formation de vos équipes, déploiement accompagné, support post-lancement. On ne disparaît pas à la livraison.",
  },
];

export default function APropos() {
  return (
    <Layout>

      {/* HERO */}
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
            Ce que Delven fait pour vous
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Votre entreprise tourne encore
            <br />
            sur des outils{" "}
            <span className="text-[#fde68a]">qui vous freinent.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-3xl mx-auto">
            Delven conçoit des logiciels sur mesure pour les PME, des outils pensés
            exactement pour vos processus, adoptés immédiatement par vos équipes,
            et qui produisent des résultats mesurables dès le premier mois.
          </p>
          <Link
            to="/audit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#fef3c7] text-[#151769] rounded-xl font-bold text-base hover:bg-[#fde68a] transition-colors shadow-lg"
          >
            Analyser mes processus gratuitement
          </Link>
        </div>
      </section>

      {/* PROBLEME vs SOLUTION */}
      <section className="py-20 px-8 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Ce que vous vivez</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Des outils génériques qui ne sont pas faits pour vous.
            </h2>
            <div className="space-y-3">
              {problemes.map((d) => (
                <div key={d} className="flex items-start gap-3 bg-white border border-red-100 rounded-2xl px-5 py-4 shadow-sm">
                  <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="block w-2 h-2 rounded-full bg-red-400" />
                  </span>
                  <p className="text-gray-700 text-[15px]">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Ce que vous obtenez</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Un logiciel construit pour votre réalité.
            </h2>
            <div className="space-y-3">
              {[
                "Un outil calqué sur vos processus, pas l'inverse",
                "Des équipes qui adoptent l'outil le premier jour",
                "Des gains de temps concrets dès la mise en service",
                "Un partenaire disponible, pas un support offshore",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-[#151769]/5 border border-[#151769]/10 rounded-2xl px-5 py-4">
                  <CheckCircleIcon className="h-5 w-5 text-[#151769] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800 text-[15px] font-medium">{item}</p>
                </div>
              ))}
              <div className="mt-4 pt-2">
                <Link
                  to="/audit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#151769] text-white rounded-xl font-semibold hover:bg-[#1e22a0] transition-colors"
                >
                  Je veux ça pour mon entreprise
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTATS CHIFFRES */}
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Les résultats</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Des chiffres concrets, pas des promesses.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {resultats.map(({ val, label, sub }) => (
              <div key={label} className="bg-[#151769] rounded-3xl p-8 text-center text-white">
                <span className="block text-4xl md:text-5xl font-black text-[#fde68a] mb-2">{val}</span>
                <p className="font-semibold text-white text-sm mb-1">{label}</p>
                <p className="text-white/50 text-xs leading-snug">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section className="py-20 px-8 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Comment ça marche</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              De l audit à votre logiciel en production —{" "}
              <span className="text-[#151769]">sans mauvaise surprise.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methode.map(({ num, Icon, title, text }) => (
              <div
                key={num}
                className="bg-white rounded-3xl p-7 border border-gray-200 hover:shadow-lg transition-shadow relative overflow-hidden group"
              >
                <span className="absolute top-5 right-5 text-5xl font-black text-gray-100 group-hover:text-[#151769]/10 transition-colors select-none">
                  {num}
                </span>
                <div className="w-12 h-12 bg-[#151769]/10 rounded-2xl flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-[#151769]" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICES */}
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Ce que vous gagnez</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Un logiciel bien fait change le quotidien de toute une entreprise.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefices.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-5 items-start border border-gray-200 rounded-3xl p-7 hover:border-[#151769] hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-[#151769] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1e22a0] transition-colors">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              <p className="text-[#fde68a] font-semibold uppercase tracking-widest text-sm mb-4">
                Première étape
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                En 30 minutes, on sait si on peut vous faire gagner du temps.
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                On analyse vos processus, on vous dit honnêtement où un logiciel sur mesure
                peut changer les choses et ce que ça vous rapporterait concrètement.
                Gratuit, sans engament.
              </p>
              <Link
                to="/audit"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#fef3c7] text-[#151769] rounded-xl font-bold text-lg hover:bg-[#fde68a] transition-colors shadow-lg"
              >
                Démarrer l'audit gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}