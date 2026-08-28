import React, { useState } from 'react';

const zonas = [
  { municipio: 'Guadarrama', estado: '🟢 Técnico en Zona', tiempoResp: '15-25 min', tipo: 'Sede Principal' },
  { municipio: 'Collado Villalba', estado: '🟢 Disponible', tiempoResp: '20-30 min', tipo: 'Sierra de Madrid' },
  { municipio: 'Torrelodones', estado: '🟢 Disponible', tiempoResp: '25-35 min', tipo: 'Sierra de Madrid' },
  { municipio: 'Las Rozas', estado: '🟢 Disponible', tiempoResp: '30-40 min', tipo: 'Noroeste' },
  { municipio: 'Majadahonda', estado: '🟢 Disponible', tiempoResp: '30-40 min', tipo: 'Noroeste' },
  { municipio: 'Pozuelo de Alarcón', estado: '🟢 Disponible', tiempoResp: '35-45 min', tipo: 'Noroeste' },
  { municipio: 'La Moraleja (Alcobendas)', estado: '🟢 Disponible', tiempoResp: '40-50 min', tipo: 'Norte' },
  { municipio: 'Madrid Capital (Centro/Norte)', estado: '🟢 Disponible', tiempoResp: '35-45 min', tipo: 'Capital' },
];

export default function EmergencyRadar() {
  const [zonaSeleccionada, setZonaSeleccionada] = useState(zonas[0]);

  const handleSolicitarUrgencia = () => {
    const texto = `Hola Kerling, necesito asistencia técnica eléctrica de urgencia en la zona de ${zonaSeleccionada.municipio}. Por favor contactad conmigo lo antes posible.`;
    window.open(`https://wa.me/34682178499?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <section id="urgencias" className="seccion-urgencias contenedor seccion-pantalla-completa">
      <div className="encabezado-seccion">
        <span className="insignia-seccion">
          <span className="codigo-indice">07 //</span> COBERTURA Y ASISTENCIA TÉCNICA DE URGENCIA
        </span>
        <h2 className="titulo-seccion">
          COBERTURA DIRECTA EN <br />
          <span className="texto-gradiente-dorado">GUADARRAMA, SIERRA Y MADRID</span>
        </h2>
        <p className="descripcion-seccion">
          Atención técnica y resolución de averías eléctricas (saltos de diferencial, cortocircuitos, fallo de cuadro general) con atención directa de Kerling Natale.
        </p>
      </div>

      <div
        style={{
          background: 'var(--tarjeta-base)',
          border: '1px solid rgba(255, 238, 0, 0.25)',
          borderRadius: '28px',
          padding: '32px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                width: '12px',
                height: '12px',
                background: '#25D366',
                borderRadius: '50%',
                boxShadow: '0 0 14px #25D366',
                animation: 'pulso-rayo 1.8s infinite',
              }}
            />
            <strong style={{ fontSize: '13px', color: '#fff', letterSpacing: '0.5px' }}>
              ESTADO DEL SERVICIO: DISPONIBLE PARA ASISTENCIA TÉCNICA
            </strong>
          </div>

          <span style={{ fontSize: '11px', color: '#FFEE00', background: 'rgba(255, 238, 0, 0.08)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(255, 238, 0, 0.3)' }}>
            📍 Sede Operativa: Guadarrama (Comunidad de Madrid)
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '28px' }}>
          {zonas.map((z, idx) => {
            const isSel = z.municipio === zonaSeleccionada.municipio;
            return (
              <div
                key={idx}
                onClick={() => setZonaSeleccionada(z)}
                style={{
                  background: isSel ? 'var(--color-electrico-borde)' : 'rgba(255, 255, 255, 0.02)',
                  border: isSel ? '1.5px solid var(--color-electrico)' : '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '16px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <strong style={{ fontSize: '12px', color: isSel ? 'var(--color-electrico)' : '#fff' }}>{z.municipio}</strong>
                  <span style={{ fontSize: '9px', color: '#25D366', fontWeight: '700' }}>{z.estado}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#94A3B8' }}>
                  <span>{z.tipo}</span>
                  <span style={{ color: '#FFEE00' }}>⏱️ {z.tiempoResp}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ background: '#070A12', padding: '20px', borderRadius: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <span style={{ fontSize: '10px', color: '#94A3B8', letterSpacing: '1px' }}>ZONA SELECCIONADA PARA CONSULTA:</span>
            <h4 style={{ fontSize: '1.1rem', color: '#FFEE00', fontWeight: '800' }}>
              {zonaSeleccionada.municipio} ({zonaSeleccionada.tipo})
            </h4>
            <p style={{ fontSize: '11px', color: '#CBD5E1', marginTop: '2px' }}>
              Tiempo medio estimado de llegada o atención: <strong>{zonaSeleccionada.tiempoResp}</strong>
            </p>
          </div>

          <button onClick={handleSolicitarUrgencia} className="boton-accion estilo-whatsapp">
            <span>Contactar Urgencia en {zonaSeleccionada.municipio}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
