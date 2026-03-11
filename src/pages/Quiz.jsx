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
    question: "Combien de personnes utilisent les logiciels au quotidien (secrétariat, commercial, admin, etc.) ?",
    options: [
      { value: 1, label: "1 personne" },
      { value: 2, label: "2 à 5 personnes" },
      { value: 3, label: "6 à 15 personnes" },
      { value: 4, label: "16 personnes et plus" }
    ]
  },
  {
    id: 3,
    question: "Dans quel secteur d'activité évoluez-vous principalement ?",
    options: [
      { value: 1, label: "Services / Conseil / Agence" },
      { value: 2, label: "Commerce / Distribution" },
      { value: 3, label: "BTP / Industrie" },
      { value: 4, label: "Santé / Logistique / Activité réglementée" }
    ]
  },
  {
    id: 4,
    question: "Automatiser les tâches répétitives fait-il partie de vos priorités actuelles ?",
    options: [
      { value: 1, label: "Non, pas du tout" },
      { value: 2, label: "C'est une réflexion en cours" },
      { value: 3, label: "Oui, c'est une priorité" },
      { value: 4, label: "Nous avons déjà commencé" }
    ]
  },
  {
    id: 5,
    question: "Vos processus sont-ils clairement documentés et standardisés ?",
    options: [
      { value: 1, label: "Non, rien n'est documenté" },
      { value: 2, label: "Partiellement documentés" },
      { value: 3, label: "La plupart sont documentés" },
      { value: 4, label: "Tous nos processus sont standardisés" }
    ]
  },
  {
    id: 6,
    question: "Comment suivez-vous vos données (chiffre d'affaires, production, opérations…) ?",
    options: [
      { value: 1, label: "Principalement sur papier ou Excel basique" },
      { value: 2, label: "Excel avec quelques automatisations" },
      { value: 3, label: "Logiciels dédiés mais peu intégrés" },
      { value: 4, label: "Système intégré avec tableaux de bord en temps réel" }
    ]
  },
  {
    id: 7,
    question: "Selon vous, quelle part du temps de vos équipes est consacrée à des tâches répétitives à faible valeur ajoutée ?",
    options: [
      { value: 1, label: "Moins de 10%" },
      { value: 2, label: "Entre 10% et 25%" },
      { value: 3, label: "Entre 25% et 50%" },
      { value: 4, label: "Plus de 50%" }
    ]
  },
  {
    id: 8,
    question: "Votre équipe est-elle à l'aise avec les outils digitaux et les nouveaux logiciels métier ?",
    options: [
      { value: 1, label: "Pas du tout" },
      { value: 2, label: "Quelques personnes en auto-formation" },
      { value: 3, label: "Formation interne organisée" },
      { value: 4, label: "Formation complète et utilisation quotidienne" }
    ]
  },
  {
    id: 9,
    question: "Quel est votre budget annuel estimé lié à la gestion numérique (logiciels, abonnements, traitement administratif, suivi, salaires des employés concernés) ?",
    options: [
      { value: 1, label: "Moins de 3 000 EUR / an" },
      { value: 2, label: "Entre 3 000 et 10 000 EUR / an" },
      { value: 3, label: "Entre 10 000 et 30 000 EUR / an" },
      { value: 4, label: "Plus de 30 000 EUR / an" }
    ]
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const annualDigitalSpendByAnswer = {
    1: 1800,
    2: 6500,
    3: 18000,
    4: 42000
  };

  const softwareUsersByAnswer = {
    1: 1,
    2: 4,
    3: 10,
    4: 20
  };

  const maturityLabels = {
    low: "Organisation digitale à structurer",
    mid: "Organisation digitale en progression",
    high: "Organisation digitale performante"
  };

  const maturityDescriptions = {
    low: "Vos processus reposent encore fortement sur le manuel. Un logiciel personnalisé peut rapidement réduire les ressaisies et fiabiliser les opérations.",
    mid: "Vous avez déjà de bonnes bases. L'enjeu est de concevoir un logiciel sur mesure qui unifie les flux et industrialise ce qui fonctionne déjà.",
    high: "Votre socle digital est solide. Le meilleur levier est d'optimiser vos flux critiques avec des modules métier personnalisés et mieux intégrés."
  };

  const repetitiveWorkQuestionId = 7;
  const budgetQuestionId = 9;
  const employeesQuestionId = 2;
  const sectorQuestionId = 3;

  const handleAnswer = (value) => {
    const currentId = questions[currentQuestion].id;
    setAnswers({ ...answers, [currentId]: value });
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

  const totalQuestions = questions.length;
  const maxRawScore = totalQuestions * 4;
  const minRawScore = totalQuestions;

  const getNormalizedMaturityScore = () => {
    const values = questions.map((question) => answers[question.id] || 1);
    const adjusted = values.map((value, index) => {
      const questionId = questions[index].id;
      // La question sur la part de temps répétitive est inversée pour le score de maturité.
      if (questionId === repetitiveWorkQuestionId) return 5 - value;
      return value;
    });
    const raw = adjusted.reduce((sum, value) => sum + value, 0);
    return Math.round(((raw - minRawScore) / (maxRawScore - minRawScore)) * 100);
  };

  const getProfile = (score) => {
    if (score < 40) return "low";
    if (score < 75) return "mid";
    return "high";
  };

  const getEstimatedImpact = () => {
    const budgetAnswer = answers[budgetQuestionId] || 2;
    const repetitiveWorkAnswer = answers[repetitiveWorkQuestionId] || 2;
    const employeesAnswer = answers[employeesQuestionId] || 2;
    const sectorAnswer = answers[sectorQuestionId] || 2;
    const maturityScore = getNormalizedMaturityScore();
    const profile = getProfile(maturityScore);

    const annualDigitalSpend = annualDigitalSpendByAnswer[budgetAnswer];
    const softwareUsers = softwareUsersByAnswer[employeesAnswer];

    const repetitiveLoadRate = {
      1: 0.06,
      2: 0.12,
      3: 0.2,
      4: 0.3
    }[repetitiveWorkAnswer];

    const toolsComplexityFactor = {
      1: 0.85,
      2: 1,
      3: 1.15,
      4: 1.3
    }[answers[1] || 2];

    const sectorFactor = {
      1: 0.95,
      2: 1,
      3: 1.05,
      4: 1.1
    }[sectorAnswer];

    const processWasteCost = annualDigitalSpend * repetitiveLoadRate * toolsComplexityFactor * sectorFactor;
    const coordinationCost = softwareUsers * 450;
    const annualWasteEstimate = Math.round(processWasteCost + coordinationCost);

    const hoursSavedPerUserMonthly = {
      1: 2,
      2: 4,
      3: 7,
      4: 10
    }[repetitiveWorkAnswer];

    const monthlyHoursSaved = Math.round(hoursSavedPerUserMonthly * softwareUsers);
    const annualHoursSaved = monthlyHoursSaved * 12;
    const daysSavedPerYear = Math.round(annualHoursSaved / 7);

    const hourlyValue = Math.round(32 * sectorFactor);
    const annualValueFromTime = annualHoursSaved * hourlyValue;

    const gainRateByProfile = {
      low: 0.65,
      mid: 0.55,
      high: 0.45
    };

    const annualGainEstimate = Math.round(
      Math.min(
        annualWasteEstimate * 1.2,
        annualWasteEstimate * gainRateByProfile[profile] + annualValueFromTime * 0.25
      )
    );

    const annualResidualCost = Math.max(0, annualWasteEstimate - annualGainEstimate);
    const oneTimeCustomBuild = Math.round(annualGainEstimate * 1.1 + softwareUsers * 1800);
    const standardLicenseBase = Math.round(annualDigitalSpend * 0.45 + softwareUsers * 900);
    const customMaintenanceBase = Math.round(oneTimeCustomBuild * 0.08);
    const growthPressureBySize = {
      1: 0.02,
      2: 0.05,
      3: 0.08,
      4: 0.12
    };
    const growthPressure = growthPressureBySize[employeesAnswer];

    const yearlyProjection = [1, 2, 3, 4, 5].map((year) => {
      const standard = Math.round(annualWasteEstimate * (1 + 0.08 * (year - 1)) + standardLicenseBase);
      const custom =
        year === 1
          ? Math.round(annualResidualCost + oneTimeCustomBuild)
          : Math.round(annualResidualCost * (1 + 0.02 * (year - 2)) + customMaintenanceBase);

      const manual = Math.round(
        (annualWasteEstimate * 1.05 + softwareUsers * 650) * (1 + growthPressure * 1.25 * (year - 1))
      );

      const stack = Math.round(
        (annualWasteEstimate * 0.85 + annualDigitalSpend * 0.75 + softwareUsers * 700) *
          (1 + growthPressure * 1.05 * (year - 1)) +
          softwareUsers * 220 * year
      );

      const erp = Math.round(
        (annualWasteEstimate * 0.7 + annualDigitalSpend * 0.95 + softwareUsers * 950 + 12000) *
          (1 + growthPressure * 0.95 * (year - 1)) +
          (year >= 3 ? softwareUsers * 1400 : 0)
      );

      return {
        year,
        label: `Année ${year}`,
        standard,
        custom,
        erp,
        stack,
        manual
      };
    });

    const totalStandard5Y = yearlyProjection.reduce((sum, item) => sum + item.standard, 0);
    const totalErp5Y = yearlyProjection.reduce((sum, item) => sum + item.erp, 0);
    const totalStack5Y = yearlyProjection.reduce((sum, item) => sum + item.stack, 0);
    const totalManual5Y = yearlyProjection.reduce((sum, item) => sum + item.manual, 0);
    const totalCustom5Y = yearlyProjection.reduce((sum, item) => sum + item.custom, 0);
    const gain3YEstimate = Math.round(annualGainEstimate * 3);
    const roiTarget = Math.max(1.5, gain3YEstimate / Math.max(1, oneTimeCustomBuild));

    return {
      profile,
      maturityScore,
      yearlyProjection,
      totalStandard5Y,
      totalErp5Y,
      totalStack5Y,
      totalManual5Y,
      totalCustom5Y,
      savings5Y: totalStandard5Y - totalCustom5Y,
      annualWasteEstimate,
      annualGainEstimate,
      gain3YEstimate,
      roiTarget,
      monthlyHoursSaved,
      annualHoursSaved,
      daysSavedPerYear,
      growthPressure
    };
  };

  const formatEuro = (value) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    }).format(value);

  const restartQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const result = showResult ? getEstimatedImpact() : null;

  const chartWidth = 640;
  const chartHeight = 260;
  const chartPadding = { top: 20, right: 20, bottom: 36, left: 44 };

  const buildLinePath = (points) =>
    points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`).join(" ");

  const getChartData = (projection) => {
    const plotWidth = chartWidth - chartPadding.left - chartPadding.right;
    const plotHeight = chartHeight - chartPadding.top - chartPadding.bottom;
    const maxValue = Math.max(...projection.map((item) => Math.max(item.erp, item.stack, item.manual, item.custom)));

    const toPoint = (value, index) => ({
      x: chartPadding.left + (index * plotWidth) / (projection.length - 1),
      y: chartPadding.top + (1 - value / maxValue) * plotHeight
    });

    const erpPoints = projection.map((item, index) => toPoint(item.erp, index));
    const stackPoints = projection.map((item, index) => toPoint(item.stack, index));
    const manualPoints = projection.map((item, index) => toPoint(item.manual, index));
    const customPoints = projection.map((item, index) => toPoint(item.custom, index));

    return {
      erpPoints,
      stackPoints,
      manualPoints,
      customPoints,
      maxValue,
      yTicks: [0.25, 0.5, 0.75, 1].map((ratio) => ({
        value: Math.round(maxValue * ratio),
        y: chartPadding.top + (1 - ratio) * plotHeight
      }))
    };
  };

  const chartData = result ? getChartData(result.yearlyProjection) : null;

  return (
    <Layout>
      <div className="py-12 max-w-3xl mx-auto">
        {!showResult ? (
          <>
            {/* Intro */}
            <div className="text-center mb-12">
              <h1 className="hero-title mb-4">Quiz de maturité numérique</h1>
              <p className="muted leading-relaxed">
                En moins de 1 minute, évaluez le niveau d'organisation digitale de votre entreprise
                et estimez les gains possibles grâce à un logiciel personnalisé.
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
                  className="bg-[#fef3c7] h-2 rounded-full transition-all duration-300"
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
                      answers[questions[currentQuestion].id] === option.value
                        ? 'border-[#151769] bg-[#fef3c7]/50'
                        : 'border-panel-2 hover:border-[#151769]/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={option.value}
                      checked={answers[questions[currentQuestion].id] === option.value}
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
                disabled={!answers[questions[currentQuestion].id]}
                className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                  !answers[questions[currentQuestion].id]
                    ? 'bg-panel text-muted cursor-not-allowed'
                    : 'bg-[#fef3c7] text-[#151769] hover:bg-[#fde68a]'
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
              <p className="muted">Estimation basée sur vos réponses au quiz d'organisation digitale.</p>
            </div>

            <div className="card-panel mb-8 text-center py-12">
              <h2 className="text-2xl font-bold mb-4">
                {result ? `Votre niveau : ${maturityLabels[result.profile]}` : "Votre niveau"}
              </h2>
              <p className="text-lg mb-3">
                Score de maturité estimé : <span className="font-semibold text-[#b45309]">{result?.maturityScore}%</span>
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6 text-left">
                <div className="rounded-xl border border-panel-2 p-4 bg-white">
                  <p className="text-xs uppercase tracking-wide muted">Coût caché annuel</p>
                  <p className="text-2xl font-bold text-[#151769] mt-1">{result ? formatEuro(result.annualWasteEstimate) : "-"}</p>
                </div>
                <div className="rounded-xl border border-[#fcd34d] bg-[#fffbeb] p-4">
                  <p className="text-xs uppercase tracking-wide muted">Gain récupérable sur 3 ans</p>
                  <p className="text-2xl font-bold text-[#b45309] mt-1">{result ? formatEuro(result.gain3YEstimate) : "-"}</p>
                </div>
                <div className="rounded-xl border border-panel-2 p-4 bg-white">
                  <p className="text-xs uppercase tracking-wide muted">Temps récupérable</p>
                  <p className="text-2xl font-bold text-[#151769] mt-1">{result ? `${result.monthlyHoursSaved} h/mois` : "-"}</p>
                  <p className="text-sm muted mt-1">{result ? `soit environ ${result.daysSavedPerYear} jours/an` : ""}</p>
                  <p className="text-sm text-[#b45309] mt-1">{result ? `Valeur estimée : ${formatEuro(result.annualGainEstimate)} / an` : ""}</p>
                </div>
              </div>
              <p className="muted text-sm max-w-2xl mx-auto">
                {result ? maturityDescriptions[result.profile] : ""}
              </p>
            </div>

            {result && (
              <div className="card-panel mb-8 py-8">
                <h3 className="text-xl font-semibold mb-2 text-center">Évolution des dépenses sur 5 ans</h3>
                <p className="muted text-sm text-center mb-6">
                  Projection indicative basée sur vos réponses : ERP standard, empilement d'outils, gestion manuelle et logiciel sur mesure Delven.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl border border-panel-2 p-4">
                    <p className="text-sm font-semibold text-[#151769] mb-2">Hypothèses de comparaison</p>
                    <p className="text-sm muted">Les scénarios standard incluent les abonnements, la coordination entre outils, et les coûts de friction opérationnelle.</p>
                    <p className="text-sm muted mt-2">Le scénario ERP ajoute un surcoût d'adaptation quand la croissance impose des besoins métier non natifs.</p>
                  </div>
                  <div className="rounded-xl border border-[#fcd34d] bg-[#fffbeb] p-4">
                    <p className="text-sm font-semibold text-[#b45309] mb-2">Lien avec la croissance</p>
                    <p className="text-sm muted">Quand l'entreprise grandit, les solutions non personnalisées imposent plus de ressaisies, plus de contrôle manuel et plus de contournements.</p>
                    <p className="text-sm muted mt-2">Le logiciel sur mesure absorbe mieux cette croissance avec des flux adaptés à votre organisation.</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full min-w-[640px] h-auto" role="img" aria-label="Graphique d'évolution des dépenses sur 5 ans">
                    {chartData?.yTicks.map((tick) => (
                      <g key={tick.value}>
                        <line x1={chartPadding.left} y1={tick.y} x2={chartWidth - chartPadding.right} y2={tick.y} stroke="#e5e7eb" strokeDasharray="4 4" />
                        <text x={8} y={tick.y + 4} fontSize="10" fill="#6b7280">
                          {Math.round(tick.value / 1000)}k
                        </text>
                      </g>
                    ))}

                    <polyline
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="3"
                      points={chartData?.manualPoints.map((point) => `${point.x},${point.y}`).join(" ")}
                    />
                    <polyline
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeDasharray="6 5"
                      points={chartData?.stackPoints.map((point) => `${point.x},${point.y}`).join(" ")}
                    />
                    <polyline
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="4"
                      points={chartData?.erpPoints.map((point) => `${point.x},${point.y}`).join(" ")}
                    />
                    <path
                      d={buildLinePath(chartData?.customPoints || [])}
                      fill="none"
                      stroke="#d97706"
                      strokeWidth="4"
                    />

                    {chartData?.erpPoints.map((point, index) => (
                      <g key={`standard-${index}`}>
                        <circle cx={point.x} cy={point.y} r="4" fill="#8b5cf6" />
                        <text x={point.x - 20} y={chartHeight - 12} fontSize="10" fill="#6b7280">
                          A{index + 1}
                        </text>
                      </g>
                    ))}

                    {chartData?.customPoints.map((point, index) => (
                      <circle key={`custom-${index}`} cx={point.x} cy={point.y} r="4" fill="#d97706" />
                    ))}
                  </svg>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#f3e8ff] text-[#6d28d9] border border-[#8b5cf6]">ERP standard</span>
                  <span className="px-3 py-1 rounded-full bg-[#dbeafe] text-[#1d4ed8] border border-[#3b82f6]">Empilement d'outils</span>
                  <span className="px-3 py-1 rounded-full bg-[#fee2e2] text-[#b91c1c] border border-[#ef4444]">Gestion manuelle/Excel</span>
                  <span className="px-3 py-1 rounded-full bg-[#fffbeb] text-[#b45309] border border-[#f59e0b]">Delven sur mesure</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="rounded-xl border border-panel-2 p-4">
                    <p className="text-sm muted">Option standard la plus probable (ERP) sur 5 ans</p>
                    <p className="text-xl font-semibold text-[#374151]">{formatEuro(result.totalErp5Y)}</p>
                  </div>
                  <div className="rounded-xl border border-[#fcd34d] bg-[#fffbeb] p-4">
                    <p className="text-sm muted">Dépense cumulée logiciel sur mesure Delven (5 ans)</p>
                    <p className="text-xl font-semibold text-[#b45309]">{formatEuro(result.totalCustom5Y)}</p>
                  </div>
                </div>

                <p className="mt-4 text-center text-base">
                  Économie potentielle sur 5 ans : <span className="font-semibold text-[#b45309]">{formatEuro(result.totalErp5Y - result.totalCustom5Y)}</span>
                </p>

                <p className="mt-2 text-center text-sm muted">
                  Plus votre activité grandit, plus les limitations des solutions standard (champs figés, workflows imposés, intégrations partielles) peuvent peser sur les coûts réels.
                </p>
              </div>
            )}

            {/* CTA final */}
            <div className="text-center card-panel py-8">
              <h3 className="text-lg font-semibold mb-4">
                Pour affiner ces chiffres avec une expertise humaine et obtenir vos priorités d'action, passez à l'audit gratuit.
              </h3>
              <p className="muted mb-6 max-w-2xl mx-auto">
                Le quiz donne une estimation rapide. L'audit gratuit permet de valider vos vrais gisements de gains selon vos processus, votre équipe et vos contraintes terrain.
              </p>
              <Link
                to="/audit"
                className="inline-block px-8 py-4 bg-[#fef3c7] text-[#151769] rounded-xl font-semibold hover:bg-[#fde68a] transition-colors"
              >
                Demander mon audit gratuit
              </Link>
              <button
                onClick={restartQuiz}
                className="block mt-4 mx-auto text-sm muted hover:text-white transition-colors"
              >
                Refaire le quiz
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
