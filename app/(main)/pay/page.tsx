"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CreditCard, Shield, Lock, CheckCircle, MessageCircle, ChevronDown } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import type { Metadata } from "next";

const PAYABLE_PACKAGES = [
  { slug: "basic-umrah-package-2026",       label: "3★ Umrah Package — £1,900 per person",     deposit: 200, full: 1900 },
  { slug: "premium-umrah-package-2026",     label: "5★ Umrah Package — £2,100 per person",     deposit: 250, full: 2100 },
  { slug: "group-umrah",                    label: "Group Umrah Booking",                       deposit: 150, full: null },
  { slug: "ramadan-umrah-2026",             label: "Ramadan Umrah Package",                     deposit: 200, full: null },
  { slug: "shifting-hajj-economy-2026",     label: "Hajj 2026 — Shifting Economy",              deposit: 500, full: null },
  { slug: "shifting-hajj-premium-2026",     label: "Hajj 2026 — Shifting Premium",              deposit: 500, full: null },
  { slug: "non-shifting-hajj-economy-2026", label: "Hajj 2026 — Non-Shifting Economy",          deposit: 500, full: null },
  { slug: "non-shifting-hajj-premium-2026", label: "Hajj 2026 — Non-Shifting Premium",          deposit: 500, full: null },
  { slug: "group-hajj",                     label: "Group Hajj Booking",                        deposit: 500, full: null },
];

