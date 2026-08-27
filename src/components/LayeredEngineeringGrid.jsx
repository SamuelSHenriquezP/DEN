import React, { useState } from 'react';

export default function LayeredEngineeringGrid() {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setTransform({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <section
      id="ingenieria-grid"
      style={{
        width: '100%',
        backgroundColor: '#060B16',
        padding: '120px 4vw',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* GLOW DE FONDO */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-electrico-glow) 0%, transparent 70%)',
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      ></div>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* ENCABEZADO */}
        <div style={{ marginBottom: '60px' }}>
          <span
            style={{
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              color: 'var(--color-electrico)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            03 // OVERLAY ENGINEERING GRID & FLIR DIAGNOSTICS
          </span>
          <h2
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
            }}
          >
            GRID DE CAPAS SUPERPUESTAS: <br />
            <span style={{ color: 'var(--color-electrico)' }}>ESTRUCTURA & TERMOGRAFÍA</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--fuente-cuerpo)',
              fontSize: '14px',
              color: '#94A3B8',
              marginTop: '16px',
              maxWidth: '650px',
            }}
          >
            Inspección multicapa con radiografía infrarroja FLIR, integrando esquemas unifilares y montaje de precisión en armarios de distribución trifásica.
          </p>
        </div>

        {/* ESTRUCTURA EDITORIAL DE IMÁGENES SUPERPUESTAS */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* COLUMNA IZQUIERDA: CONTENEDOR MULTICAPA SUPERPUESTO (LAYERED GRID) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '480px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* CAPA 1: IMAGEN BASE GENERAL (CUADRO GENERAL) */}
            <div
              style={{
                position: 'relative',
                width: '82%',
                height: '360px',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid var(--color-electrico-borde)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
                transform: `translate(${transform.x * 0.4}px, ${transform.y * 0.4}px)`,
                transition: 'transform 0.2s ease-out',
                zIndex: 1,
              }}
            >
              <img
                src="/images/smart_panel.png"
                alt="Cuadro Eléctrico Principal DEN"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(180deg, rgba(3, 5, 8, 0.2) 0%, rgba(3, 5, 8, 0.85) 100%)',
                }}
              ></div>

              {/* TELEMETRÍA FLOTANTE SOBRE CAPA BASE */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  display: 'flex',
                  gap: '12px',
                }}
              >
                <span
                  style={{
                    background: 'rgba(3, 5, 8, 0.85)',
                    border: '1px solid var(--color-electrico-borde)',
                    color: 'var(--color-electrico)',
                    fontFamily: 'var(--fuente-tecnica)',
                    fontSize: '10px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    backdropFilter: 'blur(8px)',
                    fontWeight: 700,
                  }}
                >
                  ⚡ 400V TRIFÁSICO
                </span>
                <span
                  style={{
                    background: 'rgba(3, 5, 8, 0.85)',
                    border: '1px solid var(--color-electrico-borde)',
                    color: '#25D366',
                    fontFamily: 'var(--fuente-tecnica)',
                    fontSize: '10px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    backdropFilter: 'blur(8px)',
                    fontWeight: 700,
                  }}
                >
                  ● 50.00 Hz NOMINAL
                </span>
              </div>
            </div>

            {/* CAPA 2: IMAGEN SUPERPUESTA SUPERIOR DERECHA (DIAGNÓSTICO FLIR) */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '0px',
                width: '52%',
                height: '240px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '2px solid var(--color-electrico)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.9), 0 0 30px var(--color-electrico-glow)',
                transform: `translate(${transform.x * -0.7}px, ${transform.y * -0.7}px)`,
                transition: 'transform 0.2s ease-out',
                zIndex: 3,
              }}
            >
              <img
                src="/images/gallery_1.png"
                alt="Inspección Termográfica FLIR"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: 'var(--color-electrico)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '9px',
                  fontWeight: 800,
                  padding: '4px 10px',
                  borderRadius: '100px',
                  letterSpacing: '1px',
                  boxShadow: '0 0 15px var(--color-electrico-glow)',
                }}
              >
                CÁMARA FLIR INFRARROJOS
              </div>
            </div>

            {/* CAPA 3: IMAGEN SUPERPUESTA INFERIOR IZQUIERDA (LOXONE SERVER) */}
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-10px',
                width: '48%',
                height: '210px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--color-electrico-borde)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.9)',
                transform: `translate(${transform.x * 0.9}px, ${transform.y * 0.9}px)`,
                transition: 'transform 0.2s ease-out',
                zIndex: 2,
              }}
            >
              <img
                src="/images/villa_loxone.png"
                alt="Servidor Domótico Loxone"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: 'rgba(3, 5, 8, 0.9)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '9px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '8px',
                }}
              >
                PROCESAMIENTO LOCAL LOXONE
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: PUNTOS CLAVE Y ESPECIFICACIONES DE INGENIERÍA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                num: '01',
                title: 'AUDITORÍA TERMOGRÁFICA PREVENTIVA',
                desc: 'Localización de micro-calentamientos por resistencia de contacto antes de producir disparos fortuitos o averías de potencia.',
                badge: 'FLIR INFRARED HD',
              },
              {
                num: '02',
                title: 'ESQUEMAS UNIFILARES & BOLETÍN CIE',
                desc: 'Digitalización y legalización completa de la instalación eléctrica ante la Consejería de Industria de la Comunidad de Madrid.',
                badge: 'NORMATIVA REBT',
              },
              {
                num: '03',
                title: 'INTEGRACIÓN DE CONTROL LOCAL DE BAJA LATENCIA',
                desc: 'Arquitectura Loxone Miniserver V2 con respuesta menor a 10 ms para climatización, persianas e iluminación DALI.',
                badge: 'PROCESSING LOCAL',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#0B111D',
                  border: '1px solid var(--color-electrico-borde)',
                  borderRadius: '20px',
                  padding: '24px',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-electrico)';
                  e.currentTarget.style.boxShadow = '0 0 25px var(--color-electrico-glow)';
                  e.currentTarget.style.transform = 'translateX(6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-electrico-borde)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '13px', fontWeight: 800, color: 'var(--color-electrico)' }}>
                    {item.num} //
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--fuente-tecnica)',
                      fontSize: '9px',
                      color: 'var(--color-electrico)',
                      background: 'rgba(0, 163, 255, 0.1)',
                      border: '1px solid var(--color-electrico-borde)',
                      padding: '3px 10px',
                      borderRadius: '100px',
                      fontWeight: 700,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--fuente-titulos)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    margin: '0 0 8px 0',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--fuente-cuerpo)',
                    fontSize: '13px',
                    color: '#94A3B8',
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
