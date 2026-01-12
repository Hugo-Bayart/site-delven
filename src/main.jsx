import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Quiz from "./pages/Quiz";
import AuditIA from "./pages/AuditIA";
import FormationsIA from "./pages/FormationsIA";
import DeveloppementIA from "./pages/DeveloppementIA";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import IntelligenceArtificielle from "./pages/IntelligenceArtificielle";
import ServicesInformatiques from "./pages/ServicesInformatiques";
import "./index.css"; // <-- Tailwind & styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/intelligence-artificielle" element={<IntelligenceArtificielle />} />
        <Route path="/services-informatiques" element={<ServicesInformatiques />} />
        <Route path="/offres/audit-ia" element={<AuditIA />} />
        <Route path="/offres/formations-ia" element={<FormationsIA />} />
        <Route path="/offres/developpement-ia" element={<DeveloppementIA />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
