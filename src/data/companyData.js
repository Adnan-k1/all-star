import Nandaimg from "../assets/images/Nanda.png";
import idingimg from "../assets/images/iding.png";

export const navLinks = [
  { key: "home", name: "Home", href: "#home" },
  { key: "services", name: "Our Services", href: "#services" },
  { key: "whyUs", name: "Why Us", href: "#why-us" },
  { key: "strength", name: "Our Strength", href: "#our-strength" },
  { key: "promises", name: "Our Promises", href: "#our-promises" },
  { key: "leadership", name: "Core Team", href: "#leadership" },
  { key: "showcase", name: "The Showcase", href: "/showcase" },
];


export const servicesData = [
  { id: 1, icon: "target", title: "Integrated Marketing Campaign", description: "Strategic campaigns that drive engagement and growth." },
  { id: 2, icon: "campaign", title: "Event Organizer & Production", description: "End-to-end event management and production excellence." },
  { id: 3, icon: "movie", title: "Commercial & Content Production", description: "High-impact content that tells your brand's story creatively." },
  { id: 4, icon: "hub", title: "Digital Strategy & Activation", description: "Data-driven strategies for a stronger digital presence." },
  { id: 5, icon: "chat_bubble", title: "Social Media Management", description: "Building communities and conversations that convert." },
  { id: 6, icon: "groups", title: "KOL Management & Partnerships", description: "Connecting brands with influencers that inspire action." },
];

export const processSteps = [
  { id: 1, title: "1. Brief", description: "Mentransformasikan Brief menjadi Konsep yang Relevan, Kuat, dan Berdampak", icon: "lightbulb" },
  { id: 2, title: "2. Consult", description: "Mengubah Visi menjadi konsep event yang 'impactful'.", icon: "forum" },
  { id: 3, title: "3. Plan", description: "Hasil yang hebat selalu dimulai dari perencanaan yang tepat.", icon: "map" },
  { id: 4, title: "4. Coordination", description: "Kunci eksekusi yang presisi adalah Koordinasi yang Solid.", icon: "handshake" },
  { id: 5, title: "5. Execute", description: "Konsep Jitu hanya berhasil dengan eksekusi yang detil dan presisi.", icon: "celebration" },
  { id: 6, title: "6. Manage", description: "Faktor sukses event adalah manajemen yang menyatukan strategi, koordinasi dan eksekusi.", icon: "monitoring" },
];


export const teamData = {
  ceo: {
    id: "ceo",
    name: "Nanda Persada",
    role: "CEO",
    tagline: "VISIONARY LEADER",
    description: "Leading Allstars Enterprise with over 20 years of experience in the entertainment and event industry, shaping the future of luxury experiences.",
    image: Nandaimg,
  },
  directors: [
    {
      id: 4,
      name: "Iding Achmad Haidir, Ph.D.",
      role: "COO",
      image: idingimg,
    },
  ],
};