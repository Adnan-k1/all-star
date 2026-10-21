import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamData } from "../data/companyData";
import { useLanguage } from "../context/LanguageContext";

export default function Structure() {
  const { ceo, directors } = teamData;
  const { t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState(null);

  const mText = (m, k) => t(`team.${m.id}.${k}`, m[k] ?? "");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  };

  const clickCard = t("structure.clickCard");

  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 md:px-12 bg-[#0a0c0d] text-[#e1e3e4] relative overflow-hidden font-sans select-none">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#e9c349]/15 via-[#e9c349]/5 to-transparent blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e9c349]/40 rounded-full text-[#e9c349] text-[11px] font-bold tracking-[0.25em] uppercase bg-[#121516]/90 shadow-[0_0_20px_rgba(233,195,73,0.15)] backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e9c349] animate-pulse"></span>
            {t("structure.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight"
          >
            {t("structure.titleA")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9c349] via-[#f7e49a] to-[#d8b238]">
              {t("structure.titleB")}
            </span>
          </motion.h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#e9c349] to-transparent mx-auto my-3 shadow-[0_0_12px_rgba(233,195,73,0.6)]"></div>

          <p className="text-sm md:text-base text-[#a0a5ad] font-normal leading-relaxed max-w-xl mx-auto">
            {t("structure.hint")}
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
            className="relative z-20 mb-12 w-full max-w-2xl"
          >
            <motion.div
              whileHover={{ scale: 1.01, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onMouseMove={handleMouseMove}
              onClick={() => setSelectedMember({ ...ceo, tier: "ceo", n: 1 })}
              className="group relative w-full bg-[#131718]/90 rounded-2xl border border-[#e9c349]/40 overflow-hidden transition-all duration-300 hover:border-[#e9c349] hover:shadow-[0_0_35px_rgba(233,195,73,0.2)] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6 cursor-pointer backdrop-blur-xl"
              style={{
                background: "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(233, 195, 73, 0.12), transparent 40%)",
              }}
            >
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#e9c349] via-[#fcebad] to-[#e9c349] group-hover:w-full transition-all duration-500 ease-out z-30"></div>

              {/* CEO Image Ring */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden shrink-0 border-2 border-[#e9c349]/50 shadow-lg group-hover:border-[#e9c349] transition-colors">
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                {/* Badge CEO Kiri Atas: "01 CEO" (Tanpa #) */}
                <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-[#0a0c0d]/80 border border-[#e9c349]/40 text-[#e9c349] text-[9px] font-bold tracking-widest uppercase backdrop-blur-md">
                  01 {mText(ceo, "role")}
                </div>
              </div>

              {/* CEO Info */}
              <div className="text-center sm:text-left flex-1 space-y-2">
                <span className="inline-block text-[#e9c349] text-[11px] font-bold uppercase tracking-[0.2em] bg-[#e9c349]/10 px-3 py-0.5 rounded-full border border-[#e9c349]/20">
                  {mText(ceo, "role")}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold group-hover:text-[#e9c349] transition-colors">
                  {ceo.name}
                </h3>

                {mText(ceo, "description") && (
                  <p className="text-xs text-[#a0a5ad] line-clamp-2 leading-relaxed">
                    {mText(ceo, "description")}
                  </p>
                )}

                <div className="pt-2 flex items-center justify-center sm:justify-start gap-2 text-[11px] text-[#e9c349] font-medium tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>{clickCard}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </motion.div>

            {/* Connecting Flow Line */}
            <div className="absolute left-1/2 top-full w-[2px] h-12 -translate-x-1/2 hidden lg:block overflow-hidden bg-white/10">
              <div className="w-full h-full bg-gradient-to-b from-[#e9c349] to-transparent shadow-[0_0_10px_#e9c349]"></div>
            </div>
          </motion.div>

          {/* ================= CIRCUIT CONNECTING LINES ================= */}
          {directors.length > 1 ? (
            <div className="relative w-full max-w-4xl mb-12 hidden lg:block">
              <div className="absolute top-0 left-[15%] right-[15%] h-[2px] bg-white/10 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-[#e9c349] to-transparent shadow-[0_0_10px_#e9c349]"></div>
              </div>
              <div className="flex justify-between px-[15%]">
                {directors.map((_, i) => (
                  <div key={i} className="w-[2px] h-8 bg-white/10 relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-[#e9c349] to-transparent"></div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="hidden lg:block w-[2px] h-8 -mt-8 bg-white/10"></div>
          )}

          {/* ================= BOTTOM ROW: DIRECTORS CARDS ================= */}
          <div
            className={
              directors.length === 1
                ? "flex justify-center w-full relative z-20"
                : "grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl relative z-20"
            }
          >
            {directors.map((director, index) => (
              <motion.div
                key={director.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseMove={handleMouseMove}
                  onClick={() => setSelectedMember({ ...director, tier: "director", n: index + 2 })}
                  className="group relative bg-[#131718]/80 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#e9c349]/70 hover:shadow-[0_0_25px_rgba(233,195,73,0.15)] p-4 sm:p-5 flex items-center gap-4 cursor-pointer backdrop-blur-xl"
                  style={{
                    background: "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(233, 195, 73, 0.10), transparent 40%)",
                  }}
                >
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out z-30"></div>

                  {/* Director Avatar dengan Badge Kiri Atas yang Sama: "02 COO" (Tanpa #) */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-white/10 group-hover:border-[#e9c349]/50 transition-colors">
                    <img
                      src={director.image}
                      alt={director.name}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    {/* Badge Kiri Atas: "02 COO" */}
                    <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-[#0a0c0d]/80 border border-[#e9c349]/40 text-[#e9c349] text-[9px] font-bold tracking-widest uppercase backdrop-blur-md">
                      0{index + 2} {mText(director, "role")}
                    </div>
                  </div>

                  {/* Director Content */}
                  <div className="text-left flex-1 space-y-1">
                    <span className="inline-block text-[#e9c349] text-[10px] font-bold uppercase tracking-[0.18em] bg-[#e9c349]/10 px-2.5 py-0.5 rounded-full border border-[#e9c349]/20">
                      {mText(director, "role")}
                    </span>

                    <h4 className="text-lg sm:text-xl font-serif text-white font-bold group-hover:text-[#e9c349] transition-colors">
                      {director.name}
                    </h4>
                    
                    {mText(director, "description") && (
                      <p className="text-[11px] text-[#a0a5ad] line-clamp-2 leading-normal">
                        {mText(director, "description")}
                      </p>
                    )}

                    <div className="pt-1 flex items-center gap-1 text-[10px] text-[#e9c349] font-medium tracking-wider group-hover:translate-x-1 transition-transform">
                      <span>{clickCard}</span>
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= MODAL DETAIL ================= */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-gradient-to-b from-[#181c1e] to-[#0d0f10] border-2 border-[#e9c349]/50 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-[0_0_60px_rgba(233,195,73,0.2)]"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#e9c349]/10 blur-3xl pointer-events-none"></div>

              <button
                onClick={() => setSelectedMember(null)}
                aria-label={t("structure.close")}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#e9c349] hover:text-[#0b0d0e] transition-colors cursor-pointer z-30"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#e9c349] shrink-0 shadow-2xl">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center sm:text-left space-y-3 flex-1">
                  <span className="px-3 py-1 rounded-full bg-[#e9c349]/10 border border-[#e9c349]/40 text-[#e9c349] text-[10px] font-bold tracking-widest uppercase">
                    0{selectedMember.n} {mText(selectedMember, "role")}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold">
                      {selectedMember.name}
                    </h3>
                    <p className="text-[#e9c349] text-xs font-semibold tracking-wider uppercase mt-1">
                      {mText(selectedMember, "role")}
                    </p>
                  </div>

                  {mText(selectedMember, "description") && (
                    <p className="text-xs sm:text-sm text-[#c4c6cf] font-normal leading-relaxed border-t border-white/10 pt-3">
                      {mText(selectedMember, "description")}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}