"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Upload } from "lucide-react";

export type GalleryImage = {
  _id: string;
  title: string;
  category: string;
  caption: string;
  imageUrl: string;
};

const categories = [
  { label: "All Photos", value: "all" },
  { label: "Makkah", value: "makkah" },
  { label: "Madinah", value: "madinah" },
  { label: "Group", value: "group" },
  { label: "General", value: "general" },
];

export default function GalleryGrid({
  images,
  isPlaceholder,
}: {
  images: GalleryImage[];
  isPlaceholder: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filtered =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Admin notice — only shown when still on placeholders */}
      {isPlaceholder && (
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 mb-10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Upload size={18} className="text-primary" />
          </div>
          <div>
            <p className="font-semibold text-dark text-sm mb-1">
              Admin: Upload Your Gallery Images
            </p>
            <p className="text-gray-500 text-sm">
              These are placeholder images. Log in to the Admin Studio at{" "}
              <span className="font-semibold text-primary">/studio</span> →
              Gallery → and upload your real photos. They will instantly replace these.
            </p>
          </div>
        </div>
      )}

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
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px]"
      >
        <AnimatePresence>
          {filtered.map((img, index) => (
            <motion.div
              key={img._id}
              layout
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              onClick={() => setLightboxImage(img)}
            >
              <Image
                src={img.imageUrl}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ZoomIn size={14} className="text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <p className="text-white text-xs font-semibold leading-tight">{img.caption}</p>
              </div>
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
          {isPlaceholder && (
            <p className="text-gray-400 text-sm mt-2">
              Admin: upload images through the Studio.
            </p>
          )}
        </div>
      )}

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
                  src={lightboxImage.imageUrl}
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
    </>
  );
}
