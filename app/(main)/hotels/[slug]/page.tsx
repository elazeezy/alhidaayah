import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Check, Navigation } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import CTABanner from "@/components/sections/CTABanner";

const hotels = [
  {
    name: "Dar Al Tawhid Intercontinental",
    location: "Makkah",
    starRating: 5,
    distanceFromHaram: "50m walking",
    distanceMetres: 50,
    walkingMinutes: 1,
    googleMapsUrl: "https://maps.google.com/?q=Dar+Al+Tawhid+Intercontinental+Makkah",
    amenities: ["Haram Views", "Fine Dining", "Spa", "Business Centre", "Concierge", "24hr Room Service", "Prayer Facilities", "Free Wi-Fi"],
    slug: "dar-al-tawhid",
    description: "The Dar Al Tawhid Intercontinental Makkah is one of the world's most prestigious pilgrimage hotels, located just 50 metres from the Masjid al-Haram. Guests enjoy unobstructed views of the Holy Ka'bah from many rooms, making this an incomparable spiritual and physical experience. The hotel combines Islamic architecture with world-class hospitality standards.",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200&q=80",
    imageAlt: "Masjid al-Haram Grand Mosque — Dar Al Tawhid Intercontinental is directly adjacent",
    roomTypes: ["Standard Room", "Deluxe Haram View", "Suite", "Royal Suite"],
  },
  {
    name: "Mövenpick Hotel Hajar Tower",
    location: "Makkah",
    starRating: 5,
    distanceFromHaram: "100m walking",
    distanceMetres: 100,
    walkingMinutes: 2,
    googleMapsUrl: "https://maps.google.com/?q=Movenpick+Hotel+Hajar+Tower+Makkah",
    amenities: ["Clock Tower Views", "Multiple Restaurants", "Swimming Pool", "Fitness Centre", "Prayer Room", "Business Centre", "Free Wi-Fi", "Airport Shuttle"],
    slug: "movenpick-hajar",
    description: "The Mövenpick Hotel Hajar Tower is connected to the iconic Abraj Al-Bait clock tower complex, offering guests direct access to the Masjid al-Haram. Featuring world-class dining options, luxurious rooms, and the iconic clock tower views, this hotel is an ideal base for Umrah pilgrims seeking both proximity and comfort.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
    imageAlt: "Luxury 5-star hotel lobby — Mövenpick Hotel Hajar Tower",
    roomTypes: ["Superior Room", "Deluxe Room", "Junior Suite", "Suite"],
  },
  {
    name: "Hilton Suites Makkah",
    location: "Makkah",
    starRating: 4,
    distanceFromHaram: "300m walking",
    distanceMetres: 300,
    walkingMinutes: 4,
    googleMapsUrl: "https://maps.google.com/?q=Hilton+Suites+Makkah",
    amenities: ["Suite Rooms", "All Halal Dining", "Gym", "Kids Club", "Prayer Mats", "Concierge", "Free Wi-Fi", "Shuttle Service"],
    slug: "hilton-suites-makkah",
    description: "Hilton Suites Makkah offers spacious suite-style accommodation just 300 metres from the Masjid al-Haram. The all-suite format makes this hotel particularly popular with families and groups seeking more space during their Umrah stay.",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80",
    imageAlt: "Hilton Suites Makkah — elegant hotel room interior",
    roomTypes: ["Studio Suite", "One Bedroom Suite", "Two Bedroom Suite"],
  },
  {
    name: "Pullman ZamZam Makkah",
    location: "Makkah",
    starRating: 5,
    distanceFromHaram: "200m walking",
    distanceMetres: 200,
    walkingMinutes: 3,
    googleMapsUrl: "https://maps.google.com/?q=Pullman+ZamZam+Makkah",
    amenities: ["ZamZam Views", "Rooftop Pool", "Multiple Dining", "Spa", "Concierge", "24hr Room Service", "Free Wi-Fi"],
    slug: "pullman-zamzam",
    description: "The Pullman ZamZam Makkah is an iconic luxury hotel facing the Holy Mosque, offering breathtaking views of the Holy Mosque and ZamZam tower. Guests enjoy world-class amenities and the very highest level of service during their sacred journey.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
    imageAlt: "Pullman ZamZam Makkah — luxury pool and hotel exterior",
    roomTypes: ["Deluxe Room", "Superior Room", "Junior Suite", "Grand Suite"],
  },
  {
    name: "Anwar Al Madinah Mövenpick",
    location: "Madinah",
    starRating: 5,
    distanceFromHaram: "200m walking",
    distanceMetres: 200,
    walkingMinutes: 3,
    googleMapsUrl: "https://maps.google.com/?q=Anwar+Al+Madinah+Movenpick",
    amenities: ["Mosque Views", "Buffet Breakfast", "24hr Room Service", "Concierge", "Prayer Mats", "Free Wi-Fi", "Halal Dining"],
    slug: "anwar-madinah",
    description: "The Anwar Al Madinah Mövenpick Hotel is an elegant 5-star property located just 200 metres from Masjid an-Nabawi, offering pilgrims a premium spiritual retreat in the heart of the blessed city. The hotel's warm hospitality, fine dining, and comfortable rooms provide the perfect complement to your time in Madinah.",
    image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=1200&q=80",
    imageAlt: "Masjid an-Nabawi area, Madinah — Anwar Al Madinah Mövenpick is 200m from the mosque",
    roomTypes: ["Standard Room", "Deluxe Mosque View", "Suite", "Presidential Suite"],
  },
  {
    name: "Millennium Madinah Airport",
    location: "Madinah",
    starRating: 4,
    distanceFromHaram: "800m walking",
    distanceMetres: 800,
    walkingMinutes: 10,
    googleMapsUrl: "https://maps.google.com/?q=Millennium+Hotel+Madinah",
    amenities: ["Free Shuttle", "All-Day Dining", "Prayer Room", "Business Centre", "Free Wi-Fi", "24hr Reception"],
    slug: "millennium-madinah",
    description: "The Millennium Hotel Madinah provides comfortable 4-star accommodation with a free shuttle service to Masjid an-Nabawi. An excellent option for pilgrims who prefer reliable comfort at a more accessible price point.",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=80",
    imageAlt: "Millennium Hotel Madinah — comfortable 4-star hotel room",
    roomTypes: ["Standard Room", "Deluxe Room", "Suite"],
  },
];

