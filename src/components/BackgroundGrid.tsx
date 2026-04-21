import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function BackgroundGrid() {
  const [activeCells, setActiveCells] = useState<{id: number, x: number, y: number}[]>([]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const pulse = () => {
      const count = Math.floor(Math.random() * 4) + 2; // 2 to 5 cells
      const newPathCells = Array.from({ length: count }, () => ({
        id: Math.random(),
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 12),
      }));

      setActiveCells(prev => [...prev, ...newPathCells].slice(-15)); // Keep last 15 for safety

      const nextDelay = Math.random() * 2000 + 500; // Random delay between 0.5s and 2.5s
      timeoutId = setTimeout(pulse, nextDelay);
    };

    pulse();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Grid Lines (Hairline) */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 211, 238, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 10%, transparent 100%)'
        }}
      />

      {/* Pulsing Cells (Truly Random) */}
      <div className="absolute inset-0 hidden sm:block">
        {activeCells.map((cell) => (
          <motion.div
            key={cell.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0] }}
            transition={{ duration: 4, ease: "easeInOut" }}
            onAnimationComplete={() => {
              setActiveCells(prev => prev.filter(c => c.id !== cell.id));
            }}
            className="absolute bg-primary/40"
            style={{
              left: `${cell.x * 80}px`,
              top: `${cell.y * 80}px`,
              width: '80px',
              height: '80px',
            }}
          />
        ))}
      </div>

      {/* Slow Scanning Light */}
      <motion.div
        animate={{ y: ['-50%', '150%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-20"
      />
    </div>
  );
}
