// Satu tempat untuk semua kontak. Ganti nilai di bawah dengan data asli Allstars Enterprise.
export const WA_NUMBER = "62XXXXXXXXXX"; // format internasional, tanpa "+" dan tanpa 0 di depan

const waMessages = {
  en: "Hello Allstars Enterprise, I'd like to discuss an event or campaign.",
  id: "Halo Allstars Enterprise, saya ingin berdiskusi tentang acara atau kampanye.",
};

export const getWaLink = (lang = "en") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessages[lang] ?? waMessages.en)}`;

export const getSocials = (lang = "en") => [
  { label: "WhatsApp", href: getWaLink(lang) },
  { label: "Instagram", href: "https://www.instagram.com/USERNAME" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/USERNAME" },
];