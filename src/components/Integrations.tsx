import { motion } from 'motion/react';

const logos = [
  "Gmail", "Google Calendar", "Slack", "GitHub", "Notion", "Linear", "HubSpot", "Stripe", "Twilio"
];

export default function Integrations() {
  return (
    <section className="py-32 overflow-hidden bg-black/50">
       <div className="text-center mb-16">
        <p className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4">ecosystem</p>
        <h2 className="text-3xl font-heading font-semibold">
           Plug in what you already use.
        </h2>
        <p className="text-white/40 mt-2">200+ integrations via MCP.</p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-12 items-center whitespace-nowrap min-w-full"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div 
              key={i} 
              className="text-2xl md:text-3xl font-heading font-semibold text-white/20 hover:text-primary transition-colors cursor-default"
            >
              {logo}
            </div>
          ))}
        </motion.div>
        
        {/* Gradients to mask edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
}
