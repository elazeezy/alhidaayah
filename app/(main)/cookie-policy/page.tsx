import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Al-Hidaayah Platinum Travels",
  description: "How Al-Hidaayah Platinum Travels uses cookies on its website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-gradient-to-br from-dark to-primary/90 py-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-3">Cookie Policy</h1>
          <p className="text-white/60">Last updated: April 2026</p>
        </div>
      </div>
      <div className="container-custom py-12 max-w-4xl">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card border border-gray-100 prose prose-lg max-w-none">
          <h2>What Are Cookies?</h2>
          <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.</p>

          <h2>How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential cookies:</strong> Required for the website to function properly (e.g., form submissions, navigation)</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site so we can improve it</li>
            <li><strong>Marketing cookies:</strong> Used to show you relevant advertisements (if applicable)</li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.</p>

          <h2>Contact Us</h2>
          <p>If you have questions about our use of cookies, please contact info@alhidaayahplatinumtravels.co.uk.</p>
        </div>
      </div>
    </div>
  );
}
