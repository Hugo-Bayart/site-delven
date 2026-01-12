import React from "react";
import { Link } from "react-router-dom";
import Layout from "./components/Layout";
import { 
  CogIcon, 
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

export default function App() {
  const [currentCase, setCurrentCase] = React.useState(0);

  const casesUsage = [
    {
      category: "Développement logiciel",
      title: "Application métier sur mesure",
      description: "→ Gestion centralisée des données, workflows automatisés, gain de productivité."
    },
    {
      category: "Automatisation",
      title: "Automatisation de tâches internes",
      description: "→ Gain de temps significatif sur des opérations répétitives."
    },
    {
      category: "IA appliquée",
      title: "Outil d'aide à la décision basé sur les données",
      description: "→ Vision claire des leviers de performance et du ROI."
    },
    {
      category: "Stabilisation IT",
      title: "Mise en conformité et sécurisation",
      description: "→ Réduction des risques, amélioration de la crédibilité et stabilité des systèmes."
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % casesUsage.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + casesUsage.length) % casesUsage.length);
  };

  return (
    <>
      <Layout showHeader={false}>
        {/* Hero Section with integrated header */}
        <section className="bg-[#151769] relative overflow-hidden pb-20">
          {/* Subtle background pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
                repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)
              `
            }}
          />
          
          {/* Header */}
          <header className="w-full py-6 px-8 md:px-16 relative z-10">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <Link to="/">
                <img src="/logo-delven-outline.png" alt="Delven" className="h-12" />
              </Link>
              <nav className="flex items-center gap-8">
                <Link to="/a-propos" className="text-white/90 hover:text-white transition-colors">À propos</Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-2.5 bg-[#fef3c7] text-[#151769] rounded-full font-semibold hover:bg-[#fde68a] transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          {/* Hero content */}
          <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                  Votre développeur sur mesure
                </h1>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-3 text-white/90">
                    <ComputerDesktopIcon className="h-8 w-8" />
                    <span className="text-sm font-medium">Logiciel</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <DevicePhoneMobileIcon className="h-8 w-8" />
                    <span className="text-sm font-medium">App mobile</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <GlobeAltIcon className="h-8 w-8" />
                    <span className="text-sm font-medium">Site web</span>
                  </div>
                </div>

                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  Du développement logiciel à l'intelligence artificielle, nous concevons des outils utiles, durables et orientés performance.
                </p>
              </div>

              {/* Right Image with geometric shape */}
              <div className="relative max-w-md mx-auto">
                <div 
                  className="relative overflow-hidden"
                  style={{
                    clipPath: 'polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)',
                  }}
                >
                  <img 
                    src="/AZr_KsPQH9eWcqFqR5pYgw-AZr_KsPQ4O_oMG-ylwItVA.jpg" 
                    alt="Transformation digitale"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom logos/features bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#0f1150] py-6">
            <div className="max-w-7xl mx-auto px-8 md:px-16 flex justify-around items-center flex-wrap gap-6">
              <div className="flex items-center gap-3 text-white/90">
                <CogIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Automatisation</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <AcademicCapIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Formation</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <ChartBarIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Analyse</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <RocketLaunchIcon className="h-8 w-8" />
                <span className="text-sm font-medium">Déploiement</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION — QUIZ DE MATURITÉ NUMÉRIQUE */}
        <section className="py-20 px-8 md:px-16 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Évaluez votre maturité numérique
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Découvrez où en est votre entreprise dans sa transformation digitale grâce à notre quiz gratuit de maturité numérique.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  En quelques minutes, obtenez un diagnostic personnalisé de vos forces et axes d'amélioration : 
                  processus, outils, données, automatisation et stratégie digitale.
                </p>
                <Link 
                  to="/quiz" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#151769] text-white rounded-xl font-semibold text-lg hover:bg-[#0f1150] transition-colors shadow-lg"
                >
                  Faire le quiz gratuit
                  <RocketLaunchIcon className="h-5 w-5" />
                </Link>
              </div>
              <div className="bg-gray-100 rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#151769] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Diagnostic rapide</h3>
                      <p className="text-gray-700">5 à 10 minutes pour évaluer votre situation actuelle</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#151769] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Résultats personnalisés</h3>
                      <p className="text-gray-700">Score détaillé et recommandations ciblées</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#151769] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Plan d'action</h3>
                      <p className="text-gray-700">Prochaines étapes pour progresser efficacement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION — LES BRIQUES DELVEN */}
        <section className="py-20 px-8 md:px-16 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {/* Bloc secondaire : IA & automatisation */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#151769] rounded-2xl flex items-center justify-center mb-6">
                  <RocketLaunchIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">IA & automatisation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Intégration d'intelligence artificielle et d'automatisations pour enrichir et accélérer les solutions logicielles.
                </p>
              </div>

              {/* Bloc central : Logiciels & applications */}
              <div className="bg-[#151769] rounded-3xl p-10 shadow-2xl transform md:scale-110 relative z-10">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6">
                  <WrenchScrewdriverIcon className="h-10 w-10 text-[#151769]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Logiciels & applications</h3>
                <p className="text-white/90 leading-relaxed">
                  Conception et développement de logiciels métiers, applications web et outils internes sur mesure.
                </p>
              </div>

              {/* Bloc secondaire : Services informatiques */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#151769] rounded-2xl flex items-center justify-center mb-6">
                  <CogIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services informatiques</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stabilité, maintenance et accompagnement pour sécuriser les systèmes et les solutions développées.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION — NOTRE APPROCHE */}
        <section className="py-20 px-8 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
              Une approche progressive et orientée résultats
            </h2>

            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#151769] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Structurer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Clarifier les besoins, définir les fondations techniques et concevoir une architecture solide.
                </p>
              </div>

              {/* Flèche */}
              <div className="hidden md:flex justify-center items-center">
                <svg className="w-12 h-12 text-[#151769]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#151769] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimiser</h3>
                <p className="text-gray-700 leading-relaxed">
                  Améliorer les processus, automatiser les tâches répétitives et renforcer la performance.
                </p>
              </div>

              {/* Flèche */}
              <div className="hidden md:flex justify-center items-center">
                <svg className="w-12 h-12 text-[#151769]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#151769] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transformer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Intégrer l'IA et les innovations pour faire évoluer durablement les capacités de l'entreprise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION — EXEMPLES DE CAS D'USAGE */}
        <section className="py-20 bg-[#151769] relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
                repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)
              `
            }}
          />
          
          <div className="relative z-10 w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white px-8">
              Exemples de cas d'usage
            </h2>

            {/* Carousel */}
            <div className="relative overflow-hidden">
              {/* Flèche gauche */}
              <button
                onClick={prevCase}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Cas précédent"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Flèche droite */}
              <button
                onClick={nextCase}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Cas suivant"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div 
                key={currentCase}
                className="text-center py-12 px-24 min-h-[400px] flex flex-col justify-center"
                style={{
                  animation: 'slideIn 0.5s ease-out'
                }}
              >
                <div className="text-sm text-white/70 mb-4 uppercase tracking-wide">
                  {casesUsage[currentCase].category}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto">
                  {casesUsage[currentCase].title}
                </h3>
                <p className="text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  {casesUsage[currentCase].description}
                </p>
              </div>

              <style jsx>{`
                @keyframes slideIn {
                  from {
                    opacity: 0;
                    transform: translateX(100%);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
              `}</style>

              {/* Indicateurs en bas */}
              <div className="flex items-center justify-center gap-2 pb-8">
                {casesUsage.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentCase ? 'bg-white' : 'bg-white/30'
                    }`}
                    aria-label={`Aller au cas ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION — VISION & INTERNATIONAL */}
        <section className="py-20 px-8 md:px-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Une vision tournée vers l'international
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Delven accompagne des entreprises en croissance, en France et à l'international, notamment dans des contextes où
              la structuration digitale et l'optimisation des processus sont des leviers stratégiques forts.
            </p>
          </div>
        </section>

        {/* SECTION — CALL TO ACTION FINAL */}
        <section className="bg-[#151769] relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
                repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)
              `
            }}
          />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white py-20 px-8 md:px-16 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-10">
              Vous avez un besoin précis ou un projet à structurer ?
              Discutons ensemble de la solution logicielle la plus adaptée.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#151769] rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Nous contacter
            </Link>
          </div>

          {/* Deux images cliquables pleine largeur */}
          <div className="relative z-10 grid md:grid-cols-2">
            <Link 
              to="/intelligence-artificielle" 
              className="group relative overflow-hidden transition-transform hover:scale-105"
            >
              <img 
                src="/Intelligence%20artificielle.png" 
                alt="Intelligence Artificielle"
                className="w-full h-auto"
              />
            </Link>
            <Link 
              to="/services-informatiques" 
              className="group relative overflow-hidden transition-transform hover:scale-105"
            >
              <img 
                src="/Services%20informatiques.png" 
                alt="Services Informatiques"
                className="w-full h-auto"
              />
            </Link>
          </div>
        </section>

        {/* SECTION — VISION & INTERNATIONAL */}
        <section className="py-20 px-8 md:px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Une vision internationale, une approche locale
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Delven accompagne les entreprises en France et à l'international, avec une expertise technique solide et un ancrage local en Guadeloupe.
            </p>
          </div>
        </section>

      </Layout>
    </>
  );
}