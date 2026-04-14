// Shared animation variants — slow, beautiful, attention-driving
import type { Variants } from "framer-motion";

// Easing curve — smooth deceleration
export const ease = [0.22, 1, 0.36, 1] as const;
export const easeSoft = [0.25, 0.46, 0.45, 0.94] as const;

// Zoom out — for headings and subtitles (starts zoomed in, eases to normal)
export const fadeUp: Variants = {
  hidden: { opacity: 0, scale: 1.12 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease },
  },
};

// Zoom out slow — for body text and descriptions (very gentle)
export const fadeUpSlow: Variants = {
  hidden: { opacity: 0, scale: 1.07 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: easeSoft },
  },
};

// Card zoom out — starts slightly zoomed in, feels premium
export const cardReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease },
  },
};

// Zoom out from left — starts zoomed in, eases to normal
export const slideInLeft: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease },
  },
};

// Zoom out from right — starts zoomed in, eases to normal
export const slideInRight: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease },
  },
};

// Container — staggers children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

// Container — faster stagger for grids
export const staggerGrid: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

// Scale in — for icons and badges
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
};

// Viewport settings — trigger slightly before element enters
export const viewport = { once: true, margin: "-60px" };
export const viewportEarly = { once: true, margin: "-20px" };