function PayPageContent() {
  const searchParams = useSearchParams();
  const urlPackage = searchParams.get("package");

  const [selectedSlug, setSelectedSlug] = useState(urlPackage ?? "");
  const [paymentType, setPaymentType] = useState<"deposit" | "full">("deposit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (urlPackage) setSelectedSlug(urlPackage);
  }, [urlPackage]);

  const pkg = PAYABLE_PACKAGES.find((p) => p.slug === selectedSlug);
  const depositAmount = pkg ? pkg.deposit * Number(passengers) : null;
  const fullAmount = pkg?.full ? pkg.full * Number(passengers) : null;
  const amountDue = paymentType === "deposit" ? depositAmount : fullAmount;

  const whatsappMessage = pkg
    ? `Assalamu Alaikum! I would like to complete my booking for the *${pkg.label.split(" — ")[0]}*.\n\nName: ${name || "—"}\nEmail: ${email || "—"}\nPhone: ${phone || "—"}\nPassengers: ${passengers}\nPayment type: ${paymentType === "deposit" ? `Deposit (£${depositAmount})` : `Full payment (£${fullAmount})`}\n\nPlease confirm my booking. JazakAllah Khair.`
    : `Assalamu Alaikum! I would like to make a booking with Al-Hidaayah Platinum Travels. Please guide me on the next steps. JazakAllah Khair.`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-card border border-gray-100 p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-primary" />
          </div>
          <h2 className="font-heading font-bold text-dark text-2xl mb-3">Booking Request Received</h2>
          <p className="text-gray-500 mb-2">
            JazakAllah Khair, <span className="font-semibold text-dark">{name}</span>.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Our team will contact you within <strong>24 hours</strong> via WhatsApp or email to confirm your booking and send payment instructions insha&apos;Allah.
          </p>

          <div className="bg-cream rounded-2xl p-5 mb-6 text-left space-y-2 text-sm">
            <h3 className="font-heading font-semibold text-dark mb-3">What happens next</h3>
            {[
              "Our team reviews your booking request",
              "We contact you within 24 hours to confirm availability",
              "Secure payment link sent to your email",
              "Visa and document processing begins",
              "You travel with full peace of mind",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold">{i + 1}</span>
                </div>
                <span className="text-gray-600">{step}</span>
              </div>
            ))}
          </div>

          <a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-semibold py-3 rounded-xl hover:bg-[#1fad53] transition-colors mb-3"
          >
            <MessageCircle size={18} />
            Chat with Us on WhatsApp
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="text-sm text-gray-400 hover:text-primary transition-colors"
          >
            Make another booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-gradient-to-br from-dark to-primary/90 py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-4">
            <Lock size={14} className="text-gold" />
            <span className="text-gold text-xs font-semibold uppercase tracking-wider">Secure Booking</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-3">
            Book Your Sacred Journey
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Reserve your place with a small deposit. Our team will confirm your booking and handle everything else.
          </p>
        </div>
      </div>

      <div className="container-custom py-10 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: Booking Form */}
          <div className="lg:col-span-3 space-y-6">

            {/* Package Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <h2 className="font-heading font-bold text-dark text-lg mb-4">1. Select Your Package</h2>
              <div className="relative">
                <select
                  value={selectedSlug}
                  onChange={(e) => setSelectedSlug(e.target.value)}
                  className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white pr-10"
                >
                  <option value="">Choose a package...</option>
                  {PAYABLE_PACKAGES.map((p) => (
                    <option key={p.slug} value={p.slug}>{p.label}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Number of Passengers */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <h2 className="font-heading font-bold text-dark text-lg mb-4">2. Number of Passengers</h2>
              <div className="relative">
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white pr-10"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>{n} passenger{n > 1 ? "s" : ""}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Payment Type */}
            {pkg && (
              <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
                <h2 className="font-heading font-bold text-dark text-lg mb-4">3. Payment Option</h2>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPaymentType("deposit")}
                    className={`rounded-xl border-2 p-4 text-left transition-all ${
                      paymentType === "deposit"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-semibold text-dark text-sm mb-1">Deposit</p>
                    <p className="text-2xl font-heading font-bold text-primary">
                      £{depositAmount?.toLocaleString()}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">Reserve your spot now</p>
                  </button>

                  <button
                    onClick={() => setPaymentType("full")}
                    disabled={!fullAmount}
                    className={`rounded-xl border-2 p-4 text-left transition-all ${
                      !fullAmount
                        ? "border-gray-100 bg-gray-50 opacity-60 cursor-not-allowed"
                        : paymentType === "full"
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-semibold text-dark text-sm mb-1">Full Payment</p>
                    <p className="text-2xl font-heading font-bold text-primary">
                      {fullAmount ? `£${fullAmount.toLocaleString()}` : "Contact us"}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">Pay in full — save admin time</p>
                  </button>
                </div>
              </div>
            )}

            {/* Passenger Details */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <h2 className="font-heading font-bold text-dark text-lg mb-4">
                {pkg ? "4." : "3."} Your Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">Full Name *</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 7xxx xxx xxx"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Section — Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading font-bold text-dark text-lg">
                  {pkg ? "5." : "4."} Payment Details
                </h2>
                <div className="flex items-center gap-1.5 bg-[#635BFF]/10 border border-[#635BFF]/30 rounded-full px-3 py-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#635BFF"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/></svg>
                  <span className="text-[#635BFF] text-xs font-semibold">Powered by Stripe</span>
                </div>
              </div>

              {/* Card fields — visual placeholder */}
              <div className="space-y-3 opacity-40 pointer-events-none select-none">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">Card Number</label>
                  <div className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-400 bg-gray-50 flex items-center gap-3">
                    <CreditCard size={16} className="text-gray-300" />
                    <span>1234 5678 9012 3456</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">Expiry</label>
                    <div className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-400 bg-gray-50">MM / YY</div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1.5">CVV</label>
                    <div className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-400 bg-gray-50">•••</div>
                  </div>
                </div>
              </div>

              {/* Coming Soon overlay */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex flex-col items-center justify-center rounded-2xl">
                <div className="bg-gold/10 border border-gold/40 rounded-2xl px-6 py-4 text-center max-w-xs">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-2">
                    <Shield size={20} className="text-gold" />
                  </div>
                  <p className="font-heading font-bold text-dark text-sm mb-1">Secure Online Payment</p>
                  <p className="text-gray-500 text-xs">Stripe card payments launching very soon. Complete your booking below and our team will send you a secure payment link.</p>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={() => {
                if (!name || !email || !phone || !selectedSlug) return;
                setSubmitted(true);
              }}
              disabled={!name || !email || !phone || !selectedSlug}
              className="w-full flex items-center justify-center gap-3 bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base"
            >
              <Lock size={18} />
              Confirm Booking Request
            </button>
            <p className="text-center text-xs text-gray-400">
              By submitting, you agree to our Terms &amp; Conditions. No payment is taken until our team confirms your booking.
            </p>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-2 space-y-5">
            {/* Summary Card */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 sticky top-24">
              <h3 className="font-heading font-bold text-dark text-base mb-4 pb-3 border-b border-gray-100">
                Booking Summary
              </h3>

              {pkg ? (
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Package</p>
                    <p className="text-dark font-semibold text-sm">{pkg.label.split(" — ")[0]}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Passengers</p>
                    <p className="text-dark font-semibold text-sm">{passengers} person{Number(passengers) > 1 ? "s" : ""}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Payment Type</p>
                    <p className="text-dark font-semibold text-sm capitalize">{paymentType}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-3 mt-3">
                    <div className="flex items-center justify-between">
                      <p className="text-dark font-semibold">Amount Due</p>
                      <p className="font-heading font-bold text-primary text-2xl">
                        {amountDue ? `£${amountDue.toLocaleString()}` : "TBC"}
                      </p>
                    </div>
                    {paymentType === "deposit" && fullAmount && (
                      <p className="text-gray-400 text-xs mt-1 text-right">
                        Remaining balance: £{(fullAmount - (depositAmount ?? 0)).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-sm">Select a package to see your summary.</p>
              )}

              {/* Trust badges */}
              <div className="mt-6 pt-5 border-t border-gray-100 space-y-2.5">
                {[
                  { icon: Lock, text: "256-bit SSL encrypted" },
                  { icon: Shield, text: "No payment taken until confirmed" },
                  { icon: CheckCircle, text: "Dedicated support throughout" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 text-xs text-gray-500">
                    <Icon size={14} className="text-primary flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Alternative */}
            <div className="bg-[#25D366]/5 border border-[#25D366]/20 rounded-2xl p-5">
              <p className="text-sm font-semibold text-dark mb-1">Prefer to book via WhatsApp?</p>
              <p className="text-xs text-gray-500 mb-3">Our team is available Mon–Sat 9am–6pm for instant assistance.</p>
              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-[#1fad53] transition-colors"
              >
                <MessageCircle size={15} />
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PayPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
    }>
      <PayPageContent />
    </Suspense>
  );
}
