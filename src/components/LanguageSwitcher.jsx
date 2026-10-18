import { useLanguage } from "../context/LanguageContext";

const options = [
  { code: "id", label: "ID", name: "Bahasa Indonesia" },
  { code: "en", label: "EN", name: "English" },
];

export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`flex items-center gap-1 text-sm ${className}`} role="group" aria-label="Language">
      {options.map((o, i) => (
        <span key={o.code} className="flex items-center gap-1">
          {i > 0 && <span className="text-white/20">/</span>}
          <button
            onClick={() => setLang(o.code)}
            aria-pressed={lang === o.code}
            aria-label={o.name}
            className={`px-1.5 py-1 cursor-pointer transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9c349] ${
              lang === o.code ? "text-[#e9c349] font-semibold" : "text-[#a9acb4] hover:text-white"
            }`}
          >
            {o.label}
          </button>
        </span>
      ))}
    </div>
  );
}