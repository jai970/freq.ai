import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Play } from 'lucide-react';
import VoiceWaveform from './VoiceWaveform';
import BackgroundGrid from './BackgroundGrid';
import ThreePhone from './ThreePhone';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <BackgroundGrid />
      
      {/* Cursor Glow */}
      <div 
        className="fixed pointer-events-none z-10 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.08), transparent)`,
          inset: 0,
        }}
      />

      <div className="z-20 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest font-bold font-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Real calls. Real-time.
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-[-0.05em] leading-[0.9] text-white drop-shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Your phone <br /> just got <br /> a brain.
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-white/60 max-w-xl font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            freq.ai answers your calls, makes your calls, remembers what you care about. 
            It&apos;s your personal chief of staff — over the phone.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button size="lg" className="h-14 px-8 rounded-full bg-primary text-black hover:bg-primary/90 cyan-glow transition-all duration-300 gap-2 font-medium w-full sm:w-auto">
              <Mic className="w-5 h-5" />
              Talk to freq.ai
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-white/10 hover:bg-white/5 gap-2 font-medium w-full sm:w-auto">
              <Play className="w-4 h-4 fill-current" />
              Watch demo
            </Button>
          </motion.div>
        </div>

        {/* 3D Asset Beside Text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[500px] md:h-[700px] w-full"
        >
          <ThreePhone />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="z-20 w-full mt-12"
      >
        <VoiceWaveform />
      </motion.div>

      {/* Floating radial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-violet-900/10 to-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
    </section>
  );
}
