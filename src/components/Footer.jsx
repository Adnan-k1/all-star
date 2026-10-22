import { useLanguage } from "../context/LanguageContext";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { t, lang } = useLanguage();
  const linkClass = "hover:text-[#e9c349] transition-colors duration-300";

  return (
    <footer className="w-full py-12 px-6 md:px-16 bg-[#0c0f10] border-t border-[#e9c349]/10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="text-2xl font-bold font-serif text-[#e9c349]">Allstars Enterprise</div>
          <p className="text-sm text-[#c4c6cf]/80">{t("footer.rights")}</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm text-[#c4c6cf]">
          <a href="#privacy" className={linkClass}>{t("footer.privacy")}</a>
          <a href="#terms" className={linkClass}>{t("footer.terms")}</a>
          <a href="#contact" className={linkClass}>{t("footer.contact")}</a>
          <a href="#press" className={linkClass}>{t("footer.press")}</a>
        </nav>

        {/* Sosial media: WhatsApp, Instagram, LinkedIn */}
        <SocialLinks lang={lang} className="justify-center gap-2" buttonClass="w-9 h-9" iconClass="w-4 h-4" />
      </div>
    </footer>
  );
}