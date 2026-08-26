import React from 'react';

export default function Footer({ onOpenQuote }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid-top">
          <div className="footer-col footer-brand">
            <img src="/Logo DEN.png" alt="Dynamic Electric Natale Logo" className="footer-logo" />
            <p className="footer-tagline">
              Dynamic Electric Natale (DEN) — Firma de ingeniería eléctrica, domótica Loxone Partner y autoconsumo solar en la Comunidad de Madrid. Liderado por el <strong>Ing. Kerling Abraham Natale Hidalgo</strong>.
            </p>
            <div className="footer-cert-badges">
              <span className="f-badge">REBT ESPAÑA</span>
              <span className="f-badge loxone">LOXONE CERTIFIED</span>
              <span className="f-badge">CIE OFICIAL</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>NAVEGACIÓN</h4>
            <ul>
              <li>
                <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>
                  Soluciones Técnicas
                </a>
              </li>
              <li>
                <a href="#simulador" onClick={(e) => scrollToSection(e, 'simulador')}>
                  Simulador de Escenas
                </a>
              </li>
              <li>
                <a href="#proyectos" onClick={(e) => scrollToSection(e, 'proyectos')}>
                  Portafolio Pinned
                </a>
              </li>
              <li>
                <a href="#calculadora" onClick={(e) => scrollToSection(e, 'calculadora')}>
                  Calculadora Solar
                </a>
              </li>
              <li>
                <a href="#cuadro-tecnico" onClick={(e) => scrollToSection(e, 'cuadro-tecnico')}>
                  Inspector REBT
                </a>
              </li>
              <li>
                <a href="#sobre-mi" onClick={(e) => scrollToSection(e, 'sobre-mi')}>
                  Sobre Kerling Natale
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>COBERURA MADRID</h4>
            <ul>
              <li><span>Guadarrama (Sede Principal)</span></li>
              <li><span>Pozuelo de Alarcón</span></li>
              <li><span>La Moraleja & Alcobendas</span></li>
              <li><span>Las Rozas & Majadahonda</span></li>
              <li><span>Torrelodones & Galapagar</span></li>
              <li><span>Madrid Capital & Comunidad</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CONTACTO TÉCNICO</h4>
            <ul>
              <li>
                <a href="tel:+34682178499" className="highlight-link">
                  📞 +34 682 17 84 99
                </a>
              </li>
              <li>
                <a href="mailto:den.informacion@gmail.com">
                  ✉️ den.informacion@gmail.com
                </a>
              </li>
              <li>
                <span className="schedule">⏰ Lunes a Sábado: 08:00 - 20:00</span>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="btn-quick-quote"
                  style={{ marginTop: '10px', cursor: 'pointer' }}
                >
                  Cotización Online
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dynamic Electric Natale (DEN). Todos los derechos reservados. Kerling Abraham Natale Hidalgo.</p>
          <div className="social-links">
            <a href="https://wa.me/34682178499" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              WhatsApp Directo
            </a>
            <a href="mailto:den.informacion@gmail.com" aria-label="Email">
              Email Oficial
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
