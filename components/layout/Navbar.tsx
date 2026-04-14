"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, CalendarDays, Shield } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { getHijriDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Umrah Packages",
    href: "/umrah-packages",
    children: [
      { label: "All Umrah Packages", href: "/umrah-packages" },
      { label: "3-Star Packages", href: "/3-star-umrah-packages" },
      { label: "5-Star Packages", href: "/5-star-umrah-packages" },
      { label: "Ramadan Umrah", href: "/ramadan-umrah-packages" },
      { label: "Group Umrah", href: "/group-umrah-packages" },
    ],
  },
  {
    label: "Hajj Packages",
    href: "/hajj-packages",
    children: [
      { label: "All Hajj Packages", href: "/hajj-packages" },
      { label: "Group Hajj", href: "/group-hajj-packages" },
    ],
  },
  { label: "Hotels", href: "/hotels" },
  {
    label: "Learn",
    href: "/learn-umrah",
    children: [
      { label: "How to Perform Umrah", href: "/learn-umrah" },
      { label: "How to Perform Hajj", href: "/learn-hajj" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const WA_SVG = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hijriDate, setHijriDate] = useState("");
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => { setHijriDate(getHijriDate()); }, []);
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          TOP INFO BAR — visible on ALL screen sizes
      ═══════════════════════════════════════════════════════════ */}
      <div className="bg-primary text-white">

        {/* Mobile top bar — compact single row */}
        <div className="flex md:hidden items-center justify-between px-4 h-9 text-[11px]">
          <a href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-1.5 text-white/90 font-semibold">
            <Phone size={11} className="text-gold" />
            {SITE_CONFIG.phoneDisplay}
          </a>
          <div className="w-px h-3 bg-white/20" />
          <a href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-1.5 text-white/80 truncate max-w-[160px]">
            <Mail size={10} className="text-gold flex-shrink-0" />
            <span className="truncate">{SITE_CONFIG.email}</span>
          </a>
          <div className="w-px h-3 bg-white/20" />
          <div className="flex items-center gap-1 text-gold font-bold">
            <Shield size={10} />
            <span className="uppercase tracking-wide">ATOL</span>
          </div>
        </div>

        {/* Desktop top bar */}
        <div className="hidden md:flex container-custom items-center justify-between h-10 text-xs">
          <div className="flex items-center gap-2 text-white/80">
            <CalendarDays size={13} className="text-gold" />
            {hijriDate && <span>{hijriDate}</span>}
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 text-white/80 hover:text-gold transition-colors font-medium">
              <Phone size={11} />
              {SITE_CONFIG.phoneDisplay}
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 text-white/80 hover:text-gold transition-colors">
              <Mail size={11} />
              {SITE_CONFIG.email}
            </a>
            <span className="w-px h-3 bg-white/20" />
            <div className="flex items-center gap-1.5 text-gold font-semibold">
              <Shield size={11} />
              <span>ATOL PROTECTED · UK BASED</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          MAIN NAVBAR
      ═══════════════════════════════════════════════════════════ */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <nav className="container-custom flex items-center justify-between h-[68px]">

          {/* ── Logo + Name ── */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Al-Hidaayah Platinum Travels"
              width={56}
              height={56}
              className="object-contain flex-shrink-0"
              priority
            />
            {/* Name — visible on all sizes including mobile */}
            <div className="leading-tight">
              <p className="font-heading font-bold text-dark text-[1rem] sm:text-[1.15rem] tracking-tight leading-none">
                Al-Hidaayah
              </p>
              <p className="text-[#C9A227] font-bold text-[0.65rem] sm:text-[0.75rem] tracking-widest uppercase mt-0.5">
                Platinum Travels
              </p>
              <p className="hidden sm:block text-gray-400 text-[0.58rem] font-medium tracking-wide mt-0.5">
                Guidance with top-tier service
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <div key={link.label} className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href={link.href}
                    className={cn(
                      "relative flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors duration-200 group",
                      active ? "text-primary" : "text-dark hover:text-primary"
                    )}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown size={13}
                        className={cn("transition-transform duration-200 mt-px",
                          activeDropdown === link.label && "rotate-180")} />
                    )}
                    <span className={cn(
                      "absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary transition-all duration-200",
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-30"
                    )} />
                  </Link>

                  {link.children && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 py-2 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link key={child.label} href={child.href}
                              className={cn(
                                "flex items-center gap-2 px-4 py-2.5 text-sm transition-colors",
                                isActive(child.href)
                                  ? "text-primary bg-primary/5 font-semibold"
                                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
                              )}
                            >
                              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1da851] transition-all duration-200 shadow-sm">
              <WA_SVG />
              WhatsApp
            </a>
            <Link href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md">
              <CalendarDays size={14} />
              Book Now
            </Link>
          </div>

          {/* ── Mobile right side: WhatsApp icon + Hamburger ── */}
          <div className="flex lg:hidden items-center gap-2">
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] text-white shadow-sm">
              <WA_SVG size={17} />
            </a>
            <button
              className="flex items-center justify-center w-9 h-9 rounded-lg text-dark hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>

        </nav>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE SLIDE-IN MENU
      ═══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 lg:hidden flex flex-col overflow-hidden"
            >
              {/* Panel header */}
              <div className="bg-primary px-5 py-4 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo.png"
                    alt="Al-Hidaayah Platinum Travels"
                    width={42} height={42}
                    className="object-contain brightness-0 invert flex-shrink-0"
                  />
                  <div>
                    <p className="font-heading font-bold text-white text-sm leading-none">Al-Hidaayah</p>
                    <p className="text-gold text-[0.65rem] font-bold tracking-widest uppercase mt-1">Platinum Travels</p>
                    <p className="text-white/50 text-[0.58rem] mt-0.5">Guidance with top-tier service</p>
                  </div>
                </div>
                <button onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Hijri date strip */}
              {hijriDate && (
                <div className="flex items-center gap-2 px-5 py-2.5 bg-primary/5 border-b border-primary/10">
                  <CalendarDays size={12} className="text-primary" />
                  <span className="text-primary text-xs font-medium">{hijriDate}</span>
                </div>
              )}

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto py-2">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                          className={cn(
                            "w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold transition-colors border-b border-gray-50",
                            isActive(link.href) ? "text-primary bg-primary/5" : "text-dark hover:text-primary hover:bg-gray-50"
                          )}
                        >
                          {link.label}
                          <ChevronDown size={15}
                            className={cn("transition-transform duration-200 text-gray-400",
                              mobileExpanded === link.label && "rotate-180 text-primary")} />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === link.label && (
                            <motion.div
                              initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                              className="overflow-hidden bg-primary/5 border-b border-primary/10"
                            >
                              {link.children.map((child) => (
                                <Link key={child.label} href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={cn(
                                    "flex items-center gap-2.5 pl-10 pr-5 py-3 text-sm border-b border-primary/5 last:border-0 transition-colors",
                                    isActive(child.href)
                                      ? "text-primary font-semibold"
                                      : "text-gray-600 hover:text-primary"
                                  )}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link href={link.href} onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-5 py-3.5 text-sm font-semibold border-b border-gray-50 transition-colors",
                          isActive(link.href)
                            ? "text-primary bg-primary/5 border-l-4 border-l-primary pl-4"
                            : "text-dark hover:text-primary hover:bg-gray-50"
                        )}
                      >
                        {link.label}
                        {isActive(link.href) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom CTAs */}
              <div className="p-4 space-y-2.5 border-t border-gray-100 bg-gray-50 flex-shrink-0">
                <Link href="/contact" onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-primary text-white font-bold text-sm shadow-sm">
                  <CalendarDays size={15} />
                  Book Now
                </Link>
                <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm">
                  <WA_SVG size={16} />
                  WhatsApp Us
                </a>
                <a href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-primary text-primary font-semibold text-sm">
                  <Phone size={14} />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
