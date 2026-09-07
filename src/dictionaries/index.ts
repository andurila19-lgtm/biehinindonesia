export type Dictionary = {
  nav: {
    story: string;
    services: string;
    collection: string;
    showrooms: string;
    contact: string;
    bookAppointment: string;
    book: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  discover: {
    label: string;
    heading: string;
    desc: string;
    experienceBadge: string;
    experienceText: string;
    cta: string;
  };
  services: {
    label: string;
    heading: string;
    desc: string;
    viewAll: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  wideBanner: {
    title: string;
    desc: string;
    cta: string;
  };
  mediaHighlight: {
    label: string;
    heading: string;
    desc: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
  };
  testimonials: {
    label: string;
    quote: string;
    author: string;
    subtitle: string;
  };
  storySplit: {
    label: string;
    heading: string;
    p1: string;
    p2: string;
    cta: string;
  };
  collection: {
    label: string;
    heading: string;
    desc: string;
    consult: string;
    viewCollection: string;
    items: {
      title: string;
      category: string;
      desc: string;
    }[];
  };
  showrooms: {
    label: string;
    heading: string;
    desc: string;
    consultationNotice: string;
    getDirections: string;
    callNow: string;
  };
  appointment: {
    badge: string;
    heading: string;
    desc: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    cityLabel: string;
    cityPlaceholder: string;
    dateLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submit: string;
    submitting: string;
    submittedTitle: string;
    submittedDesc: string;
    privacyNote: string;
  };
  footer: {
    brandDesc: string;
    quickLinksTitle: string;
    showroomsTitle: string;
    consultationTitle: string;
    consultationDesc: string;
    bookCta: string;
    rights: string;
    seoTag: string;
  };
};

export const id: Dictionary = {
  nav: {
    story: "TENTANG KAMI",
    services: "LAYANAN",
    collection: "KOLEKSI",
    showrooms: "SHOWROOM",
    contact: "KONTAK",
    bookAppointment: "Reservasi Pertemuan",
    book: "BOOK",
  },
  hero: {
    badge: "EST. 1930 • BESPOKE MAISON",
    title1: "EMBRACE",
    title2: "your STYLE",
    desc: "Ketepatan pembuatan jas bespoke, pilihan bahan berkualitas tinggi, dan dedikasi pada siluet yang sempurna sejak 1930 di Surabaya, Jakarta, dan Semarang.",
    ctaPrimary: "Lihat Koleksi",
    ctaSecondary: "Konsultasi Tailor",
  },
  discover: {
    label: "KUALITAS TERBAIK",
    heading: "Presisi & Dedikasi Dalam Setiap Jahitan",
    desc: "Setiap setelan di Bie Hin Tailor dirancang melalui proses pengukuran teliti, pemilihan kain premium, dan teknik konstruksi manual untuk memastikan kenyamanan prima dan postur terbaik Anda.",
    experienceBadge: "Sejak 1930",
    experienceText: "Dedikasi Penjahitan Bespoke di Indonesia",
    cta: "Pelajari Keahlian Kami",
  },
  services: {
    label: "LAYANAN KAMI",
    heading: "Keahlian Tailoring Pilihan",
    desc: "Layanan penjahitan personal untuk setiap kesempatan istimewa dan kebutuhan pakaian formal Anda.",
    viewAll: "Lihat Semua Layanan",
    items: [
      {
        title: "Bespoke Suit",
        desc: "Setelan jas formal dibuat khusus dari nol sesuai pola anatomis tubuh Anda.",
      },
      {
        title: "Wedding Tuxedo",
        desc: "Tuksedo dan setelan pengantin elegan untuk hari pernikahan yang tak terlupakan.",
      },
      {
        title: "Batik & Kemeja",
        desc: "Kemeja kerja dan busana batik sutra dengan potongan presisi yang nyaman.",
      },
      {
        title: "Celana & Rompi",
        desc: "Celana bahan custom dan rompi formal berstruktur rapi untuk padu padan sempurna.",
      },
    ],
  },
  wideBanner: {
    title: "DESAIN ANDA, KAMI WUJUDKAN",
    desc: "Diskusikan preferensi gaya, pemilihan bahan, dan detail jahitan bersama tailor kami.",
    cta: "Buat Janji Temu",
  },
  mediaHighlight: {
    label: "PROSES KERAJINAN",
    heading: "Seni Menghidupkan Pola Jas Sempurna",
    desc: "Di Bie Hin Tailor, setiap helai pakaian melewati puluhan tahapan teliti mulai dari pengukuran personal hingga fitting akhir.",
    bullet1: "Pengukuran mendalam dengan penyesuaian postur unik",
    bullet2: "Pilihan kain katun, wol, dan sutra berkualitas tinggi",
    bullet3: "Fitting teliti untuk memastikan kenyamanan bergerak",
  },
  testimonials: {
    label: "ULASAN PELANGGAN",
    quote:
      "Jahitan Bie Hin Tailor memberikan rasa percaya diri yang berbeda. Potongan jasnya sangat pas di badan dan nyaman dipakai sepanjang acara.",
    author: "Klien Bie Hin Tailor",
    subtitle: "Pelanggan Setelan Bespoke & Wedding",
  },
  storySplit: {
    label: "SEJARAH KAMI",
    heading: "Tradisi Bespoke Tailoring Sejak 1930",
    p1: "Bie Hin Tailor berawal dari semangat menghadirkan pakaian pria berpotongan rapi dan berkelas. Selama berpuluh tahun, kami terus melestarikan standar pembuatan jas berkualitas tinggi.",
    p2: "Kini hadir di Surabaya, Jakarta, dan Semarang, kami melayani berbagai generasi pria dan keluarga dengan perhatian personal terhadap setiap detail busana.",
    cta: "Baca Cerita Lengkap",
  },
  collection: {
    label: "KOLEKSI PILIHAN",
    heading: "Karya Terkini Bie Hin",
    desc: "Setiap busana dirancang khusus sesuai kepribadian pemakainya untuk tampilan berkarakter dan berkelas.",
    consult: "Konsultasikan",
    viewCollection: "Lihat Seluruh Koleksi",
    items: [
      {
        title: "Classic Navy Bespoke Suit",
        category: "Business & Formal",
        desc: "Setelan jas warna navy klasik dengan struktur bahu natural dan kain wol bertekstur halus.",
      },
      {
        title: "Black Tie Tuxedo",
        category: "Wedding & Gala",
        desc: "Tuksedo satin lapel dengan potongan abadi untuk acara formal malam hari.",
      },
      {
        title: "Double-Breasted Charcoal",
        category: "Executive Sartorial",
        desc: "Jas kancing ganda berwibawa dengan siluet ramping dan drape bahan yang jatuh sempurna.",
      },
      {
        title: "Silk Batik Heritage Jacket",
        category: "Indonesian Heritage",
        desc: "Paduan motif batik pilihan dengan lapisan furing sutra dan konstruksi jas modern.",
      },
    ],
  },
  showrooms: {
    label: "LOKASI KAMI",
    heading: "Showroom Bie Hin Tailor",
    desc: "Kunjungi showroom kami untuk melihat sampel bahan, konsultasi model, dan sesi fitting privat.",
    consultationNotice: "Konsultasi tatap muka tersedia setiap hari dengan reservasi sebelumnya.",
    getDirections: "Petunjuk Arah",
    callNow: "Hubungi",
  },
  appointment: {
    badge: "RESERVASI PRIVAT",
    heading: "Jadwalkan Sesi Konsultasi Anda",
    desc: "Isi data singkat berikut untuk memesan waktu fitting eksklusif di showroom pilihan Anda.",
    nameLabel: "Nama Lengkap",
    namePlaceholder: "Masukkan nama Anda",
    phoneLabel: "Nomor WhatsApp",
    phonePlaceholder: "Contoh: 0812 3456 7890",
    cityLabel: "Pilih Kota Showroom",
    cityPlaceholder: "Pilih showroom...",
    dateLabel: "Pilihan Tanggal",
    notesLabel: "Catatan atau Kebutuhan Busana",
    notesPlaceholder: "Contoh: Jas pernikahan untuk November, atau kemeja kerja 3 pcs",
    submit: "Kirim Permintaan Reservasi",
    submitting: "Mengirim...",
    submittedTitle: "Permintaan Diterima",
    submittedDesc:
      "Terima kasih. Tim Bie Hin Tailor akan segera menghubungi WhatsApp Anda untuk konfirmasi jadwal.",
    privacyNote: "Informasi Anda aman dan hanya digunakan untuk keperluan konfirmasi reservasi.",
  },
  footer: {
    brandDesc:
      "Bespoke custom tailor terkemuka sejak 1930. Menghadirkan setelan jas dan pakaian formal berkualitas tinggi di Surabaya, Jakarta, Tangerang, dan Semarang.",
    quickLinksTitle: "Navigasi",
    showroomsTitle: "Showroom Kami",
    consultationTitle: "Konsultasi & Reservasi",
    consultationDesc:
      "Ingin berdiskusi mengenai jas atau tuksedo Anda? Buat janji temu dengan tailor kami.",
    bookCta: "Buat Janji Temu",
    rights: "Semua hak dilindungi undang-undang.",
    seoTag: "Bespoke Tailor Surabaya • Jakarta • Tangerang • Semarang",
  },
};

export const en: Dictionary = {
  nav: {
    story: "OUR STORY",
    services: "SERVICES",
    collection: "COLLECTION",
    showrooms: "SHOWROOMS",
    contact: "CONTACT",
    bookAppointment: "Book Appointment",
    book: "BOOK",
  },
  hero: {
    badge: "EST. 1930 • BESPOKE MAISON",
    title1: "EMBRACE",
    title2: "your STYLE",
    desc: "Bespoke precision tailoring, handpicked premium cloths, and a heritage of sartorial excellence since 1930 across Surabaya, Jakarta, and Semarang.",
    ctaPrimary: "View Collection",
    ctaSecondary: "Consult Tailor",
  },
  discover: {
    label: "UNCOMPROMISING QUALITY",
    heading: "Precision & Artistry in Every Stitch",
    desc: "Every garment at Bie Hin Tailor is crafted through meticulous body measurements, premium suiting fabrics, and dedicated manual construction for an effortless, sharp silhouette.",
    experienceBadge: "Since 1930",
    experienceText: "A Legacy of Bespoke Tailoring in Indonesia",
    cta: "Discover The Craft",
  },
  services: {
    label: "OUR SERVICES",
    heading: "Signature Tailoring Disciplines",
    desc: "Dedicated personal tailoring for milestone celebrations, formal occasions, and refined everyday business attire.",
    viewAll: "View All Services",
    items: [
      {
        title: "Bespoke Suit",
        desc: "Full bespoke suiting drafted from scratch to complement your unique anatomical posture.",
      },
      {
        title: "Wedding Tuxedo",
        desc: "Timeless formal tuxedos and ceremony suits curated for your most memorable celebration.",
      },
      {
        title: "Batik & Shirts",
        desc: "Custom-fitted dress shirts and fine silk batik shirts engineered for breathable comfort.",
      },
      {
        title: "Trousers & Vests",
        desc: "Precision-cut bespoke trousers and structured waistcoats for versatile formal styling.",
      },
    ],
  },
  wideBanner: {
    title: "YOUR DESIGN, WE DELIVER",
    desc: "Discuss fabric weights, silhouettes, and handcrafted finishing with our master tailors.",
    cta: "Book Consultation",
  },
  mediaHighlight: {
    label: "THE ATELIER PROCESS",
    heading: "The Art of Bringing Bespoke Patterns to Life",
    desc: "At Bie Hin Tailor, every individual garment undergoes meticulous stages from initial consultation to hand finishing.",
    bullet1: "In-depth anatomical measurements and posture profiling",
    bullet2: "Selection from top-tier wools, linens, and silk batiks",
    bullet3: "Personalized basted fittings to ensure seamless comfort",
  },
  testimonials: {
    label: "CLIENT TESTIMONIAL",
    quote:
      "The fit and craftsmanship of Bie Hin Tailor are second to none. The suit feels light, drapes naturally, and gives an unmistakable confidence.",
    author: "Bie Hin Patron",
    subtitle: "Bespoke & Wedding Client",
  },
  storySplit: {
    label: "OUR STORY",
    heading: "A Bespoke Legacy Honored Since 1930",
    p1: "Bie Hin Tailor was established with a clear calling: to bring sharp, disciplined, and enduring tailoring to gentleman discerning of quality. Decades later, we uphold that very standard.",
    p2: "Serving patrons across Surabaya, Jakarta, and Semarang, we continue to dress generations of gentlemen with deeply personalized care.",
    cta: "Read Our Full Story",
  },
  collection: {
    label: "SELECTED COLLECTION",
    heading: "Recent Tailoring Commissions",
    desc: "Each piece is tailored individually for our patrons, blending comfort with distinguished visual presence.",
    consult: "Request Fitting",
    viewCollection: "View Full Collection",
    items: [
      {
        title: "Classic Navy Bespoke Suit",
        category: "Business & Formal",
        desc: "Timeless navy blue suiting featuring a natural shoulder line and rich virgin wool drape.",
      },
      {
        title: "Black Tie Tuxedo",
        category: "Wedding & Gala",
        desc: "Satin silk peaked lapel tuxedo with tailored waistline for prestigious evening occasions.",
      },
      {
        title: "Double-Breasted Charcoal",
        category: "Executive Sartorial",
        desc: "Distinguished six-button front with structured roll and commanding architectural silhouette.",
      },
      {
        title: "Silk Batik Heritage Jacket",
        category: "Indonesian Heritage",
        desc: "Hand-selected authentic silk batik crafted with full canvas tailoring structure.",
      },
    ],
  },
  showrooms: {
    label: "OUR SHOWROOMS",
    heading: "Visit Bie Hin Tailor",
    desc: "Experience our showrooms in Surabaya, Jakarta, and Semarang for cloth selection and private fittings.",
    consultationNotice: "Showroom consultations available daily by appointment.",
    getDirections: "Get Directions",
    callNow: "Call Us",
  },
  appointment: {
    badge: "PRIVATE APPOINTMENT",
    heading: "Reserve Your Bespoke Session",
    desc: "Provide your details below to schedule an exclusive fitting consultation at your preferred showroom.",
    nameLabel: "Full Name",
    namePlaceholder: "Enter your full name",
    phoneLabel: "WhatsApp Number",
    phonePlaceholder: "e.g. +62 812 3456 7890",
    cityLabel: "Preferred Showroom City",
    cityPlaceholder: "Select showroom...",
    dateLabel: "Preferred Date",
    notesLabel: "Notes or Attire Requirements",
    notesPlaceholder: "e.g., Wedding tuxedo needed for November, or 3 bespoke business shirts",
    submit: "Send Appointment Request",
    submitting: "Submitting...",
    submittedTitle: "Request Received",
    submittedDesc:
      "Thank you. A Bie Hin tailoring consultant will contact your WhatsApp shortly to confirm your schedule.",
    privacyNote: "Your information is secure and only used for your consultation arrangement.",
  },
  footer: {
    brandDesc:
      "Distinguished bespoke custom tailor established in 1930. Crafting fine suiting, tuxedos, and heritage wear across Surabaya, Jakarta, Tangerang, and Semarang.",
    quickLinksTitle: "Quick Links",
    showroomsTitle: "Our Showrooms",
    consultationTitle: "Private Consultation",
    consultationDesc:
      "Ready to craft your bespoke suit or tuxedo? Reserve your session with our tailors.",
    bookCta: "Book Appointment",
    rights: "All rights reserved.",
    seoTag: "Bespoke Tailor Surabaya • Jakarta • Tangerang • Semarang",
  },
};
