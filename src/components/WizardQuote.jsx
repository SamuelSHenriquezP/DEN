import React, { useState } from 'react';

export default function WizardQuote() {
  const [pasoActual, setPasoActual] = useState(1);

  const [tipoInmueble, setTipoInmueble] = useState('Vivienda Unifamiliar / Chalet');
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([
    'Iluminación Inteligente y Control Domótico',
    'Energía Solar Fotovoltaica y Baterías',
  ]);
  const [ubicacion, setUbicacion] = useState('Madrid');
  const [superficieM2, setSuperficieM2] = useState('180');
  const [plazo, setPlazo] = useState('En el próximo mes');

  const opcionesInmueble = [
    {
      clave: 'Vivienda Unifamiliar / Chalet',
      icono: '🏡',
      titulo: 'Vivienda Unifamiliar / Chalet',
      descripcion: 'Instalaciones completas en chalets, domótica e iluminación.',
    },
    {
      clave: 'Piso / Residencia en Urbanización',
      icono: '🏢',
      titulo: 'Piso / Residencia',
      descripcion: 'Reformas eléctricas de cuadro, mecanismos y adecuación REBT.',
    },
    {
      clave: 'Local Comercial / Oficina',
      icono: '🏬',
      titulo: 'Local Comercial / Oficina',
      descripcion: 'Iluminación DALI, telecomunicaciones y aumento de potencia.',
    },
    {
      clave: 'Nave Industrial / Sede',
      icono: '🏭',
      titulo: 'Nave Industrial / Sede',
      descripcion: 'Cuadros de distribución trifásica y termografía preventiva.',
    },
  ];

  const serviciosDisponibles = [
    {
      valor: 'Iluminación Inteligente y Control Domótico',
      icono: '⚡',
      titulo: 'Iluminación Inteligente y Domótica',
      descripcion: 'Regulación DALI, escenas de luz, clima y persianas.',
    },
    {
      valor: 'Energía Solar Fotovoltaica y Baterías',
      icono: '☀️',
      titulo: 'Energía Solar & Baterías LFP',
      descripcion: 'Autoconsumo, acumulación nocturna e inyección a red.',
    },
    {
      valor: 'Reforma de Cuadro Eléctrico y Protección REBT',
      icono: '🛡️',
      titulo: 'Cuadro Eléctrico & REBT',
      descripcion: 'Sustitución de cuadro, IGA y diferencial superinmunizado.',
    },
    {
      valor: 'Punto de Recarga para Vehículo Eléctrico',
      icono: '🚘',
      titulo: 'Carga para Vehículo Eléctrico',
      descripcion: 'Línea dedicada ITC-BT-52 con balanceo de potencia.',
    },
    {
      valor: 'Boletín Eléctrico Oficial (CIE)',
      icono: '📋',
      titulo: 'Boletín Eléctrico Oficial (CIE)',
      descripcion: 'Certificación oficial registrada en la Comunidad de Madrid.',
    },
  ];

  const toggleServicio = (val) => {
    if (serviciosSeleccionados.includes(val)) {
      setServiciosSeleccionados(serviciosSeleccionados.filter((s) => s !== val));
    } else {
      setServiciosSeleccionados([...serviciosSeleccionados, val]);
    }
  };

  const handleEnviarWhatsApp = () => {
    const mensaje =
      `⚡ *SOLICITUD DE PRESUPUESTO EN DEN*\n\n` +
      `• *Tipo de Inmueble:* ${tipoInmueble}\n` +
      `• *Servicios Requeridos:* ${serviciosSeleccionados.join(', ') || 'Consulta General'}\n` +
      `• *Ubicación:* ${ubicacion || 'Madrid'} (${superficieM2 || '180'} m²)\n` +
      `• *Plazo Estimado:* ${plazo}\n\n` +
      `Hola Kerling, me gustaría recibir orientación formal sobre este proyecto.`;

    window.open(`https://wa.me/34682178499?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <section id="cotizador" className="seccion-asistente contenedor seccion-pantalla-completa">
      <div className="caja-asistente">
        <div className="encabezado-asistente">
          <span className="insignia-seccion">
            <span className="codigo-indice">07 //</span> ORIENTACIÓN TÉCNICA DE PROYECTO
          </span>
          <h2>
            SOLICITUD DE <span className="texto-gradiente-dorado">PRESUPUESTO ORIENTATIVO</span>
          </h2>
          <p className="descripcion-seccion" style={{ margin: '0 auto' }}>
            Completa los detalles de tu proyecto para enviar una consulta clara y estructurada directamente al Ingeniero Kerling Natale.
          </p>
        </div>

        {/* PASOS DEL ASISTENTE */}
        <div className="barra-pasos-asistente">
          <div className={`indicador-paso ${pasoActual === 1 ? 'activo' : ''}`}>1. Tipo de Inmueble</div>
          <div className={`indicador-paso ${pasoActual === 2 ? 'activo' : ''}`}>2. Servicios</div>
          <div className={`indicador-paso ${pasoActual === 3 ? 'activo' : ''}`}>3. Ubicación</div>
          <div className={`indicador-paso ${pasoActual === 4 ? 'activo' : ''}`}>4. Resumen</div>
        </div>

        <div>
          {/* PASO 1 */}
          {pasoActual === 1 && (
            <div className="paso-asistente activo">
              <h4>¿En qué tipo de espacio se realizará la instalación?</h4>
              <div className="rejilla-opciones-inmueble">
                {opcionesInmueble.map((opt) => (
                  <div
                    key={opt.clave}
                    className={`tarjeta-opcion ${tipoInmueble === opt.clave ? 'seleccionada' : ''}`}
                    onClick={() => setTipoInmueble(opt.clave)}
                  >
                    <span className="icono-opcion">{opt.icono}</span>
                    <h5>{opt.titulo}</h5>
                    <p>{opt.descripcion}</p>
                  </div>
                ))}
              </div>
              <div className="botones-navegacion-asistente">
                <span></span>
                <button className="boton-accion dorado-principal" onClick={() => setPasoActual(2)}>
                  Siguiente Paso →
                </button>
              </div>
            </div>
          )}

          {/* PASO 2 */}
          {pasoActual === 2 && (
            <div className="paso-asistente activo">
              <h4>Selecciona los servicios que deseas incluir</h4>
              <div className="rejilla-casillas-servicios">
                {serviciosDisponibles.map((srv) => {
                  const seleccionado = serviciosSeleccionados.includes(srv.valor);
                  return (
                    <div
                      key={srv.valor}
                      className={`tarjeta-casilla-servicio ${seleccionado ? 'seleccionada' : ''}`}
                      onClick={() => toggleServicio(srv.valor)}
                    >
                      <div className="interior-casilla-servicio">
                        <span className="icono-servicio-casilla">{srv.icono}</span>
                        <div>
                          <strong>{srv.titulo}</strong>
                          <p>{srv.descripcion}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="botones-navegacion-asistente">
                <button className="boton-accion contorno-elegante" onClick={() => setPasoActual(1)}>
                  ← Anterior
                </button>
                <button className="boton-accion dorado-principal" onClick={() => setPasoActual(3)}>
                  Siguiente Paso →
                </button>
              </div>
            </div>
          )}

          {/* PASO 3 */}
          {pasoActual === 3 && (
            <div className="paso-asistente activo">
              <h4>Indica la ubicación y los datos aproximados</h4>
              <div className="grupo-campos-entradas">
                <div className="campo-entrada">
                  <label htmlFor="campo-ubicacion">Ubicación (Municipio / Zona de Madrid)</label>
                  <input
                    type="text"
                    id="campo-ubicacion"
                    placeholder="Ej: Guadarrama, Pozuelo, Las Rozas, Madrid..."
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                  />
                </div>
                <div className="campo-entrada">
                  <label htmlFor="campo-superficie">Superficie Aproximada (m²)</label>
                  <input
                    type="number"
                    id="campo-superficie"
                    placeholder="Ej: 180"
                    value={superficieM2}
                    onChange={(e) => setSuperficieM2(e.target.value)}
                  />
                </div>
                <div className="campo-entrada">
                  <label htmlFor="campo-plazo">Plazo Estimado de Ejecución</label>
                  <select
                    id="campo-plazo"
                    value={plazo}
                    onChange={(e) => setPlazo(e.target.value)}
                  >
                    <option value="Lo antes posible (Prioritario)">Lo antes posible</option>
                    <option value="En el próximo mes">En el próximo mes</option>
                    <option value="En los próximos 3 meses">En los próximos 3 meses</option>
                    <option value="Solo comparando presupuestos">Solo comparando opciones</option>
                  </select>
                </div>
              </div>
              <div className="botones-navegacion-asistente">
                <button className="boton-accion contorno-elegante" onClick={() => setPasoActual(2)}>
                  ← Anterior
                </button>
                <button className="boton-accion dorado-principal" onClick={() => setPasoActual(4)}>
                  Ver Resumen →
                </button>
              </div>
            </div>
          )}

          {/* PASO 4 */}
          {pasoActual === 4 && (
            <div className="paso-asistente activo">
              <h4>Resumen de tu Consulta</h4>

              <div className="caja-resumen-asistente">
                <div className="item-resumen">
                  <span className="etiqueta">Tipo de Inmueble:</span>
                  <span className="valor">{tipoInmueble}</span>
                </div>
                <div className="item-resumen">
                  <span className="etiqueta">Servicios Requeridos:</span>
                  <span className="valor">{serviciosSeleccionados.join(', ') || 'Consulta General'}</span>
                </div>
                <div className="item-resumen">
                  <span className="etiqueta">Ubicación y Superficie:</span>
                  <span className="valor">
                    {ubicacion} ({superficieM2} m²)
                  </span>
                </div>
                <div className="item-resumen">
                  <span className="etiqueta">Plazo Estimado:</span>
                  <span className="valor" style={{ color: 'var(--dorado-real)' }}>
                    {plazo}
                  </span>
                </div>
              </div>

              <div className="acciones-envio-asistente">
                <button onClick={handleEnviarWhatsApp} className="boton-accion dorado-principal ancho-completo">
                  <span>Enviar Presupuesto a Kerling Natale por WhatsApp</span>
                </button>
                <button className="boton-accion contorno-elegante" onClick={() => setPasoActual(3)}>
                  Modificar Datos
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
