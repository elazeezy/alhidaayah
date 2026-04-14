import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CLIENT_EMAIL = process.env.CLIENT_EMAIL || "info@alhidaayahplatinumtravels.co.uk";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Al-Hidaayah Platinum Travels <onboarding@resend.dev>";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, email, phone, contactNumber, message, packageInterest, packageName, adults, children, travelDate, specialRequirements, organisation, numberOfTravellers, preferredDates, hajjYear, packagePreference, additionalInfo } = body;
    const phoneOrContact = phone || contactNumber || "";

    // Build email content based on form type
    let subject = "";
    let htmlContent = "";
    let replySubject = "";
    let replyHtml = "";

    if (type === "inquiry" || type === "package-inquiry") {
      subject = `New Umrah Package Inquiry — ${packageName || "General"} — ${name}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f0e8; padding: 20px; border-radius: 12px;">
          <div style="background: #1A5C38; color: white; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">New Package Inquiry</h1>
            <p style="margin: 8px 0 0; opacity: 0.8;">Al-Hidaayah Platinum Travels</p>
          </div>
          <div style="background: white; padding: 28px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 40%; color: #0D1B2A;">Package Interest:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #C9A227; font-weight: bold;">${packageName || "General Inquiry"}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0D1B2A;">Full Name:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0D1B2A;">Email:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0D1B2A;">Phone:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0D1B2A;">Adults:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${adults || "N/A"}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0D1B2A;">Children:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${children || 0}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0D1B2A;">Travel Date:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${travelDate || "N/A"}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #0D1B2A; vertical-align: top;">Special Requirements:</td><td style="padding: 10px 0;">${specialRequirements || "None"}</td></tr>
            </table>
            <div style="margin-top: 24px; background: #1A5C38; color: white; padding: 16px; border-radius: 8px; text-align: center;">
              <a href="mailto:${email}" style="color: white; font-weight: bold; text-decoration: none; margin-right: 16px;">Reply by Email</a>
              <a href="https://wa.me/${phone?.replace(/[^0-9]/g, '')}" style="color: #C9A227; font-weight: bold; text-decoration: none;">Reply via WhatsApp</a>
            </div>
          </div>
        </div>
      `;

      replySubject = `We've received your inquiry — Al-Hidaayah Platinum Travels`;
      replyHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f0e8; padding: 20px; border-radius: 12px;">
          <div style="background: #1A5C38; color: white; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">Al-Hidaayah Platinum Travels</h1>
            <p style="margin: 8px 0 0; opacity: 0.8;">Guidance with top-tier service</p>
          </div>
          <div style="background: white; padding: 28px; border-radius: 0 0 8px 8px;">
            <p style="color: #0D1B2A; font-size: 18px; font-weight: bold;">Assalamu Alaikum, ${name}!</p>
            <p style="color: #555; line-height: 1.7;">JazakAllah Khair for reaching out to Al-Hidaayah Platinum Travels. We have received your inquiry regarding <strong>${packageName || "our Umrah packages"}</strong> and our team will be in touch with you within 24 hours insha&apos;Allah.</p>
            <p style="color: #555; line-height: 1.7;">In the meantime, feel free to WhatsApp us directly for the fastest response:</p>
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://wa.me/447879797589?text=Assalamu%20Alaikum!%20I%20just%20submitted%20an%20inquiry%20about%20${encodeURIComponent(packageName || 'Umrah packages')}%20and%20wanted%20to%20follow%20up." style="background: #25D366; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
                💬 WhatsApp Us Now
              </a>
            </div>
            <p style="color: #555; line-height: 1.7; font-size: 14px; border-top: 1px solid #eee; padding-top: 16px;">
              Warm regards,<br/>
              <strong>Al-Hidaayah Platinum Travels</strong><br/>
              <em>Guidance with top-tier service</em>
            </p>
          </div>
        </div>
      `;
    } else if (type === "group-inquiry") {
      subject = `New Group Umrah Inquiry — ${organisation} — ${numberOfTravellers} Travellers`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A5C38;">New Group Booking Inquiry</h2>
          <p><strong>Organisation:</strong> ${organisation}</p>
          <p><strong>Contact Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneOrContact}</p>
          <p><strong>Number of Travellers:</strong> ${numberOfTravellers}</p>
          <p><strong>Preferred Dates:</strong> ${preferredDates}</p>
          <p><strong>Additional Info:</strong> ${additionalInfo || "None"}</p>
        </div>
      `;
      replySubject = `Group Inquiry Received — Al-Hidaayah Platinum Travels`;
      replyHtml = `<div style="font-family: Arial, sans-serif;"><p>Assalamu Alaikum ${name},</p><p>JazakAllah Khair for your group booking inquiry. Our dedicated group team will be in touch within 24 hours insha'Allah.</p><p>Al-Hidaayah Platinum Travels</p></div>`;
    } else if (type === "group-hajj-inquiry") {
      const packageLabel: Record<string, string> = {
        "shifting-economy": "Shifting — Economy (3★)",
        "shifting-premium": "Shifting — Premium (5★)",
        "non-shifting-economy": "Non-Shifting — Economy (3★)",
        "non-shifting-premium": "Non-Shifting — Premium (5★)",
        "unsure": "Not sure yet",
      };
      subject = `New Group Hajj Inquiry — ${organisation} — ${numberOfTravellers} Travellers — Hajj ${hajjYear}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f0e8; padding: 20px; border-radius: 12px;">
          <div style="background: #0D1B2A; color: white; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">New Group Hajj Inquiry</h1>
            <p style="margin: 8px 0 0; opacity: 0.8;">Al-Hidaayah Platinum Travels</p>
          </div>
          <div style="background: white; padding: 28px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 40%; color: #0D1B2A;">Organisation:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #C9A227; font-weight: bold;">${organisation}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0D1B2A;">Contact Name:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0D1B2A;">Email:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0D1B2A;">Phone:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:${phoneOrContact}">${phoneOrContact}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0D1B2A;">No. of Travellers:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">${numberOfTravellers}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0D1B2A;">Hajj Year:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">Hajj ${hajjYear}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0D1B2A;">Package Preference:</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${packageLabel[packagePreference] || packagePreference}</td></tr>
              <tr><td style="padding: 10px 0; font-weight: bold; color: #0D1B2A; vertical-align: top;">Additional Info:</td><td style="padding: 10px 0;">${additionalInfo || "None"}</td></tr>
            </table>
            <div style="margin-top: 24px; background: #0D1B2A; color: white; padding: 16px; border-radius: 8px; text-align: center;">
              <a href="mailto:${email}" style="color: white; font-weight: bold; text-decoration: none; margin-right: 16px;">Reply by Email</a>
              <a href="https://wa.me/${phoneOrContact.replace(/[^0-9]/g, '')}" style="color: #C9A227; font-weight: bold; text-decoration: none;">Reply via WhatsApp</a>
            </div>
          </div>
        </div>
      `;
      replySubject = `Group Hajj Inquiry Received — Al-Hidaayah Platinum Travels`;
      replyHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f0e8; padding: 20px; border-radius: 12px;">
          <div style="background: #0D1B2A; color: white; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">Al-Hidaayah Platinum Travels</h1>
            <p style="margin: 8px 0 0; opacity: 0.8;">Guidance with top-tier service</p>
          </div>
          <div style="background: white; padding: 28px; border-radius: 0 0 8px 8px;">
            <p style="color: #0D1B2A; font-size: 18px; font-weight: bold;">Assalamu Alaikum, ${name}!</p>
            <p style="color: #555; line-height: 1.7;">JazakAllah Khair for your Group Hajj inquiry on behalf of <strong>${organisation}</strong>. We have received your request for <strong>${numberOfTravellers} travellers</strong> for <strong>Hajj ${hajjYear}</strong> and our dedicated Hajj team will be in touch within 24 hours insha&apos;Allah.</p>
            <p style="color: #555; line-height: 1.7;">Hajj quota places are limited — we will do our best to secure your group insha&apos;Allah. For the fastest response, you can also reach us on WhatsApp:</p>
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://wa.me/447879797589?text=Assalamu%20Alaikum!%20I%20just%20submitted%20a%20Group%20Hajj%20inquiry%20for%20${numberOfTravellers}%20travellers%20and%20wanted%20to%20follow%20up." style="background: #25D366; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
                💬 WhatsApp Us Now
              </a>
            </div>
            <p style="color: #555; line-height: 1.7; font-size: 14px; border-top: 1px solid #eee; padding-top: 16px;">
              Warm regards,<br/>
              <strong>Al-Hidaayah Platinum Travels</strong><br/>
              <em>Guidance with top-tier service</em>
            </p>
          </div>
        </div>
      `;
    } else {
      subject = `New Contact Form Message — ${name}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f0e8; padding: 20px; border-radius: 12px;">
          <div style="background: #1A5C38; color: white; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">New Contact Message</h1>
          </div>
          <div style="background: white; padding: 28px; border-radius: 0 0 8px 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Package Interest:</strong> ${packageInterest || "General"}</p>
            <p><strong>Message:</strong><br/>${message}</p>
          </div>
        </div>
      `;
      replySubject = `We've received your message — Al-Hidaayah Platinum Travels`;
      replyHtml = `<div style="font-family: Arial, sans-serif;"><p>Assalamu Alaikum ${name},</p><p>JazakAllah Khair for your message. Our team will get back to you within 24 hours insha'Allah.</p><p>Best regards,<br/>Al-Hidaayah Platinum Travels</p></div>`;
    }

    // Send notification to client
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "your_resend_api_key") {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [CLIENT_EMAIL],
        replyTo: email,
        subject,
        html: htmlContent,
      });

      // Send auto-reply to customer
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: replySubject,
        html: replyHtml,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ success: true }, { status: 200 }); // Still return 200 to not break UX
  }
}
