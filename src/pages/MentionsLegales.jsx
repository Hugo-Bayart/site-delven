import React from "react";
import Layout from "../components/Layout";

const sections = [
  {
    title: "Editeur du site",
    content: [
      "Raison sociale : Delven",
      "Forme juridique : Auto-entrepreneur (micro-entreprise)",
      "SIRET : 947 941 779",
      "Adresse : 4a chemin de la riviere",
      "Email : contact@delven.fr",
      "Telephone : +33 07 89 51 15 01",
      "Directeur de la publication : Hugo Bayart",
    ],
  },
  {
    title: "Hebergeur",
    content: [
      "OVH SAS",
      "2 rue Kellermann",
      "59100 Roubaix - France",
      "Telephone : 1007 (depuis la France) ou +33 9 72 10 10 07",
      "Site : www.ovhcloud.com",
    ],
  },
  {
    title: "Propriete intellectuelle",
    content: [
      "L'ensemble du contenu de ce site (textes, images, graphismes, logo, icones, sons, logiciels...) est la propriete exclusive de Delven, a l'exception des marques, logos ou contenus appartenant a d'autres societes partenaires ou auteurs.",
      "Toute reproduction, distribution, modification, adaptation, retransmission ou publication, meme partielle, de ces differents elements est strictement interdite sans l'accord expres par ecrit de Delven.",
    ],
  },
  {
    title: "Liens hypertextes",
    content: [
      "Le site delven.fr peut contenir des liens vers d'autres sites internet. Delven n'exerce aucun controle sur ces sites et decline toute responsabilite quant a leur contenu.",
      "La mise en place de liens hypertextes pointant vers le site delven.fr est soumise a l'accord prealable de Delven.",
    ],
  },
  {
    title: "Limitation de responsabilite",
    content: [
      "Delven s'efforce d'assurer l'exactitude et la mise a jour des informations diffusees sur ce site, dont elle se reserve le droit de corriger le contenu a tout moment et sans preavis.",
      "Delven ne peut garantir l'exactitude ou l'exhaustivite des informations mises a disposition et ne saurait etre tenu responsable des erreurs ou omissions.",
    ],
  },
  {
    title: "Droit applicable",
    content: [
      "Les presentes mentions legales sont soumises au droit francais. En cas de litige, et a defaut de resolution amiable, les tribunaux francais seront seuls competents.",
    ],
  },
];

export default function MentionsLegales() {
  return (
    <Layout>
      <section className="bg-[#151769] py-16 px-8 md:px-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Mentions legales</h1>
          <p className="text-white/60 text-sm">Derniere mise a jour : mars 2026</p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map(({ title, content }) => (
            <div key={title}>
              <h2 className="text-lg font-bold text-[#151769] mb-4 pb-2 border-b border-gray-200">
                {title}
              </h2>
              <ul className="space-y-2">
                {content.map((line, i) => (
                  <li key={i} className="text-gray-600 text-[15px] leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}