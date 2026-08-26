import React from 'react';

export default function Testimonials() {
  const opiniones = [
    {
      estrellas: '★★★★★',
      texto: 'Kerling diseñó e instaló la automatización de iluminación y la energía solar en nuestra vivienda de Pozuelo. El nivel de detalle en la ordenación del cuadro eléctrico y los acabados es excepcional.',
      autor: 'Carlos M. S.',
      ubicacion: 'Chalet Unifamiliar • Pozuelo de Alarcón',
    },
    {
      estrellas: '★★★★★',
      texto: 'Necesitábamos un Boletín Eléctrico (CIE) urgente para un aumento de potencia comercial. Kerling auditó la instalación, solucionó los fallos de protección y emitió el certificado oficial en 24 horas.',
      autor: 'Elena R. V.',
      ubicacion: 'Local Comercial • Madrid Centro',
    },
    {
      estrellas: '★★★★★',
      texto: 'Buscábamos un profesional que integrara la recarga del coche eléctrico con la producción de las placas solares de forma eficiente. El trabajo de DEN en Guadarrama superó nuestras expectativas.',
      autor: 'Javier G. B.',
      ubicacion: 'Residencia Unifamiliar • Guadarrama',
    },
  ];

  return (
    <section className="seccion-testimonios contenedor seccion-pantalla-completa">
      <div className="encabezado-seccion">
        <span className="insignia-seccion">
          <span className="codigo-indice">09 //</span> EXPERIENCIAS Y VALORACIONES REALES
        </span>
        <h2 className="titulo-seccion">
          OPINIONES DE <span className="texto-gradiente-dorado">NUESTROS CLIENTES</span>
        </h2>
      </div>

      <div className="rejilla-testimonios">
        {opiniones.map((item, idx) => (
          <div key={idx} className="tarjeta-testimonio">
            <div className="estrellas-testimonio">{item.estrellas}</div>
            <p className="texto-testimonio">"{item.texto}"</p>
            <div className="autor-testimonio">
              <strong>{item.autor}</strong>
              <span>{item.ubicacion}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
