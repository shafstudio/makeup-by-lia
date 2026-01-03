import { NAV_LINKS } from "@/lib/constants";
import Icon from "../ui/Icon";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-sand py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 sm:gap-8">
        <div className="flex items-center gap-2">
          <Icon
            name="brush"
            className="text-mahogany text-xl sm:text-2xl font-light"
          />
          <span className="text-mahogany font-serif text-lg sm:text-xl tracking-widest uppercase">
            Bridal Artistry
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs font-bold uppercase tracking-widest text-mountain">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-mahogany transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="hover:text-mahogany transition-colors">
            Contact
          </a>
        </nav>
        <p className="text-sm text-mountain/50 mt-2 sm:mt-4 text-center">
          © 2026 Makeup By Lia. Designed by shafstudio.
        </p>
      </div>
    </footer>
  );
}
