"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send, CheckCircle, Loader2, User, Mail, Phone,
  Users, Baby, Calendar, Hotel, Plane, Mosque,
  ChevronDown
} from "lucide-react";

// ─── Validation ───────────────────────────────────────────────────────────────
const schema = z.object({
  packageType: z.enum(["umrah", "hajj", "ramadan", "group"]),
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  adults: z.number().min(1, "At least 1 adult required").max(50),
  children: z.number().min(0).max(30),
  duration: z.number().min(5).max(60),
  hotelType: z.enum(["3-star", "4-star", "5-star"]),
  travelDate: z.string().min(1, "Please select a travel date"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

// ─── Package options ───────────────────────────────────────────────────────────
const PACKAGE_TYPES = [
  { value: "umrah",   label: "Umrah",        icon: "🕋", desc: "Year-round" },
  { value: "hajj",    label: "Hajj",          icon: "🌙", desc: "Annual pilgrimage" },
  { value: "ramadan", label: "Ramadan Umrah", icon: "✨", desc: "Most blessed" },
  { value: "group",   label: "Group",         icon: "👥", desc: "10+ travellers" },
] as const;

const HOTEL_TYPES = [
  { value: "3-star", label: "3★ Standard",  price: "From £1,900" },
  { value: "4-star", label: "4★ Comfort",   price: "From £2,100" },
  { value: "5-star", label: "5★ Luxury",    price: "Custom quote" },
] as const;

const TRAVEL_DATES = [
  "August 2026", "September 2026", "October 2026",
  "November 2026", "December 2026", "January 2027",
  "February 2027", "March 2027 (Ramadan)", "April 2027",
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function QuickQuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<"umrah" | "hajj" | "ramadan" | "group">("umrah");
  const [selectedHotel, setSelectedHotel] = useState<"3-star" | "4-star" | "5-star">("4-star");

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      packageType: "umrah",
      adults: 2,
      children: 0,
      duration: 10,
      hotelType: "4-star",
    },
  });

  const adults = watch("adults") || 0;
  const children = watch("children") || 0;
  const totalTravellers = Number(adults) + Number(children);

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          type: "inquiry",
          packageName: PACKAGE_TYPES.find(p => p.value === data.packageType)?.label,
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#0a1628]">

      {/* ── Background layers ─────────────────────────────────── */}
      <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0D1B2A]/95 to-primary/30" />

      {/* Gold geometric accents */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,162,39,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container-custom">

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            ✦ Free Personalised Quote
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Plan Your Sacred Journey
            <br />
            <span className="text-gold">Tailored Just For You</span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Tell us about your trip and we'll send you a detailed, personalised quote within the hour — no obligation, no pressure.
          </p>
        </motion.div>

        {/* ── Form card ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 1.07 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Glass border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/20 via-white/5 to-primary/20 p-[1px]">
              <div className="w-full h-full rounded-3xl bg-[#0D1B2A]/80" />
            </div>

            {/* Card content */}
            <div
              className="relative rounded-3xl p-8 md:p-12"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(201,162,39,0.15)",
              }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (

                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={38} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">JazakAllah Khair!</h3>
                    <p className="text-white/60 text-base max-w-sm mx-auto mb-8">
                      Your inquiry has been received. Our team will send you a personalised quote within the hour insha'Allah.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-gold text-sm font-semibold border border-gold/30 px-6 py-2.5 rounded-full hover:bg-gold/10 transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>

                ) : (

                  /* ── Form ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-8"
                  >

                    {/* Step 1 — Package Type */}
                    <div>
                      <label className="block text-gold text-xs font-bold uppercase tracking-widest mb-4">
                        Step 1 — Select Package Type
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {PACKAGE_TYPES.map((pkg) => (
                          <button
                            type="button"
                            key={pkg.value}
                            onClick={() => {
                              setSelectedPackage(pkg.value);
                              setValue("packageType", pkg.value);
                            }}
                            className={`relative p-4 rounded-2xl border text-left transition-all duration-200 group ${
                              selectedPackage === pkg.value
                                ? "border-gold bg-gold/10 shadow-[0_0_24px_rgba(201,162,39,0.15)]"
                                : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                            }`}
                          >
                            <span className="text-2xl block mb-2">{pkg.icon}</span>
                            <span className={`block font-bold text-sm mb-0.5 ${selectedPackage === pkg.value ? "text-gold" : "text-white"}`}>
                              {pkg.label}
                            </span>
                            <span className="block text-white/40 text-xs">{pkg.desc}</span>
                            {selectedPackage === pkg.value && (
                              <motion.div
                                layoutId="pkg-indicator"
                                className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gold"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-white/8" />

                    {/* Step 2 — Personal Details */}
                    <div>
                      <label className="block text-gold text-xs font-bold uppercase tracking-widest mb-4">
                        Step 2 — Your Details
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* Name */}
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                            <User size={15} />
                          </div>
                          <input
                            {...register("name")}
                            placeholder="Full Name *"
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
                          />
                          {errors.name && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                            <Mail size={15} />
                          </div>
                          <input
                            {...register("email")}
                            type="email"
                            placeholder="Email Address *"
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
                          />
                          {errors.email && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.email.message}</p>}
                        </div>

                        {/* Phone */}
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                            <Phone size={15} />
                          </div>
                          <input
                            {...register("phone")}
                            type="tel"
                            placeholder="+44 7XXX XXX XXX *"
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
                          />
                          {errors.phone && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.phone.message}</p>}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/8" />

                    {/* Step 3 — Trip Details */}
                    <div>
                      <label className="block text-gold text-xs font-bold uppercase tracking-widest mb-4">
                        Step 3 — Trip Details
                      </label>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">

                        {/* Adults */}
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                            <Users size={14} />
                          </div>
                          <input
                            {...register("adults", { valueAsNumber: true })}
                            type="number" min={1} max={50}
                            placeholder="Adults"
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 text-xs">Adults</span>
                          {errors.adults && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.adults.message}</p>}
                        </div>

                        {/* Children */}
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                            <Baby size={14} />
                          </div>
                          <input
                            {...register("children", { valueAsNumber: true })}
                            type="number" min={0} max={30}
                            placeholder="Children"
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 text-xs">Children</span>
                        </div>

                        {/* Duration */}
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                            <Plane size={14} />
                          </div>
                          <input
                            {...register("duration", { valueAsNumber: true })}
                            type="number" min={5} max={60}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 text-xs">Days</span>
                        </div>

                        {/* Travel Date */}
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none z-10">
                            <Calendar size={14} />
                          </div>
                          <select
                            {...register("travelDate")}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-8 py-3.5 text-sm text-white/70 focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all appearance-none"
                          >
                            <option value="" className="bg-dark text-white">Travel Date *</option>
                            {TRAVEL_DATES.map(d => (
                              <option key={d} value={d} className="bg-dark text-white">{d}</option>
                            ))}
                          </select>
                          <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                          {errors.travelDate && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.travelDate.message}</p>}
                        </div>
                      </div>

                      {/* Hotel Type */}
                      <div>
                        <p className="text-white/40 text-xs mb-3 flex items-center gap-2">
                          <Hotel size={12} /> Hotel Preference
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                          {HOTEL_TYPES.map((h) => (
                            <button
                              type="button"
                              key={h.value}
                              onClick={() => {
                                setSelectedHotel(h.value);
                                setValue("hotelType", h.value);
                              }}
                              className={`p-3.5 rounded-xl border text-center transition-all duration-200 ${
                                selectedHotel === h.value
                                  ? "border-gold bg-gold/10"
                                  : "border-white/10 bg-white/5 hover:border-white/20"
                              }`}
                            >
                              <span className={`block font-bold text-sm ${selectedHotel === h.value ? "text-gold" : "text-white/70"}`}>
                                {h.label}
                              </span>
                              <span className="block text-white/35 text-xs mt-0.5">{h.price}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/8" />

                    {/* Bottom row — travellers summary + submit */}
                    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">

                      {/* Travellers pill */}
                      <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex-1">
                        <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                          <Users size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-white/40 text-xs">Total Travellers</p>
                          <p className="text-white font-bold text-lg leading-none">
                            {totalTravellers}
                            <span className="text-white/30 text-xs font-normal ml-1">
                              ({adults} adult{Number(adults) !== 1 ? "s" : ""}{Number(children) > 0 ? `, ${children} child${Number(children) !== 1 ? "ren" : ""}` : ""})
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Response time pill */}
                      <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <div>
                          <p className="text-white/40 text-xs">Response Time</p>
                          <p className="text-white font-semibold text-sm">Within the hour</p>
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold to-amber-400 text-dark font-bold px-10 py-4 rounded-2xl text-sm hover:shadow-[0_6px_30px_rgba(201,162,39,0.45)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 shrink-0 md:w-auto w-full"
                      >
                        {submitting ? (
                          <><Loader2 size={16} className="animate-spin" /> Sending...</>
                        ) : (
                          <><Send size={15} /> Get My Free Quote</>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-white/25 text-xs">
                      No obligation · No spam · We reply within the hour during UK business hours
                    </p>

                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
