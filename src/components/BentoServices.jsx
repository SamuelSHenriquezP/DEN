import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BentoServices() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current.querySelectorAll('.tarjeta-servicio');

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        scale: 0.94,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotateY: (x / rect.width) * 8,
      rotateX: (-y / rect.height) * 8,
      transformPerspective: 1000,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  const services = [
    {
      size: 'grande',
      badge: 'AUTOMATIZACIÓN RESIDENCIAL',
      title: 'Iluminación Inteligente y Control Domótico Loxone',
      desc: 'Gestión unificada de luces DALI, persianas automáticas, climatización por zonas y accesos con procesamiento local sin cuotas mensuales ni dependencia de la nube.',
      img: '/images/villa_loxone.png',
      tags: ['Control DALI', 'Climatización por Zonas', 'Procesamiento Local', 'Inmunidad de Red'],
    },
    {
      size: 'ancho',
      badge: 'ENERGÍA RENOVABLE',
      title: 'Instalaciones Fotovoltaicas y Baterías de Litio',
      desc: 'Diseño e integración de placas solares con inversores de última generación y acumulación LFP para maximizar el autoconsumo directo.',
      img: '/images/solar_industrial.png',
      tags: ['Autoconsumo Solar', 'Baterías LFP', 'Inyección Cero', 'Legalización de Excedentes'],
    },
    {
      size: 'normal',
      badge: 'SEGURIDAD REBT',
      title: 'Cuadros Eléctricos de Protección',
      desc: 'Montaje de cuadros generales con protección contra sobretensiones y diferenciales superinmunizados.',
      img: '/images/smart_panel.png',
      tags: ['Protección REBT', 'Diferencial Superinmunizado', 'IGA Automatizado'],
    },
    {
      size: 'normal',
      badge: 'MOVILIDAD SOSTENIBLE',
      title: 'Puntos de Recarga para Vehículos Eléctricos',
      desc: 'Instalación de cargadores de alta potencia con balanceo dinámico para proteger la potencia contratada.',
      img: '/images/ev_charging.png',
      tags: ['Normativa ITC-BT-52', 'Balanceo Dinámico', 'Carga Solar Directa'],
    },
    {
      size: 'ancho',
      badge: 'INGENIERÍA PREVENTIVA',
      title: 'Inspección Termográfica Infrarroja y Certificados (CIE)',
      desc: 'Diagnóstico con cámara térmica FLIR para detectar puntos calientes antes de averías y emisión de Boletines Oficiales de la Comunidad de Madrid.',
      img: '/images/thermal_inspection.png',
      tags: ['Cámara Térmica FLIR', 'Boletín Eléctrico CIE', 'Auditoría de Potencia', 'Legalización Oficial'],
    },
  ];

  return (
    <section id="servicios" className="seccion-servicios contenedor seccion-pantalla-completa" ref={containerRef}>
      <div className="encabezado-seccion">
        <span className="insignia-seccion">
          <span className="codigo-indice">01 //</span> SOLUCIONES TÉCNICAS PROFESIONALES
        </span>
        <h2 className="titulo-seccion">
          ESPECIALIDADES Y <br />
          <span className="texto-gradiente-dorado">SERVICIOS DE INGENIERÍA</span>
        </h2>
        <p className="descripcion-seccion">
          Ofrecemos un servicio completo que abarca desde la planificación del proyecto hasta la ejecución minuciosa en obra y la posterior legalización administrativa.
        </p>
      </div>

      <div className="rejilla-servicios-bento">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className={`tarjeta-servicio ${srv.size}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d', transition: 'box-shadow 0.3s ease' }}
          >
            <img src={srv.img} alt={srv.title} className="imagen-fondo-tarjeta" />
            <div className="capa-sombra-tarjeta"></div>

            <span className="insignia-tarjeta">{srv.badge}</span>
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>

            <div className="etiquetas-tecnicas">
              {srv.tags.map((t, i) => (
                <span key={i} className="etiqueta-mini">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
