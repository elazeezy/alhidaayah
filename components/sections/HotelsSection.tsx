"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

const featuredHotels = [
  {
    name: "Dar Al Tawhid Intercontinental",
    location: "Makkah",
    starRating: 5,
    distanceFromHaram: "50m walking",
    description: "One of the world's most prestigious hotels, steps from Masjid al-Haram with breathtaking views of the Ka'bah.",
    amenities: ["Haram Views", "Multiple Restaurants", "Swimming Pool", "Spa"],
    slug: "dar-al-tawhid",
    image: "/images/hotels/dar-al-tawhid.jpg",
    imageAlt: "Dar Al Tawhid Intercontinental hotel, Makkah",
  },
  {
    name: "Mövenpick Hotel Hajar Tower",
    location: "Makkah",
    starRating: 5,
    distanceFromHaram: "100m walking",
    description: "Luxury accommodation connected to the Abraj Al-Bait complex, offering unparalleled access to the Grand Mosque.",
    amenities: ["Clock Tower Views", "Fine Dining", "Prayer Mats", "Free Wi-Fi"],
    slug: "movenpick-hajar",
    image: "/images/hotels/movenpick-hajar.jpg",
    imageAlt: "Mövenpick Hotel Hajar Tower, Makkah",
  },
  {
    name: "Anwar Al Madinah Mövenpick",
    location: "Madinah",
    starRating: 5,
    distanceFromHaram: "200m walking",
    description: "An elegant 5-star retreat in the heart of Madinah, offering spiritual tranquility and premium comfort.",
    amenities: ["Masjid Views", "Buffet Breakfast", "24hr Room Service", "Concierge"],
    slug: "anwar-madinah",
    image: "/images/hotels/anwar-madinah.jpg",
    imageAlt: "Anwar Al Madinah Mövenpick hotel, Madinah",
  },
  {
    name: "Hilton Suites Makkah",
    location: "Makkah",
    starRating: 4,
    distanceFromHaram: "300m walking",
    description: "Spacious suites in the heart of Makkah with easy Haram access and exceptional guest services.",
    amenities: ["Suite Rooms", "All Halal Dining", "Business Centre", "Fitness Centre"],
    slug: "hilton-suites-makkah",
    image: "/images/hotels/hilton-suites-makkah.jpg",
    imageAlt: "Hilton Suites Makkah hotel exterior",
  },
];

export default function HotelsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-subtitle mb-3"
          >
            Premium Hotels
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            Hotels Near the{" "}
            <span className="text-gradient-gold">Holy Haram</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We exclusively partner with premium hotels offering the closest possible proximity
            to Masjid al-Haram in Makkah and Masjid an-Nabawi in Madinah.
          </p>
        </div>

        {/* Hotel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredHotels.map((hotel, index) => (
            <motion.div
              key={hotel.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-card card-hover"
            >
              {/* Hotel Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-dark/10" />
                {/* Location Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                  <MapPin size={12} className="text-primary" />
                  <span className="text-xs font-semibold text-dark">{hotel.location}</span>
                </div>
                {/* Star Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-gold text-dark text-xs font-bold px-3 py-1.5 rounded-full">
                  <Star size={10} fill="currentColor" />
                  <span>{hotel.starRating}★</span>
                </div>
              </div>

              <div className="p-6">
                {/* Distance Badge */}
                <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold mb-3">
                  <MapPin size={11} />
                  <span>{hotel.distanceFromHaram} from Haram</span>
                </div>

                <h3 className="font-heading font-bold text-dark text-lg mb-2">
                  {hotel.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {hotel.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs bg-cream text-gray-600 px-2.5 py-1 rounded-lg"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/hotels/${hotel.slug}`}
                  className="text-primary text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1"
                >
                  View Hotel Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/hotels" className="btn-outline">
            View All Hotels
          </Link>
        </div>
      </div>
    </section>
  );
}
