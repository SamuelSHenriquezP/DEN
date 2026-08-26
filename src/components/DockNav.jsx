import React, { useState, useEffect } from 'react';

export default function DockNav({ onOpenQuote }) {
  const [activeId, setActiveId] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Inicio', tooltip: 'Inicio' },
    { id: 'servicios', label: 'Soluciones', tooltip: 'Servicios' },
    { id: 'simulador', label: 'Simulador Domótico', tooltip: 'Loxone' },
    { id: 'proyectos', label: 'Portafolio', tooltip: 'Proyectos' },
    { id: 'calculadora', label: 'Calculadora Solar', tooltip: 'Calculadora' },
    { id: 'cuadro-tecnico', label: 'Inspector Cuadro', tooltip: 'Cuadro REBT' },
    { id: 'sobre-mi', label: 'Ing. Kerling', tooltip: 'Sobre Kerling' },
    { id: 'faq', label: 'FAQ', tooltip: 'Preguntas' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
      let current = 'inicio';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 220;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActiveId(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="dock" id="main-dock">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`dock-item ${activeId === item.id ? 'active' : ''}`}
          data-tooltip={item.tooltip}
          onClick={(e) => handleClick(e, item.id)}
        >
          {item.label}
        </a>
      ))}
      <button
        className="dock-item dock-cta"
        style={{ border: 'none', cursor: 'pointer' }}
        onClick={onOpenQuote}
      >
        Cotizar
      </button>
    </nav>
  );
}
