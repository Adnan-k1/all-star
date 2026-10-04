import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import OurPromises from "./components/OurPromises";
import Structure from "./components/Structure";
import Footer from "./components/Footer";
import ShowcasePage from "./pages/ShowcasePage";

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <OurPromises />
      <Structure />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-[#111415] text-[#e1e3e4] min-h-screen selection:bg-[#e9c349] selection:text-[#111415] overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/showcase" element={<ShowcasePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}