import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Islamic Travel Blog | Umrah & Hajj Guides | Al-Hidaayah Platinum Travels",
  description: "Expert guides, tips, and spiritual insights for Umrah and Hajj pilgrims. From visa requirements to packing lists, we help you prepare for the journey of a lifetime.",
};

const posts = [
  {
    slug: "complete-guide-to-umrah-2026",
    title: "The Complete Step-by-Step Guide to Performing Umrah in 2026",
    excerpt: "Everything you need to know about preparing for Umrah — from visa requirements and what to pack, to the rituals of Tawaf, Sa'i, and Ziyarah. A comprehensive guide for first-time pilgrims.",
    category: "Umrah Guide",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    imageAlt: "Masjid al-Haram, Makkah — performing Umrah at the Grand Mosque",
    featured: true,
  },
  {
    slug: "best-time-for-umrah-uk",
    title: "The Best Time to Perform Umrah from the UK — Month by Month Guide",
    excerpt: "Should you travel in Ramadan, the school holidays, or during the quieter months? We break down the pros and cons of each travel period.",
    category: "Travel Tips",
    date: "February 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    imageAlt: "London Heathrow — departing the UK for Umrah",
    featured: false,
  },
  {
    slug: "umrah-packing-list",
    title: "The Ultimate Umrah Packing List — What to Bring and What to Leave",
    excerpt: "A detailed, practical packing list for UK pilgrims heading to Makkah and Madinah. Learn what to pack for Ihram, Ziyarah, and your hotel stay.",
    category: "Travel Tips",
    date: "January 20, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    imageAlt: "Luxury hotel room — packing for your Umrah stay",
    featured: false,
  },
  {
    slug: "what-to-expect-madinah",
    title: "What to Expect in Madinah Al-Munawwarah — A Pilgrim's Guide",
    excerpt: "Madinah is the city of the Prophet ﷺ and a place of immense spiritual significance. Here's everything you need to know before visiting the blessed city.",
    category: "Destination Guides",
    date: "January 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?w=800&q=80",
    imageAlt: "Masjid an-Nabawi, Madinah Al-Munawwarah",
    featured: false,
  },
  {
    slug: "umrah-duas-guide",
    title: "Essential Du'as for Every Stage of Umrah — With Transliteration",
    excerpt: "A comprehensive collection of the most important Du'as and supplications for each stage of the Umrah ritual, with Arabic text, transliteration, and English translation.",
    category: "Islamic Knowledge",
    date: "December 20, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    imageAlt: "Peaceful hotel interior — du'a and reflection during Umrah",
    featured: false,
  },
  {
    slug: "hajj-vs-umrah-differences",
    title: "Hajj vs Umrah — Understanding the Key Differences",
    excerpt: "While both are sacred pilgrimages, Hajj and Umrah differ significantly in their timing, rituals, and spiritual significance. Here's a clear explanation.",
    category: "Islamic Knowledge",
    date: "December 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    imageAlt: "5-star hotel near the Haram — Hajj and Umrah pilgrimage preparation",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-gradient-to-br from-dark to-primary/90 py-20">
        <div className="container-custom text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Islamic Travel Blog</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Guides & Insights for Pilgrims</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Expert articles, practical guides, and spiritual insights to help you prepare for the most important journey of your life.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Featured Post */}
        {featured && (
          <div className="mb-12">
            <Link href={`/blog/${featured.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gold/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full">{featured.category}</span>
                    <span className="text-xs text-gray-400">Featured</span>
                  </div>
                  <h2 className="font-heading font-bold text-dark text-2xl mb-3 group-hover:text-primary transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={12} />{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>
              <div className="p-6">
                <span className="bg-gold/10 text-accent text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                <h3 className="font-heading font-bold text-dark text-base mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  </div>
                  <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all">Read <ArrowRight size={12} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <CTABanner />
    </div>
  );
}
