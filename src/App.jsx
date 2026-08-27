import React, { useState } from 'react';
import FollowTheCurrentCursor from './components/FollowTheCurrentCursor';
import DockNav from './components/DockNav';
import ScreenSlideContainer from './components/ScreenSlideContainer';
import SystemActivationHero from './components/SystemActivationHero';
import PartnersTicker from './components/PartnersTicker';
import InteractiveServicesList from './components/InteractiveServicesList';
import LoxoneDomoticaSection from './components/LoxoneDomoticaSection';
import AboutKerling from './components/AboutKerling';
import CertificationsSection from './components/CertificationsSection';
import FinalCircuitContact from './components/FinalCircuitContact';
import QuoteModal from './components/WizardQuote';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleSystemPowerOn = () => {
    // AL PULSAR POWER ON: DESPLAZAMIENTO CINEMÁTICO DE LA PANTALLA 0 (HERO) A LA PANTALLA 1 (SERVICIOS)
    setTimeout(() => {
      setActiveSectionIdx(1);
    }, 1600);
  };

  return (
    <div
      style={{
        background: '#030712',
        color: '#FFFFFF',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* CURSTOR ELÉCTRICO DESKTOP */}
      <FollowTheCurrentCursor />

      {/* DOCK NAV SUPERIOR CON CONEXIÓN DE PANTALLAS */}
      <DockNav
        activeIndex={activeSectionIdx}
        onNavigate={(idx) => setActiveSectionIdx(idx)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* CONTENEDOR MAESTRO DE MOVIMIENTO PANTALLA A PANTALLA (100VH SNAP TRANSITION) */}
      <ScreenSlideContainer
        activeIndex={activeSectionIdx}
        onSectionChange={(newIdx) => setActiveSectionIdx(newIdx)}
      >
        {/* PANTALLA 0: HERO IGNITION SYSTEM (POWER ON) */}
        <div>
          <SystemActivationHero
            onPowerOn={handleSystemPowerOn}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
          <PartnersTicker />
        </div>

        {/* PANTALLA 1: SHOWCASE 3D DE SERVICIOS ELÉCTRICOS */}
        <div>
          <InteractiveServicesList />
        </div>

        {/* PANTALLA 2: DOMÓTICA AVANZADA LOXONE PARTNER */}
        <div>
          <LoxoneDomoticaSection onOpenQuote={() => setIsQuoteOpen(true)} />
        </div>

        {/* PANTALLA 3: SOBRE MÍ - ING. KERLING ABRAHAM NATALE */}
        <div>
          <AboutKerling onOpenQuote={() => setIsQuoteOpen(true)} />
        </div>

        {/* PANTALLA 4: CERTIFICACIONES Y GARANTÍA LEGAL REBT */}
        <div>
          <CertificationsSection />
        </div>

        {/* PANTALLA 5: CONTACTO Y PRESUPUESTO FINAL */}
        <div>
          <FinalCircuitContact onOpenQuote={() => setIsQuoteOpen(true)} />
          <footer
            style={{
              borderTop: '1px solid var(--color-electrico-borde)',
              padding: '24px 4vw',
              backgroundColor: '#040812',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              color: '#94A3B8',
            }}
          >
            <span>
              © 2026 <strong>Dynamic Electric Natale</strong> — Ing. Kerling Abraham Natale Hidalgo.
            </span>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="https://www.instagram.com/dynamic_electric_natale" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-electrico)', textDecoration: 'none' }}>
                Instagram
              </a>
              <a href="https://www.tiktok.com/@dynamic.electric.natale" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-electrico)', textDecoration: 'none' }}>
                TikTok
              </a>
            </div>
          </footer>
        </div>
      </ScreenSlideContainer>

      {/* INDICADOR LATERAL DE NAVEGACIÓN EN PANTALLA DE PANTALLA A PANTALLA */}
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
          backgroundColor: 'rgba(3, 5, 8, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(12px)',
          padding: '16px 10px',
          borderRadius: '100px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((idx) => (
          <button
            key={idx}
            onClick={() => setActiveSectionIdx(idx)}
            title={`Pantalla 0${idx + 1}`}
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
