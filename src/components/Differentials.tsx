import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function Differentials() {
  return (
    <section className="py-24 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
                Por que escolher a <span className="text-v3-gold">V3?</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                Mais do que estética, entregamos paixão. Nosso espaço foi inteiramente reimaginado para atender às exigências de quem trata seu veículo como membro da família.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-v3-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Estrutura Moderna</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">Ambiente planejado com iluminação tubular em LED perfeita para identificar e corrigir até o menor dos defeitos na pintura do seu veículo.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-v3-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Olhar de Entusiasta</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">Nós entendemos e vivemos a cultura dos carros modificados, esportivos e rebaixados. Seu projeto é tratado com o máximo de respeito, segurança e cuidado.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-v3-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Produtos Premium</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">Não economizamos na qualidade. Apenas os melhores compostos, boinas, selantes e vitrificadores do mercado tocam a lataria do seu carro.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-v3-gold/20 to-transparent rounded-2xl blur-2xl transform -rotate-3 translate-x-4 translate-y-4" />
            <img 
              src="/polimento-tecnico.jpg" 
              alt="Polimento técnico em carro premium"
              className="relative z-10 w-full h-[500px] object-cover object-bottom rounded-2xl border border-white/10 shadow-2xl transition-all duration-700"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 -left-6 z-20 bg-zinc-950 border border-v3-gold/30 p-4 rounded-xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-v3-gold/10 rounded-full flex items-center justify-center border border-v3-gold/20">
                <span className="text-v3-gold font-bold text-xl">V3</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Padrão Ouro</p>
                <p className="text-zinc-400 text-xs text-nowrap">Certificação de Excelência</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
