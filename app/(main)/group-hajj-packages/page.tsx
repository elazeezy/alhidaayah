"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Users, Send, CheckCircle, Loader2 } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import CTABanner from "@/components/sections/CTABanner";
import BookNowButton from "@/components/ui/BookNowButton";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  contactNumber: z.string().min(7, "Phone number required"),
  organisation: z.string().min(2, "Organisation / Mosque name required"),
  numberOfTravellers: z.number().min(10, "Minimum 10 travellers for group booking").max(500),
  hajjYear: z.enum(["2026", "2027"]),
  packagePreference: z.enum(["shifting-economy", "shifting-premium", "non-shifting-economy", "non-shifting-premium", "unsure"]),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const benefits = [
  {
    icon: "🕋",
    title: "Dedicated Hajj Scholar",
    desc: "Every group travels with an experienced and knowledgeable scholar who guides the rituals, delivers daily reminders, and provides spiritual support throughout all five days of Hajj.",
  },
  {
    icon: "⛺",
    title: "Reserved Mina Tent Section",
    desc: "Your group will have a reserved section within our Mina tents — keeping your community together during the most sacred days of Hajj.",
  },
  {
    icon: "🚌",
    title: "Private Group Transportation",
    desc: "Exclusive coach transport for your group across all Hajj sites — Makkah, Madinah, Mina, Muzdalifah, and Arafat — without mixing with other groups.",
  },
  {
    icon: "💰",
    title: "Exclusive Group Rates",
    desc: "Group bookings receive preferential pricing not available to individual pilgrims. The larger your group, the better the rate.",
  },
  {
    icon: "📋",
    title: "Full Hajj Visa Coordination",
    desc: "We handle all visa documentation and submission for your entire group — a complex process simplified into a single managed service.",
  },
  {
    icon: "📱",
    title: "Dedicated Group WhatsApp",
    desc: "A private WhatsApp group for your entire party with round-the-clock support from our team from first inquiry through to your safe return home.",
  },
];

const packageOptions = [
  { value: "shifting-economy", label: "Shifting — Economy (3★)" },
  { value: "shifting-premium", label: "Shifting — Premium (5★)" },
  { value: "non-shifting-economy", label: "Non-Shifting — Economy (3★)" },
  { value: "non-shifting-premium", label: "Non-Shifting — Premium (5★)" },
  { value: "unsure", label: "Not sure yet — advise me" },
];

const hajjProcess = [
  { step: 1, title: "Register Interest", desc: "Submit your group enquiry. We'll get in touch within 24 hours to discuss your requirements in detail." },
  { step: 2, title: "Custom Quote", desc: "We prepare a bespoke group quote based on your size, preferred package, and any specific requirements." },
  { step: 3, title: "Secure Your Places", desc: "Pay a group deposit to secure your Hajj quota allocation — places are very limited and fill quickly." },
  { step: 4, title: "Visa & Logistics", desc: "We manage all visa applications, documentation, flights, and hotel bookings for every member of your group." },
  { step: 5, title: "Travel Together", desc: "Depart as a community, perform the blessed rites of Hajj together, and return home transformed." },
];

