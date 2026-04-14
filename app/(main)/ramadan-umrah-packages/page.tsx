"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Check, MessageCircle, Star } from "lucide-react";
import { PACKAGES_DATA, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import CTABanner from "@/components/sections/CTABanner";
import BookNowButton from "@/components/ui/BookNowButton";

function RamadanCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const nextRamadan = new Date("2027-02-17T00:00:00Z");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = nextRamadan.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3 max-w-lg mx-auto">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
      ].map(({ value, label }) => (
        <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
          <p className="font-heading text-3xl font-bold text-gold">{String(value).padStart(2, "0")}</p>
          <p className="text-white/60 text-xs mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
}

export default function RamadanPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-gradient-to-br from-dark to-primary/90 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="ramadan-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,5 75,27.5 75,52.5 40,75 5,52.5 5,27.5" fill="none" stroke="#C9A227" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ramadan-pattern)"/>
          </svg>
        </div>
        <div className="container-custom relative z-10 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Most Blessed Month</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            Ramadan Umrah 2027
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10">
            Perform Umrah in the most spiritually elevated month of the Islamic year.
            The reward of one Umrah in Ramadan equals that of Hajj.
          </p>
          <div className="mb-6">
            <p className="text-white/60 text-sm mb-4">Ramadan 2027 begins in approximately...</p>
            <RamadanCountdown />
          </div>
          <div className="mt-8">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.ramadan)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-accent hover:text-white transition-all"
            >
              Register Your Interest Now
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Spiritual Significance */}
        <div className="bg-white rounded-2xl p-8 mb-10 shadow-card border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="font-heading font-bold text-dark text-2xl mb-3">The Virtue of Ramadan Umrah</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="bg-cream rounded-xl p-6 mb-6 border-l-4 border-gold">
            <p className="text-gray-600 italic text-lg text-center leading-relaxed">
              &ldquo;Perform Umrah when Ramadan comes, for Umrah in Ramadan is equal to performing Hajj with me.&rdquo;
            </p>
            <p className="text-gold text-center text-sm mt-3 font-semibold">— Prophet Muhammad ﷺ (Sahih al-Bukhari, 1863)</p>
          </div>
          <p className="text-gray-600 leading-relaxed text-center max-w-2xl mx-auto">
            Performing Umrah during the blessed month of Ramadan is one of the greatest acts of worship a Muslim can undertake.
            The streets of Makkah are filled with millions of pilgrims, the atmosphere of worship is unparalleled,
            and every good deed is multiplied manifold. This is an experience that transforms the soul.
          </p>
        </div>

        {/* Register Interest */}
        <div className="bg-gradient-to-br from-primary to-primary-800 rounded-2xl p-10 text-center text-white mb-10">
          <h2 className="font-heading font-bold text-2xl mb-3">Ramadan 2027 Packages Coming Soon</h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Our Ramadan Umrah packages fill up extremely quickly due to high demand.
            Register your interest today to be among the first to receive details and secure your place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.ramadan)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1fad53] transition-all"
            >
              Register Interest on WhatsApp
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-dark font-bold px-8 py-4 rounded-xl hover:bg-accent hover:text-white transition-all">
              Get Email Notification
            </Link>
          </div>
        </div>

        {/* Current Umrah Packages */}
        <h2 className="font-heading font-bold text-dark text-2xl mb-6">Meanwhile — Book Your 2026 Umrah</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PACKAGES_DATA.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover flex flex-col">
              <div className="bg-gradient-to-br from-primary to-primary-800 p-6 text-white relative">
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-gold text-dark text-xs font-bold px-3 py-1.5 rounded-full">
                  {Array.from({ length: pkg.starRating }).map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                  <span className="ml-1">{pkg.starRating}★</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-1">{pkg.title}</h3>
                <p className="text-white/60 text-sm">{pkg.travelPeriod} · {pkg.duration}</p>
                <p className="font-heading text-2xl font-bold text-gold mt-3">{formatPrice(pkg.priceWithFlights)}</p>
                <p className="text-white/40 text-xs">per person, with flights</p>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <ul className="space-y-1.5 mb-4 flex-1">
                  {pkg.inclusions.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <Check size={12} className="text-primary mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.umrah)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-[#1fad53] transition-colors px-3">
                    <MessageCircle size={13} />
                  </a>
                  <Link href={`/packages/${pkg.slug}`} className="flex-1 btn-primary text-sm py-2.5">View Details</Link>
                  <BookNowButton packageSlug={pkg.slug} className="flex-1 px-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
