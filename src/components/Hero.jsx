import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Hero({ onOpenQuote }) {
  useEffect(() => {
    gsap.from('#inicio .reveal', {
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.2,
    });

    gsap.from('#inicio .gsap-fade-up', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.5,
    });
  }, []);

  const scrollToSimulador = (e) => {
    e.preventDefault();
    const el = document.getElementById('simulador');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero container section-nav full-screen-section">
      <div className="hero-header-pill gsap-fade-up">
        <span className="pulse-icon">⚡</span>
        <span>INGENIERÍA ELÉCTRICA Y DOMÓTICA DE ALTA FIDELIDAD</span>
      </div>

      <h1 className="hero-title">
        <span className="reveal">DYNAMIC</span>
        <span className="reveal outline">ELECTRIC</span>
        <span className="reveal accent-glow">NATALE.</span>
      </h1>

      <p className="hero-description gsap-fade-up">
        Ingeniería eléctrica de alta precisión en Madrid por el <strong>Ingeniero Kerling Abraham Natale Hidalgo</strong>. Certificación oficial REBT, domótica avanzada{' '}
        <strong className="highlight-purple">Loxone Certified Partner</strong>, energía solar fotovoltaica con almacenamiento inteligente y cuadros técnicos de máximo nivel.
      </p>

      <div className="hero-cta-group gsap-fade-up">
        <button onClick={onOpenQuote} className="btn-cta primary-glow">
          <span>Solicitar Presupuesto Exprés</span>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
        <a href="#simulador" onClick={scrollToSimulador} className="btn-cta outline">
          <span>Probar Escenas de Luz IA</span>
        </a>
        <a
          href="https://wa.me/34682178499?text=Hola%20Kerling,%20deseo%20una%20consultor%C3%ADa%20t%C3%A9cnica%20gratuita."
          className="btn-cta wa-style"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.229 4.229-1.157z" />
          </svg>
          <span>Asesoría con Kerling</span>
        </a>
      </div>

      {/* LIVE TELEMETRY DASHBOARD BAR */}
      <div className="live-telemetry-bar gsap-fade-up">
        <div className="telemetry-item">
          <span className="telemetry-label">ESTADO RED DEN</span>
          <span className="telemetry-val blue-pulse">
            <span className="dot-online"></span> OPERATIVO 24/7
          </span>
        </div>
        <div className="telemetry-item">
          <span className="telemetry-label">TENSIÓN RED MADRID</span>
          <span className="telemetry-val">230V / 400V Tri.</span>
        </div>
        <div className="telemetry-item">
          <span className="telemetry-label">CUMPLIMIENTO REBT</span>
          <span className="telemetry-val purple">100% GARANTIZADO</span>
        </div>
        <div className="telemetry-item">
          <span className="telemetry-label">LOXONE STATUS</span>
          <span className="telemetry-val loxone-purple">CERTIFIED PARTNER</span>
        </div>
      </div>
    </section>
  );
}
