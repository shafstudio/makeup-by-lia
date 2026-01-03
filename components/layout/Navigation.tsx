"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import Icon from "../ui/Icon";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Icon name="brush" className="text-white text-3xl font-light" />
            <h1 className="text-2xl font-serif font-medium tracking-widest text-white uppercase">
              MAKEUP BY LIA
            </h1>
          </a>
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors tracking-widest uppercase text-xs"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:flex items-center justify-center px-8 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-mahogany transition-all duration-300"
            >
              Inquire
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-sm transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Icon name={mobileMenuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-sand">
          <div className="px-4 py-6 space-y-4">
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
              className="block w-full text-center px-8 py-2.5 bg-mahogany text-white text-xs font-bold tracking-widest uppercase hover:bg-tobacco transition-all duration-300"
            >
              Inquire
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
