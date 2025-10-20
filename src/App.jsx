import React from "react";
import Layout from "./components/Layout";
import { ClipboardDocumentListIcon, Cog6ToothIcon, PresentationChartBarIcon, ChartBarSquareIcon } from "@heroicons/react/24/outline";

export default function App() {
  return (
    <Layout>
      {/* Section Présentation - hero */}
      <section className="grid md:grid-cols-2 gap-12 items-center py-12">
        <div>
          <h1 className="hero-title mb-4">optimisez vos processus internes</h1>
          <p className="muted leading-relaxed">
            Delven aide les entreprises à améliorer leurs performances grâce à l'IA et à
            des outils sur mesure, simples et efficaces. Jusqu'à 25 % de coûts en moins et
            des milliers d'euros économisés chaque année.
          </p>
        </div>

        {/* Hero image / identity */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <h3 className="text-lg font-semibold">Hugo Bayart</h3>
            <p className="text-sm muted">Fondateur & Formateur IA</p>
          </div>

          <div className="w-48 h-48 rounded-xl overflow-hidden border shadow" style={{ background: 'transparent' }}>
            <img src="/Photo.jpg" alt="Portrait" className="w-full h-full object-cover object-center block" />
          </div>

          <p className="mt-4 muted text-sm max-w-xs">
            « Manquez le virage de l'IA ? L'IA transforme déjà la manière dont les entreprises
            travaillent, innovent et gagnent en compétitivité. Aujourd'hui, l'IA n'est plus une option. »
          </p>
        </div>
      </section>

      {/* 1. Nos Services */}
      <section id="services" className="py-16 border-t">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Nos Services</h2>
        <p className="muted leading-relaxed mb-6">
          Nous accompagnons les entreprises dans leur transition numérique grâce
          à l’intégration de solutions d’intelligence artificielle.
        </p>

        <ul className="space-y-6">
          <li className="card-panel flex items-start">
            <div className="feature-icon" aria-hidden>
              <ClipboardDocumentListIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">Audit complet (logiciel ODE breveté)</div>
              <div className="muted">Analyse détaillée de votre fonctionnement grâce à notre logiciel interne breveté ODE.</div>
            </div>
          </li>

          <li className="card-panel flex items-start">
            <div className="feature-icon" aria-hidden>
              <Cog6ToothIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">Mise en place des solutions</div>
              <div className="muted">Nous installons les outils les plus performants ou créons un logiciel personnalisé adapté à votre activité.</div>
            </div>
          </li>

          <li className="card-panel flex items-start">
            <div className="feature-icon" aria-hidden>
              <PresentationChartBarIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">Formation de vos équipes</div>
              <div className="muted">Nous formons vos collaborateurs pour une prise en main rapide et efficace des nouveaux outils.</div>
            </div>
          </li>

          <li className="card-panel flex items-start">
            <div className="feature-icon" aria-hidden>
              <ChartBarSquareIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">Suivi mensuel</div>
              <div className="muted">Nous assurons l'entretien, les mises à jour et l'évolution continue des outils mis en place.</div>
            </div>
          </li>
        </ul>
      </section>

      {/* 2. Pourquoi choisir Delven ? */}
      <section id="pourquoi" className="py-16 border-t">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Pourquoi choisir Delven ?</h2>
        <p className="muted leading-relaxed">
          Chez Delven, nous croyons que l'IA n'est pas réservée aux grands groupes. Notre approche met l'accent sur la <span className="font-semibold">simplicité</span>, la <span className="font-semibold">rentabilité</span> et l'<span className="font-semibold">adaptation à votre secteur</span>.
        </p>
      </section>

      {/* 3. Études de cas */}
      <section id="cas" className="py-16 border-t">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Études de cas / Exemples d'application</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-panel">
            <h3 className="font-semibold mb-2">BTP</h3>
            <p className="muted">Automatisation du suivi de chantier avec génération automatique de rapports et alertes sur les points critiques.</p>
          </div>
          <div className="card-panel">
            <h3 className="font-semibold mb-2">Commerce</h3>
            <p className="muted">Assistant IA pour améliorer le service client, qualifier les demandes et réduire le temps de réponse.</p>
          </div>
          <div className="card-panel">
            <h3 className="font-semibold mb-2">Industrie</h3>
            <p className="muted">Analyse prédictive pour réduire les arrêts machines, anticiper la maintenance et optimiser la production.</p>
          </div>
        </div>
      </section>

      {/* 4. Notre Vision */}
      <section id="vision" className="py-16 border-t">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Notre Vision</h2>
        <p className="muted leading-relaxed">Nous sommes convaincus que l'intelligence artificielle doit être un <span className="font-semibold">outil au service des humains</span>. Notre mission est de rendre l'IA <span className="font-semibold">accessible</span>, <span className="font-semibold">utile</span> et <span className="font-semibold">durable</span> pour toutes les entreprises.</p>
      </section>
    </Layout>
  );
}

