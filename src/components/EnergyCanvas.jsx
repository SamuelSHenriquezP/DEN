import React, { useEffect, useRef } from 'react';

export default function EnergyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    class EnergyParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 1;
        this.color = Math.random() > 0.4 ? '#00F0FF' : '#6D28D9';
        this.alpha = Math.random() * 0.35 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class ElectricSpark {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.targetX = x + (Math.random() - 0.5) * 80;
        this.targetY = y + (Math.random() - 0.5) * 80;
        this.life = 0.8;
        this.decay = Math.random() * 0.05 + 0.03;
      }

      update() {
        this.life -= this.decay;
      }

      draw() {
        if (this.life <= 0) return;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        const midX = (this.x + this.targetX) / 2 + (Math.random() - 0.5) * 15;
        const midY = (this.y + this.targetY) / 2 + (Math.random() - 0.5) * 15;
        ctx.lineTo(midX, midY);
        ctx.lineTo(this.targetX, this.targetY);
        ctx.strokeStyle = Math.random() > 0.5 ? '#00F0FF' : '#6D28D9';
        ctx.globalAlpha = this.life * 0.4;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#6D28D9';
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    const particleCount = 20;
    const particles = [];
    const sparks = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(new EnergyParticle());
    }

    const animateCanvas = () => {
      ctx.clearRect(0, 0, width, height);

      if (Math.random() < 0.015 && particles.length > 5) {
        const p1 = particles[Math.floor(Math.random() * particles.length)];
        sparks.push(new ElectricSpark(p1.x, p1.y));
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#6D28D9';
            ctx.globalAlpha = (1 - dist / 110) * 0.1;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        sparks[i].update();
        sparks[i].draw();
        if (sparks[i].life <= 0) sparks.splice(i, 1);
      }

      animationFrameId = requestAnimationFrame(animateCanvas);
    };

    animateCanvas();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas id="energy-canvas" ref={canvasRef} />
      <div className="noise-overlay" />
    </>
  );
}
