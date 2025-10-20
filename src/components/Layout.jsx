import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }} className="min-h-screen">
      <Header />
      {/* pt-28 = espace sous le header (h-28) */}
      <main className="mx-auto max-w-6xl px-4 pt-28 pb-16">{children}</main>
      <Footer />
    </div>
  );
}
