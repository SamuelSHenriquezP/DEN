import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SystemActivationHero({ onPowerOn, onOpenQuote }) {
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const heroRef = useRef(null);
  const lineRef = useRef(null);
  const nataleRef = useRef(null);
  const standbyContainerRef = useRef(null);
  const onlineContentRef = useRef(null);

  // 1. ANIMACIÓN AL ABRIR LA PÁGINA (INITIAL ENTRANCE ANIMATION ON PAGE LOAD)
  useEffect(() => {
    if (standbyContainerRef.current) {
      gsap.fromTo(
        standbyContainerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  // 2. ACTIVACIÓN "POWER ON" CON PARPADEO DE NATALE TIPO PEQUEÑO FOCO Y ENTRADA TENUE
  const handleActivatePower = () => {
    const line = lineRef.current;
    const nataleText = nataleRef.current;

    const tl = gsap.timeline();

    // A) PARPADEO DE "NATALE" COMO UN PEQUEÑO FOCO ANTES DE SEPARARSE
    if (nataleText) {
      tl.to(nataleText, {
        color: '#FFEE00',
        textShadow: '0 0 20px #FFEE00',
        duration: 0.1,
      })
      .to(nataleText, {
        opacity: 0.3,
        duration: 0.08,
      })
      .to(nataleText, {
        color: '#FFEE00',
        opacity: 1,
        textShadow: '0 0 35px #FFEE00',
        duration: 0.15,
      });
    }

    // B) TRAYECTORIA DE LÍNEA DE CORRIENTE
    if (line) {
      tl.to(line, {
        strokeDashoffset: 0,
        duration: 0.5,
        ease: 'power3.inOut',
      });
    }

    // C) TRANSICIÓN A SYSTEM ONLINE CON REVELADO TENUE Y ELEGANTE (SIN EFECTO 3D NI LUZ EXCESIVA)
    tl.to(heroRef.current, {
      backgroundColor: '#030508',
      duration: 0.3,
      onComplete: () => {
        setIsSystemOnline(true);
        if (onPowerOn) onPowerOn();

        // ENTRADA TENUE, LIMPIA Y EDITORIAL DE LAS LETRAS
        setTimeout(() => {
          if (onlineContentRef.current) {
            const elements = onlineContentRef.current.querySelectorAll('.revelar-tenue');
            gsap.fromTo(
              elements,
              { y: 24, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.85,
                stagger: 0.12,
                ease: 'power3.out',
              }
            );
          }
        }, 30);
      },
    });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#030508',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '120px 4vw 60px',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* SVG DE LINEA ELÉCTRICA ACTIVADORA */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <path
          ref={lineRef}
          d="M 0,100 L 300,100 L 450,300 L 900,300 L 1100,600 L 1920,600"
          fill="none"
          stroke="#FFEE00"
          strokeWidth="2"
          strokeDasharray="2000"
          strokeDashoffset="2000"
        />
      </svg>

      {/* ESTADO INICIAL: SYSTEM OFF (CON ANIMACIÓN AL ABRIR LA PÁGINA) */}
      {!isSystemOnline ? (
        <div
          ref={standbyContainerRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          {/* SENSACIÓN DE STANDBY */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '12px',
              color: '#64748B',
              letterSpacing: '3px',
              marginBottom: '32px',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#FFEE00',
                boxShadow: '0 0 10px #FFEE00',
              }}
            ></span>
            <span>SYSTEM // OFF</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              marginBottom: '40px',
              textTransform: 'uppercase',
            }}
          >
            DYNAMIC ELECTRIC <br />
            {/* TEXTO NATALE QUE SE ENCIENDE COMO PEQUEÑO FOCO ANTES DE IRSE */}
            <span
              ref={nataleRef}
              style={{
                color: '#64748B',
                transition: 'color 0.2s ease',
                display: 'inline-block',
              }}
            >
              NATALE
            </span>
          </h1>

          <button
            onClick={handleActivatePower}
            style={{
              background: 'transparent',
              border: '1px solid #FFEE00',
              color: '#FFEE00',
              padding: '18px 44px',
              borderRadius: '100px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '3px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              boxShadow: '0 0 25px rgba(255, 238, 0, 0.2)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFEE00';
              e.currentTarget.style.color = '#030508';
              e.currentTarget.style.boxShadow = '0 0 45px rgba(255, 238, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#FFEE00';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 238, 0, 0.2)';
            }}
          >
            <span>POWER ON</span>
            <span style={{ fontSize: '16px' }}>→</span>
          </button>
        </div>
      ) : (
        /* ESTADO ACTIVADO: SYSTEM ONLINE CON TIPOGRAFÍA TENUE, ELEGANTE Y EDITORIAL */
        <div
          ref={onlineContentRef}
          style={{
            width: '100%',
            maxWidth: '1280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            zIndex: 10,
          }}
        >
          {/* BADGE SYSTEM ONLINE */}
          <div
            className="revelar-tenue"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255, 238, 0, 0.06)',
              border: '1px solid rgba(255, 238, 0, 0.25)',
              padding: '8px 20px',
              borderRadius: '100px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              color: '#FFEE00',
              letterSpacing: '2px',
              marginBottom: '40px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#FFEE00',
                boxShadow: '0 0 10px #FFEE00',
              }}
            ></span>
            <span>SYSTEM // ONLINE • MADRID & SIERRA</span>
          </div>

          {/* EDITORIAL HUGE TYPOGRAPHY - TENUE, SOBRIA Y ELEGANTE SIN EXCESO DE LUZ NI 3D */}
          <h1
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: 'clamp(3.2rem, 8.5vw, 8rem)',
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
              marginBottom: '32px',
              textTransform: 'uppercase',
            }}
          >
            <div className="revelar-tenue" style={{ color: '#FFFFFF' }}>
              ENERGÍA.
            </div>
            <div
              className="revelar-tenue"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.35)',
              }}
            >
              PRECISIÓN.
            </div>
            <div className="revelar-tenue" style={{ color: '#FFEE00' }}>
              CONFIANZA.
            </div>
          </h1>

          {/* ETIQUETA INGENIERO KERLING NATALE */}
          <div
            className="revelar-tenue"
            style={{
              maxWidth: '680px',
              fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
              color: '#94A3B8',
              lineHeight: '1.65',
              fontFamily: 'var(--fuente-cuerpo)',
              marginBottom: '48px',
            }}
          >
            Ingeniería eléctrica de alta fidelidad, automatización Loxone Certified Partner, instalaciones fotovoltaicas con acumulación LFP y certificados oficiales en la Comunidad de Madrid por el{' '}
            <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>
              Ingeniero Kerling Abraham Natale Hidalgo
            </strong>.
          </div>

          {/* BOTONES DE ACCIÓN */}
          <div
            className="revelar-tenue"
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <button
              onClick={onOpenQuote}
              style={{
                background: '#FFEE00',
                color: '#030508',
                border: 'none',
                padding: '18px 40px',
                borderRadius: '100px',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '2px',
                cursor: 'pointer',
                boxShadow: '0 0 25px rgba(255, 238, 0, 0.3)',
                transition: 'all 0.3s ease',
              }}
            >
              INICIAR PROYECTO →
            </button>

            <a
              href="#proyectos"
              onClick={(e) => scrollToSection(e, 'proyectos')}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                padding: '18px 40px',
                borderRadius: '100px',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '2px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              EXPLORAR CASOS →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
