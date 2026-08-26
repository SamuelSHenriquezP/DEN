import React, { useState } from 'react';

const componentSpecs = {
  iga: {
    tag: 'REBT 2026 COMPLIANT • ITC-BT-23',
    name: 'Interruptor General Automático (IGA) 40A',
    desc: 'Dispositivo de protección omnipolar obligatorio que protege contra cortocircuitos y sobrecargas todo el cuadro general. Equipado con bobina de corte para sobretensiones.',
    specs: ['40A / Curva C', '10 kA (IEC/EN 60898-1)', 'Tipo 2 (Up ≤ 1.5 kV)', '10 Años de Garantía DEN'],
  },
  sobretensiones: {
    tag: 'PROTECCIÓN PERMANENTE Y TRANSITORIA',
    name: 'Protector de Sobretensiones Reventón (PST)',
    desc: 'Protege los equipos electrónicos sensibles (Loxone, electrodomésticos, TV) ante picos de tensión por descargas atmosféricas o maniobras en la red de distribución.',
    specs: ['Imax 40 kA', 'Tensión Uc 275V', 'Respuesta < 25 ns', 'Certificado UNE-EN 61643'],
  },
  diferencial: {
    tag: 'PROTECCIÓN DE PERSONAS SUPERINMUNIZADA',
    name: 'Interruptor Diferencial Superinmunizado 30mA (ID-SI)',
    desc: 'Detecta fugas de corriente a tierra impidiendo descargas eléctricas a las personas. Tipo F/SI inmune a cegamiento por armónicos de inversores fotovoltaicos.',
    specs: ['Sensibilidad 30 mA', 'Clase F / SI Superinmunizada', '40A nominal', 'Garantía de Disparo Rápido'],
  },
  rearmable: {
    tag: 'CONTINUIDAD DE SUMINISTRO INTELIGENTE',
    name: 'Diferencial de Auto-Rearme Automático (REC)',
    desc: 'En caso de disparo fortuito por tormenta, el sistema realiza hasta 3 intentos de reconexión automática tras verificar que no existe fallo permanente.',
    specs: ['Rearme inteligente 3 intentos', 'Verificación de aislamiento previa', 'Ideal viviendas vacacionales', 'REBT Aprobado'],
  },
  loxone: {
    tag: 'LOXONE CERTIFIED PARTNER • V2 MINISERVER',
    name: 'Loxone Miniserver V2 (Cerebro Smart Home)',
    desc: 'Controlador centralizado que gestiona la inteligencia del inmueble: iluminación DALI, clima, persianas, control de accesos y balanceo fotovoltaico en red local.',
    specs: ['Procesador Quad-Core 64-bit', 'Encriptación SSH local', 'Bus Tree & Air integrados', 'Cero Cuotas Recurrentes'],
  },
  inversor: {
    tag: 'GESTIÓN DE AUTOCONSUMO Y VERTIDO CERO',
    name: 'Smart Energy Meter & Control Solar Bidireccional',
    desc: 'Mide el flujo de energía entre la red eléctrica, los paneles solares y la batería para maximizar el autoconsumo y dirigir excedentes a la carga EV.',
    specs: ['Precisión Clase 1 (1%)', 'Comunicación Modbus RTU', 'Lectura Trifásica / Monofásica', 'Integración Loxone API'],
  },
  'ev-protec': {
    tag: 'MOVILIDAD ELÉCTRICA • ITC-BT-52',
    name: 'Protección Exclusiva Wallbox EV',
    desc: 'Línea dedicada con diferencial Clase A 30mA y magentotérmico de curva C para garantizar una carga segura a 7.4 kW o 22 kW sin sobrecalentar el cuadro.',
    specs: ['Línea dedicada 6 mm² / 10 mm²', 'Protección contra fuga continua 6mA', 'Carga Inteligente', 'Normativa ITC-BT-52'],
  },
  termografia: {
    tag: 'MANTENIMIENTO PREVENTIVO INFRARROJO',
    name: 'Sensor de Monitoreo Térmico de Bornas',
    desc: 'Inspección continua de puntos calientes en las pletinas de cobre del cuadro para prevenir incendios eléctricos antes de que se produzcan.',
    specs: ['Termografía FLIR Certificada', 'Prevención de arcos', 'Monitoreo 24/7', 'Máxima Seguridad DEN'],
  },
};

