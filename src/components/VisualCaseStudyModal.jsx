import React from 'react';

export default function VisualCaseStudyModal({ projectKey, onClose, onOpenQuote }) {
  if (!projectKey) return null;

  const datosProyectos = {
    'villa-loxone': {
      titulo: 'RESIDENCIA UNIFAMILIAR LOXONE',
      subtitulo: 'AUTOMATIZACIÓN RESIDENCIAL & ILUMINACIÓN DALI',
      ubicacion: 'POZUELO DE ALARCÓN • MADRID',
      img: '/images/villa_loxone.png',
      problema: 'La vivienda de 600m² contaba con múltiples subsistemas independientes de iluminación, persianas y climatización sin centralización, generando altos consumos energéticos y fallos de comunicación frecuentes.',
      solucion: 'Diseño e integración de servidor Loxone Miniserver con bus Tree y DALI Extension para 45 zonas de iluminación graduables, bombas de calor integradas y procesado 100% local sin dependencia de internet.',
      resultado: 'Control total desde aplicación única y pulsadores de cristal Touch Pure, reducción del 40% en consumo eléctrico de iluminación y climatización automática por zonas.',
      specs: [
        { label: 'NORMATIVA', val: 'REBT / ITC-BT-03' },
        { label: 'CONTROL', val: '45 ZONAS DALI' },
        { label: 'SERVIDOR', val: 'LOXONE MINISERVER TREE' },
        { label: 'POTENCIA', val: '15 kWp FOTOVOLTAICA' },
      ],
    },
    'solar-park': {
      titulo: 'SEDE INDUSTRIAL FOTOVOLTAICA',
      subtitulo: 'ENERGÍA RENOVABLE & ALMACENAMIENTO LFP',
      ubicacion: 'GUADARRAMA • SIERRA DE MADRID',
      img: '/images/solar_industrial.png',
      problema: 'Nave industrial con consumo constante durante picos diurnos de producción y elevadas penalizaciones tarifarias de potencia contratada en horas punta.',
      solucion: 'Instalación de cubierta fotovoltaica de 120 kWp con inversores trifásicos industriales y sistema de almacenamiento en litio (LFP) de 80 kWh con inyección cero programada.',
      resultado: 'Independencia energética del 92% en meses de primavera/verano, amortización estimada en 3.4 años y eliminación completa de penalizaciones por sobrepotencia.',
      specs: [
        { label: 'CUBIERTA', val: '120 kWp INSTALADOS' },
        { label: 'BATERÍA', val: '80 kWh LFP ACUMULACIÓN' },
        { label: 'INVERSOR', val: 'TRIFÁSICO INDUSTRIAL' },
        { label: 'REDUCCIÓN', val: '92% FACTURA ELÉCTRICA' },
      ],
    },
    'data-panel': {
      titulo: 'INFRAESTRUCTURA DE CUADROS REBT',
      subtitulo: 'REFORMA DE POTENCIA & TERMOGRAFÍA PREVENTIVA',
      ubicacion: 'MADRID CAPITAL',
      img: '/images/smart_panel.png',
      problema: 'Cuadro eléctrico antiguo sin actualizar desde 1995, disparos intempestivos de diferenciales y riesgo inminente de sobrecalentamiento por resistencia de contacto en embarrados.',
      solucion: 'Reforma integral del cuadro de 250A con embarrado aislado, protecciones contra sobretensiones permanentes/transitorias y diferenciales superinmunizados de clase A con autoreenganche.',
      resultado: 'Cero disparos en los últimos 18 meses, certificación oficial CIE ante la Comunidad de Madrid e informe de inspección termográfica FLIR sin anomalías térmicas.',
      specs: [
        { label: 'INTENSIDAD', val: '250A TRIFÁSICO' },
        { label: 'DIAGNÓSTICO', val: 'CÁMARA TÉRMICA FLIR' },
        { label: 'PROTECCIÓN', val: 'DIFERENCIAL SUPERINMUNIZADO' },
        { label: 'CERTIFICADO', val: 'CIE OFICIAL MADRID' },
      ],
    },
    'ev-charging': {
      titulo: 'PUNTOS DE RECARGA VEHÍCULO ELÉCTRICO',
      subtitulo: 'MOVILIDAD SOSTENIBLE & BALANCEO DINÁMICO',
      ubicacion: 'LA MORALEJA • ALCOBENDAS',
      img: '/images/ev_charging.png',
      problema: 'Adquisición de dos vehículos eléctricos de alta gama que requerían carga simultánea sin necesidad de aumentar la potencia contratada de la vivienda.',
      solucion: 'Instalación de doble Wallbox trifásico de 22 kW bajo normativa ITC-BT-52 con modulación dinámica de corriente que mide el consumo instantáneo de la vivienda en tiempo real.',
      resultado: 'Carga completa nocturna garantizada sin saltos de IGA y prioridad automática de carga con excedente solar fotovoltaico.',
      specs: [
        { label: 'NORMATIVA', val: 'ITC-BT-52' },
        { label: 'POTENCIA MAX', val: '22 kW TRIFÁSICO' },
        { label: 'BALANCEO', val: 'DINÁMICO EN TIEMPO REAL' },
        { label: 'INTEGRACIÓN', val: 'EXCEDENTE SOLAR DIRECTO' },
      ],
    },
  };

  const p = datosProyectos[projectKey] || datosProyectos['villa-loxone'];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(3, 5, 8, 0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '90vh',
          backgroundColor: '#0B111D',
          border: '1px solid #FFEE00',
          borderRadius: '28px',
          padding: '40px',
          overflowY: 'auto',
          boxShadow: '0 0 50px rgba(255, 238, 0, 0.25)',
          boxSizing: 'border-box',
        }}
      >
        {/* BOTÓN CERRAR */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#FFFFFF',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>

        {/* ENCABEZADO PROYECTO */}
        <span
          style={{
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '11px',
            color: '#FFEE00',
            letterSpacing: '2px',
            display: 'block',
            marginBottom: '8px',
            textTransform: 'uppercase',
          }}
        >
          {p.subtitulo} • {p.ubicacion}
        </span>

        <h2
          style={{
            fontFamily: 'var(--fuente-titulos)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            margin: '0 0 24px 0',
            textTransform: 'uppercase',
          }}
        >
          {p.titulo}
        </h2>

        {/* IMAGEN GRANDE */}
        <img
          src={p.img}
          alt={p.titulo}
          style={{
            width: '100%',
            height: '350px',
            objectFit: 'cover',
            borderRadius: '20px',
            marginBottom: '36px',
          }}
        />

        {/* NARRATIVA VISUAL: THE PROBLEM / THE SOLUTION / THE RESULT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '40px' }}>
          <div>
            <span
              style={{
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '11px',
                color: '#EF4444',
                letterSpacing: '2px',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              01 // THE PROBLEM
            </span>
            <p style={{ fontFamily: 'var(--fuente-cuerpo)', fontSize: '14px', color: '#CBD5E1', lineHeight: '1.65', margin: 0 }}>
              {p.problema}
            </p>
          </div>

          <div>
            <span
              style={{
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '11px',
                color: '#00E5FF',
                letterSpacing: '2px',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              02 // THE SOLUTION
            </span>
            <p style={{ fontFamily: 'var(--fuente-cuerpo)', fontSize: '14px', color: '#CBD5E1', lineHeight: '1.65', margin: 0 }}>
              {p.solucion}
            </p>
          </div>

          <div>
            <span
              style={{
                fontFamily: 'var(--fuente-tecnica)',
                fontSize: '11px',
                color: '#FFEE00',
                letterSpacing: '2px',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              03 // THE RESULT
            </span>
            <p style={{ fontFamily: 'var(--fuente-cuerpo)', fontSize: '14px', color: '#FFFFFF', fontWeight: 600, lineHeight: '1.65', margin: 0 }}>
              {p.resultado}
            </p>
          </div>
        </div>

        {/* METRICAS TÉCNICAS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            padding: '20px',
            backgroundColor: '#030508',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '32px',
          }}
        >
          {p.specs.map((s, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '9px', color: '#64748B', letterSpacing: '1px' }}>
                {s.label}
              </span>
              <span style={{ fontFamily: 'var(--fuente-tecnica)', fontSize: '12px', color: '#FFEE00', fontWeight: 700, marginTop: '4px' }}>
                {s.val}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => {
            onClose();
            onOpenQuote();
          }}
          style={{
            width: '100%',
            background: '#FFEE00',
            color: '#030508',
            border: 'none',
            padding: '16px',
            borderRadius: '100px',
            fontFamily: 'var(--fuente-tecnica)',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '2px',
            cursor: 'pointer',
          }}
        >
          SOLICITAR PROYECTO SIMILAR →
        </button>
      </div>
    </div>
  );
}
