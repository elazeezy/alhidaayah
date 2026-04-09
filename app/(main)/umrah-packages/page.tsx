"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Star, MessageCircle, SlidersHorizontal, X } from "lucide-react";
import { PACKAGES_DATA, DEPARTURE_CITIES, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

const starOptions = [3, 4, 5];
const durationOptions = ["7 Days", "10 Days", "14 Days", "21 Days"];
const monthOptions = ["August", "September", "October", "November", "December", "January", "February", "March", "April"];

export default function UmrahPackagesPage() {
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(5000);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = PACKAGES_DATA.filter((pkg) => {
    if (selectedStar && pkg.starRating !== selectedStar) return false;
    if (selectedCity && !pkg.departureCities.includes(selectedCity)) return false;
    if (selectedMonth && !pkg.departureMonths.includes(selectedMonth)) return false;
    if (pkg.priceWithFlights > priceRange) return false;
    return true;
  });

  const clearFilters = () => {
    setSelectedStar(null);
    setSelectedCity("");
    setSelectedMonth("");
    setPriceRange(5000);
  };

  const hasFilters = selectedStar || selectedCity || selectedMonth || priceRange < 5000;

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-dark to-primary/90 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,5 75,27.5 75,52.5 40,75 5,52.5 5,27.5" fill="none" stroke="#C9A227" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)"/>
          </svg>
        </div>
        <div className="container-custom relative z-10 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">2026 Departures</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Umrah Packages
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Premium Umrah packages from the UK with 3★ to 5★ hotel options.
            All packages include guided Ziyarah tours and dedicated spiritual support.
          </p>
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-gold">Umrah Packages</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className={`
            lg:w-72 lg:flex-shrink-0
            ${showFilters ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto lg:relative lg:inset-auto lg:z-auto' : 'hidden lg:block'}
          `}>
            <div className="lg:sticky lg:top-24 bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-bold text-dark text-lg">Filter Packages</h2>
                <div className="flex items-center gap-2">
                  {hasFilters && (
                    <button onClick={clearFilters} className="text-xs text-primary hover:underline">
                      Clear All
                    </button>
                  )}
                  <button className="lg:hidden text-dark" onClick={() => setShowFilters(false)}>
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Star Rating Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-dark text-sm mb-3">Hotel Rating</h3>
                <div className="space-y-2">
                  {starOptions.map((star) => (
                    <label key={star} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="star"
                        value={star}
                        checked={selectedStar === star}
                        onChange={() => setSelectedStar(selectedStar === star ? null : star)}
                        className="accent-primary"
                      />
                      <div className="flex items-center gap-1.5">
                        <div className="flex gap-0.5">
                          {Array.from({ length: star }).map((_, i) => (
                            <Star key={i} size={12} className="text-gold fill-gold" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{star}-Star</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Departure City */}
              <div className="mb-6">
                <h3 className="font-semibold text-dark text-sm mb-3">Departure City</h3>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
                >
                  <option value="">All Cities</option>
                  {DEPARTURE_CITIES.map((city) => (
                    <option key={city.slug} value={city.name}>{city.name}</option>
                  ))}
                </select>
              </div>

              {/* Month */}
              <div className="mb-6">
                <h3 className="font-semibold text-dark text-sm mb-3">Travel Month</h3>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
                >
                  <option value="">All Months</option>
                  {monthOptions.map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold text-dark text-sm mb-3">
                  Max Price: <span className="text-primary">{formatPrice(priceRange)}</span>
                </h3>
                <input
                  type="range"
                  min={1000}
                  max={5000}
                  step={100}
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>£1,000</span>
                  <span>£5,000</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.umrah)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#1fad53] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Need Help? Ask Us
              </a>
            </div>
          </aside>

          {/* Packages Grid */}
          <div className="flex-1">
            {/* Filter Bar (Mobile) */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold text-dark">{filtered.length}</span> package{filtered.length !== 1 ? "s" : ""} found
              </p>
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm font-medium text-dark"
              >
                <SlidersHorizontal size={15} />
                Filters {hasFilters && `(${[selectedStar, selectedCity, selectedMonth].filter(Boolean).length})`}
              </button>
            </div>

            {/* Desktop results count */}
            <p className="hidden lg:block text-gray-500 text-sm mb-6">
              Showing <span className="font-semibold text-dark">{filtered.length}</span> package{filtered.length !== 1 ? "s" : ""}
              {hasFilters && " matching your filters"}
            </p>

            {filtered.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="font-heading font-bold text-dark text-xl mb-2">No packages found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters to find the right package.</p>
                <button onClick={clearFilters} className="btn-primary">Clear All Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover flex flex-col"
                  >
                    {/* Card Header */}
                    <div className="relative bg-gradient-to-br from-primary to-primary-800 p-7 text-white">
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-gold text-dark text-xs font-bold px-3 py-1.5 rounded-full">
                        {Array.from({ length: pkg.starRating }).map((_, i) => (
                          <Star key={i} size={10} fill="currentColor" />
                        ))}
                        <span className="ml-1">{pkg.starRating}★</span>
                      </div>
                      <p className="text-gold/80 text-xs font-semibold uppercase tracking-wider mb-1">{pkg.travelPeriod}</p>
                      <h2 className="font-heading text-xl font-bold mb-1">{pkg.title}</h2>
                      <p className="text-white/60 text-sm">{pkg.duration} · Makkah & Madinah</p>
                      <div className="mt-4 flex items-end gap-4">
                        <div>
                          <p className="text-white/60 text-xs mb-0.5">With flights</p>
                          <p className="font-heading text-2xl font-bold text-gold">{formatPrice(pkg.priceWithFlights)}</p>
                          <p className="text-white/40 text-xs">per person</p>
                        </div>
                        <div className="border-l border-white/20 pl-4">
                          <p className="text-white/60 text-xs mb-0.5">Land only</p>
                          <p className="font-heading text-lg font-bold text-white/70">{formatPrice(pkg.priceWithoutFlights)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <ul className="space-y-2 mb-5 flex-1">
                        {pkg.inclusions.slice(0, 5).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check size={13} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-3">
                        <a
                          href={getWhatsAppUrl(pkg.starRating === 3 ? WHATSAPP_MESSAGES.basicPackage : WHATSAPP_MESSAGES.premiumPackage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-[#1fad53] transition-colors"
                        >
                          <MessageCircle size={14} />
                          WhatsApp
                        </a>
                        <Link href={`/packages/${pkg.slug}`} className="flex-1 btn-primary text-sm py-2.5">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
