import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import QuestionsFrequentes from "./pages/QuestionsFrequentes";
import Audit from "./pages/Audit";
import Methode from "./pages/Methode";
import CasClientCticCongo from "./pages/CasClientCticCongo";
import Tarifs from "./pages/Tarifs";
import "./index.css"; // <-- Tailwind & styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/methode" element={<Methode />} />
          <Route path="/cas-client/ctic-congo" element={<CasClientCticCongo />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/questions-frequentes" element={<QuestionsFrequentes />} />
          <Route path="/audit" element={<Audit />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
