import React, { useState } from 'react';

const scenes = {
  relax: {
    key: 'relax',
    img: '/images/sim_relax.png',
    title: 'ESCENA: CÁLIDO RELAX (2200K) — AMBIENTE ATARDECER',
    basePower: 0.38,
    kelvin: 2200,
    icon: '🌅',
    label: 'Cálido Relax (2200K)',
    sub: 'Luz cálida indirecta para descanso',
  },
  focus: {
    key: 'focus',
    img: '/images/sim_focus.png',
    title: 'ESCENA: LECTURA FOCUS (4000K) — LUZ DÍA PURA',
    basePower: 0.65,
    kelvin: 4000,
    icon: '💡',
    label: 'Modo Lectura Focus (4000K)',
    sub: 'Iluminación nítida de trabajo',
  },
  neon: {
    key: 'neon',
    img: '/images/sim_neon.png',
    title: 'ESCENA: CINE CYBER NEON (6500K) — RESPLANDOR NEÓN',
    basePower: 0.82,
    kelvin: 6500,
    icon: '🌐',
    label: 'Cine Cyber Neon (6500K)',
    sub: 'Acento azul neón y cine nocturno',
  },
  ausencia: {
    key: 'ausencia',
    img: '/images/sim_ausencia.png',
    title: 'ESCENA: MODO AUSENCIA GUARD — SEGURIDAD NOCTURNA',
    basePower: 0.12,
    kelvin: 1800,
    icon: '🔒',
    label: 'Modo Ausencia Guard',
    sub: 'Seguridad pasiva y leds violetas',
  },
};

export default function AISimulator() {
  const [activeSceneKey, setActiveSceneKey] = useState('relax');
  const [dimmerVal, setDimmerVal] = useState(100);

  const activeScene = scenes[activeSceneKey];
  const calculatedPower = (activeScene.basePower * (dimmerVal / 100)).toFixed(2);
  const filterBrightness = dimmerVal / 100;

  const handleSceneChange = (key) => {
    setActiveSceneKey(key);
  };

  return (
    <section id="simulador" className="simulator-section container section-nav full-screen-section">
      <div className="section-header gsap-fade-up">
        <span className="section-badge loxone-badge">
          <span className="code-tag">02 //</span> ILUMINACIÓN IA REAL
        </span>
        <h2 className="section-title">
          SIMULADOR DE <br />
          <span className="accent-purple">ESCENAS DE LUZ</span>
        </h2>
        <p className="section-desc">
          Cada botón cambia la imagen de la estancia mostrando la transformación atmosférica real programada por el <strong>Ingeniero Kerling Natale</strong>.
        </p>
      </div>

      <div className="simulator-box gsap-fade-up">
        <div className="sim-workspace">
          {/* STAGE PREVIEW CON TRANSICIÓN FOTOGRÁFICA */}
          <div className="sim-stage" id="sim-stage">
            <img
              src={activeScene.img}
              alt={activeScene.title}
              className="stage-img sim-active-img"
              style={{ filter: `brightness(${filterBrightness})` }}
            />

            <div className="sim-live-badge">
              <span className="live-dot"></span>
              <span>{activeScene.title}</span>
            </div>

            <div className="sim-telemetry-overlay">
              <div className="sim-stat">
                <span className="lbl">Consumo Instantáneo</span>
                <span className="val">{calculatedPower} kW</span>
              </div>
              <div className="sim-stat">
                <span className="lbl">Temperatura Color</span>
                <span className="val purple">{activeScene.kelvin} K</span>
              </div>
              <div className="sim-stat">
                <span className="lbl">Excedente Solar</span>
                <span className="val">+2.80 kW</span>
              </div>
            </div>
          </div>

          {/* PANEL DE CONTROLES REALES DE ILUMINACIÓN */}
          <div className="sim-controls">
            <h4 className="sim-control-title">Selecciona Escena de Iluminación Inteligente</h4>

            <div className="scene-buttons">
              {Object.values(scenes).map((scene) => (
                <button
                  key={scene.key}
                  className={`btn-scene ${activeSceneKey === scene.key ? 'active' : ''}`}
                  onClick={() => handleSceneChange(scene.key)}
                >
                  <span className="scene-icon">{scene.icon}</span>
                  <div>
                    <strong>{scene.label}</strong>
                    <p className="scene-sub">{scene.sub}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* SLIDER DE REGULACIÓN DALI */}
            <div className="sim-sliders-group">
              <div className="sim-slider-row">
                <label htmlFor="sim-dimmer">
                  Regulación DALI de Intensidad (<span>{dimmerVal}%</span>)
                </label>
                <input
                  type="range"
                  id="sim-dimmer"
                  min="20"
                  max="100"
                  value={dimmerVal}
                  onChange={(e) => setDimmerVal(parseInt(e.target.value))}
                />
              </div>
            </div>

            <div className="sim-info-note">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>Cada escena física modifica la imagen ajustando la temperatura K y el consumo energético en tiempo real.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
