import React from "react";
import { Link } from "react-router-dom";
import Layout from "./components/Layout";
import {
  ClockIcon,
  CogIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  DocumentMagnifyingGlassIcon,
  LightBulbIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  XCircleIcon,
  CheckIcon,
  UserGroupIcon,
  CurrencyEuroIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

/* ─── Données ─────────────────────────────────────────────────────────────── */

const painPoints = [
  {
    icon: XCircleIcon,
    title: "Excel partout, données nulle part",
    desc: "Des fichiers Excel dispersés entre collègues, des versions qui ne se synchronisent jamais, des données critiques perdues ou obsolètes.",
  },
  {
    icon: XCircleIcon,
    title: "Saisie double et triple",
    desc: "Les mêmes informations ressaisies dans plusieurs outils. Du temps perdu chaque jour sur des tâches sans valeur ajoutée.",
  },
  {
    icon: XCircleIcon,
    title: "Erreurs humaines coûteuses",
    desc: "Un chiffre mal saisi, un oubli, une mauvaise version... Les processus manuels génèrent des erreurs qui coûtent cher.",
  },
  {
    icon: XCircleIcon,
    title: "Aucune vision globale en temps réel",
    desc: "Impossible de savoir instantanément où en est une commande, un dossier client, un stock. La décision se prend à l'aveugle.",
  },
  {
    icon: XCircleIcon,
    title: "ERP trop rigide et trop cher",
    desc: "Les solutions génériques comme SAP ou Sage ne correspondent pas à vos processus métier. Vous payez pour des fonctions dont vous n'avez pas besoin.",
  },
  {
    icon: XCircleIcon,
    title: "Croissance bloquée par les process",
    desc: "Plus votre entreprise grandit, plus les processus manuels deviennent des goulots d'étranglement. Votre croissance coince.",
  },
];

const arguments_ = [
  {
    icon: ClockIcon,
    title: "Gain de temps immédiat",
    desc: "Automatiser une tâche manuelle de 2h par jour = 500h/an rendues à vos équipes. Calculez votre ROI dès l'audit.",
    color: "bg-[#151769]",
  },
  {
    icon: CogIcon,
    title: "Automatisation des répétitifs",
    desc: "Relances, rapports, synchronisations, traitement de données , vos processus récurrents tournent seuls, sans erreur.",
    color: "bg-[#1a1d8a]",
  },
  {
    icon: ChartBarIcon,
    title: "Décisions éclairées",
    desc: "Tableau de bord en temps réel, données fiables, indicateurs clés. Vos managers décident sur des faits, pas des suppositions.",
    color: "bg-[#151769]",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Outil fait pour votre métier",
    desc: "Conçu avec vos équipes, pour vos processus réels. Adopté immédiatement car pensé pour les utilisateurs finaux.",
    color: "bg-[#1a1d8a]",
  },
];

const processSteps = [
  {
    num: "01",
    icon: DocumentMagnifyingGlassIcon,
    title: "Audit de vos processus",
    desc: "On analyse vos flux de travail actuels, vos outils, vos points de friction. Vous repartez avec un diagnostic précis et une liste des gains potentiels.",
    tag: "Gratuit & sans engagement",
  },
  {
    num: "02",
    icon: LightBulbIcon,
    title: "Conception sur mesure",
    desc: "On conçoit l'architecture de votre logiciel avec vous. Maquettes, parcours utilisateurs, périmètre fonctionnel — tout est validé avant de coder.",
    tag: "Co-construction",
  },
  {
    num: "03",
    icon: CodeBracketIcon,
    title: "Développement & tests",
    desc: "Développement itératif avec des livraisons régulières. Vous voyez le logiciel prendre forme et pouvez ajuster à chaque étape.",
    tag: "Agile & transparent",
  },
  {
    num: "04",
    icon: RocketLaunchIcon,
    title: "Déploiement & accompagnement",
    desc: "Mise en production, formation de vos équipes, et suivi post-déploiement. Votre logiciel évolue avec vous dans la durée.",
    tag: "Long terme",
  },
];

/* ─── Helper : rendu d'une icône dynamique ─────────────────────────────────── */
function StepIcon({ step }) {
  const Icon = step.icon;
  return <Icon className="h-7 w-7 text-white" />;
}

/* ─── Composant principal ──────────────────────────────────────────────────── */

export default function App() {
  return (
    <Layout showHeader={false}>

      {/* ═══════════════════════════════════════════════
          HERO — Accroche + Positionnement
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#151769] relative overflow-hidden pb-24" aria-label="Présentation Delven">
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

        {/* Header intégré */}
        <header className="w-full py-6 px-8 md:px-16 relative z-10">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link to="/">
              <img src="/logo-delven-outline.png" alt="Delven — Logiciels sur mesure pour PME" className="h-12" />
            </Link>
            <nav className="flex items-center gap-8" aria-label="Navigation principale">
              <Link to="/quiz" className="text-white/90 hover:text-white transition-colors hidden md:block">
                Quiz
              </Link>
              <Link to="/a-propos" className="text-white/90 hover:text-white transition-colors hidden md:block">
                À propos
              </Link>
              <Link
                to="/audit"
                className="px-6 py-2.5 bg-[#fef3c7] text-[#151769] rounded-full font-semibold hover:bg-[#fde68a] transition-colors"
              >
                Audit gratuit
              </Link>
            </nav>
          </div>
        </header>

        {/* Contenu Hero */}
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 bg-white/10 border border-white/20 text-white/80">
                Alternative aux ERP · Logiciels sur mesure · PME
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Nous transformons les processus manuels de votre entreprise en{" "}
                <span className="text-[#fde68a]">logiciels sur mesure</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-4">
                Plus ergonomique. Plus simple. Plus efficace. Un outil pensé pour vos équipes, vos métiers, vos résultats.
              </p>
              <p className="text-base text-white/60 mb-10">
                Audit gratuit de vos processus internes → Proposition de projet logiciel sur mesure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/audit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#fef3c7] text-[#151769] rounded-xl font-bold text-lg hover:bg-[#fde68a] transition-colors shadow-lg"
                >
                  Demander mon audit gratuit
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <a
                  href="#cas-concret"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  Voir un cas concret
                </a>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto w-full -mt-64">
              <div
                className="relative overflow-hidden"
                style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)" }}
              >
                <img
                  src="/imagecouverture.png"
                  alt="Logiciel sur mesure pour PME — Delven"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Barre de confiance */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0f1150] py-5">
          <div className="max-w-7xl mx-auto px-8 md:px-16 flex justify-around items-center flex-wrap gap-4">
            {[
              { icon: ClockIcon, label: "Gain de temps" },
              { icon: CogIcon, label: "Automatisation" },
              { icon: ShieldCheckIcon, label: "Fiabilité" },
              { icon: UserGroupIcon, label: "Adopté par les équipes" },
              { icon: CurrencyEuroIcon, label: "ROI mesurable" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-white/80">
                <Icon className="h-6 w-6" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PROBLÈMES — Les douleurs des PME
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-8 md:px-16 bg-white" aria-labelledby="problemes-titre">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">
              Vous vous reconnaissez ?
            </p>
            <h2 id="problemes-titre" className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Votre entreprise grandit.
              <br />
              <span className="text-[#151769]">Vos outils, non.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La plupart des PME en croissance atteignent un plafond de verre : les processus manuels
              qui fonctionnaient à 10 salariés deviennent ingérables à 50.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-[#151769]/30 hover:shadow-md transition-all"
              >
                <Icon className="h-8 w-8 text-red-400 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/audit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#151769] text-white rounded-xl font-semibold text-lg hover:bg-[#0f1150] transition-colors shadow-lg"
            >
              Résolvons ça ensemble — Audit gratuit
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SOLUTION — L'Audit Logiciel
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-8 md:px-16 bg-gray-100" aria-labelledby="solution-titre">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">
                Notre offre principale
              </p>
              <h2 id="solution-titre" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Commencez par un audit —<br />
                <span className="text-[#151769]">Repartez avec une feuille de route</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Avant de coder une seule ligne, nous analysons vos processus internes, identifions vos
                goulots d'étranglement et chiffrons les gains possibles. Vous obtenez une proposition
                de projet logiciel claire, priorisée et adaptée à votre budget.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Cartographie de vos processus actuels",
                  "Identification des tâches automatisables",
                  "Estimation des gains en temps et coûts",
                  "Proposition de projet logiciel sur mesure chiffrée",
                  "Sans engagement — Sans jargon technique",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircleIcon className="h-5 w-5 text-[#151769] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/audit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#151769] text-white rounded-xl font-bold text-lg hover:bg-[#0f1150] transition-colors shadow-lg"
              >
                Demander mon audit gratuit
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>

            <div className="bg-[#151769] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.04) 35px, rgba(255,255,255,0.04) 70px)` }}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#fef3c7] rounded-2xl flex items-center justify-center mb-6">
                  <DocumentMagnifyingGlassIcon className="h-9 w-9 text-[#151769]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Audit Logiciel Interne</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Un audit structuré en 3 séances pour cartographier vos processus, quantifier les
                  pertes et concevoir la solution adaptée.
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Durée", value: "2 à 3 semaines" },
                    { label: "Format", value: "Distanciel ou présentiel" },
                    { label: "Livrable", value: "Proposition de projet chiffrée" },
                    { label: "Prix", value: "Gratuit" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center border-t border-white/10 pt-4">
                      <span className="text-white/60 text-sm">{label}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CAS CONCRET — CTIC Congo
      ═══════════════════════════════════════════════ */}
      <section id="cas-concret" className="py-20 bg-[#151769] relative overflow-hidden" aria-labelledby="cas-titre">
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

        <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
          <div className="text-center mb-14">
            <p className="text-[#fde68a] font-semibold uppercase tracking-widest text-sm mb-6">Cas concret</p>
            <div className="flex items-center justify-center gap-6 mb-4">
              <img
                src="/logoctic.jpg"
                alt="Logo CTIC Congo"
                className="h-16 object-contain bg-white rounded-2xl px-4 py-2 shadow-xl flex-shrink-0"
              />
              <h2 id="cas-titre" className="text-4xl md:text-5xl font-bold text-white text-left">
                De l'Excel au logiciel<br />métier centralisé
              </h2>
            </div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Comment nous avons aidé CTIC Congo à structurer sa gestion interne et réduire significativement
              ses processus manuels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Problème */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-5">
                <XCircleIcon className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Le problème</h3>
              <ul className="space-y-3">
                {[
                  "Suivi des clients et contrats géré sous Excel",
                  "Données dispersées entre plusieurs équipes",
                  "Aucune visibilité temps réel sur l'activité",
                  "Double saisie systématique entre services",
                  "Risque d'erreurs et de perte de données élevé",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/75 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm transform md:scale-105 shadow-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#fef3c7] flex items-center justify-center mb-5">
                <CodeBracketIcon className="h-6 w-6 text-[#151769]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">La solution développée</h3>
              <ul className="space-y-3">
                {[
                  "Logiciel interne de gestion clients centralisé",
                  "Module de suivi contractuel automatisé",
                  "Tableau de bord temps réel pour la direction",
                  "Accès multi-utilisateurs avec rôles définis",
                  "Synchronisation automatique inter-services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white text-sm">
                    <CheckIcon className="h-4 w-4 text-[#fde68a] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Résultats */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-5">
                <ChartBarIcon className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Les résultats</h3>
              <ul className="space-y-3">
                {[
                  "−70% de temps passé sur la saisie manuelle",
                  "0 perte de données contractuelle",
                  "Visibilité complète sur le pipeline clients",
                  "Onboarding des nouveaux collaborateurs accéléré",
                  "Décisions basées sur des données fiables",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/75 text-sm">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ARGUMENTS — Pourquoi Delven
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-8 md:px-16 bg-white" aria-labelledby="arguments-titre">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">
              Pourquoi un logiciel sur mesure ?
            </p>
            <h2 id="arguments-titre" className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Ce que vos équipes<br />méritent vraiment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un outil conçu pour votre métier, c'est un outil adopté, utilisé et rentabilisé.
            </p>
          </div>

          {/* Cercles reliés par une ligne */}
          <div className="relative flex flex-col md:flex-row items-start justify-between">
            {/* Ligne horizontale reliant les cercles */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-[#151769]/20 z-0" />

            {arguments_.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="flex flex-col items-center text-center flex-1 px-6 mb-10 md:mb-0">
                {/* Cercle */}
                <div className={`relative z-10 w-20 h-20 ${color} rounded-full flex items-center justify-center shadow-xl mb-6 ring-4 ring-white`}>
                  <Icon className="h-9 w-9 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Comparatif ERP vs Sur Mesure */}
          <div className="mt-16 bg-gray-50 rounded-3xl p-10 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              ERP généraliste vs Logiciel sur mesure Delven
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="font-semibold text-gray-500 uppercase text-xs tracking-wider mb-4">ERP généraliste</p>
                {[
                  "Fonctions inutilisées payées",
                  "Adoption difficile par les équipes",
                  "Processus adaptés à l'outil (et non l'inverse)",
                  "Licences et coûts récurrents élevés",
                  "Personnalisation limitée et coûteuse",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-500 text-sm">
                    <XCircleIcon className="h-5 w-5 text-red-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-[#151769] uppercase text-xs tracking-wider mb-4">Logiciel sur mesure Delven</p>
                {[
                  "Vous payez uniquement ce dont vous avez besoin",
                  "Conçu avec vos utilisateurs finaux",
                  "L'outil s'adapte à vos processus",
                  "Pas de licence : vous êtes propriétaire",
                  "Évolutions possibles à tout moment",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-800 text-sm">
                    <CheckCircleIcon className="h-5 w-5 text-[#151769] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PROCESS — Comment ça marche
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-8 md:px-16 bg-gray-100" aria-labelledby="process-titre">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Notre méthode</p>
            <h2 id="process-titre" className="text-4xl md:text-5xl font-bold text-gray-900">
              De l'audit à la mise en production
            </h2>
          </div>

          {/* Mobile : liste verticale */}
          <div className="md:hidden space-y-4">
            {processSteps.map(({ num, icon: Icon, title, desc, tag }) => (
              <div key={num} className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#151769] rounded-full flex flex-shrink-0 items-center justify-center shadow-lg">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#151769]/30 block mb-0.5">{num}</span>
                  <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-medium bg-[#151769]/10 text-[#151769]">{tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop : roue circulaire */}
          {/*
            Centre (390,390), rayon 145.
            Nœuds aux DIAGONALES (±45°) :
              01 NW : (288, 288)   02 NE : (492, 288)
              03 SE : (492, 492)   04 SW : (288, 492)
            Blocs cartes : 320×320px dans chaque coin du conteneur 780×780.
          */}
          <div className="hidden md:block relative mx-auto" style={{ width: '780px', height: '780px' }}>

            {/* ── SVG : cercle + arcs fléchés clockwise ── */}
            <svg
              className="absolute inset-0 z-0 pointer-events-none"
              width="780" height="780" viewBox="0 0 780 780" fill="none"
            >
              <defs>
                <marker id="arrow-cw" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M1,1 L1,7 L7,4 Z" fill="#151769" opacity="0.75"/>
                </marker>
              </defs>

              {/* Cercle guide léger */}
              <circle cx="390" cy="390" r="145" stroke="#151769" strokeWidth="1.5" strokeOpacity="0.15" />

              {/*
                Décalage angulaire ≈ 13° de chaque côté du nœud.
                Arc 01(NW 315°) → 02(NE 45°) : de 328° à 32°
                  Start 328°: (313, 267)  End 32°: (467, 267)
              */}
              <path d="M 313,267 A 145,145 0 0 1 467,267"
                stroke="#151769" strokeWidth="2.5" strokeOpacity="0.65"
                strokeLinecap="round" markerEnd="url(#arrow-cw)" />

              {/*
                Arc 02(NE 45°) → 03(SE 135°) : de 58° à 122°
                  Start 58°: (513, 313)  End 122°: (513, 467)
              */}
              <path d="M 513,313 A 145,145 0 0 1 513,467"
                stroke="#151769" strokeWidth="2.5" strokeOpacity="0.65"
                strokeLinecap="round" markerEnd="url(#arrow-cw)" />

              {/*
                Arc 03(SE 135°) → 04(SW 225°) : de 148° à 212°
                  Start 148°: (467, 513)  End 212°: (313, 513)
              */}
              <path d="M 467,513 A 145,145 0 0 1 313,513"
                stroke="#151769" strokeWidth="2.5" strokeOpacity="0.65"
                strokeLinecap="round" markerEnd="url(#arrow-cw)" />

              {/*
                Arc 04(SW 225°) → 01(NW 315°) : de 238° à 302°
                  Start 238°: (267, 467)  End 302°: (267, 313)
              */}
              <path d="M 267,467 A 145,145 0 0 1 267,313"
                stroke="#151769" strokeWidth="2.5" strokeOpacity="0.65"
                strokeLinecap="round" markerEnd="url(#arrow-cw)" />
            </svg>

            {/* ── 01 — Coin haut-gauche ── node au coin bas-droit du bloc */}
            <div className="absolute flex flex-col items-end justify-end"
              style={{ left: 0, top: 0, width: '320px', height: '320px', padding: '16px 0 0 16px' }}>
              <div className="text-right mb-4 pr-0">
                <h3 className="text-sm font-bold text-gray-900 mb-1">{processSteps[0].title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-2">{processSteps[0].desc}</p>
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-[#151769]/10 text-[#151769]">
                  {processSteps[0].tag}
                </span>
              </div>
              <div className="w-16 h-16 bg-[#151769] rounded-full flex items-center justify-center shadow-xl ring-4 ring-gray-100 relative z-10 flex-shrink-0">
                <span className="text-white font-black text-xl">{processSteps[0].num}</span>
              </div>
            </div>

            {/* ── 02 — Coin haut-droit ── node au coin bas-gauche du bloc */}
            <div className="absolute flex flex-col items-start justify-end"
              style={{ right: 0, top: 0, width: '320px', height: '320px', padding: '16px 16px 0 0' }}>
              <div className="text-left mb-4 pl-0">
                <h3 className="text-sm font-bold text-gray-900 mb-1">{processSteps[1].title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-2">{processSteps[1].desc}</p>
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-[#151769]/10 text-[#151769]">
                  {processSteps[1].tag}
                </span>
              </div>
              <div className="w-16 h-16 bg-[#151769] rounded-full flex items-center justify-center shadow-xl ring-4 ring-gray-100 relative z-10 flex-shrink-0">
                <span className="text-white font-black text-xl">{processSteps[1].num}</span>
              </div>
            </div>

            {/* ── 03 — Coin bas-droit ── node au coin haut-gauche du bloc */}
            <div className="absolute flex flex-col items-start justify-start"
              style={{ right: 0, bottom: 0, width: '320px', height: '320px', padding: '0 16px 16px 0' }}>
              <div className="w-16 h-16 bg-[#151769] rounded-full flex items-center justify-center shadow-xl ring-4 ring-gray-100 relative z-10 flex-shrink-0 mb-4">
                <span className="text-white font-black text-xl">{processSteps[2].num}</span>
              </div>
              <div className="text-left">
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-[#151769]/10 text-[#151769] mb-2">
                  {processSteps[2].tag}
                </span>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{processSteps[2].title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{processSteps[2].desc}</p>
              </div>
            </div>

            {/* ── 04 — Coin bas-gauche ── node au coin haut-droit du bloc */}
            <div className="absolute flex flex-col items-end justify-start"
              style={{ left: 0, bottom: 0, width: '320px', height: '320px', padding: '0 0 16px 16px' }}>
              <div className="w-16 h-16 bg-[#151769] rounded-full flex items-center justify-center shadow-xl ring-4 ring-gray-100 relative z-10 flex-shrink-0 mb-4">
                <span className="text-white font-black text-xl">{processSteps[3].num}</span>
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-[#151769]/10 text-[#151769] mb-2">
                  {processSteps[3].tag}
                </span>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{processSteps[3].title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{processSteps[3].desc}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#151769] relative overflow-hidden py-24 px-8 md:px-16" aria-labelledby="cta-titre">
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
          <p className="text-[#fde68a] font-semibold uppercase tracking-widest text-sm mb-4">
            Prêt à passer à l'action ?
          </p>
          <h2 id="cta-titre" className="text-4xl md:text-5xl font-bold mb-6">
            Parlons de vos processus.<br />L'audit est gratuit.
          </h2>
          <p className="text-xl text-white/80 leading-relaxed mb-4 max-w-2xl mx-auto">
            En 2 à 3 séances de travail, nous cartographions vos processus, identifions les gains
            et vous proposons la solution logicielle adaptée sans engagement.
          </p>
          <p className="text-white/50 mb-10">
            Entreprises en croissance · PME · 10 à 500 salariés · France & International
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/audit"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#fef3c7] text-[#151769] rounded-xl font-bold text-lg hover:bg-[#fde68a] transition-colors shadow-lg"
            >
              Demander mon audit gratuit
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DEUX IMAGES CLIQUABLES
      ═══════════════════════════════════════════════ */}
      <div className="grid md:grid-cols-2">
        {/* Questions fréquentes */}
        <Link to="/questions-frequentes" className="group overflow-hidden block">
          <img
            src="/Services%20informatiques.png"
            alt="Questions fréquentes"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Qui est Delven */}
        <Link to="/a-propos" className="group overflow-hidden block">
          <img
            src="/Intelligence%20artificielle.png"
            alt="Qui est Delven"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </div>

    </Layout>
  );
}
