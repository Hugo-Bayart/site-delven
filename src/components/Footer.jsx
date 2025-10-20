import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg, var(--panel) 0%, var(--panel-2) 100%)", color: "var(--text)" }}>
      <div className="mx-auto max-w-6xl px-4 py-8 text-center space-y-4">
        {/* Coordonnées en texte blanc simple */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 space-y-2 sm:space-y-0">
          <span>contact@delven.fr</span>
          <span>+33 07 89 51 15 01</span>
        </div>

        {/* Mention copyright */}
        <div className="text-sm muted">
          © {new Date().getFullYear()} Delven. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
