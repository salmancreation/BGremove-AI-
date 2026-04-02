import { motion } from "motion/react";
import { Download, Image as ImageIcon, Upload, Wand2, Sparkles } from "lucide-react";
import { useState } from "react";
import { GoogleGenAI } from "@google/genai";

interface ResultPreviewProps {
  image: string | null;
  onReset: () => void;
}

export default function ResultPreview({ image, onReset }: ResultPreviewProps) {
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleDownload = (format: 'png' | 'jpg') => {
    if (!image) return;
    const link = document.createElement('a');
    link.href = image;
    link.download = `bg-removed.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getAIInsight = async () => {
    setIsAnalyzing(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "You are an expert image editor. Briefly (2 sentences) describe why removing the background from an image is valuable for designers. Be professional and inspiring.",
      });
      setAiInsight(response.text || "Background removal allows for seamless integration into diverse design contexts, enhancing the subject's impact.");
    } catch (error) {
      console.error("Gemini Error:", error);
      setAiInsight("AI-powered background removal provides pixel-perfect edges, saving hours of manual masking for creative professionals.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Comparison Area */}
        <div className="lg:col-span-8 space-y-8 md:space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant/10"
          >
            <div className="grid grid-cols-1">
              {/* Result */}
              <div className="relative aspect-square md:h-[600px] checkerboard overflow-hidden flex items-center justify-center bg-surface-container-low">
                <div className="absolute inset-0 bg-primary/5" />
                {image ? (
                  <img 
                    src={image} 
                    alt="Result" 
                    className="max-w-full max-h-full object-contain z-10"
                  />
                ) : (
                  <div className="text-on-surface-variant font-bold">No image processed</div>
                )}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 glass-panel px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase text-primary">Result</div>
              </div>
            </div>
          </motion.div>

          {/* AI Insight Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-8 rounded-3xl border border-outline-variant/10 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black flex items-center gap-2">
                <Sparkles size={20} className="text-primary" />
                AI Creative Insights
              </h3>
              {!aiInsight && (
                <button 
                  onClick={getAIInsight}
                  disabled={isAnalyzing}
                  className="text-xs font-black uppercase tracking-widest text-primary hover:underline disabled:opacity-50"
                >
                  {isAnalyzing ? "Analyzing..." : "Generate Insights"}
                </button>
              )}
            </div>
            {aiInsight && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-on-surface-variant font-medium leading-relaxed italic"
              >
                "{aiInsight}"
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Actions Sidebar */}
        <div className="lg:col-span-4 space-y-6 md:space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 md:p-10 space-y-6 md:space-y-8 shadow-2xl shadow-primary/5 border border-outline-variant/10"
          >
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-on-surface">Image Ready</h1>
              <p className="text-on-surface-variant leading-relaxed font-medium text-sm md:text-base">Your background has been removed with magical precision. Download your high-quality asset below.</p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => handleDownload('png')}
                className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-4 md:py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 hover:scale-[1.02] transition-transform active:scale-95"
              >
                <Download size={24} />
                Download PNG
              </button>
              <button 
                onClick={() => handleDownload('jpg')}
                className="w-full bg-surface-container-lowest text-primary border-2 border-outline-variant/30 py-4 md:py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-surface-container-high transition-colors"
              >
                <ImageIcon size={24} />
                Download JPG
              </button>
            </div>

            <div className="pt-8 border-t border-outline-variant/20">
              <button 
                onClick={onReset}
                className="w-full flex items-center justify-center gap-3 text-on-surface-variant font-black hover:text-primary transition-colors py-2"
              >
                <Upload size={20} />
                Upload Another Image
              </button>
            </div>
          </motion.div>

          {/* Pro Tip Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-tertiary-fixed text-on-tertiary-fixed p-8 rounded-3xl flex gap-6 items-start border border-indigo-200"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center flex-shrink-0">
              <Wand2 size={24} className="text-on-tertiary-fixed" />
            </div>
            <div className="space-y-2">
              <p className="font-black text-sm uppercase tracking-widest">Pro Tip</p>
              <p className="text-xs font-medium opacity-80 leading-relaxed">Upgrade to Pro for 4K resolution downloads and batch processing.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

