import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function FullPageSectionSlider({
  sections,
  activeIndex,
  onSectionChange,
}) {
  const containerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartY = useRef(0);

  // TRANSICIÓN CINEMÁTICA DE PANTALLA A PANTALLA
  const goToSection = (newIdx) => {
    if (newIdx < 0 || newIdx >= sections.length || isAnimating || newIdx === activeIndex) return;

    setIsAnimating(true);
    onSectionChange(newIdx);

    const targetEl = document.getElementById(`section-${newIdx}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  // CAPTURA DE EVENTO DE RUEDA DE RATÓN (MOUSE WHEEL DE PANTALLA COMPLETA)
  useEffect(() => {
    const handleWheel = (e) => {
      // Si la ventana modal está abierta o se está dentro de un contenedor desplazable, se respeta el scroll interno
      if (document.body.style.overflow === 'hidden') return;

      if (Math.abs(e.deltaY) > 35 && !isAnimating) {
        if (e.deltaY > 0) {
          goToSection(activeIndex + 1);
        } else {
          goToSection(activeIndex - 1);
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY.current - touchEndY;
      if (Math.abs(diffY) > 50 && !isAnimating) {
        if (diffY > 0) {
          goToSection(activeIndex + 1);
        } else {
          goToSection(activeIndex - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeIndex, isAnimating, sections.length]);

  return (
    <div ref={containerRef} style={{ width: '100%', position: 'relative' }}>
      {/* INDICADOR LATERAL DE PANTALLAS (PAGE NUMBERS 01 - 06) */}
      <div
        style={{
          position: 'fixed',
          right: '28px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
          backgroundColor: 'rgba(3, 5, 8, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(12px)',
          padding: '16px 10px',
          borderRadius: '100px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
        }}
      >
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            onClick={() => goToSection(idx)}
            title={sec.name}
            style={{
              width: activeIndex === idx ? '12px' : '8px',
              height: activeIndex === idx ? '24px' : '8px',
              borderRadius: '100px',
              backgroundColor: activeIndex === idx ? 'var(--color-electrico)' : 'rgba(255, 255, 255, 0.25)',
              boxShadow: activeIndex === idx ? '0 0 14px var(--color-electrico)' : 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
