import React, { useEffect, useRef } from 'react';

export default function EnergyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particulas = [];
    const numParticulas = Math.min(35, Math.floor(width / 35));

    const coloresLogo = ['#FFE600', '#00E5FF', '#0052FF'];

    for (let i = 0; i < numParticulas; i++) {
      particulas.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2,
        color: coloresLogo[Math.floor(Math.random() * coloresLogo.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // DIBUJAR CONEXIONES ELÉCTRICAS SUTILES CON COLORES DE MARCA
      for (let i = 0; i < particulas.length; i++) {
        for (let j = i + 1; j < particulas.length; j++) {
          const dx = particulas[i].x - particulas[j].x;
          const dy = particulas[i].y - particulas[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particulas[i].x, particulas[i].y);
            ctx.lineTo(particulas[j].x, particulas[j].y);
            ctx.strokeStyle = `rgba(255, 230, 0, ${0.14 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // DIBUJAR PARTÍCULAS
      particulas.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <canvas id="canvas-ambiente-electrico" ref={canvasRef} />
      <div className="capa-textura-suave" />
    </>
  );
}
