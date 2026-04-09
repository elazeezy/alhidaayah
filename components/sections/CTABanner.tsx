"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getWhatsAppUrl, WHATSAPP_MESSAGES, SITE_CONFIG } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-primary via-primary-700 to-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Islamic border decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Arabic Bismillah */}
          <p className="text-gold/60 text-xl md:text-2xl mb-3 md:mb-4 font-arabic tracking-widest">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>

          <h2 className="font-heading text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Begin Your{" "}
            <span className="text-gold">Blessed Journey?</span>
          </h2>
          <p className="text-white/70 text-sm md:text-lg mb-7 md:mb-10 max-w-2xl mx-auto">
            Take the first step towards the most spiritually rewarding experience of your life.
            Our team is ready to guide you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.quote)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#25D366] text-white font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl text-sm md:text-base hover:bg-[#1fad53] transition-all duration-300 shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="md:hidden">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="hidden md:block">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-dark font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl text-sm md:text-base hover:bg-accent hover:text-white transition-all duration-300"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl text-sm md:text-base hover:bg-white/10 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
