import type { Metadata } from "next";
import Link from "next/link";
import { Check, MessageCircle, Star, Users } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import CTABanner from "@/components/sections/CTABanner";
import BookNowButton from "@/components/ui/BookNowButton";

export const metadata: Metadata = {
  title: "Hajj Packages 2026 | Al-Hidaayah Platinum Travels",
  description: "Book your Hajj 2026 package with Al-Hidaayah Platinum Travels. Shifting and Non-Shifting Hajj options with 5-star hotels near the Haram. UK-based Islamic travel specialists.",
};

const hajjPackages = {
  shifting: [
    {
      title: "Shifting Hajj Package — Economy",
      starRating: 3,
      price: 6500,
      description: "An affordable and complete Shifting Hajj package covering all five days of Hajj with comfortable accommodation in Makkah and Madinah.",
      inclusions: [
        "Return flights from UK",
        "Accommodation in Makkah & Madinah",
        "Mina tent accommodation during Hajj days",
        "Transportation between all holy sites",
        "Guided Hajj rituals by experienced scholars",
        "All meals during Hajj days",
        "Hajj visa assistance",
        "Ihram kit and Hajj guide book",
      ],
      slug: "shifting-hajj-economy-2026",
    },
    {
      title: "Shifting Hajj Package — Premium",
      starRating: 5,
      price: 9500,
      description: "A premium Shifting Hajj experience with 5-star hotels in Makkah and Madinah, VIP Mina tents, and dedicated personal guidance throughout.",
      inclusions: [
        "Return flights from UK",
        "5-star accommodation in Makkah & Madinah",
        "Premium air-conditioned tents in Mina",
        "Private transportation between holy sites",
        "Dedicated personal Hajj guide",
        "All meals (premium buffet)",
        "Hajj visa assistance",
        "Luxury Hajj kit",
      ],
      slug: "shifting-hajj-premium-2026",
    },
  ],
  nonShifting: [
    {
      title: "Non-Shifting Hajj Package — Economy",
      starRating: 3,
      price: 7500,
      description: "Our Non-Shifting Hajj package keeps you close to Masjid al-Haram throughout your stay in Makkah — ideal for those who prefer not to move hotels.",
      inclusions: [
        "Return flights from UK",
        "Single hotel near Haram throughout stay",
        "Mina tent accommodation during Hajj days",
        "Group transportation",
        "Guided Hajj rituals",
        "Daily meals",
        "Hajj visa assistance",
        "Ihram kit",
      ],
      slug: "non-shifting-hajj-economy-2026",
    },
    {
      title: "Non-Shifting Hajj Package — Premium",
      starRating: 5,
      price: 11000,
      description: "The ultimate Non-Shifting Hajj experience. Stay in the same prestigious 5-star hotel near the Haram throughout your entire journey.",
      inclusions: [
        "Return flights from UK",
        "5-star hotel adjacent to Haram throughout",
        "Premium Mina tent setup",
        "Private transfers",
        "Dedicated scholar guide",
        "Premium all-inclusive meals",
        "Hajj visa assistance",
        "Premium Hajj kit and resources",
      ],
      slug: "non-shifting-hajj-premium-2026",
    },
  ],
};

export default function HajjPackagesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-gradient-to-br from-dark to-primary/90 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hajj-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,5 75,27.5 75,52.5 40,75 5,52.5 5,27.5" fill="none" stroke="#C9A227" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hajj-pattern)"/>
          </svg>
        </div>
        <div className="container-custom relative z-10 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Hajj 2026</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Hajj Packages 2026
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            The most sacred journey a Muslim can undertake. Let us guide you through every step
            of your Hajj with expert knowledge, premium accommodation, and complete spiritual support.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-gold">Hajj Packages</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Important Notice */}
        <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6 mb-12 flex gap-4">
          <span className="text-2xl flex-shrink-0">ℹ️</span>
          <div>
            <h3 className="font-heading font-bold text-dark mb-1">Important: Hajj 2026 Registration</h3>
            <p className="text-gray-600 text-sm">
              Hajj quota allocations from the UK are limited. We strongly advise registering your interest
              as early as possible. Contact us today to secure your place insha&apos;Allah. Full package
              details and pricing will be confirmed upon registration.
            </p>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.hajj)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#1fad53] transition-colors"
            >
              Register Interest via WhatsApp
            </a>
          </div>
        </div>

        {/* Shifting Hajj */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="font-heading text-2xl font-bold text-dark whitespace-nowrap">
              🕌 Shifting Hajj Packages
            </h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">
            Shifting Hajj packages involve moving between Makkah and Madinah hotels.
            This offers flexibility and typically provides better value for money.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hajjPackages.shifting.map((pkg) => (
              <HajjCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* Non-Shifting Hajj */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="font-heading text-2xl font-bold text-dark whitespace-nowrap">
              🏨 Non-Shifting Hajj Packages
            </h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">
            Non-Shifting packages keep you in the same hotel throughout your stay in Makkah,
            offering greater convenience and no hotel changes during your sacred journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hajjPackages.nonShifting.map((pkg) => (
              <HajjCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>

      {/* Group Hajj CTA */}
      <div className="container-custom py-12">
        <div className="bg-gradient-to-r from-dark to-primary/90 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="group-cta-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#C9A227" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#group-cta-pattern)"/>
            </svg>
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-gold/20 border border-gold/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users size={28} className="text-gold" />
            </div>
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Mosque & Community Groups</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
              Taking Your Group on Hajj?
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-6">
              We offer bespoke Group Hajj packages for mosques, community organisations,
              and families of 10 or more — with exclusive rates, private transport, reserved
              Mina tents, and a dedicated scholar for your group.
            </p>
            <Link
              href="/group-hajj-packages"
              className="inline-flex items-center gap-2 bg-gold text-dark font-bold px-7 py-3.5 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-lg"
            >
              View Group Hajj Packages
            </Link>
          </div>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}

function HajjCard({ pkg }: { pkg: (typeof hajjPackages.shifting)[0] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover flex flex-col">
      <div className="bg-gradient-to-br from-dark to-primary/90 p-7 text-white relative">
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-gold text-dark text-xs font-bold px-3 py-1.5 rounded-full">
          <Star size={10} fill="currentColor" />
          <span className="ml-0.5">{pkg.starRating}★</span>
        </div>
        <p className="text-gold/70 text-xs font-semibold uppercase tracking-wider mb-1">Hajj 2026</p>
        <h3 className="font-heading text-xl font-bold mb-3">{pkg.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{pkg.description}</p>
        <div className="mt-4">
          <p className="text-white/60 text-xs mb-0.5">Starting from</p>
          <p className="font-heading text-3xl font-bold text-gold">{formatPrice(pkg.price)}</p>
          <p className="text-white/40 text-xs">per person, including flights</p>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <ul className="space-y-2 mb-6 flex-1">
          {pkg.inclusions.slice(0, 5).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
              <Check size={13} className="text-primary mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.hajj)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#1fad53] transition-colors px-3"
          >
            <MessageCircle size={14} />
          </a>
          <Link
            href="/contact"
            className="flex-1 btn-primary text-sm py-3"
          >
            Get Quote
          </Link>
          <BookNowButton packageSlug={pkg.slug} className="flex-1 px-3" size="md" />
        </div>
      </div>
    </div>
  );
}
