import React from 'react';

export default function Footer({ onOpenQuote }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="pie-pagina-principal">
      <div className="contenedor">
        <div className="rejilla-superior-pie">
          <div className="columna-pie footer-brand">
            <img src="/Logo DEN.png" alt="Dynamic Electric Natale Logo" className="logotipo-pie" />
            <p className="eslogan-pie">
              Dynamic Electric Natale (DEN) — Firma de ingeniería eléctrica, automatización residencial e instalaciones solares en la Comunidad de Madrid. Liderado por el <strong>Ingeniero Kerling Abraham Natale Hidalgo</strong>.
            </p>
            <div className="insignias-certificacion-pie">
              <span className="insignia-pie">REBT MADRID</span>
              <span className="insignia-pie">AUTOMATIZACIÓN</span>
              <span className="insignia-pie">BOLETÍN CIE</span>
            </div>
          </div>

          <div className="columna-pie">
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
                  Simulador de Luz
                </a>
              </li>
              <li>
                <a href="#cuadro-tecnico" onClick={(e) => scrollToSection(e, 'cuadro-tecnico')}>
                  Cuadro REBT
                </a>
              </li>
              <li>
                <a href="#proyectos" onClick={(e) => scrollToSection(e, 'proyectos')}>
                  Proyectos Reales
                </a>
              </li>
              <li>
                <a href="#calculadora" onClick={(e) => scrollToSection(e, 'calculadora')}>
                  Calculadora Solar
                </a>
              </li>
              <li>
                <a href="#sobre-mi" onClick={(e) => scrollToSection(e, 'sobre-mi')}>
                  Ing. Kerling Natale
                </a>
              </li>
            </ul>
          </div>

          <div className="columna-pie">
            <h4>ÁREAS DE COBERTURA</h4>
            <ul>
              <li><span>Guadarrama (Sede Central)</span></li>
              <li><span>Pozuelo de Alarcón</span></li>
              <li><span>La Moraleja & Alcobendas</span></li>
              <li><span>Las Rozas & Majadahonda</span></li>
              <li><span>Torrelodones & Galapagar</span></li>
              <li><span>Madrid Capital & Sierra</span></li>
            </ul>
          </div>

          <div className="columna-pie">
            <h4>CONTACTO TÉCNICO</h4>
            <ul>
              <li>
                <a href="tel:+34682178499" className="enlace-destacado-contacto">
                  📞 +34 682 17 84 99
                </a>
              </li>
              <li>
                <a href="mailto:den.informacion@gmail.com">
                  ✉️ den.informacion@gmail.com
                </a>
              </li>
              <li>
                <span className="horario-atencion">⏰ Lunes a Sábado: 08:00 - 20:00</span>
              </li>
              <li style={{ marginTop: '14px' }}>
                <button
                  onClick={onOpenQuote}
                  className="boton-cotizacion-rapida"
                  style={{ cursor: 'pointer' }}
                >
                  Solicitar Presupuesto
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="parte-inferior-pie">
          <p>© {new Date().getFullYear()} Dynamic Electric Natale (DEN). Todos los derechos reservados. Kerling Abraham Natale Hidalgo.</p>
          <div className="enlaces-redes-sociales">
            <a href="https://wa.me/34682178499" target="_blank" rel="noopener noreferrer">
              WhatsApp Directo
            </a>
            <a href="mailto:den.informacion@gmail.com">
              Correo Oficial
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
