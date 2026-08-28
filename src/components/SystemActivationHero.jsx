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

  // 1. ANIMACIÓN DE CARGA Y MOVIMIENTO MÁS LENTO Y SUAVE DE LA LÍNEA ELÉCTRICA
  useEffect(() => {
    if (standbyContainerRef.current) {
      gsap.fromTo(
        standbyContainerRef.current.children,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.18,
          ease: 'power3.out',
        }
      );
    }

    if (nataleRef.current) {
      gsap.fromTo(
        nataleRef.current,
        { opacity: 0.3, textShadow: '0 0 5px rgba(0, 163, 255, 0.2)' },
        {
          opacity: 0.8,
          textShadow: '0 0 25px var(--color-electrico-glow)',
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        }
      );
    }

    if (lineRef.current) {
      gsap.to(lineRef.current, {
        strokeDashoffset: -2400,
        duration: 7.5, // MÁS LENTO Y FLUIDO
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);

  // 2. SECUENCIA DE ACTIVACIÓN CON IGNICIÓN MEJORADA Y LÍNEA MÁS LENTA
  const handleActivatePower = () => {
    const line = lineRef.current;
    const nataleText = nataleRef.current;
    const curtain = electricCurtainRef.current;

    const mainTl = gsap.timeline();

    // ETAPA 1: PARPADEO NORMAL DEL NOMBRE NATALE (IGUAL QUE AL PRINCIPIO)
    if (nataleText) {
      gsap.killTweensOf(nataleText);
      mainTl
        .to(nataleText, {
          opacity: 0.2,
          color: 'var(--color-electrico)',
          duration: 0.1,
        })
        .to(nataleText, {
          opacity: 1,
          textShadow: '0 0 35px var(--color-electrico-glow)',
          duration: 0.15,
        })
        .to(nataleText, {
          opacity: 0.3,
          duration: 0.08,
        })
        .to(nataleText, {
          opacity: 1,
          color: 'var(--color-electrico)',
          textShadow: '0 0 55px var(--color-electrico), 0 0 95px var(--color-electrico-glow)',
          duration: 0.2,
        });
    }

    // ETAPA 2: MOVIMIENTO MÁS LENTO DE LA LÍNEA Y DESPLIEGUE DE PANTALLA AZUL (1.6s)
    if (line && curtain) {
      mainTl
        // 1. LA LÍNEA RECORRE EL CANVAS DE FORMA SUAVE Y LENTA
        .to(
          line,
          {
            strokeDashoffset: 0,
            duration: 1.6, // MÁS LENTO Y ELEGANTE
            ease: 'power2.inOut',
          },
          '+=0.1'
        )
        // 2. SIMULTÁNEAMENTE LA PANTALLA AZUL SE EXPANDE
        .to(
          curtain,
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            duration: 1.6,
            ease: 'power2.inOut',
          },
          '<'
        )
        .call(() => {
          setIsSystemOnline(true);
          if (onPowerOn) onPowerOn();

          if (line) {
            gsap.set(line, { opacity: 0 });
          }

          setTimeout(() => {
            if (onlineContentRef.current) {
              const words = onlineContentRef.current.querySelectorAll('.foco-palabra-dramatica');
              const sub = onlineContentRef.current.querySelectorAll('.revelar-sub-dramatico');

              gsap.fromTo(
                words,
                {
                  y: 40,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1.2,
                  stagger: 0.18,
                  ease: 'power3.out',
                }
              );

              gsap.fromTo(
                sub,
                { y: 25, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1.0,
                  stagger: 0.12,
                  ease: 'power3.out',
                  delay: 0.2,
                }
              );
            }
          }, 30);
        })
        // 3. DISOLUCIÓN SUAVE DE LA PANTALLA
        .to(curtain, {
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          duration: 0.9,
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
        backgroundColor: '#030712',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '90px 4vw 50px',
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
          backgroundColor: 'var(--color-electrico)',
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          pointerEvents: 'none',
          zIndex: 90,
          boxShadow: 'inset 0 0 100px var(--color-electrico), 0 0 150px var(--color-electrico)',
        }}
      ></div>

      {/* SVG DE LÍNEA ELÉCTRICA PERMANENTE EN MOVIMIENTO CONTINUO (VAR(--COLOR-ELECTRICO)) */}
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
          stroke="var(--color-electrico)"
          strokeWidth="3.5"
          strokeDasharray="400 800"
          strokeDashoffset="0"
          filter="drop-shadow(0 0 20px var(--color-electrico))"
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
          {/* NODO STANDBY EN AZUL ELÉCTRICO */}
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
                backgroundColor: 'var(--color-electrico)',
                boxShadow: '0 0 16px var(--color-electrico)',
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
            {/* TEXTO NATALE QUE SE ENCIENDE LENTAMENTE EN AZUL */}
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
              border: '2px solid var(--color-electrico)',
              color: 'var(--color-electrico)',
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
              boxShadow: '0 0 35px var(--color-electrico-borde)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-electrico)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.boxShadow = '0 0 65px var(--color-electrico-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--color-electrico)';
              e.currentTarget.style.boxShadow = '0 0 35px var(--color-electrico-borde)';
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
          {/* BADGE SYSTEM ONLINE EN AZUL */}
          <div
            className="revelar-sub-dramatico"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(0, 136, 255, 0.08)',
              border: '1px solid var(--color-electrico-borde)',
              padding: '8px 22px',
              borderRadius: '100px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              color: 'var(--color-electrico)',
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
            <span>ENERGÍA SEGURA, SOLUCIONES CONFIABLES • GUADARRAMA, MADRID</span>
          </div>

          {/* TITULAR PROPORCIONADO Y ELEGANTE */}
          <h1
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '28px',
              maxWidth: '920px',
            }}
          >
            <span className="foco-palabra-dramatica" style={{ color: '#FFFFFF', display: 'inline-block', marginRight: '16px' }}>
              SOLUCIONES
            </span>
            <span
              className="foco-palabra-dramatica"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1.5px var(--color-electrico)',
                filter: 'drop-shadow(0 0 20px var(--color-electrico-glow))',
                display: 'inline-block',
                marginRight: '16px',
              }}
            >
              ELÉCTRICAS
            </span>
            <br />
            <span
              className="foco-palabra-dramatica"
              style={{
                color: 'var(--color-electrico)',
                textShadow: '0 0 30px var(--color-electrico-glow)',
                display: 'inline-block',
              }}
            >
              PROFESIONALES Y CERTIFICADAS
            </span>
          </h1>

          {/* ETIQUETA KERLING NATALE */}
          <div
            className="revelar-sub-dramatico"
            style={{
              maxWidth: '720px',
              fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
              color: '#94A3B8',
              lineHeight: '1.65',
              fontFamily: 'var(--fuente-cuerpo)',
              marginBottom: '48px',
            }}
          >
            Instalaciones eléctricas, fotovoltaica, domótica avanzada Loxone, telecomunicaciones, certificaciones e inspecciones por{' '}
            <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>
              Kerling Abraham Natale Hidalgo
            </strong> (Electricista Categoría Especialista · Guadarrama, Madrid). Garantizando máxima seguridad y legalidad.
          </div>

          {/* BOTONES DE ACCIÓN EN AZUL REAL */}
          <div
            className="revelar-sub-dramatico"
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: '36px',
            }}
          >
            <button
              onClick={onOpenQuote}
              style={{
                background: 'var(--color-electrico)',
                color: '#FFFFFF',
                border: 'none',
                padding: '20px 44px',
                borderRadius: '100px',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '2px',
                cursor: 'pointer',
                boxShadow: '0 0 35px var(--color-electrico-glow)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 50px var(--color-electrico-glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 35px var(--color-electrico-glow)';
              }}
            >
              SOLICITAR PRESUPUESTO CERRADO →
            </button>

            <a
              href="https://wa.me/34682178499"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(37, 211, 102, 0.1)',
                border: '1px solid #25D366',
                color: '#25D366',
                padding: '20px 36px',
                borderRadius: '100px',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '2px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              WHATSAPP DIRECTO →
            </a>
          </div>

          {/* BARRA DESTACADA DE BENEFICIOS Y CONFIANZA PARA EL COMPRADOR */}
          <div
            className="revelar-sub-dramatico"
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {[
              { text: 'Ahorro Fotovoltaico hasta 95%', code: 'SOLAR' },
              { text: 'Boletines Oficiales CIE 24-48h', code: 'CIE' },
              { text: 'Domótica Loxone Sin Cuotas', code: 'LOXONE' },
              { text: 'Revisión Termográfica FLIR', code: 'FLIR' },
            ].map((b, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '10px',
                  color: '#CBD5E1',
                  letterSpacing: '1px',
                  background: 'rgba(11, 17, 29, 0.6)',
                  border: '1px solid var(--color-electrico-borde)',
                  padding: '6px 14px',
                  borderRadius: '100px',
                }}
              >
                <span style={{ color: '#FFEE00', fontWeight: 800 }}>[{b.code}]</span>
                <span style={{ fontWeight: 700, color: '#FFFFFF' }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
