import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950 z-10" />
        <img
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2070&auto=format&fit=crop"
          alt="Polimento técnico de pintura na V3 Estética"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Subtle LED top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-32 bg-white/5 blur-[100px] rounded-full z-10" />
      </div>

      {/* Header */}
      <header className="absolute top-0 inset-x-0 z-20 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <Logo />
          <a 
            href="https://wa.me/556699514646?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o%20na%20V3!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-v3-gold hover:text-v3-gold-light transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-white/80" />
            Fale Conosco
          </a>
        </div>
      </header>

      {/* Content */}
      <motion.div 
        style={{ opacity, y }}
        className="relative z-20 max-w-4xl mx-auto px-4 text-center mt-12 md:mt-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-v3-gold uppercase bg-v3-gold/10 border border-v3-gold/20 rounded-full">
            Sob Nova Direção
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          O cuidado que o seu veículo <span className="text-transparent bg-clip-text bg-gradient-to-r from-v3-gold to-v3-gold-light">merece.</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          A V3 Estética Automotiva está de cara nova. Combinamos técnicas avançadas, produtos de alta tecnologia e a paixão por carros para entregar o brilho e a proteção que fazem o seu veículo se destacar nas ruas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center"
        >
          <a
            href="https://wa.me/556699514646?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o%20na%20V3!"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-v3-gold to-amber-400 text-zinc-950 font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-5px_rgba(209,165,56,0.4)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10">Agendar Meu Horário via WhatsApp</span>
            <MessageCircle className="relative z-10 w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
    </section>
  );
}
