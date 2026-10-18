import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function WhyUs() {
  const { t } = useLanguage();
  const items = t("why.items");

  const renderCard = (item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
      className="group relative bg-[#161a1b]/70 border border-white/5 rounded-2xl p-8 flex flex-col justify-start text-left hover:border-[#e9c349]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-lg overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out"></div>

      <span className="text-2xl font-serif font-bold text-[#e9c349] mb-4 block group-hover:scale-110 transition-transform origin-left duration-300">
        {String(i + 1).padStart(2, "0")}
      </span>
      <h3 className="text-xl font-serif font-semibold text-white mb-4 leading-snug">{item.title}</h3>
      <p className="text-xs sm:text-sm text-[#a1a3a8] font-light leading-relaxed">{item.description}</p>
    </motion.div>
  );

  return (
    <section id="why-us" className="py-28 px-6 md:px-16 bg-[#111415] text-[#e1e3e4] relative overflow-hidden font-sans">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e9c349]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 border border-[#e9c349]/40 rounded-full text-[#e9c349] text-[11px] font-semibold tracking-[0.2em] uppercase bg-[#111415] shadow-sm">
            {t("why.badge")}
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            {t("why.titleA")} <span className="text-[#e9c349]">{t("why.titleB")}</span>
          </h2>

          <div className="w-16 h-[3px] bg-[#e9c349] mx-auto rounded-full mt-2 mb-4 shadow-[0_0_10px_rgba(233,195,73,0.5)]"></div>

          <p className="text-sm md:text-base text-[#c4c6cf] font-light leading-relaxed">{t("why.sub")}</p>
        </div>

        {/* 5 Cards: 3 di atas, 2 di bawah */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.slice(0, 3).map((item, i) => renderCard(item, i))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.slice(3, 5).map((item, i) => renderCard(item, i + 3))}
          </div>
        </div>
      </div>
    </section>
  );
}