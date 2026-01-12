import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function APropos() {
  const [cardsIndex, setCardsIndex] = React.useState(0);
  const [showAvis, setShowAvis] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleToggleAvis = () => {
    if (showAvis) {
      setIsClosing(true);
      setTimeout(() => {
        setShowAvis(false);
        setIsClosing(false);
      }, 1200);
    } else {
      setShowAvis(true);
    }
  };

  const cards = [
    {
      icon: "🎯",
      title: "Notre mission",
      content: (
        <>
          <p className="text-[15px] leading-relaxed mb-3 opacity-90">
            Rendre l'intelligence artificielle accessible, utile et rentable
            pour toutes les organisations, sans jargon ni complexité inutile.
          </p>
          <p className="text-[15px] leading-relaxed opacity-90">
            Nous créons des outils qui simplifient, automatisent
            et éclairent la prise de décision, dès les premières semaines d'usage.
          </p>
        </>
      )
    },
    {
      icon: "🌍",
      title: "Un engagement pour les pays émergents",
      content: (
        <>
          <p className="text-[15px] leading-relaxed mb-3 opacity-90">
            Nous concentrons une partie de notre énergie sur les pays émergents,
            notamment en Afrique, là où chaque solution numérique
            peut avoir un effet de levier spectaculaire.
          </p>
          <p className="text-[15px] leading-relaxed opacity-90">
            Notre ambition : devenir un partenaire clé du développement
            technologique des entreprises dans ces marchés.
          </p>
        </>
      )
    },
    {
      icon: "♻️",
      title: "Technologie & développement durable",
      content: (
        <>
          <p className="text-[15px] leading-relaxed mb-3 opacity-90">
            L'innovation ne doit pas s'opposer à la responsabilité.
            Nous intégrons le développement durable au cœur de notre approche.
          </p>
          <p className="text-[15px] leading-relaxed opacity-90">
            Automatiser et optimiser, c'est réduire le gaspillage
            de temps, de ressources et d'énergie.
          </p>
        </>
      )
    },
    {
      icon: "🚀",
      title: "Notre vision d'avenir",
      content: (
        <>
          <p className="text-[15px] leading-relaxed mb-3 opacity-90">
            Nous construisons un écosystème complet autour de l'IA :
          </p>
          <ul className="list-disc pl-5 text-[15px] leading-relaxed opacity-90 space-y-1">
            <li>Formation stratégique à l'IA.</li>
            <li>Logiciels internes comme Delven Score.</li>
            <li>Automatisation des processus métiers.</li>
            <li>Agents IA spécialisés pour chaque métier.</li>
            <li>Suite d'outils pensée pour les marchés en croissance.</li>
          </ul>
        </>
      )
    },
    {
      icon: "🤝",
      title: "Notre promesse",
      content: (
        <>
          <p className="text-[15px] leading-relaxed mb-3 opacity-90">Delven, c'est l'alliance de trois piliers :</p>
          <ul className="list-disc pl-5 text-[15px] leading-relaxed opacity-90 space-y-1">
            <li><strong>Simplicité</strong> : des solutions utilisables immédiatement.</li>
            <li><strong>Impact</strong> : des gains mesurables (temps, coûts, qualité).</li>
            <li><strong>Accessibilité</strong> : faire de l'IA un levier pour tous.</li>
          </ul>
        </>
      )
    }
  ];

  const cardsNext = () => {
    setCardsIndex((prev) => (prev + 1) % cards.length);
  };

  const cardsPrev = () => {
    setCardsIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };
  React.useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal-on-scroll");
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <section id="about" className="about">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          
          {/* HERO */}
          <div className="grid md:grid-cols-[1.6fr_1.2fr] gap-12 items-center mb-12 reveal-on-scroll">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-text">À propos</span><br/>
                <span className="text-text">de</span><br/>
                <span className="bg-[#151769] text-white px-2 py-0.5 inline-block rounded-lg">Delven</span>
              </h1>
              <p className="text-lg leading-relaxed mb-4 opacity-90">
                Delven est une entreprise technologique qui met l'intelligence artificielle
                au service de la performance des organisations, en France et dans les pays émergents.
              </p>
            </div>

            {/* VISUEL */}
            <div className="about-hero-visual">
              <div className="about-dashboard">
                <div className="about-dashboard-window floating">

                  <div className="about-dashboard-header">
                    <div className="about-dashboard-dots">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <span className="about-dashboard-title">Delven • IA Dashboard</span>
                  </div>

                  <div className="about-dashboard-body">
                    {/* Sidebar */}
                    <aside className="about-dashboard-sidebar">
                      <div className="sidebar-item is-active">Vue globale</div>
                      <div className="sidebar-item">Automatiser</div>
                      <div className="sidebar-item">Standardiser</div>
                      <div className="sidebar-item">Former</div>
                      <div className="sidebar-item">Optimiser</div>
                      <div className="sidebar-item">Pays émergents</div>
                    </aside>

                    {/* Contenu principal */}
                    <main className="about-dashboard-main">
                      {/* Graphique principal */}
                      <section className="about-dashboard-chart shimmer">
                        <div className="chart-header">
                          <span>Gains potentiels par levier</span>
                          <span className="chart-tag">Simulation IA</span>
                        </div>
                        <div className="chart-bars">
                          <div className="chart-bar bar-1"></div>
                          <div className="chart-bar bar-2"></div>
                          <div className="chart-bar bar-3"></div>
                          <div className="chart-bar bar-4"></div>
                        </div>
                        <div className="chart-legend">
                          <span>Automatiser</span>
                          <span>Standardiser</span>
                          <span>Former</span>
                          <span>Optimiser</span>
                        </div>
                      </section>

                      {/* Cartes de stats */}
                      <section className="about-dashboard-grid">
                        <article className="stat-card">
                          <p className="stat-label">Temps gagné / mois</p>
                          <p className="stat-value">+120 h</p>
                          <p className="stat-sub">Après déploiement des automatisations IA.</p>
                        </article>
                        <article className="stat-card">
                          <p className="stat-label">Erreurs réduites</p>
                          <p className="stat-value">-68%</p>
                          <p className="stat-sub">Sur les tâches répétitives et manuelles.</p>
                        </article>
                        <article className="stat-card">
                          <p className="stat-label">Pays émergents</p>
                          <p className="stat-value">Focus Afrique</p>
                          <p className="stat-sub">Des solutions adaptées aux réalités du terrain.</p>
                        </article>
                      </section>
                    </main>
                  </div>
                </div>
              </div>

              <p className="about-hero-caption">
                Un aperçu du type de tableaux de bord et d'outils IA que Delven
                conçoit pour révéler vos gains potentiels et guider vos décisions.
              </p>
            </div>
          </div>

          {/* FONDATEUR + SCHÉMA */}
          <div className="grid md:grid-cols-[1.1fr_1.6fr] gap-10 items-start mb-14 reveal-on-scroll">
            <aside className="bg-white rounded-3xl p-7 shadow-2xl border border-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/Photo.jpg" 
                  alt="Hugo Bayart" 
                  className="w-20 h-20 rounded-full object-cover shadow-lg"
                />
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-70 mb-1">Fondateur</p>
                  <h2 className="text-xl font-bold mb-1">Hugo Bayart</h2>
                  <p className="text-sm opacity-80">Entrepreneur & concepteur de solutions IA</p>
                </div>
              </div>
              <p className="text-[15px] leading-relaxed italic">
                « La technologie doit être un levier d'émancipation, pas une barrière.
                Avec Delven, mon objectif est de rendre l'IA accessible
                et utile à ceux qui en ont le plus besoin. »
              </p>
            </aside>

            {/* Stats */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Nos chiffres clés</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/95 rounded-2xl p-6 shadow-xl text-center">
                  <span className="block text-4xl font-bold text-[#151769] mb-2">5+</span>
                  <p className="text-sm opacity-80">Projets IA accompagnés</p>
                </div>
                <div className="bg-white/95 rounded-2xl p-6 shadow-xl text-center">
                  <span className="block text-4xl font-bold text-[#151769] mb-2">200+</span>
                  <p className="text-sm opacity-80">Heures gagnées par mois</p>
                </div>
                <div className="bg-white/95 rounded-2xl p-6 shadow-xl text-center">
                  <span className="block text-4xl font-bold text-[#151769] mb-2">3</span>
                  <p className="text-sm opacity-80">Pays ciblés en priorité</p>
                </div>
                <div className="bg-white/95 rounded-2xl p-6 shadow-xl text-center">
                  <span className="block text-4xl font-bold text-[#151769] mb-2">100%</span>
                  <p className="text-sm opacity-80">Satisfaction client</p>
                </div>
              </div>
            </div>
          </div>

          {/* CAROUSEL CARTES */}
          <div className="mb-14 reveal-on-scroll">
            <div className="flex items-center justify-end gap-6 relative">
              <button
                onClick={cardsPrev}
                className="p-2 bg-white text-[#151769] shadow-lg hover:shadow-xl transition-all hover:-translate-x-1 z-20 rounded-lg border border-gray-200"
                aria-label="Précédent"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>

              <div className="relative w-full max-w-2xl h-96 flex items-center justify-center" style={{ perspective: '1200px' }}>
                {cards.map((card, index) => {
                  const offset = index - cardsIndex;
                  const isActive = index === cardsIndex;
                  const isFar = Math.abs(offset) > 2;
                  return (
                    <div
                      key={index}
                      className="absolute w-full max-w-[85%] bg-white rounded-2xl p-7 shadow-xl border border-gray-200/60 transition-all duration-500"
                      style={{
                        transform: `translateX(${offset * 80}px) translateZ(${-20 * Math.abs(offset)}px) scale(${1 - 0.12 * Math.abs(offset)})`,
                        opacity: isFar ? 0.1 : 1 - 0.25 * Math.abs(offset),
                        zIndex: 10 - Math.abs(offset),
                        filter: isFar ? 'blur(2px)' : 'none',
                        pointerEvents: isActive ? 'auto' : 'none'
                      }}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#151769]/10 flex items-center justify-center mb-3 text-xl">{card.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                      {card.content}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={cardsNext}
                className="p-2 bg-white text-[#151769] shadow-lg hover:shadow-xl transition-all hover:translate-x-1 z-20 rounded-lg border border-gray-200"
                aria-label="Suivant"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>
            </div>
          </div>

          {/* CTA FINAL */}
          <div className="text-center max-w-2xl mx-auto reveal-on-scroll mb-14 bg-white rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-2">Travaillons ensemble</h2>
            <p className="text-lg leading-relaxed mb-5 opacity-90">
              Que vous soyez une entreprise en France, en Afrique ou ailleurs,
              nous serons ravis d'échanger sur vos besoins et de construire
              des solutions concrètes basées sur l'IA.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-[#151769] text-white rounded-xl font-semibold text-lg hover:bg-[#0f1150] transition-colors shadow-lg"
            >
              Discuter de votre projet
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
}