export default function GroupHajjPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { numberOfTravellers: 20 },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "group-hajj-inquiry" }),
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

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-dark via-dark/95 to-primary/80 py-20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hajj-group-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon
                  points="40,5 75,27.5 75,52.5 40,75 5,52.5 5,27.5"
                  fill="none" stroke="#C9A227" strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hajj-group-pattern)" />
          </svg>
        </div>
        {/* Gold glow blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-16 h-16 bg-gold/20 border border-gold/30 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Users size={32} className="text-gold" />
            </div>
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
              Group Hajj Packages 2026 / 2027
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Perform Hajj Together<br />
              <span className="text-gold">As a Community</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              There is something truly powerful about a mosque or community undertaking the
              greatest pilgrimage in Islam as one. Let us organise every detail of your group Hajj —
              from visa to Mina tent — so your community can focus entirely on worship.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Important notice ─────────────────────────────────────── */}
      <div className="container-custom pt-10 pb-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gold/10 border border-gold/30 rounded-2xl p-6 flex gap-4"
        >
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <div>
            <h3 className="font-heading font-bold text-dark mb-1">
              Hajj Quota — Limited Places Available
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hajj quota allocations from the UK are strictly limited each year by the Saudi authorities.
              Group places must be secured well in advance — often 6 to 12 months ahead.
              We strongly encourage you to register your group&apos;s interest as early as possible to avoid
              disappointment insha&apos;Allah.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.groupHajj)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#1fad53] transition-colors"
              >
                Register Group Interest via WhatsApp
              </a>
              <BookNowButton packageSlug="group-hajj" label="Reserve with Deposit" size="sm" className="px-4" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left: Info ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Why Group Hajj */}
            <motion.div
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-8 shadow-card border border-gray-100"
            >
              <h2 className="font-heading font-bold text-dark text-2xl mb-4">
                Why Book a Group Hajj?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Hajj is the fifth pillar of Islam — the most profound act of worship a Muslim can
                undertake. Performing it alongside your community, your mosque, or your family
                multiplies the spiritual experience immeasurably. You make Du&apos;a together on the plain
                of Arafat, stand side by side at Muzdalifah, and support one another through
                the rituals as one unified body. Al-Hidaayah Platinum Travels specialises in
                making this communal journey seamless, spiritually rich, and truly unforgettable.
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
            </motion.div>

            {/* Package types overview */}
            <motion.div
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-8 shadow-card border border-gray-100"
            >
              <h2 className="font-heading font-bold text-dark text-2xl mb-6">
                Group Hajj Package Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    tag: "Shifting — Economy",
                    stars: "3★",
                    desc: "Groups move between Makkah and Madinah hotels for a cost-effective Hajj experience. Comfortable 3-star accommodation and all essentials included.",
                    price: "From £6,500 pp",
                    color: "from-primary/80 to-primary",
                  },
                  {
                    tag: "Shifting — Premium",
                    stars: "5★",
                    desc: "A premium Shifting Hajj with 5-star hotels, VIP air-conditioned Mina tents, and dedicated personal guidance for your group.",
                    price: "From £9,500 pp",
                    color: "from-dark to-primary/90",
                  },
                  {
                    tag: "Non-Shifting — Economy",
                    stars: "3★",
                    desc: "Your group stays in the same hotel near the Haram throughout your Makkah stay. Ideal for those seeking convenience with no hotel changes.",
                    price: "From £7,500 pp",
                    color: "from-primary/80 to-primary",
                  },
                  {
                    tag: "Non-Shifting — Premium",
                    stars: "5★",
                    desc: "The ultimate group Hajj experience. Stay in a prestigious 5-star hotel adjacent to the Haram for the entire Makkah portion of your journey.",
                    price: "From £11,000 pp",
                    color: "from-dark to-primary/90",
                  },
                ].map((pkg) => (
                  <div
                    key={pkg.tag}
                    className={`bg-gradient-to-br ${pkg.color} rounded-2xl p-6 text-white`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <p className="text-gold/80 text-xs font-bold uppercase tracking-wider">{pkg.tag}</p>
                      <span className="bg-gold text-dark text-xs font-bold px-2.5 py-1 rounded-full">{pkg.stars}</span>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed mb-4">{pkg.desc}</p>
                    <div className="border-t border-white/15 pt-3">
                      <p className="text-white/50 text-xs mb-0.5">Group pricing</p>
                      <p className="font-heading font-bold text-gold text-xl">{pkg.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-4 text-center">
                All group packages include return flights, visa assistance, Mina tents, transportation, and scholar guidance.
                Final pricing is confirmed upon group size and registration.
              </p>
            </motion.div>

            {/* How it works */}
            <motion.div
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="bg-dark rounded-2xl p-8 shadow-card"
            >
              <h2 className="font-heading font-bold text-white text-2xl mb-8">
                How Group Hajj Booking Works
              </h2>
              <div className="space-y-6">
                {hajjProcess.map((step, i) => (
                  <div key={step.step} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                        <span className="font-heading font-bold text-dark text-sm">{step.step}</span>
                      </div>
                      {i < hajjProcess.length - 1 && (
                        <div className="w-px flex-1 bg-white/10 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-semibold text-white text-sm mb-1">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Minimum group size note */}
            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-dark text-lg mb-2">Minimum Group Size</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our group Hajj packages are available for parties of <strong>10 or more travellers</strong>.
                For groups of 50 or more, bespoke arrangements including private aircraft charter and
                exclusive hotel floors may be available. For queries about individual Hajj packages,
                please visit our{" "}
                <a href="/hajj-packages" className="text-primary font-semibold underline underline-offset-2">
                  Hajj Packages
                </a>{" "}
                page.
              </p>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.groupHajj)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 btn-primary text-sm"
              >
                Discuss Your Group on WhatsApp
              </a>
            </div>
          </div>

          {/* ── Right: Enquiry Form ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 sticky top-24"
            >
              <h3 className="font-heading font-bold text-dark text-lg mb-1">
                Group Hajj Enquiry
              </h3>
              <p className="text-gray-400 text-xs mb-6">
                We will respond within 24 hours insha&apos;Allah.
              </p>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={36} className="text-primary" />
                  </div>
                  <h4 className="font-heading font-bold text-dark text-lg mb-2">
                    JazakAllah Khair!
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Your group Hajj enquiry has been received. Our team will be in touch
                    within 24 hours insha&apos;Allah to discuss your requirements.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                  {/* Text fields */}
                  {[
                    { name: "name", label: "Your Full Name *", type: "text", placeholder: "Muhammad Ali" },
                    { name: "email", label: "Email Address *", type: "email", placeholder: "contact@mosque.org" },
                    { name: "contactNumber", label: "Contact Number *", type: "tel", placeholder: "+44 7xxx xxx xxx" },
                    { name: "organisation", label: "Organisation / Mosque *", type: "text", placeholder: "Al-Noor Mosque Bradford" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-semibold text-dark mb-1.5">
                        {field.label}
                      </label>
                      <input
                        {...register(field.name as keyof FormData)}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
                      />
                      {errors[field.name as keyof FormData] && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors[field.name as keyof FormData]?.message}
                        </p>
                      )}
                    </div>
                  ))}

                  {/* Number of travellers */}
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">
                      Number of Travellers *
                    </label>
                    <input
                      {...register("numberOfTravellers", { valueAsNumber: true })}
                      type="number"
                      min={10}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
                    />
                    {errors.numberOfTravellers && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.numberOfTravellers.message}
                      </p>
                    )}
                  </div>

                  {/* Hajj Year */}
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">
                      Hajj Year *
                    </label>
                    <select
                      {...register("hajjYear")}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary bg-white"
                    >
                      <option value="">Select Hajj year</option>
                      <option value="2026">Hajj 2026 (Dhul Hijjah 1447)</option>
                      <option value="2027">Hajj 2027 (Dhul Hijjah 1448)</option>
                    </select>
                    {errors.hajjYear && (
                      <p className="text-red-500 text-xs mt-1">{errors.hajjYear.message}</p>
                    )}
                  </div>

                  {/* Package preference */}
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">
                      Package Preference *
                    </label>
                    <select
                      {...register("packagePreference")}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary bg-white"
                    >
                      <option value="">Select package type</option>
                      {packageOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.packagePreference && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.packagePreference.message}
                      </p>
                    )}
                  </div>

                  {/* Additional info */}
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">
                      Additional Requirements
                    </label>
                    <textarea
                      {...register("additionalInfo")}
                      rows={3}
                      placeholder="Wheelchair access, dietary needs, mixed family group, special requests..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary resize-none bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Group Hajj Enquiry
                      </>
                    )}
                  </button>

                  {/* WhatsApp alternative */}
                  <a
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.groupHajj)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#1fad53] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Or Chat on WhatsApp
                  </a>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>

      <CTABanner />
    </div>
  );
}
