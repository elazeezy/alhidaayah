"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { fadeUp, cardReveal, staggerGrid, viewport } from "@/lib/animations";

const blogPosts = [
  {
    slug: "complete-guide-to-umrah-2026",
    title: "The Complete Step-by-Step Guide to Performing Umrah in 2026",
    excerpt: "Everything you need to know about preparing for Umrah — from visa requirements and what to pack, to the rituals of Tawaf, Sa'i, and Ziyarah. A comprehensive guide for first-time pilgrims.",
    category: "Umrah Guide",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "🕌",
  },
  {
    slug: "best-time-for-umrah-uk",
    title: "The Best Time to Perform Umrah from the UK — Month by Month Guide",
    excerpt: "Should you travel in Ramadan, the school holidays, or during the quieter months? We break down the pros and cons of each travel period to help you choose the perfect time for your blessed journey.",
    category: "Travel Tips",
    date: "February 28, 2026",
    readTime: "6 min read",
    image: "📅",
  },
  {
    slug: "umrah-packing-list",
    title: "The Ultimate Umrah Packing List — What to Bring and What to Leave",
    excerpt: "A detailed, practical packing list specifically for UK pilgrims heading to Makkah and Madinah. Learn what to pack for Ihram, Ziyarah, and your hotel stay — and what you definitely do not need.",
    category: "Travel Tips",
    date: "January 20, 2026",
    readTime: "5 min read",
    image: "🎒",
  },
];

export default function BlogPreviewSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
              className="section-subtitle mb-3"
            >
              Islamic Travel Blog
            </motion.p>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="section-title"
            >
              Guides & Insights for{" "}
              <span className="text-gradient-gold">Pilgrims</span>
            </motion.h2>
          </div>
          <Link href="/blog" className="btn-outline self-start md:self-auto whitespace-nowrap">
            View All Posts
          </Link>
        </div>

        {/* Blog Cards */}
        <motion.div
          variants={staggerGrid} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={cardReveal}
              className="group bg-white rounded-2xl overflow-hidden shadow-card card-hover border border-gray-100"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                <span className="text-6xl">{post.image}</span>
              </div>

              <div className="p-6">
                {/* Category */}
                <span className="inline-block bg-gold/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>

                <h3 className="font-heading font-bold text-dark text-base leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all"
                  >
                    Read <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
