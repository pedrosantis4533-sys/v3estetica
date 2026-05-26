import React from 'react';
import { AlertCircle } from 'lucide-react';

export function AlertPanel() {
  return (
    <div className="w-full bg-zinc-950 border-y border-v3-gold/30">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-center gap-3 text-center sm:text-left flex-col sm:flex-row">
        <div className="shrink-0 flex items-center justify-center bg-v3-gold/10 p-2 rounded-full border border-v3-gold/20">
          <AlertCircle className="w-5 h-5 text-v3-gold" />
        </div>
        <p className="text-sm sm:text-base text-zinc-300 font-medium">
          <span className="text-v3-gold font-bold mr-1">ATENÇÃO:</span> 
          A V3 está <span className="text-white font-bold">sob nova direção!</span> Estamos preparando uma mega reinauguração com novidades exclusivas, novos processos de qualidade e condições especiais para os primeiros clientes. Fique ligado!
        </p>
      </div>
    </div>
  );
}
