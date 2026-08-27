import React, { useRef } from 'react';

export default function PortfolioHorizontal({ onOpenModal }) {
  const scrollContainerRef = useRef(null);

  const proyectos = [
    {
      clave: 'villa-loxone',
      titulo: 'RESIDENCIA UNIFAMILIAR EN POZUELO',
      categoria: 'VIVIENDA DE ALTA EFICIENCIA • POZUELO DE ALARCÓN',
      resumen: 'Instalación eléctrica completa de 600m², control de iluminación DALI de 45 zonas y sistema solar fotovoltaico de 15 kWp con baterías LFP.',
      img: '/images/villa_loxone.png',
      metricas: ['⚡ Control DALI 45 Zonas', '☀️ 15 kWp Generación Solar', '🔋 15 kWh Batería LFP'],
    },
    {
      clave: 'solar-park',
      titulo: 'SEDE INDUSTRIAL EN GUADARRAMA',
      categoria: 'FOTOVOLTAICA INDUSTRIAL • GUADARRAMA',
      resumen: 'Sistema fotovoltaico en cubierta de 120 kWp con inversor trifásico y acumulación en baterías de 80 kWh con inyección cero a red.',
      img: '/images/solar_industrial.png',
      metricas: ['⚡ 120 kWp Fotovoltaica', '🔋 80 kWh Acumulación', '🌱 45 Ton CO₂ Evitadas'],
    },
    {
      clave: 'data-panel',
      titulo: 'INFRAESTRUCTURA DE CUADROS EN MADRID',
      categoria: 'REFORMAS DE POTENCIA • MADRID CAPITAL',
      resumen: 'Sustitución de cuadro general de mando de 250A con termografía preventiva FLIR y sistemas de auto-reenganche diferencial superinmunizado.',
      img: '/images/smart_panel.png',
      metricas: ['⚡ 250A Trifásico REBT', '🔥 Termografía FLIR', '🛡️ Auto-Rearme Inteligente'],
    },
    {
      clave: 'ev-charging',
      titulo: 'PUNTOS DE RECARGA EN LA MORALEJA',
      categoria: 'MOVILIDAD ELÉCTRICA • LA MORALEJA',
      resumen: 'Doble cargador trifásico Wallbox de 22 kW con balanceo dinámico de potencia para proteger la instalación eléctrica principal.',
      img: '/images/ev_charging.png',
      metricas: ['⚡ 22 kW Carga Rápida', '🚘 Balanceo Dinámico', '📱 Gestión App Dedicated'],
    },
  ];

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 450, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -450, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="proyectos"
      style={{
        width: '100%',
        backgroundColor: '#050A15',
        padding: '120px 0 100px 0',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 4vw 40px 4vw' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
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
              02 // HORIZONTAL CASE STUDY SHOWCASE
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
                margin: 0,
              }}
            >
              PROYECTOS Y <br />
              <span style={{ color: 'var(--color-electrico)' }}>CASOS DE INGENIERÍA</span>
            </h2>
          </div>

          {/* CONTROLES DE DESPLAZAMIENTO HORIZONTAL */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '10px', color: '#64748B', letterSpacing: '1px', marginRight: '12px' }}>
              DESLIZA ↔
            </span>
            <button
              onClick={scrollLeft}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#0B111D',
                border: '1px solid var(--color-electrico-borde)',
                color: 'var(--color-electrico)',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-electrico)';
                e.currentTarget.style.boxShadow = '0 0 20px var(--color-electrico-glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-electrico-borde)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-electrico)',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px var(--color-electrico-glow)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* PISTA HORIZONTAL DE TARJETAS DE PROYECTOS */}
      <div
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          gap: '32px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: '0 4vw 40px 4vw',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {proyectos.map((proj) => (
          <div
            key={proj.clave}
            style={{
              minWidth: 'clamp(320px, 80vw, 520px)',
              maxWidth: '560px',
              backgroundColor: '#0B111D',
              borderRadius: '28px',
              overflow: 'hidden',
              border: '1px solid var(--color-electrico-borde)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
              scrollSnapAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = 'var(--color-electrico)';
              e.currentTarget.style.boxShadow = '0 0 35px var(--color-electrico-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--color-electrico-borde)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.7)';
            }}
          >
            {/* PORTADA FOTOGRÁFICA */}
            <div style={{ position: 'relative', height: '280px', width: '100%', overflow: 'hidden' }}>
              <img
                src={proj.img}
                alt={proj.titulo}
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
                  background: 'linear-gradient(180deg, transparent 40%, rgba(11, 17, 29, 0.95) 100%)',
                }}
              ></div>
              <span
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'var(--color-electrico)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '9px',
                  fontWeight: 800,
                  padding: '6px 14px',
                  borderRadius: '100px',
                  letterSpacing: '1px',
                  boxShadow: '0 0 15px var(--color-electrico-glow)',
                }}
              >
                CASO REAL
              </span>
            </div>

            {/* DETALLES DEL PROYECTO */}
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--fuente-tecnica)',
                    fontSize: '10px',
                    color: 'var(--color-electrico)',
                    letterSpacing: '1.5px',
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 700,
                  }}
                >
                  {proj.categoria}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--fuente-titulos)',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    margin: '0 0 12px 0',
                    lineHeight: '1.2',
                  }}
                >
                  {proj.titulo}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--fuente-cuerpo)',
                    fontSize: '13px',
                    color: '#CBD5E1',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                  }}
                >
                  {proj.resumen}
                </p>

                {/* MÉTRICAS DE IMPACTO */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {proj.metricas.map((m, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'rgba(0, 163, 255, 0.1)',
                        border: '1px solid var(--color-electrico-borde)',
                        color: 'var(--color-electrico)',
                        fontFamily: 'var(--fuente-tecnica)',
                        fontSize: '10px',
                        padding: '4px 10px',
                        borderRadius: '100px',
                        fontWeight: 600,
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenModal(proj.clave)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: '1px solid var(--color-electrico-borde)',
                  color: '#FFFFFF',
                  padding: '14px',
                  borderRadius: '14px',
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-electrico)';
                  e.currentTarget.style.borderColor = 'var(--color-electrico)';
                  e.currentTarget.style.boxShadow = '0 0 20px var(--color-electrico-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--color-electrico-borde)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                VER DETALLES TÉCNICOS →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
