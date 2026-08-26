import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SystemActivationHero({ onPowerOn, onOpenQuote }) {
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const heroRef = useRef(null);
  const lineRef = useRef(null);
  const flashOverlayRef = useRef(null);
  const onlineContentRef = useRef(null);

  const handleActivatePower = () => {
    const line = lineRef.current;
    const hero = heroRef.current;
    const flash = flashOverlayRef.current;

    // 1. ANIMATE HIGH-VOLTAGE CURRENT LINE TRAVERSAL
    if (line) {
      const tl = gsap.timeline();

      // LINE DRAWING AT HIGH SPEED
      tl.to(line, {
        strokeDashoffset: 0,
        duration: 0.45,
        ease: 'power4.in',
      })
      // DRAMATIC CAMERA SHOCKWAVE PULSE
      .to(hero, {
        scale: 1.04,
        duration: 0.08,
        ease: 'power2.out',
      })
      // LIGHT BULB HIGH-VOLTAGE IGNITION FLASH BURST
      .to(flash, {
        opacity: 0.95,
        duration: 0.05,
        backgroundColor: '#FFFFFF',
      })
      .to(flash, {
        opacity: 0.6,
        duration: 0.1,
        backgroundColor: '#FFEE00',
      })
      .to(flash, {
        opacity: 0,
        duration: 0.35,
        ease: 'power3.out',
      })
      .to(hero, {
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
      }, '-=0.3')
      .call(() => {
        setIsSystemOnline(true);
        if (onPowerOn) onPowerOn();

        // SYNCHRONIZED FILAMENT FLICKER TITLE IGNITION
        setTimeout(() => {
          if (onlineContentRef.current) {
            const words = onlineContentRef.current.querySelectorAll('.foco-palabra-encendido');
            const sub = onlineContentRef.current.querySelectorAll('.foco-subtext-encendido');

            // 1. WORD FILAMENT FLICKER IGNITION
            gsap.timeline()
              .fromTo(
                words,
                { opacity: 0, scale: 0.92, filter: 'brightness(3)' },
                {
                  opacity: 1,
                  scale: 1,
                  filter: 'brightness(1)',
                  duration: 0.15,
                  stagger: 0.12,
                  ease: 'steps(2)',
                }
              )
              // ELECTRICAL IGNITION FLICKER BURST
              .to(words, {
                opacity: 0.3,
                duration: 0.06,
                stagger: 0.05,
              })
              .to(words, {
                opacity: 1,
                textShadow: '0 0 35px #FFEE00, 0 0 70px #FFEE00',
                duration: 0.2,
                stagger: 0.08,
              })
              // SUBTEXT FADE IN
              .fromTo(
                sub,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
              );
          }
        }, 30);
      });
    } else {
      setIsSystemOnline(true);
      if (onPowerOn) onPowerOn();
    }
  };

  // 3D PARALLAX INERTIA ON MOUSE MOVE
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    gsap.to('.capa-3d-fondo', {
      rotateY: x * 5,
      rotateX: -y * 5,
      transformPerspective: 1200,
      duration: 0.8,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to('.capa-3d-fondo', {
      rotateY: 0,
      rotateX: 0,
      duration: 1.2,
      ease: 'power3.out',
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
        perspective: '1200px',
      }}
    >
      {/* CAPA DE RÁFAGA LUMINOSA TIPO IGNICIÓN DE FOCO DE ALTA POTENCIA */}
      <div
        ref={flashOverlayRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 50,
        }}
      ></div>

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
          strokeWidth="3"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          filter="drop-shadow(0 0 15px #FFEE00)"
        />
      </svg>

      {/* ESTADO INICIAL: SYSTEM OFF */}
      {!isSystemOnline ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
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
              className="nodo-sistema-standby"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#334155',
                transition: 'all 0.3s ease',
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
            <span style={{ color: '#64748B' }}>NATALE</span>
          </h1>

          <button
            onClick={handleActivatePower}
            style={{
              background: 'transparent',
              border: '2px solid #FFEE00',
              color: '#FFEE00',
              padding: '20px 48px',
              borderRadius: '100px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '3px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              boxShadow: '0 0 35px rgba(255, 238, 0, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFEE00';
              e.currentTarget.style.color = '#030508';
              e.currentTarget.style.boxShadow = '0 0 65px rgba(255, 238, 0, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#FFEE00';
              e.currentTarget.style.boxShadow = '0 0 35px rgba(255, 238, 0, 0.3)';
            }}
          >
            <span>POWER ON</span>
            <span style={{ fontSize: '18px' }}>→</span>
          </button>
        </div>
      ) : (
        /* ESTADO ACTIVADO: SYSTEM ONLINE CON ENCENDIDO TIPO FOCO DE ALTA TENSIÓN */
        <div
          ref={onlineContentRef}
          className="capa-3d-fondo"
          style={{
            width: '100%',
            maxWidth: '1280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            zIndex: 10,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* BADGE SYSTEM ONLINE */}
          <div
            className="foco-subtext-encendido"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255, 238, 0, 0.08)',
              border: '1px solid rgba(255, 238, 0, 0.4)',
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
                boxShadow: '0 0 16px #FFEE00',
              }}
            ></span>
            <span>SYSTEM // ONLINE • MADRID & SIERRA</span>
          </div>

          {/* EDITORIAL HIGH-VOLTAGE LIGHT IGNITION TYPOGRAPHY */}
          <h1
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: 'clamp(3.2rem, 8.5vw, 8rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
              marginBottom: '32px',
              textTransform: 'uppercase',
            }}
          >
            <div className="foco-palabra-encendido" style={{ display: 'block' }}>
              ENERGÍA.
            </div>
            <div
              className="foco-palabra-encendido"
              style={{
                display: 'block',
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(255, 238, 0, 0.9)',
                filter: 'drop-shadow(0 0 20px rgba(255, 238, 0, 0.35))',
              }}
            >
              PRECISIÓN.
            </div>
            <div
              className="foco-palabra-encendido"
              style={{
                display: 'block',
                color: '#FFEE00',
                textShadow: '0 0 45px rgba(255, 238, 0, 0.6)',
              }}
            >
              CONFIANZA.
            </div>
          </h1>

          {/* ETIQUETA INGENIERO KERLING NATALE */}
          <div
            className="foco-subtext-encendido"
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
            className="foco-subtext-encendido"
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
                boxShadow: '0 0 35px rgba(255, 238, 0, 0.5)',
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
                border: '1px solid rgba(255, 255, 255, 0.25)',
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
