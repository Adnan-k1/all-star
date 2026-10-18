// Semua teks situs. Dibaca dengan t("hero.line1"), t("why.items"), dst.
// Data yang sudah punya teks Inggris di companyData/showcaseData (layanan, tim, proyek)
// cukup diterjemahkan di blok "id"; versi Inggrisnya diambil dari data aslinya.
export const translations = {
  en: {
    common: { contactUs: "Contact Us" },

    nav: {
      links: {
        home: "Home",
        services: "Our Service",
        whyUs: "Why Us",
        strength: "Our Strength",
        promises: "Our Promises",
        leadership: "Leadership",
        showcase: "The Showcase",
      },
      consult: "Consult Our Team",
      menu: "Menu",
    },

    hero: {
      logoAlt: "Allstars Enterprise Logo",
      line1: "Driven by Experience,",
      line2: "Powered by Creativity.",
      text: "A full-service marketing communications and entertainment agency built on decades of combined industry experience, translating deep insights into extraordinary outcomes.",
      services: ["Digital Marketing", "Talent Management", "Professional Event Organizer", "Entertainment"],
    },

    services: {
      headlineStart: "Crafting",
      headlineAccent: "Unforgettable",
      headlineEnd: "Experiences.",
      sub: "From concept to curtain call, we elevate every detail into an iconic moment.",
      ariaLabel: "Our services",
      prev: "Previous service",
      next: "Next service",
      slideOf: "{i} of {n}",
      viewService: "View service {title}",
      cta: "Get started",
      banner: "We align big ideas with cross-platform execution that connects your audience's emotions to your business goals.",
      bannerCta: "Talk to us about your event",
    },

    structure: {
      badge: "EXECUTIVE LEADERSHIP",
      titleA: "LEADERSHIP &",
      titleB: "STRUCTURE",
      hint: "Click a leadership card to see their profile and professional track record.",
      clickCard: "Click Card →",
      ceoBadge: "CEO",
      tierCeo: "EXECUTIVE",
      tierDirector: "DIRECTOR",
      modalDefault:
        "A high-level professional track record in strategic management and the execution of large-scale projects.",
      chip1: "★ Industry Veteran",
      chip2: "★ Key Decision Maker",
      close: "Close",
    },

    why: {
      badge: "KEY DIFFERENTIATORS",
      titleA: "WHAT MAKES",
      titleB: "US DIFFERENT",
      sub: "Our distinct edge combines industry mastery with an evidence-based philosophy.",
      items: [
        {
          title: "Proven Track Record",
          description:
            "Led and managed by professionals with decades of hands-on experience across marketing, entertainment, talent, media, and events — expertise that shortens the distance between strategy and results.",
        },
        {
          title: "Integrated Service Offering",
          description:
            "Digital marketing, talent management, professional event organization, and entertainment services delivered under one agency — aligned by a very sharp strategy and informed by a single set of insights.",
        },
        {
          title: "Established Industry Network",
          description:
            "Years of relationships across media, brands, talents, creative communities, and entertainment stakeholders give our clients access to opportunities and partnerships beyond the ordinary.",
        },
        {
          title: "Insight-Driven Strategy",
          description:
            "We research before we create. Every campaign, talent placement, and event is shaped by deeper insight into audience behavior, market data, and cultural context — so every decision is made on evidence, not assumption.",
        },
        {
          title: "Execution Excellence",
          description:
            "Strategy is only as strong as its delivery. We bring discipline, precision, agility, and accountability to every project, translating insight into meaningful experiences and measurable outcomes against our clients' goals and objectives.",
        },
      ],
    },

    promises: {
      badge: "GUIDING PRINCIPLES",
      titleA: "OUR",
      titleB: "PROMISES",
      sub: "Four fundamental pillars that define every engagement, campaign, and production at Allstars Enterprise.",
      pillar: "PILLAR",
      items: [
        { title: "Insight is The Brain", description: "Deep understanding of market, audience, and culture precedes every creation." },
        { title: "Strategy is The Weapon", description: "Sharp, evidence-based communication calibrated to outmaneuver the competition." },
        { title: "Execution is The Way", description: "Uncompromising discipline, agility, and attention to detail from plan to live stage." },
        { title: "Results is The Commitment", description: "Tangible, measurable impact that drives lasting value and elevated brand stature." },
      ],
    },

    strength: {
      badge: "CORE CAPABILITY",
      titleA: "OUR",
      titleB: "STRENGTH",
      quote: "Experience Meets Insight.",
      lead: "Allstars Enterprise stands at the intersection of experience, insight, and execution.",
      p1: "Our team brings decades of proven expertise across marketing, entertainment, talent, media, and event industries. Combined with our research-driven approach, we go deeper into every client, brand, and product before developing a strategy.",
      pillars: [
        { title: "We Understand First", subtitle: "Never creating based on assumptions" },
        { title: "We Strategize With Purpose", subtitle: "Sharp, evidence-based direction" },
        { title: "We Execute With Precision", subtitle: "Discipline, agility, and accountability" },
      ],
      p2: "With decades of experience now brought together under one agency, Allstars Enterprise delivers the strategic depth, industry access, creative perspective, and executional discipline that clients need to create meaningful impact.",
      callout:
        "WE ARE A NEW COMPANY, BUT OUR PEOPLE BRING YEARS OF EXPERIENCE, RELATIONSHIPS, AND PROVEN CAPABILITIES TO EVERY PROJECT.",
    },

    process: {
      items: {
        1: { title: "1. Brief", description: "Turning the brief into a relevant, strong, and high-impact concept." },
        2: { title: "2. Consult", description: "Turning a vision into an impactful event concept." },
        3: { title: "3. Plan", description: "Great results always start with the right plan." },
        4: { title: "4. Coordination", description: "The key to precise execution is solid coordination." },
        5: { title: "5. Execute", description: "A sharp concept only works with detailed, precise execution." },
        6: { title: "6. Manage", description: "An event succeeds through management that unites strategy, coordination, and execution." },
      },
    },

    footer: {
      rights: "© 2026 Allstars Enterprise. Rising the Stars.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      press: "Press Kit",
    },

    showcase: {
      heroAlt: "Crowd at a night concert",
      titleLine1: "The Masterpiece",
      titleLine2: "Gallery",
      quote: "Where vision meets precision, and moments become legacies.",
      categories: {},
      servicesHeading: "Three Disciplines, One Team.",
      services: [
        { title: "Event Organizer & Production", text: "Festivals, gala dinners and corporate summits, run end to end by one crew." },
        { title: "Integrated Marketing Campaigns", text: "One story told across every channel, with results you can measure." },
        { title: "Commercial & Content Production", text: "Film and video made for cinema, broadcast and digital screens." },
      ],
      crewAlt: "Production crew at work",
      crewCaption: "150+ events delivered.",
      ctaTitle: "Ready to Make History?",
      ctaText:
        "Tell us about the event or campaign you have in mind. Allstars Enterprise will reply with a first plan.",
    },
  },

  id: {
    common: { contactUs: "Hubungi Kami" },

    nav: {
      links: {
        home: "Beranda",
        services: "Layanan Kami",
        whyUs: "Mengapa Kami",
        strength: "Kekuatan Kami",
        promises: "Janji Kami",
        leadership: "Kepemimpinan",
        showcase: "Showcase",
      },
      consult: "Konsultasi dengan Tim Kami",
      menu: "Menu",
    },

    hero: {
      logoAlt: "Logo Allstars Enterprise",
      line1: "Digerakkan oleh Pengalaman,",
      line2: "Didukung oleh Kreativitas.",
      text: "Agensi komunikasi pemasaran dan hiburan layanan lengkap yang dibangun di atas pengalaman industri puluhan tahun, mengubah wawasan mendalam menjadi hasil yang luar biasa.",
      services: ["Digital Marketing", "Manajemen Talenta", "Penyelenggara Acara Profesional", "Hiburan"],
    },

    services: {
      headlineStart: "Menciptakan",
      headlineAccent: "Pengalaman",
      headlineEnd: "Tak Terlupakan.",
      sub: "Dari konsep hingga tirai terakhir, kami mengangkat setiap detail menjadi momen yang ikonik.",
      ariaLabel: "Layanan kami",
      prev: "Layanan sebelumnya",
      next: "Layanan berikutnya",
      slideOf: "{i} dari {n}",
      viewService: "Lihat layanan {title}",
      cta: "Daftar sekarang",
      banner: "Kami menyelaraskan ide besar dengan eksekusi lintas platform yang menghubungkan emosi audiens dengan tujuan bisnis Anda.",
      bannerCta: "Konsultasikan event Anda",
      items: {
        1: { title: "Kampanye Pemasaran Terpadu", description: "Kampanye strategis yang mendorong engagement dan pertumbuhan." },
        2: { title: "Event Organizer & Produksi", description: "Manajemen dan produksi event dari awal hingga akhir dengan kualitas terbaik." },
        3: { title: "Produksi Komersial & Konten", description: "Konten berdampak tinggi yang menceritakan kisah brand Anda secara kreatif." },
        4: { title: "Strategi & Aktivasi Digital", description: "Strategi berbasis data untuk kehadiran digital yang lebih kuat." },
        5: { title: "Manajemen Media Sosial", description: "Membangun komunitas dan percakapan yang berujung pada konversi." },
        6: { title: "Manajemen KOL & Kemitraan", description: "Menghubungkan brand dengan influencer yang menginspirasi aksi." },
      },
    },

    structure: {
      badge: "KEPEMIMPINAN EKSEKUTIF",
      titleA: "KEPEMIMPINAN &",
      titleB: "STRUKTUR",
      hint: "Klik pada kartu jajaran pimpinan untuk melihat profil dan rekam jejak profesional mereka.",
      clickCard: "Klik Kartu →",
      ceoBadge: "CEO",
      tierCeo: "EKSEKUTIF",
      tierDirector: "DIREKTUR",
      modalDefault:
        "Memiliki rekam jejak profesional berskala tinggi dalam manajemen strategis dan eksekusi proyek-proyek besar.",
      chip1: "★ Veteran Industri",
      chip2: "★ Pengambil Keputusan Utama",
      close: "Tutup",
    },

    team: {
      ceo: {
        role: "Presiden Direktur / CEO",
        description:
          "Memimpin Allstars Enterprise dengan pengalaman lebih dari 20 tahun di industri hiburan dan event, membentuk masa depan pengalaman mewah.",
      },
      1: {
        role: "Direktur Operasional / COO",
        description:
          "Ahli logistik dan eksekusi, memastikan setiap event berjalan dengan presisi tinggi dan waktu yang sempurna.",
      },
      2: {
        role: "Direktur Bisnis",
        description:
          "Mendorong pertumbuhan dan kemitraan strategis yang mengangkat brand Anda dan memperluas jangkauan global Anda.",
      },
      3: {
        role: "Direktur Pelaksana",
        description:
          "Mengawasi operasional harian dan sinergi tim untuk menjaga standar keunggulan kreatif tertinggi.",
      },
      4: {
        role: "Direktur Pemerintahan / Sektor Publik",
        description:
          "Spesialis event sektor publik dan hubungan pemerintah berprofil tinggi dengan diplomasi yang tak tertandingi.",
      },
    },

    why: {
      badge: "KEUNGGULAN UTAMA",
      titleA: "APA YANG MEMBEDAKAN",
      titleB: "KAMI",
      sub: "Keunggulan kami memadukan penguasaan industri dengan filosofi berbasis bukti.",
      items: [
        {
          title: "Rekam Jejak Terbukti",
          description:
            "Dipimpin dan dikelola oleh para profesional dengan pengalaman puluhan tahun di bidang pemasaran, hiburan, talenta, media, dan event — keahlian yang mempersingkat jarak antara strategi dan hasil.",
        },
        {
          title: "Layanan Terpadu",
          description:
            "Digital marketing, manajemen talenta, penyelenggaraan event profesional, dan layanan hiburan dalam satu agensi — diselaraskan oleh strategi yang sangat tajam dan satu set wawasan yang sama.",
        },
        {
          title: "Jaringan Industri yang Mapan",
          description:
            "Hubungan bertahun-tahun dengan media, brand, talenta, komunitas kreatif, dan pemangku kepentingan hiburan memberi klien akses ke peluang dan kemitraan yang luar biasa.",
        },
        {
          title: "Strategi Berbasis Wawasan",
          description:
            "Kami meneliti sebelum berkarya. Setiap kampanye, penempatan talenta, dan event dibentuk oleh pemahaman lebih dalam tentang perilaku audiens, data pasar, dan konteks budaya — sehingga setiap keputusan diambil berdasarkan bukti, bukan asumsi.",
        },
        {
          title: "Keunggulan Eksekusi",
          description:
            "Strategi hanya sekuat pelaksanaannya. Kami membawa disiplin, presisi, kelincahan, dan akuntabilitas ke setiap proyek, mengubah wawasan menjadi pengalaman bermakna dan hasil terukur sesuai tujuan klien.",
        },
      ],
    },

    promises: {
      badge: "PRINSIP UTAMA",
      titleA: "JANJI",
      titleB: "KAMI",
      sub: "Empat pilar utama yang mendefinisikan setiap kerja sama, kampanye, dan produksi di Allstars Enterprise.",
      pillar: "PILAR",
      items: [
        { title: "Wawasan Adalah Otaknya", description: "Pemahaman mendalam tentang pasar, audiens, dan budaya mendahului setiap karya." },
        { title: "Strategi Adalah Senjatanya", description: "Komunikasi yang tajam dan berbasis bukti, dikalibrasi untuk mengungguli kompetitor." },
        { title: "Eksekusi Adalah Jalannya", description: "Disiplin tanpa kompromi, kelincahan, dan ketelitian dari rencana hingga panggung." },
        { title: "Hasil Adalah Komitmennya", description: "Dampak nyata dan terukur yang mendorong nilai jangka panjang dan reputasi brand yang lebih tinggi." },
      ],
    },

    strength: {
      badge: "KEMAMPUAN INTI",
      titleA: "KEKUATAN",
      titleB: "KAMI",
      quote: "Pengalaman Bertemu Wawasan.",
      lead: "Allstars Enterprise berdiri di persimpangan antara pengalaman, wawasan, dan eksekusi.",
      p1: "Tim kami membawa keahlian puluhan tahun yang terbukti di industri pemasaran, hiburan, talenta, media, dan event. Dipadukan dengan pendekatan berbasis riset, kami menggali lebih dalam setiap klien, brand, dan produk sebelum menyusun strategi.",
      pillars: [
        { title: "Kami Memahami Lebih Dulu", subtitle: "Tidak pernah berkarya berdasarkan asumsi" },
        { title: "Kami Berstrategi dengan Tujuan", subtitle: "Arah yang tajam dan berbasis bukti" },
        { title: "Kami Mengeksekusi dengan Presisi", subtitle: "Disiplin, kelincahan, dan akuntabilitas" },
      ],
      p2: "Dengan pengalaman puluhan tahun yang kini disatukan dalam satu agensi, Allstars Enterprise menghadirkan kedalaman strategi, akses industri, perspektif kreatif, dan disiplin eksekusi yang dibutuhkan klien untuk menciptakan dampak yang berarti.",
      callout:
        "KAMI PERUSAHAAN BARU, TETAPI TIM KAMI MEMBAWA PENGALAMAN, RELASI, DAN KEMAMPUAN TERBUKTI BERTAHUN-TAHUN KE SETIAP PROYEK.",
    },

    process: {
      items: {
        1: { title: "1. Brief", description: "Mentransformasikan brief menjadi konsep yang relevan, kuat, dan berdampak." },
        2: { title: "2. Konsultasi", description: "Mengubah visi menjadi konsep event yang berdampak." },
        3: { title: "3. Perencanaan", description: "Hasil yang hebat selalu dimulai dari perencanaan yang tepat." },
        4: { title: "4. Koordinasi", description: "Kunci eksekusi yang presisi adalah koordinasi yang solid." },
        5: { title: "5. Eksekusi", description: "Konsep jitu hanya berhasil dengan eksekusi yang detail dan presisi." },
        6: { title: "6. Manajemen", description: "Faktor sukses event adalah manajemen yang menyatukan strategi, koordinasi, dan eksekusi." },
      },
    },

    footer: {
      rights: "© 2026 Allstars Enterprise. Rising the Stars.",
      privacy: "Kebijakan Privasi",
      terms: "Syarat Layanan",
      contact: "Kontak",
      press: "Press Kit",
    },

    showcase: {
      heroAlt: "Penonton di sebuah konser malam hari",
      titleLine1: "Galeri",
      titleLine2: "Mahakarya",
      quote: "Tempat visi bertemu presisi, dan momen menjadi warisan.",
      categories: {
        "All Works": "Semua Karya",
        "Event Production": "Produksi Event",
        "Integrated Marketing": "Pemasaran Terpadu",
        "Content Production": "Produksi Konten",
        "Digital Activation": "Aktivasi Digital",
        "Social & KOL": "Sosial & KOL",
      },
      servicesHeading: "Tiga Keahlian, Satu Tim.",
      services: [
        { title: "Event Organizer & Produksi", text: "Festival, gala dinner, dan pertemuan korporat, ditangani dari awal sampai akhir oleh satu tim." },
        { title: "Kampanye Pemasaran Terpadu", text: "Satu cerita yang disampaikan di semua kanal, dengan hasil yang bisa diukur." },
        { title: "Produksi Komersial & Konten", text: "Film dan video untuk bioskop, penyiaran, dan layar digital." },
      ],
      crewAlt: "Tim produksi sedang bekerja",
      crewCaption: "150+ event telah kami selesaikan.",
      ctaTitle: "Siap Menciptakan Sejarah?",
      ctaText:
        "Ceritakan acara atau kampanye yang Anda inginkan. Allstars Enterprise akan membalas dengan rencana awal.",
      projects: {
        1: {
          title: "Royal Gala Symphony",
          badge: "PRODUKSI EVENT",
          description:
            "Pengalaman orkestra yang imersif di Royal Opera, memadukan musik klasik dengan produksi hologram mutakhir.",
        },
        2: {
          title: "Bercerita untuk Brand Mewah",
          badge: "PRODUKSI KONTEN",
          description: "Penceritaan sinematik untuk brand mewah papan atas.",
        },
        3: {
          title: "Kubah Digital Imersif",
          badge: "DIGITAL",
          description: "Mendefinisikan ulang interaksi tamu lewat arsitektur digital yang imersif.",
        },
        4: {
          title: "Global Tastemakers Summit",
          badge: "MANAJEMEN KOL",
          description: "Kemitraan strategis dengan tokoh industri dan tastemaker global.",
        },
        5: {
          title: "Peluncuran Brand Terpadu",
          badge: "TERPADU",
          description: "Strategi pemasaran multi-kanal yang menciptakan engagement besar di berbagai platform.",
        },
      },
    },
  },
};