import React, { useState } from 'react';

export default function SolarCalculator() {
  const [bill, setBill] = useState(350);
  const [surface, setSurface] = useState(60);
  const [hasBattery, setHasBattery] = useState(true);
  const [hasEV, setHasEV] = useState(false);

  let factor = 0.7;
  if (hasBattery) factor += 0.18;
  if (hasEV) factor += 0.08;

  const annualSavings = Math.round(bill * 12 * factor);
  const savings25 = annualSavings * 25;

  const kWp = (surface * 0.18).toFixed(1);
  const estimatedCost = kWp * 1100 + (hasBattery ? 3500 : 0);
  const payback = (estimatedCost / (annualSavings || 1)).toFixed(1);

  const independence = Math.min(95, Math.round(factor * 100));
  const co2 = (kWp * 0.55).toFixed(1);

  const handleSendQuote = () => {
    const text = `Hola Kerling, he usado el simulador de tu web DEN. Mi gasto actual es de ${bill} €/mes. El sistema me recomienda ${kWp} kWp con un ahorro proyectado en 25 años de ${savings25.toLocaleString()} €. Me gustaría solicitar una visita o estudio oficial.`;
    window.open(`https://wa.me/34682178499?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculadora" className="audit-section container section-nav full-screen-section">
      <div className="audit-box gsap-fade-up">
        <div className="audit-tool">
          <span className="section-badge">
            <span className="code-tag">05 //</span> HERRAMIENTA DE INGENIERÍA EN TIEMPO REAL
          </span>
          <h2 className="section-title">
            SIMULADOR DE AHORRO <br />
            <span className="accent-text">SOLAR & BATERÍAS</span>
          </h2>
          <p className="audit-intro">
            Calcula al instante cuánto dinero y energía puedes ahorrar cada año con una instalación fotovoltaica proyectada por el Ingeniero <strong>Kerling Natale</strong>.
          </p>

          <div className="calc-controls">
            <div className="calc-field">
              <div className="calc-field-head">
                <label htmlFor="audit-range">Factura Eléctrica Mensual Actual (€/mes)</label>
                <span className="accent-val">{bill} €/mes</span>
              </div>
              <input
                type="range"
                id="audit-range"
                min="100"
                max="2000"
                step="25"
                value={bill}
                onChange={(e) => setBill(parseInt(e.target.value))}
              />
            </div>

            <div className="calc-field">
              <div className="calc-field-head">
                <label htmlFor="surface-range">Superficie Útil de Tejado Disponibles (m²)</label>
                <span className="accent-val">{surface} m²</span>
              </div>
              <input
                type="range"
                id="surface-range"
                min="20"
                max="300"
                step="5"
                value={surface}
                onChange={(e) => setSurface(parseInt(e.target.value))}
              />
            </div>

            <div className="calc-options">
              <label className="calc-checkbox">
                <input
                  type="checkbox"
                  id="calc-battery"
                  checked={hasBattery}
                  onChange={(e) => setHasBattery(e.target.checked)}
                />
                <span className="chk-box"></span>
                <span>Incluir Sistema de Batería LFP (+30% Autoconsumo)</span>
              </label>
              <label className="calc-checkbox">
                <input
                  type="checkbox"
                  id="calc-ev"
                  checked={hasEV}
                  onChange={(e) => setHasEV(e.target.checked)}
                />
                <span className="chk-box"></span>
                <span>Incluir Coche Eléctrico (Carga Solar Directa)</span>
              </label>
            </div>
          </div>
        </div>

        {/* RESULTADOS DE LA CALCULADORA */}
        <div className="audit-res">
          <div className="res-card">
            <span className="res-label">AHORRO ESTIMADO EN 25 AÑOS</span>
            <h3 className="res-big-number">{savings25.toLocaleString()} €</h3>
            <p className="res-sub">
              Ahorro anual directo: <strong className="purple">{annualSavings.toLocaleString()} € / año</strong>
            </p>
          </div>

          <div className="res-grid-metrics">
            <div className="m-box">
              <span className="m-title">Retorno Inversión (ROI)</span>
              <span className="m-val">{payback} Años</span>
            </div>
            <div className="m-box">
              <span className="m-title">Independencia Red</span>
              <span className="m-val purple">{independence}% Autoconsumo</span>
            </div>
            <div className="m-box">
              <span className="m-title">CO₂ Evitado</span>
              <span className="m-val">{co2} Ton / año</span>
            </div>
            <div className="m-box">
              <span className="m-title">Potencia Recomendada</span>
              <span className="m-val purple">{kWp} kWp</span>
            </div>
          </div>

          <div className="res-action">
            <button onClick={handleSendQuote} className="btn-cta primary-glow w-100">
              <span>Solicitar Estudio Fotovoltaico Detallado</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
