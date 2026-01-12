import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { 
  CogIcon, 
  ChartBarIcon,
  RocketLaunchIcon,
  ClipboardDocumentCheckIcon
} from "@heroicons/react/24/outline";

export default function ServicesInformatiques() {
  const services = [
    {
      icon: CogIcon,
      title: "Développement sur mesure",
      description: "Applications web, mobile et logiciels adaptés à vos besoins spécifiques. Nous créons des solutions sur mesure qui s'intègrent parfaitement à vos processus métier.",
      features: ["Applications web responsive", "Applications mobiles iOS & Android", "Logiciels métier", "Intégrations API"]
    },
    {
      icon: ChartBarIcon,
      title: "Infrastructure & Cloud",
      description: "Mise en place et gestion de votre infrastructure cloud sécurisée. Optimisation de vos ressources et garantie de disponibilité.",
      features: ["Migration cloud", "Architecture scalable", "Sécurité renforcée", "Monitoring 24/7"]
    },
    {
      icon: RocketLaunchIcon,
      title: "Maintenance & Support",
      description: "Support technique continu et maintenance de vos systèmes. Une équipe dédiée pour assurer la performance de vos applications.",
      features: ["Support technique réactif", "Mises à jour régulières", "Correction de bugs", "Optimisation continue"]
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Conseil & Audit",
      description: "Analyse de vos besoins et recommandations stratégiques. Nous vous accompagnons dans vos choix technologiques.",
      features: ["Audit de sécurité", "Analyse de performance", "Recommandations techniques", "Roadmap technologique"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-8 md:px-16 bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
              repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)
            `
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Services Informatiques</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Des solutions complètes pour votre infrastructure et votre développement digital
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-8 md:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Votre partenaire technique de confiance
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Au-delà de l'IA, nous proposons des services informatiques complets pour accompagner 
            votre entreprise dans sa transformation digitale. De la conception au déploiement, 
            nous vous aidons à construire et maintenir des solutions robustes et évolutives.
          </p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#151769] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-[#151769] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-20 px-8 md:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Notre approche
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#151769] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-xl mb-2">Écoute & Analyse</h3>
              <p className="text-gray-700">
                Nous prenons le temps de comprendre vos besoins et votre contexte métier
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#151769] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-xl mb-2">Conception & Développement</h3>
              <p className="text-gray-700">
                Nous créons des solutions techniques adaptées et évolutives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#151769] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-xl mb-2">Support & Évolution</h3>
              <p className="text-gray-700">
                Nous restons à vos côtés pour garantir la pérennité de vos systèmes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 md:px-16 bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
              repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)
            `
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Parlons de vos besoins et construisons ensemble la solution qui vous correspond
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-5 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </Layout>
  );
}
