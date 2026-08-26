import React from 'react';

export default function Header({ onOpenQuote }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="cabecera-principal">
      <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="logotipo-marca">
        <img src="/Logo DEN.png" alt="Dynamic Electric Natale Logo" className="imagen-logotipo" />
        <div className="texto-marca">
          <span className="titulo-marca">DYNAMIC ELECTRIC NATALE</span>
          <span className="subtitulo-marca">"ENERGÍA SEGURA, SOLUCIONES CONFIABLES" • MADRID</span>
        </div>
      </a>

      <div className="insignia-estado-servicio">
        <span className="punto-estado-activo"></span>
        <span className="texto-estado">INSTALADOR AUTORIZADO OFICIAL — REBT MADRID</span>
      </div>

      <div className="acciones-cabecera">
        <a href="tel:+34682178499" className="enlace-telefono-cabecera">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>+34 682 17 84 99</span>
        </a>
        <button onClick={onOpenQuote} className="boton-cotizacion-rapida">
          Solicitar Presupuesto
        </button>
      </div>
    </header>
  );
}
