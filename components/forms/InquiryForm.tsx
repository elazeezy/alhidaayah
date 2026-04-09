"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  adults: z.number().min(1, "At least 1 adult required").max(50),
  children: z.number().min(0).max(30),
  travelDate: z.string().min(1, "Please select a preferred travel date"),
  specialRequirements: z.string().optional(),
  packageName: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface InquiryFormProps {
  packageName?: string;
  packagePrice?: number;
}

export default function InquiryForm({ packageName, packagePrice }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      adults: 2,
      children: 0,
      packageName: packageName || "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "inquiry", packageName }),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={52} className="text-primary mx-auto mb-4" />
        <h3 className="font-heading font-bold text-dark text-xl mb-2">JazakAllah Khair!</h3>
        <p className="text-gray-500 text-sm">
          Your inquiry has been received. Our team will contact you within 24 hours
          insha&rsquo;Allah.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-primary text-sm font-semibold hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Full Name *</label>
        <input
          {...register("name")}
          placeholder="Your full name"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Email Address *</label>
        <input
          {...register("email")}
          type="email"
          placeholder="your@email.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Phone Number *</label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="+44 7xxx xxx xxx"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">Adults *</label>
          <input
            {...register("adults", { valueAsNumber: true })}
            type="number"
            min={1}
            max={50}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
          />
          {errors.adults && <p className="text-red-500 text-xs mt-1">{errors.adults.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">Children</label>
          <input
            {...register("children", { valueAsNumber: true })}
            type="number"
            min={0}
            max={30}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Preferred Travel Date *</label>
        <select
          {...register("travelDate")}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
        >
          <option value="">Select month</option>
          {["August 2026", "September 2026", "October 2026", "November 2026", "December 2026", "January 2027", "February 2027", "March 2027 (Ramadan)", "April 2027"].map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        {errors.travelDate && <p className="text-red-500 text-xs mt-1">{errors.travelDate.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Special Requirements</label>
        <textarea
          {...register("specialRequirements")}
          rows={3}
          placeholder="Wheelchair access, dietary needs, room preferences..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white resize-none"
        />
      </div>

      {packageName && (
        <input type="hidden" {...register("packageName")} value={packageName} />
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Inquiry
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        By submitting, you agree to our Privacy Policy. We will respond within 24 hours insha&rsquo;Allah.
      </p>
    </form>
  );
}
