import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { showcaseCategories, showcaseProjects } from "../data/showcaseData";

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("All Works");

  // Filter project secara dinamis
  const filteredProjects =
    activeCategory === "All Works"
      ? showcaseProjects
      : showcaseProjects.filter((item) => item.category === activeCategory);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="bg-[#111415] text-[#e1e3e4] min-h-screen pt-20">
      {/* Showcase Hero Header */}
      <section className="relative h-[65vh] md:h-[75vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#111415]/75 z-10 backdrop-blur-[2px]"></div>
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop"
            alt="Cinematic Showcase Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-4 py-1.5 border border-[#e9c349]/40 rounded-full text-[#e9c349] text-[11px] font-semibold tracking-[0.2em] uppercase bg-[#111415]/80">
            PORTFOLIO SHOWCASE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#e9c349] font-bold tracking-tight">
            The Masterpiece Gallery
          </h1>

          <p className="text-base md:text-xl text-[#c4c6cf] italic font-light max-w-2xl mx-auto">
            &ldquo;Where vision meets precision, and moments become legacies.&rdquo;
          </p>

          <div className="pt-4">
            <span className="material-symbols-outlined text-[#e9c349] animate-bounce text-3xl">
              keyboard_double_arrow_down
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111415] to-transparent z-10"></div>
      </section>

      {/* Main Bento Grid & Filter Section */}
      <section className="px-6 md:px-16 py-12 md:py-20 max-w-[1440px] mx-auto">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16 border-b border-[#e9c349]/10 pb-6">
          {showcaseCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs md:text-sm font-medium tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-[#e9c349] text-[#111415] font-semibold shadow-[0_0_15px_rgba(233,195,73,0.3)]"
                  : "text-[#c4c6cf] hover:text-[#e9c349] hover:bg-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout dengan Animasi */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onMouseMove={handleMouseMove}
                className={`${project.gridClass} group relative overflow-hidden bg-[#161a1b] rounded-2xl border border-white/10 transition-all duration-500 hover:border-[#e9c349]/50 hover:-translate-y-1.5 shadow-xl`}
              >
                <div
                  className={`${project.height} w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105`}
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#111415] via-[#111415]/50 to-transparent p-6 md:p-8 flex flex-col justify-end z-10">
                  <span className="text-[#e9c349] text-[11px] font-semibold uppercase tracking-[0.2em] mb-2 flex items-center">
                    <span className="w-6 h-[1px] bg-[#e9c349] mr-2"></span>
                    {project.badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#c4c6cf] max-w-lg leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expertise Redefined Section */}
        <div className="mt-28 md:mt-36 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#e9c349]">
              Expertise Redefined
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-5 border-l-2 border-[#e9c349]/30 pl-5 hover:border-[#e9c349] transition-all">
                <span className="material-symbols-outlined text-[#e9c349] text-3xl mt-1">
                  theaters
                </span>
                <div>
                  <h4 className="text-lg md:text-xl font-serif text-white font-semibold mb-1">
                    Event Organizer &amp; Production
                  </h4>
                  <p className="text-xs md:text-sm text-[#c4c6cf] font-light leading-relaxed">
                    Full-scale execution of festivals, gala dinners, and corporate summits with unmatched technical precision.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5 border-l-2 border-[#e9c349]/30 pl-5 hover:border-[#e9c349] transition-all">
                <span className="material-symbols-outlined text-[#e9c349] text-3xl mt-1">
                  campaign
                </span>
                <div>
                  <h4 className="text-lg md:text-xl font-serif text-white font-semibold mb-1">
                    Integrated Marketing Campaign
                  </h4>
                  <p className="text-xs md:text-sm text-[#c4c6cf] font-light leading-relaxed">
                    Omni-channel storytelling that captures hearts and minds, driving measurable brand growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5 border-l-2 border-[#e9c349]/30 pl-5 hover:border-[#e9c349] transition-all">
                <span className="material-symbols-outlined text-[#e9c349] text-3xl mt-1">
                  smart_display
                </span>
                <div>
                  <h4 className="text-lg md:text-xl font-serif text-white font-semibold mb-1">
                    Commercial &amp; Content Production
                  </h4>
                  <p className="text-xs md:text-sm text-[#c4c6cf] font-light leading-relaxed">
                    Award-winning visual content tailored for cinema, broadcast, and digital platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="aspect-square rounded-full border border-[#e9c349]/20 absolute -inset-6 animate-[spin_25s_linear_infinite]"></div>
            <div className="relative bg-[#161a1b] rounded-2xl overflow-hidden aspect-[4/5] max-w-md w-full border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
                alt="Strategy workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden text-center bg-[#161a1b] border-t border-white/5">
        <div className="relative z-10 px-6 max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif italic text-white font-bold">
            Ready to make history?
          </h2>
          <p className="text-sm md:text-base text-[#c4c6cf] font-light">
            Join the elite portfolio of brands that have chosen Allstar Enterprise to define their legacy.
          </p>
          <div className="pt-2">
            <a
              href="/#contact"
              className="inline-block bg-[#e9c349] text-[#111415] text-xs font-semibold tracking-widest uppercase px-8 py-4 rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(233,195,73,0.3)]"
            >
              REQUEST A CONSULTATION
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}