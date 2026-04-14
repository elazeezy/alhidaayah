"use client";

import { motion } from "framer-motion";

const airlines = [
  { name: "EgyptAir", code: "MS" },
  { name: "Qatar Airways", code: "QR" },
  { name: "British Airways", code: "BA" },
  { name: "Saudia", code: "SV" },
  { name: "Emirates", code: "EK" },
  { name: "Etihad Airways", code: "EY" },
  { name: "Turkish Airlines", code: "TK" },
  { name: "Air Arabia", code: "G9" },
];

export default function AirlinesCarousel() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container-custom mb-6">
        <motion.p
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest"
        >
          Our Airline Partners
        </motion.p>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative">
        <div className="flex gap-8 animate-scroll">
          {[...airlines, ...airlines].map((airline, index) => (
            <div
              key={`${airline.code}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center w-36 h-20 bg-gray-50 rounded-xl border border-gray-100 px-4 hover:border-gold/40 hover:bg-gold/5 transition-all duration-200 group"
            >
              <span className="text-xl font-heading font-bold text-gray-400 group-hover:text-gold transition-colors">
                {airline.code}
              </span>
              <span className="text-xs text-gray-400 mt-1 text-center">{airline.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
