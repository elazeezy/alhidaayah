import { defineField, defineType } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "businessName", title: "Business Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp Number", type: "string" }),
    defineField({ name: "email", title: "Email Address", type: "string" }),
    defineField({ name: "address", title: "Address", type: "text" }),
    defineField({ name: "openingHours", title: "Opening Hours", type: "text" }),
    defineField({ name: "instagram", title: "Instagram Handle", type: "string" }),
    defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
    defineField({ name: "twitter", title: "Twitter/X Handle", type: "string" }),
    defineField({ name: "atolNumber", title: "ATOL Number", type: "string" }),
    defineField({
      name: "heroImages",
      title: "Homepage Hero Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt Text" }] }],
    }),
    defineField({ name: "seoTitle", title: "Homepage SEO Title", type: "string" }),
    defineField({ name: "seoDescription", title: "Homepage SEO Description", type: "text" }),
  ],
  preview: {
    select: { title: "businessName" },
  },
});
