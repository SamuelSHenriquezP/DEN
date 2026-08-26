import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicProjectsShowcase({ onOpenModal }) {
  const showcaseRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [viewModes, setViewModes] = useState({});

  const proyectos = [
    {
      clave: 'villa-loxone',
      cat: 'LOXONE',
      num: 'PROJECT 01',
      titulo: 'RESIDENCIA UNIFAMILIAR LOXONE',
      subtitulo: 'AUTOMATIZACIÓN RESIDENCIAL & ILUMINACIÓN DALI',
      ubicacion: 'POZUELO DE ALARCÓN • MADRID',
      voltage: '400V TRIFÁSICO',
      status: 'SYSTEM ONLINE',
      desc: 'Instalación eléctrica completa de 600m² con integración de servidor Loxone, control DALI de 45 zonas y sistema solar fotovoltaico de 15 kWp.',
      img: '/images/villa_loxone.png',
      tags: ['Control DALI 45 Zonas', 'Servidor Loxone', '15 kWp Generación Solar'],
      blueprintDesc: 'CABLEADO ESTRUCTURADO BUS TREE • 45 DIRECCIONES DALI • PROCESAMIENTO MINISERVER V2',
    },
    {
      clave: 'solar-park',
      cat: 'SOLAR',
      num: 'PROJECT 02',
      titulo: 'SEDE INDUSTRIAL FOTOVOLTAICA',
      subtitulo: 'ENERGÍA RENOVABLE & ALMACENAMIENTO LFP',
      ubicacion: 'GUADARRAMA • SIERRA DE MADRID',
      voltage: '120 kWp INSTALADOS',
      status: 'INYECCIÓN CERO',
      desc: 'Sistema fotovoltaico en cubierta de 120 kWp con inversor trifásico industrial y acumulación en baterías de ferrofosfato de litio (LFP) de 80 kWh.',
      img: '/images/solar_industrial.png',
      tags: ['120 kWp Fotovoltaica', '80 kWh Batería LFP', 'Inyección Cero a Red'],
      blueprintDesc: 'CADENA DE 24 STRINGS DC • INVERSOR TRIFÁSICO 100kW • RACK BATERÍAS LFP HIGH-VOLTAGE',
    },
    {
      clave: 'data-panel',
      cat: 'REBT',
      num: 'PROJECT 03',
      titulo: 'INFRAESTRUCTURA DE CUADROS REBT',
      subtitulo: 'REFORMA DE POTENCIA & TERMOGRAFÍA PREVENTIVA',
      ubicacion: 'MADRID CAPITAL',
      voltage: '250A REBT COMPLIANT',
      status: 'FLIR CERTIFIED',
      desc: 'Sustitución de cuadro general de mando y protección de 250A con termografía FLIR preventiva y sistemas de auto-reenganche diferencial.',
      img: '/images/smart_panel.png',
      tags: ['Cuadro 250A Trifásico', 'Termografía FLIR', 'Diferencial Superinmunizado'],
      blueprintDesc: 'EMBARRADO COBRE 250A • IGA 4P CON BOBINA DE EMISIÓN • PROTECCIÓN SOBRETENSIONES TRANSITORIAS',
    },
    {
      clave: 'ev-charging',
      cat: 'EV',
      num: 'PROJECT 04',
      titulo: 'PUNTOS DE RECARGA VEHÍCULO ELÉCTRICO',
      subtitulo: 'MOVILIDAD SOSTENIBLE & BALANCEO DINÁMICO',
      ubicacion: 'LA MORALEJA • ALCOBENDAS',
      voltage: '22 kW TRIPLE WALLBOX',
      status: 'ITC-BT-52 ONLINE',
      desc: 'Instalación de cargador trifásico de 22 kW con balanceo dinámico de potencia para proteger la instalación eléctrica de la residencia.',
      img: '/images/ev_charging.png',
      tags: ['22 kW Carga Rápida', 'Balanceo Dinámico', 'Integración Solar Directa'],
      blueprintDesc: 'CIRCUITO DEDICADO ITC-BT-52 • MEDIDOR MODBUS TRIFÁSICO • CONTROL DE CORRIENTE DINÁMICO',
    },
  ];

  const proyectosFiltrados = activeCategory === 'ALL'
    ? proyectos
    : proyectos.filter((p) => p.cat === activeCategory);

  const toggleViewMode = (e, clave) => {
    e.stopPropagation();
    setViewModes((prev) => ({
      ...prev,
      [clave]: prev[clave] === 'BLUEPRINT' ? 'PHOTO' : 'BLUEPRINT',
    }));
  };

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    gsap.to(card, {
      rotateY: x * 8,
      rotateX: -y * 8,
      transformPerspective: 1200,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 1,
      ease: 'power3.out',
    });
  };

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
      {/* ENCABEZADO DE SECCIÓN CON FILTRADO 3D */}
      <div style={{ maxWidth: '1280px', margin: '0 auto 60px' }}>
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

        {/* BARRA DE FILTRADO DINÁMICA DE PROYECTOS */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            marginTop: '36px',
          }}
        >
          {[
            { id: 'ALL', label: 'TODOS LOS CASOS' },
            { id: 'LOXONE', label: 'LOXONE DOMÓTICA' },
            { id: 'SOLAR', label: 'FOTOVOLTAICA' },
            { id: 'REBT', label: 'CUADROS REBT' },
            { id: 'EV', label: 'RECARGA EV' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: activeCategory === cat.id ? '#FFEE00' : 'rgba(11, 17, 29, 0.8)',
                color: activeCategory === cat.id ? '#030508' : '#94A3B8',
                border: activeCategory === cat.id ? '1px solid #FFEE00' : '1px solid rgba(255, 255, 255, 0.1)',
                padding: '10px 22px',
                borderRadius: '100px',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '1.5px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* LISTADO CINEMATOGRÁFICO DE PROYECTOS CON TILT 3D E MODO ESQUEMA */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          perspective: '1400px',
        }}
      >
        {proyectosFiltrados.map((proj) => {
          const isBlueprint = viewModes[proj.clave] === 'BLUEPRINT';
          return (
            <div
              key={proj.clave}
              className="proyecto-cinematografico-item"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              data-cursor="VIEW CASE"
              onClick={() => onOpenModal(proj.clave)}
              style={{
                position: 'relative',
                width: '100%',
                minHeight: '80vh',
                borderRadius: '28px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: isBlueprint ? '1px solid #00E5FF' : '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '40px',
                boxSizing: 'border-box',
                background: '#0B111D',
                transformStyle: 'preserve-3d',
                transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
                boxShadow: isBlueprint ? '0 0 40px rgba(0, 229, 255, 0.25)' : '0 20px 50px rgba(0,0,0,0.8)',
              }}
            >
              {/* IMAGEN DE FONDO O VISTA BLUEPRINT ESQUEMA CAD 3D */}
              {!isBlueprint ? (
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
              ) : (
                /* RECTÁNGULO DE PLANO UNIFILAR DE INGENIERÍA 3D */
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#050B14',
                    backgroundImage: 'radial-gradient(#00E5FF 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.9,
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px',
                    boxSizing: 'border-box',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: '3rem', marginBottom: '16px' }}>📐</span>
                  <span
                    style={{
                      fontFamily: 'var(--fuente-tecnica)',
                      fontSize: '14px',
                      color: '#00E5FF',
                      fontWeight: 800,
                      letterSpacing: '3px',
                      marginBottom: '8px',
                    }}
                  >
                    CAD SCHEMATIC WIREFRAME // UNIFILAR
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--fuente-tecnica)',
                      fontSize: '13px',
                      color: '#94A3B8',
                      maxWidth: '600px',
                      lineHeight: 1.6,
                    }}
                  >
                    {proj.blueprintDesc}
                  </p>
                </div>
              )}

              {/* SOMBRA Y GRADIENTE CINEMATOGRÁFICO */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: isBlueprint
                    ? 'linear-gradient(180deg, rgba(5, 11, 20, 0.7) 0%, rgba(5, 11, 20, 0.95) 100%)'
                    : 'linear-gradient(180deg, rgba(3, 5, 8, 0.7) 0%, rgba(3, 5, 8, 0.3) 40%, rgba(3, 5, 8, 0.95) 100%)',
                  zIndex: 2,
                }}
              ></div>

              {/* METADATOS SUPERIORES Y BOTÓN CAMBIO VISTA ESQUEMA */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 3,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px',
                  transform: 'translateZ(40px)',
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

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {/* TOGGLE VISTA ESQUEMA / FOTO */}
                  <button
                    onClick={(e) => toggleViewMode(e, proj.clave)}
                    style={{
                      background: isBlueprint ? '#00E5FF' : 'rgba(3, 5, 8, 0.85)',
                      color: isBlueprint ? '#030508' : '#00E5FF',
                      border: '1px solid #00E5FF',
                      padding: '8px 18px',
                      borderRadius: '100px',
                      fontFamily: 'var(--fuente-tecnica)',
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '1px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {isBlueprint ? '📷 VER FOTOGRAFÍA' : '📐 VER ESQUEMA CAD'}
                  </button>

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
                </div>
              </div>

              {/* CONTENIDO INFERIOR CON FLOTACIÓN 3D */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 3,
                  maxWidth: '850px',
                  transform: 'translateZ(50px)',
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
          );
        })}
      </div>
    </section>
  );
}
