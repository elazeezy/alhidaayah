"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calculator } from "lucide-react";
import { estimatePrice, formatPrice } from "@/lib/utils";
import { DEPARTURE_CITIES } from "@/lib/constants";

export default function PriceEstimator() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [starRating, setStarRating] = useState<3 | 4 | 5>(3);
  const [durationDays, setDurationDays] = useState(10);
  const [estimate, setEstimate] = useState(0);
  const [departureCityIndex, setDepartureCityIndex] = useState(0);

  useEffect(() => {
    const total = estimatePrice(adults, children, starRating, durationDays);
    setEstimate(total);
  }, [adults, children, starRating, durationDays]);

  const durations = [
    { label: "7 Days", days: 7 },
    { label: "10 Days", days: 10 },
    { label: "14 Days", days: 14 },
    { label: "21 Days", days: 21 },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="section-subtitle mb-3"
            >
              Instant Price Estimate
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, scale: 1.12 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="section-title mb-4"
            >
              How Much Will My{" "}
              <span className="text-gradient-gold">Umrah Cost?</span>
            </motion.h2>
            <p className="text-gray-500">
              Get an instant estimate based on your requirements.
              Final pricing confirmed upon inquiry.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-cream rounded-3xl p-8 md:p-12 border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Controls */}
              <div className="space-y-6">
                {/* Adults */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-3">
                    Number of Adults
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-bold text-dark hover:border-primary hover:text-primary transition-colors"
                    >
                      −
                    </button>
                    <span className="text-2xl font-bold text-dark w-8 text-center">{adults}</span>
                    <button
                      onClick={() => setAdults(Math.min(20, adults + 1))}
                      className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-bold text-dark hover:border-primary hover:text-primary transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-3">
                    Number of Children{" "}
                    <span className="text-gray-400 font-normal">(under 12)</span>
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-bold text-dark hover:border-primary hover:text-primary transition-colors"
                    >
                      −
                    </button>
                    <span className="text-2xl font-bold text-dark w-8 text-center">{children}</span>
                    <button
                      onClick={() => setChildren(Math.min(10, children + 1))}
                      className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-bold text-dark hover:border-primary hover:text-primary transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Star Rating */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-3">
                    Hotel Star Rating
                  </label>
                  <div className="flex gap-3">
                    {([3, 5] as const).map((star) => (
                      <button
                        key={star}
                        onClick={() => setStarRating(star)}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${
                          starRating === star
                            ? "bg-primary border-primary text-white"
                            : "border-gray-200 text-gray-600 bg-white hover:border-primary/40"
                        }`}
                      >
                        {star === 3 ? "3★ Basic" : "5★ Premium"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-3">
                    Duration
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {durations.map((d) => (
                      <button
                        key={d.days}
                        onClick={() => setDurationDays(d.days)}
                        className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${
                          durationDays === d.days
                            ? "bg-primary border-primary text-white"
                            : "border-gray-200 text-gray-600 bg-white hover:border-primary/40"
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Departure City */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-3">
                    Departure City
                  </label>
                  <select
                    value={departureCityIndex}
                    onChange={(e) => setDepartureCityIndex(parseInt(e.target.value))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  >
                    {DEPARTURE_CITIES.map((city, i) => (
                      <option key={city.slug} value={i}>
                        {city.name} ({city.airportCode})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Right: Result */}
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-primary to-primary-800 rounded-2xl p-8 text-white text-center">
                  <Calculator size={32} className="mx-auto mb-4 text-gold" />
                  <p className="text-white/70 text-sm mb-2">Estimated Total Price</p>
                  <motion.p
                    key={estimate}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-heading text-4xl md:text-5xl font-bold text-gold mb-1"
                  >
                    {formatPrice(estimate)}
                  </motion.p>
                  <p className="text-white/50 text-xs mb-6">
                    Including return flights • Subject to availability
                  </p>

                  <div className="bg-white/10 rounded-xl p-4 text-left space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Adults ({adults})</span>
                      <span className="text-white font-medium">{formatPrice(adults * estimatePrice(1, 0, starRating, durationDays))}</span>
                    </div>
                    {children > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Children ({children})</span>
                        <span className="text-white font-medium">{formatPrice(children * estimatePrice(0, 1, starRating, durationDays))}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm border-t border-white/20 pt-2">
                      <span className="text-white/60">Hotel Rating</span>
                      <span className="text-gold font-medium">{starRating}★ Hotel</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Duration</span>
                      <span className="text-white font-medium">{durationDays} Days</span>
                    </div>
                  </div>

                  <p className="text-white/50 text-xs mb-4">
                    * This is an estimate. Exact pricing depends on departure date, availability, and room type. Contact us for a confirmed quote.
                  </p>

                  <Link
                    href="/contact"
                    className="w-full inline-block bg-gold text-dark font-bold py-3 rounded-xl text-sm hover:bg-accent hover:text-white transition-all duration-200"
                  >
                    Get Confirmed Quote
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
