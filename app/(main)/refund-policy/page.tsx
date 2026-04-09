import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Al-Hidaayah Platinum Travels",
  description: "Our refund and cancellation policy for Umrah and Hajj bookings.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-gradient-to-br from-dark to-primary/90 py-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-3">Refund Policy</h1>
          <p className="text-white/60">Last updated: April 2026</p>
        </div>
      </div>
      <div className="container-custom py-12 max-w-4xl">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card border border-gray-100 prose prose-lg max-w-none">
          <h2>Our Commitment</h2>
          <p>We understand that circumstances can change, and we strive to be as fair and transparent as possible with our refund policy. Please read the following carefully before booking.</p>

          <h2>Deposits</h2>
          <p>All deposits paid to secure a booking are non-refundable. This covers our administrative costs, hotel reservations, and visa processing that begin immediately upon booking confirmation.</p>

          <h2>Cancellation Refunds</h2>
          <div className="overflow-x-auto">
            <table>
              <thead><tr><th>Notice Period</th><th>Refund Amount</th></tr></thead>
              <tbody>
                <tr><td>More than 12 weeks</td><td>Full amount less deposit</td></tr>
                <tr><td>8–12 weeks</td><td>50% of total package cost</td></tr>
                <tr><td>4–8 weeks</td><td>25% of total package cost</td></tr>
                <tr><td>Less than 4 weeks</td><td>No refund</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Cancellation by Al-Hidaayah Platinum Travels</h2>
          <p>If we cancel your booking due to circumstances within our control, you will receive a full refund of all monies paid. If we cancel due to circumstances outside our control (e.g., Saudi government restrictions, natural disasters), we will work with you to reschedule your journey or provide a credit note.</p>

          <h2>Visa Refusals</h2>
          <p>Visa fees paid to the Saudi authorities are non-refundable in the event of a refusal. However, if your visa is refused and you are unable to travel, we will work with you to reschedule for a future date at no additional cost (subject to availability and hotel/flight costs).</p>

          <h2>Travel Insurance</h2>
          <p>We strongly recommend purchasing comprehensive travel insurance to cover cancellation, medical emergencies, and other unforeseen circumstances. We can assist you in finding appropriate coverage.</p>

          <h2>How to Cancel</h2>
          <p>All cancellations must be made in writing to info@alhidaayahplatinumtravels.co.uk. The cancellation date is the date we receive your written notice. Refunds (where applicable) are processed within 14 working days.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about our refund policy, please contact us at info@alhidaayahplatinumtravels.co.uk or WhatsApp +447879797589.</p>
        </div>
      </div>
    </div>
  );
}
