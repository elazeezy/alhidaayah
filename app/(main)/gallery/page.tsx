"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Upload } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

// Placeholder gallery images using confirmed Unsplash IDs
// Once Sanity is connected, the admin uploads real images through /studio
const placeholderImages = [
  {
    _id: "1",
    title: "Masjid al-Haram — The Grand Mosque",
    category: "makkah",
    caption: "The magnificent Masjid al-Haram in Makkah Al-Mukarramah",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    span: "col-span-2 row-span-2",
  },
  {
    _id: "2",
    title: "Masjid an-Nabawi, Madinah",
    category: "madinah",
    caption: "The Prophet's Mosque in the blessed city of Madinah",
    image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=800&q=80",
    span: "",
  },
  {
    _id: "3",
    title: "Luxury Hotel — Makkah",
    category: "makkah",
    caption: "5-star accommodation steps from the Haram",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    span: "",
  },
  {
    _id: "4",
    title: "Premium Hotel Room",
    category: "makkah",
    caption: "Spacious, comfortable rooms for our pilgrims",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    span: "",
  },
  {
    _id: "5",
    title: "Hotel Lobby — Madinah",
    category: "madinah",
    caption: "Grand lobby of our partner hotel in Madinah",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    span: "",
  },
  {
    _id: "6",
    title: "Luxury Pilgrimage Stay",
    category: "general",
    caption: "Every detail of your stay, handled with care",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    span: "col-span-2",
  },
  {
    _id: "7",
    title: "Departure from London",
    category: "group",
    caption: "Our pilgrims departing from London Heathrow",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    span: "",
  },
  {
    _id: "8",
    title: "Departure from Manchester",
    category: "group",
    caption: "Serving pilgrims from Manchester and the North",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    span: "",
  },
  {
    _id: "9",
    title: "Journey to the Holy Cities",
    category: "general",
    caption: "Al-Hidaayah Platinum Travels — Your trusted Umrah partner",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    span: "",
  },
];

const categories = [
  { label: "All Photos", value: "all" },
  { label: "Makkah", value: "makkah" },
  { label: "Madinah", value: "madinah" },
  { label: "Group", value: "group" },
  { label: "General", value: "general" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<(typeof placeholderImages)[0] | null>(null);

  const filtered = activeCategory === "all"
    ? placeholderImages
    : placeholderImages.filter(img => img.category === activeCategory);

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
        {/* Admin notice */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 mb-10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Upload size={18} className="text-primary" />
          </div>
          <div>
            <p className="font-semibold text-dark text-sm mb-1">Admin: Upload Your Own Gallery Images</p>
            <p className="text-gray-500 text-sm">
              These are placeholder images. Log in to the Admin Studio at{" "}
              <span className="font-semibold text-primary">/studio</span>{" "}
              → Gallery → and upload your real photos. They will instantly replace these.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.value
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-primary/10 hover:text-primary border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px]">
          <AnimatePresence>
            {filtered.map((img, index) => (
              <motion.div
                key={img._id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${img.span}`}
                onClick={() => setLightboxImage(img)}
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn size={14} className="text-white" />
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <p className="text-white text-xs font-semibold leading-tight">{img.caption}</p>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs bg-primary/80 backdrop-blur-sm text-white px-2 py-1 rounded-full capitalize font-medium">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No images in this category yet.</p>
            <p className="text-gray-400 text-sm mt-2">Admin: upload images through the Studio.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ paddingBottom: "62%" }}>
                <Image
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
              </div>
              {lightboxImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-6">
                  <p className="text-white font-semibold">{lightboxImage.title}</p>
                  <p className="text-white/70 text-sm mt-1">{lightboxImage.caption}</p>
                </div>
              )}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-dark/80 transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner />
    </div>
  );
}
