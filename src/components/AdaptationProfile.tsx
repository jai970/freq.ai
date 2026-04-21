import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const TypewriterValue = ({ value, delay = 0 }: { value: string, delay?: number }) => {
  const [displayValue, setDisplayValue] = useState("");
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const startTimeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        setDisplayValue(value.slice(0, i + 1));
        i++;
        if (i === value.length) clearInterval(interval);
      }, 50);
    }, delay);
    
    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, [value, delay]);

  return <span>{displayValue}<span className="animate-pulse">|</span></span>;
};

export default function AdaptationProfile() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="glass-panel p-8 rounded-[40px] relative z-10 space-y-8 overflow-hidden">
            <div className="flex items-center gap-4 pb-8 border-b border-white/5">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              </div>
              <div>
                <h3 className="font-heading text-lg">freq.ai Context</h3>
                <p className="text-xs text-white/40 font-mono">CALIBRATION ACTIVE</p>
              </div>
            </div>

            <div className="space-y-6 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-white/40">reply_style</span>
                <span className="text-primary"><TypewriterValue value='"terse"' delay={500} /></span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">quiet_hours</span>
                <span className="text-primary"><TypewriterValue value='"22:00–07:00 IST"' delay={1500} /></span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">team</span>
                <span className="text-primary"><TypewriterValue value='"Voltage"' delay={2500} /></span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">last_called_about</span>
                <span className="text-primary"><TypewriterValue value='"shipping Q3 dashboards"' delay={3500} /></span>
              </div>
            </div>

            <div className="pt-8 flex gap-2">
              {[1, 0.6, 0.3].map((op, i) => (
                <div key={i} className="h-1 bg-primary rounded-full grow" style={{ opacity: op }} />
              ))}
            </div>
            
            {/* Background noise effect */}
            <div className="absolute inset-0 bg-primary/5 blur-[80px] -z-10" />
          </div>
          
          {/* Subtle decoration */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 blur-[40px] rounded-full" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-violet-500/20 blur-[60px] rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight leading-tight">
            Not a chatbot. <br />A colleague with context.
          </h2>
          <p className="text-xl text-white/60 leading-relaxed">
            Every call condenses into a memory. Every preference sticks. 
            Call back in a week — freq.ai picks up where you left off.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
