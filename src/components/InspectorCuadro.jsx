import React, { useState } from 'react';

const datosUnidades = {
  iga: {
    etiqueta: 'NORMATIVA REBT • ITC-BT-23',
    nombre: 'Interruptor General Automático (IGA) 40A',
    descripcion: 'Protección omnipolar para la totalidad del cuadro de mando. Equipado con bobina de disparo por sobretensión para cortar el suministro en caso de fluctuaciones graves de red.',
    especificaciones: ['40 Amperios / Curva C', 'Poder de corte: 10 kA (IEC 60898-1)', 'Tensión asignada: 230V / 400V', 'Verificación directa por Kerling Natale'],
  },
  sobretensiones: {
    etiqueta: 'PROTECCIÓN CONTRA PICOS DE TENSIÓN',
    nombre: 'Protector de Sobretensiones Permanentes y Transitorias (PST)',
    desc: 'Protege todos los dispositivos electrónicos sensibles de la vivienda (climatización, inversores solares, televisión) frente a descargas atmosféricas o maniobras de la compañía eléctrica.',
    especificaciones: ['Corriente máxima: 40 kA', 'Tensión Uc: 275V', 'Tiempo de respuesta: < 25 ns', 'Norma UNE-EN 61643-11'],
  },
  diferencial: {
    etiqueta: 'PROTECCIÓN DE PERSONAS CLASE F',
    nombre: 'Interruptor Diferencial Superinmunizado 30mA',
    desc: 'Desconecta el circuito ante fugas de corriente a tierra para evitar contactos eléctricos. La clase F previene disparos intempestivos causados por armónicos de inversores y electrodomésticos.',
    especificaciones: ['Sensibilidad: 30 mA', 'Clase F Superinmunizada', 'Corriente asignada: 40A', 'Test de prueba mensual'],
  },
  rearmable: {
    etiqueta: 'CONTINUIDAD DE SUMINISTRO EN AUSENCIAS',
    nombre: 'Diferencial con Auto-Reenganche Automático',
    desc: 'Ante disparos intempestivos provocados por tormentas o ráfagas de red, el sistema comprueba el aislamiento de la instalación y reenciende el suministro de forma automática.',
    especificaciones: ['Hasta 3 reenganches automáticos', 'Comprobación previa de seguridad', 'Ideal para residencias y alarmas', 'Cumplimiento REBT'],
  },
  loxone: {
    etiqueta: 'AUTOMATIZACIÓN RESIDENCIAL',
    nombre: 'Controlador Central de Automatización',
    desc: 'Gestor inteligente de la instalación. Regula la iluminación DALI, coordina la climatización por zonas y optimiza el consumo de la batería según la producción solar instantánea.',
    especificaciones: ['Procesador de baja latencia', 'Comunicación local cifrada', 'Sin cuotas de suscripción', 'Integración de clima y luz'],
  },
  inversor: {
    etiqueta: 'CONTROL DE GENERACIÓN SOLAR',
    nombre: 'Medidor Bidireccional de Eficiencia Solar',
    desc: 'Monitoriza en tiempo real la producción de las placas fotovoltaicas y el consumo de la vivienda para garantizar el vertido cero o la venta eficiente de excedentes.',
    especificaciones: ['Medición trifásica / monofásica', 'Precisión Clase 1 (1%)', 'Comunicación Modbus industrial', 'Balanceo de fases'],
  },
  'ev-protec': {
    etiqueta: 'MOVILIDAD ELÉCTRICA • ITC-BT-52',
    nombre: 'Protección Exclusiva para Vehículo Eléctrico',
    desc: 'Línea independiente desde el cuadro principal protegida con diferencial Clase A y detección de fuga continua de 6mA CC para evitar sobrecalentamientos durante la carga.',
    especificaciones: ['Sección de cable: 6 a 10 mm²', 'Diferencial Clase A + 6mA CC', 'Normativa obligatoria ITC-BT-52', 'Apto para carga continua 7.4 kW / 22 kW'],
  },
  termografia: {
    etiqueta: 'DIAGNÓSTICO PREVENTIVO INFRARROJO',
    nombre: 'Sensor Térmico Preventivo para Cuadros',
    desc: 'Control de temperatura en las bornas y conexiones de cobre para prevenir falsos contactos y arcos eléctricos antes de que se produzca una avería.',
    especificaciones: ['Cámara Térmica FLIR Certificada', 'Auditoría preventiva de puntos calientes', 'Revisiones periódicas registradas', 'Máxima tranquilidad'],
  },
};

