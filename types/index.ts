export interface Package {
  _id: string;
  title: string;
  slug: { current: string };
  type: "umrah" | "hajj";
  hajjType?: "shifting" | "non-shifting";
  starRating: 3 | 4 | 5;
  priceWithFlights: number;
  priceWithoutFlights: number;
  duration: string;
  durationDays: number;
  travelPeriod: string;
  departureCities: string[];
  departureMonths: string[];
  heroImage: SanityImage;
  galleryImages?: SanityImage[];
  inclusions: string[];
  exclusions: string[];
  hotelMakkah?: Hotel;
  hotelMadinah?: Hotel;
  itinerary?: ItineraryDay[];
  overview?: string;
  faqs?: FAQ[];
  seoTitle?: string;
  seoDescription?: string;
  active: boolean;
}

export interface Hotel {
  _id: string;
  name: string;
  slug: { current: string };
  location: "makkah" | "madinah";
  starRating: number;
  distanceFromHaram: string;
  description: string;
  amenities: string[];
  photos: SanityImage[];
  googleMapsLink?: string;
  roomTypes?: RoomType[];
}

export interface RoomType {
  name: string;
  description: string;
  image?: SanityImage;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  location?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  publishedAt: string;
  featuredImage: SanityImage;
  excerpt: string;
  body: PortableTextBlock[];
  categories: string[];
  readTime?: number;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Testimonial {
  _id: string;
  customerName: string;
  city: string;
  starRating: number;
  travelMonth: string;
  travelYear: number;
  reviewText: string;
  packageType: string;
  verified: boolean;
}

export interface GalleryImage {
  _id: string;
  title: string;
  category: "makkah" | "madinah" | "general" | "group";
  image: SanityImage;
  caption?: string;
  active: boolean;
}

export interface AirlinePartner {
  _id: string;
  name: string;
  logo: SanityImage;
  active: boolean;
  displayOrder: number;
}

export interface SiteSettings {
  businessName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  openingHours: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  atolNumber?: string;
  heroImages?: SanityImage[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

export interface PortableTextBlock {
  _type: string;
  _key: string;
  children?: Array<{
    _type: string;
    _key: string;
    text: string;
    marks?: string[];
  }>;
  style?: string;
  markDefs?: Array<{
    _key: string;
    _type: string;
    href?: string;
  }>;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  travelDate: string;
  packageInterest?: string;
  specialRequirements?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  packageInterest?: string;
}

export interface GroupBookingFormData {
  name: string;
  organisation: string;
  numberOfTravellers: number;
  preferredDates: string;
  contactNumber: string;
  email: string;
  additionalInfo?: string;
}

export interface DepartureCity {
  name: string;
  slug: string;
  airport: string;
  airportCode: string;
  image: string;
}

export interface PriceEstimate {
  adults: number;
  children: number;
  starRating: 3 | 4 | 5;
  duration: number;
  departureCity: string;
}
