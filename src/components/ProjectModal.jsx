import React from 'react';

const projectDetails = {
  'villa-loxone': {
    title: 'VILLA LOXONE MADRID LUXURY',
    sub: 'Proyecto Integral Domótico & Fotovoltaico en Pozuelo de Alarcón',
    img: '/images/villa_loxone.png',
    challenge:
      'Automatización total de una propiedad de 600m² con integración de climatización por suelo radiante, 45 canales DALI de iluminación, control de piscina y sistema solar con baterías sin perder estética visual.',
    specs: {
      'Miniserver Loxone': 'V2 Gen II (Tree/Air)',
      'Canales DALI': '45 Zonas Regulables',
      'Fotovoltaica': '15 kWp (Paneles 500W)',
      'Batería LFP': '15 kWh Litio-Ferrofosfato',
      'Plazo Ejecución': '3 Semanas',
    },
  },
  'solar-park': {
    title: 'PARQUE SOLAR COMMERCIAL X',
    sub: 'Instalación de Autoconsumo Industrial con Vertido Cero',
    img: '/images/solar_industrial.png',
    challenge:
      'Optimización de la factura eléctrica para una sede empresarial en Guadarrama mediante 120 kWp en cubierta industrial y sistema de inyección cero con regulación Modbus.',
    specs: {
      'Potencia Solar': '120 kWp',
      'Inversor Industrial': 'Huawei SUN2000 Trifásico',
      'Capacidad Batería': '80 kWh Almacenamiento',
      'Ahorro Anual': '18.400 € / Año',
      'Amortización': '3,8 Años',
    },
  },
  'data-panel': {
    title: 'HEADQUARTERS DATA PANEL REBT',
    sub: 'Reestructuración & Termografía de Cuadro General de Mando',
    img: '/images/smart_panel.png',
    challenge:
      'Sustitución en caliente de un cuadro trifásico obsoleto de 250A por una arquitectura modular blindada con diferencial superinmunizado y monitoreo de temperatura en tiempo real.',
    specs: {
      'Capacidad Cuadro': '250A Trifásico',
      'Protecciones': 'IGA + PST + ID-SI Clase F',
      'Diagnóstico': 'Cámara Térmica FLIR 24/7',
      'Certificación': 'CIE Oficial Registrado',
      'Normativa': 'UNE-HD 60364 / REBT',
    },
  },
  'ev-charging': {
    title: 'CARGA EV HIGH-POWER WALLBOX',
    sub: 'Infraestructura de Recarga Rápida en La Moraleja',
    img: '/images/ev_charging.png',
    challenge:
      'Instalación de dos cargadores Wallbox Commander 2 de 22kW con reparto inteligente de carga en función del consumo simultáneo de la vivienda y la producción fotovoltaica instantánea.',
    specs: {
      'Potencia Carga': '22 kW Trifásica',
      'Balanceo Dinámico': 'Medidor Schneider PowerTag',
      'Línea Exclusiva': 'ITC-BT-52 Dedicada',
      'Protección Fuga': '6mA CC Integrada',
      'Subvención': 'Plan MOVES III Gestionado',
    },
  },
};

export default function ProjectModal({ activeModalKey, onClose }) {
  if (!activeModalKey) return null;
  const project = projectDetails[activeModalKey];
  if (!project) return null;

  const handleRequestSimilar = () => {
    const text = `Hola Kerling, he visto en tu portafolio el proyecto "${project.title}" y me gustaría consultar un presupuesto para un proyecto similar.`;
    window.open(`https://wa.me/34682178499?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className={`modal-backdrop ${activeModalKey ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
          ✕
        </button>

        <span className="section-badge" style={{ marginBottom: '4px' }}>
          DESGLOSE TÉCNICO COMPLETO DE FIRMA
        </span>
        <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '4px' }}>
          {project.title}
        </h2>
        <p className="proj-category" style={{ color: 'var(--accent-purple-light)', marginBottom: '20px' }}>
          {project.sub}
        </p>

        <div className="modal-challenge-box">
          <h4>DESAFÍO TÉCNICO Y SOLUCIÓN DE INGENIERÍA:</h4>
          <p>{project.challenge}</p>
        </div>

        <div className="modal-specs-table">
          {Object.entries(project.specs).map(([key, val]) => (
            <div key={key} className="spec-cell">
              <span className="k">{key.toUpperCase()}</span>
              <span className="v">{val}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
          <button onClick={handleRequestSimilar} className="btn-cta primary-glow w-100">
            <span>Solicitar Proyecto Similar a Kerling</span>
          </button>
        </div>
      </div>
    </div>
  );
}
