export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
           <div className="flex items-center gap-2 justify-center md:justify-start">
             <div className="w-6 h-6 rounded-full border-2 border-primary" />
             <span className="font-heading font-semibold text-xl">freq.ai</span>
           </div>
           <p className="text-white/40 text-sm max-w-xs">
             made for people who talk faster than they type
           </p>
        </div>

        <div className="flex gap-8 text-[11px] font-mono uppercase tracking-widest text-white/40">
           <a href="#" className="hover:text-primary transition-colors">Twitter</a>
           <a href="#" className="hover:text-primary transition-colors">GitHub</a>
           <a href="#" className="hover:text-primary transition-colors">Privacy</a>
        </div>
        
        <div className="text-[10px] font-mono text-white/20">
          © 2024 FREQ TELECOM INC.
        </div>
      </div>
    </footer>
  );
}
