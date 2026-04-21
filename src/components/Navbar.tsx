import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const { scrollY } = useScroll();
  
  // Transitions
  const width = useTransform(scrollY, [0, 100], ['100%', 'auto']);
  const paddingX = useTransform(scrollY, [0, 100], ['2.5rem', '2rem']);
  const paddingY = useTransform(scrollY, [0, 100], ['1.5rem', '0.75rem']);
  const borderRadius = useTransform(scrollY, [0, 100], ['0px', '999px']);
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']);
  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(20px)']);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.15]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <motion.nav 
        style={{ 
            width, 
            paddingLeft: paddingX, 
            paddingRight: paddingX,
            paddingTop: paddingY,
            paddingBottom: paddingY,
            borderRadius,
            backgroundColor,
            backdropFilter: backdropBlur,
            border: `1px solid rgba(255, 255, 255, ${borderOpacity.get()})`
        }}
        className="flex items-center justify-between shadow-2xl pointer-events-auto"
      >
        <div className="flex items-center gap-3 mr-12 lg:mr-16">
          <Logo />
          <span className="font-heading font-semibold text-xl tracking-tight hidden sm:block">freq.ai</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 lg:gap-12 text-[13px] font-medium text-white/50 lowercase tracking-widest px-4">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center ml-12 lg:ml-24">
          <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 h-10 px-6 text-sm">
            Sign In
          </Button>
        </div>
      </motion.nav>
    </div>
  );
}

function Logo() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
                d="M4 12C4 7.58172 7.58172 4 12 4M12 20C16.4183 20 20 16.4183 20 12" 
                stroke="#22D3EE" 
                strokeWidth="2" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <circle cx="12" cy="12" r="2" fill="#22D3EE" />
        </svg>
    );
}
