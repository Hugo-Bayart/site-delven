import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function APropos() {
  const [cardsIndex, setCardsIndex] = React.useState(0);

  const cards = [
    {
      icon: "ðŸŽ¯",
      title: "Notre mission",
      content: (
        <>
          <p className="text-[15px] leading-relaxed mb-3 text-gray-600">
            Transformer les processus manuels des PME en logiciels sur mesure â€” ergonomiques,
            simples, efficaces â€” qui amÃ©liorent concrÃ¨tement le quotidien des Ã©quipes.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-600">
            Nous ne vendons pas des logiciels. Nous construisons des outils que vos Ã©quipes
            adoptent immÃ©diatement parce qu'ils ont Ã©tÃ© pensÃ©s pour elles.
          </p>
        </>
      ),
    },
    {
      icon: "ðŸŒ",
      title: "Un engagement international",
      content: (
        <>
          <p className="text-[15px] leading-relaxed mb-3 text-gray-600">
            Nous travaillons avec des entreprises en France et dans les pays Ã©mergents,
            notamment en Afrique, lÃ  oÃ¹ chaque solution numÃ©rique peut avoir un effet de levier
            spectaculaire.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-600">
            Notre ambition : devenir le partenaire technologique de rÃ©fÃ©rence pour les PME
            en croissance, quelle que soit leur gÃ©ographie.
          </p>
        </>
      ),
    },
    {
      icon: "ðŸ”",
      title: "L'audit avant tout",
      Content: null,
      content: (
        <>
          <p className="text-[15px] leading-relaxed mb-3 text-gray-600">
            Avant de coder une seule ligne, nous analysons vos processus avec vous. Cette Ã©tape
            d'audit â€” gratuite et sans engagement â€” est ce qui nous permet de proposer des
            solutions qui changent vraiment les choses.
          </p>
          <p className="text-[15px] leading-relaxed text-gray-600">
            RÃ©sultat : des logiciels qui s'adaptent Ã  votre mÃ©tier, pas l'inverse.
          </p>
        </>
      ),
    },
    {
      icon: "ðŸš€",
      title: "Notre vision",
      content: (
        <ul className="space-y-2 text-[15px] text-gray-600">
          {["Logiciels mÃ©tier sur mesure", "Automatisation des processus rÃ©pÃ©titifs", "Tableaux de bord en temps rÃ©el", "Accompagnement long terme"].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircleIcon className="h-4 w-4 text-[#151769] flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: "ðŸ¤",
      title: "Notre promesse",
      content: (
        <ul className="space-y-2 text-[15px] text-gray-600">
          {[
            ["SimplicitÃ©", "des logiciels utilisables immÃ©diatement, sans formation lourde."],
            ["Impact", "des gains mesurables en temps, en coÃ»ts et en qualitÃ©."],
            ["ProximitÃ©", "un interlocuteur unique qui suit votre projet de l'audit Ã  la mise en production."],
          ].map(([k, v]) => (
            <li key={k}><strong className="text-gray-800">{k}</strong> â€” {v}</li>
          ))}
        </ul>
      ),
    },
  ];

  const cardsNext = () => setCardsIndex((prev) => (prev + 1) % cards.length);
  const cardsPrev = () => setCardsIndex((prev) => (prev - 1 + cards.length) % cards.length);

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
      {/* â”€â”€ HERO â”€â”€ */}
      <section className="bg-[#151769] py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="text-white">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 bg-white/10 border border-white/20 text-white/80">
              Qui sommes-nous
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Nous transformons vos processus en{" "}
              <span className="text-[#fde68a]">logiciels sur mesure</span>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
              Delven est une Ã©quipe de dÃ©veloppeurs et consultants spÃ©cialisÃ©s dans la crÃ©ation
              de logiciels internes pour les PME en croissance â€” une alternative concrÃ¨te aux ERP
              rigides et aux tableurs Excel.
            </p>
            <Link
              to="/audit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#fef3c7] text-[#151769] rounded-xl font-bold text-base hover:bg-[#fde68a] transition-colors shadow-lg"
            >
              Demander l'audit gratuit â†’
            </Link>
          </div>

          {/* Dashboard animÃ© */}
          <div className="about-hero-visual">
            <div className="about-dashboard">
              <div className="about-dashboard-window floating">
                <div className="about-dashboard-header">
                  <div className="about-dashboard-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <span className="about-dashboard-title">Delven â€¢ Logiciel mÃ©tier</span>
                </div>
                <div className="about-dashboard-body">
                  <aside className="about-dashboard-sidebar">
                    <div className="sidebar-item is-active">Vue globale</div>
                    <div className="sidebar-item">Automatiser</div>
                    <div className="sidebar-item">Standardiser</div>
                    <div className="sidebar-item">Former</div>
                    <div className="sidebar-item">Optimiser</div>
                    <div className="sidebar-item">Reporting</div>
                  </aside>
                  <main className="about-dashboard-main">
                    <section className="about-dashboard-chart shimmer">
                      <div className="chart-header">
                        <span>Gains potentiels par levier</span>
                        <span className="chart-tag">Simulation</span>
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
                    <section className="about-dashboard-grid">
                      <article className="stat-card">
                        <p className="stat-label">Temps gagnÃ© / mois</p>
                        <p className="stat-value">+120 h</p>
                        <p className="stat-sub">AprÃ¨s automatisation des processus.</p>
                      </article>
                      <article className="stat-card">
                        <p className="stat-label">Erreurs rÃ©duites</p>
                        <p className="stat-value">-68%</p>
                        <p className="stat-sub">Sur les tÃ¢ches rÃ©pÃ©titives.</p>
                      </article>
                      <article className="stat-card">
                        <p className="stat-label">Adoption Ã©quipe</p>
                        <p className="stat-value">100%</p>
                        <p className="stat-sub">Outil pensÃ© pour les utilisateurs.</p>
                      </article>
                    </section>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* â”€â”€ FONDATEUR + CHIFFRES â”€â”€ */}
          <div className="grid md:grid-cols-2 gap-10 items-start mb-20 reveal-on-scroll">
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
              <div className="flex items-center gap-5 mb-6">
                <img
                  src="/Photo.jpg"
                  alt="Hugo Bayart"
                  className="w-20 h-20 rounded-full object-cover shadow-lg ring-4 ring-white"
                />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Fondateur</p>
                  <h2 className="text-xl font-bold text-gray-900">Hugo Bayart</h2>
                  <p className="text-sm text-gray-500">Entrepreneur & dÃ©veloppeur de logiciels mÃ©tier</p>
                </div>
              </div>
              <blockquote className="text-gray-700 text-[15px] leading-relaxed italic border-l-4 border-[#151769] pl-4">
                Â« La technologie doit simplifier la vie des Ã©quipes, pas la compliquer.
                Chaque logiciel que nous crÃ©ons doit Ãªtre plus simple, plus rapide et plus agrÃ©able
                que ce qu'il remplace. Â»
              </blockquote>
            </div>

            <div>
              <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">En chiffres</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ce que nous avons accompli</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "5+", label: "Projets accompagnÃ©s" },
                  { val: "200+", label: "Heures gagnÃ©es / mois" },
                  { val: "3", label: "Pays actifs" },
                  { val: "100%", label: "Satisfaction client" },
                ].map(({ val, label }) => (
                  <div key={label} className="bg-[#151769] rounded-2xl p-6 text-center text-white">
                    <span className="block text-4xl font-black text-[#fde68a] mb-1">{val}</span>
                    <p className="text-sm text-white/75">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* â”€â”€ CAROUSEL â”€â”€ */}
          <div className="mb-20 reveal-on-scroll">
            <div className="text-center mb-10">
              <p className="text-[#151769] font-semibold uppercase tracking-widest text-sm mb-3">Notre ADN</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ce qui nous dÃ©finit</h2>
            </div>

            <div className="flex items-center justify-center gap-6">
              <button
                onClick={cardsPrev}
                className="p-2.5 bg-white border border-gray-200 text-[#151769] shadow-md hover:shadow-lg rounded-xl transition-all hover:-translate-x-0.5 flex-shrink-0"
                aria-label="PrÃ©cÃ©dent"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>

              <div className="relative flex-1 max-w-2xl h-80" style={{ perspective: "1000px" }}>
                {cards.map((card, index) => {
                  const offset = index - cardsIndex;
                  const isFar = Math.abs(offset) > 2;
                  return (
                    <div
                      key={index}
                      className="absolute inset-x-0 mx-auto w-full max-w-[90%] bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transition-all duration-500"
                      style={{
                        transform: `translateX(${offset * 70}px) translateZ(${-18 * Math.abs(offset)}px) scale(${1 - 0.1 * Math.abs(offset)})`,
                        opacity: isFar ? 0 : 1 - 0.28 * Math.abs(offset),
                        zIndex: 10 - Math.abs(offset),
                        pointerEvents: index === cardsIndex ? "auto" : "none",
                      }}
                    >
                      <div className="w-11 h-11 bg-[#151769]/10 rounded-xl flex items-center justify-center mb-4 text-xl">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                      {card.content}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={cardsNext}
                className="p-2.5 bg-white border border-gray-200 text-[#151769] shadow-md hover:shadow-lg rounded-xl transition-all hover:translate-x-0.5 flex-shrink-0"
                aria-label="Suivant"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCardsIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === cardsIndex ? "bg-[#151769] w-6" : "bg-gray-300 w-2"}`}
                />
              ))}
            </div>
          </div>

          {/* â”€â”€ CTA FINAL â”€â”€ */}
          <div className="reveal-on-scroll">
            <div className="bg-[#151769] rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
                }}
              />
              <div className="relative z-10">
                <p className="text-[#fde68a] font-semibold uppercase tracking-widest text-sm mb-4">Passons Ã  l'action</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Parlons de votre projet</h2>
                <p className="text-white/75 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  Audit gratuit de vos processus Â· Proposition sur mesure Â· Sans engagement.
                  La premiÃ¨re conversation ne vous coÃ»te rien â€” elle peut changer beaucoup.
                </p>
                <Link
                  to="/audit"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-[#fef3c7] text-[#151769] rounded-xl font-bold text-lg hover:bg-[#fde68a] transition-colors shadow-lg"
                >
                  Demander mon audit gratuit â†’
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
