import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, var(--panel) 0%, var(--panel-2) 100%)", color: "var(--text)" }}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Company info */}
          <div>
            <h3 className="font-bold text-xl mb-2">Delven</h3>
            <p className="text-sm muted">
              Solutions IA, audit, formations et développement logiciel sur mesure.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="font-semibold mb-3">Liens rapides</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-accent transition-colors">Accueil</Link>
              <Link to="/quiz" className="hover:text-accent transition-colors">Quiz</Link>
              <Link to="/a-propos" className="hover:text-accent transition-colors">À propos</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm">
              <span>contact@delven.fr</span>
              <span>+33 07 89 51 15 01</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm muted">
          <div>
            © {new Date().getFullYear()} Delven. Tous droits réservés.
          </div>
          <div className="flex gap-4">
            <Link to="/mentions-legales" className="hover:text-accent transition-colors">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-accent transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
