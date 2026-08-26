import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioHorizontal({ onOpenModal }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track && window.innerWidth > 1024) {
      const scrollAnimation = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 120),
        ease: 'none',
        scrollTrigger: {
          trigger: '.horizontal-section',
          pin: true,
          scrub: 1,
          end: () => '+=' + (track.scrollWidth - window.innerWidth + 300),
          invalidateOnRefresh: true,
        },
      });

      return () => {
        if (scrollAnimation.scrollTrigger) {
          scrollAnimation.scrollTrigger.kill();
        }
      };
    }
  }, []);

  const projects = [
    {
      key: 'villa-loxone',
      title: 'VILLA LOXONE MADRID',
      category: 'RESIDENCIAL LUXURY • POZUELO DE ALARCÓN',
      summary: 'Instalación eléctrica integral de 600m², control DALI de 45 zonas, clima radiante por zonas y 15 kWp solar con almacenamiento.',
      img: '/images/villa_loxone.png',
      metrics: ['⚡ Loxone Tree & Air', '☀️ 15 kWp Solar', '🔋 15 kWh LFP'],
    },
    {
      key: 'solar-park',
      title: 'PARQUE SOLAR COMMERCIAL X',
      category: 'FOTOVOLTAICA & BATERÍAS • GUADARRAMA',
      summary: 'Sistema fotovoltaico industrial de 120 kWp con inversor trifásico Huawei y acumulación en baterías de 80 kWh con vertido cero.',
      img: '/images/solar_industrial.png',
      metrics: ['⚡ 120 kWp Generación', '🔋 80 kWh Batería', '🌱 45 Ton CO₂'],
    },
    {
      key: 'data-panel',
      title: 'HEADQUARTERS DATA PANEL',
      category: 'INFRAESTRUCTURA DE POTENCIA • MADRID CAPITAL',
      summary: 'Reestructuración total de cuadro trifásico de 250A con análisis termográfico continua y reconexión diferencial automática.',
      img: '/images/smart_panel.png',
      metrics: ['⚡ 250A Trifásico', '🔥 Termografía FLIR', '🛡️ Auto-Rearme'],
    },
    {
      key: 'ev-charging',
      title: 'CARGA EV HIGH-POWER',
      category: 'MOVILIDAD ELÉCTRICA • LA MORALEJA',
      summary: 'Doble cargador inteligente Wallbox de 22kW con balanceo dinámico de potencia y carga solar directa.',
      img: '/images/ev_charging.png',
      metrics: ['⚡ 22 kW Carga Rápida', '🚘 Balanceo Dinámico', '📱 App Sync'],
    },
  ];

  return (
    <section id="proyectos" className="horizontal-section section-nav full-screen-section">
      <div className="horizontal-title-bar container gsap-fade-up">
        <div>
          <span className="section-badge">
            <span className="code-tag">04 //</span> PORTAFOLIO DE FIRMA CON DESPLAZAMIENTO HORIZONTAL
          </span>
          <h2 className="section-title">
            PROYECTOS <span className="accent-text">DESTACADOS</span>
          </h2>
          <p className="scroll-hint">
            <span>← Desliza hacia abajo para recorrer horizontalmente el portafolio →</span>
          </p>
        </div>
      </div>

      {/* TRACK HORIZONTAL PINNED */}
      <div className="horizontal-track-container">
        <div className="horizontal-wrapper" id="project-horizontal-wrapper" ref={trackRef}>
          {projects.map((proj) => (
            <div key={proj.key} className="project-slide">
              <img src={proj.img} alt={proj.title} />
              <div className="project-content">
                <span className="proj-category">{proj.category}</span>
                <h2>
                  {proj.title.split(' ')[0]} <br />
                  <span className="accent-text">{proj.title.split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="proj-summary">{proj.summary}</p>
                <div className="proj-metrics">
                  {proj.metrics.map((m, idx) => (
                    <span key={idx}>{m}</span>
                  ))}
                </div>
                <button className="btn-proj-details" onClick={() => onOpenModal(proj.key)}>
                  Ver Detalles Completos del Proyecto →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
