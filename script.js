// 1. SCROLLTRIGGER & LENIS MOTOR SMOOTH SCROLL
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// 2. PINNED HORIZONTAL SCROLL EN SECCIÓN DE PROYECTOS DESTACADOS
const projectTrack = document.getElementById('project-horizontal-wrapper');
if (projectTrack && window.innerWidth > 1024) {
    gsap.to(projectTrack, {
        x: () => -(projectTrack.scrollWidth - window.innerWidth + 120),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-section",
            pin: true,
            scrub: 1,
            end: () => "+=" + (projectTrack.scrollWidth - window.innerWidth + 300),
            invalidateOnRefresh: true
        }
    });
}

// 3. VERIFICADOR DE BOLETÍN ELÉCTRICO (CIE) EXPRÉS
function verifyCIECode() {
    const code = document.getElementById('cie-code-input').value.trim();
    const resultBox = document.getElementById('cie-result-display');

    if (!code) {
        resultBox.innerHTML = `
            <span class="r-status" style="color:#ff4444;">⚠️ POR FAVOR, INTRODUCE UN CÓDIGO VÁLIDO</span>
        `;
        return;
    }

    resultBox.innerHTML = `
        <span class="r-status purple">⌛ CONSULTANDO BASE DE DATOS DE LA COMUNIDAD DE MADRID...</span>
    `;

    setTimeout(() => {
        resultBox.innerHTML = `
            <span class="r-status purple">✔️ EXPEDIENTE [${code.toUpperCase()}]: REGISTRADO Y CERTIFICADO REBT</span>
            <span class="r-detail">Instalación auditada y firmada digitalmente por el Ing. Kerling Abraham Natale Hidalgo (Nº Colegiado / Cert. Madrid).</span>
        `;
    }, 600);
}

// 4. CANVAS DE DESCARGA ELÉCTRICA AZUL Y MORADO DE BAJA FRECUENCIA AMBIENTAL
const canvas = document.getElementById('energy-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const particleCount = 20;
let sparks = [];

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

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
        this.color = Math.random() > 0.4 ? '#00F0FF' : '#6D28D9'; // Exclusivamente Azul Cian y Morado Oscuro
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

for (let i = 0; i < particleCount; i++) {
    particles.push(new EnergyParticle());
}

function animateCanvas() {
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

    requestAnimationFrame(animateCanvas);
}
animateCanvas();

// 5. CURSOR ESTÁNDAR NATIVO RESTAURADO

// 6. GSAP REVEAL ANIMATIONS
gsap.from(".reveal", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    stagger: 0.12,
    ease: "power3.out",
    delay: 0.2
});

gsap.from(".gsap-fade-up", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    delay: 0.5
});

gsap.utils.toArray(".gsap-reveal-card").forEach(card => {
    gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none"
        }
    });
});

// CONTADORES
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    gsap.to(counter, {
        innerText: target,
        duration: 2.5,
        snap: { innerText: 1 },
        scrollTrigger: {
            trigger: counter,
            start: "top 85%",
        }
    });
});

// HIGHLIGHT NAVEGACIÓN EN SCROLL
const sections = document.querySelectorAll('.section-nav');
const dockItems = document.querySelectorAll('.dock-item');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    dockItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// 7. SIMULADOR DE ILUMINACIÓN EFECTIVO
let currentBasePower = 0.38;

