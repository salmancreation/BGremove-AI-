import { motion } from "motion/react";
import { Upload, Image as ImageIcon, Wand2, Lightbulb, CheckCircle, AlertCircle } from "lucide-react";
import React, { useState, useRef } from "react";
import { removeBackground } from "@imgly/background-removal";

interface WorkspaceProps {
  onProcessComplete: (imageUrl: string) => void;
}

export default function Workspace({ onProcessComplete }: WorkspaceProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setError("File size exceeds 10MB limit.");
      return;
    }

    setIsProcessing(true);
    setProgress(0);
    setError(null);

    try {
      // Real background removal using @imgly/background-removal
      const blob = await removeBackground(file, {
        progress: (step, current, total) => {
          const percent = (current / total) * 100;
          setProgress(percent);
        }
      });

      const url = URL.createObjectURL(blob);
      onProcessComplete(url);
    } catch (err) {
      console.error("Background removal error:", err);
      setError("Failed to process image. Please try again with a different image.");
      setIsProcessing(false);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      <header className="text-center mb-12 md:mb-20 space-y-6">
        <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full font-black uppercase tracking-widest text-[10px]">AI Workspace</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-on-surface">Elevate Your Canvas.</h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto font-medium">
          Upload an image and watch the AI refine your visual into a professional-grade asset using high-precision neural networks.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-7 space-y-6 lg:space-y-10">
          {/* Hidden File Input */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
          />
          
          {/* Upload Zone */}
          <motion.section 
            whileHover={!isProcessing ? { backgroundColor: "rgba(0, 98, 159, 0.05)" } : {}}
            className={`bg-surface-container-low rounded-3xl border-4 border-dashed border-outline-variant/30 p-8 md:p-16 text-center transition-all relative overflow-hidden ${isProcessing ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}
            onClick={triggerUpload}
          >
            <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-2xl shadow-primary/5">
                <Upload size={32} className="text-primary md:size-[40px]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-black">Click to upload image</h3>
                <p className="text-on-surface-variant font-bold text-sm md:text-base">Transform your photos instantly with editorial precision.</p>
              </div>
              <button className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20 flex items-center justify-center gap-3">
                <ImageIcon size={20} className="md:size-[24px]" />
                Choose File
              </button>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {['JPG', 'PNG', 'WEBP', 'UP TO 10MB'].map(tag => (
                  <span key={tag} className="px-3 py-1 md:px-4 md:py-1.5 bg-surface-container-high rounded-full text-[9px] md:text-[10px] font-black text-on-surface-variant tracking-widest uppercase">{tag}</span>
                ))}
              </div>
            </div>
          </motion.section>

          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-2xl flex items-center gap-3 font-bold text-sm">
              <AlertCircle size={20} />
              {error}
            </div>
          )}

          {/* Progress Indicator */}
          {isProcessing && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl shadow-primary/5 border border-outline-variant/10"
            >
              <div className="flex items-center gap-4 md:gap-8">
                <div className="relative flex items-center justify-center flex-shrink-0">
                  <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-primary/10" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full border-t-4 border-primary"
                  />
                  <Wand2 size={20} className="text-primary md:size-[24px]" />
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-on-surface font-black text-sm md:text-lg">Removing background...</span>
                    <span className="text-primary font-black text-xs md:text-sm tracking-tighter">{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="lg:col-span-5 space-y-6 lg:space-y-10">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 border border-outline-variant/10 aspect-square relative group">
            <div className="absolute inset-0 checkerboard opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
               <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYR5yIxZKqdyycINeVUS4F48bQunfZsEhM92_jMW_fHMRF-t_RKbm9kP9nQGKQpHXkjkxGZCtf2SVMRHKarkccpPxH5iAiILc3mMxO24TKFttQpbP5eOHa2sw3j_RP54kUBE5tGn_xOveAZGI3TJuzbgZGv2tQIRMPiWPQP63RIDUWYB4PXoQybhLWsx5ti83wE_2e-qRNvYo-WVpAl_p4jmWnfrZspY8eEmKEgG3g97bXT8g_PoQ7KHaHxnGJ4fI6fGibPkuRjts" 
                alt="Preview" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain z-10"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20 glass-panel p-4 md:p-5 rounded-2xl flex justify-between items-center">
              <div className="flex items-center gap-2 md:gap-3">
                <CheckCircle size={16} className="text-primary md:size-[18px]" />
                <span className="text-[10px] md:text-xs font-black text-on-surface">Alpha Transparency Active</span>
              </div>
              <button className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Preview Details</button>
            </div>
          </div>

          <div className="p-8 md:p-10 bg-indigo-50 rounded-3xl space-y-4 md:space-y-6">
            <h4 className="font-black text-indigo-900 flex items-center gap-3">
              <Lightbulb size={20} />
              Pro Tip
            </h4>
            <p className="text-sm text-indigo-900/80 leading-relaxed font-medium">
              High-contrast images between the subject and background yield the most magical results. BGremove works best with portraits and product photography.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
