import React from 'react';

export default function CertificationsSection() {
  const certificaciones = [
    {
      titulo: 'Instalaciones Eléctricas',
      desc: 'Certificación oficial de seguridad y correcto funcionamiento de instalaciones eléctricas residenciales, comerciales e industriales.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-electrico)" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      ),
      tag: 'Boletín Oficial CIE',
    },
    {
      titulo: 'Sistemas Fotovoltaicos',
      desc: 'Certificación de instalaciones solares para garantizar su legalidad, inyección controlada y máxima eficiencia energética.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFEE00" strokeWidth="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ),
      tag: 'Certificado Fotovoltaico',
    },
    {
      titulo: 'Domótica Avanzada Loxone',
      desc: 'Certificación de sistemas domóticos para hogares inteligentes seguros, con programación local y 100% funcionales.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-electrico)" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="15" x2="23" y2="15"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="15" x2="4" y2="15"></line>
        </svg>
      ),
      tag: 'Loxone Certified Partner',
    },
    {
      titulo: 'Acometidas Aéreas y Subterráneas',
      desc: 'Certificación de acometidas de energía conforme a la normativa vigente de la compañía distribuidora eléctrica.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFEE00" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      tag: 'Normativa Distribuidora',
    },
  ];

  return (
    <section
      id="certificaciones"
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
                  backgroundColor: idx === 0 ? 'rgba(255, 238, 0, 0.12)' : 'rgba(0, 163, 255, 0.08)',
                  border: idx === 0 ? '1px solid rgba(255, 238, 0, 0.4)' : '1px solid var(--color-electrico-borde)',
                  color: idx === 0 ? '#FFEE00' : 'var(--color-electrico)',
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
