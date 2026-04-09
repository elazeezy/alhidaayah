import { defineField, defineType } from "sanity";

export const gallerySchema = defineType({
  name: "galleryImage",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Image Title", type: "string" }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: [{ title: "Makkah", value: "makkah" }, { title: "Madinah", value: "madinah" }, { title: "General", value: "general" }, { title: "Group", value: "group" }] } }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt Text" }] }),
    defineField({ name: "caption", title: "Caption", type: "string" }),
    defineField({ name: "active", title: "Active", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
