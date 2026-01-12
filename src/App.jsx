import React from "react";
import { Link } from "react-router-dom";
import Layout from "./components/Layout";
import { 
  CogIcon, 
  AcademicCapIcon, 
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  RocketLaunchIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

export default function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [accompIndex, setAccompIndex] = React.useState(0);

  React.useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal-on-scroll");
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
  const missions = [
    {
      icon: CogIcon,
      title: "Automatiser vos tâches répétitives",
      description: "Libérez du temps précieux en automatisant les processus chronophages et à faible valeur ajoutée."
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Standardiser vos processus",
      description: "Harmonisez vos méthodes de travail pour gagner en efficacité et en qualité."
    },
    {
      icon: AcademicCapIcon,
      title: "Simplifier votre fonctionnement",
      description: "Rendez vos opérations plus fluides et intuitives grâce à des outils adaptés à vos besoins."
    }
  ];

  const accompCards = [
    {
      title: "Audit & diagnostic",
      description: "On analyse vos processus, vos outils et vos données pour identifier les meilleurs leviers IA à activer."
    },
    {
      title: "Design de solutions",
      description: "On imagine avec vous les scénarios concrets : automatisations, tableaux de bord, assistants IA, etc."
    },
    {
      title: "Prototypage rapide",
      description: "On crée un prototype cliquable ou fonctionnel pour valider la valeur avant d'investir plus."
    },
    {
      title: "Déploiement & formation",
      description: "On intègre la solution dans votre quotidien, on forme vos équipes et on reste disponible pour les ajustements."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % missions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + missions.length) % missions.length);
  };

  const accompNext = () => {
    setAccompIndex((prev) => (prev + 1) % accompCards.length);
  };

  const accompPrev = () => {
    setAccompIndex((prev) => (prev - 1 + accompCards.length) % accompCards.length);
  };

  return (
    <>
      {/* Barre de navigation */}
      <header className="w-full bg-white py-4 px-8 md:px-16">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src="/logo-delven.png" alt="Delven" className="h-12" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/a-propos" className="text-gray-700 hover:text-[#151769] transition-colors">À propos</Link>
            <Link to="/quiz" className="text-gray-700 hover:text-[#151769] transition-colors">Quiz</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#151769] transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <Layout showHeader={false}>
        {/* Hero Section */}
        <section className="min-h-screen flex items-start pt-20 px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div>
            {/* Hero Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-text">Votre</span><br/>
                <span className="text-text">Développeur</span><br/>
                <span className="text-text">Numérique</span><br/>
                <span className="bg-[#151769] text-white px-2 py-0.5 inline-block rounded-lg">Externe</span>
              </h1>
              
              <p className="text-lg muted leading-relaxed mb-10 max-w-xl">
                Nous accompagnons les entreprises dans leur transition numérique et IA. 
                Automatisez vos processus, formez vos équipes et créez des outils sur mesure.
              </p>
              
              <Link 
                to="/quiz" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#151769] text-white rounded-full font-semibold hover:bg-[#0f1150] transition-colors shadow-lg"
              >
                <span>→</span>
                <span>Faire le quiz de maturité numérique</span>
              </Link>
            </div>
          </div>

          {/* Right Video */}
          <div className="relative">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/AZr_KsPQH9eWcqFqR5pYgw-AZr_KsPQ4O_oMG-ylwItVA.jpg" 
                alt="Before After Preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

        {/* Notre mission */}
        <section className="min-h-screen bg-[#151769] py-16 px-8 md:px-16 flex items-center justify-center relative">
        <button 
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all z-10"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>

        <div className="max-w-4xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Notre mission ?</h2>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {missions.map((mission, index) => {
                const Icon = mission.icon;
                return (
                  <div
                    key={index}
                    className="min-w-full flex-shrink-0"
                  >
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold text-4xl md:text-5xl mb-6 text-white">{mission.title}</h3>
                    <p className="text-white/90 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                      {mission.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3 justify-center mt-12">
            {missions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        <button 
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all z-10"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </section>

        {/* Comment on vous accompagne */}
        <section className="py-20 px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Photo/Video placeholder */}
          <div className="relative">
            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
              <p className="text-gray-400 text-lg">Photo ou vidéo</p>
            </div>
          </div>

          {/* Right: Title + Carousel */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Comment on vous accompagne</h2>
            <p className="mb-10 opacity-80">
              De l'idée au déploiement, on vous accompagne étape par étape.
            </p>

            <div className="flex items-center justify-center gap-6 relative">
              <button
                onClick={accompPrev}
                className="p-2 bg-white text-[#151769] shadow-lg hover:shadow-xl transition-all hover:-translate-x-1 z-20 rounded-lg border border-gray-200"
                aria-label="Précédent"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>

              <div className="relative w-full max-w-md h-80 flex items-center justify-center" style={{ perspective: '1200px' }}>
                {accompCards.map((card, index) => {
                  const offset = index - accompIndex;
                  const isActive = index === accompIndex;
                  const isFar = Math.abs(offset) > 2;
                  return (
                    <div
                      key={index}
                      className="absolute w-full max-w-[90%] p-7 rounded-3xl bg-[#151769] text-white shadow-2xl transition-all duration-500"
                      style={{
                        transform: `translateX(${offset * 80}px) translateZ(${-20 * Math.abs(offset)}px) scale(${1 - 0.12 * Math.abs(offset)})`,
                        opacity: isFar ? 0.1 : 1 - 0.25 * Math.abs(offset),
                        zIndex: 10 - Math.abs(offset),
                        filter: isFar ? 'blur(2px)' : 'none',
                        pointerEvents: isActive ? 'auto' : 'none'
                      }}
                    >
                      <h3 className="font-semibold text-xl mb-2.5">{card.title}</h3>
                      <p className="text-[15px] leading-relaxed opacity-90">{card.description}</p>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={accompNext}
                className="p-2 bg-white text-[#151769] shadow-lg hover:shadow-xl transition-all hover:translate-x-1 z-20 rounded-lg border border-gray-200"
                aria-label="Suivant"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Final */}
        <section className="py-20 text-center px-8 md:px-16">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Estimez vos gains potentiels grâce à l'IA
        </h2>
        <p className="text-lg muted leading-relaxed max-w-2xl mx-auto mb-8">
          Répondez à un quiz rapide pour mesurer votre maturité numérique et découvrir 
          combien l'IA peut vous faire gagner.
        </p>
        <Link 
          to="/quiz" 
          className="inline-block px-10 py-5 bg-[#151769] text-white rounded-xl font-semibold text-lg hover:bg-[#0f1150] transition-colors shadow-lg"
        >
          Lancer le quiz gratuit
        </Link>
        </section>
      </Layout>
    </>
  );
}

