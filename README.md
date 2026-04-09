# Al-Hidaayah Platinum Travels — Website

A complete, production-ready Next.js 14 website for Al-Hidaayah Platinum Travels — a premium UK-based Islamic travel company specialising in Umrah and Hajj packages.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom brand theme
- **Animations**: Framer Motion
- **CMS**: Sanity (headless CMS)
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API
- **Deployment**: Vercel

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials (see below).

### 3. Set Up Sanity CMS

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project (name it "Al-Hidaayah Travels")
3. Note your **Project ID** and **Dataset** (default: `production`)
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
5. Create an API token in Sanity dashboard > API > Tokens (Read + Write)
6. Add to `.env.local`:
   ```
   SANITY_API_TOKEN=your_token
   ```

### 4. Configure CORS in Sanity

In your Sanity project settings > API > CORS Origins, add:
- `http://localhost:3000`
- `https://your-production-domain.co.uk`

### 5. Set Up Resend (Email Notifications)

1. Create an account at [resend.com](https://resend.com)
2. Add and verify your domain
3. Create an API key and add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxx
   CLIENT_EMAIL=info@alhidaayahplatinumtravels.co.uk
   ```

### 6. Run the Development Server

```bash
npm run dev
```

- Website: [http://localhost:3000](http://localhost:3000)
- CMS Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

---

## Sanity CMS — What the Client Can Manage

| Content Type | Capabilities |
|---|---|
| **Packages** | Add/edit/remove Umrah & Hajj packages, prices, inclusions, itineraries |
| **Hotels** | Hotel names, photos, amenities, distance from Haram |
| **Blog Posts** | Write and publish articles with rich text and images |
| **Testimonials** | Add customer reviews with star ratings |
| **Gallery** | Upload and organise trip photos |
| **Airline Partners** | Add airline logos and reorder them |
| **Site Settings** | Phone, email, opening hours, hero images, SEO |

---

## All Pages

| Page | URL |
|---|---|
| Homepage | `/` |
| Umrah Packages | `/umrah-packages` |
| Hajj Packages | `/hajj-packages` |
| Individual Package | `/packages/[slug]` |
| 3-Star Packages | `/3-star-umrah-packages` |
| 5-Star Packages | `/5-star-umrah-packages` |
| Ramadan Umrah | `/ramadan-umrah-packages` |
| Group Umrah | `/group-umrah-packages` |
| City Pages | `/umrah-packages-from-[city]` |
| Hotels | `/hotels` |
| Hotel Detail | `/hotels/[slug]` |
| About Us | `/about` |
| Blog | `/blog` |
| Blog Post | `/blog/[slug]` |
| FAQ | `/faq` |
| Contact | `/contact` |
| Privacy Policy | `/privacy-policy` |
| Terms & Conditions | `/terms-and-conditions` |
| Refund Policy | `/refund-policy` |
| Cookie Policy | `/cookie-policy` |
| CMS Studio | `/studio` |

---

## Deployment to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Al-Hidaayah Platinum Travels"
git remote add origin https://github.com/yourusername/alhidaayah.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and import your GitHub repo
2. Add all environment variables from `.env.local` in Vercel's project settings
3. Click Deploy

### Step 3: Add Custom Domain

1. In Vercel > Settings > Domains, add your domain
2. Update DNS records as directed by Vercel
3. Update `NEXT_PUBLIC_SITE_URL` env variable to your production URL

---

## Adding the Logo

1. Save your logo as `/public/logo.png` (or `.svg`)
2. In [components/layout/Navbar.tsx](components/layout/Navbar.tsx) — replace the `AH` placeholder div with:
   ```tsx
   import Image from "next/image";
   <Image src="/logo.png" alt="Al-Hidaayah Platinum Travels" width={120} height={40} />
   ```
3. Do the same in [components/layout/Footer.tsx](components/layout/Footer.tsx)

---

## Brand Colours

| Colour | Hex | Usage |
|---|---|---|
| Deep Forest Green | `#1A5C38` | Primary buttons, headers |
| Rich Gold | `#C9A227` | Accents, prices, highlights |
| Dark Navy | `#0D1B2A` | Text, dark backgrounds |
| Warm Off-White | `#F5F0E8` | Page background |
| Deep Gold | `#B8860B` | Hover states |

---

## Contact Details (Hardcoded)

Update these in [lib/constants.ts](lib/constants.ts) if they change:

```
Phone: +966599748264
WhatsApp: +447879797589
Email: info@alhidaayahplatinumtravels.co.uk
Instagram: @alhidayah104
```
