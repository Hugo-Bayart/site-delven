import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  BoltIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          phone: form.telephone,
          message: form.message,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setSent(true);
      setForm({ nom: "", email: "", telephone: "", message: "" });
    } catch (err) {
      setError(err.message || "Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact | Delven</title>
        <meta name="description" content="Une question ? Un projet ? Contactez Delven. Réponse sous 24h ouvrées." />
      </Helmet>

      <section className="bg-[#151769] relative overflow-hidden py-20 px-8 md:px-16">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
              repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)
            `,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Parlons de votre projet</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Une question, une idée, un besoin ? Écrivez-nous, on répond sous 24h.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Formulaire</h2>

          <div className="max-w-2xl mx-auto">
            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                <p className="text-gray-600 text-sm">On revient vers vous très vite.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full grid gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
              >
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nom complet *</label>
                  <input
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                    placeholder="jean@entreprise.fr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Téléphone</label>
                  <input
                    type="text"
                    name="telephone"
                    value={form.telephone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent"
                    placeholder="+33 7 89 51 15 01"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Votre message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#151769] focus:border-transparent resize-none"
                    placeholder="Décrivez brièvement votre besoin ou posez votre question..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-3 rounded-xl text-white font-medium bg-[#151769] hover:bg-[#0f1150] transition-colors disabled:opacity-50"
                >
                  {loading ? "Envoi en cours..." : "Envoyer"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vous préférez un autre canal ?</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-3">
              <EnvelopeIcon className="h-5 w-5 text-[#151769] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Email</p>
                <a href="mailto:contact@delven.fr" className="text-gray-800 font-medium hover:text-[#151769] transition-colors">
                  contact@delven.fr
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-3">
              <PhoneIcon className="h-5 w-5 text-[#151769] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Téléphone</p>
                <a href="tel:+33789511501" className="text-gray-800 font-medium hover:text-[#151769] transition-colors">
                  +33 07 89 51 15 01
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-3">
              <MapPinIcon className="h-5 w-5 text-[#151769] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">Localisation</p>
                <p className="text-gray-800 font-medium">Toulouse, France - on travaille aussi a distance partout en francophonie.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-3">
              <UserIcon className="h-5 w-5 text-[#151769] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/hugo-bayart-405764396?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-medium hover:text-[#151769] transition-colors"
                >
                  Voir le profil LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
            <BoltIcon className="h-7 w-7 text-[#151769] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#151769] mb-2">Réponse rapide</h3>
            <p className="text-gray-600 text-sm">On revient vers vous sous 24h ouvrées.</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
            <ShieldCheckIcon className="h-7 w-7 text-[#151769] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#151769] mb-2">Pas de spam</h3>
            <p className="text-gray-600 text-sm">Votre email sert uniquement à vous répondre.</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
            <UserIcon className="h-7 w-7 text-[#151769] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#151769] mb-2">Échange humain</h3>
            <p className="text-gray-600 text-sm">Vous parlez à une vraie personne, pas à un bot.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vous savez déjà ce qu'il vous faut ?</h2>
          <Link
            to="/audit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#151769] text-white rounded-xl font-bold text-lg hover:bg-[#0f1150] transition-colors shadow-lg"
          >
            Demander un diagnostic gratuit
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
