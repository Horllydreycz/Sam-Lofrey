import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CollectionsSection from "./components/CollectionSection";
import CraftsmanshipSection from "./components/CraftsmanshipSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CollectionsSection />
      <CraftsmanshipSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
