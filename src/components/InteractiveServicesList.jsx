import React, { useState } from 'react';

export default function InteractiveServicesList() {
  const [activeIdx, setActiveIdx] = useState(0);

  const servicios = [
    {
      num: '01',
      titulo: 'AUTOMATIZACIÓN RESIDENCIAL LOXONE & DALI',
      subtitulo: 'SISTEMAS INTELIGENTES DE PROCESAMIENTO LOCAL',
      desc: 'Gestión unificada de iluminación DALI, persianas automáticas, climatización por zonas y control de accesos con servidores Loxone de procesamiento local sin cuotas mensuales ni dependencia de la nube.',
      img: '/images/villa_loxone.png',
      tags: ['Loxone Certified Partner', 'Control DALI 45 Zonas', 'Procesamiento Local'],
      specs: { procesador: 'Miniserver V2', protocolo: 'DALI 2 / Tree', respuesta: '< 10 ms' },
    },
    {
      num: '02',
      titulo: 'ENERGÍA FOTOVOLTAICA & BATERÍAS LFP',
      subtitulo: 'GENERACIÓN SOLAR & ACUMULACIÓN EN LITIO',
      desc: 'Diseño e integración de paneles solares de alta eficiencia con inversores trifásicos y acumulación en baterías LFP para maximizar el autoconsumo directo y reducir la factura hasta un 95%.',
      img: '/images/solar_industrial.png',
      tags: ['Autoconsumo 95%', 'Inyección Cero a Red', 'Baterías LFP Litio'],
      specs: { eficiencia: '98.4%', acumulacion: 'Ferrofosfato Litio', rendimiento: '95% Autoconsumo' },
    },
    {
      num: '03',
      titulo: 'CUADROS ELÉCTRICOS & PROTECCIÓN REBT',
      subtitulo: 'REFORMAS DE POTENCIA Y SEGURIDAD INDUSTRIAL',
      desc: 'Montaje y renovación integral de cuadros generales de mando con protección contra sobretensiones permanentes y transitorias, IGA automatizado y diferenciales superinmunizados.',
      img: '/images/smart_panel.png',
      tags: ['Normativa REBT', 'Diferenciales SI', 'Protección Sobretensiones'],
      specs: { potencia: 'Hasta 400A', respuesta: 'Superinmunizada Class A', certificacion: 'Comunidad de Madrid' },
    },
    {
      num: '04',
      titulo: 'PUNTOS DE RECARGA VEHÍCULO ELÉCTRICO (EV)',
      subtitulo: 'ESTACIONES WALLBOX & BALANCEO DINÁMICO',
      desc: 'Instalación de cargadores monofásicos y trifásicos de hasta 22 kW con balanceo dinámico de potencia para proteger la instalación y canalizar excedentes solares.',
      img: '/images/ev_charging.png',
      tags: ['Instalación ITC-BT-52', 'Balanceo Dinámico', 'Carga Solar Directa'],
      specs: { velocidad: '22 kW Trifásico', protocolo: 'OCPP 1.6J', proteccion: 'ITC-BT-52 Dedicada' },
    },
    {
      num: '05',
      titulo: 'CERTIFICADOS CIE & TERMOGRAFÍA FLIR',
      subtitulo: 'LEGALIZACIÓN OFICIAL Y DIAGNÓSTICO PREVENTIVO',
      desc: 'Inspección de puntos calientes mediante cámara térmica de infrarrojos FLIR y tramitación oficial de Boletines Eléctricos de la Comunidad de Madrid en 24-48 horas.',
      img: '/images/gallery_1.png',
      tags: ['Boletín Oficial CIE', 'Cámara Térmica FLIR', 'Auditoría de Potencia'],
      specs: { entrega: '24 - 48 Horas', resolucion: 'Infrarroja FLIR HD', cobertura: 'Madrid & Sierra' },
    },
  ];

  const current = servicios[activeIdx];

  return (
    <section
      id="servicios"
      style={{
        width: '100%',
        backgroundColor: '#030508',
        padding: '120px 4vw',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* ENCABEZADO */}
        <div style={{ marginBottom: '60px' }}>
          <span
            style={{
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              color: '#FFEE00',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            03 // TECHNICAL SERVICES & CAPABILITIES
          </span>
          <h2
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
            }}
          >
            LISTADO INTERACTIVO DE <br />
            <span style={{ color: '#FFEE00' }}>SERVICIOS DE INGENIERÍA</span>
          </h2>
        </div>

        {/* LISTADO INTERACTIVO CON IMAGEN Y PARÁMETROS TÉCNICOS EN 3D */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* COLUMNA IZQUIERDA: LISTA INTERACTIVA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {servicios.map((srv, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={srv.num}
                  onMouseEnter={() => setActiveIdx(idx)}
                  style={{
                    padding: '24px',
                    borderRadius: '20px',
                    backgroundColor: isActive ? '#0B111D' : 'transparent',
                    border: isActive ? '1px solid #FFEE00' : '1px solid rgba(255, 255, 255, 0.06)',
                    boxShadow: isActive ? '0 0 30px rgba(255, 238, 0, 0.15)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginBottom: isActive ? '12px' : '0',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--fuente-tecnica)',
                        fontSize: '14px',
                        fontWeight: 800,
                        color: isActive ? '#FFEE00' : '#475569',
                      }}
                    >
                      {srv.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--fuente-titulos)',
                        fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                        fontWeight: 800,
                        color: isActive ? '#FFFFFF' : '#94A3B8',
                        margin: 0,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {srv.titulo}
                    </h3>
                  </div>

                  {isActive && (
                    <div style={{ paddingLeft: '32px' }}>
                      <p
                        style={{
                          fontFamily: 'var(--fuente-cuerpo)',
                          fontSize: '13px',
                          color: '#CBD5E1',
                          lineHeight: '1.6',
                          marginBottom: '16px',
                        }}
                      >
                        {srv.desc}
                      </p>

                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {srv.tags.map((t, i) => (
                          <span
                            key={i}
                            style={{
                              background: 'rgba(255, 238, 0, 0.1)',
                              border: '1px solid rgba(255, 238, 0, 0.3)',
                              color: '#FFEE00',
                              fontFamily: 'var(--fuente-tecnica)',
                              fontSize: '10px',
                              padding: '4px 10px',
                              borderRadius: '100px',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* COLUMNA DERECHA: PREVISUALIZACIÓN Y PARÁMETROS TÉCNICOS EN 3D */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '520px',
              borderRadius: '28px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 238, 0, 0.25)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '32px',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={current.img}
              alt={current.titulo}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.7,
                transition: 'all 0.5s ease',
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, rgba(3, 5, 8, 0.6) 0%, rgba(3, 5, 8, 0.92) 100%)',
              }}
            ></div>

            {/* TAG SUPERIOR */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span
                style={{
                  background: '#FFEE00',
                  color: '#030508',
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '10px',
                  fontWeight: 800,
                  padding: '6px 14px',
                  borderRadius: '100px',
                  letterSpacing: '1.5px',
                }}
              >
                ESPECIALIDAD // {current.num}
              </span>
            </div>

            {/* PARÁMETROS TÉCNICOS DENTRO DE LA FOTO */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span
                style={{
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '10px',
                  color: '#FFEE00',
                  letterSpacing: '2px',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                {current.subtitulo}
              </span>

              <h4
                style={{
                  fontFamily: 'var(--fuente-titulos)',
                  fontSize: '1.6rem',
                  color: '#FFFFFF',
                  margin: '0 0 20px 0',
                }}
              >
                {current.titulo}
              </h4>

              {/* SPECIFICATION GRID */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  background: 'rgba(3, 5, 8, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '16px',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {Object.entries(current.specs).map(([k, v], i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '8px', color: '#64748B', textTransform: 'uppercase' }}>
                      {k}
                    </span>
                    <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '11px', color: '#FFEE00', fontWeight: 700, marginTop: '2px' }}>
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
