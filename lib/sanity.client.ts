import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: object) {
  return builder.image(source);
}

// Queries
export const packagesQuery = `*[_type == "package" && active == true] | order(_createdAt desc) {
  _id,
  title,
  slug,
  type,
  hajjType,
  starRating,
  priceWithFlights,
  priceWithoutFlights,
  duration,
  durationDays,
  travelPeriod,
  departureCities,
  departureMonths,
  heroImage,
  inclusions,
  exclusions,
  active
}`;

export const packageBySlugQuery = `*[_type == "package" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  type,
  hajjType,
  starRating,
  priceWithFlights,
  priceWithoutFlights,
  duration,
  durationDays,
  travelPeriod,
  departureCities,
  departureMonths,
  heroImage,
  galleryImages,
  inclusions,
  exclusions,
  itinerary,
  overview,
  faqs,
  hotelMakkah->{name, starRating, distanceFromHaram, description, amenities, photos},
  hotelMadinah->{name, starRating, distanceFromHaram, description, amenities, photos},
  seoTitle,
  seoDescription,
  active
}`;

export const hotelsQuery = `*[_type == "hotel"] | order(starRating desc) {
  _id,
  name,
  slug,
  location,
  starRating,
  distanceFromHaram,
  description,
  amenities,
  photos,
  googleMapsLink
}`;

export const hotelBySlugQuery = `*[_type == "hotel" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  location,
  starRating,
  distanceFromHaram,
  description,
  amenities,
  photos,
  googleMapsLink,
  roomTypes
}`;

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  publishedAt,
  featuredImage,
  excerpt,
  categories,
  readTime,
  seoTitle,
  seoDescription
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author,
  publishedAt,
  featuredImage,
  excerpt,
  body,
  categories,
  readTime,
  seoTitle,
  seoDescription
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  customerName,
  city,
  starRating,
  travelMonth,
  travelYear,
  reviewText,
  packageType,
  verified
}`;

export const galleryQuery = `*[_type == "galleryImage" && active == true] | order(_createdAt desc) {
  _id,
  title,
  category,
  image,
  caption,
  active
}`;

export const airlinePartnersQuery = `*[_type == "airlinePartner" && active == true] | order(displayOrder asc) {
  _id,
  name,
  logo,
  active,
  displayOrder
}`;

export const guidanceVideosQuery = `*[_type == "guidanceVideo" && active == true] | order(step asc) {
  _id,
  title,
  guidanceType,
  step,
  description,
  videoType,
  youtubeUrl,
  videoFile,
  thumbnail,
  durationMinutes,
  active
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  businessName,
  tagline,
  phone,
  whatsapp,
  email,
  address,
  openingHours,
  instagram,
  facebook,
  twitter,
  atolNumber,
  heroImages,
  seoTitle,
  seoDescription
}`;
