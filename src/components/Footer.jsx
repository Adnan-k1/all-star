export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-16 bg-[#0c0f10] border-t border-[#e9c349]/10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="text-2xl font-bold font-serif text-[#e9c349]">Allstar Enterprise</div>
          <p className="text-sm text-[#c4c6cf]/80">© 2026 Allstar Enterprise. Raising the Stars.</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm text-[#c4c6cf]">
          <a href="#privacy" className="hover:text-[#e9c349] transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-[#e9c349] transition-colors duration-300">
            Terms of Service
          </a>
          <a href="#contact" className="hover:text-[#e9c349] transition-colors duration-300">
            Contact
          </a>
          <a href="#press" className="hover:text-[#e9c349] transition-colors duration-300">
            Press Kit
          </a>
        </nav>

        {/* Social Media Buttons */}
        <div className="flex gap-4">
          <a href="#" aria-label="Website Link" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#e9c349]/20 hover:bg-[#e9c349]/10 transition-colors cursor-pointer text-[#e9c349]">
            <span className="material-symbols-outlined text-xl">public</span>
          </a>
          <a href="#" aria-label="Email Us" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#e9c349]/20 hover:bg-[#e9c349]/10 transition-colors cursor-pointer text-[#e9c349]">
            <span className="material-symbols-outlined text-xl">mail</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
