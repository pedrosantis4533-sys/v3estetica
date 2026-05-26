import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shield, Droplets, Car, Bike } from 'lucide-react';

const services = [
  {
    icon: <Droplets className="w-6 h-6 text-v3-gold" />,
    title: "Lavagem Técnica Detalhada",
    description: "Limpeza minuciosa de chassis, caixas de roda e motor sem agredir os componentes do seu veículo."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "Correção de Pintura & Polimento",
    description: "Eliminação de riscos superficiais, hologramas e resgate do brilho original de fábrica com precisão."
  },
  {
    icon: <Shield className="w-6 h-6 text-v3-gold" />,
    title: "Vitrificação de Pintura",
    description: "Proteção de alta durabilidade contra raios UV e dejetos, entregando um efeito hidrofóbico impressionante."
  },
  {
    icon: <Car className="w-6 h-6 text-white" />,
    title: "Higienização & Detalhamento Interno",
    description: "Remoção profunda de sujeiras e revitalização completa de plásticos, tecidos e couros da cabine."
  },
  {
    icon: <Bike className="w-6 h-6 text-v3-gold" />,
    title: "Estética de Motos",
    description: "Cuidado especializado e detalhado para quem vive sobre duas rodas e exige perfeição."
  }
];

export function Services() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-v3-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">O que fazemos de <span className="text-v3-gold">melhor.</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Processos meticulosos e produtos de alto padrão para resultados inquestionáveis.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-v3-gold/30 transition-all duration-300"
            >
              {/* Neon border effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_20px_rgba(209,165,56,0.1)]" />
              
              <div className="bg-zinc-800/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:bg-v3-gold/10 group-hover:border-v3-gold/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
