import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "A V3 atende carros rebaixados?",
    a: "Sim! Nossa estrutura é totalmente preparada para receber carros baixos com total segurança e sem riscos de raspar."
  },
  {
    q: "Quanto tempo demora uma lavagem técnica?",
    a: "Depende do estado do veículo, mas priorizamos a qualidade em cada detalhe. Entre em contato para estimarmos o tempo do seu carro."
  },
  {
    q: "Onde vocês ficam localizados?",
    a: "Estamos localizados na Av. Lagoa Feia, 410 - Formosinha, Formosa - GO, CEP 73813-370. Você pode tocar no endereço no rodapé do site para abrir a rota diretamente no Google Maps!"
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-zinc-900 border-t border-white/5 relative">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Dúvidas <span className="text-v3-gold">Frequentes.</span>
          </h2>
          <p className="text-zinc-400 text-lg">Tudo o que você precisa saber antes de trazer seu carro para a V3.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`border rounded-xl transition-colors duration-300 ${isOpen ? 'border-v3-gold/30 bg-zinc-950 shadow-[0_0_20px_-10px_rgba(209,165,56,0.2)]' : 'border-white/10 bg-zinc-900/50 hover:border-white/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-medium pr-4 ${isOpen ? 'text-v3-gold' : 'text-zinc-100'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-v3-gold text-zinc-950' : 'bg-zinc-800 text-zinc-400'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
