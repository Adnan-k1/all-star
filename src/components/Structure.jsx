import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamData } from "../data/companyData";
import { useLanguage } from "../context/LanguageContext";

// Lebar & jumlah kolom menyesuaikan banyaknya orang
const GRID_BY_COUNT = {
  1: "max-w-sm grid-cols-1",
  2: "max-w-3xl grid-cols-1 sm:grid-cols-2",
  3: "max-w-5xl grid-cols-1 sm:grid-cols-3",
};
const GRID_DEFAULT = "max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

export default function Structure() {
  const { ceo, directors } = teamData;
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);

  // Jabatan & deskripsi: terjemahan per id (ceo / angka), cadangannya teks dari data
  const mText = (m, k) => t(`team.${m.id}.${k}`, m[k] ?? "");

  const members = [
    { ...ceo, tier: "ceo" },
    ...directors.map((d) => ({ ...d, tier: "director" })),
  ];

  // Esc menutup profil
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="leadership" className="py-24 md:py-32 px-6 md:px-16 bg-[#111415] text-[#e1e3e4] font-sans select-none">
      <div className="max-w-[1280px] mx-auto">
        {/* Judul */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="text-sm tracking-[0.2em] text-[#e9c349] uppercase">{t("structure.badge")}</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            {t("structure.titleA")} <span className="text-[#e9c349]">{t("structure.titleB")}</span>
          </h2>
          <p className="mt-5 text-base text-[#a9acb4] leading-relaxed">{t("structure.hint")}</p>
        </div>

        {/* Kartu: foto, jabatan, nama. Tanpa lencana, bingkai, atau garis penghubung */}
        <div className={`grid gap-10 md:gap-14 mx-auto ${GRID_BY_COUNT[members.length] ?? GRID_DEFAULT}`}>
          {members.map((m, i) => (
            <motion.button
              key={m.id}
              type="button"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelected(m)}
              className="group text-left cursor-pointer rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9c349]"
            >
              <div className="overflow-hidden rounded-md bg-[#161a1b] aspect-[4/5]">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top grayscale group-hover:grayscale-0 transition duration-500"
                />
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold tracking-[0.12em] text-[#e9c349]">{mText(m, "role")}</p>
                <h3 className="mt-1 font-serif text-2xl md:text-3xl text-white leading-snug">{m.name}</h3>
                <p className="mt-3 text-sm text-[#a9acb4] group-hover:text-[#e9c349] transition-colors duration-300">
                  {t("structure.clickCard")}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Profil (muncul saat kartu diklik) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.name}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-lg border border-[#e9c349]/30 bg-[#161a1b] p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label={t("structure.close")}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:bg-[#e9c349] hover:text-[#111415] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-md object-cover object-top shrink-0"
                />
                <div className="text-center sm:text-left">
                  <p className="text-xs tracking-[0.18em] text-[#a9acb4] uppercase">
                    {t(selected.tier === "ceo" ? "structure.tierCeo" : "structure.tierDirector")}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-white leading-snug">{selected.name}</h3>
                  <p className="mt-1 text-sm font-semibold tracking-[0.12em] text-[#e9c349]">
                    {mText(selected, "role")}
                  </p>
                  {mText(selected, "description") && (
                    <p className="mt-4 pt-4 border-t border-white/10 text-sm text-[#c4c6cf] leading-relaxed">
                      {mText(selected, "description")}
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