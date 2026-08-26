import React, { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: '¿Por qué elegir un Loxone Certified Partner frente a la domótica tradicional?',
      a: 'Loxone no depende de la nube para funcionar; toda la lógica se procesa de forma local en el Miniserver con latencia cero y máxima privacidad. Además, permite unificar en un solo sistema la iluminación DALI, la climatización, las persianas y la gestión fotovoltaica sin depender de múltiples aplicaciones incompatibles.',
    },
    {
      q: '¿Qué garantía tienen los boletines eléctricos (CIE) y la legalización?',
      a: 'Kerling Abraham Natale Hidalgo es Ingeniero Electricista e Instalador Autorizado registrado en la Comunidad de Madrid. Todos los certificados (CIE) emitidos incluyen garantía de legalización ante la Consejería de Industria y la distribuidora (i-DE, UFD), así como auditoría técnica completa previa.',
    },
    {
      q: '¿Cuánto tiempo tarda la instalación de un sistema fotovoltaico con batería?',
      a: 'Una instalación estándar en una villa o vivienda unifamiliar se completa en 24 a 48 horas de trabajo técnico en cubierta y cuadro general. Posteriormente nos encargamos de todo el trámite de legalización, vertido de excedentes y solicitud de subvenciones.',
    },
    {
      q: '¿Realizáis proyectos fuera de Guadarrama y la Sierra de Madrid?',
      a: 'Sí, cubrimos toda la Comunidad de Madrid (Pozuelo, La Moraleja, Las Rozas, Majadahonda, Torrelodones, Madrid Capital) y proyectos seleccionados de alta ingeniería en provincias limítrofes.',
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section container section-nav full-screen-section">
      <div className="section-header gsap-fade-up">
        <span className="section-badge">
          <span className="code-tag">08 //</span> RESOLUCIÓN DE DUDAS TÉCNICAS
        </span>
        <h2 className="section-title">
          PREGUNTAS <span className="accent-text">FRECUENTES</span>
        </h2>
        <p className="section-desc">
          Respuestas transparentes sobre nuestros servicios de ingeniería eléctrica, domótica Loxone y autoconsumo solar.
        </p>
      </div>

      <div className="faq-accordion gsap-fade-up">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
              <button className="faq-trigger" onClick={() => toggleFaq(idx)}>
                <span>{faq.q}</span>
                <span className="faq-icon">▼</span>
              </button>
              <div className="faq-content">
                <p>{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
