import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Transcripts from './components/Transcripts';
import AdaptationProfile from './components/AdaptationProfile';
import Integrations from './components/Integrations';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-primary/30">
      {/* Background grain noise effect */}
      <div className="grain-overlay" />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <div className="hairline-gradient" />
        
        <div id="features">
          <Transcripts />
        </div>
        
        <div className="hairline-gradient" />

        <AdaptationProfile />
        
        <div className="hairline-gradient opacity-50" />

        <Integrations />

        <div className="hairline-gradient opacity-30" />
        
        <div id="pricing">
          <Waitlist />
        </div>
      </main>

      <Footer />

      {/* Persistent subtle background glow */}
      <div className="fixed bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none -z-10" />
    </div>
  );
}