interface Props { params: { slug: string }; }

export async function generateStaticParams() {
  return hotels.map(h => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hotel = hotels.find(h => h.slug === params.slug);
  if (!hotel) return {};
  return {
    title: `${hotel.name}, ${hotel.location} | Al-Hidaayah Platinum Travels`,
    description: `${hotel.starRating}-star hotel in ${hotel.location}. ${hotel.distanceFromHaram} from the Haram. ${hotel.description}`,
  };
}

export default function HotelDetailPage({ params }: Props) {
  const hotel = hotels.find(h => h.slug === params.slug);
  if (!hotel) notFound();

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-br from-dark to-primary/90 py-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-gold">Home</Link><span>/</span>
            <Link href="/hotels" className="hover:text-gold">Hotels</Link><span>/</span>
            <span className="text-gold">{hotel.name}</span>
          </nav>
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={14} className="text-gold" />
                <span className="text-gold text-sm font-semibold">{hotel.location}</span>
                <span className="text-white/40">·</span>
                <span className="text-white/60 text-sm">{hotel.distanceFromHaram} from Haram</span>
                <span className="text-white/40">·</span>
                <span className="text-white/60 text-sm">{hotel.walkingMinutes} min walk</span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">{hotel.name}</h1>
              <div className="flex gap-1">
                {Array.from({ length: hotel.starRating }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href={getWhatsAppUrl(`Assalamu Alaikum! I'm interested in packages with ${hotel.name}. Could you please provide more information?`)}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1fad53] transition-colors"
              >
                Ask About This Hotel
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-card">
              <Image
                src={hotel.image}
                alt={hotel.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              {/* Distance badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-primary text-white rounded-full px-4 py-2 text-sm font-semibold shadow-lg">
                <Navigation size={14} />
                {hotel.distanceFromHaram} from Haram · {hotel.walkingMinutes} min walk
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              <h2 className="font-heading font-bold text-dark text-xl mb-4">About {hotel.name}</h2>
              <p className="text-gray-600 leading-relaxed">{hotel.description}</p>

              {/* Google Maps link */}
              <a
                href={hotel.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-primary font-semibold text-sm hover:text-accent transition-colors"
              >
                <MapPin size={15} />
                View on Google Maps
              </a>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              <h2 className="font-heading font-bold text-dark text-xl mb-6">Hotel Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {hotel.amenities.map(a => (
                  <div key={a} className="flex items-center gap-2 bg-cream rounded-xl px-3 py-2.5">
                    <Check size={13} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-gray-600">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Types */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              <h2 className="font-heading font-bold text-dark text-xl mb-4">Room Types</h2>
              <div className="grid grid-cols-2 gap-3">
                {hotel.roomTypes.map(rt => (
                  <div key={rt} className="border border-gray-100 rounded-xl p-4">
                    <p className="font-semibold text-dark text-sm">{rt}</p>
                    <p className="text-gray-400 text-xs mt-1">Contact us for pricing</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 sticky top-24">
              <div className="text-center mb-6 pb-6 border-b border-gray-100">
                <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-2 text-sm font-semibold mb-3">
                  <Navigation size={13} />
                  {hotel.distanceFromHaram} · {hotel.walkingMinutes} min walk
                </div>
                <h3 className="font-heading font-bold text-dark text-lg">{hotel.name}</h3>
                <p className="text-gray-400 text-sm">{hotel.location} · {hotel.starRating}★</p>
              </div>
              <p className="text-gray-500 text-sm mb-4">This hotel is available in our Umrah packages. Contact us to book a package featuring this hotel.</p>
              <div className="space-y-3">
                <Link href="/umrah-packages" className="w-full btn-primary justify-center">View Umrah Packages</Link>
                <a
                  href={getWhatsAppUrl(`Assalamu Alaikum! I'm interested in staying at ${hotel.name} during my Umrah. Could you please assist?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#1fad53] transition-colors"
                >
                  Book via WhatsApp
                </a>
                <Link href="/contact" className="w-full btn-outline justify-center text-sm py-3">Get Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTABanner />
    </div>
  );
}
