import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, MessageCircle, Plane } from "lucide-react";
import { PACKAGES_DATA, DEPARTURE_CITIES, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import CTABanner from "@/components/sections/CTABanner";

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  return DEPARTURE_CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityData = DEPARTURE_CITIES.find((c) => c.slug === params.city);
  if (!cityData) return {};
  return {
    title: `Umrah Packages from ${cityData.name} 2026 | Al-Hidaayah Platinum Travels`,
    description: `Book Umrah packages departing from ${cityData.name} (${cityData.airportCode}). 3★–5★ hotels, guided Ziyarah, return flights included. From £1,900 per person.`,
  };
}

export default function CityPackagesPage({ params }: Props) {
  const cityData = DEPARTURE_CITIES.find((c) => c.slug === params.city);
  if (!cityData) notFound();

  const packages = PACKAGES_DATA.filter((pkg) =>
    pkg.departureCities.some((c) => c.toLowerCase() === cityData.name.toLowerCase())
  );

  const cityIntros: Record<string, string> = {
    london: `London is one of the UK's primary gateways for Umrah travel, with Heathrow (LHR) and Gatwick (LGW) offering excellent direct and connecting services to Jeddah and Madinah. Whether you are based in London or travelling into the city to depart, Al-Hidaayah Platinum Travels will ensure your Umrah journey from London is seamless from check-in to your return.`,
    manchester: `Manchester Airport (MAN) serves as the main gateway for pilgrims from the North of England and beyond. With a vibrant Muslim community in the city, Al-Hidaayah Platinum Travels is proud to offer premium Umrah packages departing from Manchester Airport, making it convenient for pilgrims from across the North West.`,
    birmingham: `Birmingham Airport (BHX) is ideally located in the heart of England, making it a convenient departure point for pilgrims from the Midlands. Al-Hidaayah Platinum Travels offers premium Umrah packages departing from Birmingham, serving the large Muslim community of the Midlands.`,
    glasgow: `Glasgow Airport (GLA) serves pilgrims from across Scotland and the North. Al-Hidaayah Platinum Travels offers Umrah packages departing from Glasgow, making the sacred journey accessible to Scottish pilgrims without the need to travel south.`,
    edinburgh: `Edinburgh Airport (EDI) provides another Scottish option for pilgrims heading to the Holy Cities. Al-Hidaayah Platinum Travels offers packages departing from Edinburgh Airport, serving pilgrims from Edinburgh, Fife, Stirling, and the surrounding areas.`,
    bradford: `Leeds Bradford Airport (LBA) provides convenient access to the Holy Cities for pilgrims from Bradford, Leeds, and Yorkshire. Al-Hidaayah Platinum Travels offers Umrah packages from Leeds Bradford Airport, serving the large and spiritually active Muslim community of West Yorkshire.`,
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-gradient-to-br from-dark to-primary/90 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="city-hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,5 75,27.5 75,52.5 40,75 5,52.5 5,27.5" fill="none" stroke="#C9A227" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#city-hero-pattern)"/>
          </svg>
        </div>
        <div className="container-custom relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Plane size={16} className="text-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">{cityData.airportCode}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Umrah Packages from {cityData.name}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Premium Umrah packages departing from {cityData.airport}.
            All packages include return flights, guided Ziyarah tours, and dedicated spiritual support.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/umrah-packages" className="hover:text-gold">Umrah Packages</Link>
            <span>/</span>
            <span className="text-gold">From {cityData.name}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* City Intro */}
        <div className="bg-white rounded-2xl p-8 mb-10 shadow-card border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Plane size={22} className="text-primary" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-dark text-xl mb-3">
                Umrah from {cityData.name}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {cityIntros[cityData.slug] || `Al-Hidaayah Platinum Travels offers premium Umrah packages departing from ${cityData.airport}. Our packages include return flights, luxury hotel accommodation, guided Ziyarah tours, and full spiritual support throughout your blessed journey.`}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-primary font-semibold">
                <span>✈️</span>
                <span>Departing from: {cityData.airport}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Packages */}
        <h2 className="font-heading font-bold text-dark text-2xl mb-6">
          Available Packages from {cityData.name}
        </h2>

        {packages.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="font-heading font-bold text-dark text-xl mb-2">Coming Soon</h3>
            <p className="text-gray-500 mb-4">Packages from {cityData.name} are being prepared. Contact us for details.</p>
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.umrah)} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Ask on WhatsApp
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover flex flex-col">
                <div className="bg-gradient-to-br from-primary to-primary-800 p-7 text-white relative">
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-gold text-dark text-xs font-bold px-3 py-1.5 rounded-full">
                    {Array.from({ length: pkg.starRating }).map((_, i) => (
                      <Star key={i} size={10} fill="currentColor" />
                    ))}
                    <span className="ml-1">{pkg.starRating}★</span>
                  </div>
                  <p className="text-gold/80 text-xs font-semibold uppercase tracking-wider mb-1">{pkg.travelPeriod}</p>
                  <h3 className="font-heading text-xl font-bold mb-1">{pkg.title}</h3>
                  <p className="text-white/60 text-sm">{pkg.duration} · from {cityData.name}</p>
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
                <div className="p-6 flex-1 flex flex-col">
                  <ul className="space-y-2 mb-5 flex-1">
                    {pkg.inclusions.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={13} className="text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.umrah)} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-[#1fad53] transition-colors">
                      <MessageCircle size={14} />
                      WhatsApp
                    </a>
                    <Link href={`/packages/${pkg.slug}`} className="flex-1 btn-primary text-sm py-2.5">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <CTABanner />
    </div>
  );
}
