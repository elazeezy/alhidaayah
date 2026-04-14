import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "g7z4q7z1",
  dataset: dataset || "production",
  name: "al-hidaayah-studio",
  title: "Al-Hidaayah Platinum Travels — CMS",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Al-Hidaayah CMS")
          .items([
            S.listItem()
              .title("Packages")
              .child(S.documentTypeList("package").title("All Packages")),
            S.listItem()
              .title("Hotels")
              .child(S.documentTypeList("hotel").title("All Hotels")),
            S.listItem()
              .title("Blog Posts")
              .child(S.documentTypeList("blogPost").title("All Posts")),
            S.listItem()
              .title("Testimonials")
              .child(S.documentTypeList("testimonial").title("All Testimonials")),
            S.listItem()
              .title("Gallery")
              .child(S.documentTypeList("galleryImage").title("Gallery")),
            S.listItem()
              .title("Airline Partners")
              .child(S.documentTypeList("airlinePartner").title("Airline Partners")),
            S.divider(),
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
