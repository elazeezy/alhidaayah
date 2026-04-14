"use client";

import { motion } from "framer-motion";
import { Search, MessageCircle, Plane, CreditCard, Shield } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";
import { fadeUp, cardReveal, staggerGrid, viewport } from "@/lib/animations";

const icons = {
  search: Search,
  "message-circle": MessageCircle,
  plane: Plane,
  "credit-card": CreditCard,
  shield: Shield,
};

export default function HowItWorks() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="how-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="25" fill="none" stroke="#C9A227" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#how-pattern)"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
            className="section-subtitle mb-3"
          >
            Simple Process
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            How It{" "}
            <span className="text-gradient-gold">Works</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From choosing your package to arriving home spiritually renewed —
            we have made every step as simple and stress-free as possible.
          </p>
        </div>

        {/* Steps */}
        <motion.div
          variants={staggerGrid} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative"
        >
          {/* Connector Line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold/10 via-gold/60 to-gold/10" />

          {HOW_IT_WORKS.map((step) => {
            const Icon = icons[step.icon as keyof typeof icons] || Search;
            return (
              <motion.div
                key={step.step}
                variants={cardReveal}
                className="relative text-center group"
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex mb-5 md:mb-8">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                    <Icon size={28} className="text-gold md:hidden" />
                    <Icon size={38} className="text-gold hidden md:block" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-dark font-heading font-bold text-xs md:text-sm">{step.step}</span>
                  </div>
                </div>

                <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
