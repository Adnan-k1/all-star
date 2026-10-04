import { motion } from "framer-motion";

export default function OurPromises() {
  const promises = [
    {
      id: "01",
      title: "Insight is The Brain",
      icon: "psychology", // Material Symbol Icon
      description:
        "Deep understanding of market, audience, and culture precedes every creation.",
      delay: 0.1,
    },
    {
      id: "02",
      title: "Strategy is The Weapon",
      icon: "shield", // Material Symbol Icon
      description:
        "Sharp, evidence-based communication calibrated to outmaneuver the competition.",
      delay: 0.2,
    },
    {
      id: "03",
      title: "Execution is The Way",
      icon: "rocket_launch", // Material Symbol Icon
      description:
        "Uncompromising discipline, agility, and attention to detail from plan to live stage.",
      delay: 0.3,
    },
    {
      id: "04",
      title: "Results is The Commitment",
      icon: "verified", // Material Symbol Icon
      description:
        "Tangible, measurable impact that drives lasting value and elevated brand stature.",
      delay: 0.4,
    },
  ];

  return (
    <section id="our-promises" className="py-28 px-6 md:px-16 bg-[#111415] text-[#e1e3e4] relative overflow-hidden font-sans">
      
      {/* Pemanis 1: Radial Ambient Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#e9c349]/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 border border-[#e9c349]/40 rounded-full text-[#e9c349] text-[11px] font-semibold tracking-[0.2em] uppercase bg-[#111415] shadow-sm"
          >
            GUIDING PRINCIPLES
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight"
          >
            OUR <span className="text-[#e9c349]">PROMISES</span>
          </motion.h2>

          {/* Accent Gold Underline */}
          <div className="w-16 h-[3px] bg-[#e9c349] mx-auto rounded-full mt-2 mb-4 shadow-[0_0_12px_rgba(233,195,73,0.5)]"></div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-[#c4c6cf] font-light leading-relaxed max-w-2xl mx-auto"
          >
            Four fundamental pillars that define every engagement, campaign, and production at Allstars Enterprise.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="group relative bg-[#161a1b]/70 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#e9c349]/40 hover:-translate-y-2 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Pemanis 2: Top Line Accent saat Card di-hover */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out"></div>

              {/* Glowing Icon Container Box */}
              <div className="w-16 h-16 rounded-2xl border border-[#e9c349]/60 bg-[#111415] flex items-center justify-center text-[#e9c349] mb-6 shadow-[0_0_15px_rgba(233,195,73,0.15)] group-hover:shadow-[0_0_25px_rgba(233,195,73,0.35)] group-hover:scale-105 transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>

              {/* Pillar Number */}
              <span className="text-[11px] font-semibold text-[#e9c349] tracking-[0.25em] uppercase mb-3">
                PILLAR {item.id}
              </span>

              {/* Title */}
              <h3 className="text-xl font-serif font-semibold text-white mb-4 leading-snug">
                {item.title}
              </h3>

              <div className="w-8 h-[1px] bg-white/10 mb-4 group-hover:w-12 group-hover:bg-[#e9c349]/40 transition-all duration-300"></div>

              <p className="text-xs sm:text-sm text-[#a1a3a8] font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}