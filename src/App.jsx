import React, { useState } from 'react';
import FollowTheCurrentCursor from './components/FollowTheCurrentCursor';
import DockNav from './components/DockNav';
import SystemActivationHero from './components/SystemActivationHero';
import CinematicProjectsShowcase from './components/CinematicProjectsShowcase';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import InteractiveServicesList from './components/InteractiveServicesList';
import EditorialGallery from './components/EditorialGallery';
import MinimalStats from './components/MinimalStats';
import FinalCircuitContact from './components/FinalCircuitContact';
import VisualCaseStudyModal from './components/VisualCaseStudyModal';
import QuoteModal from './components/WizardQuote';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#030508',
        color: '#FFFFFF',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* CURSOR ELÉCTRICO DESKTOP "FOLLOW THE CURRENT" */}
      <FollowTheCurrentCursor />

      {/* DOCK NAV FLOTANTE MINIMALISTA */}
      <DockNav onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* HERO SYSTEM ACTIVATION ("POWER ON") */}
      <SystemActivationHero
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* PROYECTOS CINEMATOGRÁFICOS FULL-BLEED (80VH) */}
      <CinematicProjectsShowcase
        onOpenModal={(clave) => setActiveModalProject(clave)}
      />

      {/* SLIDER INTERACTIVO ANTES vs DESPUÉS */}
      <BeforeAfterSlider />

      {/* LISTADO INTERACTIVO DE SERVICIOS CON REVELADO DE FOTO */}
      <InteractiveServicesList />

      {/* GALERÍA EDITORIAL ASIMÉTRICA */}
      <EditorialGallery />

      {/* ESTADÍSTICAS REALES DEN */}
      <MinimalStats />

      {/* CONTACTO FINAL DEL CIRCUITO */}
      <FinalCircuitContact onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* FOOTER TÉCNICO MINIMALISTA */}
      <footer
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '32px 4vw',
          backgroundColor: '#030508',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontFamily: 'var(--fuente-tecnica)',
          fontSize: '11px',
          color: '#64748B',
        }}
      >
        <span>DYNAMIC ELECTRIC NATALE (DEN) © 2026</span>
        <span>ING. KERLING ABRAHAM NATALE HIDALGO • MADRID</span>
        <span>REBT & LOXONE CERTIFIED PARTNER</span>
      </footer>

      {/* MODAL DE CASO DE ESTUDIO NARRATIVO */}
      <VisualCaseStudyModal
        projectKey={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* MODAL DE COTIZACIÓN TÉCNICA */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
