import React, { useState } from 'react';

const circuitos = [
  { id: 'c1', nombre: 'C1 — Iluminación General', seccion: '1.5 mm²', pia: '10 A', potenciaMax: '2.300 W', curva: 'Curva C', proteccion: 'Diferencial 30mA SI', uso: 'Puntos de luz interior, tiras DALI y balizamiento exterior' },
  { id: 'c2', nombre: 'C2 — Tomas de Corriente Usos Varios', seccion: '2.5 mm²', pia: '16 A', potenciaMax: '3.680 W', curva: 'Curva C', proteccion: 'Diferencial 30mA SI', uso: 'Enchufes generales de salón, dormitorios y zonas de paso' },
  { id: 'c3', nombre: 'C3 — Cocina y Horno', seccion: '6.0 mm²', pia: '25 A', potenciaMax: '5.750 W', curva: 'Curva C', proteccion: 'Diferencial 30mA SI', uso: 'Placa de inducción y horno eléctrico de alta potencia' },
  { id: 'c4', nombre: 'C4 — Lavadora, Lavavajillas y Termo', seccion: '4.0 mm²', pia: '20 A', potenciaMax: '4.600 W', curva: 'Curva C', proteccion: 'Diferencial 30mA SI', uso: 'Electrodomésticos con consumo térmico y motores de bomba' },
  { id: 'c5', nombre: 'C5 — Enchufes de Baño y Auxiliares', seccion: '2.5 mm²', pia: '16 A', potenciaMax: '3.680 W', curva: 'Curva C', proteccion: 'Diferencial 30mA SI', uso: 'Tomas en zonas húmedas con alta sensibilidad diferencial' },
  { id: 'c13', nombre: 'C13 — Punto Recarga Vehículo Eléctrico (EV)', seccion: '10.0 mm²', pia: '32 A', potenciaMax: '7.360 W', curva: 'Curva C', proteccion: 'Diferencial Tipo A + Rearme', uso: 'Cargador Wallbox inteligente con comunicación de balanceo (ITC-BT-52)' },
];

export default function InteractiveSchematic() {
  const [circuitoActivo, setCircuitoActivo] = useState(circuitos[0]);

  return (
    <section id="esquema-unifilar" className="seccion-esquema contenedor seccion-pantalla-completa">
      <div className="encabezado-seccion">
        <span className="insignia-seccion">
          <span className="codigo-indice">05 //</span> ESQUEMA UNIFILAR TÉCNICO INTERACTIVO (REBT)
        </span>
        <h2 className="titulo-seccion">
          DIAGRAMA DE PROTECCIÓN Y <br />
          <span className="texto-gradiente-dorado">DISTRIBUCIÓN DE CIRCUITOS</span>
        </h2>
        <p className="descripcion-seccion">
          Haz clic en cada línea del diagrama para conocer la sección de cable estandarizada, la corriente máxima del magnetotérmico y las medidas de seguridad aplicadas.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '24px',
          width: '100%',
        }}
      >
        {/* UNIFILAR WIRING DIAGRAM PANEL */}
        <div
          style={{
            background: '#070A12',
            border: '1px solid rgba(255, 238, 0, 0.2)',
            borderRadius: '24px',
            padding: '24px',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px' }}>
            <span style={{ fontSize: '10px', color: '#00E5FF', fontWeight: '700', letterSpacing: '1px' }}>
              ⚡ ACOMETIDA MONOFÁSICA / TRIFÁSICA 230V / 400V
            </span>
            <span style={{ fontSize: '10px', color: '#FFEE00', fontWeight: '700' }}>
              IGA 40A + PST SOBRETENSIONES
            </span>
          </div>

          {/* MAIN BUSBAR REPRESENTATION */}
          <div style={{ width: '100%', height: '3px', background: '#FFEE00', marginBottom: '20px', borderRadius: '100px', boxShadow: '0 0 10px #FFEE00' }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {circuitos.map((c) => {
              const isSel = c.id === circuitoActivo.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setCircuitoActivo(c)}
                  style={{
                    background: isSel ? 'rgba(255, 238, 0, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                    border: isSel ? '1.5px solid #FFEE00' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    padding: '14px 18px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    color: '#fff',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--fuente-tecnica)',
                        fontSize: '11px',
                        fontWeight: '800',
                        color: isSel ? '#FFEE00' : '#00E5FF',
                        background: 'rgba(0,0,0,0.5)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      {c.pia}
                    </span>
                    <div>
                      <strong style={{ fontSize: '12px', display: 'block' }}>{c.nombre}</strong>
                      <span style={{ fontSize: '10px', color: '#94A3B8' }}>Sección: {c.seccion}</span>
                    </div>
                  </div>

                  <span style={{ fontSize: '11px', fontFamily: 'var(--fuente-tecnica)', color: isSel ? '#FFEE00' : '#CBD5E1' }}>
                    {c.potenciaMax}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* DETAILED CIRCUIT INSPECTION PANEL */}
        <div
          style={{
            background: 'var(--tarjeta-base)',
            border: '1px solid rgba(0, 229, 255, 0.25)',
            borderRadius: '24px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span style={{ fontSize: '10px', color: '#00E5FF', fontWeight: '700', letterSpacing: '1px' }}>
              ESPECIFICACIÓN DE CIRCUITO REBT
            </span>
            <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: '800', margin: '8px 0 16px' }}>
              {circuitoActivo.nombre}
            </h3>

            <p style={{ fontSize: '12px', color: '#CBD5E1', lineHeight: '1.6', marginBottom: '20px' }}>
              {circuitoActivo.uso}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#070A12', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                <span style={{ color: '#94A3B8' }}>Sección de Conductor (Cobre):</span>
                <strong style={{ color: '#FFEE00', fontFamily: 'var(--fuente-tecnica)' }}>{circuitoActivo.seccion}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                <span style={{ color: '#94A3B8' }}>Calibre Magnetotérmico (PIA):</span>
                <strong style={{ color: '#00E5FF', fontFamily: 'var(--fuente-tecnica)' }}>{circuitoActivo.pia} ({circuitoActivo.curva})</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                <span style={{ color: '#94A3B8' }}>Potencia Máxima Admisible:</span>
                <strong style={{ color: '#fff', fontFamily: 'var(--fuente-tecnica)' }}>{circuitoActivo.potenciaMax}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                <span style={{ color: '#94A3B8' }}>Protección Diferencial:</span>
                <strong style={{ color: '#25D366' }}>{circuitoActivo.proteccion}</strong>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '20px', fontSize: '10px', color: '#94A3B8', textAlign: 'center' }}>
            ✓ Dimensionado según la Guía Técnica de Aplicación de la Normativa ITC-BT-25.
          </div>
        </div>
      </div>
    </section>
  );
}
