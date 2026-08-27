import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BentoServices() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = containerRef.current.querySelectorAll('.bloque-fila-grid');

      gsap.fromTo(
        rows,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      y: -5,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      y: 0,
      rotateY: 0,
      rotateX: 0,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  return (
    <section id="servicios" className="seccion-servicios contenedor seccion-pantalla-completa" ref={containerRef}>
      {/* ENCABEZADO CON TIPOGRAFÍA REFINADA */}
      <div className="encabezado-seccion">
        <span className="insignia-seccion">
          <span className="codigo-indice">01 //</span> SISTEMA DE INGENIERÍA Y ESPECIALIDADES
        </span>
        <h2 className="titulo-seccion">
          ESPECIALIDADES Y <br />
          <span className="texto-gradiente-dorado">SERVICIOS DE INGENIERÍA</span>
        </h2>
        <p className="descripcion-seccion">
          Soluciones integrales de alta fidelidad desde la fase de proyecto hasta la ejecución limpia en obra y la legalización ante Industria.
        </p>
      </div>

      {/* SISTEMA DE GRID SIMÉTRICO Y ALTERNADO */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
        {/* FILA 1: ALTERNADA — TEXTO IZQUIERDA | IMAGEN DERECHA */}
        <div
          className="bloque-fila-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          <div
            className="tarjeta-servicio-alternada"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              background: 'var(--tarjeta-base)',
              border: '1px solid var(--borde-sutil)',
              borderRadius: '28px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div>
              <span className="insignia-tarjeta">AUTOMATIZACIÓN RESIDENCIAL</span>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: '800', margin: '14px 0 10px', fontFamily: 'var(--fuente-titulos)', letterSpacing: '-0.02em' }}>
                Control Domótico Inteligente y Servidores Loxone
              </h3>
              <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: '1.65', fontFamily: 'var(--fuente-cuerpo)' }}>
                Gestión unificada de luces DALI, persianas automáticas, climatización por zonas y accesos con procesamiento local sin cuotas mensuales ni dependencia de la nube.
              </p>
            </div>

            <div className="etiquetas-tecnicas" style={{ marginTop: '24px' }}>
              <span className="etiqueta-mini">Control DALI</span>
              <span className="etiqueta-mini">Climatización Zonas</span>
              <span className="etiqueta-mini">Procesamiento Local</span>
              <span className="etiqueta-mini">Servidores Tree</span>
            </div>
          </div>

          <div
            className="tarjeta-servicio-alternada"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              background: 'var(--tarjeta-base)',
              border: '1px solid var(--borde-sutil)',
              borderRadius: '28px',
              minHeight: '320px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img src="/images/villa_loxone.png" alt="Domótica Loxone Villa" className="imagen-fondo-tarjeta" style={{ opacity: 0.65 }} />
            <div className="capa-sombra-tarjeta"></div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', zIndex: 2 }}>
              <span style={{ fontSize: '10px', color: '#0066FF', fontWeight: '700', fontFamily: 'var(--fuente-tecnica)', letterSpacing: '1px' }}>
                ⚡ INTEGRACIÓN ARQUITECTÓNICA
              </span>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '700', marginTop: '4px', fontFamily: 'var(--fuente-titulos)' }}>
                Iluminación de Escenas y Confort Térmico
              </h4>
            </div>
          </div>
        </div>

        {/* FILA 2: ALTERNADA INVERTIDA — IMAGEN IZQUIERDA | TEXTO DERECHA */}
        <div
          className="bloque-fila-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          <div
            className="tarjeta-servicio-alternada"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              background: 'var(--tarjeta-base)',
              border: '1px solid var(--borde-sutil)',
              borderRadius: '28px',
              minHeight: '320px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img src="/images/solar_industrial.png" alt="Instalaciones Solares Fotovoltaicas" className="imagen-fondo-tarjeta" style={{ opacity: 0.65 }} />
            <div className="capa-sombra-tarjeta"></div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', zIndex: 2 }}>
              <span style={{ fontSize: '10px', color: '#FFEE00', fontWeight: '700', fontFamily: 'var(--fuente-tecnica)', letterSpacing: '1px' }}>
                ☀️ EFICIENCIA Y AUTOCONSUMO
              </span>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '700', marginTop: '4px', fontFamily: 'var(--fuente-titulos)' }}>
                Cubiertas Solares y Acumulación en Litio (LFP)
              </h4>
            </div>
          </div>

          <div
            className="tarjeta-servicio-alternada"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              background: 'var(--tarjeta-base)',
              border: '1px solid var(--borde-sutil)',
              borderRadius: '28px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div>
              <span className="insignia-tarjeta" style={{ color: '#FFEE00', borderColor: 'rgba(255, 238, 0, 0.3)' }}>
                ENERGÍA RENOVABLE
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: '800', margin: '14px 0 10px', fontFamily: 'var(--fuente-titulos)', letterSpacing: '-0.02em' }}>
                Fotovoltaica y Almacenamiento LFP
              </h3>
              <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: '1.65', fontFamily: 'var(--fuente-cuerpo)' }}>
                Diseño e integración de paneles solares de alta potencia con inversores trifásicos y acumulación en baterías de ferrofosfato de litio para cubrir hasta el 95% del consumo eléctrico.
              </p>
            </div>

            <div className="etiquetas-tecnicas" style={{ marginTop: '24px' }}>
              <span className="etiqueta-mini">Autoconsumo Solar</span>
              <span className="etiqueta-mini">Baterías LFP</span>
              <span className="etiqueta-mini">Inyección Cero</span>
              <span className="etiqueta-mini">Legalización Excedentes</span>
            </div>
          </div>
        </div>

        {/* FILA 3: TRIO SIMÉTRICO 3 COLUMNAS */}
        <div
          className="bloque-fila-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {/* TARJETA 1 */}
          <div
            className="tarjeta-servicio-trio"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              background: 'var(--tarjeta-base)',
              border: '1px solid var(--borde-sutil)',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div>
              <span className="insignia-tarjeta">SEGURIDAD REBT</span>
              <h4 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: '800', margin: '12px 0 8px', fontFamily: 'var(--fuente-titulos)' }}>
                Cuadros Eléctricos de Protección
              </h4>
              <p style={{ fontSize: '12px', color: '#CBD5E1', lineHeight: '1.6', fontFamily: 'var(--fuente-cuerpo)' }}>
                Montaje y reforma de cuadros generales con protección contra sobretensiones y diferenciales superinmunizados.
              </p>
            </div>
            <div className="etiquetas-tecnicas" style={{ marginTop: '18px' }}>
              <span className="etiqueta-mini">Normativa REBT</span>
              <span className="etiqueta-mini">Diferencial SI</span>
            </div>
          </div>

          {/* TARJETA 2 */}
          <div
            className="tarjeta-servicio-trio"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              background: 'var(--tarjeta-base)',
              border: '1px solid var(--borde-sutil)',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div>
              <span className="insignia-tarjeta">MOVILIDAD SOSTENIBLE</span>
              <h4 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: '800', margin: '12px 0 8px', fontFamily: 'var(--fuente-titulos)' }}>
                Puntos de Recarga Vehículo Eléctrico (EV)
              </h4>
              <p style={{ fontSize: '12px', color: '#CBD5E1', lineHeight: '1.6', fontFamily: 'var(--fuente-cuerpo)' }}>
                Cargadores Wallbox con balanceo dinámico de potencia para proteger la instalación y utilizar excedente solar.
              </p>
            </div>
            <div className="etiquetas-tecnicas" style={{ marginTop: '18px' }}>
              <span className="etiqueta-mini">ITC-BT-52</span>
              <span className="etiqueta-mini">Balanceo Dinámico</span>
            </div>
          </div>

          {/* TARJETA 3 */}
          <div
            className="tarjeta-servicio-trio"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              background: 'var(--tarjeta-base)',
              border: '1px solid var(--borde-sutil)',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div>
              <span className="insignia-tarjeta" style={{ color: '#FFEE00', borderColor: 'rgba(255, 238, 0, 0.3)' }}>
                INGENIERÍA PREVENTIVA
              </span>
              <h4 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: '800', margin: '12px 0 8px', fontFamily: 'var(--fuente-titulos)' }}>
                Termografía FLIR y Boletines CIE
              </h4>
              <p style={{ fontSize: '12px', color: '#CBD5E1', lineHeight: '1.6', fontFamily: 'var(--fuente-cuerpo)' }}>
                Diagnóstico de puntos calientes en cuadros y emisión oficial de Certificados de Instalación Eléctrica en Madrid.
              </p>
            </div>
            <div className="etiquetas-tecnicas" style={{ marginTop: '18px' }}>
              <span className="etiqueta-mini">Cámara FLIR</span>
              <span className="etiqueta-mini">Boletín CIE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
