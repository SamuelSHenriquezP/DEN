import React from 'react';

export default function MinimalStats() {
  const stats = [
    { num: '+250', label: 'PROYECTOS EJECUTADOS EN MADRID Y SIERRA' },
    { num: '100%', label: 'CUMPLIMIENTO NORMATIVO REBT & ITC-BT' },
    { num: '+15', label: 'AÑOS DE TRAYECTORIA EN INGENIERÍA ELÉCTRICA' },
    { num: '95%', label: 'AUTOCONSUMO FOTOVOLTAICO CON BATERÍAS LFP' },
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
        }}
      >
        {stats.map((s, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--fuente-titulos)',
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                fontWeight: 800,
                color: '#FFEE00',
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                marginBottom: '12px',
              }}
            >
              {s.num}
            </span>
            <span
              style={{
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '11px',
                color: '#94A3B8',
                letterSpacing: '1.5px',
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
