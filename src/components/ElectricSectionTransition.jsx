import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 1. DIVISOR DE ENERGÍA CON PARPADEO DE LÍNEA
export function ElectricDivider() {
  const lineRef = useRef(null);

  useEffect(() => {
    if (!lineRef.current) return;
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 88%',
        },
      }
    );
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        ref={lineRef}
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent 0%, var(--color-electrico) 50%, transparent 100%)',
          boxShadow: '0 0 20px var(--color-electrico)',
          transformOrigin: 'center center',
        }}
      ></div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. ENTRADA ÚNICA PARA SECCIÓN 1: HERO (IGNICIÓN DE SISTEMA)
// -------------------------------------------------------------
export function HeroSectionWrapper({ children, id }) {
  return <div id={id} style={{ width: '100%' }}>{children}</div>;
}

// -------------------------------------------------------------
// 3. ENTRADA ÚNICA PARA SECCIÓN 2: SERVICIOS (MODULOS EN 3D STAGGER)
// -------------------------------------------------------------
export function ServicesSectionWrapper({ children, id }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, y: 80, rotateX: 15, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} id={id} style={{ width: '100%', perspective: '1000px' }}>
      {children}
    </div>
  );
}

// -------------------------------------------------------------
// 4. ENTRADA ÚNICA PARA SECCIÓN 3: LOXONE (ZOOM HOLOGRÁFICO EMERALD)
// -------------------------------------------------------------
export function LoxoneSectionWrapper({ children, id }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, scale: 0.84, filter: 'blur(16px)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} id={id} style={{ width: '100%' }}>
      {children}
    </div>
  );
}

// -------------------------------------------------------------
// 5. ENTRADA ÚNICA PARA SECCIÓN 4: SOBRE MÍ (DESPLAZAMIENTO DUAL IZQ/DER)
// -------------------------------------------------------------
export function AboutSectionWrapper({ children, id }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} id={id} style={{ width: '100%' }}>
      {children}
    </div>
  );
}

// -------------------------------------------------------------
// 6. ENTRADA ÚNICA PARA SECCIÓN 5: CERTIFICACIONES (FLIP SEQUENTIAL REBT)
// -------------------------------------------------------------
export function CertificationsSectionWrapper({ children, id }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, y: 100, rotateX: -30 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.3,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} id={id} style={{ width: '100%', perspective: '1200px' }}>
      {children}
    </div>
  );
}

// -------------------------------------------------------------
// 7. ENTRADA ÚNICA PARA SECCIÓN 6: CONTACTO (CIERRE DE CIRCUITO CIAN)
// -------------------------------------------------------------
export function ContactSectionWrapper({ children, id }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, scale: 0.9, boxShadow: '0 0 0px transparent' },
        {
          opacity: 1,
          scale: 1,
          boxShadow: '0 0 50px rgba(0, 163, 255, 0.25)',
          duration: 1.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} id={id} style={{ width: '100%' }}>
      {children}
    </div>
  );
}
