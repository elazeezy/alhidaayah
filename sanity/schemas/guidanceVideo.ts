import { defineField, defineType } from "sanity";

export const guidanceVideoSchema = defineType({
  name: "guidanceVideo",
  title: "Pilgrimage Guidance Videos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Video Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      placeholder: "e.g. How to Perform Tawaf — Step by Step",
    }),
    defineField({
      name: "guidanceType",
      title: "Guidance Type",
      type: "string",
      options: {
        list: [
          { title: "Umrah", value: "umrah" },
          { title: "Hajj", value: "hajj" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "step",
      title: "Step Number",
      type: "number",
      description: "Order this video appears in the guidance series (1, 2, 3...)",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Brief description of what this video covers",
    }),
    defineField({
      name: "videoType",
      title: "Video Source",
      type: "string",
      options: {
        list: [
          { title: "YouTube Link", value: "youtube" },
          { title: "Upload Video File", value: "file" },
        ],
        layout: "radio",
      },
      initialValue: "youtube",
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
      description: "Paste the full YouTube video URL (e.g. https://www.youtube.com/watch?v=XXXXX)",
      hidden: ({ document }) => document?.videoType !== "youtube",
    }),
    defineField({
      name: "videoFile",
      title: "Video File",
      type: "file",
      options: { accept: "video/*" },
      description: "Upload an MP4, MOV, or WebM video file",
      hidden: ({ document }) => document?.videoType !== "file",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
      description: "Cover image shown before the video plays",
    }),
    defineField({
      name: "durationMinutes",
      title: "Video Duration (minutes)",
      type: "number",
    }),
    defineField({
      name: "active",
      title: "Published",
      type: "boolean",
      initialValue: true,
      description: "Uncheck to hide this video from the website",
    }),
  ],
  orderings: [
    {
      title: "Step Order",
      name: "stepAsc",
      by: [{ field: "step", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      step: "step",
      guidanceType: "guidanceType",
      media: "thumbnail",
    },
    prepare({ title, step, guidanceType, media }: { title: string; step: number; guidanceType: string; media: unknown }) {
      return {
        title,
        subtitle: `${guidanceType?.toUpperCase() ?? ""} — Step ${step ?? "?"}`,
        media,
      };
    },
  },
});
