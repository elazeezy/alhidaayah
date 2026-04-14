"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, Clock, Send, CheckCircle, Loader2, MessageCircle, MapPin } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  packageInterest: z.string().optional(),
  message: z.string().min(10, "Please provide more detail in your message"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "contact" }),
      });
      setSubmitted(true);
      reset();
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-gradient-to-br from-dark to-primary/90 py-20">
        <div className="container-custom text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our team is ready to assist you on your journey towards the Holy Cities.
            Reach out via WhatsApp, phone, or our contact form below.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp - Primary */}
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366] rounded-2xl p-6 text-white hover:bg-[#1fad53] transition-colors group"
            >
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle size={22} />
                <span className="font-heading font-bold text-lg">WhatsApp</span>
              </div>
              <p className="text-white/90 font-semibold">{SITE_CONFIG.whatsapp}</p>
              <p className="text-white/70 text-sm mt-1">Fastest response — tap to chat now</p>
            </a>

            {/* Phone */}
            <a href={`tel:${SITE_CONFIG.phone}`} className="block bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Phone size={20} className="text-primary" />
                <span className="font-heading font-bold text-dark text-lg">Phone</span>
              </div>
              <p className="text-dark font-semibold">{SITE_CONFIG.phoneDisplay}</p>
              <p className="text-gray-400 text-sm mt-1">Mon–Sat: 9am–6pm</p>
            </a>

            {/* Email */}
            <a href={`mailto:${SITE_CONFIG.email}`} className="block bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={20} className="text-primary" />
                <span className="font-heading font-bold text-dark text-lg">Email</span>
              </div>
              <p className="text-dark font-semibold">{SITE_CONFIG.email}</p>
              <p className="text-gray-400 text-sm mt-1">We respond within 24 hours</p>
            </a>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={20} className="text-primary" />
                <span className="font-heading font-bold text-dark text-lg">Opening Hours</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Monday – Saturday</span>
                  <span className="text-dark font-semibold">9:00am – 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sunday</span>
                  <span className="text-dark font-semibold">10:00am – 4:00pm</span>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={20} className="text-primary" />
                <span className="font-heading font-bold text-dark text-lg">Our Office</span>
              </div>
              <p className="text-dark font-semibold">{SITE_CONFIG.address}</p>
              <p className="text-gray-400 text-sm mt-1">Visit us in person — appointments welcome</p>
            </div>

            {/* YouTube */}
            <a
              href={SITE_CONFIG.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:border-[#FF0000]/40 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-5 text-[#FF0000]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="font-heading font-bold text-dark text-lg group-hover:text-[#FF0000] transition-colors">YouTube</span>
              </div>
              <p className="text-gray-500 text-sm">Watch our Hajj &amp; Umrah guides and testimonials</p>
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              <h2 className="font-heading font-bold text-dark text-2xl mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle size={56} className="text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-dark text-2xl mb-2">Message Sent!</h3>
                  <p className="text-gray-500">JazakAllah Khair for your message. Our team will respond within 24 hours insha&apos;Allah.</p>
                  <p className="text-gray-400 text-sm mt-2">A confirmation email has been sent to your inbox.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-primary font-semibold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">Full Name *</label>
                      <input {...register("name")} placeholder="Your full name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">Email Address *</label>
                      <input {...register("email")} type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">Phone Number *</label>
                      <input {...register("phone")} type="tel" placeholder="+44 7xxx xxx xxx" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">Package Interest</label>
                      <select {...register("packageInterest")} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary bg-white">
                        <option value="">Select a package...</option>
                        <option value="Basic Umrah Package">Basic Umrah (3★) — £1,900</option>
                        <option value="Premium Umrah Package">Premium Umrah (5★) — £2,100</option>
                        <option value="Hajj Package">Hajj Package 2026</option>
                        <option value="Group Umrah">Group Umrah Booking</option>
                        <option value="Ramadan Umrah">Ramadan Umrah</option>
                        <option value="Custom Package">Custom Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">Your Message *</label>
                    <textarea {...register("message")} rows={5} placeholder="Tell us about your requirements — travel dates, number of people, any special needs..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white resize-none" />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button type="submit" disabled={submitting} className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed">
                    {submitting ? <><Loader2 size={18} className="animate-spin" />Sending...</> : <><Send size={18} />Send Message</>}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    By submitting this form you agree to our Privacy Policy. We will never share your data with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
