"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Users, Send, CheckCircle, Loader2 } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import CTABanner from "@/components/sections/CTABanner";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  contactNumber: z.string().min(7, "Phone number required"),
  organisation: z.string().min(2, "Organisation / Mosque name required"),
  numberOfTravellers: z.number().min(10, "Minimum 10 travellers for group booking").max(500),
  preferredDates: z.string().min(1, "Please indicate preferred travel dates"),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function GroupUmrahPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { numberOfTravellers: 20 },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "group-inquiry" }),
      });
      setSubmitted(true);
      reset();
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  const benefits = [
    { icon: "💰", title: "Exclusive Group Discounts", desc: "The more pilgrims in your group, the better the pricing. We offer competitive group rates not available to individual bookings." },
    { icon: "🤝", title: "Dedicated Group Manager", desc: "Every group is assigned a dedicated relationship manager who handles all coordination from first inquiry to return home." },
    { icon: "🕌", title: "Group Ziyarah & Lectures", desc: "Private guided Ziyarah tours for your group, along with exclusive Islamic lectures and group Du'a sessions." },
    { icon: "📋", title: "Complete Logistics Handled", desc: "Visa coordination, airport assistance, hotel rooming lists, transportation — all managed on your behalf." },
    { icon: "🚌", title: "Private Group Transportation", desc: "Exclusive coach transport for your group between holy sites, airports, and hotels — no sharing with other groups." },
    { icon: "📱", title: "Group WhatsApp Support", desc: "A dedicated WhatsApp group for your party with 24/7 support from our team throughout the entire journey." },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-gradient-to-br from-dark to-primary/90 py-20">
        <div className="container-custom text-center">
          <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users size={32} className="text-gold" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Group Umrah Packages</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Taking your mosque, community organisation, or family group on Umrah?
            We specialise in coordinating group pilgrimages for 10 to 500+ pilgrims.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-card border border-gray-100">
              <h2 className="font-heading font-bold text-dark text-2xl mb-4">Why Book a Group Umrah?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Performing Umrah as a group is one of the most beautiful experiences in Islam.
                There is a unique spiritual energy when a community travels together for the sake of Allah —
                supporting one another, making Du'a together, and sharing in the blessings of this sacred journey.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{b.icon}</span>
                    <div>
                      <h3 className="font-semibold text-dark text-sm mb-1">{b.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-dark text-lg mb-2">Minimum Group Size</h3>
              <p className="text-gray-600 text-sm">
                Our group packages are available for parties of <strong>10 or more travellers</strong>.
                For groups under 10, please use our standard individual package inquiry.
                For very large groups (100+), please contact us directly for bespoke pricing and arrangements.
              </p>
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.group)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 btn-primary text-sm">
                Discuss Your Group on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 sticky top-24">
              <h3 className="font-heading font-bold text-dark text-lg mb-6">Group Booking Enquiry</h3>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                  <h4 className="font-heading font-bold text-dark text-lg mb-2">JazakAllah Khair!</h4>
                  <p className="text-gray-500 text-sm">Your group inquiry has been received. We will be in touch within 24 hours insha&apos;Allah.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {[
                    { name: "name", label: "Your Full Name *", type: "text", placeholder: "Muhammad Ali" },
                    { name: "email", label: "Email Address *", type: "email", placeholder: "contact@mosque.org" },
                    { name: "contactNumber", label: "Contact Number *", type: "tel", placeholder: "+44 7xxx xxx xxx" },
                    { name: "organisation", label: "Organisation / Mosque *", type: "text", placeholder: "Al-Noor Mosque Bradford" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-semibold text-dark mb-1.5">{field.label}</label>
                      <input
                        {...register(field.name as keyof FormData)}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
                      />
                      {errors[field.name as keyof FormData] && (
                        <p className="text-red-500 text-xs mt-1">{errors[field.name as keyof FormData]?.message}</p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Number of Travellers *</label>
                    <input
                      {...register("numberOfTravellers", { valueAsNumber: true })}
                      type="number"
                      min={10}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
                    />
                    {errors.numberOfTravellers && <p className="text-red-500 text-xs mt-1">{errors.numberOfTravellers.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Preferred Travel Dates *</label>
                    <select
                      {...register("preferredDates")}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary"
                    >
                      <option value="">Select preferred month</option>
                      {["August 2026", "September 2026", "October 2026", "November 2026", "December 2026", "Ramadan 2027", "Flexible"].map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    {errors.preferredDates && <p className="text-red-500 text-xs mt-1">{errors.preferredDates.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Additional Requirements</label>
                    <textarea
                      {...register("additionalInfo")}
                      rows={3}
                      placeholder="Any special requirements, dietary needs, accessibility needs..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary resize-none bg-white"
                    />
                  </div>

                  <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-all disabled:opacity-60">
                    {submitting ? <><Loader2 size={16} className="animate-spin" />Sending...</> : <><Send size={16} />Submit Group Enquiry</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <CTABanner />
    </div>
  );
}
