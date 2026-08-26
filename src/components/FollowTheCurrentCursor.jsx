import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function FollowTheCurrentCursor() {
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports touch (mobile/tablet)
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    setIsVisible(true);

    const cursor = document.getElementById('cursor-particula-electrica');
    const label = document.getElementById('cursor-etiqueta-contextual');

    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.25, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.25, ease: 'power3.out' });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);

      // Check hover targets for contextual text
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor') || 'VIEW');
      } else {
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="cursor-particula-electrica"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* PUNTO DE CORRIENTE CIAN ELÉCTRICO */}
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#00E5FF',
          boxShadow: '0 0 16px #00E5FF, 0 0 30px #00E5FF',
        }}
      ></div>

      {/* ETIQUETA CONTEXTUAL (VIEW, EXPLORE, OPEN) */}
      {cursorText && (
        <span
          id="cursor-etiqueta-contextual"
          style={{
            background: 'rgba(3, 5, 8, 0.9)',
            border: '1px solid #00E5FF',
            color: '#00E5FF',
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '9px',
            fontWeight: 800,
            letterSpacing: '1.5px',
            padding: '4px 10px',
            borderRadius: '100px',
            whiteSpace: 'nowrap',
            backdropFilter: 'blur(8px)',
          }}
        >
          {cursorText}
        </span>
      )}
    </div>
  );
}
