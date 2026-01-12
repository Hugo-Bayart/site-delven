import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [elevated, setElevated] = useState(false);
  const lastY = useRef(0);
  const { pathname } = useLocation();

  useEffect(() => {
    setHidden(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setElevated(y > 8);
      if (y > lastY.current && y > 40) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 text-white transition-transform duration-300 will-change-transform bg-[#151769] ${
        hidden ? "-translate-y-full" : ""
      } ${elevated ? "shadow-md" : ""}`}
    >
      <div className="mx-auto max-w-6xl h-28 px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/logo-delven-outline.png"
              alt="Delven"
              className="h-20 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.replaceWith(
                  Object.assign(document.createElement("span"), {
                    textContent: "Delven",
                    className: "font-semibold text-2xl",
                  })
                );
              }}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link to="/" className="hover:text-accent transition-colors">
            Accueil
          </Link>
          <Link to="/quiz" className="hover:text-accent transition-colors">
            Quiz
          </Link>
          <Link to="/a-propos" className="hover:text-accent transition-colors">
            À propos
          </Link>
          <Link to="/contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
