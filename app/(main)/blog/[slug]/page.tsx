import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

const posts = [
  {
    slug: "complete-guide-to-umrah-2026",
    title: "The Complete Step-by-Step Guide to Performing Umrah in 2026",
    excerpt: "Everything you need to know about preparing for Umrah — from visa requirements to the rituals of Tawaf and Sa'i.",
    category: "Umrah Guide", date: "March 15, 2026", readTime: "8 min read", image: "🕌",
    content: [
      { heading: "What is Umrah?", body: "Umrah is a pilgrimage to Makkah, Saudi Arabia, that can be undertaken at any time of year. Unlike Hajj, Umrah is not obligatory but is highly recommended (Sunnah Mu'akkadah) and carries immense spiritual reward. The Prophet ﷺ described Umrah as 'a means of expiation for sins committed between it and the next Umrah' (Sahih al-Bukhari)." },
      { heading: "The Rituals of Umrah", body: "Umrah consists of four main rituals: 1) Ihram — the state of spiritual purity, 2) Tawaf — circumambulating the Ka'bah seven times anti-clockwise, 3) Sa'i — walking seven times between the hills of Safa and Marwa, and 4) Halq or Taqsir — shaving or cutting the hair to exit the state of Ihram." },
      { heading: "Preparing for Umrah from the UK", body: "Before travelling, UK pilgrims must obtain an Umrah visa from the Saudi authorities. This requires a valid passport, photographs, visa application form, meningitis vaccination certificate, and proof of travel. Women under 45 must travel with a Mahram (male guardian). Our team at Al-Hidaayah Platinum Travels guides you through every step of the visa process." },
      { heading: "What to Pack for Umrah", body: "Men will need two white, unstitched pieces of cloth (Ihram garments). Women should wear modest Islamic clothing — there is no specific dress requirement but clothing should be loose, modest, and cover the entire body. Both men and women will need comfortable walking shoes (removed during Tawaf), prayer mats, a small Quran, a refillable water bottle, and any essential medication." },
      { heading: "Tips for First-Time Pilgrims", body: "Arrive well-rested and spiritually prepared. Learn the Du'as for each stage of Umrah before your trip. Stay hydrated — Makkah can be extremely hot. Make the most of the quieter hours (after Fajr and before Dhuhr) for Tawaf. Keep your intentions pure throughout. And remember — you are the guest of Allah Subhanahu wa Ta'ala. Approach every moment with gratitude and humility." },
    ],
    relatedPosts: ["best-time-for-umrah-uk", "umrah-packing-list"],
  },
  {
    slug: "best-time-for-umrah-uk", title: "The Best Time to Perform Umrah from the UK", excerpt: "When is the best time to travel for Umrah from the UK?", category: "Travel Tips", date: "February 28, 2026", readTime: "6 min read", image: "📅",
    content: [
      { heading: "When Can You Perform Umrah?", body: "Unlike Hajj, Umrah can be performed at any time throughout the year. However, some times are considered more spiritually rewarding or more practically convenient than others." },
      { heading: "Ramadan — The Most Spiritually Rewarding Time", body: "Performing Umrah during Ramadan carries a reward equivalent to Hajj according to hadith. The atmosphere in Makkah during Ramadan is extraordinarily spiritual. However, prices are highest and crowds are at their peak during this time." },
      { heading: "School Holidays — August and September", body: "The summer school holiday period (July–September) is extremely popular with UK families. The weather is hot but the timing is convenient. This is when Al-Hidaayah offers its 2026 packages." },
      { heading: "Quieter Months", body: "January, February, and April tend to be quieter, with smaller crowds and sometimes lower prices. The weather is also cooler during these months." },
    ],
    relatedPosts: ["complete-guide-to-umrah-2026", "umrah-packing-list"],
  },
];

interface Props { params: { slug: string }; }

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Al-Hidaayah Platinum Travels Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "Al-Hidaayah Platinum Travels" },
    publisher: { "@type": "Organization", name: "Al-Hidaayah Platinum Travels" },
    datePublished: post.date,
  };

  return (
    <div className="min-h-screen bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-dark to-primary/90 py-16">
        <div className="container-custom max-w-4xl">
          <Link href="/blog" className="flex items-center gap-2 text-white/60 hover:text-gold text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full">{post.category}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><Calendar size={13} />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime}</span>
            <span>Al-Hidaayah Platinum Travels</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 max-w-4xl">
        {/* Featured Image Placeholder */}
        <div className="h-72 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mb-10">
          <span className="text-9xl">{post.image}</span>
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card border border-gray-100 prose prose-lg max-w-none">
          <p className="text-gray-500 text-lg leading-relaxed mb-8 border-l-4 border-gold pl-6">
            {post.excerpt}
          </p>

          {post.content.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="font-heading font-bold text-dark text-xl mb-3">{section.heading}</h2>
              <p className="text-gray-600 leading-relaxed">{section.body}</p>
            </div>
          ))}

          {/* CTA within article */}
          <div className="bg-cream rounded-2xl p-8 mt-10 text-center not-prose">
            <p className="font-heading font-bold text-dark text-xl mb-3">Ready to Start Your Umrah Journey?</p>
            <p className="text-gray-500 mb-6">Contact Al-Hidaayah Platinum Travels today for a free consultation and personalised quote.</p>
            <div className="flex gap-4 justify-center">
              <a href="https://wa.me/447879797589?text=Assalamu%20Alaikum!%20I%20read%20your%20blog%20and%20would%20like%20to%20enquire%20about%20Umrah%20packages." target="_blank" rel="noopener noreferrer" className="btn-primary">
                Get Free Quote
              </a>
              <Link href="/umrah-packages" className="btn-outline">View Packages</Link>
            </div>
          </div>
        </div>

        {/* Share */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex items-center justify-between">
          <p className="font-semibold text-dark">Share this article:</p>
          <div className="flex gap-3">
            {["WhatsApp", "Twitter", "Facebook"].map(platform => (
              <button key={platform} className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:border-primary hover:text-primary transition-colors">
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>
      <CTABanner />
    </div>
  );
}
