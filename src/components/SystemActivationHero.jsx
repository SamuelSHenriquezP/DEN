import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SystemActivationHero({ onPowerOn, onOpenQuote }) {
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const heroRef = useRef(null);
  const lineRef = useRef(null);
  const onlineContentRef = useRef(null);

  const handleActivatePower = () => {
    const line = lineRef.current;
    if (line) {
      gsap.timeline()
        .to(line, {
          strokeDashoffset: 0,
          duration: 0.6,
          ease: 'power3.inOut',
        })
        .to('.nodo-sistema-standby', {
          scale: 1.8,
          backgroundColor: '#FFEE00',
          boxShadow: '0 0 35px #FFEE00',
          duration: 0.3,
        })
        .to(heroRef.current, {
          backgroundColor: '#030508',
          duration: 0.4,
          onComplete: () => {
            setIsSystemOnline(true);
            if (onPowerOn) onPowerOn();

            // 3D SPLIT LETTER & BLOCK EXTRAVAGANT ENTRANCE ANIMATION
            setTimeout(() => {
              if (onlineContentRef.current) {
                const elements = onlineContentRef.current.querySelectorAll('.revelar-3d');
                gsap.fromTo(
                  elements,
                  {
                    rotationX: -75,
                    rotationY: 25,
                    z: -200,
                    y: 80,
                    opacity: 0,
                    transformPerspective: 1200,
                    transformOrigin: '0% 50% -100',
                  },
                  {
                    rotationX: 0,
                    rotationY: 0,
                    z: 0,
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    stagger: 0.15,
                    ease: 'power4.out',
                  }
                );
              }
            }, 50);
          },
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
      rotateY: x * 6,
      rotateX: -y * 6,
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
          strokeWidth="2.5"
          strokeDasharray="2000"
          strokeDashoffset="2000"
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
              border: '1.5px solid #FFEE00',
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
              boxShadow: '0 0 35px rgba(255, 238, 0, 0.25)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFEE00';
              e.currentTarget.style.color = '#030508';
              e.currentTarget.style.boxShadow = '0 0 60px rgba(255, 238, 0, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#FFEE00';
              e.currentTarget.style.boxShadow = '0 0 35px rgba(255, 238, 0, 0.25)';
            }}
          >
            <span>POWER ON</span>
            <span style={{ fontSize: '18px' }}>→</span>
          </button>
        </div>
      ) : (
        /* ESTADO ACTIVADO: SYSTEM ONLINE CON ANIMACIONES 3D EXTRAVAGANTES */
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
            className="revelar-3d"
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

          {/* EDITORIAL 3D EXTRAVAGANT TYPOGRAPHY */}
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
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="revelar-3d" style={{ display: 'block' }}>
              ENERGÍA.
            </div>
            <div
              className="revelar-3d"
              style={{
                display: 'block',
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(255, 238, 0, 0.85)',
                filter: 'drop-shadow(0 0 20px rgba(255, 238, 0, 0.3))',
              }}
            >
              PRECISIÓN.
            </div>
            <div
              className="revelar-3d"
              style={{
                display: 'block',
                color: '#FFEE00',
                textShadow: '0 0 40px rgba(255, 238, 0, 0.4)',
              }}
            >
              CONFIANZA.
            </div>
          </h1>

          {/* ETIQUETA INGENIERO KERLING NATALE */}
          <div
            className="revelar-3d"
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
            className="revelar-3d"
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
