import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { showcaseCategories, showcasePhotos } from "../data/showcaseData";
import { getWaLink } from "../data/contact";
import { useLanguage } from "../context/LanguageContext";

const PAGE_SIZE = 12;

function Lightbox({ photos, index, onChange, onClose, label, t }) {
  const photo = photos[index];
  const total = photos.length;
  const prev = useCallback(() => onChange((index - 1 + total) % total), [index, total, onChange]);
  const next = useCallback(() => onChange((index + 1) % total), [index, total, onChange]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = old;
    };
  }, [onClose, prev, next]);

  const btn =
    "absolute z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-[#e9c349] hover:text-[#111415] text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9c349]";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
      className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4 md:p-10 overflow-hidden"
    >
      {/* Latar berpendar dari foto itu sendiri, supaya foto kecil tidak terlihat "kosong" */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30 blur-3xl scale-110"
        style={{ backgroundImage: `url("${photo.src}")` }}
      />
      <button onClick={onClose} aria-label={t("showcase.close")} className={`${btn} top-4 right-4`}>
        <span className="material-symbols-outlined">close</span>
      </button>
      {total > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label={t("showcase.prev")}
            className={`${btn} left-3 md:left-6 top-1/2 -translate-y-1/2`}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label={t("showcase.next")}
            className={`${btn} right-3 md:right-6 top-1/2 -translate-y-1/2`}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </>
      )}
      <figure onClick={(e) => e.stopPropagation()} className="relative flex flex-col items-center max-w-6xl w-full">
        <div className="photo-grain relative inline-block overflow-hidden rounded-sm ring-1 ring-[#e9c349]/30 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
          <img src={photo.src} alt={label} className="block max-h-[80vh] max-w-full w-auto h-auto object-contain" />
        </div>
        <figcaption className="mt-4 flex items-center gap-4 text-sm text-[#c4c6cf]">
          <span>{label}</span>
          <span className="text-[#a9acb4]">{index + 1} / {total}</span>
        </figcaption>
      </figure>
    </div>
  );
}

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState(null);
  const [ratios, setRatios] = useState({});
  const reduce = useReducedMotion();
  const { t, lang } = useLanguage();
  const services = t("showcase.services");
  const stats = t("showcase.stats");
  const categoryLabel = (c) => t(`showcase.categories.${c}`, c);
  const countFor = (c) =>
    c === "All Works" ? showcasePhotos.length : showcasePhotos.filter((p) => p.category === c).length;
  const saveRatio = (id, img) => {
    if (!img.naturalWidth || !img.naturalHeight) return;
    const r = img.naturalWidth / img.naturalHeight;
    setRatios((prev) => (prev[id] === r ? prev : { ...prev, [id]: r }));
  };
  const selectCategory = (c) => {
    setActiveCategory(c);
    setVisible(PAGE_SIZE);
    setLightbox(null);
  };

  const filteredPhotos =
    activeCategory === "All Works"
      ? showcasePhotos
      : showcasePhotos.filter((p) => p.category === activeCategory);
  const shownPhotos = filteredPhotos.slice(0, visible);
  const photoLabel = (p) => p.caption || categoryLabel(p.category);

  const line = (i) => ({
    initial: reduce ? false : { y: "100%" },
    animate: { y: 0 },
    transition: { duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <div className="bg-[#111415] text-[#e1e3e4] min-h-screen pt-20 font-sans">
      <style>{`
        .photo-grain::after {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          opacity: .12; mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
      `}</style>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop"
          alt={t("showcase.heroAlt")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111415] via-[#111415]/60 to-[#111415]/20"></div>

        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60 hidden md:block">
          {t("showcase.scroll")} ↓
        </span>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-16 pb-14 md:pb-20">
          <p className="mb-4 text-sm text-[#e9c349]">{t("showcase.label")}</p>
          <h1
            className="font-serif font-bold text-[#f3f1ea] leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)" }}
          >
            <span className="block overflow-hidden pb-[0.18em]">
              <motion.span className="block" {...line(0)}>
                {t("showcase.titleLine1")}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.18em]">
              <motion.span className="block italic font-normal text-[#e9c349]" {...line(1)}>
                {t("showcase.titleLine2")}
              </motion.span>
            </span>
          </h1>

          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-white/20 pt-5">
            <p className="font-serif italic text-lg md:text-xl text-[#d0d2d8] max-w-md leading-snug">
              &ldquo;{t("showcase.quote")}&rdquo;
            </p>
            <div className="md:text-right">
              <p className="font-serif italic text-xl md:text-2xl text-[#e9c349]">Rising the Stars</p>
              <p className="mt-1 text-sm text-[#a9acb4]">Allstars Enterprise</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATISTIK ================= */}
      <section className="px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 border-b border-white/10 py-10">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="font-serif text-4xl md:text-5xl text-white">{item.value}</p>
              <p className="mt-1 text-sm text-[#a9acb4]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FILTER + GRID ================= */}
      <section className="px-6 md:px-16 py-16 md:py-24 max-w-[1440px] mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">{t("showcase.selectedWorks")}</h2>

        {/* Tab teks sederhana, garis bawah menandai yang aktif */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12 border-b border-white/10">
          {showcaseCategories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => selectCategory(category)}
                aria-pressed={active}
                className={`relative pb-4 text-sm md:text-base transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9c349] ${
                  active ? "text-[#e9c349]" : "text-[#9a9da5] hover:text-white"
                }`}
              >
                {categoryLabel(category)}
                <span className="ml-1.5 text-xs opacity-60">{countFor(category)}</span>
                {active && (
                  <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-[#e9c349]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Galeri: kotak seragam, klik untuk melihat foto besar. Ganti filter = fade, tanpa menggeser */}
        {filteredPhotos.length === 0 ? (
          <p className="text-[#a9acb4]">{t("showcase.empty")}</p>
        ) : (
          <>
            <motion.div
              key={activeCategory}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4"
            >
              {shownPhotos.map((photo, i) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={photoLabel(photo)}
                  className="group relative mb-3 md:mb-4 block w-full break-inside-avoid overflow-hidden rounded-md bg-[#161a1b] ring-1 ring-white/10 hover:ring-[#e9c349]/50 transition-shadow duration-300 cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e9c349]"
                >
                  {/* Kotak mengikuti rasio asli foto, jadi tidak ada bagian yang terpotong */}
                  <div className="photo-grain relative" style={{ aspectRatio: ratios[photo.id] || 4 / 5 }}>
                    <img
                      ref={(el) => {
                        if (el && el.complete) saveRatio(photo.id, el);
                      }}
                      src={photo.src}
                      alt={photoLabel(photo)}
                      loading="lazy"
                      decoding="async"
                      onLoad={(e) => saveRatio(photo.id, e.currentTarget)}
                      className="h-full w-full object-cover contrast-[1.06] saturate-[1.1] brightness-[0.96] group-hover:brightness-100 transition duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    {/* Pemanis: vignette + rona emas tipis menyatukan warna foto yang beragam & menyamarkan buram */}
                    <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(17,20,21,0.55)_100%)]" />
                    <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#e9c349]/10 mix-blend-soft-light" />
                  </div>

                  {/* Bingkai emas tipis muncul saat hover */}
                  <div aria-hidden className="pointer-events-none absolute inset-2 rounded-sm border border-[#e9c349]/0 group-hover:border-[#e9c349]/50 transition-colors duration-500" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 px-3 pb-3 pt-14 md:px-4 md:pb-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                    <p className="text-xs tracking-[0.1em] text-[#e9c349]">{categoryLabel(photo.category)}</p>
                    {photo.caption && <p className="mt-0.5 text-sm text-white">{photo.caption}</p>}
                  </div>
                </button>
              ))}
            </motion.div>

            {visible < filteredPhotos.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="border border-[#e9c349]/60 text-[#e9c349] font-semibold px-8 py-3 rounded-sm hover:bg-[#e9c349]/10 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9c349]"
                >
                  {t("showcase.loadMore")} ({filteredPhotos.length - visible})
                </button>
              </div>
            )}
          </>
        )}

        {lightbox !== null && filteredPhotos[lightbox] && (
          <Lightbox
            photos={filteredPhotos}
            index={lightbox}
            onChange={setLightbox}
            onClose={() => setLightbox(null)}
            label={photoLabel(filteredPhotos[lightbox])}
            t={t}
          />
        )}
      </section>

      {/* ================= EXPERTISE (hanya "All Works") ================= */}
      {activeCategory === "All Works" && (
        <section className="px-6 md:px-16 pb-24 md:pb-32 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-white/10 pt-16 md:pt-24">
            <div className="lg:col-span-7">
              <p className="text-sm text-[#e9c349] mb-3">{t("showcase.coreLabel")}</p>
              <h2 className="font-serif text-4xl md:text-6xl text-[#f3f1ea] leading-tight max-w-xl">
                {t("showcase.servicesHeading")}
              </h2>

              <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
                {services.map((s) => (
                  <li key={s.title} className="py-6 md:py-7 grid md:grid-cols-5 gap-2 md:gap-8">
                    <h3 className="md:col-span-2 font-serif text-xl text-white">{s.title}</h3>
                    <p className="md:col-span-3 text-sm md:text-base text-[#a9acb4] leading-relaxed">
                      {s.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
                alt={t("showcase.crewAlt")}
                className="w-full aspect-[4/5] object-cover rounded-sm"
              />
              <figcaption className="mt-3">
                <p className="text-sm text-[#e9c349]">{t("showcase.crewLabel")}</p>
                <p className="text-sm text-[#a9acb4]">{t("showcase.crewCaption")}</p>
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* ================= CTA ================= */}
      <section className="border-t border-white/10 bg-[#161a1b]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 md:py-28 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="font-serif italic text-4xl md:text-6xl text-white leading-tight">
              {t("showcase.ctaTitle")}
            </h2>
            <p className="mt-5 text-[#a9acb4] max-w-md">
              {t("showcase.ctaText")}
            </p>
          </div>

          <a
              href={getWaLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e9c349] text-[#111415] font-semibold px-8 py-4 rounded-sm hover:bg-[#f1d170] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9c349]"
            >
              {t("showcase.ctaButton")}
            </a>
        </div>
      </section>
    </div>
  );
}