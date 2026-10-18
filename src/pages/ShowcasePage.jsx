import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { showcaseCategories, showcaseProjects } from "../data/showcaseData";
import { WA_LINK, socials } from "../data/contact";

const services = [
  {
    title: "Event Organizer & Production",
    text: "Festivals, gala dinners and corporate summits, run end to end by one crew.",
  },
  {
    title: "Integrated Marketing Campaigns",
    text: "One story told across every channel, with results you can measure.",
  },
  {
    title: "Commercial & Content Production",
    text: "Film and video made for cinema, broadcast and digital screens.",
  },
];

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const reduce = useReducedMotion();

  const filteredProjects =
    activeCategory === "All Works"
      ? showcaseProjects
      : showcaseProjects.filter((item) => item.category === activeCategory);

  // Satu-satunya momen animasi otomatis: judul hero muncul per baris
  const line = (i) => ({
    initial: reduce ? false : { y: "100%" },
    animate: { y: 0 },
    transition: { duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <div className="bg-[#111415] text-[#e1e3e4] min-h-screen pt-20 font-sans">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop"
          alt="Crowd at a night concert"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111415] via-[#111415]/60 to-[#111415]/20"></div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-16 pb-14 md:pb-20">
          <h1 className="font-serif font-bold text-[#f3f1ea] leading-[0.95] tracking-tight text-[3.25rem] sm:text-7xl md:text-[9rem]">
            <span className="block overflow-hidden pb-2">
              <motion.span className="block" {...line(0)}>
                The Masterpiece
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span className="block italic font-normal text-[#e9c349]" {...line(1)}>
                Gallery
              </motion.span>
            </span>
          </h1>

          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-white/20 pt-5">
            <p className="font-serif italic text-lg md:text-xl text-[#d0d2d8] max-w-md leading-snug">
              Where vision meets precision, and moments become legacies.
            </p>
            <div className="md:text-right">
              <p className="font-serif italic text-xl md:text-2xl text-[#e9c349]">Rising the Stars</p>
              <p className="mt-1 text-sm text-[#a9acb4]">Allstars Enterprise</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FILTER + GRID ================= */}
      <section className="px-6 md:px-16 py-16 md:py-24 max-w-[1440px] mx-auto">
        {/* Tab teks sederhana, garis bawah menandai yang aktif */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12 border-b border-white/10">
          {showcaseCategories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
                className={`relative pb-4 text-sm md:text-base transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9c349] ${
                  active ? "text-[#e9c349]" : "text-[#9a9da5] hover:text-white"
                }`}
              >
                {category}
                {active && (
                  <motion.span
                    layoutId="tab-underline"
                    transition={{ duration: reduce ? 0 : 0.3 }}
                    className="absolute left-0 right-0 -bottom-px h-[2px] bg-[#e9c349]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Grid: gambar di atas, keterangan di bawah seperti katalog pameran */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                className={`${project.gridClass} group`}
              >
                <div className="overflow-hidden rounded-sm bg-[#161a1b]">
                  <div
                    className={`${project.height} w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                    style={{ backgroundImage: `url('${project.image}')` }}
                    role="img"
                    aria-label={project.title}
                  ></div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#a9acb4] leading-relaxed max-w-lg line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-[#e9c349] border border-[#e9c349]/40 rounded-sm px-2 py-1 mt-1">
                    {project.badge}
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ================= EXPERTISE (hanya "All Works") ================= */}
      {activeCategory === "All Works" && (
        <section className="px-6 md:px-16 pb-24 md:pb-32 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-white/10 pt-16 md:pt-24">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-4xl md:text-6xl text-[#f3f1ea] leading-tight max-w-xl">
                Three Disciplines, One Team.
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
                alt="Production crew at work"
                className="w-full aspect-[4/5] object-cover rounded-sm"
              />
              <figcaption className="mt-3 text-sm text-[#a9acb4]">
                150+ events delivered.
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* ================= CTA ================= */}
      <section className="border-t border-white/10 bg-[#161a1b]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="font-serif italic text-4xl md:text-6xl text-white leading-tight">
              Ready to Make History?
            </h2>
            <p className="mt-5 text-[#a9acb4] max-w-md">
              Tell us about the event or campaign you have in mind. Allstars Enterprise will reply
              with a first plan.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-5">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#e9c349] text-[#111415] font-semibold px-8 py-4 rounded-sm hover:bg-[#f1d170] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9c349]"
            >
              Contact Us
            </a>
            <ul className="flex gap-6 text-sm text-[#a9acb4]">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#e9c349] underline-offset-4 hover:underline transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}