import { motion } from "framer-motion";
import { teamData } from "../data/companyData";

export default function Structure() {
  const { ceo, directors } = teamData;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  };

  return (
    <section id="leadership" className="py-28 px-6 md:px-16 bg-[#111415] text-[#e1e3e4] relative overflow-hidden font-sans">
      
      {/* Radial Ambient Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#e9c349]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 border border-[#e9c349]/40 rounded-full text-[#e9c349] text-[11px] font-semibold tracking-[0.2em] uppercase bg-[#111415] shadow-sm"
          >
            EXECUTIVE LEADERSHIP
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight"
          >
            LEADERSHIP & <span className="text-[#e9c349]">STRUCTURE</span>
          </motion.h2>

          <div className="w-16 h-[3px] bg-[#e9c349] mx-auto rounded-full mt-2 mb-4 shadow-[0_0_12px_rgba(233,195,73,0.5)]"></div>

          <p className="text-sm md:text-base text-[#c4c6cf] font-light leading-relaxed">
            Guiding strategy and execution through decades of combined industry authority.
          </p>
        </div>

        <div className="flex flex-col items-center relative">
          
          {/* Top Level: CEO */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="relative z-20 mb-10 lg:mb-16 w-full max-w-md lg:max-w-none lg:w-auto"
          >
            <div
              onMouseMove={handleMouseMove}
              className="group relative w-full lg:w-72 bg-[#161a1b]/80 rounded-2xl border border-white/10 overflow-hidden spotlight-card transition-all duration-300 hover:border-[#e9c349]/50 hover:-translate-y-1.5 p-4 lg:p-0 lg:aspect-[3/4] flex lg:block items-center gap-5 shadow-xl"
            >
              {/* Top Line Accent */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out z-30"></div>

              {/* CEO Image Container */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-full rounded-xl lg:rounded-none overflow-hidden shrink-0">
                <img 
                  src={ceo.image} 
                  alt={ceo.name} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
              </div>

              {/* Desktop Gradient Overlay */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#111415] via-[#111415]/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>

              {/* Content Info */}
              <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:p-6 text-left lg:text-center z-10 flex-1">
                <p className="text-[#e9c349] text-[11px] font-semibold uppercase tracking-[0.2em] mb-1">{ceo.role}</p>
                <h4 className="text-xl lg:text-2xl font-serif text-white font-semibold mb-1">{ceo.name}</h4>
                <p className="text-[#a1a3a8] text-xs leading-relaxed lg:hidden line-clamp-2">{ceo.description}</p>
              </div>

              {/* Desktop Hover Bio Overlay */}
              <div className="hidden lg:flex absolute inset-0 bg-[#111415]/95 p-8 flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm z-20">
                <span className="text-[#e9c349] text-[11px] font-semibold tracking-[0.2em] mb-3 uppercase">{ceo.tagline || ceo.role}</span>
                <p className="text-[#c4c6cf] text-xs sm:text-sm font-light leading-relaxed">{ceo.description}</p>
              </div>
            </div>

            {/* Connecting Vertical Line for Desktop */}
            <div className="absolute left-1/2 top-full w-[2px] h-16 bg-[#e9c349]/30 -translate-x-1/2 hidden lg:block shadow-[0_0_8px_rgba(233,195,73,0.3)]"></div>
          </motion.div>

          {/* Horizontal Connecting Line Structure (Desktop Only) */}
          <div className="relative w-full mb-16 hidden lg:block">
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[2px] bg-[#e9c349]/30 shadow-[0_0_8px_rgba(233,195,73,0.3)]"></div>
            <div className="flex justify-between px-[12.5%]">
              <div className="w-[2px] h-8 bg-[#e9c349]/30"></div>
              <div className="w-[2px] h-8 bg-[#e9c349]/30"></div>
              <div className="w-[2px] h-8 bg-[#e9c349]/30"></div>
              <div className="w-[2px] h-8 bg-[#e9c349]/30"></div>
            </div>
          </div>

          {/* Bottom Row: 4 Directors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-md md:max-w-none relative z-20">
            {directors.map((director, index) => (
              <motion.div
                key={director.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseMove={handleMouseMove}
                className="group relative bg-[#161a1b]/80 rounded-2xl border border-white/10 overflow-hidden spotlight-card transition-all duration-300 hover:border-[#e9c349]/50 hover:-translate-y-1.5 p-4 lg:p-0 lg:aspect-[3/4] flex lg:block items-center gap-4 shadow-xl"
              >
                {/* Top Line Accent */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out z-30"></div>

                {/* Director Image Container */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-full lg:h-full rounded-xl lg:rounded-none overflow-hidden shrink-0">
                  <img 
                    src={director.image} 
                    alt={director.name} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  />
                </div>

                {/* Desktop Gradient Overlay */}
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#111415] via-[#111415]/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>

                {/* Content Info */}
                <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:p-6 text-left lg:text-center z-10 flex-1">
                  <p className="text-[#e9c349] text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.2em] mb-1">{director.role}</p>
                  <h4 className="text-lg lg:text-xl font-serif text-white font-semibold mb-1">{director.name}</h4>
                  <p className="text-[#a1a3a8] text-xs leading-relaxed lg:hidden line-clamp-2">{director.description}</p>
                </div>

                {/* Desktop Hover Bio Overlay */}
                <div className="hidden lg:flex absolute inset-0 bg-[#111415]/95 p-6 flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm z-20">
                  <p className="text-[#c4c6cf] text-xs font-light leading-relaxed">{director.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}