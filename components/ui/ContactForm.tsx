"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  date: z.string().optional(),
  venue: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Execute reCAPTCHA
      if (!executeRecaptcha) {
        throw new Error("reCAPTCHA not available");
      }

      const recaptchaToken = await executeRecaptcha("contact_form");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to send message");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-widest text-mountain"
            htmlFor="name"
          >
            Name
          </label>
          <input
            {...register("name")}
            className="w-full h-12 border-b border-sand bg-transparent focus:border-tobacco focus:ring-0 transition-colors outline-none px-0 text-mahogany"
            id="name"
            placeholder="Full Name"
            type="text"
          />
          {errors.name && (
            <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-widest text-mountain"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email")}
            className="w-full h-12 border-b border-sand bg-transparent focus:border-tobacco focus:ring-0 transition-colors outline-none px-0 text-mahogany"
            id="email"
            placeholder="Email Address"
            type="email"
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-widest text-mountain"
            htmlFor="date"
          >
            Date
          </label>
          <input
            {...register("date")}
            className="w-full h-12 border-b border-sand bg-transparent focus:border-tobacco focus:ring-0 transition-colors outline-none px-0 text-mahogany"
            id="date"
            type="date"
          />
          {errors.date && (
            <p className="text-red-600 text-xs mt-1">{errors.date.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-widest text-mountain"
            htmlFor="venue"
          >
            Venue
          </label>
          <input
            {...register("venue")}
            className="w-full h-12 border-b border-sand bg-transparent focus:border-tobacco focus:ring-0 transition-colors outline-none px-0 text-mahogany"
            id="venue"
            placeholder="Venue Location"
            type="text"
          />
          {errors.venue && (
            <p className="text-red-600 text-xs mt-1">{errors.venue.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <label
          className="text-xs font-bold uppercase tracking-widest text-mountain"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          {...register("message")}
          className="w-full border-b border-sand bg-transparent focus:border-tobacco focus:ring-0 transition-colors outline-none px-0 py-4 text-mahogany resize-none"
          id="message"
          placeholder="Tell me about your plans..."
          rows={3}
        ></textarea>
        {errors.message && (
          <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* reCAPTCHA notice */}
      <p className="text-xs text-mountain/60">
        This site is protected by reCAPTCHA and the Google{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-tobacco transition-colors"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-tobacco transition-colors"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-sm">
          <p className="text-green-800 text-sm">
            Thank you for your inquiry! We've received your message and will
            respond within 24 hours.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-sm">
          <p className="text-red-800 text-sm">
            {errorMessage ||
              "Sorry, there was an error sending your message. Please try again or email us directly at hello@makeupbylia.com"}
          </p>
        </div>
      )}

      <button
        className="mt-4 w-full h-14 bg-mahogany text-white text-xs font-bold uppercase tracking-widest hover:bg-tobacco transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