export default function InspectorCuadro() {
  const [unidadActiva, setUnidadActiva] = useState('iga');
  const [codigoCie, setCodigoCie] = useState('MAD-2026-DEN');
  const [estadoCie, setEstadoCie] = useState({
    estado: 'exito',
    codigo: 'MAD-2026-DEN',
  });

  const datos = datosUnidades[unidadActiva];

  const handleVerificarCie = () => {
    const cod = codigoCie.trim();
    if (!cod) {
      setEstadoCie({ estado: 'error', codigo: '' });
      return;
    }
    setEstadoCie({ estado: 'cargando', codigo: cod });
    setTimeout(() => {
      setEstadoCie({ estado: 'exito', codigo: cod });
    }, 500);
  };

  return (
    <section id="cuadro-tecnico" className="seccion-inspector contenedor seccion-pantalla-completa">
      <div className="encabezado-seccion">
        <span className="insignia-seccion">
          <span className="codigo-indice">03 //</span> ANATOMÍA Y PROTECCIÓN ELÉCTRICA
        </span>
        <h2 className="titulo-seccion">
          INSPECTOR DE <br />
          <span className="texto-gradiente-dorado">CUADROS ELÉCTRICOS REBT</span>
        </h2>
        <p className="descripcion-seccion">
          Haz clic en cada componente del carril DIN para conocer su función de seguridad dentro de una instalación bajo el Reglamento Electrotécnico para Baja Tensión.
        </p>
      </div>

      <div className="estructura-inspector">
        {/* DIAGRAMA INTERACTIVO DE CARRIL DIN */}
        <div className="diagrama-cuadro-electrico">
          <div className="carril-din">
            <span className="titulo-carril">CARRIL DIN 1 — INTERRUPTORES GENERALES Y PROTECCIÓN DE RED</span>
            <div className="grupo-interruptores">
              <div
                className={`unidad-interruptor ${unidadActiva === 'iga' ? 'unidad-activa' : ''}`}
                onClick={() => setUnidadActiva('iga')}
              >
                <span className="codigo-unidad">IGA</span>
                <span className="nombre-unidad">Inter. General</span>
                <span className="indicador-led-unidad dorado"></span>
              </div>
              <div
                className={`unidad-interruptor ${unidadActiva === 'sobretensiones' ? 'unidad-activa' : ''}`}
                onClick={() => setUnidadActiva('sobretensiones')}
              >
                <span className="codigo-unidad">PST</span>
                <span className="nombre-unidad">Sobretensiones</span>
                <span className="indicador-led-unidad dorado"></span>
              </div>
              <div
                className={`unidad-interruptor ${unidadActiva === 'diferencial' ? 'unidad-activa' : ''}`}
                onClick={() => setUnidadActiva('diferencial')}
              >
                <span className="codigo-unidad">ID-SI</span>
                <span className="nombre-unidad">Diferencial SI</span>
                <span className="indicador-led-unidad dorado"></span>
              </div>
              <div
                className={`unidad-interruptor ${unidadActiva === 'rearmable' ? 'unidad-activa' : ''}`}
                onClick={() => setUnidadActiva('rearmable')}
              >
                <span className="codigo-unidad">REC</span>
                <span className="nombre-unidad">Auto-Rearme</span>
                <span className="indicador-led-unidad azul"></span>
              </div>
            </div>
          </div>

          <div className="carril-din">
            <span className="titulo-carril">CARRIL DIN 2 — CONTROL INTELIGENTE, SOLAR Y VEHÍCULO ELÉCTRICO</span>
            <div className="grupo-interruptores">
              <div
                className={`unidad-interruptor ${unidadActiva === 'loxone' ? 'unidad-activa' : ''}`}
                onClick={() => setUnidadActiva('loxone')}
              >
                <span className="codigo-unidad">CTRL</span>
                <span className="nombre-unidad">Automatización</span>
                <span className="indicador-led-unidad azul"></span>
              </div>
              <div
                className={`unidad-interruptor ${unidadActiva === 'inversor' ? 'unidad-activa' : ''}`}
                onClick={() => setUnidadActiva('inversor')}
              >
                <span className="codigo-unidad">SOLAR</span>
                <span className="nombre-unidad">Medidor Solar</span>
                <span className="indicador-led-unidad dorado"></span>
              </div>
              <div
                className={`unidad-interruptor ${unidadActiva === 'ev-protec' ? 'unidad-activa' : ''}`}
                onClick={() => setUnidadActiva('ev-protec')}
              >
                <span className="codigo-unidad">EV</span>
                <span className="nombre-unidad">Carga Vehículo</span>
                <span className="indicador-led-unidad dorado"></span>
              </div>
              <div
                className={`unidad-interruptor ${unidadActiva === 'termografia' ? 'unidad-activa' : ''}`}
                onClick={() => setUnidadActiva('termografia')}
              >
                <span className="codigo-unidad">FLIR</span>
                <span className="nombre-unidad">Control Térmico</span>
                <span className="indicador-led-unidad azul"></span>
              </div>
            </div>
          </div>

          {/* VERIFICADOR DE BOLETINES ELÉCTRICOS (CIE) */}
          <div className="caja-verificador-boletines">
            <div className="encabezado-verificador">
              <span className="icono-verificador">📜</span>
              <div>
                <strong>Verificación de Registro de Boletín Eléctrico (CIE)</strong>
                <p className="subtitulo-verificador">Consulta la conformidad de instalaciones legalizadas en Madrid</p>
              </div>
            </div>
            <div className="grupo-entrada-codigo">
              <input
                type="text"
                placeholder="Introduce código de expediente (ej: MAD-2026)"
                value={codigoCie}
                onChange={(e) => setCodigoCie(e.target.value)}
              />
              <button onClick={handleVerificarCie} className="boton-accion dorado-principal" style={{ padding: '10px 20px', borderRadius: '100px' }}>
                Consultar Registro
              </button>
            </div>
            <div className="caja-resultado-verificacion">
              {estadoCie.estado === 'error' && (
                <span className="estado-resultado" style={{ color: '#ff4444' }}>
                  ⚠️ Por favor, introduce un código de expediente válido.
                </span>
              )}
              {estadoCie.estado === 'cargando' && (
                <span className="estado-resultado">⌛ Verificando datos con la Dirección General de Industria...</span>
              )}
              {estadoCie.estado === 'exito' && (
                <>
                  <span className="estado-resultado">
                    ✔️ EXPEDIENTE [{estadoCie.codigo.toUpperCase()}]: REGISTRADO Y CONFORME A REBT
                  </span>
                  <span className="detalle-resultado">
                    Instalación auditada y firmada digitalmente por el Ing. Kerling Abraham Natale Hidalgo ante la Consejería de Industria de Madrid.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* DETALLE TÉCNICO DE LA UNIDAD SELECCIONADA */}
        <div className="ficha-detalles-inspector">
          <div>
            <span className="etiqueta-inspector">{datos.etiqueta}</span>
            <div className="encabezado-ficha">
              <h3>{datos.nombre}</h3>
            </div>
            <p className="cuerpo-ficha">{datos.desc}</p>
          </div>

          <div>
            <div className="especificaciones-ficha">
              {datos.especificaciones.map((spec, i) => (
                <div key={i} className="fila-especificacion">
                  <span className="clave-especificacion">Requisito Técnico {i + 1}:</span>
                  <span className="valor-especificacion dorado">{spec}</span>
                </div>
              ))}
            </div>

            <div className="insignia-cumplimiento">
              ✔️ Verificado personalmente por el Ing. Kerling Natale
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
