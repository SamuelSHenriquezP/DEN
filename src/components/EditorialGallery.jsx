import React from 'react';

export default function EditorialGallery() {
  const items = [
    {
      img: '/images/gallery_1.png',
      tag: '[CIRCUIT #01] TERMOGRAFÍA FLIR',
      title: 'Diagnóstico Infrarrojo Preventivo',
      cols: 'span 2',
    },
    {
      img: '/images/gallery_2.png',
      tag: '[LOCATION] LA MORALEJA • POZUELO',
      title: 'Escenas Arquitectónicas DALI',
      cols: 'span 1',
    },
    {
      img: '/images/gallery_3.png',
      tag: '[PRECISION] HERRAMIENTAS Y COBRE',
      title: 'Conexionado de Alta Fidelidad',
      cols: 'span 1',
    },
    {
      img: '/images/solar_industrial.png',
      tag: '[SYSTEM] 120 kWp FOTOVOLTAICA',
      title: 'Sede Industrial Guadarrama',
      cols: 'span 2',
    },
  ];

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#030508',
        padding: '100px 4vw',
        boxSizing: 'border-box',
      }}
    >
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
            04 // INDUSTRIAL & ARCHITECTURAL GALLERY
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
            GALERÍA EDITORIAL <br />
            <span style={{ color: 'var(--color-electrico)' }}>DE REGISTROS EN OBRA</span>
          </h2>
        </div>

        {/* REJILLA ASIMÉTRICA EDITORIAL */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              data-cursor="VIEW"
              style={{
                position: 'relative',
                height: '360px',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid var(--color-electrico-borde)',
                cursor: 'pointer',
                transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-electrico)';
                e.currentTarget.style.boxShadow = '0 0 30px var(--color-electrico-glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-electrico-borde)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(180deg, transparent 40%, rgba(3, 5, 8, 0.9) 100%)',
                  pointerEvents: 'none',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--fuente-tecnica)',
                    fontSize: '10px',
                    color: 'var(--color-electrico)',
                    letterSpacing: '2px',
                    display: 'block',
                    marginBottom: '4px',
                    fontWeight: 700,
                  }}
                >
                  {item.tag}
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--fuente-titulos)',
                    fontSize: '1.2rem',
                    color: '#FFFFFF',
                    margin: 0,
                  }}
                >
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
