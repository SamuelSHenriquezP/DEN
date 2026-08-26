import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SystemActivationHero({ onPowerOn, onOpenQuote }) {
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const heroRef = useRef(null);
  const lineRef = useRef(null);
  const nataleRef = useRef(null);
  const standbyContainerRef = useRef(null);
  const onlineContentRef = useRef(null);
  const electricCurtainRef = useRef(null);

  // 1. ANIMACIÓN DE CARGA AL ABRIR LA PÁGINA
  useEffect(() => {
    if (standbyContainerRef.current) {
      gsap.fromTo(
        standbyContainerRef.current.children,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.18,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  // 2. SECUENCIA CON RECORRIDO CONTINUO DE LA LÍNEA ELÉCTRICA FLUYENDO HACIA LA DERECHA (-2000 OFFSET)
  const handleActivatePower = () => {
    const line = lineRef.current;
    const nataleText = nataleRef.current;
    const curtain = electricCurtainRef.current;

    const mainTl = gsap.timeline();

    // ETAPA 1: PARPADEO LENTO DE NATALE
    if (nataleText) {
      mainTl
        .to(nataleText, {
          color: '#00E5FF',
          textShadow: '0 0 30px #00E5FF, 0 0 60px #00E5FF',
          duration: 0.35,
          ease: 'power2.in',
        })
        .to(nataleText, {
          opacity: 0.3,
          duration: 0.15,
        })
        .to(nataleText, {
          color: '#00E5FF',
          opacity: 1,
          textShadow: '0 0 50px #00E5FF',
          duration: 0.4,
          ease: 'power2.out',
        });
    }

    // ETAPA 2: RECORRIDO DE ENTRADA DE LA LÍNEA ELÉCTRICA EN CIAN (2000 -> 0)
    if (line) {
      mainTl.to(line, {
        strokeDashoffset: 0,
        duration: 0.85,
        ease: 'power2.inOut',
      });
    }

    // ETAPA 3: BARRIDO DE PANTALLA AZUL -> LA LÍNEA SE VUELVE AMARILLA (#FFEE00)
    if (curtain) {
      mainTl
        // CAMBIO DE COLOR DE LA LÍNEA A AMARILLO ELÉCTRICO DURANTE EL BARRIDO DE PANTALLA
        .to(line, {
          stroke: '#FFEE00',
          filter: 'drop-shadow(0 0 25px #FFEE00)',
          duration: 0.4,
          ease: 'power2.out',
        })
        // BARRIDO FLUIDO DE CORTINA AZUL
        .to(curtain, {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 0.55,
          ease: 'power4.inOut',
        }, '-=0.35')
        .call(() => {
          setIsSystemOnline(true);
          if (onPowerOn) onPowerOn();

          // REVELADO DE TÍTULOS Y RECORRIDO CONTINUO DE LA LÍNEA SALIENDO HACIA LA DERECHA (0 -> -2000)
          setTimeout(() => {
            if (onlineContentRef.current) {
              const words = onlineContentRef.current.querySelectorAll('.foco-palabra-dramatica');
              const sub = onlineContentRef.current.querySelectorAll('.revelar-sub-dramatico');

              const titleTl = gsap.timeline();

              titleTl
                .fromTo(
                  words,
                  {
                    y: 60,
                    opacity: 0,
                    scale: 0.88,
                    filter: 'drop-shadow(0 0 50px #00E5FF)',
                  },
                  {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    filter: 'drop-shadow(0 0 15px rgba(0, 229, 255, 0.4))',
                    duration: 1.2,
                    stagger: 0.22,
                    ease: 'power4.out',
                  }
                )
                .fromTo(
                  sub,
                  { y: 30, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: 'power3.out',
                  },
                  '-=0.6'
                )
                // LA LÍNEA CONTINÚA SU CURVA Y FLUYE HACIA LA DERECHA HASTA DESAPARECER SIGUIENDO SU PROPIO TRAZADO (0 -> -2000)
                .to(line, {
                  strokeDashoffset: -2000,
                  opacity: 0.2,
                  duration: 1.1,
                  ease: 'power2.inOut',
                }, '-=0.7')
                .to(line, {
                  opacity: 0,
                  duration: 0.3,
                });
            }
          }, 30);
        })
        // DISOLUCIÓN DE LA CORTINA ELÉCTRICA
        .to(curtain, {
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          duration: 0.65,
          ease: 'power3.out',
        });
    } else {
      setIsSystemOnline(true);
      if (onPowerOn) onPowerOn();
    }
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
      {/* CORTINA DE PANTALLA COMPLETA CON ONDA ELÉCTRICA AZUL */}
      <div
        ref={electricCurtainRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#00E5FF',
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          pointerEvents: 'none',
          zIndex: 90,
          boxShadow: 'inset 0 0 100px #00E5FF, 0 0 150px #00E5FF',
        }}
      ></div>

      {/* SVG DE LÍNEA ELÉCTRICA QUE SE DIBUJA Y CONTINÚA SU TRAZADO HACIA LA DERECHA */}
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
          d="M 0,120 L 320,120 L 480,320 L 920,320 L 1150,620 L 1920,620"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="3.5"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          filter="drop-shadow(0 0 20px #00E5FF)"
        />
      </svg>

      {/* ESTADO INICIAL: SYSTEM OFF */}
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
          {/* NODO STANDBY EN CIAN ELÉCTRICO */}
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
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#00E5FF',
                boxShadow: '0 0 16px #00E5FF',
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
            {/* TEXTO NATALE QUE SE ENCIENDE LENTAMENTE EN CIAN */}
            <span
              ref={nataleRef}
              style={{
                color: '#64748B',
                transition: 'color 0.3s ease',
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
              border: '2px solid #00E5FF',
              color: '#00E5FF',
              padding: '20px 52px',
              borderRadius: '100px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '3px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '18px',
              boxShadow: '0 0 35px rgba(0, 229, 255, 0.35)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#00E5FF';
              e.currentTarget.style.color = '#030508';
              e.currentTarget.style.boxShadow = '0 0 65px rgba(0, 229, 255, 0.85)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#00E5FF';
              e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 229, 255, 0.35)';
            }}
          >
            <span>POWER ON</span>
            <span style={{ fontSize: '18px' }}>→</span>
          </button>
        </div>
      ) : (
        /* ESTADO ACTIVADO: SYSTEM ONLINE */
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
          {/* BADGE SYSTEM ONLINE EN CIAN */}
          <div
            className="revelar-sub-dramatico"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(0, 229, 255, 0.08)',
              border: '1px solid rgba(0, 229, 255, 0.4)',
              padding: '8px 22px',
              borderRadius: '100px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              color: '#00E5FF',
              letterSpacing: '2px',
              marginBottom: '40px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#00E5FF',
                boxShadow: '0 0 16px #00E5FF',
              }}
            ></span>
            <span>SYSTEM // ONLINE • MADRID & SIERRA</span>
          </div>

          {/* EDITORIAL HUGE TYPOGRAPHY - CIAN ELÉCTRICO DRAMÁTICO */}
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
            <div className="foco-palabra-dramatica" style={{ color: '#FFFFFF' }}>
              ENERGÍA.
            </div>
            <div
              className="foco-palabra-dramatica"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1.8px #00E5FF',
                filter: 'drop-shadow(0 0 25px rgba(0, 229, 255, 0.5))',
              }}
            >
              PRECISIÓN.
            </div>
            <div
              className="foco-palabra-dramatica"
              style={{
                color: '#00E5FF',
                textShadow: '0 0 35px rgba(0, 229, 255, 0.6), 0 0 70px rgba(0, 229, 255, 0.3)',
              }}
            >
              CONFIANZA.
            </div>
          </h1>

          {/* ETIQUETA INGENIERO KERLING NATALE */}
          <div
            className="revelar-sub-dramatico"
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
            <strong style={{ color: '#00E5FF', fontWeight: 700 }}>
              Ingeniero Kerling Abraham Natale Hidalgo
            </strong>.
          </div>

          {/* BOTONES DE ACCIÓN EN CIAN ELÉCTRICO */}
          <div
            className="revelar-sub-dramatico"
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
                background: '#00E5FF',
                color: '#030508',
                border: 'none',
                padding: '20px 44px',
                borderRadius: '100px',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '2px',
                cursor: 'pointer',
                boxShadow: '0 0 35px rgba(0, 229, 255, 0.6)',
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
                border: '1px solid rgba(0, 229, 255, 0.4)',
                color: '#FFFFFF',
                padding: '20px 44px',
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
