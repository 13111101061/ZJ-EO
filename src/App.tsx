import { Routes, Route, useLocation } from "react-router-dom";
import FusionHome from "@/pages/FusionHome";
// import Home from "@/pages/Home"; // Archived Tech Home
import LibraryPage from "@/pages/Library";
import HolographicInterface23 from "./components/sections/HolographicInterface23";
import ContentSections24 from "./components/sections/ContentSections24";
import Monolith25 from "./components/sections/Monolith25";
import ArtInterface26 from "./components/sections/ArtInterface26";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FusionLayout from "./components/layout/FusionLayout";
import { AnimatePresence, motion } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();

  return (
    <FusionLayout>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><FusionHome /></PageWrapper>} />
          <Route path="/library" element={<PageWrapper><LibraryPage /></PageWrapper>} />
          <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
          <Route path="/interface" element={<PageWrapper><HolographicInterface23 /></PageWrapper>} />
          <Route path="/blueprint" element={<PageWrapper><ContentSections24 /></PageWrapper>} />
          <Route path="/enterprise" element={<PageWrapper><Monolith25 /></PageWrapper>} />
          <Route path="/gallery" element={<PageWrapper><ArtInterface26 /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </FusionLayout>
  );
}
