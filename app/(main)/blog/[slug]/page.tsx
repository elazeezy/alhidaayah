import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import CTABanner from "@/components/sections/CTABanner";
import { client, urlFor } from "@/sanity/client";

export const revalidate = 60;

async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      readTime,
      featuredImage,
      categories,
      body,
      seoTitle,
      seoDescription
    }`,
    { slug }
  );
}

async function getAllSlugs() {
  return client.fetch(`*[_type == "blogPost"]{ "slug": slug.current }`);
}

interface Props { params: { slug: string }; }

export async function generateStaticParams() {
  const posts = await getAllSlugs();
  return posts.map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.seoTitle || post.title} | Al-Hidaayah Platinum Travels Blog`,
    description: post.seoDescription || post.excerpt,
  };
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

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src={urlFor(value).width(900).url()}
          alt={value.alt || ""}
          width={900}
          height={500}
          className="w-full object-cover"
        />
        {value.caption && (
          <p className="text-center text-sm text-gray-400 mt-2">{value.caption}</p>
        )}
      </div>
    ),
  },
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "Al-Hidaayah Platinum Travels" },
    publisher: { "@type": "Organization", name: "Al-Hidaayah Platinum Travels" },
    datePublished: post.publishedAt,
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
            <span className="bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full">
              {getCategory(post.categories)}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><Calendar size={13} />{formatDate(post.publishedAt)}</span>
            {post.readTime && (
              <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime} min read</span>
            )}
            <span>Al-Hidaayah Platinum Travels</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 max-w-4xl">
        {/* Featured Image */}
        {post.featuredImage ? (
          <div className="relative h-72 rounded-2xl overflow-hidden mb-10">
            <Image
              src={urlFor(post.featuredImage).width(900).url()}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="h-72 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-9xl">🕌</span>
          </div>
        )}

        {/* Article Body */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card border border-gray-100">
          {post.excerpt && (
            <p className="text-gray-500 text-lg leading-relaxed mb-8 border-l-4 border-gold pl-6">
              {post.excerpt}
            </p>
          )}

          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-dark prose-a:text-primary">
            {post.body && (
              <PortableText value={post.body} components={portableTextComponents} />
            )}
          </div>

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
