import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RefreshCw, Layers, Database, Activity, GitBranch } from 'lucide-react';

type DataMode = 'data-vortex' | 'double-helix' | 'golden-spiral' | 'neural-flow';

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  angle?: number;
  distance?: number;
  speed?: number;
  baseY?: number;
  randomFactor?: number;
}

interface MathAnimationProps {
  theme?: 'light' | 'dark';
}

export default function MathAnimation({ theme = 'light' }: MathAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<DataMode>('golden-spiral');
  const [isPlaying, setIsPlaying] = useState(true);

  // Interaction & Rotation States
  const [targetRot, setTargetRot] = useState({ x: 0.3, y: 0.4 });
  const currentRot = useRef({ x: 0.3, y: 0.4 });
  const timeRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  // Cache for particles to prevent constant re-allocations
  const particlesRef = useRef<Particle[]>([]);
  const initializedModeRef = useRef<string>('');

  // Handle canvas responsiveness
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Tracking mouse movement for rotating the 3D space
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 to 1
    const y = (e.clientY - rect.top) / rect.height; // 0 to 1
    
    // Set smooth rotation target
    setTargetRot({
      x: (y - 0.5) * Math.PI * 0.7, // rotation around X-axis
      y: (x - 0.5) * Math.PI * 1.2, // rotation around Y-axis
    });
  };

  // Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize or reset particles based on current mode
    const initParticles = (width: number, height: number) => {
      const list: Particle[] = [];
      const dpr = window.devicePixelRatio || 1;

      if (mode === 'data-vortex') {
        // Spiral Vortex: thousands of points in spiral arms
        const arms = 4;
        const total = 700;
        for (let i = 0; i < total; i++) {
          const arm = i % arms;
          const ratio = i / total;
          const distance = 10 + ratio * 150;
          const angle = (arm * (Math.PI * 2) / arms) + (ratio * Math.PI * 2.5);
          const speed = 0.5 + (1 - ratio) * 1.5;
          
          // Color based on distance (hot core to cool rim)
          const hue = (195 + ratio * 110) % 360;
          const lightness = theme === 'dark' ? 58 : 45;
          
          list.push({
            x: 0,
            y: 0,
            z: (Math.random() - 0.5) * 12,
            size: (1 + (1 - ratio) * 2.5) * dpr,
            color: `hsla(${hue}, 85%, ${lightness}%, ${0.45 + (1 - ratio) * 0.5})`,
            angle,
            distance,
            speed
          });
        }
      } else if (mode === 'double-helix') {
        // Double Helix strands (intertwined data spiral chains)
        const totalPoints = 300;
        const colorA = theme === 'dark' ? 'rgba(56, 189, 248, 0.95)' : 'rgba(25, 118, 210, 0.95)';
        const colorB = theme === 'dark' ? 'rgba(168, 85, 247, 0.95)' : 'rgba(124, 58, 237, 0.95)';
        
        for (let i = 0; i < totalPoints; i++) {
          const ratio = i / totalPoints;
          const angle = ratio * Math.PI * 8; // 4 full loops
          const radius = 65;
          const speed = 1.2;

          // Strand A
          list.push({
            x: 0,
            y: 0,
            z: 0,
            size: 2.2 * dpr,
            color: colorA,
            angle: angle,
            distance: radius,
            baseY: (ratio - 0.5) * 220,
            speed,
            randomFactor: 0 // Identifier for Strand A
          });

          // Strand B
          list.push({
            x: 0,
            y: 0,
            z: 0,
            size: 2.2 * dpr,
            color: colorB,
            angle: angle + Math.PI, // 180 degrees offset
            distance: radius,
            baseY: (ratio - 0.5) * 220,
            speed,
            randomFactor: 1 // Identifier for Strand B
          });
        }
      } else if (mode === 'golden-spiral') {
        // Fibonacci Spiral (Golden ratio) arranged on a spherical domain
        const total = 450;
        const goldenAngle = 137.5 * (Math.PI / 180);
        for (let i = 0; i < total; i++) {
          const r = Math.sqrt(i) * 7.5;
          const theta = i * goldenAngle;
          const hue = (180 + (i % 8) * 18) % 360;
          const lightness = theme === 'dark' ? 58 : 45;
          
          list.push({
            x: r * Math.cos(theta),
            y: (Math.sin(i * 0.05) * 15),
            z: r * Math.sin(theta),
            size: (1.5 + Math.random() * 1.5) * dpr,
            color: `hsla(${hue}, 80%, ${lightness}%, ${0.5 + (1 - r / 200) * 0.45})`,
            distance: r,
            angle: theta
          });
        }
      } else if (mode === 'neural-flow') {
        // Streaming organic nodes flowing through a 3D pipeline
        const total = 140;
        for (let i = 0; i < total; i++) {
          const angle = Math.random() * Math.PI * 2;
          const radius = 40 + Math.random() * 55;
          const baseY = (Math.random() - 0.5) * 240;
          
          const color = theme === 'dark'
            ? (Math.random() > 0.5 ? 'rgba(56, 189, 248, 0.85)' : 'rgba(129, 140, 248, 0.85)')
            : (Math.random() > 0.5 ? 'rgba(3, 105, 161, 0.85)' : 'rgba(79, 70, 229, 0.85)');

          list.push({
            x: Math.cos(angle) * radius,
            y: baseY,
            z: Math.sin(angle) * radius,
            size: (1.2 + Math.random() * 2) * dpr,
            color,
            speed: 0.8 + Math.random() * 1.5,
            angle,
            distance: radius,
            baseY
          });
        }
      }

      particlesRef.current = list;
      initializedModeRef.current = mode;
    };

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      // Initialize if mode changed or list is empty
      if (initializedModeRef.current !== mode || particlesRef.current.length === 0) {
        initParticles(width, height);
      }

      // Smoothly interpolate rotation to remove jitter
      currentRot.current.x += (targetRot.x - currentRot.current.x) * 0.08;
      currentRot.current.y += (targetRot.y - currentRot.current.y) * 0.08;

      // Advance time clock if active
      if (isPlaying) {
        timeRef.current += 0.02;
      }

      const t = timeRef.current;

      // Clear the canvas fully each frame for a 100% transparent background blending with the hero section
      ctx.clearRect(0, 0, width, height);

      const rotX = currentRot.current.x;
      const rotY = currentRot.current.y;

      // Project 3D points to 2D
      const project3D = (x: number, y: number, z: number, scaleFactor = 1.0) => {
        // Rotate around Y-axis
        let x1 = x * Math.cos(rotY) - z * Math.sin(rotY);
        let z1 = x * Math.sin(rotY) + z * Math.cos(rotY);

        // Rotate around X-axis
        let y2 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = y * Math.sin(rotX) + z1 * Math.cos(rotX);

        // Perspective setup
        const cameraDistance = 300 * dpr;
        const perspective = cameraDistance / (cameraDistance + z2);
        
        return {
          x: cx + x1 * perspective * scaleFactor * dpr,
          y: cy + y2 * perspective * scaleFactor * dpr,
          depth: z2,
          visible: z2 > -cameraDistance
        };
      };

      // Draw subtle background glowing core with transparent boundaries
      const coreGlow = ctx.createRadialGradient(cx, cy, 2, cx, cy, 140 * dpr);
      if (theme === 'dark') {
        coreGlow.addColorStop(0, 'rgba(59, 130, 246, 0.16)');
        coreGlow.addColorStop(1, 'rgba(15, 23, 42, 0)');
      } else {
        coreGlow.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
        coreGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = coreGlow;
      ctx.fillRect(0, 0, width, height);

      // ----------------------------------------------------
      // Mode 1: Data Vortex (Spiral Galaxies / Streams)
      // ----------------------------------------------------
      if (mode === 'data-vortex') {
        const particles = particlesRef.current;
        
        // Sort by depth to handle overlapping properly
        const projected = particles.map(p => {
          const currentAngle = (p.angle || 0) + t * (p.speed || 1);
          const radius = p.distance || 50;
          
          // Compute 3D coordinates based on dynamic spiral math
          const x3d = radius * Math.cos(currentAngle);
          const z3d = radius * Math.sin(currentAngle);
          const y3d = Math.sin(radius * 0.03 - t * 1.5) * 22; // wavy ripple along arms

          const proj = project3D(x3d, y3d, z3d, 1.4);
          return { p, proj };
        }).filter(item => item.proj.visible);

        // Sort back-to-front
        projected.sort((a, b) => b.proj.depth - a.proj.depth);

        // Draw connections for close core particles
        ctx.strokeStyle = theme === 'dark' ? 'rgba(56, 189, 248, 0.22)' : 'rgba(25, 118, 210, 0.12)';
        ctx.lineWidth = 0.8 * dpr;
        for (let i = 0; i < projected.length; i += 3) {
          const nodeA = projected[i];
          if ((nodeA.p.distance || 0) > 80) continue;
          
          for (let j = i + 1; j < Math.min(i + 12, projected.length); j++) {
            const nodeB = projected[j];
            const dist = Math.hypot(nodeA.proj.x - nodeB.proj.x, nodeA.proj.y - nodeB.proj.y);
            if (dist < 38 * dpr) {
              ctx.beginPath();
              ctx.moveTo(nodeA.proj.x, nodeA.proj.y);
              ctx.lineTo(nodeB.proj.x, nodeB.proj.y);
              ctx.stroke();
            }
          }
        }

        // Draw individual data dots
        projected.forEach(({ p, proj }) => {
          const depthAlpha = Math.max(0.15, 1.0 - (proj.depth + 100) / 400);
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, p.size * (0.4 + depthAlpha), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Core particles have light glows
          if ((p.distance || 100) < 40 && Math.random() > 0.98) {
            ctx.shadowColor = '#06b6d4';
            ctx.shadowBlur = 8 * dpr;
            ctx.beginPath();
            ctx.arc(proj.x, proj.y, p.size * 1.8, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.fill();
            ctx.shadowBlur = 0; // reset
          }
        });
      }

      // ----------------------------------------------------
      // Mode 2: Double Helix Strands (Data Spirals)
      // ----------------------------------------------------
      else if (mode === 'double-helix') {
        const particles = particlesRef.current;
        const projected = particles.map(p => {
          const currentAngle = (p.angle || 0) + (isPlaying ? t * (p.speed || 1) * 0.5 : 0);
          const radius = p.distance || 65;
          const baseY = p.baseY || 0;

          const x3d = radius * Math.cos(currentAngle);
          const z3d = radius * Math.sin(currentAngle);

          // Give a fluid sine wave along the vertical pipeline
          const y3d = baseY + Math.sin(baseY * 0.02 + t * 2) * 10;

          const proj = project3D(x3d, y3d, z3d, 1.3);
          return { p, proj, id: p.randomFactor, angle: currentAngle };
        }).filter(item => item.proj.visible);

        // Draw base connectors between matching indices of Strand A and Strand B
        ctx.lineWidth = 1 * dpr;
        for (let i = 0; i < projected.length; i++) {
          const nodeA = projected[i];
          if (nodeA.id !== 0) continue; // Only process Strand A for connections

          // Find closest Strand B node with similar height baseY
          const baseMatch = nodeA.p.baseY || 0;
          const nodeB = projected.find(n => n.id === 1 && Math.abs((n.p.baseY || 0) - baseMatch) < 1.5);
          
          if (nodeB) {
            const depthVal = (nodeA.proj.depth + nodeB.proj.depth) / 2;
            const alpha = Math.max(0.08, 0.4 - (depthVal / 250));
            
            // Binary link bar
            ctx.beginPath();
            ctx.moveTo(nodeA.proj.x, nodeA.proj.y);
            ctx.lineTo(nodeB.proj.x, nodeB.proj.y);
            
            // Dynamic color gradient for base-pairs
            const grad = ctx.createLinearGradient(nodeA.proj.x, nodeA.proj.y, nodeB.proj.x, nodeB.proj.y);
            grad.addColorStop(0, `rgba(56, 189, 248, ${theme === 'dark' ? alpha * 1.5 : alpha})`);
            grad.addColorStop(1, `rgba(168, 85, 247, ${theme === 'dark' ? alpha * 1.5 : alpha})`);
            
            ctx.strokeStyle = grad;
            ctx.stroke();

            // Intermittent digital byte values along the strands
            if (Math.abs(baseMatch) % 40 < 2 && Math.random() > 0.993) {
              ctx.font = `bold ${8 * dpr}px monospace`;
              ctx.fillStyle = 'rgba(6, 182, 212, 0.85)';
              ctx.fillText(Math.random() > 0.5 ? '1' : '0', (nodeA.proj.x + nodeB.proj.x) / 2, (nodeA.proj.y + nodeB.proj.y) / 2);
            }
          }
        }

        // Render Strand dots
        projected.sort((a, b) => b.proj.depth - a.proj.depth);
        projected.forEach(({ p, proj }) => {
          const scale = Math.max(0.3, 1.0 - proj.depth / 200);
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, p.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });
      }

      // ----------------------------------------------------
      // Mode 3: Golden Spiral (Fibonacci Data Layout)
      // ----------------------------------------------------
      else if (mode === 'golden-spiral') {
        const particles = particlesRef.current;
        
        const projected = particles.map((p, idx) => {
          // Dynamic rotation & breathing expand-contract
          const rotationAngle = (p.angle || 0) + t * 0.15;
          const r = (p.distance || 50) * (1.0 + Math.sin(t * 0.8 + idx * 0.01) * 0.08);
          
          const x3d = r * Math.cos(rotationAngle);
          const z3d = r * Math.sin(rotationAngle);
          const y3d = Math.cos(r * 0.035 - t) * 16; // breathing dome surface

          const proj = project3D(x3d, y3d, z3d, 1.4);
          return { p, proj, r };
        }).filter(item => item.proj.visible);

        projected.sort((a, b) => b.proj.depth - a.proj.depth);

        // Draw subtle structural contour rings
        ctx.strokeStyle = theme === 'dark' ? 'rgba(148, 163, 184, 0.12)' : 'rgba(100, 116, 139, 0.08)';
        ctx.lineWidth = 0.8 * dpr;
        for (let ringR = 30; ringR <= 150; ringR += 30) {
          ctx.beginPath();
          let drawingRing = false;
          for (let angle = 0; angle <= Math.PI * 2; angle += 0.1) {
            const x3d = ringR * Math.cos(angle + t * 0.05);
            const z3d = ringR * Math.sin(angle + t * 0.05);
            const y3d = Math.cos(ringR * 0.035 - t) * 16;
            const proj = project3D(x3d, y3d, z3d, 1.4);
            if (proj.visible) {
              if (!drawingRing) {
                ctx.moveTo(proj.x, proj.y);
                drawingRing = true;
              } else {
                ctx.lineTo(proj.x, proj.y);
              }
            }
          }
          ctx.stroke();
        }

        // Draw elements
        projected.forEach(({ p, proj }) => {
          const depthAlpha = Math.max(0.15, 1.0 - (proj.depth + 50) / 300);
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, p.size * (0.5 + depthAlpha * 0.7), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });
      }

      // ----------------------------------------------------
      // Mode 4: Neural Flow Tunnel (Dynamic Grid Pipelines)
      // ----------------------------------------------------
      else if (mode === 'neural-flow') {
        const particles = particlesRef.current;

        // In neural flow, particles flow vertically inside a 3D pipeline cylinder
        const projected = particles.map(p => {
          if (isPlaying) {
            p.baseY -= p.speed || 1.0;
            // Recycle particles back to the bottom when they flow off top
            if (p.baseY < -130) {
              p.baseY = 130;
              p.angle = Math.random() * Math.PI * 2;
            }
          }

          // Spiral rotation around cylinder as they rise
          const angle = (p.angle || 0) + t * 0.18;
          const radius = p.distance || 60;

          const x3d = radius * Math.cos(angle);
          const z3d = radius * Math.sin(angle);
          const y3d = p.baseY || 0;

          const proj = project3D(x3d, y3d, z3d, 1.4);
          return { p, proj };
        }).filter(item => item.proj.visible);

        // Draw connections between nodes that are physically close in 3D
        ctx.strokeStyle = theme === 'dark' ? 'rgba(129, 140, 248, 0.25)' : 'rgba(99, 102, 241, 0.15)';
        ctx.lineWidth = 0.9 * dpr;
        for (let i = 0; i < projected.length; i++) {
          const nodeA = projected[i];
          let connectedCount = 0;
          for (let j = i + 1; j < projected.length; j++) {
            if (connectedCount > 3) break; // Limit branches
            const nodeB = projected[j];
            
            // Calculate Euclidean distance in 3D projection space
            const dist = Math.hypot(nodeA.proj.x - nodeB.proj.x, nodeA.proj.y - nodeB.proj.y);
            if (dist < 45 * dpr) {
              ctx.beginPath();
              ctx.moveTo(nodeA.proj.x, nodeA.proj.y);
              ctx.lineTo(nodeB.proj.x, nodeB.proj.y);
              ctx.stroke();
              connectedCount++;
            }
          }
        }

        projected.sort((a, b) => b.proj.depth - a.proj.depth);
        projected.forEach(({ p, proj }) => {
          const depthAlpha = Math.max(0.1, 1.0 - (proj.depth + 100) / 350);
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, p.size * (0.4 + depthAlpha * 0.8), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [mode, isPlaying, targetRot]);

  return (
    <div 
      className="relative w-full overflow-visible group select-none"
      onMouseMove={handleMouseMove}
      id="math-interactive-container"
    >
      {/* Main Canvas Drawing Stage */}
      <div 
        ref={containerRef} 
        className="w-full h-80 overflow-visible relative"
        id="math-canvas-wrapper"
      >
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>
    </div>
  );
}
