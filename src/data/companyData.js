import Renandaimg from "../assets/images/Renanda.png";
import Nandaimg from "../assets/images/Nanda.png";
import Boshaimg from "../assets/images/boscha.png";
import arryimg from "../assets/images/arry.png";
import idingimg from "../assets/images/iding.png";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Service", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Our Strength", href: "#our-strength" },
  { name: "Our Promises", href: "#our-promises" },
  { name: "Leadership", href: "#leadership" },
  { name: "The Showcase", href: "/showcase" },
];

export const servicesData = [
  {
    id: 1,
    icon: "target",
    title: "Integrated Marketing Campaign",
    description: "Strategic campaigns that drive engagement and growth.",
  },
  {
    id: 2,
    icon: "campaign",
    title: "Event Organizer & Production",
    description: "End-to-end event management and production excellence.",
  },
  {
    id: 3,
    icon: "movie",
    title: "Commercial & Content Production",
    description: "High-impact content that tells your brand's story creatively.",
  },
  {
    id: 4,
    icon: "hub",
    title: "Digital Strategy & Activation",
    description: "Data-driven strategies for a stronger digital presence.",
  },
  {
    id: 5,
    icon: "chat_bubble",
    title: "Social Media Management",
    description: "Building communities and conversations that convert.",
  },
  {
    id: 6,
    icon: "groups",
    title: "KOL Management & Partnerships",
    description: "Connecting brands with influencers that inspire action.",
  },
];

export const processSteps = [
  { id: 1, title: "1. Brief", description: "Mentransformasikan Brief menjadi Konsep yang Relevan, Kuat, dan Berdampak", icon: "lightbulb" },
  { id: 2, title: "2. Consult", description: "Mengubah Visi menjadi konsep event yang 'impactful'.", icon: "forum" },
  { id: 3, title: "3. Plan", description: "Hasil yang hebat selalu dimulai dari perencanaan yang tepat.", icon: "map" },
  { id: 4, title: "4. Coordination", description: "Kunci eksekusi yang presisi adalah Koordinasi yang Solid.", icon: "handshake" },
  { id: 5, title: "5. Execute", description: "Konsep Jitu hanya berhasil dengan ekseskusi yang detil dan presisi.", icon: "celebration" },
  { id: 6, title: "6. Manage", description: "Faktor sukses event adalah manajemen yang menyatukan strategi, koordinasi dan eksekusi.", icon: "monitoring" },
];

export const teamData = {
  ceo: {
    name: "Nanda Persada",
    role: "President Director / CEO",
    tagline: "VISIONARY LEADER",
    description: "Leading Allstar Enterprise with over 20 years of experience in the entertainment and event industry, shaping the future of luxury experiences.",
    image: Nandaimg,
  },
  directors: [
    {
      id: 1,
      name: "Arry Satria",
      role: "Operational Director / COO",
      description: "Master of logistics and execution, ensuring every event runs with surgical precision and flawless timing.",
      image: arryimg,
    },
    {
      id: 2,
      name: "Renanda Bachtar",
      role: "Business Director",
      description: "Driving growth and strategic partnerships that elevate our brand and expand our global footprint.",
      image: Renandaimg,
    },
    {
      id: 3,
      name: "Bosha Cahya Prasetya",
      role: "Managing Director",
      description: "Overseeing daily operations and team synergy to maintain the highest standards of creative excellence.",
      image: Boshaimg,
    },
    {
      id: 4,
      name: "Iding",
      role: "Director of Gov/Public Sector",
      description: "Specializing in high-profile public sector events and government relations with unmatched diplomacy.",
      image: idingimg,
    },
  ],
};