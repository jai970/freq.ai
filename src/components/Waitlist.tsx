import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Waitlist() {
  return (
    <section className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto glass-panel p-12 md:p-20 rounded-[48px] text-center space-y-10 relative overflow-hidden"
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight">Experience freq.ai.</h2>
          <p className="text-white/60 text-lg">Your number stays yours. We&apos;ll only call when you ask — or when something&apos;s actually urgent.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Email address" 
            className="h-14 rounded-full bg-white/5 border-white/10 px-6 focus-visible:ring-primary"
          />
          <Button className="h-14 px-8 rounded-full bg-primary text-black hover:bg-primary/90 cyan-glow transition-all duration-300 font-medium">
            Get early access
          </Button>
        </div>

        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Limited slots available for Q2 rollout.</p>
        
        {/* Glow decoration */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/10 blur-[100px] -z-10 rounded-full" />
      </motion.div>
    </section>
  );
}
