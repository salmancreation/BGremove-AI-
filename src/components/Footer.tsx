import { Globe, Settings } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-20 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="text-2xl font-extrabold tracking-tighter text-slate-900">BGremove</div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
              Elevating your visual content with the power of artificial intelligence. Professional tools for modern creators.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Product</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Features</a>
              <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">API Docs</a>
              <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Desktop App</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Company</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Contact Support</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Discord Community</a>
              <a href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-sm text-slate-400 font-medium">© 2026 BGremove. Powered by AI.</p>
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-primary transition-colors"><Globe size={20} /></button>
            <button className="text-slate-400 hover:text-primary transition-colors"><Settings size={20} /></button>
          </div>
        </div>
      </div>
    </footer>
  );
}
