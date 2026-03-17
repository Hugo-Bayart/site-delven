import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";

const sections = [
  {
    title: "Éditeur du site",
    content: [
      "Raison sociale : Delven",
      "Forme juridique : Auto-entrepreneur (micro-entreprise)",
      "SIRET : 947 941 779",
      "Adresse : 4a chemin de la rivière",
      "Email : contact@delven.fr",
      "Téléphone : +33 07 89 51 15 01",
      "Directeur de la publication : Hugo Bayart",
    ],
  },
  {
    title: "Hébergeur",
    content: [
      "OVH SAS",
      "2 rue Kellermann",
      "59100 Roubaix - France",
      "Téléphone : 1007 (depuis la France) ou +33 9 72 10 10 07",
      "Site : www.ovhcloud.com",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels...) est la propriété exclusive de Delven, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.",
      "Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Delven.",
    ],
  },
  {
    title: "Liens hypertextes",
    content: [
      "Le site delven.fr peut contenir des liens vers d'autres sites internet. Delven n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
      "La mise en place de liens hypertextes pointant vers le site delven.fr est soumise à l'accord préalable de Delven.",
    ],
  },
  {
    title: "Limitation de responsabilité",
    content: [
      "Delven s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis.",
      "Delven ne peut garantir l'exactitude ou l'exhaustivité des informations mises à disposition et ne saurait être tenu responsable des erreurs ou omissions.",
    ],
  },
  {
    title: "Droit applicable",
    content: [
      "Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
    ],
  },
];

export default function MentionsLegales() {
  return (
    <Layout>
      <Helmet>
        <title>Mentions légales | Delven</title>
        <meta name="description" content="Mentions légales du site Delven. Éditeur, hébergeur, propriété intellectuelle." />
      </Helmet>

      <section className="bg-[#151769] py-16 px-8 md:px-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Mentions légales</h1>
          <p className="text-white/60 text-sm">Dernière mise à jour : mars 2026</p>
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