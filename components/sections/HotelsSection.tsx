"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin, ExternalLink } from "lucide-react";
import { fadeUp, cardReveal, staggerGrid, viewport } from "@/lib/animations";

const featuredHotels = [
  {
    name: "Anwar Al Madinah Mövenpick",
    location: "Madinah",
    starRating: 5,
    distanceFromHaram: "200m walking",
    description: "An iconic 5-star hotel in the heart of Madinah offering stunning views of Masjid an-Nabawi, luxurious rooms, and world-class dining — all steps from the Prophet's Mosque ﷺ.",
    amenities: ["Masjid Views", "Buffet Dining", "24hr Room Service", "Concierge"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    imageAlt: "Anwar Al Madinah Mövenpick hotel, Madinah",
    mapUrl: "https://maps.google.com/?q=Anwar+Al+Madinah+Movenpick+Hotel",
    slug: "anwar-al-madinah-movenpick",
  },
  {
    name: "Elaf Taiba Hotel",
    location: "Madinah",
    starRating: 4,
    distanceFromHaram: "350m walking",
    description: "A highly regarded 4-star hotel situated close to Masjid an-Nabawi, offering comfortable, well-appointed rooms with excellent facilities for pilgrims.",
    amenities: ["Prayer Facilities", "Halal Dining", "Free Wi-Fi", "Family Rooms"],
    image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=800&q=80",
    imageAlt: "Elaf Taiba Hotel, Madinah",
    mapUrl: "https://maps.google.com/?q=Elaf+Taiba+Hotel+Madinah",
    slug: "elaf-taiba-hotel",
  },
  {
    name: "InterContinental Dar Al Iman Madinah",
    location: "Madinah",
    starRating: 5,
    distanceFromHaram: "250m walking",
    description: "A prestigious IHG property offering the finest luxury experience in Madinah, with breathtaking views of Masjid an-Nabawi and impeccable service throughout.",
    amenities: ["Haram Views", "Fine Dining", "Business Centre", "Premium Spa"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    imageAlt: "InterContinental Dar Al Iman Madinah by IHG",
    mapUrl: "https://maps.google.com/?q=InterContinental+Dar+Al+Iman+Madinah",
    slug: "intercontinental-dar-al-iman",
  },
  {
    name: "InterContinental Dar Al Hijra Madinah",
    location: "Madinah",
    starRating: 5,
    distanceFromHaram: "300m walking",
    description: "The distinguished sister property of Dar Al Iman, delivering an exceptional 5-star pilgrimage experience with modern comforts and genuine Islamic hospitality.",
    amenities: ["Masjid Views", "Multiple Restaurants", "Concierge", "Free Wi-Fi"],
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    imageAlt: "InterContinental Dar Al Hijra Madinah by IHG",
    mapUrl: "https://maps.google.com/?q=InterContinental+Dar+Al+Hijra+Madinah",
    slug: "intercontinental-dar-al-hijra",
  },
  {
    name: "Tulip Inn Al Daar Rawafid",
    location: "Madinah",
    starRating: 3,
    distanceFromHaram: "500m walking",
    description: "A comfortable and well-located 3-star option in Madinah ideal for budget-conscious pilgrims who want reliable service and convenient access to Masjid an-Nabawi.",
    amenities: ["Clean Rooms", "Halal Food", "Free Wi-Fi", "24hr Reception"],
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    imageAlt: "Tulip Inn Al Daar Rawafid, Madinah",
    mapUrl: "https://maps.google.com/?q=Tulip+Inn+Al+Daar+Rawafid+Madinah",
    slug: "tulip-inn-al-daar-rawafid",
  },
  {
    name: "Madinah Hilton Hotel",
    location: "Madinah",
    starRating: 5,
    distanceFromHaram: "150m walking",
    description: "One of the closest 5-star hotels to Masjid an-Nabawi, the Madinah Hilton offers world-renowned Hilton hospitality with a deeply spiritual setting for your pilgrimage.",
    amenities: ["Steps from Masjid", "Hilton Dining", "Fitness Centre", "Premium Rooms"],
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
    imageAlt: "Madinah Hilton Hotel exterior",
    mapUrl: "https://maps.google.com/?q=Hilton+Madinah+Hotel",
    slug: "madinah-hilton",
  },
];

export default function HotelsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
            className="section-subtitle mb-3"
          >
            Premium Hotels
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="section-title mb-4"
          >
            Our Partner Hotels in{" "}
            <span className="text-gradient-gold">Madinah Al-Munawwarah</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We partner exclusively with trusted, verified hotels in Madinah Al-Munawwarah —
            all within walking distance of Masjid an-Nabawi and chosen for their quality, comfort, and proximity.
          </p>
        </div>

        {/* City Tab */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-full px-5 py-2.5">
            <MapPin size={14} className="text-primary" />
            <span className="text-primary font-bold text-sm">Madinah Al-Munawwarah — Official Partner Hotels</span>
          </div>
        </div>

        {/* Hotel Grid */}
        <motion.div
          variants={staggerGrid} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredHotels.map((hotel) => (
            <motion.div
              key={hotel.slug}
              variants={cardReveal}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-card card-hover"
            >
              {/* Hotel Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/10" />
                {/* Location Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                  <MapPin size={11} className="text-primary" />
                  <span className="text-xs font-semibold text-dark">{hotel.location}</span>
                </div>
                {/* Star Rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-gold text-dark text-xs font-bold px-2.5 py-1.5 rounded-full">
                  <Star size={9} fill="currentColor" />
                  <span>{hotel.starRating}★</span>
                </div>
                {/* Distance overlay */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-dark/70 backdrop-blur-sm text-white rounded-full px-2.5 py-1">
                  <MapPin size={10} className="text-gold" />
                  <span className="text-[11px] font-medium">{hotel.distanceFromHaram} from Masjid</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading font-bold text-dark text-base mb-2 leading-snug group-hover:text-primary transition-colors">
                  {hotel.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">
                  {hotel.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {hotel.amenities.map((amenity) => (
                    <span key={amenity} className="text-xs bg-cream text-gray-600 px-2.5 py-1 rounded-lg">
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link
                    href={`/hotels/${hotel.slug}`}
                    className="text-primary text-sm font-semibold hover:text-accent transition-colors"
                  >
                    View Details →
                  </Link>
                  <a
                    href={hotel.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 text-xs hover:text-primary transition-colors"
                  >
                    <ExternalLink size={11} />
                    Map
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link href="/hotels" className="btn-outline">
            View All Hotels
          </Link>
        </div>
      </div>
    </section>
  );
}
