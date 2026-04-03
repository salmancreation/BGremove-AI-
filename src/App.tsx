import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Workspace from "./components/Workspace";
import ResultPreview from "./components/ResultPreview";

type Screen = 'landing' | 'workspace' | 'result';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const navigate = (screen: Screen) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentScreen(screen);
  };

  const handleProcessComplete = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    navigate('result');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={navigate} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {currentScreen === 'landing' && (
              <LandingPage 
                onStart={() => {
                  const uploadSection = document.getElementById('upload-section');
                  uploadSection?.scrollIntoView({ behavior: 'smooth' });
                }} 
                onProcessComplete={handleProcessComplete}
              />
            )}
            {currentScreen === 'result' && (
              <ResultPreview 
                image={uploadedImage} 
                onReset={() => {
                  setUploadedImage(null);
                  navigate('landing');
                }} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

