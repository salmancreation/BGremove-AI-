import { motion } from "motion/react";
import { Upload, Zap, Target, Smartphone, Cloud, ShieldCheck, Download, CheckCircle2, XCircle } from "lucide-react";

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 space-y-10"
        >
          <div className="space-y-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black tracking-widest uppercase">
              <Zap size={14} className="mr-2 fill-indigo-700" />
              New v4.0 AI Model
            </span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-on-surface leading-[1.1] md:leading-[1.05]">
              Remove Image Background <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">Instantly</span> with AI
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed font-medium">
              Upload any image and get a clean transparent background in seconds. Precision edge detection for hair, fur, and complex details.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
            <button 
              onClick={onStart}
              className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-4 md:px-8 md:py-5 rounded-2xl font-bold text-base md:text-lg flex items-center gap-3 shadow-2xl shadow-primary/30 hover:scale-[1.02] transition-all active:scale-95"
            >
              <Upload size={20} className="md:size-[24px]" />
              Upload Image
            </button>
            <button className="px-6 py-4 md:px-8 md:py-5 rounded-2xl border-2 border-outline-variant text-primary font-bold text-base md:text-lg hover:bg-surface-container-high transition-all active:scale-95">
              Try Demo
            </button>
          </div>

          <div className="flex items-center gap-6 pt-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-on-surface-variant">Joined by <span className="text-primary">10,000+</span> creatives</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-6 relative"
        >
          <div className="relative bg-surface-container-low p-8 rounded-3xl lg:aspect-square flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
            
            <div className="relative w-full max-w-md space-y-6">
              {/* Before Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl z-20 group"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxw7tdbRIS6FlrHKOKM5gCiKK4jO6lWKzAXuzp8USF54lifO-lQe6MBS8cRnV3fK8SFs7JmCKemspV6wywym-MO8qpEnht5G2HRbYnaGycG6_gUxde9OjaNsua3_QT7U1a5jbxBGKM4UREoRsyw98up9tRQUdBE1d8sNGEmUZ7Ui5wa5vPyPo3L0d3mNAHMmvZmipR-E6xwUfILX2rbUu1rM5_lYNOOf6itB_aFhhtYVkXXoUHRoT2Rs0njLv_NN0VbvMnnO-uo9Y" 
                  alt="Original" 
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Original</div>
              </motion.div>

              {/* After Card */}
              <motion.div 
                initial={{ x: 40, y: -60, opacity: 0 }}
                animate={{ x: 48, y: -96, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute top-1/2 left-0 w-full rounded-2xl overflow-hidden shadow-2xl z-10 checkerboard border-4 border-white"
              >
                <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmBfAFzBKeRfNH9BtSvTAThjAIFLcCeWF2s2WfCmWQC5BlramnTxSD-SUhaScGj3exrMicikUtJCFOcgS68BjB9cDZzYL7HV0fTe6_Dyy0XO6MnVPq2EyHujFoQosujusUAWKl69YYKa7lT2QjxLkG_zf7HMjskVaje3gewdw34S3KnJdn1rAqOUOjOHDL_scBlkfn07Y7ZlU-3HxCIrQWW66DmDt87SKBJbjrJKEkvQLDZUdtJRljTQDDhoUfZJ2iGZxO2OOq6lY" 
                  alt="Result" 
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Background Removed</div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-xl border border-primary/10 flex items-center gap-2">
                  <Zap size={12} className="text-primary fill-primary" />
                  <span className="text-[10px] font-black text-primary uppercase tracking-tighter">Processed in 0.8s</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase block">Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Why choose BGremove?</h2>
            <p className="text-on-surface-variant text-base md:text-lg font-medium">Sophisticated algorithms that understand depth, hair, and complex edges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: "Fast AI Processing", desc: "Get results in under 3 seconds, regardless of image complexity or size." },
              { icon: <Target />, title: "High Accuracy", desc: "Industry-leading edge detection that handles fine hair and transparent objects." },
              { icon: <Smartphone />, title: "Mobile Friendly", desc: "Perfectly optimized for mobile browsers. Edit photos on the go." },
              { icon: <Cloud />, title: "Cloud Based", desc: "No software installation required. Access your work from any device." },
              { icon: <ShieldCheck />, title: "Secure", desc: "Images are automatically deleted after 24 hours to protect your privacy." },
              { icon: <Download />, title: "Instant Download", desc: "One-click downloads in PNG, JPG, or SVG formats instantly." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-surface-container-lowest p-10 rounded-3xl group transition-all duration-300 hover:bg-indigo-50"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center mb-8 group-hover:bg-white transition-colors text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4">{feature.title}</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Simple, transparent pricing</h2>
            <p className="text-on-surface-variant text-base md:text-lg font-medium">Choose the plan that's right for your creative workflow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-surface-container-low rounded-[2.5rem] p-10 flex flex-col border border-outline-variant/10 relative overflow-hidden"
            >
              <div className="mb-10">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Zap size={24} className="text-on-surface-variant" />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-2">Starter</h3>
                <p className="text-on-surface-variant text-sm font-bold">Perfect for occasional use</p>
              </div>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-black">$0</span>
                <span className="text-on-surface-variant font-bold">/month</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {['5 images per month', 'Standard resolution', 'Personal use only', 'Community support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface-variant font-bold text-sm">
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl font-black border-2 border-primary text-primary hover:bg-primary/5 transition-colors">
                Get Started
              </button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-on-surface rounded-[2.5rem] p-10 flex flex-col border-4 border-primary shadow-2xl shadow-primary/20 relative overflow-hidden text-white"
            >
              <div className="absolute top-6 right-6 bg-primary text-white px-4 py-1.5 font-black text-[10px] uppercase tracking-widest rounded-full">Popular</div>
              <div className="mb-10">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <Zap size={24} className="text-white fill-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-2">Pro Artist</h3>
                <p className="text-white/60 text-sm font-bold">For power users & pros</p>
              </div>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-black">$15</span>
                <span className="text-white/60 font-bold">/month</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {['Unlimited images', '4K Ultra HD resolution', 'Commercial license', 'Priority AI processing', 'Batch background removal'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 font-bold text-sm">
                    <CheckCircle2 size={18} className="text-primary-container flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl font-black bg-gradient-to-br from-primary to-primary-container text-white shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform">
                Go Pro Now
              </button>
            </motion.div>

            {/* Business Plan */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-surface-container-low rounded-[2.5rem] p-10 flex flex-col border border-outline-variant/10 relative overflow-hidden"
            >
              <div className="mb-10">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Cloud size={24} className="text-on-surface-variant" />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-2">Business</h3>
                <p className="text-on-surface-variant text-sm font-bold">For creative teams</p>
              </div>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-black">$49</span>
                <span className="text-on-surface-variant font-bold">/month</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {['Everything in Pro', 'Team collaboration', 'API access (10k calls)', 'Dedicated account manager', 'Custom AI fine-tuning'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface-variant font-bold text-sm">
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl font-black border-2 border-on-surface text-on-surface hover:bg-on-surface/5 transition-colors">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
