import { NAV_LINKS } from "@/lib/constants";
import Icon from "../ui/Icon";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-sand py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
        <div className="flex items-center gap-2">
          <Icon name="brush" className="text-mahogany text-2xl font-light" />
          <span className="text-mahogany font-serif text-xl tracking-widest uppercase">
            Bridal Artistry
          </span>
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-mountain">
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
        </div>
        <p className="text-xs text-mountain/50 mt-4">
          © 2023 Bridal Artistry. Design by Minimalist.
        </p>
      </div>
    </footer>
  );
}
