import React from 'react';

const detallesProyectos = {
  'villa-loxone': {
    titulo: 'RESIDENCIA UNIFAMILIAR EN POZUELO',
    subtitulo: 'Proyecto de Ingeniería Eléctrica, Domótica y Autoconsumo Solar en Pozuelo de Alarcón',
    img: '/images/villa_loxone.png',
    desafío:
      'Automatización completa de una vivienda unifamiliar de 600m² mediante la integración de climatización por suelo radiante, 45 canales DALI de iluminación regulable y un sistema fotovoltaico de 15 kWp con baterías de litio, manteniendo una estética cuidada y sin cables a la vista.',
    especificaciones: {
      'Sistema de Control': 'Procesamiento Local de Baja Latencia',
      'Iluminación Regula': '45 Canales DALI Independientes',
      'Generación Solar': '15 kWp (Paneles de Alta Eficiencia)',
      'Acumulación Batería': '15 kWh Litio-Ferrofosfato (LFP)',
      'Plazo de Ejecución': '3 Semanas de Obra Técnica',
    },
  },
  'solar-park': {
    titulo: 'SEDE INDUSTRIAL EN GUADARRAMA',
    subtitulo: 'Instalación de Autoconsumo Industrial con Inyección Cero a Red',
    img: '/images/solar_industrial.png',
    desafío:
      'Reducción drástica de la factura eléctrica en horario comercial para una empresa en Guadarrama mediante 120 kWp en cubierta industrial y control Modbus de vertido cero.',
    especificaciones: {
      'Potencia Solar': '120 kWp Instalados',
      'Inversor Industrial': 'Trifásico de Alta Capacidad',
      'Capacidad Baterías': '80 kWh de Acumulación',
      'Ahorro Anual Estimado': '18.400 € / Año',
      'Amortización': '3,8 Años de Retorno',
    },
  },
  'data-panel': {
    titulo: 'INFRAESTRUCTURA DE CUADROS EN MADRID',
    subtitulo: 'Reestructuración y Diagnóstico por Termografía Infrarroja',
    img: '/images/smart_panel.png',
    desafío:
      'Sustitución de un cuadro trifásico antiguo de 250A por un armario de distribución con protección contra sobretensiones transitorias y permanentes, diferenciales superinmunizados y monitoreo térmico preventivo.',
    especificaciones: {
      'Capacidad Cuadro': '250 Amperios Trifásico',
      'Protecciones REBT': 'IGA + PST + ID-SI Clase F',
      'Diagnóstico Preventivo': 'Cámara Térmica FLIR 24/7',
      'Certificación': 'Boletín Oficial CIE Registrado',
      'Normativa Aplicada': 'REBT / UNE-HD 60364',
    },
  },
  'ev-charging': {
    titulo: 'PUNTOS DE RECARGA EN LA MORALEJA',
    subtitulo: 'Infraestructura de Recarga Rápida para Vehículo Eléctrico',
    img: '/images/ev_charging.png',
    desafío:
      'Instalación de dos cargadores trifásicos de 22 kW con balanceo dinámico de carga respecto al consumo de la residencia y sincronización directa con los excedentes solares.',
    especificaciones: {
      'Potencia de Carga': '22 kW Trifásica Dedicada',
      'Balanceo Dinámico': 'Medidor de Potencia en Cuadro',
      'Línea Independiente': 'Normativa ITC-BT-52',
      'Protección Fugas': 'Diferencial Clase A + 6mA CC',
      'Gestión de Carga': 'Carga Automática Solar Directa',
    },
  },
};

export default function ProjectModal({ activeModalKey, onClose }) {
  if (!activeModalKey) return null;
  const proyecto = detallesProyectos[activeModalKey];
  if (!proyecto) return null;

  const handleConsultarSimilar = () => {
    const texto = `Hola Kerling, he visto el proyecto "${proyecto.titulo}" en tu web y me gustaría solicitar una consulta para una instalación similar.`;
    window.open(`https://wa.me/34682178499?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className={`fondo-modal-backdrop ${activeModalKey ? 'activo' : ''}`} onClick={onClose}>
      <div className="contenido-modal-proyecto" onClick={(e) => e.stopPropagation()}>
        <button className="boton-cerrar-modal" onClick={onClose} aria-label="Cerrar ventana">
          ✕
        </button>

        <span className="insignia-seccion" style={{ marginBottom: '6px' }}>
          CASO DE ESTUDIO TÉCNICO COMPLETO
        </span>
        <h2 className="titulo-seccion" style={{ fontSize: '2.2rem', marginBottom: '4px' }}>
          {proyecto.titulo}
        </h2>
        <p className="categoria-proyecto" style={{ marginBottom: '22px' }}>
          {proyecto.subtitulo}
        </p>

        <div className="caja-desafio-tecnico-modal">
          <h4>RETOS TÉCNICOS Y EJECUCIÓN EN OBRA:</h4>
          <p>{proyecto.desafío}</p>
        </div>

        <div className="tabla-especificaciones-modal">
          {Object.entries(proyecto.especificaciones).map(([clave, valor]) => (
            <div key={clave} className="celda-especificacion-modal">
              <span className="k">{clave.toUpperCase()}</span>
              <span className="v">{valor}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '14px', marginTop: '24px' }}>
          <button onClick={handleConsultarSimilar} className="boton-accion dorado-principal ancho-completo">
            <span>Consultar Proyecto Similar con Kerling Natale</span>
          </button>
        </div>
      </div>
    </div>
  );
}
