import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const yearsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (yearsRef.current) {
      gsap.to(yearsRef.current, {
        innerText: 5,
        duration: 2.5,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: yearsRef.current,
          start: 'top 85%',
        },
      });
    }

    if (projectsRef.current) {
      gsap.to(projectsRef.current, {
        innerText: 200,
        duration: 2.5,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 85%',
        },
      });
    }

    gsap.utils.toArray('.stats-section .gsap-reveal-card').forEach((card) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return (
    <section className="stats-section container full-screen-section">
      <div className="stats-grid">
        <div className="stat-card gsap-reveal-card">
          <div className="stat-number-wrapper">
            <span className="counter" ref={yearsRef}>0</span>
            <span className="stat-plus">+</span>
          </div>
          <p className="stat-label">AÑOS DE INGENIERÍA</p>
          <span className="stat-sub">Trayectoria de alta especialización en la Comunidad de Madrid</span>
        </div>

        <div className="stat-card gsap-reveal-card">
          <div className="stat-number-wrapper">
            <span className="counter" ref={projectsRef}>0</span>
            <span className="stat-plus">+</span>
          </div>
          <p className="stat-label">PROYECTOS EJECUTADOS</p>
          <span className="stat-sub">Villas residenciales, solar y cuadros industriales</span>
        </div>

        <div className="stat-card gsap-reveal-card">
          <div className="stat-number-wrapper">
            <span className="stat-highlight">A+++</span>
          </div>
          <p className="stat-label">EFICIENCIA ENERGÉTICA</p>
          <span className="stat-sub">Optimización de consumo y huella de carbono</span>
        </div>

        <div className="stat-card gsap-reveal-card">
          <div className="stat-number-wrapper">
            <span className="stat-highlight purple">100%</span>
          </div>
          <p className="stat-label">LEGALIZACIÓN Y CIE</p>
          <span className="stat-sub">Boletines oficiales firmados por Kerling Natale</span>
        </div>
      </div>
    </section>
  );
}
