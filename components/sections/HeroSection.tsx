"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, Star } from "lucide-react";
import { getHijriDate } from "@/lib/utils";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const WHATSAPP_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const slides = [
  {
    id: 0,
    image: "/images/hero-1.jpg",
    tag: "Umrah & Hajj 2026",
    headline: ["Your Sacred", "Journey Begins Here"],
    sub: "Experience the journey of a lifetime with Al-Hidaayah Platinum Travels — premium Umrah & Hajj packages with 3★–5★ hotels, guided Ziyarah tours, and dedicated spiritual support.",
    cta: { label: "View Packages", href: "/umrah-packages" },
  },
  {
    id: 1,
    image: "/images/hero-2.jpg",
    tag: "5-Star Hotels Near the Haram",
    headline: ["Steps From", "the Holy Ka'bah"],
    sub: "Stay in the finest hotels, steps from Masjid al-Haram in Makkah and Masjid an-Nabawi in Madinah. Every detail of your comfort, handled.",
    cta: { label: "View Hotels", href: "/hotels" },
  },
  {
    id: 2,
    image: "/images/hero-3.jpg",
    tag: "Scholar-Guided Groups",
    headline: ["Guided by Scholars,", "Protected by ATOL"],
    sub: "Travel with complete confidence. Our experienced scholars accompany every group with spiritual guidance, and every package is fully ATOL protected.",
    cta: { label: "Book Now", href: "/contact" },
  },
];

const stats = [
  { value: "500+", label: "Pilgrims Served" },
  { value: "5+", label: "Years Trusted" },
  { value: "3★–5★", label: "Hotels Only" },
  { value: "ATOL", label: "Protected" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [hijriDate, setHijriDate] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setHijriDate(getHijriDate());
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  useEffect(() => {
    setProgress(0);
    const tick = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / 60, 100));
    }, 100);
    return () => clearInterval(tick);
  }, [current]);

  const goTo = (index: number) => {
    setCurrent(index);
    setProgress(0);
  };

  const slide = slides[current];

  return (
    <section className="relative h-[72vh] md:h-screen min-h-[460px] md:min-h-[580px] max-h-[680px] md:max-h-[900px] overflow-hidden">

      {/* ── Slide backgrounds ─────────────────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.headline.join(" ")}
            fill
            className="object-cover object-center"
            priority={slide.id === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Gradient overlays ─────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/20" />

      {/* ── Badges (top right on desktop, top center on mobile) ── */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:top-6 md:right-8 z-10 flex items-center gap-2">
        {hijriDate && (
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1">
            <div className="w-1 h-1 bg-gold rounded-full animate-pulse shrink-0" />
            <span className="text-white/75 text-[10px] md:text-xs font-medium whitespace-nowrap">{hijriDate}</span>
          </div>
        )}
        <div className="flex items-center gap-1 bg-gold/15 backdrop-blur-sm border border-gold/35 rounded-full px-2.5 py-1">
          <Shield size={9} className="text-gold shrink-0" />
          <span className="text-gold text-[10px] md:text-xs font-bold tracking-wide whitespace-nowrap">ATOL PROTECTED</span>
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container-custom">
          <div className="max-w-2xl">

            {/* Slide tag */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tag-${current}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 mb-3 md:mb-5"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={9} className="text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-gold font-semibold text-[11px] md:text-sm uppercase tracking-widest">
                  {slide.tag}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`headline-${current}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-heading font-bold text-white leading-[1.1] mb-3 md:mb-6"
                style={{ fontSize: "clamp(1.9rem, 5vw, 4.2rem)" }}
              >
                {slide.headline[0]}
                <br />
                <span className="text-gold">{slide.headline[1]}</span>
              </motion.h1>
            </AnimatePresence>

            {/* Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-white/70 text-sm md:text-lg leading-relaxed mb-5 md:mb-8 max-w-xl line-clamp-3 md:line-clamp-none"
              >
                {slide.sub}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`cta-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap gap-2.5 md:gap-3"
              >
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center gap-2 bg-gold text-dark font-bold px-5 py-2.5 md:px-7 md:py-3.5 rounded-full text-xs md:text-sm hover:bg-amber-400 transition-all duration-300 shadow-[0_4px_20px_rgba(201,162,39,0.4)] hover:shadow-[0_6px_28px_rgba(201,162,39,0.55)] hover:-translate-y-0.5"
                >
                  {slide.cta.label}
                </Link>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.quote)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-5 py-2.5 md:px-7 md:py-3.5 rounded-full text-xs md:text-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                >
                  {WHATSAPP_SVG}
                  WhatsApp Us
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Slide controls ────────────────────────────────────── */}
      <div className="absolute bottom-[4.5rem] md:bottom-24 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 z-10">
        <div className="container-custom flex items-center gap-2.5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className="relative h-0.5 md:h-1 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: i === current ? "36px" : "16px", background: "rgba(255,255,255,0.3)" }}
              aria-label={`Slide ${i + 1}`}
            >
              {i === current && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gold rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
          <span className="text-white/40 text-[10px] ml-1">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ── Stats bar (bottom) ────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-dark/75 backdrop-blur-md border-t border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-4 divide-x divide-white/10 py-2.5 md:py-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-2 md:px-4">
                <p className="font-heading font-bold text-gold text-sm md:text-xl leading-none">
                  {stat.value}
                </p>
                <p className="text-white/55 text-[9px] md:text-[11px] mt-0.5 md:mt-1 font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <motion.div
        className="absolute bottom-20 right-8 hidden md:flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <span className="text-white/30 text-[10px] uppercase tracking-widest rotate-90 mb-1">Scroll</span>
        <ChevronDown size={18} className="text-white/30" />
      </motion.div>

    </section>
  );
}
