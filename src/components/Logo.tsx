import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="V3 Estética Automotiva Logo" 
        className="h-16 w-auto object-contain"
      />
    </div>
  );
}
