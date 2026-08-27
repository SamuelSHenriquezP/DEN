import React, { useState, useEffect } from 'react';

export default function InteractiveServicesList() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'rebt' | 'metrics'
  const [viewMode, setViewMode] = useState('3d'); // '3d' | 'grid'
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [detailModalService, setDetailModalService] = useState(null);

  const servicios = [
    {
      num: '01',
      categoria: 'LOXONE',
      titulo: 'Domótica Avanzada Loxone',
      subtitulo: 'PARTNER OFICIAL LOXONE DOMÓTICA INTEGRAL',
      desc: 'Soluciones integrales que conectan iluminación, climatización, persianas, seguridad, audio y gestión energética en un único sistema inteligente 100% local sin cuotas.',
      img: '/images/villa_loxone.png',
      badge: 'Loxone Certified Partner',
      badgeColor: '#10B981',
      glowColor: '#10B981',
      cardBg: '#081622',
      tags: ['Procesamiento Local', 'Sin Cuotas Mensuales', 'App Control Total'],
      specs: { procesador: 'Miniserver V2', integracion: 'Clima + DALI + Accesos', soporte: 'Ingeniero Directo' },
      metrics: [
        { label: 'Automatización Local', val: 100 },
        { label: 'Ahorro Energético', val: 40 },
        { label: 'Velocidad de Respuesta', val: 99 },
      ],
      rebtDetail: 'Instalación y programación 100% realizada por Partner Oficial Certificado. Cumplimiento estricto de baja tensión e integración con sistemas térmicos y fotovoltaicos.',
      equipos: ['Miniserver V2 Loxone', 'Extensiones Relay & Tree', 'Touch Pure Flex', 'Pulsadores Hápticos DALI'],
      pasos: [
        'Estudio de necesidades y diseño de topología Tree/Air',
        'Montaje del cuadro de automatización y cableado',
        'Programación lógica en Loxone Config',
        'Puesta en marcha y entrega de control en App móvil',
      ],
    },
    {
      num: '02',
      categoria: 'SOLAR',
      titulo: 'Sistemas Fotovoltaicos & Baterías',
      subtitulo: 'ENERGÍA SOLAR LIMPIA, LEGAL Y CERTIFICADA',
      desc: 'Instalación y certificación de paneles solares y baterías LFP. Autoconsumo de hasta un 95% con inyección gestionada y legalización completa.',
      img: '/images/solar_industrial.png',
      badge: 'Autoconsumo 95%',
      badgeColor: '#00A3FF',
      glowColor: '#00A3FF',
      cardBg: '#05162B',
      tags: ['Baterías Litio LFP', 'Autoconsumo Solar', 'Trámite Subvenciones'],
      specs: { eficiencia: '98.4%', baterias: 'Ferrofosfato Litio', certificado: 'Inyección Cero' },
      metrics: [
        { label: 'Autoconsumo Máximo', val: 95 },
        { label: 'Eficiencia Inversor', val: 98 },
        { label: 'Legalización Tramitada', val: 100 },
      ],
      rebtDetail: 'Inversores híbridos de última generación con protecciones de sobretensión en corriente continua y alterna según instrucción ITC-BT-40.',
      equipos: ['Paneles Monocristalinos N-Type 550W', 'Inversores Híbridos', 'Baterías Ferrofosfato LFP', 'Protección Sobretensión AC/DC'],
      pasos: [
        'Estudio solar de irradiación y consumo anual',
        'Instalación de estructuras de cubierta y paneles',
        'Conexión de inversor, acumulación y cuadro AC/DC',
        'Tramitación de legalización e inyección en distribuidora',
      ],
    },
    {
      num: '03',
      categoria: 'INSTALACIONES',
      titulo: 'Instalaciones Eléctricas',
      subtitulo: 'OBRA LIMPIA, REFORMA Y ADECUACIÓN REBT',
      desc: 'Instalaciones eléctricas completas en viviendas, locales y naves industriales. Cuadros de distribución, mecanizado, líneas dedicadas y adecuación normativa.',
      img: '/images/smart_panel.png',
      badge: 'Residencial & Comercial',
      badgeColor: '#38BDF8',
      glowColor: '#38BDF8',
      cardBg: '#061726',
      tags: ['Cuadros REBT', 'Superinmunizado', 'Líneas Dedicadas'],
      specs: { normativa: 'REBT Vigente', garantia: '100% Trabajo Realizado', supervisora: 'Dirección Técnica' },
      metrics: [
        { label: 'Conformidad REBT', val: 100 },
        { label: 'Protección Diferencial', val: 100 },
        { label: 'Eficiencia de Cableado', val: 96 },
      ],
      rebtDetail: 'Sustitución de cuadros obsoletos por cuadros de grado profesional con diferenciales superinmunizados y protectores de sobretensión relámpago.',
      equipos: ['Cuadros Schneider / Legrand', 'Diferenciales Superinmunizados Tipo A', 'Cableado Libre de Halógenos', 'Magnetotérmicos Clase Curve C'],
      pasos: [
        'Auditoría y cálculo de cargas del circuito existente',
        'Sustitución de canalizaciones y trazado de cableado',
        'Ensamblado y etiquetado de cuadro de distribución',
        'Pruebas de disparo y verificación de aislamiento',
      ],
    },
    {
      num: '04',
      categoria: 'CIE',
      titulo: 'Certificaciones e Inspección (CIE)',
      subtitulo: 'BOLETINES ELÉCTRICOS OFICIALES 24-48H',
      desc: 'Certificamos la legalidad y seguridad de tu instalación con emisión rápida de Boletín Eléctrico Oficial CIE ante la Comunidad de Madrid.',
      img: '/images/gallery_1.png',
      badge: 'Emisión CIE 24-48h',
      badgeColor: '#F59E0B',
      glowColor: '#F59E0B',
      cardBg: '#1A1408',
      tags: ['Boletín CIE Oficial', 'Auditoría FLIR', 'Comunidad Madrid'],
      specs: { entrega: '24 - 48 Horas', certificador: 'Categoría Especialista', inspeccion: 'Termografía FLIR' },
      metrics: [
        { label: 'Rapidez de Emisión', val: 98 },
        { label: 'Garantía Legal CIE', val: 100 },
        { label: 'Precisión FLIR', val: 99 },
      ],
      rebtDetail: 'Medición de resistencia de puesta a tierra, rigidez dieléctrica y continuidad de conductores de protección con equipos calibrados de alta precisión.',
      equipos: ['Cámara Termográfica FLIR', 'Telurómetro Digital Metrel', 'Medidor de Aislamiento 1000V', 'Analizador de Redes REBT'],
      pasos: [
        'Visita de inspección física y comprobación de parámetros',
        'Ensayo de disparo de diferenciales y toma de tierra',
        'Redacción del Certificado de Instalación Eléctrica',
        'Registro oficial y entrega del boletín tramitado en 24-48h',
      ],
    },
    {
      num: '05',
      categoria: 'LOXONE',
      titulo: 'Domótica de Vivienda',
      subtitulo: 'AUTOMATIZACIÓN BÁSICA Y ESCENARIOS',
      desc: 'Control inteligente de iluminación DALI, persianas motorizadas, climatización por zonas y ambientes personalizados para mayor confort diario.',
      img: '/images/gallery_2.png',
      badge: 'Hogar Inteligente',
      badgeColor: '#A855F7',
      glowColor: '#A855F7',
      cardBg: '#160B24',
      tags: ['Iluminación DALI', 'Escenas Confort', 'Climatización Smart'],
      specs: { escenarios: 'Personalizados', automatizacion: 'Iluminación & Clima', control: 'Pulsadores Smart' },
      metrics: [
        { label: 'Confort Domótico', val: 95 },
        { label: 'Regulación DALI', val: 98 },
        { label: 'Control Móvil App', val: 100 },
      ],
      rebtDetail: 'Líneas de control de muy baja tensión de seguridad (SELV) aisladas galvánicamente de los circuitos de fuerza.',
      equipos: ['Drivers Regulables DALI-2', 'Motores de Persianas Electrónicos', 'Termostatos Inteligentes por Zona', 'Módulos de Escenas'],
      pasos: [
        'Definición del mapa de iluminación y zonas de clima',
        'Integración de controladores domóticos en cuadro',
        'Configuración de pulsadores multifunción',
        'Ajuste personalizado de escenarios en presencia del cliente',
      ],
    },
    {
      num: '06',
      categoria: 'INSTALACIONES',
      titulo: 'Acometidas Eléctricas',
      subtitulo: 'AÉREAS Y SUBTERRÁNEAS NORMATIVA DISTRIBUIDORA',
      desc: 'Acometidas aéreas y subterráneas adaptadas a la normativa vigente de la compañía distribuidora eléctrica con trámites completos de conexión.',
      img: '/images/gallery_3.png',
      badge: 'Normativa Distribuidora',
      badgeColor: '#6366F1',
      glowColor: '#6366F1',
      cardBg: '#0D0F28',
      tags: ['Acometida Aérea', 'Subterránea', 'Legalización'],
      specs: { ejecucion: 'Subterránea & Aérea', aislamiento: 'Alta Seguridad', certificado: 'Compañía Eléctrica' },
      metrics: [
        { label: 'Aislamiento Térmico', val: 100 },
        { label: 'Resistencia Exterior', val: 99 },
        { label: 'Conexión Distribuidora', val: 100 },
      ],
      rebtDetail: 'Tendido de conductores aislados unipolares o multipolares en tubos reforzados enterrados bajo zanja reglamentaria.',
      equipos: ['Conductores de Aluminio/Cobre Armados', 'Módulo CPM Acometida', 'Tubos Corrugados Reforzados 450N', 'Cajas de Protección CGP'],
      pasos: [
        'Gestión de expediente con la compañía distribuidora',
        'Zanjado y tendido de cableado reforzado',
        'Montaje de CGP y CPM homologados',
        'Inspección y enganche oficial por distribuidora',
      ],
    },
    {
      num: '07',
      categoria: 'TELECOM',
      titulo: 'Telecomunicaciones & Redes',
      subtitulo: 'CABLEADO ESTRUCTURADO CAT6A Y FIBRA ÓPTICA',
      desc: 'Redes de datos Gigabit, fibra óptica y armarios rack estructurados para viviendas de alta gama y sedes corporativas.',
      img: '/images/ev_charging.png',
      badge: 'Redes Gigabit 10G',
      badgeColor: '#EC4899',
      glowColor: '#EC4899',
      cardBg: '#210A1A',
      tags: ['Cableado Cat6A', 'Armarios Racks', 'Fibra Óptica'],
      specs: { velocidad: 'Gigabit 10Gbps', infraestructura: 'Rack & RITI', certificacion: 'Telecomunicaciones' },
      metrics: [
        { label: 'Velocidad de Datos', val: 100 },
        { label: 'Certificación Fluke', val: 99 },
        { label: 'Organización Racks', val: 100 },
      ],
      rebtDetail: 'Canalización independiente de telecomunicaciones para evitar interferencias electromagnéticas con las líneas de energía.',
      equipos: ['Cable Apantallado Cat6A F/UTP', 'Patch Panels de 24 Puertos', 'Switches PoE+ Gestionables', 'Fusionadora de Fibra Óptica'],
      pasos: [
        'Diseño de topología de red en estrella',
        'Trazado de líneas de datos apantalladas Cat6A',
        'Ponchado de conectores y organización de Rack',
        'Certificación de ancho de banda y reflectometría',
      ],
    },
    {
      num: '08',
      categoria: 'INSTALACIONES',
      titulo: 'Mantenimiento & Averías 24h',
      subtitulo: 'ASISTENCIA RÁPIDA DE URGENCIAS EN LA SIERRA Y MADRID',
      desc: 'Atención técnica de averías 24h, diagnóstico preventivo con cámara termográfica FLIR y mantenimiento correctivo con respuesta inmediata.',
      img: '/images/smart_panel.png',
      badge: 'Urgencias 24 Horas',
      badgeColor: '#EF4444',
      glowColor: '#EF4444',
      cardBg: '#220808',
      tags: ['Urgencias 24h', 'Cámara FLIR', 'Sierra de Madrid'],
      specs: { disponibilidad: '24 Horas / 7 Días', respuesta: 'Inmediata', garantia: '100% Seguridad' },
      metrics: [
        { label: 'Tiempo de Respuesta', val: 98 },
        { label: 'Diagnóstico FLIR', val: 100 },
        { label: 'Resolución de Averías', val: 99 },
      ],
      rebtDetail: 'Inspección infrarroja con termografía de infrarrojos FLIR para detectar puntos calientes y bornes flojos antes de que provoquen incendios o cortes.',
      equipos: ['Cámara Infrarroja FLIR E8-XT', 'Pinza Amperimétrica TRMS', 'Maletín de Repuestos Frecuentes', 'Equipos de Seguridad Aislados 1000V'],
      pasos: [
        'Desplazamiento urgente al lugar de la incidencia',
        'Diagnóstico no destructivo con cámara termográfica',
        'Aislamiento del punto de falla y reparación',
        'Comprobación de restablecimiento seguro de energía',
      ],
    },
  ];

  // AUTOPLAY CONTROL
  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % servicios.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, servicios.length]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % servicios.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + servicios.length) % servicios.length);
  };

  const activeService = servicios[activeIdx];

  return (
    <section
      id="servicios"
      style={{
        width: '100%',
        height: '100vh',
        maxHeight: '100vh',
        backgroundColor: '#030712',
        paddingTop: 'clamp(85px, 12vh, 115px)',
        paddingBottom: 'clamp(30px, 4vh, 50px)',
        paddingLeft: '4vw',
        paddingRight: '4vw',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* LUZ AMBIENTAL DE FONDO QUE SE ADAPTA AL SERVICIO */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${activeService.glowColor}20 0%, transparent 70%)`,
          filter: 'blur(50px)',
          transition: 'all 0.8s ease',
          pointerEvents: 'none',
        }}
      ></div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* ENCABEZADO Y CONTROLES DE NAVEGACIÓN */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(0, 163, 255, 0.08)',
                border: '1px solid var(--color-electrico-borde)',
                padding: '8px 22px',
                borderRadius: '100px',
                marginBottom: '16px',
                boxShadow: '0 0 20px rgba(0, 163, 255, 0.2)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: activeService.glowColor,
                  boxShadow: `0 0 12px ${activeService.glowColor}`,
                  transition: 'background-color 0.5s ease',
                }}
              ></span>
              <span
                style={{
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '11px',
                  color: 'var(--color-electrico)',
                  fontWeight: 800,
                  letterSpacing: '2px',
                }}
              >
                02 // SHOWCASE DE INGENIERÍA ELÉCTRICA
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--fuente-titulos)',
                fontSize: 'clamp(2.2rem, 4.8vw, 4rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Soluciones Eléctricas <span style={{ color: activeService.glowColor, transition: 'color 0.5s ease' }}>Completas</span>
            </h2>
          </div>

          {/* BARRA DE MODOS Y AUTOPLAY */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              style={{
                backgroundColor: isAutoplay ? activeService.glowColor : '#0E1B2E',
                color: isAutoplay ? '#FFFFFF' : '#94A3B8',
                border: '1px solid var(--color-electrico-borde)',
                padding: '10px 20px',
                borderRadius: '100px',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '10px',
                fontWeight: 800,
                letterSpacing: '1.5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {isAutoplay ? '⏸ PAUSAR TOUR' : '▶ TOUR AUTOMÁTICO'}
            </button>

            <div
              style={{
                backgroundColor: '#0E1B2E',
                border: '1px solid var(--color-electrico-borde)',
                borderRadius: '100px',
                padding: '4px',
                display: 'flex',
                gap: '4px',
              }}
            >
              <button
                onClick={() => setViewMode('3d')}
                style={{
                  backgroundColor: viewMode === '3d' ? 'var(--color-electrico)' : 'transparent',
                  color: viewMode === '3d' ? '#FFFFFF' : '#94A3B8',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '100px',
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                🎴 ESCENARIO 3D
              </button>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  backgroundColor: viewMode === 'grid' ? 'var(--color-electrico)' : 'transparent',
                  color: viewMode === 'grid' ? '#FFFFFF' : '#94A3B8',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '100px',
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                📊 VISTA GRID
              </button>
            </div>
          </div>
        </div>

        {/* MODALIDAD 1: ESCENARIO 3D SÓLIDO SIN TRANSPARENCIAS MOLESTAS */}
        {viewMode === '3d' && (
          <div>
            <div
              style={{
                position: 'relative',
                minHeight: '620px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                perspective: '1200px',
                marginBottom: '40px',
              }}
            >
              {/* FLECHA IZQUIERDA */}
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '10px',
                  zIndex: 30,
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#0E1B2E',
                  border: `1.5px solid ${activeService.glowColor}`,
                  color: '#FFFFFF',
                  fontSize: '22px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                ←
              </button>

              {/* TARJETAS SÓLIDAS */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '920px',
                  height: '560px',
                }}
              >
                {servicios.map((srv, idx) => {
                  const offset = (idx - activeIdx + servicios.length) % servicios.length;
                  let normalizedOffset = offset;
                  if (offset > servicios.length / 2) {
                    normalizedOffset = offset - servicios.length;
                  }

                  const isActive = normalizedOffset === 0;
                  const isPrev = normalizedOffset === -1;
                  const isNext = normalizedOffset === 1;
                  const isVisible = isActive || isPrev || isNext;

                  let translateX = 0;
                  let scale = 1;
                  let opacity = 1;
                  let zIndex = 1;
                  let rotateY = 0;

                  if (isActive) {
                    translateX = 0;
                    scale = 1;
                    opacity = 1;
                    zIndex = 20;
                    rotateY = 0;
                  } else if (isNext) {
                    translateX = window.innerWidth > 768 ? 240 : 80;
                    scale = 0.88;
                    opacity = 0.7;
                    zIndex = 10;
                    rotateY = -12;
                  } else if (isPrev) {
                    translateX = window.innerWidth > 768 ? -240 : -80;
                    scale = 0.88;
                    opacity = 0.7;
                    zIndex = 10;
                    rotateY = 12;
                  } else {
                    translateX = 0;
                    scale = 0.7;
                    opacity = 0;
                    zIndex = 1;
                    rotateY = 0;
                  }

                  if (!isVisible) return null;

                  return (
                    <div
                      key={srv.num}
                      onClick={() => setActiveIdx(idx)}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                        opacity: opacity,
                        zIndex: zIndex,
                        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: isActive ? 'default' : 'pointer',
                      }}
                    >
                      {/* CONTENEDOR 100% SÓLIDO SIN SANGRADO DE TRANSPARENCIA */}
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: srv.cardBg,
                          border: isActive ? `2.5px solid ${srv.glowColor}` : '1.5px solid var(--color-electrico-borde)',
                          borderRadius: '32px',
                          padding: '36px 40px',
                          boxSizing: 'border-box',
                          boxShadow: isActive
                            ? `0 30px 80px rgba(0, 0, 0, 0.95), 0 0 60px ${srv.glowColor}44`
                            : '0 15px 35px rgba(0, 0, 0, 0.8)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          overflow: 'hidden',
                          position: 'relative',
                        }}
                      >
                        {/* ILUSTRACIÓN DE FONDO CON CORTE TOTAL */}
                        <img
                          src={srv.img}
                          alt={srv.titulo}
                          style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '55%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: isActive ? 0.3 : 0.1,
                            pointerEvents: 'none',
                          }}
                        />

                        {/* FILA SUPERIOR */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span
                              style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: srv.glowColor,
                                boxShadow: `0 0 14px ${srv.glowColor}`,
                              }}
                            ></span>
                            <span
                              style={{
                                fontFamily: 'var(--fuente-tecnica)',
                                fontSize: '11px',
                                fontWeight: 800,
                                color: srv.glowColor,
                                letterSpacing: '2px',
                              }}
                            >
                              SERVICIO // {srv.num}
                            </span>
                          </div>

                          <span
                            style={{
                              backgroundColor: '#050A14',
                              border: `1px solid ${srv.badgeColor}`,
                              color: srv.badgeColor,
                              fontFamily: 'var(--fuente-tecnica)',
                              fontSize: '11px',
                              fontWeight: 800,
                              padding: '6px 18px',
                              borderRadius: '100px',
                              boxShadow: `0 0 20px ${srv.badgeColor}44`,
                            }}
                          >
                            ✓ {srv.badge}
                          </span>
                        </div>

                        {/* CUERPO PRINCIPAL CON PESTAÑAS */}
                        <div style={{ position: 'relative', zIndex: 2, margin: '16px 0' }}>
                          <span
                            style={{
                              fontFamily: 'var(--fuente-tecnica)',
                              fontSize: '10px',
                              color: srv.glowColor,
                              letterSpacing: '2px',
                              display: 'block',
                              marginBottom: '6px',
                              fontWeight: 700,
                            }}
                          >
                            {srv.subtitulo}
                          </span>

                          <h3
                            style={{
                              fontFamily: 'var(--fuente-titulos)',
                              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
                              color: '#FFFFFF',
                              fontWeight: 800,
                              marginBottom: '16px',
                              lineHeight: 1.15,
                            }}
                          >
                            {srv.titulo}
                          </h3>

                          {isActive ? (
                            <div>
                              <div
                                style={{
                                  display: 'flex',
                                  gap: '12px',
                                  marginBottom: '16px',
                                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                  paddingBottom: '10px',
                                }}
                              >
                                {[
                                  { id: 'overview', name: '01 // RESUMEN' },
                                  { id: 'rebt', name: '02 // REBT Y GARANTÍA' },
                                  { id: 'metrics', name: '03 // MÉTRICAS EN VIVO' },
                                ].map((tab) => (
                                  <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                      background: 'transparent',
                                      border: 'none',
                                      color: activeTab === tab.id ? srv.glowColor : '#64748B',
                                      fontFamily: 'var(--fuente-tecnica)',
                                      fontSize: '10px',
                                      fontWeight: 800,
                                      letterSpacing: '1px',
                                      cursor: 'pointer',
                                      paddingBottom: '4px',
                                      borderBottom: activeTab === tab.id ? `2px solid ${srv.glowColor}` : '2px solid transparent',
                                      transition: 'all 0.3s ease',
                                    }}
                                  >
                                    {tab.name}
                                  </button>
                                ))}
                              </div>

                              {activeTab === 'overview' && (
                                <p style={{ fontFamily: 'var(--fuente-cuerpo)', fontSize: '14px', color: '#CBD5E1', lineHeight: '1.65', margin: 0, minHeight: '68px' }}>
                                  {srv.desc}
                                </p>
                              )}

                              {activeTab === 'rebt' && (
                                <div style={{ backgroundColor: '#050A14', border: '1px solid var(--color-electrico-borde)', padding: '14px 18px', borderRadius: '14px', minHeight: '68px' }}>
                                  <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '9px', color: srv.glowColor, display: 'block', marginBottom: '4px', fontWeight: 800 }}>
                                    CUMPLIMIENTO NORMATIVO & SUPERVISIÓN TÉCNICA
                                  </span>
                                  <p style={{ fontFamily: 'var(--fuente-cuerpo)', fontSize: '12.5px', color: '#E2E8F0', margin: 0, lineHeight: '1.5' }}>
                                    {srv.rebtDetail}
                                  </p>
                                </div>
                              )}

                              {activeTab === 'metrics' && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minHeight: '68px' }}>
                                  {srv.metrics.map((m, i) => (
                                    <div key={i}>
                                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'var(--fuente-tecnica)', color: '#CBD5E1', marginBottom: '4px' }}>
                                        <span>{m.label}</span>
                                        <span style={{ color: srv.glowColor, fontWeight: 800 }}>{m.val}%</span>
                                      </div>
                                      <div style={{ width: '100%', height: '5px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                                        <div
                                          style={{
                                            width: `${m.val}%`,
                                            height: '100%',
                                            backgroundColor: srv.glowColor,
                                            boxShadow: `0 0 10px ${srv.glowColor}`,
                                            transition: 'width 0.8s ease',
                                          }}
                                        ></div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <p style={{ fontFamily: 'var(--fuente-cuerpo)', fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', margin: 0 }}>
                              {srv.desc}
                            </p>
                          )}
                        </div>

                        {/* ACCIONES Y BOTÓN DE VER MÁS DETALLES COMPLETO */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2, flexWrap: 'wrap', gap: '12px' }}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDetailModalService(srv);
                            }}
                            style={{
                              backgroundColor: 'rgba(0, 163, 255, 0.08)',
                              border: `1.5px solid ${srv.glowColor}`,
                              color: srv.glowColor,
                              fontFamily: 'var(--fuente-tecnica)',
                              fontSize: '11px',
                              fontWeight: 800,
                              padding: '12px 24px',
                              borderRadius: '100px',
                              cursor: 'pointer',
                              letterSpacing: '1px',
                              transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = srv.glowColor;
                              e.currentTarget.style.color = '#FFFFFF';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(0, 163, 255, 0.08)';
                              e.currentTarget.style.color = srv.glowColor;
                            }}
                          >
                            🔍 VER MÁS DETALLES +
                          </button>

                          <a
                            href={`https://wa.me/34682178499?text=Hola,%20quisiera%20consultar%20sobre%20el%20servicio%20de%20${encodeURIComponent(srv.titulo)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor: srv.glowColor,
                              color: '#FFFFFF',
                              fontFamily: 'var(--fuente-tecnica)',
                              fontSize: '11px',
                              fontWeight: 800,
                              padding: '12px 28px',
                              borderRadius: '100px',
                              textDecoration: 'none',
                              letterSpacing: '1.5px',
                              boxShadow: `0 0 25px ${srv.glowColor}66`,
                            }}
                          >
                            SOLICITAR SERVICIO →
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* FLECHA DERECHA */}
              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '10px',
                  zIndex: 30,
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#0E1B2E',
                  border: `1.5px solid ${activeService.glowColor}`,
                  color: '#FFFFFF',
                  fontSize: '22px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                →
              </button>
            </div>

            {/* SELECTOR DE PUNTOS INFERIORES */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              {servicios.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  style={{
                    backgroundColor: activeIdx === i ? s.glowColor : '#0E1B2E',
                    color: activeIdx === i ? '#FFFFFF' : '#64748B',
                    border: activeIdx === i ? `1px solid ${s.glowColor}` : '1px solid var(--color-electrico-borde)',
                    padding: '8px 16px',
                    borderRadius: '100px',
                    fontFamily: 'var(--fuente-tecnica)',
                    fontSize: '10px',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    boxShadow: activeIdx === i ? `0 0 20px ${s.glowColor}55` : 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {s.num} {s.titulo.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* MODALIDAD 2: VISTA EN GRID TRADICIONAL COMPACTO */}
        {viewMode === 'grid' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {servicios.map((srv, idx) => (
              <div
                key={srv.num}
                style={{
                  backgroundColor: srv.cardBg,
                  border: `1px solid ${srv.glowColor}44`,
                  borderRadius: '24px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '11px', color: srv.glowColor, fontWeight: 800 }}>
                      //{srv.num}
                    </span>
                    <span style={{ backgroundColor: '#050A14', border: `1px solid ${srv.badgeColor}`, color: srv.badgeColor, fontSize: '9px', fontFamily: 'var(--fuente-tecnica)', padding: '3px 10px', borderRadius: '100px' }}>
                      {srv.badge}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--fuente-titulos)', fontSize: '18px', color: '#FFFFFF', fontWeight: 800, marginBottom: '10px' }}>
                    {srv.titulo}
                  </h3>
                  <p style={{ fontFamily: 'var(--fuente-cuerpo)', fontSize: '13px', color: '#94A3B8', lineHeight: '1.6', marginBottom: '20px' }}>
                    {srv.desc}
                  </p>
                </div>

                <button
                  onClick={() => setDetailModalService(srv)}
                  style={{
                    backgroundColor: 'rgba(0, 163, 255, 0.08)',
                    border: `1px solid ${srv.glowColor}`,
                    color: srv.glowColor,
                    fontFamily: 'var(--fuente-tecnica)',
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '10px 0',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    letterSpacing: '1px',
                  }}
                >
                  🔍 VER MÁS DETALLES +
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL ULTRA COMPLETO "VER MÁS DETALLES" AL HACER CLIC EN EL BOTÓN */}
      {detailModalService && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: 'rgba(3, 5, 8, 0.92)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            overflowY: 'auto',
          }}
          onClick={() => setDetailModalService(null)}
        >
          <div
            style={{
              backgroundColor: '#0B1526',
              border: `2px solid ${detailModalService.glowColor}`,
              borderRadius: '28px',
              padding: '40px',
              maxWidth: '720px',
              width: '100%',
              boxShadow: `0 30px 90px rgba(0, 0, 0, 0.95), 0 0 60px ${detailModalService.glowColor}55`,
              position: 'relative',
              animation: 'modalSlideUp 0.35s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDetailModalService(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: '#94A3B8',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>

            <span
              style={{
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '11px',
                color: detailModalService.glowColor,
                letterSpacing: '2px',
                display: 'block',
                marginBottom: '8px',
                fontWeight: 800,
              }}
            >
              EXPEDIENTE TÉCNICO COMPLETO // {detailModalService.num}
            </span>

            <h3
              style={{
                fontFamily: 'var(--fuente-titulos)',
                fontSize: '30px',
                color: '#FFFFFF',
                fontWeight: 800,
                marginBottom: '16px',
              }}
            >
              {detailModalService.titulo}
            </h3>

            <p
              style={{
                fontFamily: 'var(--fuente-cuerpo)',
                fontSize: '14.5px',
                color: '#CBD5E1',
                lineHeight: '1.65',
                marginBottom: '28px',
              }}
            >
              {detailModalService.desc}
            </p>

            {/* SECCIÓN DE EQUIPACIÓN UTILIZADA */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontFamily: 'var(--fuente-titulos)', fontSize: '14px', color: detailModalService.glowColor, marginBottom: '12px', letterSpacing: '1px' }}>
                ⚙️ EQUIPOS Y TECNOLOGÍA UTILIZADA
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {detailModalService.equipos.map((eq, i) => (
                  <div key={i} style={{ backgroundColor: '#050A14', border: '1px solid var(--color-electrico-borde)', padding: '10px 14px', borderRadius: '12px', fontFamily: 'var(--fuente-cuerpo)', fontSize: '12px', color: '#E2E8F0' }}>
                    ✓ {eq}
                  </div>
                ))}
              </div>
            </div>

            {/* PASOS DEL PROCESO DE INGENIERÍA */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontFamily: 'var(--fuente-titulos)', fontSize: '14px', color: detailModalService.glowColor, marginBottom: '12px', letterSpacing: '1px' }}>
                📌 FLUSO DE TRABAJO E INSPECCIÓN
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {detailModalService.pasos.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#050A14', padding: '10px 16px', borderRadius: '12px' }}>
                    <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '11px', color: detailModalService.glowColor, fontWeight: 800 }}>
                      0{i + 1}.
                    </span>
                    <span style={{ fontFamily: 'var(--fuente-cuerpo)', fontSize: '12.5px', color: '#CBD5E1' }}>
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://wa.me/34682178499?text=Hola,%20he%20visto%20el%20expediente%20t%C3%A9cnico%20de%20${encodeURIComponent(detailModalService.titulo)}%20y%20quiero%20solicitar%20presupuesto.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                width: '100%',
                textAlign: 'center',
                backgroundColor: detailModalService.glowColor,
                color: '#FFFFFF',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '12px',
                fontWeight: 800,
                padding: '16px 0',
                borderRadius: '100px',
                textDecoration: 'none',
                letterSpacing: '1.5px',
                boxShadow: `0 0 35px ${detailModalService.glowColor}66`,
              }}
            >
              SOLICITAR PRESUPUESTO PARA ESTE SERVICIO POR WHATSAPP →
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
