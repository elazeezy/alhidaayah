"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const included = [
  "Return flights from UK departure city",
  "3★ or 5★ hotel accommodation",
  "2 meals per day throughout",
  "Local transportation (Makkah & Madinah)",
  "Guided Ziyarah tours in both cities",
  "Scholar-led spiritual guidance",
  "Daily Islamic reminders",
  "Complimentary Umrah travel kit",
  "Airport assistance & transfers",
  "24/7 dedicated support team",
];

const notIncluded = [
  "Saudi Arabia Umrah visa fees",
  "Travel insurance (we can assist)",
  "Personal shopping & souvenirs",
  "Optional extra tours",
  "Tips and gratuities",
  "Costs from delays beyond our control",
];

export default function TransparencyStrip() {
  return (
    <section className="bg-[#F5F0E8] border-y border-gray-200 py-14 md:py-20">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Full Transparency — No Hidden Surprises
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark">
            Exactly What's <span className="text-primary">Included</span> — and What Isn't
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            We believe in being completely upfront. Here's everything that comes with your package, and the few things that don't.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* Included */}
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-7 border border-green-100 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 size={16} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-dark text-base">What's Included</h3>
            </div>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not Included */}
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl p-7 border border-red-50 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                <XCircle size={16} className="text-red-400" />
              </div>
              <h3 className="font-heading font-bold text-dark text-base">Not Included</h3>
            </div>
            <ul className="space-y-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                  <XCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl">
              <p className="text-amber-800 text-xs leading-relaxed">
                <strong>Need visa help?</strong> Our team will guide you through the entire Umrah visa process step by step — just ask when you inquire.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
