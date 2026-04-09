import { defineField, defineType } from "sanity";

export const hotelSchema = defineType({
  name: "hotel",
  title: "Hotels",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Hotel Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "location", title: "Location", type: "string", options: { list: [{ title: "Makkah", value: "makkah" }, { title: "Madinah", value: "madinah" }] }, validation: (Rule) => Rule.required() }),
    defineField({ name: "starRating", title: "Star Rating", type: "number", options: { list: [3, 4, 5].map(n => ({ title: `${n} Star`, value: n })) } }),
    defineField({ name: "distanceFromHaram", title: "Distance from Haram", type: "string", placeholder: "e.g. 200m walking distance" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "amenities", title: "Amenities", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "photos", title: "Photo Gallery", type: "array", of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt Text" }] }] }),
    defineField({ name: "googleMapsLink", title: "Google Maps Link", type: "url" }),
    defineField({
      name: "roomTypes",
      title: "Room Types",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "name", title: "Room Type", type: "string" },
          { name: "description", title: "Description", type: "text" },
          { name: "image", title: "Image", type: "image", options: { hotspot: true } },
        ],
      }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "location", media: "photos.0" },
  },
});
