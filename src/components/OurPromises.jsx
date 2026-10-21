import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const ICONS = ["psychology", "shield", "rocket_launch", "verified"];

export default function OurPromises() {
  const { t } = useLanguage();
  const items = t("promises.items");

  return (
    <section id="our-promises" className="py-28 px-6 md:px-16 bg-[#111415] text-[#e1e3e4] relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#e9c349]/5 blur-[140px] rounded-full pointer-events-none"></div>

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
            {t("promises.badge")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight"
          >
            {t("promises.titleA")} <span className="text-[#e9c349]">{t("promises.titleB")}</span>
          </motion.h2>

          <div className="w-16 h-[3px] bg-[#e9c349] mx-auto rounded-full mt-2 mb-4 shadow-[0_0_12px_rgba(233,195,73,0.5)]"></div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-[#c4c6cf] font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {t("promises.sub")}
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className="group relative bg-[#161a1b]/70 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#e9c349]/40 hover:-translate-y-2 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out"></div>

              <div className="w-16 h-16 rounded-2xl border border-[#e9c349]/60 bg-[#111415] flex items-center justify-center text-[#e9c349] mb-6 shadow-[0_0_15px_rgba(233,195,73,0.15)] group-hover:shadow-[0_0_25px_rgba(233,195,73,0.35)] group-hover:scale-105 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">{ICONS[i]}</span>
              </div>

              <span className="text-[11px] font-semibold text-[#e9c349] tracking-[0.25em] uppercase mb-3">
                {t("promises.pillar")} {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="text-xl font-serif font-semibold text-white mb-4 leading-snug">{item.title}</h3>

              <div className="w-8 h-[1px] bg-white/10 mb-4 group-hover:w-12 group-hover:bg-[#e9c349]/40 transition-all duration-300"></div>

              <p className="text-sm text-[#a1a3a8] font-normal leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}