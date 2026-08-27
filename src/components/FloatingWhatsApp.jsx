import React, { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px',
      }}
    >
      {/* TOOLTIP / BANNER FLOTANTE DE CONSULTA RÁPIDA */}
      {isOpen && (
        <div
          style={{
            backgroundColor: '#0E1B2E',
            border: '1px solid #25D366',
            borderRadius: '20px',
            padding: '16px 20px',
            maxWidth: '300px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.9), 0 0 25px rgba(37, 211, 102, 0.3)',
            animation: 'fadeInUp 0.3s ease-out',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '10px',
                color: '#25D366',
                fontWeight: 700,
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  boxShadow: '0 0 8px #25D366',
                }}
              ></span>
              KERLING NATALE • EN LÍNEA
            </span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94A3B8',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              ✕
            </button>
          </div>
          <p
            style={{
              fontFamily: 'var(--fuente-cuerpo)',
              fontSize: '13px',
              color: '#FFFFFF',
              margin: '0 0 12px 0',
              lineHeight: '1.4',
            }}
          >
            ¿Necesitas presupuesto para una instalación, boletín CIE o domótica Loxone?
          </p>
          <a
            href="https://wa.me/34682178499?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20vuestros%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              width: '100%',
              textAlign: 'center',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              fontFamily: 'var(--fuente-tecnica)',
              fontSize: '11px',
              fontWeight: 800,
              padding: '10px 0',
              borderRadius: '100px',
              textDecoration: 'none',
              letterSpacing: '1px',
              boxShadow: '0 0 15px rgba(37, 211, 102, 0.4)',
            }}
          >
            ABRIR WHATSAPP DIRECTO →
          </a>
        </div>
      )}

      {/* BOTÓN INSIGNIA CIRCULAR FLOTANTE */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          border: 'none',
          color: '#FFFFFF',
          fontSize: '28px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.6), 0 0 25px rgba(37, 211, 102, 0.5)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        💬
      </button>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
