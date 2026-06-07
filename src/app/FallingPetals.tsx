"use client";

import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  speedX: number;
  speedY: number;
  opacity: number;
  wobblePhase: number;
  wobbleSpeed: number;
}

export default function FallingPetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let petals: Petal[] = [];
    const PETAL_COUNT = 18;

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }

    function createPetal(startFromTop = false): Petal {
      return {
        x: Math.random() * (canvas?.width ?? 800),
        y: startFromTop
          ? -20 - Math.random() * 60
          : Math.random() * (canvas?.height ?? 600),
        size: 8 + Math.random() * 10,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.008,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: 0.2 + Math.random() * 0.35,
        opacity: 0.12 + Math.random() * 0.18,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.003 + Math.random() * 0.006,
      };
    }

    function drawPetal(ctx: CanvasRenderingContext2D, p: Petal) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;

      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(
        p.size * 0.6,
        -p.size * 0.6,
        p.size * 0.5,
        p.size * 0.3,
        0,
        p.size
      );
      ctx.bezierCurveTo(
        -p.size * 0.5,
        p.size * 0.3,
        -p.size * 0.6,
        -p.size * 0.6,
        0,
        -p.size
      );
      ctx.closePath();

      ctx.fillStyle = "#3a7a52";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.7);
      ctx.quadraticCurveTo(p.size * 0.06, 0, 0, p.size * 0.8);
      ctx.strokeStyle = "rgba(45, 90, 61, 0.3)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.restore();
    }

    function update() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of petals) {
        p.wobblePhase += p.wobbleSpeed;
        p.x += p.speedX + Math.sin(p.wobblePhase) * 0.3;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 30) {
          Object.assign(p, createPetal(true));
        }
        if (p.x < -30) p.x = canvas.width + 20;
        if (p.x > canvas.width + 30) p.x = -20;

        drawPetal(ctx, p);
      }

      animationId = requestAnimationFrame(update);
    }

    resize();
    petals = Array.from({ length: PETAL_COUNT }, () => createPetal(false));
    update();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1]"
    />
  );
}
