export const SITE_CONFIG = {
  name: "Al-Hidaayah Platinum Travels",
  tagline: "Guidance with top-tier service",
  phone: "+966599748264",
  phoneDisplay: "+966 599 748 264",
  whatsapp: "+447879797589",
  whatsappNumber: "447879797589",
  email: "info@alhidaayahplatinumtravels.co.uk",
  instagram: "@alhidayah104",
  instagramUrl: "https://instagram.com/alhidayah104",
  address: "United Kingdom",
  openingHours: "Mon–Sat: 9:00am – 6:00pm | Sun: 10:00am – 4:00pm",
  url: "https://www.alhidaayahplatinumtravels.co.uk",
};

export const WHATSAPP_MESSAGES = {
  general: "Assalamu Alaikum! I'm interested in your Umrah/Hajj packages. Could you please provide more information?",
  umrah: "Assalamu Alaikum! I'm interested in booking an Umrah package. Could you please provide more details?",
  hajj: "Assalamu Alaikum! I'm interested in your Hajj packages for 2026. Could you please provide more information?",
  basicPackage: "Assalamu Alaikum! I'm interested in the Basic Umrah Package (3★, £1,900 per person). Could you please provide more details?",
  premiumPackage: "Assalamu Alaikum! I'm interested in the Premium Umrah Package (5★, £2,100 per person). Could you please provide more details?",
  group: "Assalamu Alaikum! I'm interested in arranging a group Umrah booking. Could you please get in touch?",
  ramadan: "Assalamu Alaikum! I'm interested in your Ramadan Umrah packages. Could you please provide more information?",
  quote: "Assalamu Alaikum! I'd like to get a free quote for an Umrah package. Could you please help me?",
};

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const DEPARTURE_CITIES = [
  {
    name: "London",
    slug: "london",
    airport: "Heathrow Airport (LHR) / Gatwick Airport (LGW)",
    airportCode: "LHR/LGW",
    description: "Departing from one of the world's busiest airports with direct and connecting flights to Jeddah and Madinah.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
  },
  {
    name: "Manchester",
    slug: "manchester",
    airport: "Manchester Airport (MAN)",
    airportCode: "MAN",
    description: "Convenient departures from Manchester Airport serving pilgrims across the North of England.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
  },
  {
    name: "Birmingham",
    slug: "birmingham",
    airport: "Birmingham Airport (BHX)",
    airportCode: "BHX",
    description: "Serving pilgrims from the Midlands with excellent connections to the Holy Cities.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
  },
  {
    name: "Glasgow",
    slug: "glasgow",
    airport: "Glasgow Airport (GLA)",
    airportCode: "GLA",
    description: "Comfortable departures for Scottish pilgrims heading on their blessed journey.",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&q=80",
  },
  {
    name: "Edinburgh",
    slug: "edinburgh",
    airport: "Edinburgh Airport (EDI)",
    airportCode: "EDI",
    description: "Serving pilgrims from Edinburgh and the surrounding areas of Scotland.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80",
  },
  {
    name: "Bradford",
    slug: "bradford",
    airport: "Leeds Bradford Airport (LBA)",
    airportCode: "LBA",
    description: "Convenient option for pilgrims in Bradford and Yorkshire, departing from nearby Leeds Bradford Airport.",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80",
  },
];

