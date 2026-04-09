import { defineField, defineType } from "sanity";

export const airlinePartnerSchema = defineType({
  name: "airlinePartner",
  title: "Airline Partners",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Airline Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "logo", title: "Airline Logo", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt Text" }] }),
    defineField({ name: "active", title: "Active", type: "boolean", initialValue: true }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
});
