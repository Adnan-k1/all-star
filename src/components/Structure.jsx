import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamData } from "../data/companyData";

export default function Structure() {
  const { ceo, directors } = teamData;
  const [selectedMember, setSelectedMember] = useState(null);

  // Efek Spotlight Kursor pada Kartu
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  };

  return (
    <section id="leadership" className="py-28 px-4 sm:px-6 md:px-16 bg-[#111415] text-[#e1e3e4] relative overflow-hidden font-sans select-none">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#e9c349]/10 via-[#e9c349]/5 to-transparent blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e9c349]/40 rounded-full text-[#e9c349] text-[11px] font-bold tracking-[0.25em] uppercase bg-[#161a1b]/80 shadow-[0_0_15px_rgba(233,195,73,0.15)] backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e9c349] animate-ping"></span>
            EXECUTIVE LEADERSHIP
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight"
          >
            LEADERSHIP & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9c349] via-[#f7e49a] to-[#d8b238]">STRUCTURE</span>
          </motion.h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#e9c349] to-transparent mx-auto rounded-full my-3 shadow-[0_0_12px_rgba(233,195,73,0.6)]"></div>

          <p className="text-sm md:text-base text-[#c4c6cf] font-light leading-relaxed max-w-xl mx-auto">
            Klik pada kartu jajaran pimpinan untuk melihat profil dan rekam jejak profesional mereka.
          </p>
        </div>

        {/* Structure Tree */}
        <div className="flex flex-col items-center relative">
          
          {/* ================= TOP LEVEL: CEO CARD ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="relative z-20 mb-12 lg:mb-20 w-full max-w-md lg:max-w-none lg:w-auto"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -6 }}
              whileTap={{ scale: 0.95, rotateY: 10 }}
              onMouseMove={handleMouseMove}
              onClick={() => setSelectedMember({ ...ceo, hierarchy: "#01 EXECUTIVE" })}
              className="group relative w-full lg:w-80 bg-[#161a1b]/90 rounded-2xl border border-[#e9c349]/40 overflow-hidden transition-all duration-300 hover:border-[#e9c349] hover:shadow-[0_0_35px_rgba(233,195,73,0.3)] p-5 lg:p-0 lg:aspect-[3/4] flex lg:block items-center gap-5 cursor-pointer backdrop-blur-xl"
              style={{
                background: "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(233, 195, 73, 0.15), transparent 40%)"
              }}
            >
              {/* Gold Badge */}
              <div className="absolute top-3 right-3 z-30 px-2.5 py-1 rounded-md bg-[#111415]/80 border border-[#e9c349]/40 text-[#e9c349] text-[9px] font-bold tracking-widest uppercase backdrop-blur-md">
                #01 CEO
              </div>

              {/* Glowing Top Edge Line */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#e9c349] to-white group-hover:w-full transition-all duration-500 ease-out z-30"></div>

              {/* CEO Image */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-full lg:h-full rounded-xl lg:rounded-none overflow-hidden shrink-0 border border-white/10 lg:border-none">
                <img 
                  src={ceo.image} 
                  alt={ceo.name} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                />
              </div>

              {/* Gradient Overlay (tanpa text bio) */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#111415] via-[#111415]/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>

              {/* Information Base */}
              <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:p-6 text-left lg:text-center z-20 flex-1">
                <p className="text-[#e9c349] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-1">{ceo.role}</p>
                <h3 className="text-xl lg:text-2xl font-serif text-white font-bold group-hover:text-[#e9c349] transition-colors">{ceo.name}</h3>
                <span className="inline-block mt-2 text-[10px] text-[#e9c349]/80 uppercase font-semibold tracking-wider">
                  Klik Kartu →
                </span>
              </div>
            </motion.div>

            {/* Connecting Flow Line (Desktop) */}
            <div className="absolute left-1/2 top-full w-[2px] h-12 -translate-x-1/2 hidden lg:block overflow-hidden bg-white/10">
              <div className="w-full h-full bg-gradient-to-b from-[#e9c349] to-transparent animate-pulse"></div>
            </div>
          </motion.div>


          {/* ================= CIRCUIT CONNECTING LINES (DESKTOP) ================= */}
          <div className="relative w-full mb-16 hidden lg:block">
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[2px] bg-white/10 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-[#e9c349] to-transparent shadow-[0_0_10px_#e9c349]"></div>
            </div>
            <div className="flex justify-between px-[12.5%]">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-[2px] h-8 bg-white/10 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-[#e9c349] to-transparent animate-bounce"></div>
                </div>
              ))}
            </div>
          </div>


          {/* ================= BOTTOM ROW: DIRECTORS CARDS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-md md:max-w-none relative z-20">
            {directors.map((director, index) => (
              <motion.div
                key={director.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.04, y: -6 }}
                  whileTap={{ scale: 0.95, rotateY: -10 }}
                  onMouseMove={handleMouseMove}
                  onClick={() => setSelectedMember({ ...director, hierarchy: `#0${index + 2} DIRECTOR` })}
                  className="group relative bg-[#161a1b]/80 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#e9c349]/70 hover:shadow-[0_0_25px_rgba(233,195,73,0.2)] p-4 lg:p-0 lg:aspect-[3/4] flex lg:block items-center gap-4 cursor-pointer backdrop-blur-xl"
                  style={{
                    background: "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(233, 195, 73, 0.12), transparent 40%)"
                  }}
                >
                  {/* Badge Number */}
                  <div className="absolute top-3 right-3 z-30 px-2 py-0.5 rounded bg-[#111415]/80 border border-white/10 text-[#e9c349] text-[9px] font-semibold tracking-wider">
                    0{index + 2}
                  </div>

                  {/* Top Line Accent */}
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out z-30"></div>

                  {/* Image */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-full lg:h-full rounded-xl lg:rounded-none overflow-hidden shrink-0 border border-white/10 lg:border-none">
                    <img 
                      src={director.image} 
                      alt={director.name} 
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                    />
                  </div>

                  {/* Gradient Overlay (tanpa text bio) */}
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#111415] via-[#111415]/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>

                  {/* Info Base */}
                  <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:p-5 text-left lg:text-center z-20 flex-1">
                    <p className="text-[#e9c349] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{director.role}</p>
                    <h4 className="text-lg lg:text-xl font-serif text-white font-bold group-hover:text-[#e9c349] transition-colors">{director.name}</h4>
                    <span className="inline-block mt-1 text-[9px] text-[#e9c349]/80 uppercase font-semibold tracking-wider">
                      Klik Kartu →
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= MODAL DETAILED CARD (MUNCUL SAAT KARTU DIKLIK) ================= */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            {/* Modal Card Flip/Scale Entrance Animation */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotateY: 90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotateY: -90 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-gradient-to-b from-[#1a1f21] to-[#111415] border-2 border-[#e9c349]/50 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-[0_0_60px_rgba(233,195,73,0.25)]"
            >
              {/* Gold Ambient Glow Inside Modal */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#e9c349]/10 blur-3xl pointer-events-none"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#e9c349] hover:text-[#111415] transition-colors cursor-pointer z-30"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                {/* Modal Photo */}
                <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-[#e9c349] shrink-0 shadow-2xl">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Info & Bio */}
                <div className="text-center sm:text-left space-y-3 flex-1">
                  <span className="px-3 py-1 rounded-full bg-[#e9c349]/10 border border-[#e9c349]/40 text-[#e9c349] text-[10px] font-bold tracking-widest uppercase">
                    {selectedMember.hierarchy || "EXECUTIVE LEADERSHIP"}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold">
                      {selectedMember.name}
                    </h3>
                    <p className="text-[#e9c349] text-xs font-semibold tracking-wider uppercase mt-1">
                      {selectedMember.role}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#c4c6cf] font-light leading-relaxed border-t border-white/10 pt-3">
                    {selectedMember.description || "Memiliki rekam jejak profesional berskala tinggi dalam manajemen strategis dan eksekusi proyek-proyek besar."}
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-[#c4c6cf] border border-white/10">
                      ★ Industry Veteran
                    </span>
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-[#c4c6cf] border border-white/10">
                      ★ Key Decision Maker
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}