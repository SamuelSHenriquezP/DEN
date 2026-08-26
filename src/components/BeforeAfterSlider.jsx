import React, { useState, useRef } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const handleMove = (clientX, rect) => {
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#030508',
        padding: '100px 4vw',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* ENCABEZADO */}
        <div style={{ marginBottom: '40px' }}>
          <span
            style={{
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              color: '#FFEE00',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            02 // INTERACTIVE RE-ENGINEERING TRANSITION
          </span>
          <h2
            style={{
              fontFamily: 'var(--fuente-titulos)',
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
            }}
          >
            TRANSFORMACIÓN DE CUADROS: <br />
            <span style={{ color: '#FFEE00' }}>ANTES vs DESPUÉS</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--fuente-cuerpo)',
              fontSize: '14px',
              color: '#94A3B8',
              marginTop: '12px',
            }}
          >
            Arrastra la barra vertical para comparar una instalación anticuada frente a la reforma de potencia bajo normativa REBT con termografía preventivas.
          </p>
        </div>

        {/* CONTAINER DEL SLIDER INTERACTIVO */}
        <div
          onMouseDown={() => (isDragging.current = true)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(350px, 60vh, 600px)',
            borderRadius: '24px',
            overflow: 'hidden',
            cursor: 'ew-resize',
            userSelect: 'none',
            border: '1px solid rgba(255, 238, 0, 0.3)',
            boxShadow: '0 0 40px rgba(0, 0, 0, 0.8)',
          }}
        >
          {/* FOTO DESPUÉS (FONDO BASE FULL) */}
          <img
            src="/images/after_panel.png"
            alt="Cuadro Eléctrico Reforma REBT Después"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(0, 229, 255, 0.9)',
              color: '#030508',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              fontWeight: 800,
              padding: '6px 16px',
              borderRadius: '100px',
              letterSpacing: '2px',
              zIndex: 3,
            }}
          >
            DESPUÉS (REBT COMPLIANT)
          </span>

          {/* FOTO ANTES (CLIPPED SLIDE) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            }}
          >
            <img
              src="/images/before_panel.png"
              alt="Cuadro Eléctrico Antiguo Antes"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <span
              style={{
                position: 'absolute',
                top: '24px',
                left: '24px',
                background: 'rgba(239, 68, 68, 0.9)',
                color: '#FFFFFF',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '11px',
                fontWeight: 800,
                padding: '6px 16px',
                borderRadius: '100px',
                letterSpacing: '2px',
                zIndex: 3,
              }}
            >
              ANTES (INSTALACIÓN RIESGO)
            </span>
          </div>

          {/* BARRA DE SEPARACIÓN ELÉCTRICA */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPos}%`,
              width: '3px',
              backgroundColor: '#FFEE00',
              boxShadow: '0 0 15px #FFEE00, 0 0 30px #FFEE00',
              transform: 'translateX(-50%)',
              zIndex: 4,
            }}
          >
            {/* MANIJA CENTRAL RECEPTORA */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#030508',
                border: '2px solid #FFEE00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFEE00',
                fontSize: '14px',
                fontWeight: 'bold',
                boxShadow: '0 0 20px rgba(255, 238, 0, 0.6)',
              }}
            >
              ↔
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