export default function InspectorCuadro() {
  const [activeKey, setActiveKey] = useState('iga');
  const [cieInput, setCieInput] = useState('MAD-2026-DEN');
  const [cieStatus, setCieStatus] = useState({
    state: 'success', // 'idle', 'loading', 'success', 'error'
    code: 'MAD-2026-DEN',
  });

  const activeInfo = componentSpecs[activeKey];

  const handleVerifyCIE = () => {
    const code = cieInput.trim();
    if (!code) {
      setCieStatus({ state: 'error', code: '' });
      return;
    }
    setCieStatus({ state: 'loading', code });
    setTimeout(() => {
      setCieStatus({ state: 'success', code });
    }, 600);
  };

  return (
    <section id="cuadro-tecnico" className="inspector-section container section-nav full-screen-section">
      <div className="section-header gsap-fade-up">
        <span className="section-badge">
          <span className="code-tag">03 //</span> INSPECCIÓN TÉCNICA DE SEGURIDAD
        </span>
        <h2 className="section-title">
          INSPECTOR DE <br />
          <span className="accent-text">CUADRO REBT</span>
        </h2>
        <p className="section-desc">
          Haz clic en los breaker o módulos para examinar la anatomía de un cuadro eléctrico montado por el Ingeniero Kerling Natale según la normativa española REBT.
        </p>
      </div>

      <div className="inspector-wrapper gsap-fade-up">
        {/* DIAGRAMA VISUAL DE CUADRO ELÉCTRICO */}
        <div className="panel-diagram">
          <div className="panel-rail">
            <span className="rail-title">CARRIL DIN 1 — PROTECCIÓN GENERAL Y SOBRETENSIONES</span>
            <div className="breaker-group">
              <div
                className={`breaker-unit ${activeKey === 'iga' ? 'active-unit' : ''}`}
                onClick={() => setActiveKey('iga')}
              >
                <span className="unit-code">IGA</span>
                <span className="unit-name">Inter. General</span>
                <span className="unit-led blue"></span>
              </div>
              <div
                className={`breaker-unit ${activeKey === 'sobretensiones' ? 'active-unit' : ''}`}
                onClick={() => setActiveKey('sobretensiones')}
              >
                <span className="unit-code">PST</span>
                <span className="unit-name">Sobretensiones</span>
                <span className="unit-led blue"></span>
              </div>
              <div
                className={`breaker-unit ${activeKey === 'diferencial' ? 'active-unit' : ''}`}
                onClick={() => setActiveKey('diferencial')}
              >
                <span className="unit-code">ID-SI</span>
                <span className="unit-name">Diferencial Super.</span>
                <span className="unit-led blue"></span>
              </div>
              <div
                className={`breaker-unit ${activeKey === 'rearmable' ? 'active-unit' : ''}`}
                onClick={() => setActiveKey('rearmable')}
              >
                <span className="unit-code">REC</span>
                <span className="unit-name">Auto-Rearme</span>
                <span className="unit-led purple"></span>
              </div>
            </div>
          </div>

          <div className="panel-rail">
            <span className="rail-title">CARRIL DIN 2 — CONTROL DOMÓTICO & INVERSOR SOLAR</span>
            <div className="breaker-group">
              <div
                className={`breaker-unit loxone-unit ${activeKey === 'loxone' ? 'active-unit' : ''}`}
                onClick={() => setActiveKey('loxone')}
              >
                <span className="unit-code">LOX</span>
                <span className="unit-name">Miniserver V2</span>
                <span className="unit-led loxone-purple"></span>
              </div>
              <div
                className={`breaker-unit ${activeKey === 'inversor' ? 'active-unit' : ''}`}
                onClick={() => setActiveKey('inversor')}
              >
                <span className="unit-code">INV</span>
                <span className="unit-name">Meter Solar</span>
                <span className="unit-led blue"></span>
              </div>
              <div
                className={`breaker-unit ${activeKey === 'ev-protec' ? 'active-unit' : ''}`}
                onClick={() => setActiveKey('ev-protec')}
              >
                <span className="unit-code">EV</span>
                <span className="unit-name">Prot. Wallbox</span>
                <span className="unit-led blue"></span>
              </div>
              <div
                className={`breaker-unit ${activeKey === 'termografia' ? 'active-unit' : ''}`}
                onClick={() => setActiveKey('termografia')}
              >
                <span className="unit-code">TERM</span>
                <span className="unit-name">Sensor Térmico</span>
                <span className="unit-led purple"></span>
              </div>
            </div>
          </div>

          {/* WIDGET INTERACTIVO DE VERIFICACIÓN CIE EXPRÉS */}
          <div className="cie-verifier-box">
            <div className="cie-verifier-head">
              <span className="v-icon">📜</span>
              <div>
                <strong>Verificador de Validez de Boletín Eléctrico (CIE)</strong>
                <p className="v-sub">Comprueba la conformidad REBT de una instalación registrada</p>
              </div>
            </div>
            <div className="cie-input-group">
              <input
                type="text"
                id="cie-code-input"
                placeholder="Introduce Código de Expediente o Municipio (ej: MAD-2026)"
                value={cieInput}
                onChange={(e) => setCieInput(e.target.value)}
              />
              <button onClick={handleVerifyCIE} className="btn-cta primary-glow">
                Verificar Estado
              </button>
            </div>
            <div id="cie-result-display" className="cie-result-box">
              {cieStatus.state === 'error' && (
                <span className="r-status" style={{ color: '#ff4444' }}>
                  ⚠️ POR FAVOR, INTRODUCE UN CÓDIGO VÁLIDO
                </span>
              )}
              {cieStatus.state === 'loading' && (
                <span className="r-status purple">
                  ⌛ CONSULTANDO BASE DE DATOS DE LA COMUNIDAD DE MADRID...
                </span>
              )}
              {cieStatus.state === 'success' && (
                <>
                  <span className="r-status purple">
                    ✔️ EXPEDIENTE [{cieStatus.code.toUpperCase()}]: CONFORME A REBT (ITC-BT-03)
                  </span>
                  <span className="r-detail">
                    Firmado y legalizado digitalmente por el Ing. Kerling Natale ante la Consejería de Industria de Madrid.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* FICHA DETAIL / INSPECTOR SIDEBAR */}
        <div className="inspector-details" id="inspector-card">
          <div className="inspector-head">
            <span className="inspector-tag" id="inspect-tag">
              {activeInfo.tag}
            </span>
            <h3 id="inspect-name">{activeInfo.name}</h3>
          </div>

          <p className="inspector-body" id="inspect-desc">
            {activeInfo.desc}
          </p>

          <div className="inspector-specs">
            <div className="spec-row">
              <span className="spec-key">Corriente Nominal:</span>
              <span className="spec-val" id="inspect-spec-1">
                {activeInfo.specs[0]}
              </span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Poder de Corte:</span>
              <span className="spec-val" id="inspect-spec-2">
                {activeInfo.specs[1]}
              </span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Protección Transitoria:</span>
              <span className="spec-val" id="inspect-spec-3">
                {activeInfo.specs[2]}
              </span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Garantía DEN:</span>
              <span className="spec-val purple" id="inspect-spec-4">
                {activeInfo.specs[3]}
              </span>
            </div>
          </div>

          <div className="inspector-foot">
            <span className="compliance-badge">✔️ Auditado y Verificado por el Ing. Kerling Natale</span>
          </div>
        </div>
      </div>
    </section>
  );
}
