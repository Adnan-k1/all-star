import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start pt-28 pb-16 px-6 md:px-16 overflow-hidden bg-[#111415]"
    >
      {/* Background Image Overlay (Sesuai gambar: Suasana meeting/rooftop malam hari) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover object-right md:object-center opacity-40"
        />
        {/* Dark Overlay Gradient dari kiri ke kanan agar teks di sebelah kiri sangat jelas */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111415] via-[#111415]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#111415]/50 via-transparent to-[#111415]"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl space-y-6"
        >
          {/* Badge */}
          <div className="inline-block px-3.5 py-1 border border-[#e9c349]/40 rounded text-[#e9c349] text-[11px] font-semibold tracking-widest uppercase bg-[#111415]/60 backdrop-blur-sm">
            ALLSTARS ENTERPRISE
          </div>

          {/* Headline Utama */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#ffffff] font-normal leading-[1.15] font-serif tracking-tight">
            Driven by <br />
            <span className="text-[#e9c349] italic font-serif">Experience</span>, <br />
            Powered by <br />
            Creativity.
          </h1>

          {/* Sub-headline / Categories dengan Garis Kuning di Kiri */}
          <div className="flex items-start gap-3 pt-2">
            <div className="w-[2px] h-8 md:h-10 bg-[#e9c349] shrink-0 mt-0.5"></div>
            <p className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#e9c349] leading-relaxed">
              DIGITAL MARKETING &bull; TALENT MANAGEMENT &bull; PROFESSIONAL <br className="hidden sm:inline" />
              EVENT ORGANIZER &bull; ENTERTAINMENT
            </p>
          </div>

          {/* Deskripsi Teks */}
          <p className="text-sm md:text-base text-[#c4c6cf] max-w-xl leading-relaxed font-light pt-1">
            A full-service marketing communications and entertainment agency built on decades of combined industry experience, translating deep insights into extraordinary outcomes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#process"
              className="bg-[#e9c349] text-[#111415] text-xs font-semibold px-6 py-3.5 rounded hover:bg-[#d8b238] transition-all text-center cursor-pointer"
            >
              Mulai Perjalanan
            </a>
            <a
              href="#about"
              className="border border-[#e9c349]/60 text-[#e9c349] text-xs font-semibold px-6 py-3.5 rounded hover:bg-[#e9c349]/10 transition-all text-center cursor-pointer"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}