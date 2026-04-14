"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Heart, Headphones } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { fadeUp, fadeUpSlow, cardReveal, staggerGrid, viewport } from "@/lib/animations";

const icons = {
  "shield-check": ShieldCheck,
  "star": Star,
  "heart": Heart,
  "headphones": Headphones,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
            className="section-subtitle mb-3"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="section-title mb-4"
          >
            Your Journey Deserves the{" "}
            <span className="text-gradient-gold">Very Best</span>
          </motion.h2>
          <motion.p
            variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={viewport}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            At Al-Hidaayah Platinum Travels, we understand the profound importance of your pilgrimage.
            Every detail is handled with care so you can focus entirely on your worship.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_CHOOSE_US.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons] || ShieldCheck;
            return (
              <motion.div
                key={item.title}
                variants={cardReveal}
                className="group p-5 md:p-8 rounded-2xl border border-gray-100 bg-white card-hover text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <Icon
                    size={22}
                    className="text-primary group-hover:text-white transition-colors duration-300 md:hidden"
                  />
                  <Icon
                    size={28}
                    className="text-primary group-hover:text-white transition-colors duration-300 hidden md:block"
                  />
                </div>
                <h3 className="font-heading font-bold text-dark text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
                {/* Decorative line */}
                <div className="mt-6 h-0.5 w-10 bg-gold/30 mx-auto group-hover:bg-gold group-hover:w-16 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-16 bg-gradient-to-r from-primary to-primary-700 rounded-2xl p-6 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center">
            {[
              { value: "5+", label: "Years of Service" },
              { value: "500+", label: "Pilgrims Served" },
              { value: "3★–5★", label: "Hotel Options" },
              { value: "6", label: "UK Cities" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl md:text-4xl font-bold text-gold mb-1 md:mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70 text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
