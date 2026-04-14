"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Plane } from "lucide-react";
import { DEPARTURE_CITIES } from "@/lib/constants";

export default function DepartureCitiesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="section-subtitle mb-3"
          >
            Departure Cities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 1.12 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="section-title mb-4"
          >
            We Fly From{" "}
            <span className="text-gradient-gold">Across the UK</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Wherever you are in the United Kingdom, we have departure options to serve your community.
            Find your nearest departure city below.
          </p>
        </div>

        {/* City Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {DEPARTURE_CITIES.map((city, index) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, scale: 1.08 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/umrah-packages-from-${city.slug}`}
                className="block relative h-44 md:h-56 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Real City Photo */}
                <Image
                  src={city.image}
                  alt={`${city.name} city — Umrah departures`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent group-hover:from-dark/90 transition-all duration-300" />

                {/* Gold shimmer on hover */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-1.5 text-gold/90 text-xs font-medium mb-1">
                    <Plane size={11} />
                    <span>{city.airportCode}</span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                    {city.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1 text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MapPin size={10} />
                    <span>View Packages</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
