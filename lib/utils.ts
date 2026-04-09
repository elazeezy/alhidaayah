import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getHijriDate(): string {
  try {
    const today = new Date();
    const hijriFormatter = new Intl.DateTimeFormat("en-TN-u-ca-islamic-umalqura", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return hijriFormatter.format(today);
  } catch {
    // Fallback calculation if Intl Islamic calendar is not supported
    const gregorianDate = new Date();
    const jd = Math.floor(gregorianDate.getTime() / 86400000) + 2440587.5;
    const l = Math.floor(jd) - 1948440 + 10632;
    const n = Math.floor((l - 1) / 10631);
    const l2 = l - 10631 * n + 354;
    const j = Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) +
      Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
    const l3 = l2 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
      Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
    const month = Math.floor((24 * l3) / 709);
    const day = l3 - Math.floor((709 * month) / 24);
    const year = 30 * n + j - 30;

    const hijriMonths = [
      "Muharram", "Safar", "Rabi' al-Awwal", "Rabi' al-Thani",
      "Jumada al-Ula", "Jumada al-Akhirah", "Rajab", "Sha'ban",
      "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah",
    ];

    return `${day} ${hijriMonths[month - 1]} ${year} AH`;
  }
}

export function getRamadanCountdown(): { days: number; hours: number; minutes: number; seconds: number } | null {
  // Next Ramadan 2026 - approximately 1 March 2026
  const nextRamadan = new Date("2026-03-01T00:00:00Z");
  const now = new Date();
  const diff = nextRamadan.getTime() - now.getTime();

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export function estimatePrice(
  adults: number,
  children: number,
  starRating: number,
  durationDays: number,
): number {
  const basePrices: Record<number, number> = {
    3: 1900,
    4: 2000,
    5: 2100,
  };

  const basePrice = basePrices[starRating] || 1900;
  const durationMultiplier = durationDays === 10 ? 1 : durationDays === 7 ? 0.75 : durationDays === 14 ? 1.3 : 1.8;
  const childDiscount = 0.75;

  const adultTotal = adults * basePrice * durationMultiplier;
  const childTotal = children * basePrice * durationMultiplier * childDiscount;

  return Math.round(adultTotal + childTotal);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, "") + "...";
}

export function readingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getStarLabel(rating: number): string {
  const labels: Record<number, string> = {
    3: "3-Star",
    4: "4-Star",
    5: "5-Star",
  };
  return labels[rating] || `${rating}-Star`;
}
