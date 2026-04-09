import { defineField, defineType } from "sanity";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonials / Reviews",
  type: "document",
  fields: [
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({
      name: "starRating",
      title: "Star Rating",
      type: "number",
      options: {
        list: [1, 2, 3, 4, 5].map(n => ({ title: `${n} Star${n > 1 ? "s" : ""}`, value: n })),
      },
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "status",
      title: "Review Status",
      type: "string",
      options: {
        list: [
          { title: "Approved — shows on website", value: "approved" },
          { title: "Pending — awaiting review", value: "pending" },
          { title: "Declined — will not show", value: "declined" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
      description: "Reviews with 3 stars or above can be approved. Reviews below 3 stars are automatically declined.",
      // Validation: block approval of low-rated reviews
      validation: (Rule) =>
        Rule.custom((status, context) => {
          const starRating = (context.document as { starRating?: number })?.starRating ?? 0;
          if (status === "approved" && starRating < 3) {
            return "This review cannot be approved — star rating is below 3. Only reviews with 3 stars or above may be published on the website.";
          }
          return true;
        }),
    }),
    defineField({
      name: "travelMonth",
      title: "Month of Travel",
      type: "string",
      options: {
        list: ["January","February","March","April","May","June","July","August","September","October","November","December"].map(m => ({ title: m, value: m })),
      },
    }),
    defineField({ name: "travelYear", title: "Year of Travel", type: "number" }),
    defineField({
      name: "reviewText",
      title: "Review",
      type: "text",
      validation: (Rule) => Rule.required().min(20).error("Review must be at least 20 characters."),
    }),
    defineField({ name: "packageType", title: "Package Type", type: "string" }),
    defineField({
      name: "verified",
      title: "Verified Pilgrim",
      type: "boolean",
      initialValue: false,
      description: "Mark as verified only after confirming the customer actually travelled with us.",
    }),
  ],
  preview: {
    select: {
      title: "customerName",
      subtitle: "starRating",
      status: "status",
    },
    prepare({ title, subtitle, status }: { title: string; subtitle: number; status: string }) {
      const stars = "★".repeat(subtitle ?? 0);
      const badge = status === "approved" ? "✅" : status === "declined" ? "❌" : "⏳";
      return { title, subtitle: `${badge} ${stars} (${status ?? "pending"})` };
    },
  },
});
