import React from 'react';

export default function FinalCircuitContact({ onOpenQuote }) {
  return (
    <section
      id="contacto"
      style={{
        width: '100%',
        backgroundColor: '#030508',
        padding: '140px 4vw 100px',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* GLOW DE CIRCUITO EN FONDO */}
      <div
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 238, 0, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      ></div>

      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '11px',
            color: '#FFEE00',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '20px',
          }}
        >
          05 // END OF CIRCUIT • CONTACT SYSTEM
        </span>

        <h2
          style={{
            fontFamily: 'var(--fuente-titulos)',
            fontSize: 'clamp(2.8rem, 6.5vw, 6rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
            marginBottom: '40px',
            textTransform: 'uppercase',
          }}
        >
          ¿TIENES UN PROYECTO? <br />
          <span style={{ color: '#FFEE00' }}>HABLEMOS.</span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--fuente-cuerpo)',
            fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
            color: '#94A3B8',
            maxWidth: '650px',
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}
        >
          Asesoramiento técnico directo con el <strong>Ingeniero Kerling Abraham Natale Hidalgo</strong>. Evaluamos tu reforma de cuadro, instalación domótica Loxone o proyecto fotovoltaico sin compromiso.
        </p>

        {/* BOTÓN CON INTERACCIÓN DE NODO ELÉCTRICO RECEPTOR */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '60px' }}>
          <button
            onClick={onOpenQuote}
            style={{
              background: '#FFEE00',
              color: '#030508',
              border: 'none',
              padding: '20px 48px',
              borderRadius: '100px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '2px',
              cursor: 'pointer',
              boxShadow: '0 0 35px rgba(255, 238, 0, 0.4)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 60px rgba(255, 238, 0, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 35px rgba(255, 238, 0, 0.4)';
            }}
          >
            SOLICITAR PRESUPUESTO →
          </button>

          <a
            href="https://wa.me/34682178499"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(37, 211, 102, 0.1)',
              border: '1px solid #25D366',
              color: '#25D366',
              padding: '20px 40px',
              borderRadius: '100px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            WHATSAPP DIRECTO →
          </a>
        </div>

        {/* DATOS DIRECTOS */}
        <div
          style={{
            display: 'flex',
            justify: 'center',
            gap: '36px',
            flexWrap: 'wrap',
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '12px',
            color: '#64748B',
            letterSpacing: '1px',
          }}
        >
          <span>TELÉFONO: +34 682 17 84 99</span>
          <span>EMAIL: DEN.INFORMACION@GMAIL.COM</span>
          <span>SEDE: GUADARRAMA (MADRID)</span>
        </div>
      </div>
    </section>
  );
}
