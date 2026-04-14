"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Star, Plane, MessageCircle } from "lucide-react";
import { PACKAGES_DATA, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { fadeUp, fadeUpSlow, cardReveal, staggerGrid, viewport } from "@/lib/animations";

const tabs = [
  { label: "All Packages", value: "all" },
  { label: "3★ Packages", value: "3" },
  { label: "5★ Packages", value: "5" },
];

export default function PackagesSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = PACKAGES_DATA.filter((pkg) =>
    activeTab === "all" ? true : pkg.starRating === parseInt(activeTab)
  );

  return (
    <section id="packages" className="section-padding bg-cream bg-pattern">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
            className="section-subtitle mb-3"
          >
            Our Packages
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="section-title mb-4"
          >
            Umrah Packages for{" "}
            <span className="text-gradient-gold">2026</span>
          </motion.h2>
          <motion.p
            variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={viewport}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Carefully curated packages for every pilgrim. From comfortable 3-star stays
            to luxurious 5-star experiences — all include flights, guided Ziyarah, and spiritual support.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-card gap-0.5 md:gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.value
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-500 hover:text-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Package Cards */}
        <motion.div
          variants={staggerGrid} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {filtered.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              variants={cardReveal}
              className="group bg-white rounded-2xl overflow-hidden shadow-card card-hover border border-gray-100 flex flex-col"
            >
              {/* Card Header */}
              <div className="relative bg-gradient-to-br from-primary to-primary-800 p-5 md:p-8 text-white">
                {/* Star Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-gold text-dark text-xs font-bold px-3 py-1.5 rounded-full">
                  {Array.from({ length: pkg.starRating }).map((_, i) => (
                    <Star key={i} size={10} fill="currentColor" />
                  ))}
                  <span className="ml-1">{pkg.starRating}★</span>
                </div>

                {/* Islamic Crescent Decoration */}
                <div className="absolute top-0 left-0 opacity-10">
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="55" fill="none" stroke="white" strokeWidth="1"/>
                    <circle cx="80" cy="60" r="45" fill="white"/>
                  </svg>
                </div>

                <p className="text-gold/80 text-xs font-semibold uppercase tracking-wider mb-2">
                  {pkg.travelPeriod}
                </p>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-1">{pkg.title}</h3>
                <p className="text-white/70 text-xs md:text-sm">{pkg.duration} · Makkah & Madinah</p>

                <div className="mt-4 md:mt-6 flex items-end gap-4">
                  <div>
                    <p className="text-white/60 text-xs mb-1">From (with flights)</p>
                    <p className="font-heading text-2xl md:text-3xl font-bold text-gold">
                      {formatPrice(pkg.priceWithFlights)}
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">per person</p>
                  </div>
                  <div className="border-l border-white/20 pl-4">
                    <p className="text-white/60 text-xs mb-1">Land only</p>
                    <p className="font-heading text-lg md:text-xl font-bold text-white/80">
                      {formatPrice(pkg.priceWithoutFlights)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                {/* Duration highlight */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                  <Plane size={14} className="text-primary" />
                  <span className="text-sm text-gray-600 font-medium">{pkg.duration} · 4 Nights Madinah + 6 Nights Makkah</span>
                </div>

                {/* Key Inclusions */}
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.inclusions.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                  {pkg.inclusions.length > 5 && (
                    <li className="text-xs text-primary font-semibold pl-5">
                      +{pkg.inclusions.length - 5} more inclusions
                    </li>
                  )}
                </ul>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <a
                    href={getWhatsAppUrl(
                      pkg.starRating === 3
                        ? WHATSAPP_MESSAGES.basicPackage
                        : WHATSAPP_MESSAGES.premiumPackage
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#1fad53] transition-all duration-200"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="flex-1 btn-primary text-sm py-3"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/umrah-packages" className="btn-outline">
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
