import React from 'react';

export default function MinimalStats() {
  const stats = [
    { num: '+250', label: 'PROYECTOS EJECUTADOS EN MADRID Y SIERRA', tag: 'CIE & LOXONE' },
    { num: '100%', label: 'CUMPLIMIENTO NORMATIVO REBT & ITC-BT', tag: 'SEGURIDAD REBT' },
    { num: '+15', label: 'AÑOS DE TRAYECTORIA EN INGENIERÍA ELÉCTRICA', tag: 'EXPERIENCIA CERTIFICADA' },
    { num: '95%', label: 'AUTOCONSUMO FOTOVOLTAICO CON BATERÍAS LFP', tag: 'EFICIENCIA MÁXIMA' },
  ];

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#030508',
        padding: '80px 4vw',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
        }}
      >
        {stats.map((s, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#0B111D',
              border: '1px solid var(--color-electrico-borde)',
              borderRadius: '20px',
              padding: '28px 24px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--color-electrico)';
              e.currentTarget.style.boxShadow = '0 0 25px var(--color-electrico-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--color-electrico-borde)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '9px',
                  color: 'var(--color-electrico)',
                  letterSpacing: '1.5px',
                  background: 'rgba(0, 163, 255, 0.1)',
                  border: '1px solid var(--color-electrico-borde)',
                  padding: '3px 10px',
                  borderRadius: '100px',
                  fontWeight: 700,
                }}
              >
                {s.tag}
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-electrico)', boxShadow: '0 0 8px var(--color-electrico)' }}></span>
            </div>

            <span
              style={{
                fontFamily: 'var(--fuente-titulos)',
                fontSize: 'clamp(2.8rem, 4vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--color-electrico)',
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                marginBottom: '12px',
                textShadow: '0 0 20px var(--color-electrico-glow)',
              }}
            >
              {s.num}
            </span>
            <span
              style={{
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '11px',
                color: '#94A3B8',
                letterSpacing: '1.2px',
                lineHeight: '1.5',
                textTransform: 'uppercase',
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
