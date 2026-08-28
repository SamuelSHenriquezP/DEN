import React from 'react';

export default function DockNav({ activeIndex, onNavigate, onOpenQuote }) {
  const sections = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'servicios', label: 'SERVICIOS' },
    { id: 'domotica-loxone', label: 'LOXONE' },
    { id: 'nosotros', label: 'SOBRE MÍ' },
    { id: 'certificaciones', label: 'CERTIFICACIONES' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: 'auto',
        maxWidth: '92vw',
      }}
    >
      <nav
        style={{
          background: 'rgba(3, 5, 8, 0.88)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          backdropFilter: 'blur(16px)',
          borderRadius: '100px',
          padding: '8px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 163, 255, 0.1)',
        }}
      >
        {/* LOGO SIMBÓLICO DEN */}
        <button
          onClick={() => onNavigate(0)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#FFEE00',
              boxShadow: '0 0 10px #FFEE00',
            }}
          ></span>
          <span
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: '13px',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '1px',
            }}
          >
            DEN
          </span>
        </button>

        {/* SECCIONES DE LA WEB CON INDICADOR ACTIVO */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {sections.map((sec, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={sec.id}
                onClick={() => onNavigate(idx)}
                style={{
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '10px',
                  fontWeight: 800,
                  color: isActive ? 'var(--color-electrico)' : '#94A3B8',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '1.2px',
                  padding: '4px 8px',
                  borderRadius: '100px',
                  transition: 'all 0.3s ease',
                  borderBottom: isActive ? '2px solid var(--color-electrico)' : '2px solid transparent',
                }}
              >
                {sec.label}
              </button>
            );
          })}
        </div>

        {/* BOTÓN PRESUPUESTO */}
        <button
          onClick={onOpenQuote}
          style={{
            backgroundColor: 'var(--color-electrico)',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '100px',
            padding: '8px 18px',
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '10px',
            fontWeight: 800,
            letterSpacing: '1px',
            cursor: 'pointer',
            boxShadow: '0 0 15px var(--color-electrico-glow)',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          PRESUPUESTO ⚡
        </button>
      </nav>
    </header>
  );
}
