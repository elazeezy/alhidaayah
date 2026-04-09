import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Al-Hidaayah Platinum Travels",
  description: "Terms and conditions for booking with Al-Hidaayah Platinum Travels.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-gradient-to-br from-dark to-primary/90 py-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-3">Terms & Conditions</h1>
          <p className="text-white/60">Last updated: April 2026</p>
        </div>
      </div>
      <div className="container-custom py-12 max-w-4xl">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card border border-gray-100 prose prose-lg max-w-none">
          <h2>1. Booking & Agreement</h2>
          <p>By booking a package with Al-Hidaayah Platinum Travels, you agree to these Terms and Conditions. A booking is confirmed upon receipt of your deposit and our written confirmation.</p>

          <h2>2. Deposits & Payment</h2>
          <p>A deposit is required at the time of booking to secure your place. The balance is due 8 weeks before departure. Full payment schedule details are provided in your booking confirmation. We accept bank transfer.</p>

          <h2>3. Cancellation by Customer</h2>
          <p>If you cancel your booking:</p>
          <ul>
            <li>More than 12 weeks before departure: Deposit retained (non-refundable)</li>
            <li>8–12 weeks before departure: 50% of full package cost</li>
            <li>4–8 weeks before departure: 75% of full package cost</li>
            <li>Less than 4 weeks before departure: 100% of full package cost</li>
          </ul>

          <h2>4. Changes to Bookings</h2>
          <p>Requests to change your booking (dates, room type, etc.) are subject to availability and may incur amendment fees. Please contact us as soon as possible if you need to make changes.</p>

          <h2>5. Visas & Travel Documents</h2>
          <p>It is the responsibility of each traveller to ensure they hold a valid passport and any required visas. We provide visa guidance but cannot be held responsible for visa refusals or delays by the Saudi authorities.</p>

          <h2>6. Health Requirements</h2>
          <p>Travellers must meet all Saudi health requirements including meningitis vaccination. It is the traveller's responsibility to be medically fit for travel.</p>

          <h2>7. ATOL Protection</h2>
          <p>Our packages that include flights are ATOL protected. You will receive an ATOL certificate upon booking.</p>

          <h2>8. Liability</h2>
          <p>We accept liability for our negligence and that of our staff and suppliers. We are not liable for events beyond our reasonable control including natural disasters, civil unrest, flight delays, or Saudi government policy changes.</p>

          <h2>9. Governing Law</h2>
          <p>These terms are governed by the laws of England and Wales.</p>
        </div>
      </div>
    </div>
  );
}
