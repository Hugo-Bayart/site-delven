import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const questions = [
  {
    id: 1,
    question: "Combien d'outils numériques utilisez-vous au quotidien dans votre entreprise ?",
    options: [
      { value: 1, label: "Moins de 3 outils" },
      { value: 2, label: "Entre 3 et 5 outils" },
      { value: 3, label: "Entre 6 et 10 outils" },
      { value: 4, label: "Plus de 10 outils" }
    ]
  },
  {
    id: 2,
    question: "Automatiser les tâches répétitives fait-il partie de vos priorités actuelles ?",
    options: [
      { value: 1, label: "Non, pas du tout" },
      { value: 2, label: "C'est une réflexion en cours" },
      { value: 3, label: "Oui, c'est une priorité" },
      { value: 4, label: "Nous avons déjà commencé" }
    ]
  },
  {
    id: 3,
    question: "Vos processus sont-ils clairement documentés et standardisés ?",
    options: [
      { value: 1, label: "Non, rien n'est documenté" },
      { value: 2, label: "Partiellement documentés" },
      { value: 3, label: "La plupart sont documentés" },
      { value: 4, label: "Tous nos processus sont standardisés" }
    ]
  },
  {
    id: 4,
    question: "Comment suivez-vous vos données (chiffre d'affaires, production, opérations…) ?",
    options: [
      { value: 1, label: "Principalement sur papier ou Excel basique" },
      { value: 2, label: "Excel avec quelques automatisations" },
      { value: 3, label: "Logiciels dédiés mais peu intégrés" },
      { value: 4, label: "Système intégré avec tableaux de bord en temps réel" }
    ]
  },
  {
    id: 5,
    question: "Selon vous, quelle part du temps de vos équipes est consacrée à des tâches répétitives à faible valeur ajoutée ?",
    options: [
      { value: 1, label: "Moins de 10%" },
      { value: 2, label: "Entre 10% et 25%" },
      { value: 3, label: "Entre 25% et 50%" },
      { value: 4, label: "Plus de 50%" }
    ]
  },
  {
    id: 6,
    question: "Votre équipe a-t-elle déjà été formée aux outils IA (type ChatGPT, agents IA, automatisations) ?",
    options: [
      { value: 1, label: "Pas du tout" },
      { value: 2, label: "Quelques personnes en auto-formation" },
      { value: 3, label: "Formation interne organisée" },
      { value: 4, label: "Formation complète et utilisation quotidienne" }
    ]
  },
  {
    id: 7,
    question: "Quel budget mensuel pensez-vous perdre à cause d'inefficacités (retards, erreurs, ressaisies, tâches manuelles, etc.) ?",
    options: [
      { value: 1, label: "Moins de 500 €" },
      { value: 2, label: "Entre 500 € et 2 000 €" },
      { value: 3, label: "Entre 2 000 € et 5 000 €" },
      { value: 4, label: "Plus de 5 000 €" }
    ]
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    entreprise: "",
    email: "",
    pays: "",
    taille: "",
    message: ""
  });

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Pour l'instant, juste une alerte - on implémentera l'envoi email plus tard
    alert("Merci ! Nous vous recontactons rapidement avec votre diagnostic personnalisé.");
  };

  return (
    <Layout>
      <div className="py-12 max-w-3xl mx-auto">
        {!showResult ? (
          <>
            {/* Intro */}
            <div className="text-center mb-12">
              <h1 className="hero-title mb-4">Quiz de maturité numérique</h1>
              <p className="muted leading-relaxed">
                En moins de 1 minute, évaluez le niveau de maturité numérique de votre entreprise 
                et découvrez une estimation des gains possibles grâce à l'IA.
              </p>
            </div>

            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm muted">Question {currentQuestion + 1} sur {questions.length}</span>
                <span className="text-sm muted">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-panel rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="card-panel mb-8">
              <h2 className="text-xl font-semibold mb-6">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <label
                    key={option.value}
                    className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      answers[currentQuestion] === option.value
                        ? 'border-accent bg-accent/10'
                        : 'border-panel-2 hover:border-accent/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={option.value}
                      checked={answers[currentQuestion] === option.value}
                      onChange={() => handleAnswer(option.value)}
                      className="sr-only"
                    />
                    <span className="font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                  currentQuestion === 0
                    ? 'bg-panel text-muted cursor-not-allowed'
                    : 'card-panel hover:scale-105'
                }`}
              >
                Précédent
              </button>
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                  !answers[currentQuestion]
                    ? 'bg-panel text-muted cursor-not-allowed'
                    : 'bg-accent text-white hover:bg-accent/90'
                }`}
              >
                {currentQuestion === questions.length - 1 ? 'Voir les résultats' : 'Suivant'}
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Résultats */}
            <div className="text-center mb-12">
              <h1 className="hero-title mb-4">Vos résultats</h1>
            </div>

            <div className="card-panel mb-8 text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Votre niveau de maturité : Intermédiaire</h2>
              <p className="text-xl muted mb-6">
                Potentiel de gains estimé : entre 15 000 € et 35 000 € / an
              </p>
              <p className="muted text-sm max-w-2xl mx-auto">
                Votre entreprise a déjà entamé sa transformation numérique. L'IA peut vous aider 
                à automatiser davantage et à optimiser vos processus existants.
              </p>
            </div>

            {/* Formulaire de contact */}
            <div className="card-panel mb-8">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Recevez votre diagnostic personnalisé
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleFormChange}
                    placeholder="Nom et prénom"
                    required
                    className="border border-panel-2 rounded-xl px-4 py-3 bg-transparent text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleFormChange}
                    placeholder="Nom de l'entreprise"
                    required
                    className="border border-panel-2 rounded-xl px-4 py-3 bg-transparent text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Email professionnel"
                    required
                    className="border border-panel-2 rounded-xl px-4 py-3 bg-transparent text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    name="pays"
                    value={formData.pays}
                    onChange={handleFormChange}
                    placeholder="Pays"
                    required
                    className="border border-panel-2 rounded-xl px-4 py-3 bg-transparent text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <select
                  name="taille"
                  value={formData.taille}
                  onChange={handleFormChange}
                  required
                  className="w-full border border-panel-2 rounded-xl px-4 py-3 bg-panel text-white focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Taille de l'entreprise</option>
                  <option value="1-10">1-10 employés</option>
                  <option value="11-50">11-50 employés</option>
                  <option value="51-200">51-200 employés</option>
                  <option value="201-500">201-500 employés</option>
                  <option value="500+">Plus de 500 employés</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Message (optionnel)"
                  rows="4"
                  className="w-full border border-panel-2 rounded-xl px-4 py-3 bg-transparent text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors"
                >
                  Recevoir mon diagnostic
                </button>
              </form>
            </div>

            {/* CTA final */}
            <div className="text-center card-panel py-8">
              <h3 className="text-lg font-semibold mb-4">
                Vous souhaitez un diagnostic complet et un plan d'action IA pour votre entreprise ?
              </h3>
              <Link
                to="/audit"
                className="inline-block px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-colors"
              >
                Réserver un appel de découverte
              </Link>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
