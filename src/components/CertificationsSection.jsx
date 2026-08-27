import React from 'react';

export default function CertificationsSection() {
  const certificaciones = [
    {
      titulo: 'Instalaciones Eléctricas',
      desc: 'Certificación oficial de seguridad y correcto funcionamiento de instalaciones eléctricas residenciales, comerciales e industriales.',
      icon: '📜',
      tag: 'Boletín Oficial CIE',
    },
    {
      titulo: 'Sistemas Fotovoltaicos',
      desc: 'Certificación de instalaciones solares para garantizar su legalidad, inyección controlada y máxima eficiencia energética.',
      icon: '☀️',
      tag: 'Certificado Fotovoltaico',
    },
    {
      titulo: 'Domótica Avanzada Loxone',
      desc: 'Certificación de sistemas domóticos para hogares inteligentes seguros, con programación local y 100% funcionales.',
      icon: '🤖',
      tag: 'Loxone Certified Partner',
    },
    {
      titulo: 'Acometidas Aéreas y Subterráneas',
      desc: 'Certificación de acometidas de energía conforme a la normativa vigente de la compañía distribuidora eléctrica.',
      icon: '⚡',
      tag: 'Normativa Distribuidora',
    },
  ];

  return (
    <section
      id="certificaciones"
      style={{
        width: '100%',
        height: '100vh',
        maxHeight: '100vh',
        backgroundColor: '#050A14',
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
        {/* ENCABEZADO DE SECCIÓN */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span
            style={{
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              color: 'var(--color-electrico)',
              letterSpacing: '3px',
              fontWeight: 800,
              display: 'block',
              marginBottom: '12px',
            }}
          >
            SEGURIDAD & LEGALIDAD REBT
          </span>
          <h2
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.05,
              marginBottom: '20px',
            }}
          >
            Trabajo <span style={{ color: 'var(--color-electrico)' }}>Certificado</span> y Garantizado
          </h2>
          <p
            style={{
              fontFamily: 'var(--fuente-cuerpo)',
              fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
              color: '#94A3B8',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            No solo realizamos el trabajo. Garantizamos su legalidad, seguridad y correcto funcionamiento con certificaciones oficiales tramitadas en la Comunidad de Madrid.
          </p>
        </div>

        {/* REJILLA DE CERTIFICACIONES */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {certificaciones.map((cert, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#0E1B2E',
                border: '1px solid var(--color-electrico-borde)',
                borderRadius: '20px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-electrico)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 163, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-electrico-borde)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{cert.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--fuente-titulos)',
                    fontSize: '18px',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    marginBottom: '12px',
                  }}
                >
                  {cert.titulo}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--fuente-cuerpo)',
                    fontSize: '13px',
                    color: '#94A3B8',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                  }}
                >
                  {cert.desc}
                </p>
              </div>

              <div
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: 'rgba(0, 163, 255, 0.08)',
                  border: '1px solid var(--color-electrico-borde)',
                  color: 'var(--color-electrico)',
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '10px',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '100px',
                  letterSpacing: '1px',
                }}
              >
                ✓ {cert.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
