import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  animate,
  useReducedMotion,
} from "framer-motion";
import { showcaseCategories, showcaseProjects } from "../data/showcaseData";

/* ---------- Helper: angka naik saat terlihat ---------- */
function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 150, suffix: "+", label: "Iconic events delivered" },
  { value: 80, suffix: "+", label: "Brand partners" },
  { value: 12, suffix: "", label: "Years of experience" },
  { value: 25, suffix: "", label: "Awards won" },
];

const competencies = [
  {
    icon: "theaters",
    title: "Event Organizer & Production",
    text: "Full-scale execution of festivals, gala dinners, and corporate summits with unmatched technical precision.",
  },
  {
    icon: "campaign",
    title: "Integrated Marketing Campaign",
    text: "Omni-channel storytelling that captures hearts and minds, driving measurable brand growth.",
  },
  {
    icon: "smart_display",
    title: "Commercial & Content Production",
    text: "Award-winning visual content tailored for cinema, broadcast, and digital platforms.",
  },
];

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const reduce = useReducedMotion();

  /* Progress bar emas di atas halaman */
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  /* Parallax hero */
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(heroScroll, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", reduce ? "0%" : "-12%"]);
  const heroTextOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const filteredProjects =
    activeCategory === "All Works"
      ? showcaseProjects
      : showcaseProjects.filter((item) => item.category === activeCategory);

  const countFor = (cat) =>
    cat === "All Works"
      ? showcaseProjects.length
      : showcaseProjects.filter((p) => p.category === cat).length;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="bg-[#111415] text-[#e1e3e4] min-h-screen pt-20 font-sans select-none">
      <style>{`
        @keyframes gold-shimmer { to { background-position: 200% center; } }
        @keyframes float-soft { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .gold-text {
          background: linear-gradient(110deg, #b8921f 0%, #e9c349 25%, #fff3c4 50%, #e9c349 75%, #b8921f 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gold-shimmer 6s linear infinite;
        }
        .film-grain::after {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .07; mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        @media (prefers-reduced-motion: reduce) {
          .gold-text { animation: none; }
          .float-soft { animation: none !important; }
        }
      `}</style>

      {/* Progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-[#b8921f] via-[#e9c349] to-[#fff3c4] z-[60]"
      />

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="film-grain relative h-[65vh] md:h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden"
      >
        <motion.div style={{ y: heroImgY }} className="absolute inset-0 -top-10 -bottom-10 z-0">
          <div className="absolute inset-0 bg-[#111415]/70 z-10"></div>
          <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,#111415_95%)]"></div>
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop"
            alt="Cinematic Showcase Hero"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>

        {/* Garis cahaya sinematik */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e9c349]/30 to-transparent z-10"></div>

        <motion.div
          style={{ y: heroTextY, opacity: heroTextOpacity }}
          className="relative z-20 px-6 max-w-4xl mx-auto space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e9c349]/40 rounded-full text-[#e9c349] text-[11px] font-semibold tracking-[0.2em] uppercase bg-[#111415]/80 backdrop-blur shadow-[0_0_20px_rgba(233,195,73,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e9c349] opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e9c349]"></span>
            </span>
            Portfolio Showcase
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="gold-text text-5xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight leading-[1.05] drop-shadow-[0_4px_30px_rgba(233,195,73,0.25)]"
          >
            The Masterpiece Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base md:text-xl text-[#d6d8df] italic font-light max-w-2xl mx-auto"
          >
            &ldquo;Where vision meets precision, and moments become legacies.&rdquo;
          </motion.p>

          <div className="pt-4 flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#e9c349]/70">Scroll</span>
            <div className="w-[22px] h-9 rounded-full border border-[#e9c349]/50 flex justify-center pt-1.5">
              <motion.span
                animate={reduce ? {} : { y: [0, 12, 0], opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-1 h-2 rounded-full bg-[#e9c349]"
              />
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#111415] to-transparent z-20"></div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="relative z-30 -mt-10 px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-[#e9c349]/20 bg-[#161a1b]/90 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-7 text-center ${
                i !== 0 ? "md:border-l border-white/10" : ""
              } ${i === 2 ? "border-l md:border-l border-white/10" : ""} ${
                i >= 2 ? "border-t md:border-t-0 border-white/10" : ""
              }`}
            >
              <p className="gold-text text-3xl md:text-4xl font-serif font-bold">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[11px] md:text-xs text-[#c4c6cf] mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FILTER + GRID ================= */}
      <section className="px-6 md:px-16 py-16 md:py-24 max-w-[1440px] mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-serif font-semibold text-white">Selected Works</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#e9c349]"></span>
            <span className="material-symbols-outlined text-[#e9c349] text-base">diamond</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#e9c349]"></span>
          </div>
        </div>

        {/* Filter dengan pill emas yang meluncur */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14">
          {showcaseCategories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
                className={`relative text-xs md:text-sm font-medium tracking-wider px-5 py-2.5 rounded-full transition-colors duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e9c349] ${
                  active ? "text-[#111415] font-semibold" : "text-[#c4c6cf] hover:text-[#e9c349]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4a82a] to-[#f1d170] shadow-[0_0_20px_rgba(233,195,73,0.4)]"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {category}
                  <span
                    className={`text-[10px] rounded-full px-1.5 py-0.5 ${
                      active ? "bg-[#111415]/15" : "bg-white/10"
                    }`}
                  >
                    {countFor(category)}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45 }}
                key={project.id}
                onMouseMove={handleMouseMove}
                className={`${project.gridClass} group relative overflow-hidden bg-[#161a1b] rounded-2xl border border-white/10 transition-all duration-500 hover:border-[#e9c349]/60 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_25px_60px_rgba(233,195,73,0.12)]`}
              >
                <div
                  className={`${project.height} w-full bg-cover bg-center transition-transform duration-[900ms] ease-out group-hover:scale-110`}
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>

                {/* Spotlight emas mengikuti kursor */}
                <div
                  className="absolute inset-0 z-[5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(380px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(233,195,73,0.18), transparent 60%)",
                  }}
                ></div>

                {/* Panah di pojok */}
                <div className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full border border-[#e9c349]/50 bg-[#111415]/70 backdrop-blur flex items-center justify-center opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500">
                  <span className="material-symbols-outlined text-[#e9c349] text-xl">north_east</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0f] via-[#111415]/50 to-transparent p-6 md:p-8 flex flex-col justify-end z-10">
                  <span className="inline-flex items-center self-start text-[#e9c349] text-[11px] font-semibold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full border border-[#e9c349]/30 bg-[#111415]/60 backdrop-blur-sm">
                    {project.badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white font-semibold mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#c4c6cf] max-w-lg leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <span className="mt-4 h-px w-0 bg-gradient-to-r from-[#e9c349] to-transparent group-hover:w-24 transition-all duration-700"></span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================= EXPERTISE (hanya "All Works") ================= */}
        {activeCategory === "All Works" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mt-28 md:mt-36 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center border-t border-white/10 pt-20"
          >
            <div className="space-y-10">
              <div>
                <span className="text-[#e9c349] text-xs font-bold tracking-[0.25em] uppercase">
                  Our Core Competencies
                </span>
                <h2 className="gold-text text-4xl md:text-5xl font-bold font-serif mt-3">
                  Expertise Redefined
                </h2>
              </div>

              <div className="space-y-4">
                {competencies.map((c) => (
                  <div
                    key={c.title}
                    className="group flex items-start gap-5 p-5 rounded-xl border border-transparent hover:border-[#e9c349]/30 hover:bg-white/[0.03] transition-all duration-500"
                  >
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#e9c349]/20 to-transparent border border-[#e9c349]/30 flex items-center justify-center group-hover:shadow-[0_0_25px_rgba(233,195,73,0.3)] group-hover:rotate-3 transition-all duration-500">
                      <span className="material-symbols-outlined text-[#e9c349] text-3xl">{c.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-serif text-white font-semibold mb-1 group-hover:text-[#e9c349] transition-colors">
                        {c.title}
                      </h4>
                      <p className="text-xs md:text-sm text-[#c4c6cf] font-light leading-relaxed">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Foto & frame */}
            <div className="relative flex justify-center items-center py-8">
              <div className="absolute w-[380px] h-[380px] bg-[#e9c349]/15 rounded-full blur-[110px] pointer-events-none"></div>
              <div className="aspect-square rounded-full border border-dashed border-[#e9c349]/25 absolute -inset-6 animate-[spin_40s_linear_infinite] pointer-events-none"></div>
              <div className="aspect-square rounded-full border border-[#e9c349]/10 absolute -inset-14 animate-[spin_60s_linear_infinite_reverse] pointer-events-none"></div>

              <div className="relative bg-[#161a1b] rounded-2xl overflow-hidden aspect-[4/5] max-w-md w-full border border-[#e9c349]/30 shadow-[0_0_40px_rgba(0,0,0,0.8)] group hover:border-[#e9c349] transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
                  alt="Strategy workspace"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111415] via-transparent to-transparent opacity-80"></div>

                {/* Sudut dekoratif */}
                <span className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#e9c349]/70 rounded-tl-md"></span>
                <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#e9c349]/70 rounded-tr-md"></span>

                <div className="float-soft absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#111415]/80 border border-[#e9c349]/30 backdrop-blur-md flex items-center justify-between shadow-lg animate-[float-soft_5s_ease-in-out_infinite]">
                  <div>
                    <p className="text-[#e9c349] text-[10px] font-bold tracking-widest uppercase">
                      Proven Track Record
                    </p>
                    <p className="text-white text-sm font-semibold">150+ Iconic Events Delivered</p>
                  </div>
                  <span className="material-symbols-outlined text-[#e9c349] text-2xl">verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-28 overflow-hidden text-center bg-[#161a1b] border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(233,195,73,0.12),transparent_60%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[#e9c349]/60 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 px-6 max-w-3xl mx-auto space-y-6"
        >
          <span className="material-symbols-outlined text-[#e9c349] text-4xl">workspace_premium</span>
          <h2 className="gold-text text-4xl md:text-6xl font-serif italic font-bold">Ready to make history?</h2>
          <p className="text-sm md:text-base text-[#c4c6cf] font-light max-w-xl mx-auto">
            Join the elite portfolio of brands that have chosen Allstar Enterprise to define their legacy.
          </p>
          <div className="pt-4">
            <a
              href="/#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-gradient-to-r from-[#d4a82a] to-[#f1d170] text-[#111415] text-xs font-semibold tracking-widest uppercase px-9 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(233,195,73,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9c349]"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
              <span className="relative">Request a Consultation</span>
              <span className="material-symbols-outlined relative text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 