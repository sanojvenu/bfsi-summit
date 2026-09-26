"use client";

import { useEffect, useRef } from "react";

interface NetworkGraphProps {
  className?: string;
  nodeCount?: number;
  color?: string;
}

export function NetworkGraph({
  className = "",
  nodeCount = 50,
  color = "rgba(212,165,75,",
}: NetworkGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    interface Node {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
    }

    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const connectionDist = 140;
    const mouseDist = 180;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update positions
      for (const node of nodes) {
        // Gentle mouse attraction
        const dx = mouse.current.x - node.x;
        const dy = mouse.current.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseDist && dist > 0) {
          node.vx += (dx / dist) * 0.012;
          node.vy += (dy / dist) * 0.012;
        }

        // Dampen
        node.vx *= 0.98;
        node.vy *= 0.98;

        // Cap speed
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > 1.2) { node.vx = (node.vx / speed) * 1.2; node.vy = (node.vy / speed) * 1.2; }

        node.x += node.vx;
        node.y += node.vy;

        // Bounce
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < connectionDist) {
            const alpha = (1 - d / connectionDist) * 0.35;
            ctx.strokeStyle = `${color}${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const dx = mouse.current.x - node.x;
        const dy = mouse.current.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const highlighted = dist < 80;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * (highlighted ? 2 : 1), 0, Math.PI * 2);
        ctx.fillStyle = highlighted
          ? `${color}0.9)`
          : `${color}0.45)`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [nodeCount, color]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}

/** Static SVG grid / circuit pattern for section backgrounds */
export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="rgba(212,165,75,0.06)"
            strokeWidth="1"
          />
        </pattern>
        <pattern id="circuit" width="96" height="96" patternUnits="userSpaceOnUse">
          <circle cx="48" cy="48" r="2" fill="rgba(212,165,75,0.08)" />
          <line x1="48" y1="48" x2="96" y2="48" stroke="rgba(212,165,75,0.05)" strokeWidth="1" />
          <line x1="48" y1="48" x2="48" y2="96" stroke="rgba(212,165,75,0.05)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}