export const PACKAGES_DATA = [
  {
    id: "basic-umrah-2026",
    slug: "basic-umrah-package-2026",
    title: "Basic Umrah Package",
    type: "umrah" as const,
    starRating: 3 as const,
    priceWithFlights: 1900,
    priceWithoutFlights: 1160,
    duration: "10 Days",
    durationDays: 10,
    travelPeriod: "August / September 2026",
    departureCities: ["London", "Manchester", "Birmingham", "Glasgow", "Edinburgh", "Bradford"],
    departureMonths: ["August", "September"],
    inclusions: [
      "Comfortable accommodation in 3-star hotels close to the Haram",
      "Daily meals (2 nourishing meals per day)",
      "Smooth and stress-free local transportation",
      "Return flight ticket (to and fro) — included in full package",
      "Guided Ziyarah tours in Makkah & Madinah",
      "Professional Umrah guidance & spiritual support",
      "Daily Islamic reminders to uplift your journey",
      "Complimentary Umrah travel kit",
    ],
    exclusions: [
      "Saudi Arabia Umrah visa fees (advised separately)",
      "Travel insurance (recommended — we can assist)",
      "Personal shopping or souvenirs",
      "Optional extra tours not listed in itinerary",
      "Tips and gratuities",
      "Any costs arising from flight delays or cancellations beyond our control",
    ],
    itinerary: [
      { day: 1, title: "Departure from UK", description: "Assemble at your departure airport and board your flight to Madinah Al-Munawwarah. Our team will be on hand to assist you at the airport.", location: "UK → Madinah" },
      { day: 2, title: "Arrival in Madinah", description: "Arrive in the blessed city of Madinah. Transfer to your hotel and settle in. Visit the magnificent Masjid an-Nabawi for Salah and spiritual reflection.", location: "Madinah" },
      { day: 3, title: "Madinah Ziyarah", description: "Guided tour of the sacred sites of Madinah including Masjid Quba (the first mosque built in Islam), Masjid al-Qiblatain, and the blessed Uhud mountain.", location: "Madinah" },
      { day: 4, title: "More of Madinah's Blessings", description: "Continue exploring the historic sites of Madinah. Free time for personal worship, reflection, and shopping in the blessed city.", location: "Madinah" },
      { day: 5, title: "Departure to Makkah", description: "After Fajr prayers, don your Ihram and make your way to Makkah Al-Mukarramah. Upon arrival, perform your Umrah — Tawaf, Sa'i, and Halq/Taqsir.", location: "Madinah → Makkah" },
      { day: 6, title: "Makkah — First Full Day", description: "Settle into the sacred rhythm of Makkah. Perform Tawaf and prayers at Masjid al-Haram at your own pace. Take in the spiritual atmosphere of the Mother of all Cities.", location: "Makkah" },
      { day: 7, title: "Makkah Ziyarah", description: "Guided Ziyarah tour of Makkah's historic and sacred sites including Jabal Nur (Cave of Hira), Jabal Thawr, Mina, Muzdalifah, and Arafat.", location: "Makkah" },
      { day: 8, title: "Ibadah in Makkah", description: "Dedicated day for personal worship at Masjid al-Haram. Perform as many Tawafs as you wish. Attend Salah in the Grand Mosque and soak in the blessed atmosphere.", location: "Makkah" },
      { day: 9, title: "Final Days in Makkah", description: "Continue your Ibadah in the holy city. Farewell Tawaf (Tawaf al-Wida) in preparation for departure. Enjoy last moments of proximity to the Ka'bah.", location: "Makkah" },
      { day: 10, title: "Return to UK", description: "Transfer to Jeddah airport for your return flight to the UK. Arrive home spiritually renewed, carrying the blessings of your sacred journey.", location: "Makkah → UK" },
    ],
    faqs: [
      { question: "Is the Umrah visa included in the package?", answer: "The Umrah visa process is guided by our team and visa fees are advised separately based on current Saudi authorities' requirements." },
      { question: "What type of rooms are provided at the hotel?", answer: "Our 3-star packages typically include shared or quad occupancy rooms. Twin and double rooms are available at a supplement." },
      { question: "Are flights included in the £1,900 price?", answer: "Yes! The full package price of £1,900 includes return flights. If you'd prefer to arrange your own flights, the land-only price is £1,160 per person." },
      { question: "How far are the hotels from the Haram?", answer: "Our 3-star partner hotels are located within walking distance of the Haram in both Makkah and Madinah, typically 5–15 minutes on foot." },
    ],
    active: true,
  },
  {
    id: "premium-umrah-2026",
    slug: "premium-umrah-package-2026",
    title: "Premium Umrah Package",
    type: "umrah" as const,
    starRating: 5 as const,
    priceWithFlights: 2100,
    priceWithoutFlights: 1350,
    duration: "10 Days",
    durationDays: 10,
    travelPeriod: "August / September 2026",
    departureCities: ["London", "Manchester", "Birmingham", "Glasgow", "Edinburgh", "Bradford"],
    departureMonths: ["August", "September"],
    inclusions: [
      "Accommodation in 5-star hotels close to the Haram in both Makkah and Madinah",
      "Daily meals (2 meals per day)",
      "Local transportation",
      "Return flight ticket (to and fro) — included in full package",
      "Ziyarah tours in both Makkah and Madinah",
      "Umrah guidance and support",
      "Daily Islamic reminders",
      "Umrah travel kit",
    ],
    exclusions: [
      "Saudi Arabia Umrah visa fees (advised separately)",
      "Travel insurance (recommended — we can assist)",
      "Personal shopping or souvenirs",
      "Optional extra tours not listed in itinerary",
      "Tips and gratuities",
      "Any costs arising from flight delays or cancellations beyond our control",
    ],
    itinerary: [
      { day: 1, title: "Departure from UK", description: "Assemble at your departure airport and board your flight to Madinah Al-Munawwarah. Our dedicated team will be present to assist you.", location: "UK → Madinah" },
      { day: 2, title: "Arrival in Madinah — Check In to 5★ Hotel", description: "Arrive in the blessed city of Madinah and transfer to your luxurious 5-star hotel. Enjoy premium facilities and begin your spiritual journey at Masjid an-Nabawi.", location: "Madinah" },
      { day: 3, title: "Madinah Sacred Sites Ziyarah", description: "Expert-guided tour of Madinah's most sacred sites: Masjid an-Nabawi, Raudhah, Masjid Quba, Masjid al-Qiblatain, and the Baqi cemetery.", location: "Madinah" },
      { day: 4, title: "Madinah — Personal Worship & Reflection", description: "A day for personal Ibadah and reflection in the blessed city. Spend quality time at Masjid an-Nabawi offering Salah near the Prophet's ﷺ resting place.", location: "Madinah" },
      { day: 5, title: "Travel to Makkah Al-Mukarramah", description: "After Fajr, don your Ihram and travel in comfort to the Mother of all Cities. Perform your Umrah upon arrival — Tawaf, Sa'i, and Halq/Taqsir.", location: "Madinah → Makkah" },
      { day: 6, title: "Makkah — 5★ Hotel & Haram Proximity", description: "Begin experiencing the unparalleled spirituality of Makkah from your premium 5-star hotel near the Haram. Enjoy round-the-clock access to the Grand Mosque.", location: "Makkah" },
      { day: 7, title: "Makkah Historical Ziyarah Tour", description: "Premium guided tour of Makkah's sacred sites: Jabal Nur, Jabal Thawr, Arafat, Muzdalifah, Mina, and the historical Makkah Museum.", location: "Makkah" },
      { day: 8, title: "Ibadah & Worship at Masjid al-Haram", description: "A dedicated day for unlimited Tawaf and Salah at the Grand Mosque. Our guide will be available for spiritual support and assistance throughout.", location: "Makkah" },
      { day: 9, title: "Final Blessed Hours in Makkah", description: "Cherish the last hours in the most sacred city on Earth. Perform your farewell Tawaf (Tawaf al-Wida) with our guidance and make heartfelt Du'a.", location: "Makkah" },
      { day: 10, title: "Return to UK", description: "Transfer to Jeddah airport for your return flight home. Return spiritually elevated, having completed this incredible act of worship.", location: "Makkah → UK" },
    ],
    faqs: [
      { question: "Which 5-star hotels do you use?", answer: "We partner with premium 5-star hotels in both Makkah and Madinah that offer excellent proximity to the Haram, fine dining, and luxury amenities. Specific hotels are confirmed at the time of booking." },
      { question: "What is the difference between the Basic and Premium packages?", answer: "The Premium package upgrades your hotel to 5-star in both cities, offering superior comfort, better food options, and closer proximity to the Haram. The guidance and tours are also more personalised." },
      { question: "Can I book for a family?", answer: "Absolutely. Family rooms and combined packages for couples, families, and groups are available. Contact us on WhatsApp for tailored group pricing." },
      { question: "Is this package suitable for elderly pilgrims or those with mobility needs?", answer: "Yes. Our Premium package is particularly suitable for elderly pilgrims or those with mobility challenges due to the hotels' proximity to the Haram and the high level of personal support provided." },
    ],
    active: true,
  },
];

