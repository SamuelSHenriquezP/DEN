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

    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const particulas = [];
    const numParticulas = Math.min(45, Math.floor(width / 30));
    const coloresLogo = ['#FFE600', '#00E5FF', '#0052FF', '#FFE600'];

    for (let i = 0; i < numParticulas; i++) {
      particulas.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        alpha: Math.random() * 0.5 + 0.25,
        color: coloresLogo[Math.floor(Math.random() * coloresLogo.length)],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let pulseTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pulseTime += 0.03;

      // CONEXIONES ELÉCTRICAS SUTILES Y PULSOS DE CORRIENTE
      for (let i = 0; i < particulas.length; i++) {
        for (let j = i + 1; j < particulas.length; j++) {
          const dx = particulas[i].x - particulas[j].x;
          const dy = particulas[i].y - particulas[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const factorDistancia = 1 - dist / 150;
            ctx.beginPath();
            ctx.moveTo(particulas[i].x, particulas[i].y);
            ctx.lineTo(particulas[j].x, particulas[j].y);

            // Gradiente de línea entre nodos
            const grad = ctx.createLinearGradient(
              particulas[i].x,
              particulas[i].y,
              particulas[j].x,
              particulas[j].y
            );
            grad.addColorStop(0, `rgba(255, 230, 0, ${0.15 * factorDistancia})`);
            grad.addColorStop(1, `rgba(0, 229, 255, ${0.12 * factorDistancia})`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.7 * factorDistancia;
            ctx.stroke();

            // Destello viajero simulando corriente eléctrica
            if (dist > 50 && dist < 120 && Math.sin(pulseTime + i) > 0.94) {
              const posProgress = (Math.sin(pulseTime * 2 + i) + 1) / 2;
              const px = particulas[i].x + (particulas[j].x - particulas[i].x) * posProgress;
              const py = particulas[i].y + (particulas[j].y - particulas[i].y) * posProgress;

              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = '#FFE600';
              ctx.shadowBlur = 10;
              ctx.shadowColor = '#FFE600';
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      // DIBUJAR PARTÍCULAS REACTIVAS AL RATÓN
      particulas.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.04;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Atracción suave si el ratón está cerca
        if (mouse.active) {
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 180) {
            p.x += (mdx / mdist) * 0.35;
            p.y += (mdy / mdist) * 0.35;
          }
        }

        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
