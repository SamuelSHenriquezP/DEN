import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutKerling({ onOpenQuote }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.lado-imagen-perfil', {
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from('.lado-texto-perfil', {
        x: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#030712',
        padding: '70px 4vw',
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* GLOW AMBIENTAL EN ESQUINA */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-electrico-glow) 0%, transparent 70%)',
          pointerEvents: 'none',
          opacity: 0.6,
        }}
      ></div>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* FOTO E IDENTIDAD DE KERLING NATALE */}
        <div
          className="lado-imagen-perfil"
          style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid var(--color-electrico-borde)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px var(--color-electrico-glow)',
          }}
        >
          <img
            src="/images/kerling_portrait.png"
            alt="Kerling Abraham Natale Hidalgo — Dirección Técnica DEN"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '340px',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '16px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(3, 5, 8, 0.95) 100%)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--fuente-titulos)',
                fontSize: '1rem',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '1px',
              }}
            >
              KERLING ABRAHAM NATALE HIDALGO
            </span>
            <span
              style={{
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '10px',
                color: '#FFEE00',
                letterSpacing: '1.5px',
                marginTop: '2px',
                fontWeight: 700,
              }}
            >
              DIRECTOR TÉCNICO & ELECTRICISTA ESPECIALISTA
            </span>
          </div>
        </div>

        {/* TEXTO EDITORIAL NOSOTROS SOMOS */}
        <div className="lado-texto-perfil" style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '10px',
              color: 'var(--color-electrico)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            01 // NOSOTROS SOMOS • DIRECCIÓN TÉCNICA
          </span>

          <h2
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            KERLING ABRAHAM <br />
            <span style={{ color: 'var(--color-electrico)' }}>NATALE HIDALGO</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--fuente-cuerpo)',
              fontSize: '13px',
              color: '#CBD5E1',
              lineHeight: 1.5,
              marginBottom: '10px',
            }}
          >
            Como <strong>electricista especialista en Guadarrama, Madrid</strong>, no solo realizo el trabajo: garantizo su legalidad, seguridad y correcto funcionamiento. Cada proyecto viene respaldado por certificaciones oficiales.
          </p>

          {/* CUADRÍCULA DE QUALIFICACIONES TÉCNICAS AUTÉNTICAS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px',
              marginBottom: '20px',
            }}
          >
            {[
              {
                title: 'ELECTRICISTA CATEGORÍA ESPECIALISTA',
                sub: 'Comunidad de Madrid',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFEE00" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                ),
              },
              {
                title: 'CERTIFICACIÓN DE INSTALACIONES',
                sub: 'Legalización y Seguridad REBT',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-electrico)" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  </svg>
                ),
              },
              {
                title: 'CERTIFICACIÓN FOTOVOLTAICA',
                sub: 'Sistemas Solares y Baterías',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFEE00" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                  </svg>
                ),
              },
              {
                title: 'PARTNER LOXONE DOMÓTICA',
                sub: 'Instalación y Programación Smart',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-electrico)" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                  </svg>
                ),
              },
            ].map((cert, idx) => (
              <div
                key={idx}
                style={{
                  background: '#0E1B2E',
                  border: '1px solid var(--color-electrico-borde)',
                  borderRadius: '12px',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{cert.icon}</span>
                <div>
                  <h4 style={{ fontFamily: 'var(--fuente-titulos)', fontSize: '10px', color: '#FFFFFF', margin: 0, fontWeight: 800 }}>
                    {cert.title}
                  </h4>
                  <p style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '8.5px', color: '#94A3B8', margin: '2px 0 0 0' }}>
                    {cert.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenQuote}
              style={{
                background: 'var(--color-electrico)',
                color: '#FFFFFF',
                border: 'none',
                padding: '16px 36px',
                borderRadius: '100px',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '1.5px',
                cursor: 'pointer',
                boxShadow: '0 0 25px var(--color-electrico-glow)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              AGENDAR CONSULTA TÉCNICA →
            </button>
            <a
              href="https://wa.me/34682178499"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(37, 211, 102, 0.1)',
                border: '1px solid #25D366',
                color: '#25D366',
                padding: '16px 28px',
                borderRadius: '100px',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textDecoration: 'none',
              }}
            >
              WHATSAPP DIRECTO →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
