import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const { pathname } = useLocation();

  useEffect(() => {
    setHidden(false);
    setMenuOpen(false);
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

        <div className="relative flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="px-4 py-2.5 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            Menu
          </button>

          {menuOpen && (
            <nav
              className="absolute right-0 top-14 w-56 bg-white text-gray-900 rounded-2xl shadow-2xl border border-gray-200 p-3"
              aria-label="Navigation principale"
            >
              <div className="flex flex-col text-sm">
                <Link to="/" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">Accueil</Link>
                <Link to="/a-propos" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">À propos</Link>
                <Link to="/methode" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">Méthode</Link>
                <Link to="/cas-client/ctic-congo" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">Cas client</Link>
                <Link to="/tarifs" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">Tarifs</Link>
                <Link to="/questions-frequentes" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">FAQ</Link>
                <Link to="/contact" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">Contact</Link>
                <div className="my-2 border-t border-gray-200" />
                <Link
                  to="/audit"
                  className="px-3 py-2.5 rounded-lg bg-[#fef3c7] text-[#151769] font-semibold hover:bg-[#fde68a] transition-colors text-center"
                >
                  Audit gratuit
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
