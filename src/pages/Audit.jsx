import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const steps = [
  {
    num: "1",
    title: "Vous nous décrivez votre situation",
    text: "Via le formulaire ci-dessous, vous nous donnez les grandes lignes : votre activité, vos outils actuels, ce qui coince.",
  },
  {
    num: "2",
    title: "On échange ensemble",
    text: "Un appel ou visio de 30-45 min pour creuser. On pose des questions, on comprend vos flux, on identifie les points de friction.",
  },
  {
    num: "3",
    title: "Vous recevez une analyse claire",
    text: "Un document qui résume ce qu'on a compris de votre fonctionnement, les tâches automatisables, les gains estimés (temps, erreurs, clarté) et une proposition chiffrée si un logiciel fait sens.",
  },
];

const quizQuestions = [
  {
    name: "quizOutils",
    label: "Combien d'outils numériques utilisez-vous au quotidien dans votre entreprise ? *",
    options: [
      "Moins de 3 outils",
      "Entre 3 et 5 outils",
      "Entre 6 et 10 outils",
      "Plus de 10 outils",
      "Autre",
    ],
  },
  {
    name: "quizAutomatisation",
    label: "Automatiser les tâches répétitives fait-il partie de vos priorités actuelles ? *",
    options: [
      "Non, pas du tout",
      "C'est une réflexion en cours",
      "Oui, c'est une priorité",
      "Nous avons déjà commencé",
      "Autre",
    ],
  },
  {
    name: "quizProcess",
    label: "Vos processus sont-ils clairement documentés et standardisés ? *",
    options: [
      "Non, rien n'est documenté",
      "Partiellement documentés",
      "La plupart sont documentés",
      "Tous nos processus sont standardisés",
      "Autre",
    ],
  },
  {
    name: "quizSuiviDonnees",
    label: "Comment suivez-vous vos données (chiffre d'affaires, production, opérations…) ? *",
    options: [
      "Principalement sur papier ou Excel basique",
      "Excel avec quelques automatisations",
      "Logiciels dédiés mais peu intégrés",
      "Système intégré avec tableaux de bord en temps réel",
      "Autre",
    ],
  },
  {
    name: "quizTempsRepetitif",
    label: "Quelle part du temps de vos équipes est consacrée à des tâches répétitives à faible valeur ajoutée ? *",
    options: [
      "Moins de 10%",
      "Entre 10% et 25%",
      "Entre 25% et 50%",
      "Plus de 50%",
      "Autre",
    ],
  },
  {
    name: "quizAisanceDigitale",
    label: "Votre équipe est-elle à l'aise avec les outils digitaux et les nouveaux logiciels métier ? *",
    options: [
      "Pas du tout",
      "Quelques personnes en auto-formation",
      "Formation interne organisée",
      "Formation complète et utilisation quotidienne",
      "Autre",
    ],
  },
];

