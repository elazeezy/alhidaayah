import type { Metadata } from "next";
import { client, urlFor } from "@/sanity/client";
import CTABanner from "@/components/sections/CTABanner";
import GalleryGrid, { type GalleryImage } from "./GalleryGrid";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Gallery | Al-Hidaayah Platinum Travels",
  description: "A glimpse into the blessed experiences of our pilgrims — from Masjid al-Haram in Makkah to Masjid an-Nabawi in Madinah.",
};

const placeholderImages: GalleryImage[] = [
  { _id: "p1", title: "Masjid al-Haram — The Grand Mosque", category: "makkah", caption: "The magnificent Masjid al-Haram in Makkah Al-Mukarramah", imageUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80" },
  { _id: "p2", title: "Masjid an-Nabawi, Madinah", category: "madinah", caption: "The Prophet's Mosque in the blessed city of Madinah", imageUrl: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=800&q=80" },
  { _id: "p3", title: "Luxury Hotel — Makkah", category: "makkah", caption: "5-star accommodation steps from the Haram", imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80" },
  { _id: "p4", title: "Premium Hotel Room", category: "makkah", caption: "Spacious, comfortable rooms for our pilgrims", imageUrl: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80" },
  { _id: "p5", title: "Hotel Lobby — Madinah", category: "madinah", caption: "Grand lobby of our partner hotel in Madinah", imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80" },
  { _id: "p6", title: "Luxury Pilgrimage Stay", category: "general", caption: "Every detail of your stay, handled with care", imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
  { _id: "p7", title: "Departure from London", category: "group", caption: "Our pilgrims departing from London Heathrow", imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" },
  { _id: "p8", title: "Departure from Manchester", category: "group", caption: "Serving pilgrims from Manchester and the North", imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80" },
  { _id: "p9", title: "Journey to the Holy Cities", category: "general", caption: "Al-Hidaayah Platinum Travels — Your trusted Umrah partner", imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" },
];

async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    const raw = await client.fetch(
      `*[_type == "galleryImage" && active == true] | order(_createdAt asc) {
        _id,
        title,
        category,
        caption,
        image
      }`
    );
    if (!raw || raw.length === 0) return [];
    return raw.map((item: any) => ({
      _id: item._id,
      title: item.title ?? "",
      category: item.category ?? "general",
      caption: item.caption ?? "",
      imageUrl: urlFor(item.image).width(800).url(),
    }));
  } catch {
    return [];
  }
}

export default async function GalleryPage() {
  const sanityImages = await getGalleryImages();
  const images = sanityImages.length > 0 ? sanityImages : placeholderImages;
  const isPlaceholder = sanityImages.length === 0;

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-gradient-to-br from-dark to-primary/90 py-20">
        <div className="container-custom text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Gallery</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Moments from Sacred Journeys
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A glimpse into the blessed experiences our pilgrims have had with Al-Hidaayah Platinum Travels —
            from the Grand Mosque in Makkah to Masjid an-Nabawi in Madinah.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <GalleryGrid images={images} isPlaceholder={isPlaceholder} />
      </div>

      <CTABanner />
    </div>
  );
}
