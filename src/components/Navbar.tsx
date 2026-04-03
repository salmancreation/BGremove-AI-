import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onNavigate: (screen: 'landing' | 'workspace' | 'result') => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-xl md:text-2xl font-extrabold tracking-tighter text-slate-900 cursor-pointer"
          onClick={() => onNavigate('landing')}
        >
          BGremove
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => onNavigate('landing')} className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Features</button>
          <button className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Pricing</button>
          <button className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">API</button>
          <button className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Showcase</button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">Sign In</button>
          <button 
            onClick={() => onNavigate('workspace')}
            className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95"
          >
            Try for Free
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-outline-variant/10 px-6 py-8 flex flex-col gap-6"
        >
          <button onClick={() => { onNavigate('landing'); setIsOpen(false); }} className="text-base font-bold text-left">Features</button>
          <button className="text-base font-bold text-left">Pricing</button>
          <button className="text-base font-bold text-left">API</button>
          <button className="text-base font-bold text-left">Showcase</button>
          <hr className="border-outline-variant/20" />
          <button className="text-base font-bold text-left">Sign In</button>
          <button 
            onClick={() => { onNavigate('workspace'); setIsOpen(false); }}
            className="bg-primary text-white py-3.5 rounded-xl font-bold text-center text-base"
          >
            Try for Free
          </button>
        </motion.div>
      )}
    </nav>
  );
}