export default function Audit() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    secteur: "",
    salaries: "",
    quizOutils: "",
    quizAutomatisation: "",
    quizProcess: "",
    quizSuiviDonnees: "",
    quizTempsRepetitif: "",
    quizAisanceDigitale: "",
    probleme: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setSent(true);
      setForm({
        nom: "",
        email: "",
        telephone: "",
        entreprise: "",
        secteur: "",
        salaries: "",
        quizOutils: "",
        quizAutomatisation: "",
        quizProcess: "",
        quizSuiviDonnees: "",
        quizTempsRepetitif: "",
        quizAisanceDigitale: "",
        probleme: "",
        budget: "",
      });
    } catch (err) {
      setError(err.message || "Une erreur est survenue. Veuillez reessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Diagnostic gratuit de vos processus | Delven</title>
        <meta
          name="description"
          content="Demandez un diagnostic gratuit de vos processus internes. En 2–3 échanges, on analyse votre fonctionnement et on vous propose un logiciel sur mesure. Sans engagement."
        />
        <link rel="canonical" href="https://www.delven.fr/audit" />
        <meta property="og:title" content="Diagnostic gratuit de vos processus | Delven" />
        <meta property="og:description" content="Audit gratuit de vos processus internes. On analyse votre fonctionnement et on vous dit ce qu’un logiciel sur mesure peut vous apporter." />
        <meta property="og:url" content="https://www.delven.fr/audit" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-[#151769] py-20 px-8 md:px-16 relative overflow-hidden">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">Diagnostic gratuit de vos processus</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            En 2-3 échanges, on analyse votre fonctionnement et on vous dit clairement ce qu'un logiciel sur mesure peut vous apporter. Sans engagement.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3 text-center">Comment ça se passe</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Le diagnostic en 3 temps</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <article key={step.num} className="bg-gray-50 border border-gray-200 rounded-3xl p-7">
                <div className="w-10 h-10 bg-[#151769] rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Démarrer le diagnostic</h2>
            <p className="text-gray-500 text-sm mb-8">Remplissez ce formulaire. On revient vers vous sous 24h ouvrées.</p>

            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Demande envoyée !</h3>
                <p className="text-gray-600 text-sm">On revient vers vous sous 24h ouvrées.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nom complet *</label>
                  <input
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
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
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Téléphone *</label>
                    <input
                      type="text"
                      name="telephone"
                      value={form.telephone}
                      onChange={handleChange}
                      required
                      placeholder="+33 6 00 00 00 00"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nom de l'entreprise *</label>
                  <input
                    name="entreprise"
                    value={form.entreprise}
                    onChange={handleChange}
                    required
                    placeholder="Ma Societe"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Secteur d'activité *</label>
                    <select
                      name="secteur"
                      value={form.secteur}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                    >
                      <option value="">Sélectionner</option>
                      <option>Industrie</option>
                      <option>Services</option>
                      <option>Commerce</option>
                      <option>BTP</option>
                      <option>Santé</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nombre de salariés *</label>
                    <select
                      name="salaries"
                      value={form.salaries}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                    >
                      <option value="">Sélectionner</option>
                      <option>1-10</option>
                      <option>11-30</option>
                      <option>31-50</option>
                      <option>51-100</option>
                      <option>100+</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">Questions complémentaires</h3>
                  <div className="space-y-4">
                    {quizQuestions.map((question) => (
                      <div key={question.name}>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">{question.label}</label>
                        <select
                          name={question.name}
                          value={form[question.name]}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                        >
                          <option value="">Sélectionner</option>
                          {question.options.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Décrivez votre situation en quelques lignes *</label>
                  <textarea
                    name="probleme"
                    value={form.probleme}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Quels outils utilisez-vous ? Qu'est-ce qui vous prend du temps ou vous pose problème ?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Budget approximatif envisagé (optionnel)</label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                  >
                    <option value="">Je ne sais pas</option>
                    <option>Moins de 5 000 EUR</option>
                    <option>5 000 - 15 000 EUR</option>
                    <option>15 000 - 30 000 EUR</option>
                    <option>Plus de 30 000 EUR</option>
                    <option>Autre</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#151769] text-white rounded-xl font-bold text-base hover:bg-[#0f1150] transition-colors shadow-lg disabled:opacity-50"
                >
                  {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </form>
            )}
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Après le diagnostic, vous aurez :</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Une vision claire de vos processus actuels",
                  "Les points de friction identifiés",
                  "Une estimation des gains possibles",
                  "Une proposition chiffrée (sans engagement)",
                  "La liberté de continuer ou non",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-[#151769] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">C'est pour vous si :</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Vous êtes une PME de 10 à 200 salariés",
                  "Vous gérez encore beaucoup de choses sur Excel, papier ou outils éparpillés",
                  "Vous sentez que vos outils actuels vous freinent",
                  "Vous avez déjà cherché un logiciel mais rien ne collait vraiment",
                  "Vous voulez un avis extérieur honnête, sans pression commerciale",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircleIcon className="h-4 w-4 text-[#151769] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
          {[
            {
              title: "100% gratuit",
              text: "Le diagnostic ne coûte rien et ne vous engage à rien.",
            },
            {
              title: "Réponse sous 24h",
              text: "On revient vers vous rapidement pour planifier l'échange.",
            },
            {
              title: "Sans jargon",
              text: "On vous parle clairement, comme à un humain, pas à un technicien.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-[#151769] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Une question avant de vous lancer ?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/questions-frequentes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#151769] text-white rounded-xl font-semibold hover:bg-[#0f1150] transition-colors"
            >
              Consultez notre FAQ
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#151769] text-[#151769] rounded-xl font-semibold hover:bg-[#151769]/5 transition-colors"
            >
              Contactez-nous directement
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
