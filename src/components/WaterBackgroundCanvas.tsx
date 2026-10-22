import React, { useEffect, useRef } from 'react';

export const WaterBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    interface Ripple {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
      color: string;
    }

    const ripples: Ripple[] = [];

    const handlePointerDown = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 8,
        alpha: 0.5,
        speed: 3.5,
        color: Math.random() > 0.5 ? '#00C4DF' : '#7C3AED'
      });
    };
    window.addEventListener('pointerdown', handlePointerDown);

    let time = 0;

    const render = () => {
      time += 0.012;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Base pure white/soft slate-50
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      // Soft luminous azure gradient top-left
      const grad1 = ctx.createRadialGradient(
        width * 0.15 + Math.sin(time * 0.4) * 60,
        height * 0.2 + Math.cos(time * 0.3) * 50,
        30,
        width * 0.15,
        height * 0.2,
        width * 0.5
      );
      grad1.addColorStop(0, 'rgba(0, 196, 223, 0.07)');
      grad1.addColorStop(0.6, 'rgba(14, 165, 233, 0.02)');
      grad1.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Soft lilac/violet gradient bottom-right
      const grad2 = ctx.createRadialGradient(
        width * 0.85 + Math.cos(time * 0.5) * 70,
        height * 0.8 + Math.sin(time * 0.4) * 50,
        30,
        width * 0.85,
        height * 0.8,
        width * 0.55
      );
      grad2.addColorStop(0, 'rgba(147, 51, 234, 0.06)');
      grad2.addColorStop(0.6, 'rgba(124, 58, 237, 0.02)');
      grad2.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Interactive cursor soft light
      const cursorGrad = ctx.createRadialGradient(
        mouse.x, mouse.y, 5,
        mouse.x, mouse.y, 220
      );
      cursorGrad.addColorStop(0, 'rgba(0, 196, 223, 0.08)');
      cursorGrad.addColorStop(0.5, 'rgba(147, 51, 234, 0.03)');
      cursorGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = cursorGrad;
      ctx.fillRect(0, 0, width, height);

      // Render subtle crystal water ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha -= 0.009;

        if (r.alpha <= 0 || r.radius > 300) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.color;
        ctx.globalAlpha = Math.max(r.alpha, 0);
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      style={{ opacity: 1 }}
    />
  );
};
export default WaterBackgroundCanvas;
