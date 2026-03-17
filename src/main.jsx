import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css"; // <-- Tailwind & styles

const APropos = lazy(() => import("./pages/APropos"));
const Contact = lazy(() => import("./pages/Contact"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const QuestionsFrequentes = lazy(() => import("./pages/QuestionsFrequentes"));
const Audit = lazy(() => import("./pages/Audit"));
const Methode = lazy(() => import("./pages/Methode"));
const CasClientCticCongo = lazy(() => import("./pages/CasClientCticCongo"));
const Tarifs = lazy(() => import("./pages/Tarifs"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={null}>
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
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
