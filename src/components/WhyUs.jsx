import { motion } from "framer-motion";

export default function WhyUs() {
  const differentiators = [
    {
      id: "01",
      title: "Proven Track Record",
      description:
        "Led and managed by professionals with decades of hands-on experience across marketing, entertainment, talent, media, and events — expertise that shortens the distance between strategy and results.",
      delay: 0.1,
    },
    {
      id: "02",
      title: "Integrated Service Offering",
      description:
        "Digital marketing, talent management, professional event organization, and entertainment services delivered under one agency — aligned by a very sharp strategy and informed by a single set of insights.",
      delay: 0.2,
    },
    {
      id: "03",
      title: "Established Industry Network",
      description:
        "Years of relationships across media, brands, talents, creative communities, and entertainment stakeholders give our clients access to opportunities and partnerships beyond the ordinary.",
      delay: 0.3,
    },
    {
      id: "04",
      title: "Insight-Driven Strategy",
      description:
        "We research before we create. Every campaign, talent placement, and event is shaped by deeper insight into audience behavior, market data, and cultural context — so every decision is made on evidence, not assumption.",
      delay: 0.4,
    },
    {
      id: "05",
      title: "Execution Excellence",
      description:
        "Strategy is only as strong as its delivery. We bring discipline, precision, agility, and accountability to every project, translating insight into meaningful experiences and measurable outcomes against our clients' goals and objectives.",
      delay: 0.5,
    },
  ];

  return (
    <section id="why-us" className="py-28 px-6 md:px-16 bg-[#111415] text-[#e1e3e4] relative overflow-hidden font-sans">
      
      {/* Pemanis 1: Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e9c349]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 border border-[#e9c349]/40 rounded-full text-[#e9c349] text-[11px] font-semibold tracking-[0.2em] uppercase bg-[#111415] shadow-sm">
            KEY DIFFERENTIATORS
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            WHAT MAKES <span className="text-[#e9c349]">US DIFFERENT</span>
          </h2>

          {/* Accent Gold Underline */}
          <div className="w-16 h-[3px] bg-[#e9c349] mx-auto rounded-full mt-2 mb-4 shadow-[0_0_10px_rgba(233,195,73,0.5)]"></div>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-[#c4c6cf] font-light leading-relaxed">
            Our distinct edge combines industry mastery with an evidence-based philosophy.
          </p>
        </div>

        {/* 5 Cards Grid Container */}
        <div className="space-y-6">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.slice(0, 3).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="group relative bg-[#161a1b]/70 border border-white/5 rounded-2xl p-8 flex flex-col justify-start text-left hover:border-[#e9c349]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-lg overflow-hidden"
              >
                {/* Pemanis 2: Top Line Accent saat Card di-hover */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out"></div>

                <span className="text-2xl font-serif font-bold text-[#e9c349] mb-4 block group-hover:scale-110 transition-transform origin-left duration-300">
                  {item.id}
                </span>
                <h3 className="text-xl font-serif font-semibold text-white mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a3a8] font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.slice(3, 5).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="group relative bg-[#161a1b]/70 border border-white/5 rounded-2xl p-8 flex flex-col justify-start text-left hover:border-[#e9c349]/40 hover:-translate-y-1.5 transition-all duration-300 shadow-lg overflow-hidden"
              >
                {/* Pemanis 2: Top Line Accent saat Card di-hover */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out"></div>

                <span className="text-2xl font-serif font-bold text-[#e9c349] mb-4 block group-hover:scale-110 transition-transform origin-left duration-300">
                  {item.id}
                </span>
                <h3 className="text-xl font-serif font-semibold text-white mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a3a8] font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}