"use client";

import { useEffect, useRef } from "react";
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
          poster="https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=1920"
          onError={(e) => {
            console.warn("Video failed to load, using poster image");
            e.currentTarget.style.display = "none";
          }}
        >
          {/* Primary source - Pexels HD video */}
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Fallback background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
      </div>
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
        <div className="flex flex-col items-center gap-8 animate-fade-in-up max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 border border-white/40 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm backdrop-blur-sm">
            Luxury Bridal Services
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-tight tracking-tight">
            Effortless Beauty
            <br />
            <span className="italic font-normal">For Your Day</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-lg mx-auto">
            Enhancing your natural radiance with a timeless, elegant aesthetic
            tailored specifically to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
