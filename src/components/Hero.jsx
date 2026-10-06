import { motion, useReducedMotion } from "framer-motion";
import logo from "/src/assets/images/logo.png";

// Kalau diisi null, akan tampil placeholder "LOGO"
const LOGO_SRC = logo;

const SERVICES = [
  "Digital marketing",
  "Talent management",
  "Professional event organizer",
  "Entertainment",
];

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col pt-28 px-6 md:px-16 overflow-hidden bg-[#111415]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover object-right md:object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111415] via-[#111415]/85 to-[#111415]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111415]/60 via-transparent to-[#111415]" />
      </div>

      {/* Konten utama */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex-1 grid md:grid-cols-12 items-center gap-12 py-10">
        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="md:col-span-7 space-y-7"
        >
          <div className="inline-flex items-center gap-3 text-[#e9c349] text-xs font-semibold tracking-[0.25em]">
            <span className="w-10 h-px bg-[#e9c349]" />
            ALLSTARS ENTERPRISE
          </div>

          <h1 className="font-serif font-normal text-5xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white">
            Driven by Experience,
            <br />
            <span className="italic text-[#e9c349]">Powered by Creativity.</span>
          </h1>

          <p className="text-base md:text-lg text-[#c4c6cf] max-w-xl leading-relaxed font-light">
            A full-service marketing communications and entertainment agency built on decades of combined industry experience, translating deep insights into extraordinary outcomes.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#process"
              className="bg-[#e9c349] text-[#111415] text-sm font-semibold px-8 py-4 rounded hover:bg-[#f2d062] transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e9c349]"
            >
              Mulai Perjalanan
            </a>
            <a
              href="#about"
              className="border border-[#e9c349]/60 text-[#e9c349] text-sm font-semibold px-8 py-4 rounded hover:bg-[#e9c349]/10 transition-colors text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e9c349]"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </motion.div>

        {/* Panggung logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease }}
          className="md:col-span-5 flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center w-72 h-72 sm:w-96 sm:h-96 lg:w-[30rem] lg:h-[30rem]">
            {/* Cahaya emas di belakang logo */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(233,195,73,0.28)_0%,rgba(233,195,73,0.08)_45%,transparent_70%)] blur-2xl" />

            {/* Cincin putus-putus berputar pelan (satu-satunya gerakan terus-menerus) */}
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-full border border-dashed border-[#e9c349]/35"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            />
            {/* Cincin solid */}
            <div className="absolute inset-6 rounded-full border border-[#e9c349]/25" />
            {/* Piringan logo */}
            <div className="absolute inset-12 rounded-full bg-[#111415]/70 backdrop-blur-md border border-[#e9c349]/40 shadow-[0_0_80px_rgba(233,195,73,0.15)]" />

            {LOGO_SRC ? (
              <img
                src={LOGO_SRC}
                alt="Logo Allstars Enterprise"
                className="relative w-[58%] h-[58%] object-contain drop-shadow-[0_8px_30px_rgba(233,195,73,0.35)]"
              />
            ) : (
              <span className="relative font-serif italic text-3xl text-[#e9c349]/70">
                LOGO
              </span>
            )}
          </div>
        </motion.div>
      </div>

      {/* Layanan */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 w-full max-w-[1440px] mx-auto border-t border-[#e9c349]/25 py-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4"
      >
        {SERVICES.map((s) => (
          <div key={s} className="flex items-center gap-3 text-sm text-[#c4c6cf]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e9c349] shrink-0" />
            {s}
          </div>
        ))}
      </motion.div>
    </section>
  );
}