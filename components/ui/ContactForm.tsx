"use client";

import { useState } from "react";
import { ContactFormData } from "@/lib/types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    date: "",
    venue: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", date: "", venue: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-widest text-mountain"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full h-12 border-b border-sand bg-transparent focus:border-tobacco focus:ring-0 transition-colors outline-none px-0 text-mahogany"
            id="name"
            placeholder="Full Name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-widest text-mountain"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full h-12 border-b border-sand bg-transparent focus:border-tobacco focus:ring-0 transition-colors outline-none px-0 text-mahogany"
            id="email"
            placeholder="Email Address"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
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
            className="w-full h-12 border-b border-sand bg-transparent focus:border-tobacco focus:ring-0 transition-colors outline-none px-0 text-mahogany"
            id="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-widest text-mountain"
            htmlFor="venue"
          >
            Venue
          </label>
          <input
            className="w-full h-12 border-b border-sand bg-transparent focus:border-tobacco focus:ring-0 transition-colors outline-none px-0 text-mahogany"
            id="venue"
            placeholder="Venue Location"
            type="text"
            value={formData.venue}
            onChange={handleChange}
          />
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
          className="w-full border-b border-sand bg-transparent focus:border-tobacco focus:ring-0 transition-colors outline-none px-0 py-4 text-mahogany resize-none"
          id="message"
          placeholder="Tell me about your plans..."
          rows={3}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
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
