import React from 'react';
import { Logo } from './Logo';
import { Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <Logo className="mb-4" />
        <a 
          href="https://www.google.com/maps/place/V3+estetica+automotiva/@-15.5531423,-47.3312729,17z/data=!3m1!4b1!4m6!3m5!1s0x9350a3781250ca93:0xb453fb5b86e7c6ff!8m2!3d-15.5531424!4d-47.326402!16s%2Fg%2F11m5g5l334?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-v3-gold transition-colors text-sm mb-8 block leading-relaxed max-w-xs"
        >
          Av. Lagoa Feia, 410 - Formosinha<br />
          Formosa - GO, CEP 73813-370
        </a>
        
        <div className="flex gap-6 mb-12">
          <a 
            href="https://www.instagram.com/v3_estetica_automotiva/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-v3-gold hover:border-v3-gold/50 hover:bg-v3-gold/5 transition-all"
          >
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a 
            href="https://wa.me/556699514646?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o%20na%20V3!" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-v3-gold hover:border-v3-gold/50 hover:bg-v3-gold/5 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="sr-only">WhatsApp</span>
          </a>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full text-zinc-500 text-sm gap-6">
          <p>&copy; {new Date().getFullYear()} V3 Estética Automotiva. Todos os direitos reservados.</p>
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-300 transition-colors">Política de Privacidade</a>
            <a 
              href="https://web.portaldesign.online" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white no-underline font-sans transition-all duration-300 select-none"
            >
              <span className="text-[12px] font-normal">Desenvolvido por</span>
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 fill-none stroke-current transition-transform duration-300 group-hover:scale-105" 
                style={{ strokeWidth: 1.8 }}
              >
                <path d="M5,21 V10 A7,7 0 0 1 19,10 V21 Z" />
              </svg>
              <div className="flex flex-col items-start font-black uppercase tracking-[0.1em] leading-[0.85] text-[11px]">
                <span>PORTAL</span>
                <span className="text-[6.5px] font-semibold tracking-[0.2em] mt-0.5">DESIGN</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
