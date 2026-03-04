import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  CheckCircleIcon,
  ArrowRightIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export default function Audit() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    secteur: "",
    salaries: "",
    probleme: "",
    budget: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="bg-[#151769] py-20 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 bg-white/10 border border-white/20 text-white/80">
            Gratuit · Sans engagement
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Demandez votre <span className="text-[#fde68a]">audit logiciel</span> gratuit
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            En 2 à 3 séances, nous analysons vos processus internes, identifions les gains et vous
            proposons une solution sur mesure . Sans rien à payer pour commencer.
          </p>
        </div>
      </section>

      {/* ── Formulaire + colonne droite ── */}
      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">

          {/* Formulaire */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Parlez-nous de votre situation</h2>
            <p className="text-gray-500 text-sm mb-8">
              Plus vous êtes précis, plus notre retour sera concret et utile.
            </p>

            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Demande reçue !</h3>
                <p className="text-gray-600 text-sm">
                  Nous reviendrons vers vous sous <strong>24h ouvrées</strong> pour planifier une
                  première séance de travail.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Ligne nom / email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Prénom & Nom *</label>
                    <input
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email professionnel *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jean@entreprise.fr"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Ligne téléphone / entreprise */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Téléphone</label>
                    <input
                      type="tel"
                      name="telephone"
                      value={form.telephone}
                      onChange={handleChange}
                      placeholder="+33 6 00 00 00 00"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nom de l'entreprise *</label>
                    <input
                      name="entreprise"
                      value={form.entreprise}
                      onChange={handleChange}
                      required
                      placeholder="Ma Société SAS"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Ligne secteur / salariés */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Secteur d'activité</label>
                    <input
                      name="secteur"
                      value={form.secteur}
                      onChange={handleChange}
                      placeholder="Commerce, Logistique, BTP..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nombre de salariés</label>
                    <select
                      name="salaries"
                      value={form.salaries}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                    >
                      <option value="">Sélectionner</option>
                      <option>1 – 10</option>
                      <option>11 – 50</option>
                      <option>51 – 200</option>
                      <option>201 – 500</option>
                      <option>500+</option>
                    </select>
                  </div>
                </div>

                {/* Problème principal */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Décrivez vos principaux problèmes de processus *
                  </label>
                  <textarea
                    name="probleme"
                    value={form.probleme}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Ex : on ressaisit les mêmes données dans 3 outils différents, nos rapports prennent 2h à préparer chaque lundi, on n'a pas de visibilité en temps réel sur nos stocks..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent resize-none"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Budget envisagé (optionnel)</label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                  >
                    <option value="">Je ne sais pas encore</option>
                    <option>Moins de 10 000 €</option>
                    <option>10 000 – 30 000 €</option>
                    <option>30 000 – 80 000 €</option>
                    <option>80 000 € et plus</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#151769] text-white rounded-xl font-bold text-base hover:bg-[#0f1150] transition-colors shadow-lg mt-2"
                >
                  Envoyer ma demande d'audit
                  <ArrowRightIcon className="h-5 w-5" />
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Réponse sous 24h ouvrées · Aucun engagement · Données confidentielles
                </p>
              </form>
            )}
          </div>

          {/* Colonne droite : réassurance */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#151769] rounded-2xl p-7 text-white">
              <h3 className="font-bold text-lg mb-4">Ce que vous obtenez</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Cartographie de vos processus actuels",
                  "Liste des tâches automatisables",
                  "Estimation du temps et des coûts économisés",
                  "Proposition de projet logiciel sur mesure chiffrée",
                  "Échanges directs avec nos développeurs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/85">
                    <CheckCircleIcon className="h-4 w-4 text-[#fde68a] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-widest">Qui est concerné ?</h3>
              <div className="space-y-4">
                {[
                  { icon: BuildingOffice2Icon, label: "PME de 10 à 500 salariés" },
                  { icon: UserGroupIcon, label: "Équipes avec des processus manuels répétitifs" },
                  { icon: WrenchScrewdriverIcon, label: "Entreprises qui veulent remplacer Excel ou un ERP rigide" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-[#151769] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong className="block mb-1">100% gratuit, vraiment.</strong>
                L'audit n'engage à rien. Si notre proposition ne vous convient pas, vous repartez
                quand même avec un diagnostic précis de vos processus.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
