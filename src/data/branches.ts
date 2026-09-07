export interface Branch {
  id: string;
  name: string;
  shortName: string;
  city: string;
  region: "Surabaya" | "Jakarta & Tangerang" | "Semarang";
  tag: string;
  address: string;
  fullAddress: string;
  rating?: number;
  reviewCount?: number;
  category: string;
  mapsUrl?: string;
  websiteUrl?: string;
  instagramUrl?: string;
  phone?: string;
  image: string;
  hours: string;
  features: string[];
}

export const branches: Branch[] = [
  {
    id: "surabaya-pahlawan",
    name: "Bie Hin Tailor Surabaya Pusat - Wedding Suit & Formal Wear Pahlawan",
    shortName: "Surabaya Pusat (Pahlawan)",
    city: "Surabaya",
    region: "Surabaya",
    tag: "HERITAGE ATELIER • EST. 1930",
    address: "Jl. Pahlawan No. 79, Alun-alun Contong, Kec. Bubutan, Kota Surabaya, Jawa Timur 60174",
    fullAddress: "Jl. Pahlawan No. 79, Alun-alun Contong, Kec. Bubutan, Kota Surabaya, Jawa Timur 60174",
    rating: 4.6,
    reviewCount: 75,
    category: "Penjahit Pesanan Khusus",
    mapsUrl:
      "https://www.google.com/maps/dir//Jl.+Pahlawan+No.79,+Alun-alun+Contong,+Kec.+Bubutan,+Surabaya,+Jawa+Timur+60174/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2dd7f940173f3c87:0x5e87d14069c35df1?entry=s&sa=X",
    websiteUrl: "http://biehinindonesia.com/",
    phone: "+62 811-300-1930",
    image: "/images/showrooms/surabaya-flagship.png",
    hours: "Senin – Sabtu: 09:30 – 19:30 WIB",
    features: ["Wedding Suit", "Formal Wear", "Bespoke Fitting", "Konsultasi Tailor"],
  },
  {
    id: "surabaya-manyar",
    name: "Bie Hin Tailor Surabaya Timur - Men Suit Manyar Kartika",
    shortName: "Surabaya Timur (Manyar Kartika)",
    city: "Surabaya",
    region: "Surabaya",
    tag: "HAUTE BESPOKE BOUTIQUE",
    address: "Manyar Kartika Selatan No. 69B, Menur Pumpungan, Kec. Sukolilo, Kota Surabaya, Jawa Timur 60118",
    fullAddress:
      "Manyar Kartika Selatan No. 69B, RT.001/RW.07, Menur Pumpungan, Kec. Sukolilo, Kota Surabaya, Jawa Timur 60118",
    rating: 4.9,
    reviewCount: 159,
    category: "Butik Mode Adibusana",
    mapsUrl:
      "https://www.google.com/maps/dir//Manyar+Kartika+Selatan+No.69B,+RT.001%2FRW.07,+Menur+Pumpungan,+Kec.+Sukolilo,+Surabaya,+Jawa+Timur+60118/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2dd7fb152755f321:0xfd8283f366b3f0?entry=s&sa=X",
    phone: "+62 811-300-1930",
    image: "/images/services/custom-suits.jpg",
    hours: "Buka Setiap Hari",
    features: ["Men Suit Specialist", "Executive Sartorial", "VIP Lounge", "Fabric Archives"],
  },
  {
    id: "surabaya-bukit-mas",
    name: "Bie Hin Tailor Wisata Bukit Mas - Wedding Suit",
    shortName: "Surabaya Barat (Wisata Bukit Mas)",
    city: "Surabaya",
    region: "Surabaya",
    tag: "WEDDING SUIT SALON",
    address: "Wisata Bukit Mas II, Jl. F1/30, Lidah Wetan, Kec. Lakarsantri, Kota Surabaya, Jawa Timur 60213",
    fullAddress: "Wisata Bukit Mas II, Jl. F1/30, Lidah Wetan, Kec. Lakarsantri, Kota Surabaya, Jawa Timur 60213",
    category: "Wedding Suit Specialist",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bie+Hin+Tailor+Wisata+Bukit+Mas+Surabaya",
    phone: "+62 811-300-1930",
    image: "/images/services/wedding-suits.jpg",
    hours: "Dengan Perjanjian / Appointment",
    features: ["Wedding & Groom Tuxedos", "Gala Ensembles", "Family Fitting Sessions"],
  },
  {
    id: "jakarta-sunter",
    name: "Bie Hin Tailor Jakarta Utara - Men Suit Mitra Sunter (Stitch & Brew)",
    shortName: "Jakarta Utara (Mitra Sunter - Stitch & Brew)",
    city: "Jakarta Utara",
    region: "Jakarta & Tangerang",
    tag: "STITCH & BREW CONCEPT",
    address: "Ruko Mitra Sunter Boulevard Blok A15, Sunter Jaya, Kec. Tanjung Priok, Jakarta Utara, DKI Jakarta 14350",
    fullAddress:
      "Ruko Mitra Sunter Boulevard Blok A15, Ruko Sunter Indah Permai No. A15, RT.17/RW.10, Sunter Jaya, Kec. Tanjung Priok, Jakarta Utara, DKI Jakarta 14350",
    rating: 5.0,
    reviewCount: 22,
    category: "Penjahit Pesanan Khusus",
    mapsUrl:
      "https://www.google.com/maps/dir//Ruko+Mitra+Sunter+Boulevard+Blok+A15,+Ruko+Sunter+Indah+Permai+No.A15,+RT.17%2FRW.10,+Sunter+Jaya,+Kec.+Tj.+Priok,+Jkt+Utara,+Daerah+Khusus+Ibukota+Jakarta+14350/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2e69f570b9d8c20d:0xd498c0f91a104e3?entry=s&sa=X",
    instagramUrl: "https://www.instagram.com/biehin.stitchandbrew/",
    phone: "+62 811-300-1930",
    image: "/images/showrooms/jakarta-salon.jpg",
    hours: "Senin – Sabtu: 10:00 – 19:00 WIB",
    features: ["Stitch & Brew Lounge", "Men Suit Tailoring", "Private Fitting Room", "Coffee Experience"],
  },
  {
    id: "tangerang-greenlake",
    name: "Bie Hin Tailor Tangerang - Men Suit & Formal Wear Greenlake City",
    shortName: "Tangerang (Greenlake City)",
    city: "Tangerang",
    region: "Jakarta & Tangerang",
    tag: "SARTORIAL SHOWROOM",
    address: "Ruko Cordoba Blok F No. 28, Jl. Green Lake City Boulevard, Petir, Kec. Cipondoh, Kota Tangerang, Banten 15147",
    fullAddress:
      "Ruko Cordoba Blok F No. 28, Jl. Green Lake City Boulevard, Petir, Kec. Cipondoh, Kota Tangerang, Banten 15147",
    category: "Men Suit & Formal Wear",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bie+Hin+Tailor+Greenlake+City+Ruko+Cordoba+F28",
    phone: "+62 811-300-1930",
    image: "/images/services/formal-wear.jpg",
    hours: "Senin – Sabtu: 09:30 – 19:00 WIB",
    features: ["Men Suit & Formal Wear", "Corporate Executive", "Bespoke Measurement"],
  },
  {
    id: "semarang-simongan",
    name: "Bie Hin Tailor - Wedding Suit & Formal Wear Semarang",
    shortName: "Semarang (Paramount Square Simongan)",
    city: "Semarang",
    region: "Semarang",
    tag: "CENTRAL JAVA ATELIER",
    address: "Ruko Paramount Square A22, Jl. Simongan No. 195, Manyaran, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50147",
    fullAddress:
      "Ruko Paramount Square A22, Jl. Simongan No. 195, Manyaran, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50147",
    rating: 5.0,
    reviewCount: 19,
    category: "Penjahit Pesanan Khusus",
    mapsUrl:
      "https://www.google.com/maps/dir//Jl.+Simongan+No.195,+Manyaran,+Kec.+Semarang+Barat,+Kota+Semarang,+Jawa+Tengah+50147/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2e708be5aff25019:0xa2858e2d6e7a7528?entry=s&sa=X",
    phone: "+62 811-300-1930",
    image: "/images/showrooms/semarang-atelier.png",
    hours: "Senin – Sabtu: 09:30 – 18:30 WIB",
    features: ["Wedding Suit Specialist", "Formal Wear", "Master Measurement", "Bespoke Alterations"],
  },
];
