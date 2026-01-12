import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { 
  CogIcon, 
  AcademicCapIcon, 
  ClipboardDocumentCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

export default function IntelligenceArtificielle() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [accompIndex, setAccompIndex] = useState(0);

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
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-8 md:px-16 bg-[#151769] relative overflow-hidden">
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
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Intelligence Artificielle</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Automatisation, optimisation et innovation grâce à l'IA pour transformer votre entreprise
          </p>
        </div>
      </section>

      {/* Notre mission */}
      <section className="py-16 px-8 md:px-16 bg-gray-200 flex items-center justify-center relative">
        <button 
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-all z-10"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
        </button>

        <div className="w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">Notre mission</h2>
          
          <div className="relative overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {missions.map((mission, index) => {
                const Icon = mission.icon;
                return (
                  <div
                    key={index}
                    className="min-w-full flex-shrink-0 px-4"
                  >
                    <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-8">
                      <Icon className="h-10 w-10 text-[#151769]" />
                    </div>
                    <h3 className="font-bold text-4xl md:text-5xl mb-6 text-gray-900">{mission.title}</h3>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
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
                  index === currentSlide ? 'bg-[#151769] w-8' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <button 
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-all z-10"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-700" />
        </button>
      </section>

      {/* Comment on vous accompagne */}
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Comment on vous accompagne</h2>
          <p className="mb-12 opacity-80 text-center text-lg">
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
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center px-8 md:px-16 bg-[#151769] relative overflow-hidden">
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
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold tracking-tight mb-6 text-white">
            Estimez vos gains potentiels grâce à l'IA
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Répondez à un quiz rapide pour mesurer votre maturité numérique et découvrir 
            combien l'IA peut vous faire gagner.
          </p>
          <Link 
            to="/quiz" 
            className="inline-block px-10 py-5 bg-white text-[#151769] rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Lancer le quiz gratuit
          </Link>
        </div>
      </section>
    </Layout>
  );
}
