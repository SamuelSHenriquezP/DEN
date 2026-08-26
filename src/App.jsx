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
import InspectorCuadro from './components/InspectorCuadro';
import PortfolioHorizontal from './components/PortfolioHorizontal';
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
    // LENIS SMOOTH SCROLLING SYNCHRONIZATION WITH GSAP
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
      {/* CANVAS ELÉCTRICO DE ENERGÍA Y DESTELLOS */}
      <EnergyCanvas />

      {/* BOTÓN FLOTANTE DE WHATSAPP CON TOOLTIP */}
      <FloatingWhatsApp />

      {/* HEADER DE FIRMA CON LOGO Y LLAMADA RÁPIDA */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* DOCK FLOTANTE NAVEGACIÓN PANTALLA A PANTALLA */}
      <DockNav onOpenQuote={handleOpenQuote} />

      {/* MAIN CONTENT */}
      <main>
        <Hero onOpenQuote={handleOpenQuote} />
        
        <div className="energy-divider"></div>
        <Stats />
        
        <div className="energy-divider"></div>
        <BentoServices />
        
        <div className="energy-divider"></div>
        <AISimulator />
        
        <div className="energy-divider"></div>
        <InspectorCuadro />
        
        <div className="energy-divider"></div>
        <PortfolioHorizontal onOpenModal={handleOpenModal} />
        
        <div className="energy-divider"></div>
        <SolarCalculator />
        
        <div className="energy-divider"></div>
        <AboutKerling onOpenQuote={handleOpenQuote} />
        
        <div className="energy-divider"></div>
        <WizardQuote />
        
        <div className="energy-divider"></div>
        <FaqSection />
        
        <div className="energy-divider"></div>
        <Testimonials />
      </main>

      {/* FOOTER */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* MODAL DETALLADO DE PROYECTOS */}
      <ProjectModal activeModalKey={activeModalKey} onClose={handleCloseModal} />
    </div>
  );
}
