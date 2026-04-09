import { defineField, defineType } from "sanity";

export const packageSchema = defineType({
  name: "package",
  title: "Packages",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Package Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "type", title: "Package Type", type: "string", options: { list: [{ title: "Umrah", value: "umrah" }, { title: "Hajj", value: "hajj" }] }, validation: (Rule) => Rule.required() }),
    defineField({ name: "hajjType", title: "Hajj Type", type: "string", options: { list: [{ title: "Shifting Hajj", value: "shifting" }, { title: "Non-Shifting Hajj", value: "non-shifting" }] }, hidden: ({ document }) => document?.type !== "hajj" }),
    defineField({ name: "starRating", title: "Star Rating", type: "number", options: { list: [{ title: "3 Star", value: 3 }, { title: "4 Star", value: 4 }, { title: "5 Star", value: 5 }] }, validation: (Rule) => Rule.required() }),
    defineField({ name: "priceWithFlights", title: "Price With Flights (£)", type: "number", validation: (Rule) => Rule.required() }),
    defineField({ name: "priceWithoutFlights", title: "Price Without Flights (£)", type: "number" }),
    defineField({ name: "duration", title: "Duration (Display)", type: "string", placeholder: "e.g. 10 Days" }),
    defineField({ name: "durationDays", title: "Duration (Days)", type: "number" }),
    defineField({ name: "travelPeriod", title: "Travel Period", type: "string", placeholder: "e.g. August / September 2026" }),
    defineField({ name: "departureCities", title: "Departure Cities", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "departureMonths", title: "Departure Months", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt Text" }] }),
    defineField({ name: "galleryImages", title: "Gallery Images", type: "array", of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt Text" }] }] }),
    defineField({ name: "overview", title: "Package Overview", type: "text" }),
    defineField({ name: "inclusions", title: "What's Included", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "exclusions", title: "What's NOT Included", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "hotelMakkah", title: "Hotel in Makkah", type: "reference", to: [{ type: "hotel" }] }),
    defineField({ name: "hotelMadinah", title: "Hotel in Madinah", type: "reference", to: [{ type: "hotel" }] }),
    defineField({
      name: "itinerary",
      title: "Day-by-Day Itinerary",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "day", title: "Day Number", type: "number" },
          { name: "title", title: "Day Title", type: "string" },
          { name: "description", title: "Description", type: "text" },
          { name: "location", title: "Location", type: "string" },
        ],
      }],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "question", title: "Question", type: "string" },
          { name: "answer", title: "Answer", type: "text" },
        ],
      }],
    }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text" }),
    defineField({ name: "active", title: "Active / Live", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: { title: "title", subtitle: "travelPeriod", media: "heroImage" },
  },
});
