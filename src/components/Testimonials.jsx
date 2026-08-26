import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      stars: '★★★★★',
      text: 'Kerling diseñó e instaló el sistema Loxone y la energía solar en nuestro chalet de Pozuelo. La precisión del cuadro eléctrico y el acabado de la iluminación DALI son simplemente espectaculares.',
      author: 'Carlos M. S.',
      loc: 'Villa Unifamiliar Pozuelo de Alarcón',
    },
    {
      stars: '★★★★★',
      text: 'Necesitábamos un Boletín Eléctrico (CIE) urgente para aumento de potencia en un local de restauración. Kerling auditó el cuadro, corrigió fallos de protección y emitió el certificado en 24 horas.',
      author: 'Elena R. V.',
      loc: 'Hostelería Madrid Centro',
    },
    {
      stars: '★★★★★',
      text: 'Buscaba un instalador fotovoltaico que supiera integrar la carga del coche eléctrico con el excedente solar sin fallos. El trabajo de DEN en Guadarrama superó todas nuestras expectativas.',
      author: 'Javier G. B.',
      loc: 'Residencial Guadarrama',
    },
  ];

  return (
    <section className="testimonials-section container full-screen-section">
      <div className="section-header gsap-fade-up">
        <span className="section-badge">
          <span className="code-tag">09 //</span> GARANTÍA & OPINIONES REALES
        </span>
        <h2 className="section-title">
          VALORACIONES DE <span className="accent-text">NUESTROS CLIENTES</span>
        </h2>
      </div>

      <div className="testimonials-grid gsap-fade-up">
        {reviews.map((r, idx) => (
          <div key={idx} className="t-card">
            <div className="t-stars">{r.stars}</div>
            <p className="t-text">"{r.text}"</p>
            <div className="t-author">
              <strong>{r.author}</strong>
              <span>{r.loc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
