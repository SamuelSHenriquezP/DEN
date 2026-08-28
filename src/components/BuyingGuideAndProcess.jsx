import React, { useState } from 'react';

export default function BuyingGuideAndProcess({ onOpenQuote }) {
  const [activeNeed, setActiveNeed] = useState(0);

  const solucionesCliente = [
    {
      icono: '☀️',
      titulo: 'AHORRAR EN MI FACTURA ELÉCTRICA',
      sub: 'EFICIENCIA Y AUTOCONSUMO SOLAR',
      beneficios: [
        'Reducción de hasta un 95% en la factura de la luz.',
        'Acumulación en baterías LFP de litio para disponer de energía de noche.',
        'Instalación llave en mano con tramitación de subvenciones e inyección a red.',
      ],
      accion: 'Calcular mi Ahorro Solar →',
      destacado: 'AHORRO 95%',
    },
    {
      icono: '🛡️',
      titulo: 'REFORMAR MI CUADRO Y EVITAR CORTES',
      sub: 'SEGURIDAD Y PROTECCIÓN REBT',
      beneficios: [
        'Eliminación de saltos diferenciales y disparos fortuitos.',
        'Protección contra sobretensiones transitorias y permanentes.',
        'Revisión termográfica FLIR para detectar puntos calientes con emisión de Boletín CIE en 24h.',
      ],
      accion: 'Solicitar Revisión de Cuadro →',
      destacado: 'BOLETÍN CIE 24H',
    },
    {
      icono: '🤖',
      titulo: 'AUTOMATIZAR MI CASA SIN CUOTAS',
      sub: 'DOMÓTICA INTEGRAL LOXONE',
      beneficios: [
        'Gestión unificada de luces DALI, persianas, climatización y accesos.',
        'Procesamiento 100% local en tu vivienda: funciona aunque falle internet.',
        'Sin suscripciones mensuales ni dependencia de la nube.',
      ],
      accion: 'Diseñar mi Proyecto Domótico →',
      destacado: 'SIN CUOTAS MENSUALES',
    },
    {
      icono: '🚘',
      titulo: 'INSTALAR UN CARGADOR PARA MI VEHÍCULO ELÉCTRICO',
      sub: 'MOVILIDAD INTELIGENTE ITC-BT-52',
      beneficios: [
        'Carga rápida trifásica de hasta 22 kW en tu garaje.',
        'Balanceo dinámico de potencia: jamás saltará el IGA de tu casa.',
        'Canalización automática del excedente de tus paneles solares.',
      ],
      accion: 'Solicitar Instalación EV →',
      destacado: 'BALANCEO DINÁMICO',
    },
  ];

  const pasosProceso = [
    {
      num: '01',
      paso: 'DIAGNÓSTICO TÉCNICO',
      desc: 'Evaluamos tu espacio o instalación existente y escuchamos tus necesidades específicas.',
      tiempo: 'Respuesta en < 24 Horas',
    },
    {
      num: '02',
      paso: 'PRESUPUESTO CERRADO',
      desc: 'Te entregamos una propuesta clara, detallada y sin costes ocultos ni sorpresas.',
      tiempo: 'Presupuesto Transparente',
    },
    {
      num: '03',
      paso: 'EJECUCIÓN & CERTIFICACIÓN',
      desc: 'Supervisión directa por Kerling Natale y emisión de certificado oficial CIE.',
      tiempo: 'Llave en Mano',
    },
  ];

  return (
    <section
      id="como-trabajamos"
      style={{
        width: '100%',
        backgroundColor: '#030712',
        padding: '70px 4vw',
        borderTop: '1px solid var(--color-electrico-borde)',
        borderBottom: '1px solid var(--color-electrico-borde)',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* ENCABEZADO ORIENTADO AL COMPRADOR */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span
            style={{
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              color: 'var(--color-electrico)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            GUÍA RÁPIDA DE SERVICIOS // GUÍA DE CONTRATACIÓN
          </span>
          <h2
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            ¿QUÉ NECESITAS RESOLVER <span style={{ color: 'var(--color-electrico)' }}>EN TU PROYECTO?</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--fuente-cuerpo)',
              fontSize: '16px',
              color: '#94A3B8',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Selecciona el objetivo de tu instalación y descubre la solución técnica óptima con presupuesto transparente y supervisión directa de ingeniero.
          </p>
        </div>

        {/* SELECTOR DE OBJETIVOS / SOLUCIONES CLIENTE */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {solucionesCliente.map((sol, idx) => {
            const isSelected = activeNeed === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveNeed(idx)}
                style={{
                  backgroundColor: isSelected ? '#0B111D' : 'rgba(11, 17, 29, 0.4)',
                  border: isSelected ? '2px solid var(--color-electrico)' : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: isSelected ? '0 0 30px var(--color-electrico-glow)' : 'none',
                  borderRadius: '20px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <span style={{ fontSize: '28px' }}>{sol.icono}</span>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--fuente-tecnica)',
                      fontSize: '9px',
                      color: isSelected ? 'var(--color-electrico)' : '#64748B',
                      letterSpacing: '1px',
                      display: 'block',
                      fontWeight: 700,
                    }}
                  >
                    {sol.sub}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--fuente-titulos)',
                      fontSize: '13px',
                      fontWeight: 800,
                      color: isSelected ? '#FFFFFF' : '#94A3B8',
                      margin: '4px 0 0 0',
                      lineHeight: '1.3',
                    }}
                  >
                    {sol.titulo}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* PANEL DETALLADO DE LA SOLUCIÓN SELECCIONADA */}
        <div
          style={{
            backgroundColor: '#0B111D',
            border: '1px solid var(--color-electrico-borde)',
            borderRadius: '28px',
            padding: '40px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px var(--color-electrico-glow)',
            marginBottom: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                background: 'var(--color-electrico)',
                color: '#FFFFFF',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '10px',
                fontWeight: 800,
                padding: '6px 14px',
                borderRadius: '100px',
                letterSpacing: '1.5px',
                boxShadow: '0 0 15px var(--color-electrico-glow)',
                display: 'inline-block',
                marginBottom: '16px',
              }}
            >
              SOLUCIÓN RECOMENDADA // {solucionesCliente[activeNeed].destacado}
            </span>

            <h3
              style={{
                fontFamily: 'var(--fuente-titulos)',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '0 0 20px 0',
                lineHeight: 1.1,
              }}
            >
              {solucionesCliente[activeNeed].titulo}
            </h3>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {solucionesCliente[activeNeed].beneficios.map((b, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontFamily: 'var(--fuente-cuerpo)',
                    fontSize: '14px',
                    color: '#CBD5E1',
                    lineHeight: '1.5',
                  }}
                >
                  <span style={{ color: 'var(--color-electrico)', fontSize: '16px', marginTop: '1px' }}>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onOpenQuote}
              style={{
                background: 'var(--color-electrico)',
                color: '#FFFFFF',
                border: 'none',
                padding: '18px 40px',
                borderRadius: '100px',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '1.5px',
                cursor: 'pointer',
                boxShadow: '0 0 30px var(--color-electrico-glow)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {solucionesCliente[activeNeed].accion}
            </button>
          </div>

          {/* TARJETA DE GARANTÍAS DIRECTAS */}
          <div
            style={{
              backgroundColor: '#030508',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <h4
              style={{
                fontFamily: 'var(--fuente-titulos)',
                fontSize: '14px',
                color: 'var(--color-electrico)',
                letterSpacing: '2px',
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              GARANTÍAS DIRECTAS DE INGENIERÍA DEN:
            </h4>

            {[
              { t: 'Supervisión Presencial por Ingeniero', d: 'Kerling Natale evalúa y firma personalmente tu instalación.' },
              { t: 'Legalización Oficial Comunidad de Madrid', d: 'Boletines CIE y certificaciones tramitadas en 24-48 horas.' },
              { t: 'Presupuesto Cerrado Sin Sorpresas', d: 'Desglose detallado de materiales de primera marca (Loxone, Schneider, FLIR).' },
              { t: 'Garantía por Escrito en Obra', d: 'Soporte post-instalación y mantenimiento preventivo.' },
            ].map((g, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '18px' }}>🛡️</span>
                <div>
                  <h5 style={{ fontFamily: 'var(--fuente-titulos)', fontSize: '12px', color: '#FFFFFF', margin: 0, fontWeight: 800 }}>
                    {g.t}
                  </h5>
                  <p style={{ fontFamily: 'var(--fuente-cuerpo)', fontSize: '12px', color: '#94A3B8', margin: '2px 0 0 0' }}>
                    {g.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESO EN 3 PASOS CLAROS PARA EL CLIENTE */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span
            style={{
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '10px',
              color: 'var(--color-electrico)',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
            }}
          >
            NUESTRO PROCESO EN 3 PASOS SIMPLES
          </span>
          <h3
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#FFFFFF',
              fontWeight: 800,
              margin: '8px 0 0 0',
              textTransform: 'uppercase',
            }}
          >
            ¿CÓMO TRABAJAMOS JUNTO A TI?
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {pasosProceso.map((p, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#0B111D',
                border: '1px solid var(--color-electrico-borde)',
                borderRadius: '20px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--fuente-titulos)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--color-electrico)',
                    }}
                  >
                    {p.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--fuente-tecnica)',
                      fontSize: '9px',
                      color: 'var(--color-electrico)',
                      background: 'rgba(0, 163, 255, 0.1)',
                      border: '1px solid var(--color-electrico-borde)',
                      padding: '3px 10px',
                      borderRadius: '100px',
                      fontWeight: 700,
                    }}
                  >
                    {p.tiempo}
                  </span>
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--fuente-titulos)',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    margin: '0 0 12px 0',
                  }}
                >
                  {p.paso}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--fuente-cuerpo)',
                    fontSize: '13px',
                    color: '#94A3B8',
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
