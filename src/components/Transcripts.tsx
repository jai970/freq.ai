import { motion } from 'motion/react';
import type { Key } from 'react';

interface BubbleProps {
  text: string;
  isKin?: boolean;
  key?: Key;
}

const Bubble = ({ text, isKin }: BubbleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm md:text-base ${
      isKin 
        ? 'bg-primary/10 border border-primary/20 text-primary self-start rounded-bl-sm' 
        : 'bg-white/5 border border-white/10 text-white self-end rounded-br-sm text-right'
    }`}
  >
    {text}
  </motion.div>
);

const TranscriptCard = ({ time, title, bubbles }: { time: string, title: string, bubbles: { text: string, isKin?: boolean }[] }) => (
  <div className="flex flex-col gap-6 p-6 rounded-3xl glass-panel relative overflow-hidden group">
    <div className="flex items-center justify-between">
      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{time}</span>
      <span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">{title}</span>
    </div>
    <div className="flex flex-col gap-3 min-h-[160px]">
      {bubbles.map((b, i) => <Bubble key={i} text={b.text} isKin={b.isKin} />)}
    </div>
    {/* Decorative glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
  </div>
);

export default function Transcripts() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto w-full">
      <div className="grid md:grid-cols-3 gap-8">
        <TranscriptCard 
          time="7:58am"
          title="proactive"
          bubbles={[
            { text: "Hey, heads up — standup starts in 2 minutes. Want the Jira link?", isKin: true }
          ]}
        />
        <TranscriptCard 
          time="2:14pm"
          title="voice command"
          bubbles={[
            { text: "Send the invoice to Priya.", isKin: false },
            { text: "Draft ready. Send it?", isKin: true }
          ]}
        />
        <TranscriptCard 
          time="11:03pm"
          title="code"
          bubbles={[
            { text: "Fix the 500 on /login.", isKin: false },
            { text: "On it — I'll text you the PR link.", isKin: true }
          ]}
        />
      </div>
    </section>
  );
}
