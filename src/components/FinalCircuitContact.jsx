import React from 'react';

export default function FinalCircuitContact({ onOpenQuote }) {
  return (
    <section
      id="contacto"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#030712',
        padding: '70px 4vw',
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
          background: 'radial-gradient(circle, var(--color-electrico-glow) 0%, transparent 70%)',
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
            fontSize: '10px',
            color: 'var(--color-electrico)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px',
          }}
        >
          05 // END OF CIRCUIT • CONTACT SYSTEM
        </span>

        <h2
          style={{
            fontFamily: 'var(--fuente-titulos)',
            fontSize: 'clamp(2.0rem, 4.2vw, 3.8rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            textTransform: 'uppercase',
          }}
        >
          ¿TIENES UN PROYECTO? <br />
          <span style={{ color: 'var(--color-electrico)' }}>HABLEMOS.</span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--fuente-cuerpo)',
            fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
            color: '#94A3B8',
            maxWidth: '650px',
            margin: '0 auto 24px',
            lineHeight: 1.5,
          }}
        >
          Asesoramiento técnico directo con <strong>Kerling Abraham Natale Hidalgo</strong> (Electricista Especialista). Evaluamos tu reforma de cuadro, instalación domótica Loxone o proyecto fotovoltaico sin compromiso.
        </p>

        {/* BOTÓN CON INTERACCIÓN DE NODO ELÉCTRICO RECEPTOR */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
          <button
            onClick={onOpenQuote}
            style={{
              background: 'var(--color-electrico)',
              color: '#FFFFFF',
              border: 'none',
              padding: '14px 36px',
              borderRadius: '100px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '2px',
              cursor: 'pointer',
              boxShadow: '0 0 25px var(--color-electrico-glow)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 45px var(--color-electrico-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 25px var(--color-electrico-glow)';
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
              padding: '14px 32px',
              borderRadius: '100px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            WHATSAPP DIRECTO →
          </a>
        </div>

        {/* DATOS DIRECTOS AUTÉNTICOS DEN */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '10px',
            color: '#94A3B8',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}
        >
          <span>📞 TELÉFONOS: +34 682 17 84 99 / +34 722 76 74 02</span>
          <span>✉️ EMAIL: DEN.INFORMACION@GMAIL.COM</span>
          <span>📍 SEDE: GUADARRAMA, MADRID</span>
          <span>⏰ HORARIO: L-V 8:00 - 20:00 (URGENCIAS 24H)</span>
        </div>

        {/* REDES SOCIALES OFICIALES */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <a
            href="https://www.instagram.com/dynamic_electric_natale"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#0E1B2E',
              border: '1px solid var(--color-electrico-borde)',
              color: 'var(--color-electrico)',
              padding: '10px 20px',
              borderRadius: '100px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '10px',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '1px',
            }}
          >
            📸 INSTAGRAM @dynamic_electric_natale
          </a>
          <a
            href="https://www.tiktok.com/@dynamic.electric.natale"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#0E1B2E',
              border: '1px solid var(--color-electrico-borde)',
              color: 'var(--color-electrico)',
              padding: '10px 20px',
              borderRadius: '100px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '10px',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '1px',
            }}
          >
            🎵 TIKTOK @dynamic.electric.natale
          </a>
        </div>
      </div>
    </section>
  );
}
