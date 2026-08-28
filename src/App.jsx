import React, { useState, useEffect } from 'react';
import FollowTheCurrentCursor from './components/FollowTheCurrentCursor';
import DockNav from './components/DockNav';
import SystemActivationHero from './components/SystemActivationHero';
import InteractiveServicesList from './components/InteractiveServicesList';
import LoxoneDomoticaSection from './components/LoxoneDomoticaSection';
import AboutKerling from './components/AboutKerling';
import CertificationsSection from './components/CertificationsSection';
import FinalCircuitContact from './components/FinalCircuitContact';
import QuoteModal from './components/WizardQuote';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const SECTION_IDS = [
  'inicio',
  'servicios',
  'domotica',
  'sobre-mi',
  'certificaciones',
  'contacto',
];

export default function App() {
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      SECTION_IDS.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSectionIdx(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (idx) => {
    setActiveSectionIdx(idx);
    const targetId = SECTION_IDS[idx];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      style={{
        background: '#030712',
        color: '#FFFFFF',
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* CURSOR ELÉCTRICO DESKTOP */}
      <FollowTheCurrentCursor />

      {/* DOCK NAV SUPERIOR CON NAVEGACIÓN SUAVE */}
      <DockNav
        activeIndex={activeSectionIdx}
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* CONTENEDOR MAESTRO CON SCROLL SUAVE Y ANIMACIONES DE ENTRADA */}
      <main style={{ width: '100%' }}>
        {/* SECCIÓN 0: HERO (POWER ON) */}
        <div id="inicio">
          <SystemActivationHero
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        </div>

        {/* SECCIÓN 1: SERVICIOS */}
        <div id="servicios">
          <InteractiveServicesList />
        </div>

        {/* SECCIÓN 2: LOXONE DOMÓTICA */}
        <div id="domotica">
          <LoxoneDomoticaSection onOpenQuote={() => setIsQuoteOpen(true)} />
        </div>

        {/* SECCIÓN 3: SOBRE MÍ */}
        <div id="sobre-mi">
          <AboutKerling onOpenQuote={() => setIsQuoteOpen(true)} />
        </div>

        {/* SECCIÓN 4: CERTIFICACIONES */}
        <div id="certificaciones">
          <CertificationsSection />
        </div>

        {/* SECCIÓN 5: CONTACTO Y FOOTER */}
        <div id="contacto">
          <FinalCircuitContact onOpenQuote={() => setIsQuoteOpen(true)} />
          <footer
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '32px 4vw',
              backgroundColor: '#030712',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              fontFamily: 'var(--fuente-cuerpo)',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/Logo DEN.png" alt="Dynamic Electric Natale" style={{ height: '32px', width: 'auto' }} />
            </div>

            <span style={{ textAlign: 'center', maxWidth: '600px' }}>
              © {new Date().getFullYear()} Dynamic Electric Natale — Kerling Abraham Natale Hidalgo. Electricista Especialista · Guadarrama, Madrid.
            </span>

            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href="https://www.instagram.com/dynamic_electric_natale"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-electrico)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@dynamic.electric.natale"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-electrico)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
              >
                TikTok
              </a>
            </div>
          </footer>
        </div>
      </main>

      {/* INDICADOR LATERAL DE NAVEGACIÓN */}
      <div
        style={{
          position: 'fixed',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: 'rgba(3, 7, 18, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(12px)',
          padding: '16px 10px',
          borderRadius: '100px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
        }}
      >
        {SECTION_IDS.map((id, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigate(idx)}
            title={`Sección ${idx + 1}`}
            style={{
              width: activeSectionIdx === idx ? '10px' : '8px',
              height: activeSectionIdx === idx ? '26px' : '8px',
              borderRadius: '100px',
              backgroundColor: activeSectionIdx === idx ? 'var(--color-electrico)' : 'rgba(255, 255, 255, 0.25)',
              boxShadow: activeSectionIdx === idx ? '0 0 14px var(--color-electrico)' : 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </div>

      {/* MODAL DE COTIZACIÓN Y WHATSAPP */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
}
