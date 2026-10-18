// Satu tempat untuk semua kontak. Ganti nilai di bawah dengan data asli Allstars Enterprise.
export const WA_NUMBER = "62XXXXXXXXXX"; // format internasional, tanpa "+" dan tanpa 0 di depan

export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hello Allstars Enterprise, I'd like to discuss an event or campaign."
)}`;

export const socials = [
  { label: "WhatsApp", href: WA_LINK },
  { label: "Instagram", href: "https://www.instagram.com/USERNAME" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/USERNAME" },
];