"use client";

import { motion } from "framer-motion";
import { Search, MessageCircle, Plane } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";

const icons = {
  search: Search,
  "message-circle": MessageCircle,
  plane: Plane,
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-subtitle mb-3"
          >
            Simple Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            How It{" "}
            <span className="text-gradient-gold">Works</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We have made the entire process as simple and stress-free as possible —
            from choosing your package to arriving home spiritually renewed.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connector Lines (desktop) */}
          <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

          {HOW_IT_WORKS.map((step, index) => {
            const Icon = icons[step.icon as keyof typeof icons] || Search;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative text-center group"
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex mb-5 md:mb-8">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                    <Icon size={28} className="text-gold md:hidden" />
                    <Icon size={40} className="text-gold hidden md:block" />
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
        </div>
      </div>
    </section>
  );
}
