import React from 'react';

export default function AboutKerling({ onOpenQuote }) {
  return (
    <section id="sobre-mi" className="seccion-perfil-ingeniero contenedor seccion-pantalla-completa">
      <div className="estrucutra-perfil-principal">
        <div className="lado-imagen-perfil">
          <img
            src="/images/kerling_portrait.png"
            alt="Ingeniero Kerling Abraham Natale Hidalgo — Especialista en Ingeniería Eléctrica en Madrid"
          />
          <div className="tarjeta-identidad-fotografia">
            <span className="nombre-ingeniero-foto">ING. KERLING NATALE</span>
            <span className="cargo-ingeniero-foto">INGENIERO ELECTRICISTA AUTORIZADO</span>
          </div>
        </div>

        <div className="lado-texto-perfil">
          <span className="insignia-seccion">
            <span className="codigo-indice">06 //</span> DIRECCIÓN TÉCNICA PROFESIONAL
          </span>
          <h2 className="titulo-perfil">
            Kerling Abraham <br />
            <span className="texto-gradiente-dorado">Natale Hidalgo</span>
          </h2>

          <p className="biografia-destacada">
            Como ingeniero electricista especializado en baja tensión y automatización, concibo la instalación eléctrica como la columna vertebral de la seguridad y la eficiencia energética de cualquier espacio.
          </p>

          <p className="biografia-secundaria">
            Desde nuestra sede en <strong>Guadarrama</strong>, presto servicio directo en toda la Comunidad de Madrid. Superviso y ejecuto personalmente cada reforma de cuadro, proyecto domótico e instalación fotovoltaica, garantizando el estricto cumplimiento del Reglamento Electrotécnico para Baja Tensión (REBT) y una comunicación transparente en todo momento.
          </p>

          {/* REJILLA DE CERTIFICACIONES TÉCNICAS */}
          <div className="rejilla-certificaciones">
            <div className="item-certificacion">
              <span className="icono-certificacion">📜</span>
              <h4>INSTALADOR AUTORIZADO</h4>
              <p>Categoría Especialista en la Comunidad de Madrid</p>
            </div>

            <div className="item-certificacion">
              <span className="icono-certificacion">⚡</span>
              <h4>AUTOMATIZACIÓN LOXONE</h4>
              <p>Socio Certificado en Sistemas Inteligentes</p>
            </div>

            <div className="item-certificacion">
              <span className="icono-certificacion">☀️</span>
              <h4>ENERGÍA FOTOVOLTAICA</h4>
              <p>Instalador Acreditado de Paneles y Baterías</p>
            </div>

            <div className="item-certificacion">
              <span className="icono-certificacion">🔍</span>
              <h4>TERMOGRAFÍA INFRARROJA</h4>
              <p>Diagnóstico Preventivo de Cuadros con FLIR</p>
            </div>
          </div>

          <div style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <button onClick={onOpenQuote} className="boton-accion dorado-principal">
              <span>Agendar Consulta Técnica con Kerling</span>
            </button>
            <a
              href="https://wa.me/34682178499"
              target="_blank"
              rel="noopener noreferrer"
              className="boton-accion estilo-whatsapp"
            >
              <span>Atención Directa por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
