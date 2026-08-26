import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicProjectsShowcase({ onOpenModal }) {
  const showcaseRef = useRef(null);

  const proyectos = [
    {
      clave: 'villa-loxone',
      num: 'PROJECT 01',
      titulo: 'RESIDENCIA UNIFAMILIAR LOXONE',
      subtitulo: 'AUTOMATIZACIÓN RESIDENCIAL & ILUMINACIÓN DALI',
      ubicacion: 'POZUELO DE ALARCÓN • MADRID',
      voltage: '400V TRIFÁSICO',
      status: 'SYSTEM ONLINE',
      desc: 'Instalación eléctrica completa de 600m² con integración de servidor Loxone, control DALI de 45 zonas y sistema solar fotovoltaico de 15 kWp.',
      img: '/images/villa_loxone.png',
      tags: ['Control DALI 45 Zonas', 'Servidor Loxone', '15 kWp Generación Solar'],
    },
    {
      clave: 'solar-park',
      num: 'PROJECT 02',
      titulo: 'SEDE INDUSTRIAL FOTOVOLTAICA',
      subtitulo: 'ENERGÍA RENOVABLE & ALMACENAMIENTO LFP',
      ubicacion: 'GUADARRAMA • SIERRA DE MADRID',
      voltage: '120 kWp INSTALADOS',
      status: 'INYECCIÓN CERO',
      desc: 'Sistema fotovoltaico en cubierta de 120 kWp con inversor trifásico industrial y acumulación en baterías de ferrofosfato de litio (LFP) de 80 kWh.',
      img: '/images/solar_industrial.png',
      tags: ['120 kWp Fotovoltaica', '80 kWh Batería LFP', 'Inyección Cero a Red'],
    },
    {
      clave: 'data-panel',
      num: 'PROJECT 03',
      titulo: 'INFRAESTRUCTURA DE CUADROS REBT',
      subtitulo: 'REFORMA DE POTENCIA & TERMOGRAFÍA PREVENTIVA',
      ubicacion: 'MADRID CAPITAL',
      voltage: '250A REBT COMPLIANT',
      status: 'FLIR CERTIFIED',
      desc: 'Sustitución de cuadro general de mando y protección de 250A con termografía FLIR preventiva y sistemas de auto-reenganche diferencial.',
      img: '/images/smart_panel.png',
      tags: ['Cuadro 250A Trifásico', 'Termografía FLIR', 'Diferencial Superinmunizado'],
    },
    {
      clave: 'ev-charging',
      num: 'PROJECT 04',
      titulo: 'PUNTOS DE RECARGA VEHÍCULO ELÉCTRICO',
      subtitulo: 'MOVILIDAD SOSTENIBLE & BALANCEO DINÁMICO',
      ubicacion: 'LA MORALEJA • ALCOBENDAS',
      voltage: '22 kW TRIPLE WALLBOX',
      status: 'ITC-BT-52 ONLINE',
      desc: 'Instalación de cargador trifásico de 22 kW con balanceo dinámico de potencia para proteger la instalación eléctrica de la residencia.',
      img: '/images/ev_charging.png',
      tags: ['22 kW Carga Rápida', 'Balanceo Dinámico', 'Integración Solar Directa'],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = showcaseRef.current.querySelectorAll('.proyecto-cinematografico-item');

      items.forEach((item) => {
        const img = item.querySelector('.imagen-cinematografica');

        gsap.fromTo(
          img,
          { scale: 1.15, filter: 'brightness(0.7)' },
          {
            scale: 1,
            filter: 'brightness(1)',
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    }, showcaseRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proyectos"
      ref={showcaseRef}
      style={{
        width: '100%',
        backgroundColor: '#030508',
        padding: '120px 4vw 80px',
        boxSizing: 'border-box',
      }}
    >
      {/* ENCABEZADO DE SECCIÓN */}
      <div style={{ maxWidth: '1280px', margin: '0 auto 80px' }}>
        <span
          style={{
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '11px',
            color: '#FFEE00',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '12px',
          }}
        >
          01 // SELECTED WORK & CASE STUDIES
        </span>
        <h2
          style={{
            fontFamily: 'var(--fuente-titulos)',
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
          }}
        >
          PROYECTOS Y <br />
          <span style={{ color: '#FFEE00' }}>CASOS DE INGENIERÍA</span>
        </h2>
      </div>

      {/* LISTADO CINEMATOGRÁFICO DE PROYECTOS (85VH CADA UNO) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
        {proyectos.map((proj) => (
          <div
            key={proj.clave}
            className="proyecto-cinematografico-item"
            data-cursor="VIEW CASE"
            onClick={() => onOpenModal(proj.clave)}
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '80vh',
              borderRadius: '28px',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '40px',
              boxSizing: 'border-box',
              background: '#0B111D',
            }}
          >
            {/* IMAGEN DE FONDO FULL-BLEED */}
            <img
              src={proj.img}
              alt={proj.titulo}
              className="imagen-cinematografica"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.55,
                transition: 'opacity 0.4s ease',
                zIndex: 1,
              }}
            />

            {/* SOMBRA Y GRADIENTE CINEMATOGRÁFICO */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, rgba(3, 5, 8, 0.7) 0%, rgba(3, 5, 8, 0.3) 40%, rgba(3, 5, 8, 0.95) 100%)',
                zIndex: 2,
              }}
            ></div>

            {/* METADATOS SUPERIORES */}
            <div
              style={{
                position: 'relative',
                zIndex: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '14px',
                  fontWeight: 800,
                  color: '#FFEE00',
                  letterSpacing: '3px',
                }}
              >
                {proj.num}
              </span>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    background: 'rgba(3, 5, 8, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '6px 14px',
                    borderRadius: '100px',
                    fontFamily: 'var(--fuente-tecnica)',
                    fontSize: '10px',
                    color: '#94A3B8',
                    letterSpacing: '1px',
                  }}
                >
                  {proj.voltage}
                </span>
                <span
                  style={{
                    background: 'rgba(0, 229, 255, 0.1)',
                    border: '1px solid rgba(0, 229, 255, 0.3)',
                    padding: '6px 14px',
                    borderRadius: '100px',
                    fontFamily: 'var(--fuente-tecnica)',
                    fontSize: '10px',
                    color: '#00E5FF',
                    letterSpacing: '1px',
                  }}
                >
                  {proj.status}
                </span>
              </div>
            </div>

            {/* CONTENIDO INFERIOR CON TIPOGRAFÍA EDITORIAL */}
            <div
              style={{
                position: 'relative',
                zIndex: 3,
                maxWidth: '850px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '11px',
                  color: '#FFEE00',
                  letterSpacing: '2px',
                  display: 'block',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                }}
              >
                {proj.subtitulo} • {proj.ubicacion}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--fuente-titulos)',
                  fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 0.98,
                  letterSpacing: '-0.03em',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}
              >
                {proj.titulo}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--fuente-cuerpo)',
                  fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)',
                  color: '#CBD5E1',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                {proj.desc}
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#FFEE00',
                  color: '#030508',
                  padding: '14px 28px',
                  borderRadius: '100px',
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                }}
              >
                <span>VER CASO COMPLETO</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
