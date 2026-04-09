import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, MessageCircle } from "lucide-react";
import { PACKAGES_DATA, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "5-Star Umrah Packages 2026 | Al-Hidaayah Platinum Travels",
  description: "Luxury 5-star Umrah packages from £2,100 per person including flights. Premium hotels steps from the Haram, exclusive guided tours, and unparalleled spiritual support.",
};

export default function FiveStarPage() {
  const packages = PACKAGES_DATA.filter((p) => p.starRating === 5);

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-gradient-to-br from-dark to-primary/90 py-20">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} className="text-gold fill-gold" />)}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">5-Star Umrah Packages</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            The pinnacle of Umrah experiences. Luxury 5-star hotels steps from the Holy Haram,
            exclusive guided tours, and a level of care that allows you to focus entirely on your worship.
          </p>
          <nav className="flex items-center justify-center gap-2 mt-6 text-sm text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/umrah-packages" className="hover:text-gold">Umrah Packages</Link>
            <span>/</span>
            <span className="text-gold">5-Star</span>
          </nav>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="bg-white rounded-2xl p-8 mb-10 shadow-card border border-gray-100">
          <h2 className="font-heading font-bold text-dark text-xl mb-3">The Al-Hidaayah 5-Star Difference</h2>
          <p className="text-gray-600 leading-relaxed">
            Our 5-star Umrah packages are meticulously curated for pilgrims who desire the very best
            in comfort, proximity, and service. We partner exclusively with the finest hotels in Makkah
            and Madinah — properties that offer breathtaking proximity to the Haram, world-class dining,
            and amenities that ensure your rest is as restorative as your worship is enriching. This is
            Umrah elevated to its most spiritually and physically nurturing form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover flex flex-col">
              <div className="bg-gradient-to-br from-primary to-primary-800 p-7 text-white relative">
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-gold text-dark text-xs font-bold px-3 py-1.5 rounded-full">
                  {[1,2,3,4,5].map((i) => <Star key={i} size={10} fill="currentColor" />)}
                  <span className="ml-1">5★</span>
                </div>
                <p className="text-gold/80 text-xs font-semibold uppercase tracking-wider mb-1">{pkg.travelPeriod}</p>
                <h3 className="font-heading text-xl font-bold mb-1">{pkg.title}</h3>
                <p className="text-white/60 text-sm">{pkg.duration} · Luxury Experience</p>
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
                <div className="flex gap-3">
                  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.premiumPackage)} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-[#1fad53] transition-colors">
                    <MessageCircle size={14} />WhatsApp
                  </a>
                  <Link href={`/packages/${pkg.slug}`} className="flex-1 btn-primary text-sm py-2.5">View Details</Link>
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
