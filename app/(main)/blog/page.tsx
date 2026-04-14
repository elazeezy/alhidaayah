import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import { client, urlFor } from "@/sanity/client";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Islamic Travel Blog | Umrah & Hajj Guides | Al-Hidaayah Platinum Travels",
  description: "Expert guides, tips, and spiritual insights for Umrah and Hajj pilgrims. From visa requirements to packing lists, we help you prepare for the journey of a lifetime.",
};

async function getPosts() {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      "slug": slug.current,
      title,
      excerpt,
      publishedAt,
      readTime,
      featuredImage,
      categories
    }`
  );
}

function formatDate(dateString: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getCategory(categories: string[]) {
  if (!categories || categories.length === 0) return "General";
  const map: Record<string, string> = {
    "umrah-guide": "Umrah Guide",
    "hajj-guide": "Hajj Guide",
    "travel-tips": "Travel Tips",
    "islamic-knowledge": "Islamic Knowledge",
    "destination-guides": "Destination Guides",
    "news": "News & Updates",
  };
  return map[categories[0]] || categories[0];
}

export default async function BlogPage() {
  const posts = await getPosts();
  const featured = posts[0] ?? null;
  const rest = posts.slice(1);

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
        {posts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg">No articles published yet. Check back soon.</p>
          </div>
        )}

        {/* Featured Post */}
        {featured && (
          <div className="mb-12">
            <Link href={`/blog/${featured.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden bg-primary/10">
                  {featured.featuredImage ? (
                    <Image
                      src={urlFor(featured.featuredImage).width(800).url()}
                      alt={featured.featuredImage.alt || featured.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                      <span className="text-6xl">🕌</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gold/10 text-accent text-xs font-bold px-3 py-1.5 rounded-full">
                      {getCategory(featured.categories)}
                    </span>
                    <span className="text-xs text-gray-400">Featured</span>
                  </div>
                  <h2 className="font-heading font-bold text-dark text-2xl mb-3 group-hover:text-primary transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={12} />{formatDate(featured.publishedAt)}</span>
                    {featured.readTime && (
                      <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime} min read</span>
                    )}
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
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post: any) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 card-hover">
                <div className="relative h-48 overflow-hidden bg-primary/10">
                  {post.featuredImage ? (
                    <Image
                      src={urlFor(post.featuredImage).width(600).url()}
                      alt={post.featuredImage.alt || post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                      <span className="text-5xl">🕌</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="bg-gold/10 text-accent text-xs font-bold px-3 py-1 rounded-full">
                    {getCategory(post.categories)}
                  </span>
                  <h3 className="font-heading font-bold text-dark text-base mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Calendar size={11} />{formatDate(post.publishedAt)}</span>
                      {post.readTime && (
                        <span className="flex items-center gap-1"><Clock size={11} />{post.readTime} min read</span>
                      )}
                    </div>
                    <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all">Read <ArrowRight size={12} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <CTABanner />
    </div>
  );
}
