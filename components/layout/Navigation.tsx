"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Icon from "../ui/Icon";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrollPosition();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const, // Smooth easing curve
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-sand/20"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Icon
              name="brush"
              className={`text-3xl font-light transition-colors ${
                scrolled ? "text-mahogany" : "text-white"
              }`}
            />
            <h1
              className={`text-2xl font-serif font-medium tracking-widest uppercase transition-colors ${
                scrolled ? "text-mahogany" : "text-white"
              }`}
            >
              BY LIA MAKEUP
            </h1>
          </a>
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-widest uppercase transition-colors ${
                  scrolled
                    ? "text-mahogany/80 hover:text-mahogany"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`hidden sm:flex items-center justify-center px-8 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                scrolled
                  ? "bg-mahogany border border-mahogany text-white hover:bg-tobacco/90 hover:border-tobacco"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-mahogany"
              }`}
            >
              Enquire
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-sm transition-colors cursor-pointer ${
                scrolled
                  ? "text-mahogany hover:bg-mahogany/10"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              <Icon name={mobileMenuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      {/* Mobile Menu - Slide from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-70 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with MENU title and Close Button */}
          <div className="flex justify-between items-center p-4 border-b border-sand">
            <h2 className="text-sm font-bold tracking-widest uppercase text-mahogany">
              Menu
            </h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-mahogany hover:bg-mahogany/10 rounded-sm transition-colors cursor-pointer"
              aria-label="Close mobile menu"
            >
              <Icon name="close" />
            </button>
          </div>
          {/* Menu Items */}
          <div className="flex-1 px-6 py-8 space-y-6 overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-mahogany hover:text-tobacco transition-colors tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-8 py-2.5 bg-mahogany text-white text-xs font-bold tracking-widest uppercase hover:bg-tobacco transition-all duration-300 mt-8"
            >
              Enquire
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
