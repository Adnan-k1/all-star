import { motion } from "framer-motion";

export default function OurStrength() {
  const corePillars = [
    {
      id: 1,
      title: "We Understand First",
      subtitle: "Never creating based on assumptions",
      delay: 0.1,
    },
    {
      id: 2,
      title: "We Strategize With Purpose",
      subtitle: "Sharp, evidence-based direction",
      delay: 0.2,
    },
    {
      id: 3,
      title: "We Execute With Precision",
      subtitle: "Discipline, agility, and accountability",
      delay: 0.3,
    },
  ];

  return (
    <section id="our-strength" className="py-28 px-6 md:px-16 bg-[#111415] text-[#e1e3e4] relative overflow-hidden font-sans">
      
      {/* Pemanis 1: Radial Glow Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#e9c349]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto text-center relative z-10">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 border border-[#e9c349]/40 rounded-full text-[#e9c349] text-[11px] font-semibold tracking-[0.2em] uppercase bg-[#111415] mb-6 shadow-sm"
        >
          CORE CAPABILITY
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white mb-3"
        >
          OUR <span className="text-[#e9c349]">STRENGTH</span>
        </motion.h2>

        {/* Quote Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif italic text-xl md:text-2xl text-[#e9c349] mb-4"
        >
          "Experience Meets Insight."
        </motion.p>

        {/* Accent Underline Line */}
        <div className="w-16 h-[3px] bg-[#e9c349] mx-auto rounded-full mb-10 shadow-[0_0_12px_rgba(233,195,73,0.5)]"></div>

        {/* Paragraph 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto space-y-4 mb-14"
        >
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug">
            Allstars Enterprise stands at the intersection of experience, insight, and execution.
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-[#a1a3a8] font-light leading-relaxed">
            Our team brings decades of proven expertise across marketing, entertainment, talent, media, and event industries. Combined with our research-driven approach, we go deeper into every client, brand, and product before developing a strategy.
          </p>
        </motion.div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {corePillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: pillar.delay }}
              className="group relative bg-[#161a1b]/80 border border-white/5 rounded-xl p-6 sm:p-8 flex flex-col justify-center items-center text-center hover:border-[#e9c349]/40 hover:-translate-y-1 transition-all duration-300 shadow-lg overflow-hidden"
            >
              {/* Pemanis 2: Top Animated Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#e9c349] group-hover:w-full transition-all duration-500 ease-out"></div>

              <h4 className="text-base sm:text-lg font-serif font-semibold text-[#e9c349] mb-2 leading-snug">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#a1a3a8] font-light">
                {pillar.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Description & Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <p className="text-xs sm:text-sm md:text-base text-[#a1a3a8] font-light leading-relaxed">
            With decades of experience now brought together under one agency, Allstars Enterprise delivers the strategic depth, industry access, creative perspective, and executional discipline that clients need to create meaningful impact.
          </p>

          <p className="text-xs sm:text-sm font-semibold text-[#e9c349] tracking-wider uppercase leading-relaxed max-w-2xl mx-auto">
            WE ARE A NEW COMPANY, BUT OUR PEOPLE BRING YEARS OF EXPERIENCE, RELATIONSHIPS, AND PROVEN CAPABILITIES TO EVERY PROJECT.
          </p>
        </motion.div>

      </div>
    </section>
  );
}