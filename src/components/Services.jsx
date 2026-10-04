import { useRef } from "react";
import { servicesData } from "../data/companyData";

export default function Services() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = 360 + 24;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="who-we-are" className="py-24 px-6 md:px-16 bg-[#111415] text-[#e1e3e4]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header - Simpel & Clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Crafting <span className="text-[#e9c349] italic">Unforgettable</span> Experiences.
            </h2>
            <p className="text-sm md:text-base text-[#c4c6cf] font-light max-w-xl">
              From concept to curtain call, we elevate every detail into an iconic moment.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous Service"
              className="w-11 h-11 rounded-full border border-[#e9c349]/30 flex items-center justify-center text-[#e9c349] hover:bg-[#e9c349] hover:text-[#111415] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next Service"
              className="w-11 h-11 rounded-full border border-[#e9c349]/30 flex items-center justify-center text-[#e9c349] hover:bg-[#e9c349] hover:text-[#111415] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Services Cards Slider */}
        <div
          ref={sliderRef}
          className="flex items-stretch gap-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory pb-8 cursor-grab active:cursor-grabbing"
        >
          {servicesData.map((service, index) => (
            <div
              key={service.id || index}
              className="min-w-[85vw] sm:min-w-[320px] md:min-w-[360px] snap-start"
            >
              <div className="h-full bg-[#161a1b]/60 border border-[#e9c349]/15 rounded-xl p-7 flex flex-col justify-between hover:border-[#e9c349]/40 transition-colors duration-300">
                <div>
                  {/* Icon & Index Number */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="material-symbols-outlined text-[#e9c349] text-3xl">
                      {service.icon || "star"}
                    </span>
                    <span className="text-xs font-semibold text-[#e9c349]/50 tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 mb-6">
                    <h3 className="text-lg font-semibold text-[#e1e3e4]">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#c4c6cf] leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Minimalist Bottom Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e9c349] hover:underline pt-4 border-t border-white/5"
                >
                  Explore Service
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Note (Sesuai Foto Rujukan) */}
        <div className="mt-8 p-6 md:p-8 rounded-2xl bg-[#161a1b]/80 border border-[#e9c349]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm md:text-base text-[#c4c6cf] max-w-3xl leading-relaxed font-light">
            Kami menyelaraskan ide besar dengan eksekusi lintas platform yang menghubungkan emosi audiens dengan tujuan bisnis Anda.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#e9c349] text-[#111415] text-xs font-bold tracking-wider uppercase hover:bg-[#d8b238] transition-all shrink-0 cursor-pointer"
          >
            Konsultasikan Event Anda
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>

      </div>
    </section>
  );
}