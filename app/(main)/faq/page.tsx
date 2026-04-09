"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_CATEGORIES } from "@/lib/constants";
import CTABanner from "@/components/sections/CTABanner";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(Object.keys(FAQ_CATEGORIES)[0]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Object.values(FAQ_CATEGORIES).flat().map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-br from-dark to-primary/90 py-20">
        <div className="container-custom text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about Umrah, Hajj, visas, payments, and travelling with Al-Hidaayah Platinum Travels.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-100 sticky top-24">
              <h2 className="font-heading font-bold text-dark text-sm uppercase tracking-wider mb-4 px-2">Categories</h2>
              {Object.keys(FAQ_CATEGORIES).map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setOpenFAQ(null); }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all mb-1 ${
                    activeCategory === cat
                      ? "bg-primary text-white font-semibold"
                      : "text-gray-600 hover:bg-cream hover:text-dark"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* FAQ Content */}
          <div className="flex-1">
            <h2 className="font-heading font-bold text-dark text-2xl mb-6">{activeCategory}</h2>
            <div className="space-y-3">
              {FAQ_CATEGORIES[activeCategory as keyof typeof FAQ_CATEGORIES].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-dark pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown size={18} className="text-primary" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                          <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Still have questions */}
        <div className="mt-16 bg-white rounded-2xl p-10 shadow-card border border-gray-100 text-center">
          <h2 className="font-heading font-bold text-dark text-2xl mb-3">Still Have Questions?</h2>
          <p className="text-gray-500 mb-6">Our team is available Mon–Sat 9am–6pm to answer any questions you may have.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/447879797589?text=Assalamu%20Alaikum!%20I%20have%20a%20question%20about%20your%20Umrah%20packages." target="_blank" rel="noopener noreferrer" className="btn-primary">
              Ask on WhatsApp
            </a>
            <a href="/contact" className="btn-outline">Contact Us</a>
          </div>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
