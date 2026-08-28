import React, { useState, useEffect } from 'react';

export default function InteractiveServicesList() {
  const [activeIdx, setActiveIdx] = useState(0);

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
      specs: { procesador: 'Miniserver V2', integracion: 'Clima + DALI + Accesos', soporte: 'Atención Directa' },
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

  const activeService = servicios[activeIdx];

  return (
    <section
      id="servicios"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#030712',
        padding: '70px 4vw',
        position: 'relative',
        boxSizing: 'border-box',
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

      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        {/* ENCABEZADO Y CONTROLES DE NAVEGACIÓN */}
        <div style={{ marginBottom: '40px' }}>
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

        {/* MODO SHOWCASE: IMAGEN CLARA 100% Y EXPLICACIÓN COMPLETA DE TRABAJO */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 992 ? '1fr 1.1fr' : '1fr',
            gap: '36px',
            alignItems: 'start',
            backgroundColor: '#0E1B2E',
            border: `1.5px solid ${activeService.glowColor}`,
            borderRadius: '28px',
            padding: '36px',
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px ${activeService.glowColor}25`,
            marginBottom: '32px',
            transition: 'all 0.4s ease',
          }}
        >
          {/* COLUMNA IZQUIERDA: IMAGEN 100% CLARA Y NÍTIDA */}
          <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '360px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <img
              src={activeService.img}
              alt={activeService.titulo}
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '480px',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '20px',
              }}
            />
            {/* INSIGNIA SUPERIOR EN LA IMAGEN */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: '#030712',
                border: `1px solid ${activeService.badgeColor}`,
                color: activeService.badgeColor,
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '10px',
                fontWeight: 800,
                padding: '6px 14px',
                borderRadius: '100px',
                boxShadow: `0 0 15px ${activeService.badgeColor}44`,
              }}
            >
              ✓ {activeService.badge}
            </div>
          </div>

          {/* COLUMNA DERECHA: EXPLICACIÓN COMPLETA DEL TRABAJO */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: activeService.glowColor,
                    boxShadow: `0 0 10px ${activeService.glowColor}`,
                  }}
                ></span>
                <span
                  style={{
                    fontFamily: 'var(--fuente-tecnica)',
                    fontSize: '11px',
                    fontWeight: 800,
                    color: activeService.glowColor,
                    letterSpacing: '2px',
                  }}
                >
                  SERVICIO // {activeService.num} • {activeService.categoria}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--fuente-titulos)',
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  margin: '0 0 6px 0',
                }}
              >
                {activeService.titulo}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--fuente-tecnica)',
                  fontSize: '10.5px',
                  color: '#FFEE00',
                  letterSpacing: '1px',
                  margin: '0 0 16px 0',
                  fontWeight: 700,
                }}
              >
                {activeService.subtitulo}
              </p>

              <p
                style={{
                  fontFamily: 'var(--fuente-cuerpo)',
                  fontSize: '14px',
                  color: '#CBD5E1',
                  lineHeight: '1.65',
                  margin: 0,
                }}
              >
                {activeService.desc}
              </p>
            </div>

            {/* DETALLE TÉCNICO REBT */}
            <div
              style={{
                backgroundColor: '#050A14',
                borderLeft: `3px solid ${activeService.glowColor}`,
                padding: '14px 18px',
                borderRadius: '0 12px 12px 0',
              }}
            >
              <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '10px', color: activeService.glowColor, letterSpacing: '1.5px', fontWeight: 800, display: 'block', marginBottom: '4px' }}>
                ESPECIFICACIÓN REBT
              </span>
              <p style={{ fontFamily: 'var(--fuente-cuerpo)', fontSize: '12.5px', color: '#94A3B8', margin: 0, lineHeight: '1.55' }}>
                {activeService.rebtDetail}
              </p>
            </div>

            {/* PASOS DE EJECUCIÓN (LO QUE SE HACE) */}
            <div>
              <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '10px', color: '#FFFFFF', letterSpacing: '1.5px', fontWeight: 800, display: 'block', marginBottom: '10px' }}>
                PASOS DE EJECUCIÓN DEL TRABAJO
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeService.pasos.map((paso, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#050A14', padding: '8px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '10px', color: activeService.glowColor, fontWeight: 800 }}>
                      0{idx + 1}.
                    </span>
                    <span style={{ fontFamily: 'var(--fuente-cuerpo)', fontSize: '12px', color: '#E2E8F0' }}>
                      {paso}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* EQUIPACIÓN Y COMPONENTES */}
            <div>
              <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '10px', color: '#FFFFFF', letterSpacing: '1.5px', fontWeight: 800, display: 'block', marginBottom: '8px' }}>
                EQUIPAMIENTO UTILIZADO
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {activeService.equipos.map((eq, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: 'var(--fuente-tecnica)',
                      fontSize: '9.5px',
                      color: '#94A3B8',
                      backgroundColor: '#050A14',
                      border: '1px solid var(--color-electrico-borde)',
                      padding: '4px 10px',
                      borderRadius: '100px',
                    }}
                  >
                    ✓ {eq}
                  </span>
                ))}
              </div>
            </div>

            {/* ENLACE DIRECTO WHATSAPP */}
            <a
              href={`https://wa.me/34682178499?text=Hola,%20quisiera%20consultar%20por%20el%20servicio%20de%20${encodeURIComponent(activeService.titulo)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'center',
                backgroundColor: activeService.glowColor,
                color: '#FFFFFF',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '11px',
                fontWeight: 800,
                padding: '14px 0',
                borderRadius: '100px',
                textDecoration: 'none',
                letterSpacing: '1.5px',
                marginTop: '10px',
                boxShadow: `0 0 25px ${activeService.glowColor}55`,
              }}
            >
              SOLICITAR PRESUPUESTO PARA ESTE TRABAJO →
            </a>
          </div>
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
                padding: '10px 18px',
                borderRadius: '100px',
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '10.5px',
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
    </section>
  );
}
