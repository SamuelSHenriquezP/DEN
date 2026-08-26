import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = statsRef.current.querySelectorAll('.valor-contador-numero');

      targets.forEach((target) => {
        const endVal = parseInt(target.getAttribute('data-valor-final'), 10);
        gsap.fromTo(
          target,
          { innerText: 0 },
          {
            innerText: endVal,
            duration: 2.2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: target,
              start: 'top 85%',
            },
          }
        );
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="seccion-estadisticas contenedor seccion-pantalla-completa" ref={statsRef}>
      <div className="rejilla-estadisticas">
        <div className="tarjeta-estadistica">
          <span className="etiqueta-contador">PROYECTOS Y REFORMAS</span>
          <div className="contenedor-numero-contador">
            <span className="valor-contador-numero" data-valor-final="250">
              0
            </span>
            <span className="signo-mas-contador">+</span>
          </div>
          <p className="subtitulo-contador">Instalaciones eléctricas residenciales y comerciales legalizadas en Madrid.</p>
        </div>

        <div className="tarjeta-estadistica">
          <span className="etiqueta-contador">EFICIENCIA SOLAR</span>
          <div className="contenedor-numero-contador">
            <span className="valor-contador-numero" data-valor-final="95">
              0
            </span>
            <span className="signo-mas-contador">%</span>
          </div>
          <p className="subtitulo-contador">Autoconsumo alcanzado con integración de placas fotovoltaicas y baterías.</p>
        </div>

        <div className="tarjeta-estadistica">
          <span className="etiqueta-contador">SEGURIDAD TÉCNICA</span>
          <div className="contenedor-numero-contador">
            <span className="valor-contador-numero" data-valor-final="100">
              0
            </span>
            <span className="signo-mas-contador">%</span>
          </div>
          <p className="subtitulo-contador">Cumplimiento estricto del Reglamento Electrotécnico para Baja Tensión (REBT).</p>
        </div>

        <div className="tarjeta-estadistica">
          <span className="etiqueta-contador">TRAYECTORIA PROFESIONAL</span>
          <div className="contenedor-numero-contador">
            <span className="valor-contador-numero" data-valor-final="15">
              0
            </span>
            <span className="signo-mas-contador">+</span>
          </div>
          <p className="subtitulo-contador">Años de experiencia directa en ingeniería de potencia y automatización.</p>
        </div>
      </div>
    </section>
  );
}
