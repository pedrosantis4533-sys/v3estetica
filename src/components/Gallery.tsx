import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: "/corolla-branco.jpg",
    alt: "Estética e vitrificação de Corolla"
  },
  {
    src: "/motos-bmw.jpg",
    alt: "Proteção e estética de motos premium"
  },
  {
    src: "/gol-quadrado.jpg",
    alt: "Tratamento de clássicos (VW Gol)"
  }
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  const prev = () => setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1));

  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            A Prova <span className="text-v3-gold">Social.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Quem ama, cuida na V3. Veja o resultado de quem já confia no nosso trabalho.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(255,255,255,0.05)] bg-zinc-950 group"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-8 z-10 pointer-events-none">
            <p className="text-white font-medium text-lg shadow-black drop-shadow-md">{images[currentIndex].alt}</p>
          </div>

          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-950/50 hover:bg-v3-gold text-white hover:text-black border border-white/20 hover:border-v3-gold rounded-full flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-950/50 hover:bg-v3-gold text-white hover:text-black border border-white/20 hover:border-v3-gold rounded-full flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 right-8 flex gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-v3-gold w-6' : 'bg-white/50 hover:bg-white'}`}
                aria-label={`Ir para foto ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
