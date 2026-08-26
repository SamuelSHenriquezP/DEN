import React from 'react';

export default function AboutKerling({ onOpenQuote }) {
  return (
    <section id="sobre-mi" className="about-modern container section-nav full-screen-section">
      <div className="about-grid-main gsap-fade-up">
        <div className="about-image-side">
          <img
            src="/images/kerling_portrait.png"
            alt="Ingeniero Kerling Abraham Natale Hidalgo — Especialista Loxone Partner Madrid"
          />
          <div className="about-img-badge">
            <span className="badge-title">ING. KERLING NATALE</span>
            <span className="badge-sub">Fundador & Principal Engineer</span>
          </div>
        </div>

        <div className="about-text-side">
          <span className="section-badge">
            <span className="code-tag">06 //</span> INGENIERO ELÉCTRICO AUTORIZADO
          </span>
          <h2 className="about-title">
            Kerling Abraham <br />
            <span className="accent-text">Natale Hidalgo</span>
          </h2>

          <p className="about-bio">
            Como ingeniero electricista especializado en baja tensión y automatización domótica, entiendo que una instalación eléctrica es el{' '}
            <strong>corazón energético y de seguridad de tu patrimonio</strong>.
          </p>

          <p className="about-bio-secondary">
            Desde la sede en <strong>Guadarrama, Madrid</strong>, ejecuto personalmente y superviso proyectos de alta exigencia técnica en toda la región. Cada cuadro de protección, nodo Loxone y sistema solar fotovoltaico es verificado bajo estrictos protocolos de ingeniería para garantizar 100% de cumplimiento del REBT y fiabilidad absoluta.
          </p>

          {/* GRID DE CERTIFICACIONES TÉCNICAS */}
          <div className="cert-grid">
            <div className="cert-item">
              <span className="cert-icon">📜</span>
              <h4>ELECTRICISTA AUTORIZADO</h4>
              <p>Categoría Especialista Comunidad de Madrid</p>
            </div>

            <div className="cert-item loxone-border">
              <span className="cert-icon">💜</span>
              <h4 style={{ color: '#8B5CF6' }}>LOXONE PARTNER</h4>
              <p>Certificación en Smart Home & Automation</p>
            </div>

            <div className="cert-item">
              <span className="cert-icon">☀️</span>
              <h4>FOTOVOLTAICA & BATERÍAS</h4>
              <p>Instalador Acreditado SolarEdge / Huawei</p>
            </div>

            <div className="cert-item">
              <span className="cert-icon">🔍</span>
              <h4>INSPECCIÓN TERMOGRÁFICA</h4>
              <p>Diagnóstico Infrarrojo Preventivo FLIR</p>
            </div>
          </div>

          <div className="about-cta-row">
            <button onClick={onOpenQuote} className="btn-cta primary-glow">
              <span>Agendar Llamada Técnica con Kerling</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
