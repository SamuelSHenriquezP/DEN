import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ScreenSlideContainer({ children, activeIndex, onSectionChange }) {
  const containerRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSections = React.Children.count(children);

  // TRANSICIONES ELEGANTES PANTALLA A PANTALLA
  const goToSection = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= totalSections || isTransitioning || nextIndex === activeIndex) return;

    setIsTransitioning(true);
    onSectionChange(nextIndex);

    const sectionElements = containerRef.current.children;
    const currentEl = sectionElements[activeIndex];
    const nextEl = sectionElements[nextIndex];

    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      },
    });

    // PANTALLA 0: INICIO
    if (nextIndex === 0) {
      tl.to(currentEl, {
        opacity: 0,
        y: 40,
        duration: 0.5,
        ease: 'power2.out',
      }).fromTo(
        nextEl,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '<'
      );
    }
    // PANTALLA 1: SERVICIOS (ENTRADA DESDE LA DERECHA)
    else if (nextIndex === 1) {
      tl.to(currentEl, {
        x: '-30vw',
        opacity: 0,
        duration: 0.65,
        ease: 'power2.inOut',
      }).fromTo(
        nextEl,
        { x: '100vw', opacity: 1 },
        { x: '0vw', opacity: 1, duration: 0.7, ease: 'power2.out' },
        '<'
      );
    }
    // PANTALLA 2: LOXONE (SCROLL VERTICAL CONTINUO)
    else if (nextIndex === 2) {
      tl.to(currentEl, {
        y: '-100vh',
        opacity: 0.3,
        duration: 0.65,
        ease: 'power2.inOut',
      }).fromTo(
        nextEl,
        { y: '100vh', opacity: 1 },
        { y: '0vh', opacity: 1, duration: 0.7, ease: 'power2.out' },
        '<'
      );
    }
    // PANTALLA 3: SOBRE MÍ (ENTRADA DESDE LA IZQUIERDA)
    else if (nextIndex === 3) {
      tl.to(currentEl, {
        x: '30vw',
        opacity: 0,
        duration: 0.65,
        ease: 'power2.inOut',
      }).fromTo(
        nextEl,
        { x: '-100vw', opacity: 1 },
        { x: '0vw', opacity: 1, duration: 0.7, ease: 'power2.out' },
        '<'
      );
    }
    // PANTALLA 4: CERTIFICACIONES
    else if (nextIndex === 4) {
      tl.to(currentEl, {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: 'power2.out',
      }).fromTo(
        nextEl,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '<'
      );
    }
    // PANTALLA 5: CONTACTO
    else if (nextIndex === 5) {
      tl.to(currentEl, {
        y: '-100vh',
        opacity: 0.3,
        duration: 0.65,
        ease: 'power2.inOut',
      }).fromTo(
        nextEl,
        { y: '100vh', opacity: 1 },
        { y: '0vh', opacity: 1, duration: 0.7, ease: 'power2.out' },
        '<'
      );
    }
  };

  useEffect(() => {
    let lastWheelTime = 0;

    const handleWheel = (e) => {
      if (document.body.style.overflow === 'hidden') return;

      const now = Date.now();
      if (now - lastWheelTime < 700) return;

      if (Math.abs(e.deltaY) > 20 && !isTransitioning) {
        lastWheelTime = now;
        if (e.deltaY > 0) {
          goToSection(activeIndex + 1);
        } else {
          goToSection(activeIndex - 1);
        }
      }
    };

    const handleKeyDown = (e) => {
      if (isTransitioning) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        goToSection(activeIndex + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        goToSection(activeIndex - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, isTransitioning, totalSections]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#030712',
      }}
    >
      {React.Children.map(children, (child, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100vw',
              height: '100vh',
              maxHeight: '100vh',
              overflow: 'hidden', // AJUSTE ESTRICTO: SIN SCROLL INTERNO
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxSizing: 'border-box',
              opacity: isActive ? 1 : 0,
              pointerEvents: isActive ? 'auto' : 'none',
              zIndex: isActive ? 10 : 1,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