export const STAR_RATINGS = [3, 4, 5];
export const DURATIONS = ["7 Days", "10 Days", "14 Days", "21 Days"];
export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const TRUST_STATS = [
  { label: "Years of Service", value: "5+", icon: "calendar" },
  { label: "Pilgrims Served", value: "500+", icon: "users" },
  { label: "Packages Offered", value: "10+", icon: "package" },
  { label: "Cities Covered", value: "6", icon: "map-pin" },
];

export const WHY_CHOOSE_US = [
  {
    icon: "shield-check",
    title: "Trusted & ATOL Protected",
    description: "Book with complete confidence. Our packages are fully ATOL protected, ensuring your money is safe and your journey is secure.",
  },
  {
    icon: "star",
    title: "Premium 5-Star Experience",
    description: "We partner exclusively with highly-rated hotels in the closest proximity to Masjid al-Haram for an unparalleled spiritual experience.",
  },
  {
    icon: "heart",
    title: "Spiritual Guidance Included",
    description: "Our experienced scholars and guides accompany you throughout your journey, providing daily reminders, Duas, and Ziyarah commentary.",
  },
  {
    icon: "headphones",
    title: "24/7 Dedicated Support",
    description: "From your first inquiry to your return home, our team is available round the clock to assist with any questions or needs.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Choose Your Package",
    description: "Browse our carefully curated Umrah and Hajj packages. Filter by star rating, duration, departure city, and travel period to find your perfect journey.",
    icon: "search",
  },
  {
    step: 2,
    title: "Make Your Inquiry",
    description: "Contact us via WhatsApp, our online form, or call us directly. Our knowledgeable team will guide you through every detail and answer all your questions.",
    icon: "message-circle",
  },
  {
    step: 3,
    title: "Travel with Peace",
    description: "Leave all the logistics to us. From airport assistance and visa guidance to hotel check-in and Ziyarah tours — simply focus on your worship.",
    icon: "plane",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sister Fatima H.",
    city: "London",
    starRating: 5,
    travelMonth: "March",
    travelYear: 2024,
    reviewText: "Alhamdulillah, what an incredible experience. The team at Al-Hidaayah made everything so smooth — from the airport all the way to Makkah. The 5-star hotel was breathtaking and so close to the Haram. I cried when I first saw the Ka'bah. I cannot thank them enough. Already planning my next trip with them!",
    packageType: "Premium Umrah Package",
    verified: true,
  },
  {
    name: "Brother Tariq M.",
    city: "Birmingham",
    starRating: 5,
    travelMonth: "November",
    travelYear: 2023,
    reviewText: "As a first-time pilgrim, I was nervous about travelling to Saudi Arabia. The team handled absolutely everything and made me feel so at ease. The daily Islamic reminders were a beautiful touch that made the journey even more spiritually enriching. Highly recommend to anyone planning Umrah.",
    packageType: "Basic Umrah Package",
    verified: true,
  },
  {
    name: "Sister Aisha K.",
    city: "Manchester",
    starRating: 5,
    travelMonth: "January",
    travelYear: 2024,
    reviewText: "SubhanAllah, the best decision I ever made. Al-Hidaayah Platinum Travels truly lives up to their name. The guidance, the hotels, the Ziyarah tours — everything was perfectly organised. The group WhatsApp kept us updated at every step. A truly blessed journey.",
    packageType: "Premium Umrah Package",
    verified: true,
  },
  {
    name: "Brother Yusuf A.",
    city: "Bradford",
    starRating: 5,
    travelMonth: "September",
    travelYear: 2023,
    reviewText: "I've travelled with other Umrah operators before but nothing compares to Al-Hidaayah. The personal attention, the quality of hotels, and the spiritual atmosphere created by the guides made this unlike any other trip. I felt truly guided and supported throughout. JazakAllah Khair.",
    packageType: "Basic Umrah Package",
    verified: true,
  },
];

