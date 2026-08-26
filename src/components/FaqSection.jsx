import React, { useState } from 'react';

export default function FaqSection() {
  const [abiertoIndice, setAbiertoIndice] = useState(null);

  const preguntas = [
    {
      q: '¿Qué ventajas ofrece un sistema de automatización con procesamiento local?',
      a: 'A diferencia de los dispositivos comerciales conectados a la nube, un sistema con procesamiento local ejecuta toda la lógica de iluminación, clima y seguridad en la propia vivienda. Esto garantiza latencia cero, funcionamiento ininterrumpido incluso sin conexión a internet y privacidad absoluta.',
    },
    {
      q: '¿Qué garantía y validez tienen los Boletines Eléctricos (CIE)?',
      a: 'Kerling Abraham Natale Hidalgo es Ingeniero Electricista e Instalador Autorizado registrado en la Comunidad de Madrid. Todos los Certificados de Instalación Eléctrica (CIE) emitidos cuentan con garantía de legalización ante la Consejería de Industria y las compañías distribuidoras (i-DE, UFD).',
    },
    {
      q: '¿Cuánto tiempo requiere la instalación de un sistema fotovoltaico con batería?',
      a: 'Una instalación residencial estándar se completa en 24 a 48 horas de trabajo en cubierta y cuadro general. Posteriormente nos encargamos de la tramitación administrativa para la legalización de excedentes y la solicitud de subvenciones.',
    },
    {
      q: '¿Se prestan servicios fuera de Guadarrama y la Sierra de Madrid?',
      a: 'Sí, atendemos proyectos de ingeniería y reformas eléctricas en toda la Comunidad de Madrid (Pozuelo, La Moraleja, Las Rozas, Majadahonda, Torrelodones y Madrid capital).',
    },
  ];

  const togglePregunta = (idx) => {
    setAbiertoIndice(abiertoIndice === idx ? null : idx);
  };

  return (
    <section id="faq" className="seccion-preguntas-frecuentes contenedor seccion-pantalla-completa">
      <div className="encabezado-seccion">
        <span className="insignia-seccion">
          <span className="codigo-indice">08 //</span> PREGUNTAS FRECUENTES Y RESPUESTAS TÉCNICAS
        </span>
        <h2 className="titulo-seccion">
          RESOLUCIÓN DE <span className="texto-gradiente-dorado">DUDAS FRECUENTES</span>
        </h2>
        <p className="descripcion-seccion">
          Respuestas transparentes sobre nuestros servicios de ingeniería eléctrica, automatización residencial y autoconsumo solar.
        </p>
      </div>

      <div className="acordeon-preguntas">
        {preguntas.map((item, idx) => {
          const estaAbierto = abiertoIndice === idx;
          return (
            <div key={idx} className={`item-pregunta ${estaAbierto ? 'activo' : ''}`}>
              <button className="boton-pregunta-disparador" onClick={() => togglePregunta(idx)}>
                <span>{item.q}</span>
                <span className="icono-despliegue-pregunta">▼</span>
              </button>
              <div className="contenido-respuesta">
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
