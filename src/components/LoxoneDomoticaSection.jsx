import React from 'react';

export default function LoxoneDomoticaSection({ onOpenQuote }) {
  const pilares = [
    {
      titulo: 'Automatización Integral de Viviendas',
      desc: 'Una casa inteligente no es solo control remoto, es automatización real. El sistema aprende tus hábitos y optimiza cada función para mejorar el confort y reducir el consumo energético.',
      icon: '🤖',
      caracteristicas: [
        'Control total desde app o pulsadores inteligentes',
        'Escenarios automáticos personalizados',
        'Integración completa de todos los sistemas',
        'Gestión centralizada y eficiente',
      ],
    },
    {
      titulo: 'Eficiencia Energética Inteligente',
      desc: 'Loxone permite gestionar el consumo energético de forma avanzada, priorizando autoconsumo solar, climatización eficiente y optimización automática de recursos.',
      icon: '⚡',
      caracteristicas: [
        'Control inteligente de climatización',
        'Gestión automática de persianas según orientación solar',
        'Integración con instalaciones fotovoltaicas',
        'Monitorización energética en tiempo real',
      ],
    },
    {
      titulo: 'Seguridad y Control de Accesos',
      desc: 'Mayor protección y tranquilidad gracias a sistemas integrados de control de acceso, alarmas técnicas y simulación de presencia.',
      icon: '🛡️',
      caracteristicas: [
        'Videoportero conectado',
        'Control de accesos inteligente',
        'Notificaciones en tiempo real',
        'Automatización de escenarios de seguridad',
      ],
    },
    {
      titulo: 'Audio Multiroom y Experiencia Premium',
      desc: 'Sistema de sonido integrado en toda la vivienda con control centralizado y sin instalaciones visibles, ofreciendo una experiencia moderna y elegante.',
      icon: '🎵',
      caracteristicas: [
        'Sonido en cada estancia',
        'Control centralizado desde app',
        'Integración con iluminación y escenas',
        'Instalación limpia y profesional',
      ],
    },
  ];

  return (
    <section
      id="domotica-loxone"
      style={{
        width: '100%',
        height: '100vh',
        maxHeight: '100vh',
        backgroundColor: '#070E1A',
        paddingTop: 'clamp(85px, 12vh, 115px)',
        paddingBottom: 'clamp(30px, 4vh, 50px)',
        paddingLeft: '4vw',
        paddingRight: '4vw',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* ENCABEZADO DE SECCIÓN CON BADGE LOXONE */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid #10B981',
              padding: '4px 14px',
              borderRadius: '100px',
              marginBottom: '10px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 8px #10B981',
              }}
            ></span>
            <span
              style={{
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '10px',
                color: '#10B981',
                fontWeight: 800,
                letterSpacing: '2px',
              }}
            >
              PARTNER OFFICIAL LOXONE
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.05,
              marginBottom: '10px',
            }}
          >
            Domótica Avanzada <span style={{ color: 'var(--color-electrico)' }}>Loxone</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--fuente-cuerpo)',
              fontSize: 'clamp(0.88rem, 1vw, 1rem)',
              color: '#94A3B8',
              maxWidth: '780px',
              margin: '0 auto',
              lineHeight: '1.5',
            }}
          >
            Como <strong>Partner Loxone</strong>, ofrecemos soluciones integrales que conectan iluminación, climatización, persianas, seguridad, audio y gestión energética en un único sistema inteligente. Todo funciona de forma automática.
          </p>
        </div>

        {/* REJILLA DE LOS 4 PILARES LOXONE */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          {pilares.map((pilar, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#0E1B2E',
                border: '1px solid var(--color-electrico-borde)',
                borderRadius: '18px',
                padding: '20px 18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-electrico)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 163, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-electrico-borde)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{pilar.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--fuente-titulos)',
                    fontSize: '15px',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    marginBottom: '8px',
                  }}
                >
                  {pilar.titulo}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--fuente-cuerpo)',
                    fontSize: '11.5px',
                    color: '#94A3B8',
                    lineHeight: '1.45',
                    marginBottom: '12px',
                  }}
                >
                  {pilar.desc}
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {pilar.caracteristicas.map((c, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: 'var(--fuente-cuerpo)',
                      fontSize: '11px',
                      color: '#CBD5E1',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '4px',
                    }}
                  >
                    <span style={{ color: '#10B981', fontWeight: 800 }}>✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BANNER DESTACADO DE CONSULTA LOXONE */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0A1628 0%, #0E223D 100%)',
            border: '1px solid var(--color-electrico-borde)',
            borderRadius: '18px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <span
              style={{
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '11px',
                color: 'var(--color-electrico)',
                letterSpacing: '2px',
                fontWeight: 700,
                display: 'block',
                marginBottom: '8px',
              }}
            >
              TECNOLOGÍA LOXONE SMART HOME
            </span>
            <h3
              style={{
                fontFamily: 'var(--fuente-titulos)',
                fontSize: '24px',
                color: '#FFFFFF',
                fontWeight: 800,
                marginBottom: '10px',
              }}
            >
              Viviendas preparadas para el futuro
            </h3>
            <p style={{ fontFamily: 'var(--fuente-cuerpo)', fontSize: '14px', color: '#94A3B8', margin: 0, lineHeight: '1.6' }}>
              Instalación y programación de casas inteligentes con tecnología Loxone. Te asesoramos y diseñamos tu proyecto a medida. Instalación limpia, profesional y totalmente personalizada.
            </p>
          </div>

          <a
            href="https://wa.me/34682178499?text=Hola,%20me%20interesa%20un%20proyecto%20de%20dom%C3%B3tica%20Loxone."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--color-electrico)',
              color: '#FFFFFF',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '12px',
              fontWeight: 800,
              padding: '16px 36px',
              borderRadius: '100px',
              textDecoration: 'none',
              letterSpacing: '1.5px',
              boxShadow: '0 0 25px var(--color-electrico-glow)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            SOLICITAR PROYECTO LOXONE →
          </a>
        </div>
      </div>
    </section>
  );
}