export const FAQ_CATEGORIES = {
  "Visa Questions": [
    {
      question: "Do I need an Umrah visa?",
      answer: "Yes, all pilgrims travelling from the UK for Umrah require an Umrah visa issued by the Saudi authorities. Our team will guide you through the application process. Visa fees are not included in the package price.",
    },
    {
      question: "How long does the Umrah visa process take?",
      answer: "The Umrah visa typically takes 5–10 working days to process once all required documents are submitted. We recommend applying at least 4 weeks before your departure date.",
    },
    {
      question: "What documents do I need for the Umrah visa?",
      answer: "You will need a valid passport (at least 6 months validity), completed visa application form, passport-sized photographs, proof of your relationship to any Mahram (for female pilgrims under 45), and your flight booking. Our team will provide a full checklist upon booking.",
    },
    {
      question: "Can women travel for Umrah without a Mahram?",
      answer: "As per Saudi government regulations, women under 45 must be accompanied by a Mahram (male guardian). Women over 45 may travel in an organised group. We can advise on the specific requirements based on your circumstances.",
    },
  ],
  "Package Questions": [
    {
      question: "What is the difference between your Basic and Premium packages?",
      answer: "The Basic (3★) package offers comfortable, clean accommodation close to the Haram with all essential services included. The Premium (5★) package provides luxury hotel stays in the finest properties in both Makkah and Madinah, with superior proximity to the Haram and a more personalised service experience.",
    },
    {
      question: "Are flights included in the package price?",
      answer: "Yes, our listed package prices (£1,900 for Basic, £2,100 for Premium) include return flights from your chosen UK departure city. We also offer land-only options for £1,160 (Basic) and £1,350 (Premium) if you prefer to arrange your own flights.",
    },
    {
      question: "Which airlines do you use for Umrah flights?",
      answer: "We work with a range of reputable airlines including Saudi Arabian Airlines (Saudia), Emirates, Etihad, Turkish Airlines, and others depending on departure city and availability. Specific airline details are confirmed at the time of booking.",
    },
    {
      question: "Can I customise my package?",
      answer: "Absolutely. We offer bespoke package tailoring to suit your specific needs — whether that's extending your stay, upgrading your hotel, adding extra Ziyarah tours, or arranging special requirements. Contact us to discuss a personalised package.",
    },
  ],
  "Health & Requirements": [
    {
      question: "Do I need any vaccinations for Umrah?",
      answer: "The Saudi authorities currently require proof of meningococcal meningitis vaccination (ACWY). Additional vaccinations such as COVID-19 boosters may be required depending on current travel guidelines. We recommend consulting your GP or travel health clinic 6–8 weeks before departure.",
    },
    {
      question: "Are your packages suitable for elderly pilgrims?",
      answer: "Yes, we have considerable experience supporting elderly pilgrims. Our Premium packages are particularly suitable as the 5-star hotels offer closer proximity to the Haram, reducing walking distances. Our guides are trained to support pilgrims with mobility needs.",
    },
    {
      question: "Can pilgrims with disabilities travel with you?",
      answer: "We actively support pilgrims with disabilities and special needs. Please contact us when booking so we can make the appropriate arrangements — wheelchair assistance, ground-floor rooms, mobility access, and extra support as needed.",
    },
  ],
  "Payment": [
    {
      question: "How do I secure my booking?",
      answer: "A deposit is required to secure your place on the package. The balance is typically due 8 weeks before departure. We accept bank transfer. Full payment details are provided upon confirming your booking.",
    },
    {
      question: "What is your cancellation and refund policy?",
      answer: "We understand that circumstances can change. Our refund policy outlines cancellation timelines and any applicable charges. Please refer to our Refund Policy page or contact us directly for full details.",
    },
    {
      question: "Can I pay in instalments?",
      answer: "Yes, we offer flexible instalment plans for those who wish to spread the cost of their package. Please contact us to discuss available payment plans.",
    },
    {
      question: "Is my money protected?",
      answer: "Your financial protection is our priority. Our packages are ATOL protected, meaning your money is safeguarded against business failure. You will receive an ATOL certificate upon booking.",
    },
  ],
  "General": [
    {
      question: "What is the best time of year to perform Umrah?",
      answer: "Umrah can be performed at any time of the year, unlike Hajj which has specific dates. Popular times include Ramadan (spiritually most rewarding), the school holidays in August/September, and December. We currently offer packages in August and September 2026.",
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking as early as possible, especially for popular travel periods like Ramadan and school holidays. Places fill up quickly, so booking 3–6 months in advance is advisable to secure your preferred dates and best pricing.",
    },
    {
      question: "Do you provide an Umrah guide with the group?",
      answer: "Yes, every group is accompanied by an experienced and knowledgeable Umrah guide who provides Ziyarah tours, daily Islamic reminders, and is available to answer all religious and practical questions throughout the journey.",
    },
    {
      question: "What should I pack for Umrah?",
      answer: "We provide a comprehensive packing guide to all confirmed pilgrims. Essential items include Ihram garments (for men), appropriate modest clothing, prayer mat, Quran, travel adaptors, and any personal medication. Our complimentary Umrah kit includes key necessities.",
    },
  ],
};
