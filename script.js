// 1. REGISTRO DE PLUGINS PRIMERO
gsap.registerPlugin(ScrollTrigger);

// 2. INICIALIZACIÓN DE LENIS (Motor de Scroll Suave)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
});

// Sincronizar Lenis con GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

// Loop de animación sincronizado con GSAP
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// 3. CURSOR PERSONALIZADO (Solo Desktop)
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

if(window.matchMedia("(hover: hover)").matches) {
    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
        gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.15 });
    });
}

// 4. REVELACIÓN HERO
gsap.from(".reveal", { 
    y: 100, 
    opacity: 0, 
    duration: 1.2, 
    stagger: 0.1, 
    ease: "power4.out",
    delay: 0.5 
});

// 5. SCROLL HORIZONTAL (PROYECTOS)
let mm = gsap.matchMedia();
mm.add("(min-width: 1025px)", () => {
    const wrapper = document.querySelector(".horizontal-wrapper");
    const section = document.querySelector(".horizontal-section");
    
    gsap.to(wrapper, {
        x: () => -(wrapper.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => "+=" + wrapper.scrollWidth,
            invalidateOnRefresh: true,
        }
    });
});

// 6. CONTADORES ANIMADOS
gsap.utils.toArray(".counter").forEach(counter => {
    gsap.from(counter, {
        innerText: 0,
        duration: 2.5,
        snap: { innerText: 1 },
        scrollTrigger: { 
            trigger: counter, 
            start: "top 90%",
        }
    });
});

// 7. LÓGICA DE AUDITORÍA
const range = document.getElementById("audit-range");
if(range) {
    range.addEventListener("input", (e) => {
        const val = parseInt(e.target.value);
        document.getElementById("bill-val").innerText = val + "€";
        const save = Math.round(val * 0.85 * 12);
        document.getElementById("save-val").innerText = save.toLocaleString() + "€";
    });
}

// 8. EFECTO TILT (INCLINACIÓN MEJORADA 3D)
document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const isLarge = card.classList.contains('large') || card.classList.contains('wide');
        const divisor = isLarge ? 50 : 25;
        const rotateX = (y - centerY) / divisor; 
        const rotateY = (centerX - x) / divisor;

        // Variables para el brillo interior (card-glow)
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            scale: 1.01,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 1000
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotationX: 0, rotationY: 0, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)" });
    });
});

// 9. HEADER DINÁMICO (MOSTRAR/OCULTAR AL SCROLLEAR)
// El header ahora es estático (siempre visible)

// 10. REFRESH DE SCROLLTRIGGER AL CARGAR
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
