import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import './FooterPhysics.css';

const HEIGHT = 260;
const CURSOR_RADIUS = 150;
const REPEL_STRENGTH = 0.0022;

// Badge/icon chip drawn on canvas for each logo body — matches --surface / --border-strong.
function drawBody(ctx, body) {
  const { img, shape, size, w, h } = body.plugin;
  ctx.save();
  ctx.translate(body.position.x, body.position.y);
  ctx.rotate(body.angle);

  ctx.beginPath();
  if (shape === 'circle') {
    ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
  } else {
    ctx.roundRect(-size / 2, -size / 2, size, size, size * 0.22);
  }
  ctx.fillStyle = '#FFFFFE';
  ctx.fill();
  ctx.lineWidth = 1.25;
  ctx.strokeStyle = 'rgba(13, 13, 13, 0.14)';
  ctx.stroke();

  const iconSize = size * 0.52;
  const aspect = w / h || 1;
  const iconW = aspect >= 1 ? iconSize : iconSize * aspect;
  const iconH = aspect >= 1 ? iconSize / aspect : iconSize;
  ctx.drawImage(img, -iconW / 2, -iconH / 2, iconW, iconH);
  ctx.restore();
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

/**
 * A row of tool logos that drop in, settle under gravity, and scatter
 * away from the cursor on hover. Renders onto a canvas via matter-js;
 * no-ops (skips entirely) under prefers-reduced-motion.
 */
export default function FooterPhysics({ logos = [] }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || logos.length === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const { Engine, Render, Runner, Bodies, Composite, Body, Events, Common } =
      Matter;
    const dpr = window.devicePixelRatio || 1;

    let cancelled = false;
    let bodies = [];
    let walls = [];
    let engine;
    let render;
    let runner;
    let width = 0;

    const buildWalls = (w) => {
      if (walls.length) Composite.remove(engine.world, walls);
      const wall = { isStatic: true, render: { visible: false } };
      walls = [
        Bodies.rectangle(w / 2, HEIGHT + 100, w + 400, 200, wall),
        Bodies.rectangle(w / 2, -(HEIGHT + 100), w + 400, 200, wall),
        Bodies.rectangle(-100, HEIGHT / 2, 200, HEIGHT + 400, wall),
        Bodies.rectangle(w + 100, HEIGHT / 2, 200, HEIGHT + 400, wall),
      ];
      Composite.add(engine.world, walls);
    };

    const makeBody = (logo, img, w) => {
      const size = logo.size || 46;
      const aspect = img.naturalWidth && img.naturalHeight
        ? img.naturalWidth / img.naturalHeight
        : 1;
      const x = Common.random(size, Math.max(size + 1, w - size));
      const y = Common.random(-80, 20);
      const options = {
        restitution: 0.35,
        friction: 0.1,
        frictionStatic: 0.5,
        frictionAir: 0.01,
        render: { visible: false },
      };
      const body = logo.shape === 'circle'
        ? Bodies.circle(x, y, size / 2, options)
        : Bodies.rectangle(x, y, size, size, {
            ...options,
            chamfer: { radius: size * 0.22 },
          });
      body.plugin = { img, shape: logo.shape || 'square', size, w: img.naturalWidth || 1, h: img.naturalHeight || 1 };
      Body.setAngle(body, Common.random(-0.4, 0.4));
      return body;
    };

    const start = (initialWidth) => {
      width = initialWidth;
      engine = Engine.create();
      engine.gravity.y = 0.9;
      engine.positionIterations = 8;
      engine.velocityIterations = 8;

      render = Render.create({
        element: container,
        engine,
        options: {
          width,
          height: HEIGHT,
          background: 'transparent',
          wireframes: false,
          pixelRatio: dpr,
        },
      });

      buildWalls(width);

      logos.forEach((logo) => {
        loadImage(logo.url)
          .then((img) => {
            if (cancelled) return;
            const count = Math.min(6, Math.max(1, Math.round(logo.count) || 1));
            const created = Array.from({ length: count }, () => makeBody(logo, img, width));
            bodies.push(...created);
            Composite.add(engine.world, created);
          })
          .catch(() => {});
      });

      const draw = () => {
        const ctx = render.context;
        for (const body of bodies) drawBody(ctx, body);
      };
      Events.on(render, 'afterRender', draw);

      const cursor = { x: 0, y: 0, active: false };
      const onPointerMove = (e) => {
        const rect = container.getBoundingClientRect();
        cursor.x = e.clientX - rect.left;
        cursor.y = e.clientY - rect.top;
        cursor.active = true;
      };
      const onPointerLeave = () => {
        cursor.active = false;
      };
      container.addEventListener('pointermove', onPointerMove);
      container.addEventListener('pointerleave', onPointerLeave);

      const repel = () => {
        if (!cursor.active) return;
        for (const body of bodies) {
          const dx = body.position.x - cursor.x;
          const dy = body.position.y - cursor.y;
          const dist = Math.hypot(dx, dy) || 0.0001;
          if (dist >= CURSOR_RADIUS) continue;
          const falloff = 1 - dist / CURSOR_RADIUS;
          const magnitude = REPEL_STRENGTH * body.mass * falloff;
          Body.applyForce(body, body.position, {
            x: (dx / dist) * magnitude,
            y: (dy / dist) * magnitude,
          });
        }
      };
      Events.on(engine, 'beforeUpdate', repel);

      runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      return () => {
        container.removeEventListener('pointermove', onPointerMove);
        container.removeEventListener('pointerleave', onPointerLeave);
        Events.off(render, 'afterRender', draw);
        Events.off(engine, 'beforeUpdate', repel);
        Render.stop(render);
        Runner.stop(runner);
        Composite.clear(engine.world, false);
        Engine.clear(engine);
        render.canvas.remove();
      };
    };

    let stop = null;
    let started = false;

    const resize = (w) => {
      if (w <= 0 || w === width) return;
      width = w;
      render.canvas.width = width * dpr;
      render.canvas.height = HEIGHT * dpr;
      render.canvas.style.width = `${width}px`;
      render.canvas.style.height = `${HEIGHT}px`;
      render.options.width = width;
      render.bounds.max.x = width;
      buildWalls(width);
    };

    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      if (!started) {
        if (w > 0) {
          started = true;
          stop = start(w);
        }
      } else {
        resize(w);
      }
    });
    ro.observe(container);

    const initialWidth = container.clientWidth;
    if (initialWidth > 0) {
      started = true;
      stop = start(initialWidth);
    }

    return () => {
      cancelled = true;
      ro.disconnect();
      stop?.();
    };
  }, [logos]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="footer-physics"
      style={{ height: logos.length ? HEIGHT : 0 }}
    />
  );
}
