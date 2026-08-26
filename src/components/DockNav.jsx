import React from 'react';

export default function DockNav({ activeSection, onOpenQuote }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
          background: 'rgba(3, 5, 8, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(16px)',
          borderRadius: '100px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
        }}
      >
        {/* LOGO SIMBÓLICO DEN */}
        <a
          href="#inicio"
          onClick={(e) => scrollToSection(e, 'inicio')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#00E5FF',
              boxShadow: '0 0 10px #00E5FF',
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
        </a>

        {/* SECCIONES */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <a
            href="#proyectos"
            onClick={(e) => scrollToSection(e, 'proyectos')}
            style={{
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '10px',
              fontWeight: 700,
              color: '#CBD5E1',
              textDecoration: 'none',
              letterSpacing: '1.5px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFEE00')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
          >
            WORK
          </a>

          <a
            href="#servicios"
            onClick={(e) => scrollToSection(e, 'servicios')}
            style={{
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '10px',
              fontWeight: 700,
              color: '#CBD5E1',
              textDecoration: 'none',
              letterSpacing: '1.5px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFEE00')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
          >
            SERVICES
          </a>

          <a
            href="#contacto"
            onClick={(e) => scrollToSection(e, 'contacto')}
            style={{
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '10px',
              fontWeight: 700,
              color: '#CBD5E1',
              textDecoration: 'none',
              letterSpacing: '1.5px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFEE00')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
          >
            CONTACT
          </a>
        </div>

        {/* CTA RAPIDO */}
        <button
          onClick={onOpenQuote}
          style={{
            background: '#00E5FF',
            color: '#030508',
            border: 'none',
            padding: '6px 16px',
            borderRadius: '100px',
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '9px',
            fontWeight: 800,
            letterSpacing: '1px',
            cursor: 'pointer',
          }}
        >
          POWER ON →
        </button>
      </nav>
    </header>
  );
}
