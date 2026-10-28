import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import OurStrength from "./components/OurStrength";
import Process from "./components/Process";
import OurPromises from "./components/OurPromises";
import Structure from "./components/Structure";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ShowcasePage from "./pages/ShowcasePage";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <OurStrength />
      <Process />
      <OurPromises />
      <Structure />
    </>
  );
}

export default function App() {
  return (
    <Router>
      {/* Setiap pindah halaman mulai dari atas; tautan #bagian menggeser ke bagian itu */}
      <ScrollToTop />
      <div className="bg-[#111415] text-[#e1e3e4] min-h-screen selection:bg-[#e9c349] selection:text-[#111415] overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/showcase" element={<ShowcasePage />} />
            {/* Alamat yang tidak dikenal kembali ke beranda */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}