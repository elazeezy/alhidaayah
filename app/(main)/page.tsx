import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PackagesSection from "@/components/sections/PackagesSection";
import PriceEstimator from "@/components/sections/PriceEstimator";
import DepartureCitiesSection from "@/components/sections/DepartureCitiesSection";
import AirlinesCarousel from "@/components/sections/AirlinesCarousel";
import HotelsSection from "@/components/sections/HotelsSection";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import CTABanner from "@/components/sections/CTABanner";
import QuickQuoteSection from "@/components/sections/QuickQuoteSection";
import TransparencyStrip from "@/components/sections/TransparencyStrip";

export const metadata: Metadata = {
  title: "Al-Hidaayah Platinum Travels | Premium Umrah & Hajj Packages from the UK",
  description:
    "Book your dream Umrah or Hajj package with Al-Hidaayah Platinum Travels. 3★–5★ hotels near the Haram, guided Ziyarah, return flights included. Serving pilgrims from London, Manchester, Birmingham and beyond.",
  openGraph: {
    title: "Al-Hidaayah Platinum Travels | Premium Umrah & Hajj Packages",
    description:
      "Experience the journey of a lifetime. Premium Umrah & Hajj packages from the UK with luxury hotels, guided spiritual tours, and unparalleled support.",
    url: "https://www.alhidaayahplatinumtravels.co.uk",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Al-Hidaayah Platinum Travels",
    description:
      "Premium Umrah and Hajj travel packages from the UK. 3-star to 5-star hotels near the Haram, guided spiritual tours, and complete travel assistance.",
    url: "https://www.alhidaayahplatinumtravels.co.uk",
    telephone: "+966599748264",
    email: "info@alhidaayahplatinumtravels.co.uk",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    sameAs: ["https://instagram.com/alhidayah104"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <QuickQuoteSection />
      <WhyChooseUs />
      <PackagesSection />
      <TransparencyStrip />
      <PriceEstimator />
      <DepartureCitiesSection />
      <AirlinesCarousel />
      <HotelsSection />
      <HowItWorks />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTABanner />
    </>
  );
}
