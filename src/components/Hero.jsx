import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero({ onOpenQuote }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // NATURAL ORGANIC SLIDE & FADE ENTRANCE
      gsap.fromTo(
        '.animacion-entrada',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.12,
          ease: 'power4.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="seccion-inicio contenedor seccion-pantalla-completa" ref={containerRef}>
      {/* INVENTARIO DE PRESENTACIÓN DE MARCA */}
      <div className="insignia-encabezado-inicio animacion-entrada">
        <span className="icono-rayo">⚡</span>
        <span>"ENERGÍA SEGURA, SOLUCIONES CONFIABLES" • GUADARRAMA • MADRID</span>
      </div>

      <h1 className="titulo-portada animacion-entrada">
        <span>INSTALACIONES ELÉCTRICAS</span>
        <span className="texto-dorado-resplandor">CONFIABLES Y SEGURAS</span>
        <span className="texto-silueta">EN MADRID Y SIERRA</span>
      </h1>

      <p className="descripcion-portada animacion-entrada">
        Diseñamos, reformamos y certificamos instalaciones eléctricas en viviendas y locales. Trabajos limpios, bien hechos y adaptados al Reglamento Electrotécnico para Baja Tensión, con la tranquilidad de contar con la supervisión directa del <strong className="destacado-dorado">Ingeniero Kerling Abraham Natale Hidalgo</strong>.
      </p>

      {/* BOTONES DE INTERACCIÓN PRINCIPALES */}
      <div className="grupo-botones-accion animacion-entrada">
        <button onClick={onOpenQuote} className="boton-accion dorado-principal">
          <span>Solicitar Presupuesto sin Compromiso</span>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        <a
          href="#proyectos"
          onClick={(e) => scrollToSection(e, 'proyectos')}
          className="boton-accion contorno-elegante"
        >
          <span>Ver Proyectos Realizados</span>
        </a>

        <a
          href="https://wa.me/34682178499"
          target="_blank"
          rel="noopener noreferrer"
          className="boton-accion estilo-whatsapp"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.229 4.229-1.157z" />
          </svg>
          <span>Consulta por WhatsApp</span>
        </a>
      </div>

      {/* BARRA DE TELEMETRÍA TÉCNICA Y GARANTÍAS */}
      <div className="barra-indicadores-tecnicos animacion-entrada" style={{ marginBottom: '24px' }}>
        <div className="item-indicador">
          <span className="etiqueta-indicador">REGISTRO OFICIAL</span>
          <span className="valor-indicador estado-verde">
            <span className="punto-conectado"></span>
            <span>Instalador Autorizado en BT</span>
          </span>
        </div>

        <div className="item-indicador">
          <span className="etiqueta-indicador">ZONA DE SERVICIO</span>
          <span className="valor-indicador dorado">Guadarrama y Comunidad de Madrid</span>
        </div>

        <div className="item-indicador">
          <span className="etiqueta-indicador">NORMATIVA</span>
          <span className="valor-indicador">REBT (ITC-BT-03 / ITC-BT-52)</span>
        </div>

        <div className="item-indicador">
          <span className="etiqueta-indicador">ATENCIÓN DIRECTA</span>
          <span className="valor-indicador dorado">Supervisión por el Ingeniero</span>
        </div>
      </div>

      {/* TARJETAS DE CARACTERÍSTICAS DENSAS CON LIGERA FÍSICA */}
      <div
        className="animacion-entrada"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          width: '100%',
        }}
      >
        <div
          style={{
            background: 'rgba(11, 17, 31, 0.85)',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            padding: '20px',
            borderRadius: '20px',
            backdropFilter: 'blur(12px)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease',
          }}
        >
          <span style={{ fontSize: '1.2rem', marginBottom: '8px', display: 'block' }}>📜</span>
          <h4 style={{ fontSize: '13px', color: '#00E5FF', fontWeight: '700', marginBottom: '4px' }}>
            Boletines Eléctricos CIE
          </h4>
          <p style={{ fontSize: '11px', color: '#CBD5E1', lineHeight: '1.5' }}>
            Emisión y tramitación oficial en 24-48 horas para altas de luz, cambios de titular o aumentos de potencia.
          </p>
        </div>

        <div
          style={{
            background: 'rgba(11, 17, 31, 0.85)',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            padding: '20px',
            borderRadius: '20px',
            backdropFilter: 'blur(12px)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease',
          }}
        >
          <span style={{ fontSize: '1.2rem', marginBottom: '8px', display: 'block' }}>🏠</span>
          <h4 style={{ fontSize: '13px', color: '#00E5FF', fontWeight: '700', marginBottom: '4px' }}>
            Automatización Loxone
          </h4>
          <p style={{ fontSize: '11px', color: '#CBD5E1', lineHeight: '1.5' }}>
            Control de iluminación DALI, persianas y clima en un único sistema local sin cuotas mensuales.
          </p>
        </div>

        <div
          style={{
            background: 'rgba(11, 17, 31, 0.85)',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            padding: '20px',
            borderRadius: '20px',
            backdropFilter: 'blur(12px)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease',
          }}
        >
          <span style={{ fontSize: '1.2rem', marginBottom: '8px', display: 'block' }}>☀️</span>
          <h4 style={{ fontSize: '13px', color: '#FFEE00', fontWeight: '700', marginBottom: '4px' }}>
            Placas Solares y Baterías
          </h4>
          <p style={{ fontSize: '11px', color: '#CBD5E1', lineHeight: '1.5' }}>
            Dimensionamiento preciso y montaje fotovoltaico con acumulación LFP para máxima independencia energética.
          </p>
        </div>
      </div>
    </section>
  );
}
