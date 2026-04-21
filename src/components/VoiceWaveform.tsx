import { useEffect, useRef, useState } from 'react';

export default function VoiceWaveform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bars = 40;
    const barWidth = 4;
    const gap = 8;
    const values = Array.from({ length: bars }, () => Math.random());
    let phase = 0;

    const animate = (time: number) => {
      if (!isHovered) {
        phase += 0.05;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centX = canvas.width / 2;
      const totalWidth = bars * (barWidth + gap) - gap;
      const startX = centX - totalWidth / 2;

      for (let i = 0; i < bars; i++) {
        // Sine wave envelope
        const envelope = Math.sin((i / (bars - 1)) * Math.PI);
        const oscillation = Math.sin(phase + i * 0.2);
        const height = 10 + (oscillation * 20 + 20) * envelope;
        
        const x = startX + i * (barWidth + gap);
        const y = canvas.height / 2 - height / 2;

        ctx.fillStyle = `rgba(34, 211, 238, ${0.3 + envelope * 0.7})`;
        
        // Rounded rectangle
        ctx.beginPath();
        const r = barWidth / 2;
        ctx.roundRect(x, y, barWidth, height, r);
        ctx.fill();
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered]);

  return (
    <div 
      className="flex flex-col items-center justify-center p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={120} 
        className="w-full max-w-2xl h-auto"
      />
      <p className="mt-4 text-xs font-mono text-white/40 tracking-widest uppercase">
        {isHovered ? 'Paused' : 'Listening...'}
      </p>
    </div>
  );
}
