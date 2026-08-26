import React, { useState } from 'react';

export default function SolarCalculator() {
  const [factura, setFactura] = useState(350);
  const [superficie, setSuperficie] = useState(60);
  const [tieneBateria, setTieneBateria] = useState(true);
  const [tieneCoche, setTieneCoche] = useState(false);

  let porcentajeAutoconsumo = 0.65;
  if (tieneBateria) porcentajeAutoconsumo += 0.20;
  if (tieneCoche) porcentajeAutoconsumo += 0.07;

  const ahorroAnual = Math.round(factura * 12 * porcentajeAutoconsumo);
  const ahorro25Anios = ahorroAnual * 25;

  const kwpRecomendados = (superficie * 0.18).toFixed(1);
  const costeEstimado = kwpRecomendados * 1100 + (tieneBateria ? 3600 : 0);
  const amortizacionAnios = (costeEstimado / (ahorroAnual || 1)).toFixed(1);

  const porcentajeIndependencia = Math.min(95, Math.round(porcentajeAutoconsumo * 100));
  const co2Evitado = (kwpRecomendados * 0.52).toFixed(1);

  const handleEnviarConsulta = () => {
    const texto = `Hola Kerling, he realizado el cálculo en el simulador de tu web DEN. Mi gasto eléctrico actual es de ${factura} €/mes con ${superficie} m² de tejado. El sistema me sugiere ${kwpRecomendados} kWp de potencia solar y un ahorro proyectado a 25 años de ${ahorro25Anios.toLocaleString('es-ES')} €. Me gustaría recibir un estudio oficial.`;
    window.open(`https://wa.me/34682178499?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <section id="calculadora" className="seccion-calculadora contenedor seccion-pantalla-completa">
      <div className="encabezado-seccion">
        <span className="insignia-seccion">
          <span className="codigo-indice">05 //</span> ANÁLISIS DE EFICIENCIA ENERGÉTICA
        </span>
        <h2 className="titulo-seccion">
          CALCULADORA DE <br />
          <span className="texto-gradiente-dorado">AHORRO SOLAR Y BATERÍAS</span>
        </h2>
        <p className="descripcion-seccion">
          Estima el rendimiento económico de tu tejado ajustando el consumo mensual y las opciones de almacenamiento en batería.
        </p>
      </div>

      <div className="caja-calculadora">
        <div className="controles-calculadora">
          <div className="campo-calculadora">
            <div className="encabezado-campo-calculadora">
              <label htmlFor="deslizador-factura">Factura Eléctrica Mensual Actual (€/mes)</label>
              <span className="valor-destacado-campo">{factura} € / mes</span>
            </div>
            <input
              type="range"
              id="deslizador-factura"
              min="100"
              max="2000"
              step="25"
              value={factura}
              onChange={(e) => setFactura(parseInt(e.target.value, 10))}
            />
          </div>

          <div className="campo-calculadora">
            <div className="encabezado-campo-calculadora">
              <label htmlFor="deslizador-superficie">Superficie Disponible en Tejado (m²)</label>
              <span className="valor-destacado-campo">{superficie} m²</span>
            </div>
            <input
              type="range"
              id="deslizador-superficie"
              min="20"
              max="300"
              step="5"
              value={superficie}
              onChange={(e) => setSuperficie(parseInt(e.target.value, 10))}
            />
          </div>

          <div className="opciones-casillas-calculadora">
            <label className="casilla-opcion-calculadora">
              <input
                type="checkbox"
                checked={tieneBateria}
                onChange={(e) => setTieneBateria(e.target.checked)}
              />
              <span className="caja-casilla"></span>
              <span>Incluir Batería de Litio LFP (+20% Autoconsumo Nocturno)</span>
            </label>

            <label className="casilla-opcion-calculadora">
              <input
                type="checkbox"
                checked={tieneCoche}
                onChange={(e) => setTieneCoche(e.target.checked)}
              />
              <span className="caja-casilla"></span>
              <span>Incluir Carga Directa para Vehículo Eléctrico</span>
            </label>
          </div>
        </div>

        {/* RESULTADOS DE LA CALCULADORA */}
        <div className="panel-resultados-calculadora">
          <div>
            <span className="etiqueta-resultado">AHORRO PROYECTADO A 25 AÑOS</span>
            <h3 className="gran-numero-resultado">{ahorro25Anios.toLocaleString('es-ES')} €</h3>
            <p className="subtitulo-resultado">
              Ahorro estimado directo: <strong style={{ color: 'var(--dorado-real)' }}>{ahorroAnual.toLocaleString('es-ES')} € / año</strong>
            </p>
          </div>

          <div className="rejilla-metricas-resultado">
            <div className="caja-metrica-mini">
              <span className="titulo-metrica-mini">Plazo Amortización</span>
              <span className="valor-metrica-mini">{amortizacionAnios} Años</span>
            </div>
            <div className="caja-metrica-mini">
              <span className="titulo-metrica-mini">Autoconsumo Directo</span>
              <span className="valor-metrica-mini">{porcentajeIndependencia}%</span>
            </div>
            <div className="caja-metrica-mini">
              <span className="titulo-metrica-mini">Emisiones Evitadas</span>
              <span className="valor-metrica-mini">{co2Evitado} Ton CO₂/año</span>
            </div>
            <div className="caja-metrica-mini">
              <span className="titulo-metrica-mini">Potencia Recomendada</span>
              <span className="valor-metrica-mini">{kwpRecomendados} kWp</span>
            </div>
          </div>

          <button onClick={handleEnviarConsulta} className="boton-accion dorado-principal ancho-completo">
            <span>Solicitar Estudio de Ingeniería Solar</span>
          </button>
        </div>
      </div>
    </section>
  );
}
