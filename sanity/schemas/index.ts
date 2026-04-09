import { packageSchema } from "./package";
import { hotelSchema } from "./hotel";
import { blogPostSchema } from "./blogPost";
import { testimonialSchema } from "./testimonial";
import { gallerySchema } from "./gallery";
import { airlinePartnerSchema } from "./airlinePartner";
import { siteSettingsSchema } from "./siteSettings";
import { guidanceVideoSchema } from "./guidanceVideo";

export const schemaTypes = [
  packageSchema,
  hotelSchema,
  blogPostSchema,
  testimonialSchema,
  gallerySchema,
  airlinePartnerSchema,
  siteSettingsSchema,
  guidanceVideoSchema,
];
