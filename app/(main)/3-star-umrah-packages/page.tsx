import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, MessageCircle } from "lucide-react";
import { PACKAGES_DATA, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import CTABanner from "@/components/sections/CTABanner";
import BookNowButton from "@/components/ui/BookNowButton";

export const metadata: Metadata = {
  title: "3-Star Umrah Packages 2026 | Al-Hidaayah Platinum Travels",
  description: "Affordable 3-star Umrah packages from £1,900 per person including flights. Comfortable hotels near the Haram, guided Ziyarah tours, and full spiritual support.",
};

export default function ThreeStarPage() {
  const packages = PACKAGES_DATA.filter((p) => p.starRating === 3);

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-gradient-to-br from-dark to-primary/90 py-20">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            {[1, 2, 3].map((i) => <Star key={i} size={18} className="text-gold fill-gold" />)}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">3-Star Umrah Packages</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Premium value Umrah packages with comfortable 3-star hotel accommodation close to the Holy Haram.
            Everything included — flights, meals, guided tours, and spiritual support.
          </p>
          <nav className="flex items-center justify-center gap-2 mt-6 text-sm text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/umrah-packages" className="hover:text-gold">Umrah Packages</Link>
            <span>/</span>
            <span className="text-gold">3-Star</span>
          </nav>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="bg-white rounded-2xl p-8 mb-10 shadow-card border border-gray-100">
          <h2 className="font-heading font-bold text-dark text-xl mb-3">About Our 3-Star Packages</h2>
          <p className="text-gray-600 leading-relaxed">
            Our 3-star Umrah packages are designed for pilgrims who seek a comfortable, complete Umrah
            experience at an accessible price point. Despite the lower star classification, our carefully
            selected 3-star partner hotels offer clean, comfortable rooms, proximity to the Haram, and all
            the amenities necessary for a spiritually fulfilling journey. All packages include return flights,
            daily meals, guided Ziyarah tours, and our expert spiritual guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover flex flex-col">
              <div className="bg-gradient-to-br from-primary to-primary-800 p-7 text-white relative">
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-gold text-dark text-xs font-bold px-3 py-1.5 rounded-full">
                  <Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" />
                  <span className="ml-1">3★</span>
                </div>
                <p className="text-gold/80 text-xs font-semibold uppercase tracking-wider mb-1">{pkg.travelPeriod}</p>
                <h3 className="font-heading text-xl font-bold mb-1">{pkg.title}</h3>
                <p className="text-white/60 text-sm">{pkg.duration} · Makkah & Madinah</p>
                <div className="mt-4">
                  <p className="text-white/60 text-xs mb-0.5">From (with flights)</p>
                  <p className="font-heading text-3xl font-bold text-gold">{formatPrice(pkg.priceWithFlights)}</p>
                  <p className="text-white/40 text-xs">per person</p>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-2 mb-5 flex-1">
                  {pkg.inclusions.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={13} className="text-primary mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.basicPackage)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-[#1fad53] transition-colors px-3">
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
