import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, showHeader = true }) {
  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }} className="min-h-screen">
      {showHeader && <Header />}
      <main className={`${showHeader ? 'pt-28' : 'pt-0'}`}>{children}</main>
      <Footer />
    </div>
  );
}
