import React, { useState } from 'react';

export default function WizardQuote() {
  const [currentStep, setCurrentStep] = useState(1);

  const [type, setType] = useState('Villa / Chalet Unifamiliar');
  const [services, setServices] = useState([
    'Domótica Loxone Smart Home',
    'Energía Solar Fotovoltaica',
  ]);
  const [location, setLocation] = useState('Madrid');
  const [sqm, setSqm] = useState('180');
  const [urgency, setUrgency] = useState('Próximo mes');

  const optionCards = [
    {
      key: 'Villa / Chalet Unifamiliar',
      icon: '🏡',
      title: 'Chalet / Villa Unifamiliar',
      desc: 'Instalaciones residenciales de alta gama, domótica y solar.',
    },
    {
      key: 'Piso / Residencia Urbanización',
      icon: '🏢',
      title: 'Piso / Residencia',
      desc: 'Reforma eléctrica, boletines y adecuación REBT.',
    },
    {
      key: 'Local Comercial / Oficina',
      icon: '🏬',
      title: 'Local Comercial / Oficina',
      desc: 'Iluminación DALI, telecomunicaciones y potencia.',
    },
    {
      key: 'Nave Industrial / Datacenter',
      icon: '🏭',
      title: 'Nave Industrial / Sede',
      desc: 'Cuadros de distribución trifásica y termografía.',
    },
  ];

  const availableServices = [
    {
      value: 'Domótica Loxone Smart Home',
      icon: '💜',
      title: 'Domótica Loxone / KNX',
      desc: 'Control de luces, clima, persianas y seguridad.',
    },
    {
      value: 'Energía Solar Fotovoltaica',
      icon: '☀️',
      title: 'Energía Solar & Baterías',
      desc: 'Autoconsumo, excedentes y baterías LFP.',
    },
    {
      value: 'Reforma de Cuadro y Cableado REBT',
      icon: '⚡',
      title: 'Cuadro Eléctrico & REBT',
      desc: 'Renovación de cuadro, diferencial e IGA.',
    },
    {
      value: 'Cargador Vehículo Eléctrico Wallbox',
      icon: '🚘',
      title: 'Punto de Carga EV Wallbox',
      desc: 'Balanceo dinámico y carga solar.',
    },
    {
      value: 'Boletín Eléctrico CIE Oficial',
      icon: '📋',
      title: 'Boletín Eléctrico (CIE)',
      desc: 'Certificado oficial urgente en Madrid.',
    },
  ];

  const toggleService = (serviceVal) => {
    if (services.includes(serviceVal)) {
      setServices(services.filter((s) => s !== serviceVal));
    } else {
      setServices([...services, serviceVal]);
    }
  };

  const handleNext = (nextStep) => {
    setCurrentStep(nextStep);
  };

  const handleSendWhatsApp = () => {
    const msg =
      `⚡ *NUEVO PRESUPUESTO SOLICITADO (WEB DEN)*\n\n` +
      `• *Inmueble:* ${type}\n` +
      `• *Servicios:* ${services.join(', ') || 'Consulta General'}\n` +
      `• *Ubicación:* ${location || 'Madrid'} (${sqm || '180'} m²)\n` +
      `• *Plazo Estimado:* ${urgency}\n\n` +
      `Por favor, me gustaría recibir propuesta formal o agendar llamada con Kerling Natale.`;

    window.open(`https://wa.me/34682178499?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="cotizador" className="wizard-section container full-screen-section">
      <div className="wizard-box gsap-fade-up">
        <div className="wizard-header">
          <span className="section-badge">
            <span className="code-tag">07 //</span> CONFIGURADOR EN TIEMPO REAL
          </span>
          <h2>
            CONSTRUYE TU <span className="accent-text">PRESUPUESTO EXPRÉS</span>
          </h2>
          <p>Obtén un desglose preliminar en menos de 60 segundos y conéctalo directamente con Kerling Natale por WhatsApp.</p>
        </div>

        {/* PASOS DEL WIZARD */}
        <div className="wizard-steps-bar">
          <div className={`step-indicator ${currentStep === 1 ? 'active' : ''}`}>1. Tipo Proyecto</div>
          <div className={`step-indicator ${currentStep === 2 ? 'active' : ''}`}>2. Servicios</div>
          <div className={`step-indicator ${currentStep === 3 ? 'active' : ''}`}>3. Detalles</div>
          <div className={`step-indicator ${currentStep === 4 ? 'active' : ''}`}>4. Confirmación</div>
        </div>

        <div className="wizard-content">
          {/* PASO 1 */}
          {currentStep === 1 && (
            <div className="wizard-step active">
              <h4>¿Para qué tipo de inmueble es el proyecto?</h4>
              <div className="wizard-options-grid">
                {optionCards.map((card) => (
                  <div
                    key={card.key}
                    className={`w-option-card ${type === card.key ? 'selected' : ''}`}
                    onClick={() => setType(card.key)}
                  >
                    <span className="opt-icon">{card.icon}</span>
                    <h5>{card.title}</h5>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
              <div className="wizard-nav-btns">
                <span></span>
                <button className="btn-cta" onClick={() => handleNext(2)}>
                  Siguiente Paso →
                </button>
              </div>
            </div>
          )}

          {/* PASO 2 */}
          {currentStep === 2 && (
            <div className="wizard-step active">
              <h4>Selecciona los servicios requeridos (puedes marcar varios)</h4>
              <div className="wizard-checkbox-grid">
                {availableServices.map((srv) => {
                  const isChecked = services.includes(srv.value);
                  return (
                    <label key={srv.value} className="w-check-card" onClick={() => toggleService(srv.value)}>
                      <div className={`w-check-inner ${isChecked ? 'selected-check' : ''}`} style={{ borderColor: isChecked ? '#8B5CF6' : undefined, background: isChecked ? 'rgba(109, 40, 217, 0.1)' : undefined }}>
                        <span className="chk-icon">{srv.icon}</span>
                        <div>
                          <strong>{srv.title}</strong>
                          <p>{srv.desc}</p>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
              <div className="wizard-nav-btns">
                <button className="btn-cta outline" onClick={() => handleNext(1)}>
                  ← Anterior
                </button>
                <button className="btn-cta" onClick={() => handleNext(3)}>
                  Siguiente Paso →
                </button>
              </div>
            </div>
          )}

          {/* PASO 3 */}
          {currentStep === 3 && (
            <div className="wizard-step active">
              <h4>Detalles de ubicación y superficie</h4>
              <div className="w-inputs-group">
                <div className="w-input-field">
                  <label htmlFor="w-location">Ubicación del Inmueble (Municipio / Zona de Madrid)</label>
                  <input
                    type="text"
                    id="w-location"
                    placeholder="Ej: Guadarrama, Pozuelo, Las Rozas, Madrid capital..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="w-input-field">
                  <label htmlFor="w-sqm">Superficie Aproximada Inmueble (m²)</label>
                  <input
                    type="number"
                    id="w-sqm"
                    placeholder="Ej: 180"
                    value={sqm}
                    onChange={(e) => setSqm(e.target.value)}
                  />
                </div>
                <div className="w-input-field">
                  <label htmlFor="w-urgency">Plazo Estimado de Ejecución</label>
                  <select
                    id="w-urgency"
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                  >
                    <option value="Lo antes posible (Urgente 24-48h)">Lo antes posible (Urgente)</option>
                    <option value="Próximo mes">En el próximo mes</option>
                    <option value="En los próximos 3 meses">En los próximos 3 meses</option>
                    <option value="Solo presupuestando / Planificación">Solo comparando presupuestos</option>
                  </select>
                </div>
              </div>
              <div className="wizard-nav-btns">
                <button className="btn-cta outline" onClick={() => handleNext(2)}>
                  ← Anterior
                </button>
                <button className="btn-cta" onClick={() => handleNext(4)}>
                  Ver Resumen & Enviar →
                </button>
              </div>
            </div>
          )}

          {/* PASO 4: RESUMEN Y ENVÍO */}
          {currentStep === 4 && (
            <div className="wizard-step active">
              <h4>Resumen de tu Configuración de Proyecto</h4>

              <div className="w-summary-box">
                <div className="w-sum-item">
                  <span className="lbl">Inmueble:</span>
                  <span className="val">{type}</span>
                </div>
                <div className="w-sum-item">
                  <span className="lbl">Servicios:</span>
                  <span className="val">{services.join(', ') || 'Consulta General'}</span>
                </div>
                <div className="w-sum-item">
                  <span className="lbl">Ubicación & M²:</span>
                  <span className="val">
                    {location} ({sqm} m²)
                  </span>
                </div>
                <div className="w-sum-item">
                  <span className="lbl">Plazo:</span>
                  <span className="val purple">{urgency}</span>
                </div>
              </div>

              <div className="w-send-actions">
                <button onClick={handleSendWhatsApp} className="btn-cta primary-glow w-100">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.229 4.229-1.157z" />
                  </svg>
                  <span>Enviar este Presupuesto Directo a Kerling por WhatsApp</span>
                </button>
                <button className="btn-cta outline" onClick={() => handleNext(3)}>
                  Modificar Datos
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
