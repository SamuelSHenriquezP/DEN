import React, { useState } from 'react';

const escenas = {
  relax: {
    clave: 'relax',
    img: '/images/sim_relax.png',
    titulo: 'AMBIENTE CÁLIDO DE ATARDECER (2.200 K)',
    potenciaBase: 0.38,
    kelvin: 2200,
    colorGlow: 'rgba(255, 170, 50, 0.3)',
    icono: '🌅',
    etiqueta: 'Cálido Atardecer (2.200 K)',
    descripcion: 'Iluminación indirecta de descanso con baja intensidad visual.',
  },
  focus: {
    clave: 'focus',
    img: '/images/sim_focus.png',
    titulo: 'MODO LECTURA Y CONCENTRACIÓN (4.000 K)',
    potenciaBase: 0.65,
    kelvin: 4000,
    colorGlow: 'rgba(255, 255, 240, 0.25)',
    icono: '💡',
    etiqueta: 'Lectura Pura (4.000 K)',
    descripcion: 'Luz blanca neutra óptima para trabajar o leer sin fatiga.',
  },
  neon: {
    clave: 'neon',
    img: '/images/sim_neon.png',
    titulo: 'AMBIENTE CINE Y ENTRETENIMIENTO (6.500 K)',
    potenciaBase: 0.82,
    kelvin: 6500,
    colorGlow: 'rgba(0, 229, 255, 0.3)',
    icono: '🌐',
    etiqueta: 'Modo Cine Nocturno (6.500 K)',
    descripcion: 'Luces de acento para experiencia audiovisual inmersiva.',
  },
  ausencia: {
    clave: 'ausencia',
    img: '/images/sim_ausencia.png',
    titulo: 'MODO VIGILANCIA Y NOCHE (1.800 K)',
    potenciaBase: 0.12,
    kelvin: 1800,
    colorGlow: 'rgba(255, 100, 20, 0.2)',
    icono: '🔒',
    etiqueta: 'Vigilancia Nocturna (1.800 K)',
    descripcion: 'Seguridad pasiva y balizamiento de bajo consumo energético.',
  },
};

export default function AISimulator() {
  const [escenaActiva, setEscenaActiva] = useState('relax');
  const [nivelRegulacion, setNivelRegulacion] = useState(100);

  const escena = escenas[escenaActiva];
  const consumoCalculado = (escena.potenciaBase * (nivelRegulacion / 100)).toFixed(2);
  const brilloFiltro = (nivelRegulacion / 100).toFixed(2);

  return (
    <section id="simulador" className="seccion-simulador contenedor seccion-pantalla-completa">
      <div className="encabezado-seccion">
        <span className="insignia-seccion">
          <span className="codigo-indice">02 //</span> CONTROL ATMOSFÉRICO DE AMBIENTE
        </span>
        <h2 className="titulo-seccion">
          SIMULADOR DE <br />
          <span className="texto-gradiente-dorado">ESCENAS DE ILUMINACIÓN</span>
        </h2>
        <p className="descripcion-seccion">
          Selecciona una escena para observar cómo la combinación de temperatura de color y regulación de intensidad transforma el espacio en tiempo real.
        </p>
      </div>

      <div className="caja-simulador">
        <div className="espacio-trabajo-simulador">
          {/* MUESTRA VISUAL INTERACTIVA DE LA ESTANCIA */}
          <div className="escenario-visual" style={{ position: 'relative', overflow: 'hidden' }}>
            <div
              className="halo-iluminacion-ambiente"
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at 50% 40%, ${escena.colorGlow} 0%, transparent 80%)`,
                opacity: brilloFiltro,
                transition: 'background 0.5s ease, opacity 0.3s ease',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
            <img
              src={escena.img}
              alt={escena.titulo}
              className="imagen-escenario"
              style={{
                filter: `brightness(${brilloFiltro})`,
                transition: 'filter 0.3s ease, transform 0.6s ease',
              }}
            />

            <div className="insignia-escena-activa" style={{ zIndex: 2 }}>
              <span className="punto-vivo-dorado"></span>
              <span>{escena.titulo}</span>
            </div>

            <div className="superposicion-telemetria-escena" style={{ zIndex: 2 }}>
              <div className="metrica-escena">
                <span className="label">Consumo Estimado</span>
                <span className="val">{consumoCalculado} kW</span>
              </div>
              <div className="metrica-escena">
                <span className="label">Temperatura Luz</span>
                <span className="val dorado">{escena.kelvin} K</span>
              </div>
              <div className="metrica-escena">
                <span className="label">Regulación Actual</span>
                <span className="val">{nivelRegulacion}% DALI</span>
              </div>
            </div>
          </div>

          {/* CONTROLES DE REGULACIÓN Y SELECCIÓN */}
          <div className="panel-controles-simulador">
            <h4 className="titulo-panel-control">Selecciona una Configuración de Luz</h4>

            <div className="botones-seleccion-escena">
              {Object.values(escenas).map((esc) => (
                <button
                  key={esc.clave}
                  className={`boton-escena ${escenaActiva === esc.clave ? 'activo' : ''}`}
                  onClick={() => setEscenaActiva(esc.clave)}
                >
                  <span className="icono-escena">{esc.icono}</span>
                  <div>
                    <strong>{esc.etiqueta}</strong>
                    <p className="subtitulo-escena">{esc.descripcion}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="grupo-deslizadores-regulacion">
              <div className="fila-deslizador">
                <label htmlFor="deslizador-regulacion">
                  <span>Intensidad de Regulación (DALI)</span>
                  <span style={{ color: 'var(--dorado-real)', fontWeight: '800' }}>{nivelRegulacion}%</span>
                </label>
                <input
                  type="range"
                  id="deslizador-regulacion"
                  min="20"
                  max="100"
                  value={nivelRegulacion}
                  onChange={(e) => setNivelRegulacion(parseInt(e.target.value, 10))}
                />
              </div>
            </div>

            <div className="nota-informativa-tecnica">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>El control DALI ajusta la intensidad de forma continua manteniendo el máximo confort de la vivienda.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
