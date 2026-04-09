import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, Star, MapPin, Calendar, Plane, MessageCircle } from "lucide-react";
import { PACKAGES_DATA, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import InquiryForm from "@/components/forms/InquiryForm";
import CTABanner from "@/components/sections/CTABanner";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PACKAGES_DATA.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pkg = PACKAGES_DATA.find((p) => p.slug === params.slug);
  if (!pkg) return {};
  return {
    title: `${pkg.title} — ${pkg.duration} | Al-Hidaayah Platinum Travels`,
    description: `Book the ${pkg.title} from £${pkg.priceWithFlights} per person. ${pkg.duration}, ${pkg.starRating}-star hotels, guided Ziyarah, return flights included. ${pkg.travelPeriod}.`,
  };
}

export default function PackagePage({ params }: Props) {
  const pkg = PACKAGES_DATA.find((p) => p.slug === params.slug);
  if (!pkg) notFound();

  const relatedPackages = PACKAGES_DATA.filter((p) => p.id !== pkg.id).slice(0, 2);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.title,
    description: `${pkg.duration} Umrah package from the UK. ${pkg.starRating}-star hotels, guided Ziyarah, return flights included. Travel period: ${pkg.travelPeriod}.`,
    offers: {
      "@type": "Offer",
      price: pkg.priceWithFlights,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `https://www.alhidaayahplatinumtravels.co.uk/packages/${pkg.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-dark to-primary/90 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="pkg-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <polygon points="30,3 57,18 57,42 30,57 3,42 3,18" fill="none" stroke="#C9A227" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pkg-pattern)"/>
          </svg>
        </div>
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/umrah-packages" className="hover:text-gold">Umrah Packages</Link>
            <span>/</span>
            <span className="text-gold">{pkg.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  {Array.from({ length: pkg.starRating }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-gold font-semibold text-sm">{pkg.starRating}-Star Package</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">
                {pkg.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-gold" />
                  {pkg.travelPeriod}
                </span>
                <span className="flex items-center gap-1.5">
                  <Plane size={14} className="text-gold" />
                  {pkg.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-gold" />
                  Makkah & Madinah
                </span>
              </div>
            </div>

            {/* Pricing Block */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex-shrink-0">
              <p className="text-white/60 text-sm mb-1">Starting from (with flights)</p>
              <p className="font-heading text-4xl font-bold text-gold">{formatPrice(pkg.priceWithFlights)}</p>
              <p className="text-white/40 text-sm mb-4">per person</p>
              <p className="text-white/50 text-xs">Land only: {formatPrice(pkg.priceWithoutFlights)} per person</p>
              <div className="mt-4 flex gap-2">
                <a
                  href={getWhatsAppUrl(pkg.starRating === 3 ? WHATSAPP_MESSAGES.basicPackage : WHATSAPP_MESSAGES.premiumPackage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#25D366] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#1fad53] transition-colors"
                >
                  <MessageCircle size={14} />
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              <h2 className="font-heading font-bold text-dark text-2xl mb-4">Package Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                Embark on a truly transformative spiritual journey with our {pkg.title}.
                This carefully curated {pkg.duration} package is designed to give you the perfect
                balance of spiritual enrichment and comfortable accommodation, allowing you to focus
                on your worship without any worldly concerns.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Your journey begins in the blessed city of Madinah Al-Munawwarah, where you will spend
                4 days in the proximity of the Prophet&apos;s ﷺ mosque. You will then travel to Makkah
                Al-Mukarramah to perform your Umrah rituals and spend 6 days in the shadow of the
                Holy Ka&apos;bah.
              </p>

              {/* Key Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
                {[
                  { label: "Duration", value: pkg.duration },
                  { label: "Star Rating", value: `${pkg.starRating}★` },
                  { label: "Madinah", value: "4 Nights" },
                  { label: "Makkah", value: "6 Nights" },
                ].map((detail) => (
                  <div key={detail.label} className="text-center p-4 bg-cream rounded-xl">
                    <p className="font-heading font-bold text-dark text-xl">{detail.value}</p>
                    <p className="text-gray-400 text-xs mt-1">{detail.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included / Excluded */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              <h2 className="font-heading font-bold text-dark text-2xl mb-6">What&apos;s Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-primary text-sm uppercase tracking-wider mb-4">✓ Included</h3>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-400 text-sm uppercase tracking-wider mb-4">✗ Not Included</h3>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                        <X size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              <h2 className="font-heading font-bold text-dark text-2xl mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-4">
                {pkg.itinerary?.map((day) => (
                  <div key={day.day} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-primary text-sm">D{day.day}</span>
                    </div>
                    <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-semibold text-dark">{day.title}</h4>
                        {day.location && (
                          <span className="text-xs bg-gold/10 text-accent px-2 py-0.5 rounded-full font-medium">
                            {day.location}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {pkg.faqs && pkg.faqs.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
                <h2 className="font-heading font-bold text-dark text-2xl mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {pkg.faqs.map((faq, i) => (
                    <details key={i} className="group">
                      <summary className="flex items-center justify-between cursor-pointer py-3 border-b border-gray-100 font-semibold text-dark">
                        {faq.question}
                        <span className="text-primary ml-2 flex-shrink-0">+</span>
                      </summary>
                      <p className="text-gray-500 text-sm leading-relaxed pt-3 pb-2">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
                <div className="text-center mb-6 pb-6 border-b border-gray-100">
                  <p className="text-gray-500 text-sm mb-1">Book this package from</p>
                  <p className="font-heading text-3xl font-bold text-primary">{formatPrice(pkg.priceWithFlights)}</p>
                  <p className="text-gray-400 text-xs">per person, including flights</p>
                </div>

                <h3 className="font-heading font-bold text-dark text-base mb-4">Make an Inquiry</h3>
                <InquiryForm packageName={pkg.title} packagePrice={pkg.priceWithFlights} />

                {/* WhatsApp Alternative */}
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-400 mb-3">Or speak to us directly</p>
                  <a
                    href={getWhatsAppUrl(pkg.starRating === 3 ? WHATSAPP_MESSAGES.basicPackage : WHATSAPP_MESSAGES.premiumPackage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#1fad53] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp: Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Packages */}
        {relatedPackages.length > 0 && (
          <div className="mt-12">
            <h2 className="font-heading font-bold text-dark text-2xl mb-6">Other Packages You May Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPackages.map((related) => (
                <div key={related.id} className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 flex">
                  <div className="bg-gradient-to-br from-primary to-primary-800 p-6 flex flex-col justify-between w-48 flex-shrink-0">
                    <div>
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: related.starRating }).map((_, i) => (
                          <Star key={i} size={10} className="text-gold fill-gold" />
                        ))}
                      </div>
                      <p className="font-heading font-bold text-white text-sm leading-tight">{related.title}</p>
                    </div>
                    <p className="font-heading font-bold text-gold text-xl">{formatPrice(related.priceWithFlights)}</p>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-500 text-xs mb-3">{related.duration} · {related.travelPeriod}</p>
                      <ul className="space-y-1">
                        {related.inclusions.slice(0, 3).map((inc) => (
                          <li key={inc} className="flex items-center gap-1.5 text-xs text-gray-500">
                            <Check size={11} className="text-primary flex-shrink-0" />
                            {inc.length > 40 ? inc.slice(0, 40) + "..." : inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={`/packages/${related.slug}`} className="btn-primary text-sm py-2 mt-4">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <CTABanner />
    </div>
  );
}
