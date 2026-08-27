import React, { useState } from 'react';

const estancias = [
  {
    id: 'salon',
    nombre: 'Salón Principal',
    icono: '🛋️',
    consumo: '320 W',
    potenciaLuz: '75%',
    tempClima: '22.0 °C',
    escena: 'Modo Cine DALI',
    coordenadas: { top: '22%', left: '18%', width: '38%', height: '36%' },
    detalles: 'Iluminación regulable DALI mediante tiras LED integradas en foso de pladur y focos empotrados. Control desde pulsador Touch Loxone.',
  },
  {
    id: 'cocina',
    nombre: 'Cocina & Comedor',
    icono: '🍳',
    consumo: '580 W',
    potenciaLuz: '100%',
    tempClima: '21.5 °C',
    escena: 'Trabajo & Preparación (4000 K)',
    coordenadas: { top: '22%', left: '60%', width: '35%', height: '36%' },
    detalles: 'Luz blanca neutra de alta reproducción cromática (CRI>90). Sensor de presencia inteligente para encendido automático sin contacto.',
  },
  {
    id: 'dormitorio',
    nombre: 'Dormitorio Principal',
    icono: '🛏️',
    consumo: '110 W',
    potenciaLuz: '30%',
    tempClima: '20.5 °C',
    escena: 'Descanso Cálido (2200 K)',
    coordenadas: { top: '62%', left: '18%', width: '38%', height: '32%' },
    detalles: 'Persianas motorizadas coordinadas con la hora solar. Apagado general de vivienda mediante triple pulsación al lado de la cama.',
  },
  {
    id: 'garaje',
    nombre: 'Garaje & Recarga EV',
    icono: '🚗',
    consumo: '7.4 kW',
    potenciaLuz: '100%',
    tempClima: '18.0 °C',
    escena: 'Carga Dinámica Fotovoltaica',
    coordenadas: { top: '62%', left: '60%', width: '35%', height: '32%' },
    detalles: 'Cargador Wallbox inteligente conectado al medidor bidireccional. Prioriza el excedente de las placas solares para cargar a coste cero.',
  },
];

export default function InteractiveFloorplan() {
  const [estanciaActiva, setEstanciaActiva] = useState('salon');

  const activa = estancias.find((e) => e.id === estanciaActiva) || estancias[0];

  return (
    <section id="planificador-domotico" className="seccion-planificador contenedor seccion-pantalla-completa">
      <div className="encabezado-seccion">
        <span className="insignia-seccion">
          <span className="codigo-indice">04 //</span> PLANO INTERACTIVO DE VIVIENDA INTELIGENTE
        </span>
        <h2 className="titulo-seccion">
          EXPLORA EL CONTROL <br />
          <span className="texto-gradiente-dorado">DOMÓTICO POR ESTANCIAS</span>
        </h2>
        <p className="descripcion-seccion">
          Haz clic en las distintas zonas del plano para visualizar en tiempo real la gestión de iluminación, climatización y energía gestionada por el sistema Loxone.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '24px',
          width: '100%',
          alignItems: 'stretch',
        }}
      >
        {/* INTERACTIVE BLUEPRINT CANVAS */}
        <div
          style={{
            background: '#070A12',
            border: '1px solid rgba(255, 238, 0, 0.2)',
            borderRadius: '24px',
            padding: '24px',
            position: 'relative',
            minHeight: '380px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '1.5px', color: '#0066FF' }}>
              📐 PLANO TÉCNICO DE DISTRIBUCIÓN (VILLA MODELO)
            </span>
            <span style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'var(--fuente-tecnica)' }}>
              REBT ITC-BT-51 • SERVIDORES LOXONE TREE
            </span>
          </div>

          {/* BLUEPRINT GRID CONTAINMENT */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '320px',
              border: '1.5px dashed rgba(255, 255, 255, 0.12)',
              borderRadius: '16px',
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.03) 0%, transparent 80%)',
            }}
          >
            {estancias.map((est) => {
              const isSelected = est.id === estanciaActiva;
              return (
                <button
                  key={est.id}
                  onClick={() => setEstanciaActiva(est.id)}
                  style={{
                    position: 'absolute',
                    top: est.coordenadas.top,
                    left: est.coordenadas.left,
                    width: est.coordenadas.width,
                    height: est.coordenadas.height,
                    background: isSelected ? 'rgba(255, 238, 0, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                    border: isSelected ? '2px solid #FFEE00' : '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    color: '#fff',
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isSelected ? '0 0 25px rgba(255, 238, 0, 0.3)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.3rem' }}>{est.icono}</span>
                    <span
                      style={{
                        fontSize: '9px',
                        fontWeight: '700',
                        padding: '3px 8px',
                        borderRadius: '100px',
                        background: isSelected ? '#FFEE00' : 'rgba(255,255,255,0.08)',
                        color: isSelected ? '#000' : '#CBD5E1',
                      }}
                    >
                      {est.consumo}
                    </span>
                  </div>

                  <div>
                    <strong style={{ fontSize: '12px', display: 'block', textAlign: 'left' }}>{est.nombre}</strong>
                    <span style={{ fontSize: '9px', color: isSelected ? '#FFEE00' : '#94A3B8', display: 'block', textAlign: 'left' }}>
                      {est.escena}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* DETAILS SIDE PANEL */}
        <div
          style={{
            background: 'var(--tarjeta-base)',
            border: '1px solid rgba(255, 238, 0, 0.2)',
            borderRadius: '24px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '2rem' }}>{activa.icono}</span>
              <div>
                <span style={{ fontSize: '10px', color: '#FFEE00', fontWeight: '700', letterSpacing: '1px' }}>
                  ZONA SELECCIONADA
                </span>
                <h3 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: '800' }}>{activa.nombre}</h3>
              </div>
            </div>

            <p style={{ fontSize: '12px', color: '#CBD5E1', lineHeight: '1.6', marginBottom: '20px' }}>
              {activa.detalles}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px' }}>
                <span style={{ color: '#94A3B8' }}>Consumo Eléctrico:</span>
                <strong style={{ color: '#FFEE00' }}>{activa.consumo}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px' }}>
                <span style={{ color: '#94A3B8' }}>Nivel Iluminación DALI:</span>
                <strong style={{ color: '#0066FF' }}>{activa.potenciaLuz}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px' }}>
                <span style={{ color: '#94A3B8' }}>Temperatura Clima:</span>
                <strong style={{ color: '#fff' }}>{activa.tempClima}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                <span style={{ color: '#94A3B8' }}>Escena Activa:</span>
                <strong style={{ color: '#FFEE00' }}>{activa.escena}</strong>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/34682178499"
            target="_blank"
            rel="noopener noreferrer"
            className="boton-accion dorado-principal"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Consultar Automatización para mi Vivienda</span>
          </a>
        </div>
      </div>
    </section>
  );
}
