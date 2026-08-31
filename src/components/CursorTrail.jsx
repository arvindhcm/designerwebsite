import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './CursorTrail.css';

const DEFAULT_ICONS = [
   { shape: 'triangle', color: '#3ED598' },
    { shape: 'circle',   color: '#F4585B' },
    { shape: 'cross',    color: '#5B8DEF' },
    { shape: 'square',   color: '#F177DD' },
];

// Single knob for cursor effect density: 1 = original spawn rate, lower = fewer spawns.
const TRAIL_DENSITY = 0.2;
// Max particles alive on screen at once, independent of spawn rate.
const MAX_PARTICLES = 20;

const SPAWN_SPACING = 5 / TRAIL_DENSITY;
const MAX_SPAWN_STEPS = Math.max(1, Math.round(5 * TRAIL_DENSITY));

function drawIcon(ctx, p, alpha) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.angle);
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = p.color;
  ctx.shadowColor = p.color;
  ctx.shadowBlur = 8;
  ctx.lineWidth = Math.max(p.size * 0.16, 1.4);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const s = p.size;
  ctx.beginPath();
  if (p.shape === 'triangle') {
    const r = s * 1.15;
    for (let i = 0; i < 3; i++) {
      const a = -Math.PI / 2 + (i * Math.PI * 2) / 3;
      const px = Math.cos(a) * r;
      const py = Math.sin(a) * r;
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
  } else if (p.shape === 'circle') {
    ctx.arc(0, 0, s * 0.85, 0, Math.PI * 2);
  } else if (p.shape === 'cross') {
    const a = s * 0.75;
    ctx.moveTo(-a, -a);
    ctx.lineTo(a, a);
    ctx.moveTo(-a, a);
    ctx.lineTo(a, -a);
  } else if (p.shape === 'square') {
    const a = s * 0.8;
    ctx.rect(-a, -a, a * 2, a * 2);
  }
  ctx.stroke();
  ctx.restore();
}

/** Renders a canvas-based particle trail that follows the pointer, replacing the native cursor. */
export default function CursorTrail({ icons = DEFAULT_ICONS }) {
  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const bubbleRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    bubbleRef.current?.classList.remove('cursor-trail-bubble--visible');
    dotRef.current?.classList.remove('cursor-trail-dot--hidden');
  }, [location.pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const dot = dotRef.current;
    const bubble = bubbleRef.current;
    if (!canvas || !dot || !bubble) return;

    document.body.classList.add('cursor-trail-active');

    const ctx = canvas.getContext('2d');
    let width, height, dpr;
    let rafId;
    let lastSpawn = { x: null, y: null };
    const particles = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn(x, y) {
      const icon = icons[(Math.random() * icons.length) | 0];
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1 - 0.2,
        size: Math.random() * 3 + 8,
        life: 0,
        maxLife: Math.random() * 300 + 650,
        shape: icon.shape,
        color: icon.color,
        spin: (Math.random() - 0.5) * 0.12,
        angle: Math.random() * Math.PI * 2,
      });
      if (particles.length > MAX_PARTICLES) {
        particles.splice(0, particles.length - MAX_PARTICLES);
      }
    }

    let last = performance.now();
    function tick(now) {
      const dt = Math.min(now - last, 48);
      last = now;
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16);
        p.vy += 0.0025 * dt;
        p.angle += p.spin * (dt / 16);

        const t = p.life / p.maxLife;
        const alpha = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;
        drawIcon(ctx, p, Math.max(alpha, 0));
      }

      rafId = requestAnimationFrame(tick);
    }

    function onMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      bubble.style.transform = `translate(${x + 14}px, ${y + 18}px)`;

      if (lastSpawn.x === null) {
        spawn(x, y);
        lastSpawn = { x, y };
        return;
      }

      const dx = x - lastSpawn.x;
      const dy = y - lastSpawn.y;
      const dist = Math.hypot(dx, dy);
      if (dist < SPAWN_SPACING) return;

      const steps = Math.min(Math.floor(dist / SPAWN_SPACING), MAX_SPAWN_STEPS);
      for (let i = 1; i <= steps; i++) {
        spawn(lastSpawn.x + (dx * i) / steps, lastSpawn.y + (dy * i) / steps);
      }
      lastSpawn = { x, y };
    }

    function onOver(e) {
      const target = e.target.closest('[data-cursor-label]');
      if (!target) return;
      bubble.textContent = target.dataset.cursorLabel;
      bubble.classList.add('cursor-trail-bubble--visible');
      dot.classList.add('cursor-trail-dot--hidden');
    }

    function onOut(e) {
      const target = e.target.closest('[data-cursor-label]');
      if (!target) return;
      if (target.contains(e.relatedTarget)) return;
      bubble.classList.remove('cursor-trail-bubble--visible');
      dot.classList.remove('cursor-trail-dot--hidden');
    }

    resize();
    rafId = requestAnimationFrame(tick);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);

    return () => {
      document.body.classList.remove('cursor-trail-active');
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
    };
  }, [icons]);

  return (
    <>
      <canvas ref={canvasRef} className="cursor-trail-canvas" />
      <div ref={dotRef} className="cursor-trail-dot" />
      <div ref={bubbleRef} className="cursor-trail-bubble" />
    </>
  );
}
