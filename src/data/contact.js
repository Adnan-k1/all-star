
export const WA_NUMBER = "62XXXXXXXXXX"; 

const waMessages = {
  en: "Hello Allstars Enterprise, I'd like to discuss an event or campaign.",
  id: "Halo Allstars Enterprise, saya ingin berdiskusi tentang acara atau kampanye.",
};

export const getWaLink = (lang = "en") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessages[lang] ?? waMessages.en)}`;

export const getSocials = (lang = "en") =>
  [
    { key: "whatsapp", label: "WhatsApp Business", href: getWaLink(lang) },
    { key: "instagram", label: "Instagram", href: "https://www.instagram.com/USERNAME" },
    { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/USERNAME" },
    { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@USERNAME" },
    { key: "youtube", label: "YouTube", href: "https://www.youtube.com/@USERNAME" },
    { key: "facebook", label: "Facebook", href: "https://www.facebook.com/USERNAME" },
    { key: "threads", label: "Threads", href: "https://www.threads.net/@USERNAME" },
    { key: "x", label: "X", href: "https://x.com/USERNAME", enabled: false },
  ].filter((s) => s.enabled !== false);