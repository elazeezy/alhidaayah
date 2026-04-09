import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Al-Hidaayah Platinum Travels",
  description: "How Al-Hidaayah Platinum Travels collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-gradient-to-br from-dark to-primary/90 py-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/60">Last updated: April 2026</p>
        </div>
      </div>
      <div className="container-custom py-12 max-w-4xl">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card border border-gray-100 prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>Al-Hidaayah Platinum Travels (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our website or services.</p>

          <h2>2. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as:</p>
          <ul>
            <li>Name, email address, phone number</li>
            <li>Travel preferences and booking details</li>
            <li>Passport and visa information (when processing bookings)</li>
            <li>Payment information (processed securely, not stored on our servers)</li>
            <li>Communications and correspondence with us</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process and manage your Umrah or Hajj booking</li>
            <li>Communicate with you about your booking and travel arrangements</li>
            <li>Provide customer support</li>
            <li>Send you relevant updates about your journey</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>We do not sell, trade, or transfer your personal information to third parties except as necessary to deliver our travel services (e.g., airlines, hotels, visa processing authorities) or as required by law.</p>

          <h2>5. Data Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>

          <h2>6. Your Rights</h2>
          <p>Under UK GDPR, you have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@alhidaayahplatinumtravels.co.uk.</p>

          <h2>7. Cookies</h2>
          <p>Our website uses cookies to improve your browsing experience. Please see our Cookie Policy for more information.</p>

          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at info@alhidaayahplatinumtravels.co.uk.</p>
        </div>
      </div>
    </div>
  );
}
