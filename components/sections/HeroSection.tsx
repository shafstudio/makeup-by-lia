"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import BookingButton from "../ui/BookingButton";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn("Video autoplay failed:", error);
      });
    }
  }, []);

  // Container animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  // Child animation variants for upward slide
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const, // Smooth easing curve
      },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Video background - Bridal makeup theme */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/assets/images/hero-poster.jpg"
          onError={(e) => {
            console.warn("Video failed to load, using poster image");
            e.currentTarget.style.display = "none";
          }}
        >
          {/* Local video source - add your video file to /public/assets/videos/ */}
          <source src="/assets/videos/sample-hero-video.mp4" type="video/mp4" />
        </video>
        {/* Fallback background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/hero-poster.jpg')",
          }}
        />
      </div>
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 max-w-4xl mx-auto"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1.5 border border-white/40 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm backdrop-blur-sm"
          >
            Luxury Makeup Artist
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-tight tracking-tight"
          >
            Effortless Beauty
            <br />
            <span className="italic font-normal">For Your Day</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-lg mx-auto"
          >
            Enhancing your natural radiance with a timeless, elegant aesthetic
            and an enjoyable, personalised experience tailored to you.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 pt-8"
          >
            <BookingButton className="min-w-45 cursor-pointer">
              Book Your Date
            </BookingButton>
            <Button
              href="#services"
              variant="outline"
              className="min-w-45 cursor-pointer"
            >
              Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
