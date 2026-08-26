import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioHorizontal({ onOpenModal }) {
  const pistaRef = useRef(null);

  useEffect(() => {
    const pista = pistaRef.current;
    if (pista && window.innerWidth > 1200) {
      const scrollAnim = gsap.to(pista, {
        x: () => -(pista.scrollWidth - window.innerWidth + 120),
        ease: 'none',
        scrollTrigger: {
          trigger: '.seccion-proyectos-horizontal',
          pin: true,
          scrub: 1,
          end: () => '+=' + (pista.scrollWidth - window.innerWidth + 300),
          invalidateOnRefresh: true,
        },
      });

      return () => {
        if (scrollAnim.scrollTrigger) {
          scrollAnim.scrollTrigger.kill();
        }
      };
    }
  }, []);

  const proyectos = [
    {
      clave: 'villa-loxone',
      titulo: 'RESIDENCIA UNIFAMILIAR EN POZUELO',
      categoria: 'VIVIENDA DE ALTA EFICIENCIA • POZUELO DE ALARCÓN',
      resumen: 'Instalación eléctrica completa de 600m², control de iluminación DALI de 45 zonas y sistema solar fotovoltaico de 15 kWp con baterías.',
      img: '/images/villa_loxone.png',
      metricas: ['⚡ Control DALI 45 Zonas', '☀️ 15 kWp Generación Solar', '🔋 15 kWh Batería LFP'],
    },
    {
      clave: 'solar-park',
      titulo: 'SEDE INDUSTRIAL EN GUADARRAMA',
      categoria: 'FOTOVOLTAICA INDUSTRIAL • GUADARRAMA',
      resumen: 'Sistema fotovoltaico en cubierta de 120 kWp con inversor trifásico y acumulación en baterías de 80 kWh con inyección cero a red.',
      img: '/images/solar_industrial.png',
      metricas: ['⚡ 120 kWp Fotovoltaica', '🔋 80 kWh Acumulación', '🌱 45 Ton CO₂ Evitadas'],
    },
    {
      clave: 'data-panel',
      titulo: 'INFRAESTRUCTURA DE CUADROS EN MADRID',
      categoria: 'REFORMAS DE POTENCIA • MADRID CAPITAL',
      resumen: 'Sustitución de cuadro general de mando de 250A con termografía preventiva y sistemas de auto-reenganche diferencial.',
      img: '/images/smart_panel.png',
      metricas: ['⚡ 250A Trifásico REBT', '🔥 Termografía FLIR', '🛡️ Auto-Rearme Inteligente'],
    },
    {
      clave: 'ev-charging',
      titulo: 'PUNTOS DE RECARGA EN LA MORALEJA',
      categoria: 'MOVILIDAD ELÉCTRICA • LA MORALEJA',
      resumen: 'Doble cargador trifásico de 22 kW con balanceo dinámico de potencia para proteger la instalación eléctrica de la vivienda.',
      img: '/images/ev_charging.png',
      metricas: ['⚡ 22 kW Carga Rápida', '🚘 Balanceo Dinámico', '📱 Gestión App'],
    },
  ];

  return (
    <section id="proyectos" className="seccion-proyectos-horizontal seccion-pantalla-completa">
      <div className="barra-titulo-horizontal contenedor">
        <span className="insignia-seccion">
          <span className="codigo-indice">04 //</span> CASOS DE ESTUDIO REALES
        </span>
        <h2 className="titulo-seccion">
          PROYECTOS Y <span className="texto-gradiente-dorado">INSTALACIONES DESTACADAS</span>
        </h2>
        <p className="indicacion-desplazamiento">
          ← Desliza hacia abajo para recorrer horizontalmente los proyectos →
        </p>
      </div>

      {/* PISTA HORIZONTAL */}
      <div className="contenedor-pista-horizontal">
        <div className="pista-horizontal" ref={pistaRef}>
          {proyectos.map((proj) => (
            <div key={proj.clave} className="diapositiva-proyecto">
              <img src={proj.img} alt={proj.titulo} />
              <div className="contenido-proyecto">
                <span className="categoria-proyecto">{proj.categoria}</span>
                <h2>{proj.titulo}</h2>
                <p className="resumen-proyecto">{proj.resumen}</p>
                <div className="metricas-proyecto">
                  {proj.metricas.map((m, idx) => (
                    <span key={idx}>{m}</span>
                  ))}
                </div>
                <button className="boton-ver-detalles-proyecto" onClick={() => onOpenModal(proj.clave)}>
                  Ver Detalles Técnicos del Proyecto →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