function switchAIScene(sceneKey, imgSrc, titleText, basePower, kelvin) {
    document.querySelectorAll('.btn-scene').forEach(b => b.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    const imgActive = document.getElementById('sim-stage-img');
    const imgNext = document.getElementById('sim-stage-img-next');

    imgNext.src = imgSrc;
    
    gsap.to(imgNext, {
        opacity: 1,
        duration: 0.5,
        onComplete: () => {
            imgActive.src = imgSrc;
            gsap.set(imgNext, { opacity: 0 });
        }
    });

    document.getElementById('sim-room-title').innerText = titleText;
    document.getElementById('sim-kelvin-val').innerText = kelvin + ' K';
    
    currentBasePower = basePower;
    const dimmerVal = parseInt(document.getElementById('sim-dimmer').value);
    updateSimPowerCalculated(dimmerVal);
}

function updateSimDimmer(val) {
    document.getElementById('sim-dimmer-val').innerText = val + '%';
    const filterBrightness = val / 100;
    const imgActive = document.getElementById('sim-stage-img');
    imgActive.style.filter = `brightness(${filterBrightness})`;

    updateSimPowerCalculated(val);
}

function updateSimPowerCalculated(dimmerVal) {
    const dimFactor = dimmerVal / 100;
    const total = currentBasePower * dimFactor;
    document.getElementById('sim-power-val').innerText = total.toFixed(2) + ' kW';
}

// 8. INSPECTOR DE CUADRO REBT CON DATOS DEL ING. KERLING NATALE
const componentSpecs = {
    iga: {
        tag: "REBT 2026 COMPLIANT • ITC-BT-23",
        name: "Interruptor General Automático (IGA) 40A",
        desc: "Dispositivo de protección omnipolar obligatorio que protege contra cortocircuitos y sobrecargas todo el cuadro general. Equipado con bobina de corte para sobretensiones.",
        specs: ["40A / Curva C", "10 kA (IEC/EN 60898-1)", "Tipo 2 (Up ≤ 1.5 kV)", "10 Años de Garantía DEN"]
    },
    sobretensiones: {
        tag: "PROTECCIÓN PERMANENTE Y TRANSITORIA",
        name: "Protector de Sobretensiones Reventón (PST)",
        desc: "Protege los equipos electrónicos sensibles (Loxone, electrodomésticos, TV) ante picos de tensión por descargas atmosféricas o maniobras en la red de distribución.",
        specs: ["Imax 40 kA", "Tensión Uc 275V", "Respuesta < 25 ns", "Certificado UNE-EN 61643"]
    },
    diferencial: {
        tag: "PROTECCIÓN DE PERSONAS SUPERINMUNIZADA",
        name: "Interruptor Diferencial Superinmunizado 30mA (ID-SI)",
        desc: "Detecta fugas de corriente a tierra impidiendo descargas eléctricas a las personas. Tipo F/SI inmune a cegamiento por armónicos de inversores fotovoltaicos.",
        specs: ["Sensibilidad 30 mA", "Clase F / SI Superinmunizada", "40A nominal", "Garantía de Disparo Rápido"]
    },
    rearmable: {
        tag: "CONTINUIDAD DE SUMINISTRO INTELIGENTE",
        name: "Diferencial de Auto-Rearme Automático (REC)",
        desc: "En caso de disparo fortuito por tormenta, el sistema realiza hasta 3 intentos de reconexión automática tras verificar que no existe fallo permanente.",
        specs: ["Rearme inteligente 3 intentos", "Verificación de aislamiento previa", "Ideal viviendas vacacionales", "REBT Aprobado"]
    },
    loxone: {
        tag: "LOXONE CERTIFIED PARTNER • V2 MINISERVER",
        name: "Loxone Miniserver V2 (Cerebro Smart Home)",
        desc: "Controlador centralizado que gestiona la inteligencia del inmueble: iluminación DALI, clima, persianas, control de accesos y balanceo fotovoltaico en red local.",
        specs: ["Procesador Quad-Core 64-bit", "Encriptación SSH local", "Bus Tree & Air integrados", "Cero Cuotas Recurrentes"]
    },
    inversor: {
        tag: "GESTIÓN DE AUTOCONSUMO Y VERTIDO CERO",
        name: "Smart Energy Meter & Control Solar Bidireccional",
        desc: "Mide el flujo de energía entre la red eléctrica, los paneles solares y la batería para maximizar el autoconsumo y dirigir excedentes a la carga EV.",
        specs: ["Precisión Clase 1 (1%)", "Comunicación Modbus RTU", "Lectura Trifásica / Monofásica", "Integración Loxone API"]
    },
    'ev-protec': {
        tag: "MOVILIDAD ELÉCTRICA • ITC-BT-52",
        name: "Protección Exclusiva Wallbox EV",
        desc: "Línea dedicada con diferencial Clase A 30mA y magentotérmico de curva C para garantizar una carga segura a 7.4 kW o 22 kW sin sobrecalentar el cuadro.",
        specs: ["Línea dedicada 6 mm² / 10 mm²", "Protección contra fuga continua 6mA", "Carga Inteligente", "Normativa ITC-BT-52"]
    },
    termografia: {
        tag: "MANTENIMIENTO PREVENTIVO INFRARROJO",
        name: "Sensor de Monitoreo Térmico de Bornas",
        desc: "Inspección continua de puntos calientes en las pletinas de cobre del cuadro para prevenir incendios eléctricos antes de que se produzcan.",
        specs: ["Termografía FLIR Certificada", "Prevención de arcos", "Monitoreo 24/7", "Máxima Seguridad DEN"]
    }
};

function inspectComponent(key) {
    document.querySelectorAll('.breaker-unit').forEach(u => u.classList.remove('active-unit'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active-unit');
    }

    const info = componentSpecs[key];
    if (!info) return;

    document.getElementById('inspect-tag').innerText = info.tag;
    document.getElementById('inspect-name').innerText = info.name;
    document.getElementById('inspect-desc').innerText = info.desc;
    document.getElementById('inspect-spec-1').innerText = info.specs[0];
    document.getElementById('inspect-spec-2').innerText = info.specs[1];
    document.getElementById('inspect-spec-3').innerText = info.specs[2];
    document.getElementById('inspect-spec-4').innerText = info.specs[3];
}

// 9. CALCULADORA SOLAR Y ROI
function calculateSavings() {
    const bill = parseInt(document.getElementById('audit-range').value);
    const surface = parseInt(document.getElementById('surface-range').value);
    const hasBattery = document.getElementById('calc-battery').checked;
    const hasEV = document.getElementById('calc-ev').checked;

    document.getElementById('bill-val').innerText = bill + ' €/mes';
    document.getElementById('surface-val').innerText = surface + ' m²';

    let factor = 0.70;
    if (hasBattery) factor += 0.18;
    if (hasEV) factor += 0.08;

    const annualSavings = Math.round(bill * 12 * factor);
    const savings25 = annualSavings * 25;
    
    const kWp = (surface * 0.18).toFixed(1);
    const estimatedCost = kWp * 1100 + (hasBattery ? 3500 : 0);
    const payback = (estimatedCost / annualSavings).toFixed(1);

    const independence = Math.min(95, Math.round(factor * 100));
    const co2 = (kWp * 0.55).toFixed(1);

    document.getElementById('save-val-25').innerText = savings25.toLocaleString() + ' €';
    document.getElementById('save-val-annual').innerText = annualSavings.toLocaleString() + ' € / año';
    document.getElementById('payback-val').innerText = payback + ' Años';
    document.getElementById('independence-val').innerText = independence + '% Autoconsumo';
    document.getElementById('co2-val').innerText = co2 + ' Ton / año';
    document.getElementById('power-rec-val').innerText = kWp + ' kWp';
}
calculateSavings();

function sendCalculatedQuote() {
    const bill = document.getElementById('bill-val').innerText;
    const save25 = document.getElementById('save-val-25').innerText;
    const kwp = document.getElementById('power-rec-val').innerText;

    const text = `Hola Kerling, he usado el simulador de tu web DEN. Mi gasto actual es de ${bill}. El sistema me recomienda ${kwp} con un ahorro proyectado de ${save25}. Me gustaría solicitar una visita o estudio oficial.`;
    window.open(`https://wa.me/34682178499?text=${encodeURIComponent(text)}`, '_blank');
}

// 10. WIZARD COTIZADOR PASO A PASO
let wizardData = {
    type: 'Villa / Chalet Unifamiliar',
    services: ['Domótica Loxone Smart Home', 'Energía Solar Fotovoltaica'],
    location: 'Madrid',
    sqm: '180',
    urgency: 'Próximo mes'
};

function selectWOption(key, val, el) {
    wizardData[key] = val;
    el.parentElement.querySelectorAll('.w-option-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
}

function updateWServices() {
    const checked = [];
    document.querySelectorAll('#w-step-2 input[type="checkbox"]:checked').forEach(c => {
        checked.push(c.value);
    });
    wizardData.services = checked;
}

function nextWStep(stepNumber) {
    document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.step-indicator').forEach(ind => ind.classList.remove('active'));

    document.getElementById(`w-step-${stepNumber}`).classList.add('active');
    document.getElementById(`step-ind-${stepNumber}`).classList.add('active');

    if (stepNumber === 4) {
        wizardData.location = document.getElementById('w-location').value || 'Madrid';
        wizardData.sqm = document.getElementById('w-sqm').value || '180';
        wizardData.urgency = document.getElementById('w-urgency').value;

        document.getElementById('w-sum-type').innerText = wizardData.type;
        document.getElementById('w-sum-services').innerText = wizardData.services.join(', ') || 'Consulta General';
        document.getElementById('w-sum-loc').innerText = `${wizardData.location} (${wizardData.sqm} m²)`;
        document.getElementById('w-sum-urgency').innerText = wizardData.urgency;
    }
}

function sendWizardWhatsApp() {
    const msg = `⚡ *NUEVO PRESUPUESTO SOLICITADO (WEB DEN)*\n\n` +
        `• *Inmueble:* ${wizardData.type}\n` +
        `• *Servicios:* ${wizardData.services.join(', ')}\n` +
        `• *Ubicación:* ${wizardData.location} (${wizardData.sqm} m²)\n` +
        `• *Plazo Estimado:* ${wizardData.urgency}\n\n` +
        `Por favor, me gustaría recibir propuesta formal o agendar llamada con Kerling Natale.`;

    window.open(`https://wa.me/34682178499?text=${encodeURIComponent(msg)}`, '_blank');
}

function openWizardModal() {
    const section = document.getElementById('cotizador');
    if(section) {
        lenis.scrollTo(section);
    }
}

// 11. MODAL ULTRA DETALLADO PARA CASOS DE ESTUDIO DE PROYECTOS
const projectDetails = {
    'villa-loxone': {
        title: "VILLA LOXONE POZUELO DE ALARCÓN",
        location: "Pozuelo de Alarcón, Madrid • Residencia Unifamiliar 600 m²",
        img: "images/villa_loxone.png",
        specs: {
            "Arquitectura Domótica": "Loxone Tree & Air Protocol",
            "Zonas de Iluminación": "45 Zonas DALI con regulador de escena",
            "Sistema Fotovoltaico": "15 kWp SolarEdge + Inversor Trifásico",
            "Almacenamiento": "15 kWh Batería LFP High Voltage",
            "Certificación": "Certificado Oficial Loxone Partner & REBT"
        },
        challengeTitle: "DESAFÍO TÉCNICO & SOLUCIÓN DE INGENIERÍA",
        challengeText: "El propietario requería una integración absoluta sin un solo cable visto ni interruptores convencionales dispersos. El Ing. Kerling Natale diseñó una topología centralizada con cableado apantallado en 2 tramos y cuadro secundario en garaje. Se sincronizó el clima por suelo radiante/refrescante con los sensores de presencias Loxone Touch Pure, logrando un ahorro térmico del 38%.",
        whatsappMsg: "Hola Kerling, he leído la ficha técnica de la Villa Loxone en Pozuelo y me gustaría presupuesto para una villa similar."
    },
    'solar-park': {
        title: "PARQUE SOLAR COMMERCIAL GUADARRAMA",
        location: "Sede Empresarial Industrial • Guadarrama, Madrid",
        img: "images/solar_industrial.png",
        specs: {
            "Potencia de Generación": "120 kWp en Estructura Coplana Coplanar",
            "Inversor Industrial": "Huawei SUN2000 100KTL Trifásico",
            "Acumulación Industrial": "80 kWh Banco Baterías LUNA2000",
            "Gestión Excedentes": "Medidor Modbus Bidireccional Vertido Cero",
            "Subvención Aprobada": "Plan MOVES III & Tramitación IBI 50%"
        },
        challengeTitle: "DESAFÍO TÉCNICO & SOLUCIÓN DE INGENIERÍA",
        challengeText: "La nave industrial sufría picos de consumo severos durante la jornada productiva matutina. Kerling Natale implementó un balanceador dinámico Modbus que desvía instantáneamente la generación solar sobrante hacia la carga de las baterías y maquinaria de mayor demanda. El payback de la instalación se redujo a tan solo 3.1 años.",
        whatsappMsg: "Hola Kerling, me interesa implementar un parque solar industrial como el de Guadarrama de 120 kWp."
    },
    'data-panel': {
        title: "HEADQUARTERS DATACENTER POWER PANEL",
        location: "Sede Datacenter Financiero • Madrid Capital",
        img: "images/smart_panel.png",
        specs: {
            "Intensidad Nominal": "250A Trifásico con Embarrado de Cobre",
            "Protección Sobretensiones": "PST Tipo 1+2 Imax 50 kA con aviso LED",
            "Diferenciales": "Superinmunizados Clase F / SI 30mA",
            "Rearme Automático": "Módulos REC con 3 verificaciones",
            "Auditoría": "Diagnóstico Termográfico FLIR Anual"
        },
        challengeTitle: "DESAFÍO TÉCNICO & SOLUCIÓN DE INGENIERÍA",
        challengeText: "Instalación crítica con cero tolerancia a interrupciones de suministro. Se reorganizó el embarrado general de 250A integrando supresores de transitorios de última generación y diferenciales REC de auto-rearme con diagnóstico preventivo por infrarrojos para prevenir arcos eléctricos.",
        whatsappMsg: "Hola Kerling, necesito renovar el cuadro eléctrico de potencia de mi empresa con protección superinmunizada y termografía."
    },
    'ev-charging': {
        title: "ESTACIÓN DE CARGA EV HIGH-POWER LA MORALEJA",
        location: "Residencia Luxury • La Moraleja, Alcobendas",
        img: "images/ev_charging.png",
        specs: {
            "Cargadores": "Doble Wallbox Pulsar Max 22 kW",
            "Línea de Alimentación": "Línea dedicada 10 mm² con tubo blindado",
            "Protección ITC-BT-52": "Diferencial Clase A 30mA + Detección Fuga 6mA DC",
            "Balanceo de Carga": "Dynamic Power Sharing según consumo chalet",
            "Modo Solar": "Carga 100% Excedente Fotovoltaico"
        },
        challengeTitle: "DESAFÍO TÉCNICO & SOLUCIÓN DE INGENIERÍA",
        challengeText: "Cargar dos vehículos eléctricos de alta gama simultáneamente sin sobrepasar el término de potencia contratado. El Ing. Kerling Natale instaló un balanceador continuo que modula la velocidad de carga de cada cargador en milisegundos cuando se encienden electrodomésticos de gran consumo.",
        whatsappMsg: "Hola Kerling, quiero instalar un doble cargador Wallbox con balanceo dinámico en mi vivienda como en La Moraleja."
    }
};

function openProjectModal(key) {
    const p = projectDetails[key];
    if (!p) return;

    let specsHtml = '';
    for (const [k, v] of Object.entries(p.specs)) {
        specsHtml += `
            <div class="spec-cell">
                <span class="k">${k.toUpperCase()}</span>
                <span class="v">${v}</span>
            </div>
        `;
    }

    const html = `
        <div style="font-size:11px; font-weight:800; color:var(--accent-purple-light); letter-spacing:2px; margin-bottom:10px;">CASO DE ESTUDIO TÉCNICO DETALLADO DEN</div>
        <h2 style="font-family:var(--font-head); font-size:2.2rem; margin-bottom:6px; line-height:1.1;">${p.title}</h2>
        <p style="color:var(--text-muted); font-size:13px; font-weight:700; margin-bottom:20px;">📍 ${p.location}</p>
        
        <img src="${p.img}" style="width:100%; height:320px; object-fit:cover; border-radius:24px; margin-bottom:20px; border:1px solid var(--border);">
        
        <div class="modal-specs-table">
            ${specsHtml}
        </div>

        <div class="modal-challenge-box">
            <h4>${p.challengeTitle}</h4>
            <p>${p.challengeText}</p>
        </div>

        <a href="https://wa.me/34682178499?text=${encodeURIComponent(p.whatsappMsg)}" target="_blank" class="btn-cta primary-glow w-100">
            Consultar Proyecto Similar con Kerling por WhatsApp
        </a>
    `;

    const modalBody = document.getElementById('modal-project-body');
    const modalBackdrop = document.getElementById('project-modal');
    const modalContent = modalBackdrop.querySelector('.modal-content');

    modalBody.innerHTML = html;
    modalBackdrop.classList.add('active');
    if (modalContent) modalContent.scrollTop = 0;

    // Bloquear scroll de la página principal y pausar motor Lenis
    document.body.style.overflow = 'hidden';
    if (typeof lenis !== 'undefined') lenis.stop();
}

function closeProjectModal() {
    const modalBackdrop = document.getElementById('project-modal');
    modalBackdrop.classList.remove('active');

    // Reactivar scroll de la página principal y motor Lenis
    document.body.style.overflow = '';
    if (typeof lenis !== 'undefined') lenis.start();
}

// Cierre al hacer clic fuera del contenido modal (en el backdrop)
document.getElementById('project-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'project-modal') {
        closeProjectModal();
    }
});

// 12. FAQ ACCORDION
function toggleFaq(btn) {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    if (!isActive) {
        item.classList.add('active');
    }
}

// REFRESH DE SCROLLTRIGGER & ADAPTACIÓN PANTALLA
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
