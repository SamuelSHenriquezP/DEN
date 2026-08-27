import React from 'react';

export default function PartnersTicker() {
  const partners = [
    { name: 'LOXONE', badge: 'CERTIFIED PARTNER', icon: '⚡' },
    { name: 'SCHNEIDER ELECTRIC', badge: 'REBT PROTECTION', icon: '🛡️' },
    { name: 'FLIR SYSTEMS', badge: 'THERMAL FLIR HD', icon: '🔍' },
    { name: 'WALLBOX', badge: 'ITC-BT-52 EV', icon: '🚘' },
    { name: 'VICTRON ENERGY', badge: 'LFP LITHIUM', icon: '🔋' },
    { name: 'HUAWEI SOLAR', badge: 'TRIFÁSICO 98%', icon: '☀️' },
    { name: 'ABB', badge: 'POWER SWITCHING', icon: '⚙️' },
    { name: 'SIEMENS', badge: 'INDUSTRIAL REBT', icon: '🎛️' },
  ];

  // Duplicamos el array para lograr un scroll infinito perfecto e imperceptible
  const tickerList = [...partners, ...partners, ...partners];

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#060C18',
        borderTop: '1px solid var(--color-electrico-borde)',
        borderBottom: '1px solid var(--color-electrico-borde)',
        padding: '28px 0',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* SOMBRAS DE DESVANECIMIENTO LATERAL */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(90deg, #060C18 0%, transparent 100%)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(270deg, #060C18 0%, transparent 100%)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      ></div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px', paddingLeft: '4vw' }}>
        <span
          style={{
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '9px',
            color: 'var(--color-electrico)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-electrico)', boxShadow: '0 0 8px var(--color-electrico)' }}></span>
          EQUIPAMIENTO & SOCIOS TECNOLÓGICOS CERTIFICADOS
        </span>
      </div>

      {/* CINTA EN MOVIMIENTO INFINITO */}
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 28s linear infinite',
        }}
      >
        {tickerList.map((p, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 24px',
              margin: '0 12px',
              backgroundColor: 'rgba(11, 17, 29, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '100px',
              backdropFilter: 'blur(8px)',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-electrico)';
              e.currentTarget.style.boxShadow = '0 0 20px var(--color-electrico-glow)';
              e.currentTarget.style.transform = 'scale(1.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span style={{ fontSize: '14px' }}>{p.icon}</span>
            <span
              style={{
                fontFamily: 'var(--fuente-titulos)',
                fontSize: '12px',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '1.5px',
              }}
            >
              {p.name}
            </span>
            <span
              style={{
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '9px',
                color: 'var(--color-electrico)',
                background: 'rgba(0, 163, 255, 0.12)',
                padding: '2px 8px',
                borderRadius: '100px',
                fontWeight: 700,
              }}
            >
              {p.badge}
            </span>
          </div>
        ))}
      </div>

      {/* ESTILO CSS KEYFRAMES PARA MARQUEE INFINITO */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
