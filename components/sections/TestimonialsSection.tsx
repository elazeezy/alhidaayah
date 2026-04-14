"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeUp, viewport } from "@/lib/animations";

export default function TestimonialsSection() {
  const autoplayRef = useRef(Autoplay({ delay: 4500, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplayRef.current]
  );

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
            className="section-subtitle mb-3"
          >
            Pilgrim Stories
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="section-title mb-4"
          >
            What Our Pilgrims{" "}
            <span className="text-gradient-gold">Say About Us</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Alhamdulillah, we are humbled by the kind words of our pilgrims.
            Their blessings and trust inspire us to continue serving with excellence.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.33%-16px)] min-w-0"
                >
                  <div className="bg-white rounded-2xl p-8 h-full shadow-card border border-gray-100 flex flex-col">
                    {/* Quote Icon */}
                    <Quote size={28} className="text-gold/30 mb-4 flex-shrink-0" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.starRating }).map((_, i) => (
                        <Star key={i} size={14} className="text-gold fill-gold" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                      "{testimonial.reviewText}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-dark text-sm">{testimonial.name}</p>
                        <p className="text-gray-400 text-xs">
                          {testimonial.city} · {testimonial.travelMonth} {testimonial.travelYear}
                        </p>
                        <p className="text-primary/70 text-xs mt-0.5">{testimonial.packageType}</p>
                      </div>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-2 py-1">
                          <span className="text-xs font-semibold">✓ Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
