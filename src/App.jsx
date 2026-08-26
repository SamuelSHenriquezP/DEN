import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import EnergyCanvas from './components/EnergyCanvas';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Header from './components/Header';
import DockNav from './components/DockNav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import BentoServices from './components/BentoServices';
import AISimulator from './components/AISimulator';
import InteractiveFloorplan from './components/InteractiveFloorplan';
import InteractiveSchematic from './components/InteractiveSchematic';
import InspectorCuadro from './components/InspectorCuadro';
import PortfolioHorizontal from './components/PortfolioHorizontal';
import EmergencyRadar from './components/EmergencyRadar';
import SolarCalculator from './components/SolarCalculator';
import AboutKerling from './components/AboutKerling';
import WizardQuote from './components/WizardQuote';
import FaqSection from './components/FaqSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeModalKey, setActiveModalKey] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  const handleOpenQuote = () => {
    const el = document.getElementById('cotizador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenModal = (key) => {
    setActiveModalKey(key);
  };

  const handleCloseModal = () => {
    setActiveModalKey(null);
  };

  return (
    <div className="den-app">
      {/* CANVAS ELÉCTRICO DE AMBIENTE */}
      <EnergyCanvas />

      {/* BOTÓN FLOTANTE DE CONTACTO DIRECTO */}
      <FloatingWhatsApp />

      {/* ENCABEZADO PRINCIPAL DE FIRMA */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* NAVEGACIÓN FLOTANTE DOCK */}
      <DockNav onOpenQuote={handleOpenQuote} />

      {/* CONTENIDO PRINCIPAL */}
      <main>
        <Hero onOpenQuote={handleOpenQuote} />
        
        <div className="linea-separadora-tecnica"></div>
        <Stats />
        
        <div className="linea-separadora-tecnica"></div>
        <BentoServices />

        <div className="linea-separadora-tecnica"></div>
        <InteractiveFloorplan />

        <div className="linea-separadora-tecnica"></div>
        <InteractiveSchematic />
        
        <div className="linea-separadora-tecnica"></div>
        <AISimulator />
        
        <div className="linea-separadora-tecnica"></div>
        <InspectorCuadro />
        
        <div className="linea-separadora-tecnica"></div>
        <PortfolioHorizontal onOpenModal={handleOpenModal} />

        <div className="linea-separadora-tecnica"></div>
        <EmergencyRadar />
        
        <div className="linea-separadora-tecnica"></div>
        <SolarCalculator />
        
        <div className="linea-separadora-tecnica"></div>
        <AboutKerling onOpenQuote={handleOpenQuote} />
        
        <div className="linea-separadora-tecnica"></div>
        <WizardQuote />
        
        <div className="linea-separadora-tecnica"></div>
        <FaqSection />
        
        <div className="linea-separadora-tecnica"></div>
        <Testimonials />
      </main>

      {/* PIE DE PÁGINA */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* MODAL DETALLADO DE PROYECTOS */}
      <ProjectModal activeModalKey={activeModalKey} onClose={handleCloseModal} />
    </div>
  );
}
