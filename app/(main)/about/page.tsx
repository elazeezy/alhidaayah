import type { Metadata } from "next";
import { Shield, Users, Award, Heart } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Al-Hidaayah Platinum Travels",
  description: "Learn about Al-Hidaayah Platinum Travels — our story, our values, and our commitment to providing the finest Umrah and Hajj experiences for Muslim pilgrims in the UK.",
};

const teamMembers = [
  { name: "Brother Khalid Hassan", role: "Founder & Director", description: "With over 10 years of experience in Islamic travel, Brother Khalid established Al-Hidaayah Platinum Travels with a vision to provide truly premium, spiritually enriching pilgrimage experiences." },
  { name: "Sister Amirah Khan", role: "Head of Operations", description: "Amirah oversees all package coordination, hotel partnerships, and client support, ensuring every pilgrim's journey exceeds expectations." },
  { name: "Sheikh Ahmad Ali", role: "Spiritual Director", description: "Sheikh Ahmad leads our Ziyarah tours and provides daily Islamic reminders and guidance, enriching the spiritual dimension of every journey." },
];

const values = [
  { icon: Heart, title: "Spiritual First", desc: "Every decision we make prioritises the spiritual wellbeing and enrichment of our pilgrims. This is not just business — it is service to our community." },
  { icon: Shield, title: "Trust & Transparency", desc: "We believe in complete transparency in our pricing, inclusions, and processes. No hidden fees, no surprises — just honest, reliable service." },
  { icon: Award, title: "Excellence in Service", desc: "From the first inquiry to the return home, we pursue excellence in every interaction and every detail of your journey." },
  { icon: Users, title: "Community Centred", desc: "We are part of the UK Muslim community. We understand your needs, respect your values, and treat every pilgrim as family." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-gradient-to-br from-dark to-primary/90 py-20">
        <div className="container-custom text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">About Al-Hidaayah Platinum Travels</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A UK-based Islamic travel company dedicated to providing premium, spiritually enriching
            Umrah and Hajj experiences for Muslim pilgrims across the United Kingdom.
          </p>
        </div>
      </div>

      <div className="container-custom py-16 space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-subtitle mb-3">Our Story</p>
            <h2 className="section-title mb-6">Born from a Passion for <span className="text-gradient-gold">Sacred Service</span></h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Al-Hidaayah Platinum Travels was founded with a single, powerful purpose: to make the
                journey to the Holy Cities of Makkah and Madinah as spiritually enriching, comfortable,
                and accessible as possible for Muslims in the United Kingdom.
              </p>
              <p>
                The name &ldquo;Al-Hidaayah&rdquo; — meaning divine guidance — reflects our core belief that
                every step of the Umrah and Hajj journey should be guided by faith, knowledge, and a
                genuine desire to serve the Ummah.
              </p>
              <p>
                Over the years, we have had the honour of serving hundreds of pilgrims from across the UK —
                first-time Umrah performers, elderly pilgrims making their final journey, families, and groups
                from mosques and community organisations. Each journey has taught us more about what it truly
                means to serve the guests of Allah.
              </p>
              <p>
                Today, Al-Hidaayah Platinum Travels stands as a trusted name in Islamic travel, known for
                our commitment to excellence, our transparency, and our genuine care for every pilgrim we serve.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "5+", label: "Years of Service" },
              { value: "500+", label: "Happy Pilgrims" },
              { value: "3★–5★", label: "Hotel Partners" },
              { value: "6", label: "UK Departure Cities" },
            ].map(stat => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-card border border-gray-100">
                <p className="font-heading text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Values */}
        <div>
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Our Values</p>
            <h2 className="section-title">What Guides <span className="text-gradient-gold">Everything We Do</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <v.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-dark text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Our Team</p>
            <h2 className="section-title">The People Behind <span className="text-gradient-gold">Your Journey</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-heading font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-dark text-lg mb-1">{member.name}</h3>
                <p className="text-gold text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations */}
        <div className="bg-white rounded-2xl p-10 shadow-card border border-gray-100">
          <div className="text-center mb-8">
            <p className="section-subtitle mb-3">Accreditations</p>
            <h2 className="font-heading text-2xl font-bold text-dark">Your Peace of Mind is Our Priority</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { badge: "🛡️", title: "ATOL Protected", desc: "Your money is protected" },
              { badge: "✈️", title: "ABTA Member", desc: "Industry standards guaranteed" },
              { badge: "⭐", title: "5-Star Rated", desc: "By our pilgrims" },
              { badge: "🕌", title: "Islamic Values", desc: "Community-centred service" },
            ].map(acc => (
              <div key={acc.title} className="text-center">
                <div className="text-4xl mb-3">{acc.badge}</div>
                <p className="font-heading font-bold text-dark text-sm">{acc.title}</p>
                <p className="text-gray-400 text-xs mt-1">{acc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
