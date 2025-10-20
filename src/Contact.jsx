import React from "react";
import Layout from "./components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-2xl font-bold tracking-tight mb-6 text-center">
          Contactez-nous
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Merci ! Nous revenons vers vous rapidement.");
          }}
          className="w-full max-w-lg grid gap-4 bg-white p-6 rounded-2xl border shadow-sm ring-1 ring-gray-100"
        >
          <input
            className="border rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-[#0b2141] focus:border-[#0b2141]/50"
            placeholder="Nom"
            required
          />
          <input
            type="email"
            className="border rounded-xl px-4 py-3 bg-white text-gray-900 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-[#0b2141] focus:border-[#0b2141]/50"
            placeholder="Email"
            required
          />
          <textarea
            className="border rounded-xl px-4 py-3 h-32 bg-white text-gray-900 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-[#0b2141] focus:border-[#0b2141]/50"
            placeholder="Votre message"
            required
          />
          <button
            type="submit"
            className="px-4 py-3 rounded-xl text-white font-medium"
            style={{ backgroundColor: "#0b2141" }}
          >
            Envoyer
          </button>
        </form>
      </div>
    </Layout>
  );
}
