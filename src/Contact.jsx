import React, { useState } from "react";
import Layout from "../components/Layout";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
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
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err.message || "Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-2xl font-bold tracking-tight mb-6 text-center">
          Contactez-nous
        </h1>

        {sent ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center w-full max-w-lg">
            <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
            <p className="text-gray-600 text-sm">
              Merci ! Nous revenons vers vous rapidement.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg grid gap-4 bg-white p-6 rounded-2xl border shadow-sm ring-1 ring-gray-100"
          >
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                {error}
              </div>
            )}
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#0b2141] focus:border-[#0b2141]/50"
              placeholder="Nom"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#0b2141] focus:border-[#0b2141]/50"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#0b2141] focus:border-[#0b2141]/50"
              placeholder="Téléphone (optionnel)"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3 h-32 bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#0b2141] focus:border-[#0b2141]/50"
              placeholder="Votre message"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-3 rounded-xl text-white font-medium disabled:opacity-50"
              style={{ backgroundColor: "#0b2141" }}
            >
              {loading ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}
