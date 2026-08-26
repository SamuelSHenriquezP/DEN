import React, { useState, useEffect } from 'react';

export default function DockNav({ onOpenQuote }) {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = document.querySelectorAll('.seccion-pantalla-completa');
    const handleScroll = () => {
      let current = 'inicio';
      sections.forEach((sec) => {
        const top = sec.offsetTop - 200;
        if (window.scrollY >= top) {
          current = sec.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="barra-navegacion-flotante">
      <a
        href="#inicio"
        onClick={(e) => scrollToSection(e, 'inicio')}
        className={`elemento-navegacion ${activeSection === 'inicio' ? 'activo' : ''}`}
      >
        Inicio
      </a>
      <a
        href="#proyectos"
        onClick={(e) => scrollToSection(e, 'proyectos')}
        className={`elemento-navegacion ${activeSection === 'proyectos' ? 'activo' : ''}`}
      >
        Proyectos
      </a>
      <a
        href="#servicios"
        onClick={(e) => scrollToSection(e, 'servicios')}
        className={`elemento-navegacion ${activeSection === 'servicios' ? 'activo' : ''}`}
      >
        Servicios
      </a>
      <a
        href="#calculadora"
        onClick={(e) => scrollToSection(e, 'calculadora')}
        className={`elemento-navegacion ${activeSection === 'calculadora' ? 'activo' : ''}`}
      >
        Ahorro Solar
      </a>
      <a
        href="#sobre-mi"
        onClick={(e) => scrollToSection(e, 'sobre-mi')}
        className={`elemento-navegacion ${activeSection === 'sobre-mi' ? 'activo' : ''}`}
      >
        Kerling Natale
      </a>
      <button
        onClick={onOpenQuote}
        className="elemento-navegacion elemento-navegacion-destacado"
        style={{ border: 'none', cursor: 'pointer' }}
      >
        Cotizar Proyecto
      </button>
    </nav>
  );
}
