import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./MockupCarousel.module.css";

const mockups = [
  {
    img: "/mockups/delven-crm.png",
    label: "Gestion commerciale · CRM",
    sub: "Pipeline, clients, devis, relances",
  },
  {
    img: "/mockups/delven-stock.png",
    label: "Gestion des stocks",
    sub: "Articles, alertes, mouvements, fournisseurs",
  },
  {
    img: "/mockups/delven-dashboard.png",
    label: "Tableau de bord · Reporting",
    sub: "KPIs, CA, marges, répartition activité",
  },
  {
    img: "/mockups/delven-rh-planning.png",
    label: "RH & Planning",
    sub: "Équipes, congés, télétravail, absences",
  },
];

const modulo = (n, len) => ((n % len) + len) % len;

export default function MockupCarousel({ inline = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");
  const touchStartX = useRef(null);

  useEffect(() => {
    mockups.forEach((item) => {
      const image = new Image();
      image.src = item.img;
    });
  }, []);

  useEffect(() => {
    if (paused) return undefined;

    const interval = window.setInterval(() => {
      setSlideDirection("right");
      setActiveIndex((prev) => modulo(prev + 1, mockups.length));
    }, 4000);

    return () => window.clearInterval(interval);
  }, [paused]);

  const cards = useMemo(() => {
    return mockups.map((item, index) => {
      const rawDelta = index - activeIndex;
      let delta = rawDelta;
      if (delta > 2) delta -= mockups.length;
      if (delta < -2) delta += mockups.length;

      const abs = Math.abs(delta);
      const isActive = delta === 0;

      let transform = "translate(-50%, -50%) translateX(0px) translateZ(0px) rotateY(0deg) scale(1)";
      let opacity = 0.2;
      let zIndex = 10;

      if (isActive) {
        transform = "translate(-50%, -50%) translateX(0px) translateZ(80px) rotateY(0deg) scale(1)";
        opacity = 1;
        zIndex = 40;
      } else if (abs === 1) {
        const x = delta > 0 ? 255 : -255;
        const angle = delta > 0 ? -18 : 18;
        transform = `translate(-50%, -50%) translateX(${x}px) translateZ(20px) rotateY(${angle}deg) scale(0.82)`;
        opacity = 0.55;
        zIndex = 30;
      } else if (abs === 2) {
        const x = delta > 0 ? 365 : -365;
        const angle = delta > 0 ? -30 : 30;
        transform = `translate(-50%, -50%) translateX(${x}px) translateZ(-40px) rotateY(${angle}deg) scale(0.68)`;
        opacity = 0.2;
        zIndex = 20;
      }

      return {
        ...item,
        index,
        isActive,
        transform,
        opacity,
        zIndex,
      };
    });
  }, [activeIndex]);

  const goPrev = () => {
    setSlideDirection("left");
    setActiveIndex((prev) => modulo(prev - 1, mockups.length));
  };

  const goNext = () => {
    setSlideDirection("right");
    setActiveIndex((prev) => modulo(prev + 1, mockups.length));
  };

  const onTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 45) goPrev();
    if (deltaX < -45) goNext();
    touchStartX.current = null;
  };

  const active = mockups[activeIndex];

  return (
    <section
      className={`${styles.section} ${inline ? styles.sectionInlineBare : ""}`}
      aria-label="Nos logiciels en action"
    >
      {!inline ? <div className={styles.sectionGlow} /> : null}
      <div className={`${styles.container} ${inline ? styles.containerInline : ""}`}>
        <div
          className={styles.carouselRegion}
          role="region"
          aria-roledescription="carousel"
          aria-label="Carrousel de mockups logiciels Delven"
          onMouseEnter={() => {
            if (!inline) setPaused(true);
          }}
          onMouseLeave={() => {
            if (!inline) setPaused(false);
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {inline ? (
            <div className={`${styles.viewport} ${styles.viewportInlineSingle}`}>
              <img
                key={active.img}
                src={active.img}
                alt={active.label}
                loading="lazy"
                width="1200"
                height="900"
                className={`${styles.inlineSingleImage} ${
                  slideDirection === "right" ? styles.swipeFromRight : styles.swipeFromLeft
                }`}
              />
            </div>
          ) : (
            <div className={styles.viewport}>
              <div className={styles.track}>
                {cards.map((card) => (
                  <button
                    key={card.img}
                    type="button"
                    className={`${styles.card} ${card.isActive ? styles.cardActive : ""}`}
                    onClick={() => setActiveIndex(card.index)}
                    aria-label={`Slide ${card.index + 1} sur ${mockups.length} : ${card.label}`}
                    style={{
                      transform: card.transform,
                      opacity: card.opacity,
                      zIndex: card.zIndex,
                    }}
                  >
                    <img src={card.img} alt={card.label} loading="lazy" width="640" height="600" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
