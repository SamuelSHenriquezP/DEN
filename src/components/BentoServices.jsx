import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BentoServices() {
  useEffect(() => {
    gsap.utils.toArray('#servicios .gsap-reveal-card').forEach((card) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return (
    <section id="servicios" className="bento-section container section-nav full-screen-section">
      <div className="section-header gsap-fade-up">
        <span className="section-badge">
          <span className="code-tag">01 //</span> BLUEPRINT TÉCNICO & EXPERTISE
        </span>
        <h2 className="section-title">
          SOLUCIONES DE <br />
          <span className="accent-text">ALTA INGENIERÍA</span>
        </h2>
        <p className="section-desc">
          Diseño, ejecución y certificación de infraestructuras eléctricas modernas por el Ingeniero Kerling Natale. Integramos tecnología limpia y máxima seguridad.
        </p>
      </div>

      <div className="bento-grid">
        {/* CARD 1: FOTOVOLTAICA (LARGE) */}
        <div className="bento-card large gsap-reveal-card">
          <img src="/images/solar_industrial.png" alt="Instalación Solar Fotovoltaica en Madrid" className="card-bg" />
          <div className="card-overlay"></div>
          <div className="card-badge">FOTOVOLTAICA PREMIUM</div>
          <h3>Sistemas Solar & Baterías Inteligentes</h3>
          <p>Autoconsumo fotovoltaico de alta densidad con microinversores, baterías LFP de almacenamiento y vertido cero optimizado.</p>
          <div className="card-tags">
            <span className="tag">Huawei / SolarEdge</span>
            <span className="tag">Baterías LFP</span>
            <span className="tag">Legalización Subvención</span>
          </div>
          <div className="card-glow"></div>
        </div>

        {/* CARD 2: LOXONE DOMÓTICA */}
        <div className="bento-card loxone-theme gsap-reveal-card">
          <div className="card-badge loxone-badge">LOXONE CERTIFIED</div>
          <h3>Domótica & Smart Home</h3>
          <p>Automatización integral para villas y hogares. Control de iluminación DALI, persianas, clima y escenas.</p>
          <div className="card-tags">
            <span className="tag">Miniserver V2</span>
            <span className="tag">Control DALI / Tree</span>
            <span className="tag">KNX Integration</span>
          </div>
          <div className="card-glow"></div>
        </div>

        {/* CARD 3: CUADROS Y REBT */}
        <div className="bento-card gsap-reveal-card">
          <div className="card-badge">INGENIERÍA ELÉCTRICA</div>
          <h3>Cuadros Eléctricos & REBT</h3>
          <p>Diseño y montaje de cuadros de protección de alta fidelidad, sobretensiones, diferencial superinmunizado y termografía.</p>
          <div className="card-tags">
            <span className="tag">Norma UNE</span>
            <span className="tag">Termografía Infrarroja</span>
          </div>
          <div className="card-glow"></div>
        </div>

        {/* CARD 4: EV CHARGERS (WIDE) */}
        <div className="bento-card wide gsap-reveal-card">
          <img src="/images/ev_charging.png" alt="Instalación Cargador Vehículo Eléctrico Wallbox" className="card-bg" />
          <div className="card-overlay"></div>
          <div className="card-badge">MOVILIDAD ELÉCTRICA</div>
          <h3>Puntos de Carga EV & Wallbox Inteligente</h3>
          <p>Instalación de cargadores de vehículo eléctrico con balanceo dinámico de potencia según el consumo de la vivienda y excedente solar.</p>
          <div className="card-tags">
            <span className="tag">Balanceo Dinámico</span>
            <span className="tag">Plan MOVES III</span>
            <span className="tag">Carga Solar Directa</span>
          </div>
          <div className="card-glow"></div>
        </div>

        {/* CARD 5: BOLETINES & AUDITORÍAS */}
        <div className="bento-card gsap-reveal-card">
          <img src="/images/thermal_inspection.png" alt="Inspección Termográfica Cuadro Eléctrico" className="card-bg" />
          <div className="card-overlay"></div>
          <div className="card-badge">LEGALIZACIÓN & TERMOGRAFÍA</div>
          <h3>Boletines Eléctricos (CIE) & Auditorías</h3>
          <p>Emisión urgente de certificados oficiales y diagnóstico infrarrojo preventivo para prevenir fallos y sobrecalentamientos.</p>
          <div className="card-tags">
            <span className="tag">Comunidad de Madrid</span>
            <span className="tag">Cámara Térmica FLIR</span>
          </div>
          <div className="card-glow"></div>
        </div>

        {/* CARD 6: TELECO & AUDIO MULTIROOM */}
        <div className="bento-card gsap-reveal-card">
          <div className="card-badge">TELECOMUNICACIONES</div>
          <h3>Redes de Datos & Audio Hi-Fi</h3>
          <p>Cableado estructurado Cat6A/7, puntos de acceso Wi-Fi 6 de alta cobertura y sistemas de sonido invisibles multiroom.</p>
          <div className="card-tags">
            <span className="tag">Wi-Fi 6 / Fibra</span>
            <span className="tag">Audio AirPlay 2</span>
          </div>
          <div className="card-glow"></div>
        </div>
      </div>
    </section>
  );
}
