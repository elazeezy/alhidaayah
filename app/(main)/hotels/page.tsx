import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Hotels near the Haram | Al-Hidaayah Platinum Travels",
  description: "View our partner hotels in Makkah and Madinah. All hotels are carefully selected for their proximity to the Haram and quality of service.",
};

const hotels = [
  {
    name: "Dar Al Tawhid Intercontinental",
    location: "Makkah",
    starRating: 5,
    distanceFromHaram: "50m walking",
    distanceMetres: 50,
    amenities: ["Haram Views", "Fine Dining", "Spa", "Business Centre"],
    slug: "dar-al-tawhid",
    description: "Steps from the Masjid al-Haram with breathtaking Ka'bah views.",
    image: "/images/hotels/dar-al-tawhid.jpg",
    imageAlt: "Dar Al Tawhid Intercontinental hotel exterior with Masjid al-Haram view, Makkah",
  },
  {
    name: "Mövenpick Hotel Hajar Tower",
    location: "Makkah",
    starRating: 5,
    distanceFromHaram: "100m walking",
    distanceMetres: 100,
    amenities: ["Clock Tower Views", "Pool", "Buffet", "Wi-Fi"],
    slug: "movenpick-hajar",
    description: "Connected to Abraj Al-Bait complex — unparalleled Haram access.",
    image: "/images/hotels/movenpick-hajar.jpg",
    imageAlt: "Mövenpick Hotel Hajar Tower with Abraj Al-Bait Clock Tower, Makkah",
  },
  {
    name: "Hilton Suites Makkah",
    location: "Makkah",
    starRating: 4,
    distanceFromHaram: "300m walking",
    distanceMetres: 300,
    amenities: ["Suite Rooms", "Halal Dining", "Gym", "Kids Club"],
    slug: "hilton-suites-makkah",
    description: "Spacious suites in the heart of Makkah with easy Haram access.",
    image: "/images/hotels/hilton-suites-makkah.jpg",
    imageAlt: "Hilton Suites Makkah luxury hotel exterior",
  },
  {
    name: "Pullman ZamZam Makkah",
    location: "Makkah",
    starRating: 5,
    distanceFromHaram: "200m walking",
    distanceMetres: 200,
    amenities: ["ZamZam Views", "Multiple Dining", "Pool", "Concierge"],
    slug: "pullman-zamzam",
    description: "Iconic landmark hotel facing the Holy Mosque.",
    image: "/images/hotels/pullman-zamzam.jpg",
    imageAlt: "Pullman ZamZam Makkah hotel overlooking Masjid al-Haram",
  },
  {
    name: "Anwar Al Madinah Mövenpick",
    location: "Madinah",
    starRating: 5,
    distanceFromHaram: "200m walking",
    distanceMetres: 200,
    amenities: ["Mosque Views", "Buffet", "24hr Room Service", "Prayer Mats"],
    slug: "anwar-madinah",
    description: "Elegant 5-star stay near Masjid an-Nabawi.",
    image: "/images/hotels/anwar-madinah.jpg",
    imageAlt: "Anwar Al Madinah Mövenpick hotel with Masjid an-Nabawi view",
  },
  {
    name: "Millennium Madinah Airport",
    location: "Madinah",
    starRating: 4,
    distanceFromHaram: "800m walking",
    distanceMetres: 800,
    amenities: ["Free Shuttle", "Restaurant", "Prayer Room", "Wi-Fi"],
    slug: "millennium-madinah",
    description: "Comfortable 4-star option with shuttle service to the Mosque.",
    image: "/images/hotels/millennium-madinah.jpg",
    imageAlt: "Millennium Madinah hotel exterior",
  },
];

export default function HotelsPage() {
  const makkahHotels = hotels.filter(h => h.location === "Makkah");
  const madinahHotels = hotels.filter(h => h.location === "Madinah");

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-gradient-to-br from-dark to-primary/90 py-20">
        <div className="container-custom text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Hotel Partners</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Hotels Near the Holy Haram</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We partner exclusively with highly rated hotels offering the closest possible proximity
            to Masjid al-Haram in Makkah and Masjid an-Nabawi in Madinah.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Makkah Hotels */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="font-heading text-2xl font-bold text-dark whitespace-nowrap">Hotels in Makkah</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {makkahHotels.map((hotel) => <HotelCard key={hotel.slug} hotel={hotel} />)}
          </div>
        </div>

        {/* Madinah Hotels */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="font-heading text-2xl font-bold text-dark whitespace-nowrap">Hotels in Madinah</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {madinahHotels.map((hotel) => <HotelCard key={hotel.slug} hotel={hotel} />)}
          </div>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}

function HotelCard({ hotel }: { hotel: (typeof hotels)[0] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover group flex flex-col">
      {/* Hotel Photo */}
      <div className="relative h-52 sm:h-56 overflow-hidden shrink-0">
        <Image
          src={hotel.image}
          alt={hotel.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Dark gradient for badge legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/10" />

        {/* Location badge — top left */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
          <MapPin size={11} className="text-primary shrink-0" />
          <span className="text-xs font-semibold text-dark">{hotel.location}</span>
        </div>

        {/* Star rating badge — top right */}
        <div className="absolute top-3 right-3 flex items-center gap-0.5 bg-gold text-dark text-xs font-bold px-2.5 py-1.5 rounded-full shadow-sm">
          <Star size={10} fill="currentColor" className="shrink-0" />
          <span className="ml-0.5">{hotel.starRating}★</span>
        </div>

        {/* Distance badge — bottom left */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-primary/90 backdrop-blur-sm text-white rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm">
          <span>{hotel.distanceFromHaram} from Haram</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-dark text-base sm:text-lg leading-snug mb-1.5">
          {hotel.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
          {hotel.description}
        </p>

        {/* Amenity tags — max 4, no overflow */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {hotel.amenities.slice(0, 4).map(a => (
            <span key={a} className="text-xs bg-cream text-gray-600 px-2.5 py-1 rounded-lg font-medium">
              {a}
            </span>
          ))}
        </div>

        <Link
          href={`/hotels/${hotel.slug}`}
          className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:text-accent transition-colors mt-auto"
        >
          View Hotel Details →
        </Link>
      </div>
    </div>
  );
}
