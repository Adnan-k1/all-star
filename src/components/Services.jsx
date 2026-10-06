import { useState, useEffect, useRef, useCallback } from "react";
import { servicesData } from "../data/companyData";

const AUTOPLAY_MS = 4000;
const RESUME_AFTER_TOUCH_MS = 3000;
const SWIPE_DISTANCE = 50; // px minimal untuk dianggap swipe
const DRAG_THRESHOLD = 8; // px minimal untuk dianggap drag (bukan klik)

export default function Services() {
  const total = servicesData.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Gesture disimpan di ref agar tidak kena nilai state yang basi
  const startX = useRef(0);
  const deltaX = useRef(0);
  const dragging = useRef(false);
  const didDrag = useRef(false);
  const resumeTimer = useRef(null);

  const goTo = useCallback(
    (index) => setCurrentIndex(((index % total) + total) % total),
    [total]
  );
  const prevSlide = () => goTo(currentIndex - 1);
  const nextSlide = () => goTo(currentIndex + 1);

  // Autoplay (mati kalau pengguna memilih reduced motion)
  useEffect(() => {
    if (paused || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => setCurrentIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  // --- Gesture: satu set handler untuk mouse, touch, dan trackpad ---
  const handlePointerDown = (e) => {
    clearTimeout(resumeTimer.current);
    setPaused(true);
    dragging.current = true;
    didDrag.current = false;
    startX.current = e.clientX;
    deltaX.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!dragging.current) return;
    deltaX.current = e.clientX - startX.current;
    if (Math.abs(deltaX.current) > DRAG_THRESHOLD) didDrag.current = true;
  };

  const endDrag = (e) => {
    if (dragging.current) {
      dragging.current = false;
      if (deltaX.current < -SWIPE_DISTANCE) nextSlide();
      else if (deltaX.current > SWIPE_DISTANCE) prevSlide();
    }
    // Di layar sentuh tidak ada "mouse leave", jadi autoplay dilanjutkan lewat timer
    if (e?.pointerType && e.pointerType !== "mouse") {
      resumeTimer.current = setTimeout(() => setPaused(false), RESUME_AFTER_TOUCH_MS);
    }
  };

  // Cegah klik (link / pilih kartu) yang tidak sengaja terjadi setelah drag
  const handleClickCapture = (e) => {
    if (didDrag.current) {
      e.preventDefault();
      e.stopPropagation();
      didDrag.current = false;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  if (!total) return null;

  return (
    <section
      id="who-we-are"
      className="py-24 px-4 md:px-12 bg-[#111415] text-[#e1e3e4] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            Crafting <span className="text-[#e9c349] italic">Unforgettable</span> Experiences.
          </h2>
          <p className="text-sm md:text-base text-[#c4c6cf] font-light">
            From concept to curtain call, we elevate every detail into an iconic moment.
          </p>
        </div>

        {/* Carousel */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Layanan kami"
          tabIndex={0}
          style={{ touchAction: "pan-y" }}
          className="relative flex items-center justify-center min-h-[440px] my-8 select-none cursor-grab active:cursor-grabbing focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9c349]/50 rounded-2xl"
          onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
          onPointerLeave={(e) => {
            if (e.pointerType === "mouse") setPaused(false);
            endDrag();
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={handleClickCapture}
          onKeyDown={handleKeyDown}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Panah kiri */}
          <button
            onClick={prevSlide}
            aria-label="Layanan sebelumnya"
            className="absolute left-2 md:left-8 z-30 w-12 h-12 rounded-full bg-[#161a1b]/80 border border-[#e9c349]/40 text-[#e9c349] flex items-center justify-center hover:bg-[#e9c349] hover:text-[#111415] transition-colors cursor-pointer backdrop-blur-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9c349]"
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              chevron_left
            </span>
          </button>

          {/* Kartu */}
          <div
            className="relative w-full max-w-4xl h-[400px] flex items-center justify-center"
            aria-live={paused ? "polite" : "off"}
          >
            {servicesData.map((service, index) => {
              let offset = index - currentIndex;
              if (offset < -1) offset += total;
              if (offset > 1) offset -= total;

              const isCenter = offset === 0;
              if (Math.abs(offset) > 1) return null;

              const translate = isCenter ? "0%" : offset < 0 ? "-65%" : "65%";
              const scale = isCenter ? 1 : 0.82;

              return (
                <div
                  key={service.id ?? index}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} dari ${total}`}
                  aria-hidden={!isCenter}
                  onClick={() => !isCenter && goTo(index)}
                  style={{ transform: `translateX(${translate}) scale(${scale})` }}
                  className={`absolute h-full w-[88%] sm:w-[380px] md:w-[420px] transition-all duration-500 ease-out motion-reduce:transition-none ${
                    isCenter ? "z-20 opacity-100" : "z-10 opacity-40 hover:opacity-60 cursor-pointer"
                  }`}
                >
                  <div
                    className={`h-full border rounded-2xl p-8 flex flex-col justify-between shadow-2xl transition-colors duration-300 ${
                      isCenter
                        ? "border-[#e9c349] bg-gradient-to-b from-[#1a1f21] to-[#111415]"
                        : "border-white/10 bg-[#161a1b]"
                    }`}
                  >
                    <div>
                      <span
                        className="material-symbols-outlined text-[#e9c349] text-4xl mb-6 block"
                        aria-hidden="true"
                      >
                        {service.icon || "star"}
                      </span>

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-[#e1e3e4]">{service.title}</h3>
                        <p className="text-sm text-[#c4c6cf] leading-relaxed font-light line-clamp-5">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      tabIndex={isCenter ? 0 : -1}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#e9c349] hover:underline pt-4 border-t border-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e9c349]"
                    >
                      Daftar sekarang
                      <span className="material-symbols-outlined text-base" aria-hidden="true">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Panah kanan */}
          <button
            onClick={nextSlide}
            aria-label="Layanan berikutnya"
            className="absolute right-2 md:right-8 z-30 w-12 h-12 rounded-full bg-[#161a1b]/80 border border-[#e9c349]/40 text-[#e9c349] flex items-center justify-center hover:bg-[#e9c349] hover:text-[#111415] transition-colors cursor-pointer backdrop-blur-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9c349]"
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              chevron_right
            </span>
          </button>
        </div>

        {/* Indikator */}
        <div className="flex justify-center items-center gap-1 mt-4">
          {servicesData.map((service, index) => (
            <button
              key={service.id ?? index}
              onClick={() => goTo(index)}
              aria-label={`Lihat layanan ${service.title ?? index + 1}`}
              aria-current={currentIndex === index}
              className="py-3 px-1 cursor-pointer group"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-[#e9c349]"
                    : "w-2 bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-14 p-6 md:p-8 rounded-2xl bg-[#161a1b]/80 border border-[#e9c349]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm md:text-base text-[#c4c6cf] max-w-3xl leading-relaxed font-light">
            Kami menyelaraskan ide besar dengan eksekusi lintas platform yang menghubungkan emosi audiens dengan tujuan bisnis Anda.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#e9c349] text-[#111415] text-sm font-semibold hover:bg-[#f2d062] transition-colors shrink-0 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e9c349]"
          >
            Konsultasikan event Anda
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}